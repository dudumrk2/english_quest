import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loginWithGoogle: (credential: string) => void;
    loginDemo: () => void;
    logout: () => void;
}

export const useAuth = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            // Login with Google
            loginWithGoogle: (credential: string) => {
                try {
                    // Decode JWT token to get user info
                    const base64Url = credential.split('.')[1];
                    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    const jsonPayload = decodeURIComponent(
                        atob(base64)
                            .split('')
                            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                            .join('')
                    );
                    const payload = JSON.parse(jsonPayload);

                    set({
                        user: {
                            email: payload.email,
                            name: payload.name,
                            picture: payload.picture,
                        },
                        isAuthenticated: true,
                    });
                } catch (error) {
                    console.error('Failed to decode credential:', error);
                }
            },

            // Demo mode login
            loginDemo: () => {
                set({
                    user: {
                        email: 'demo@nadav-english.com',
                        name: 'Demo User',
                        picture: undefined,
                    },
                    isAuthenticated: true,
                });
            },

            // Logout
            logout: () => {
                set({
                    user: null,
                    isAuthenticated: false,
                });
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);
