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

function decodeJwtPayload(token: string): Record<string, any> {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return JSON.parse(jsonPayload);
}

export const useAuth = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            loginWithGoogle: (credential: string) => {
                try {
                    const payload = decodeJwtPayload(credential);
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
