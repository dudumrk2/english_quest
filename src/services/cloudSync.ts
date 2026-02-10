import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { AppState } from '../types';

export interface CloudData {
    state: AppState;
    lastSyncedAt: string;
    deviceInfo: string;
}

/**
 * Save the user's app state to Firestore.
 * Document path: users/{sanitizedEmail}
 */
export async function saveToCloud(userEmail: string, state: AppState): Promise<void> {
    const docRef = doc(db, 'users', sanitizeEmail(userEmail));
    const cloudData: CloudData = {
        state,
        lastSyncedAt: new Date().toISOString(),
        deviceInfo: navigator.userAgent,
    };
    await setDoc(docRef, cloudData);
}

/**
 * Load the user's app state from Firestore.
 * Returns null if no cloud data exists.
 */
export async function loadFromCloud(userEmail: string): Promise<CloudData | null> {
    const docRef = doc(db, 'users', sanitizeEmail(userEmail));
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
        return snapshot.data() as CloudData;
    }
    return null;
}

/**
 * Sanitize email for use as a Firestore document ID.
 * Firestore doc IDs cannot contain '/' so we replace dots and @ signs.
 */
function sanitizeEmail(email: string): string {
    return email.replace(/[.@]/g, '_');
}
