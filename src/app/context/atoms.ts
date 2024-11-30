import { atom } from "jotai";

// Atom to store the current user's information
export const userAtom = atom<{userName: string} | null>(null);

// Atom to track whether "Rmember Me" is enabled
export const rememberMeAtom  = atom(false);