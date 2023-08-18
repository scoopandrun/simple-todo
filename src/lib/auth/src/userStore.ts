import { writable } from "svelte/store";

import { auth } from "$lib/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";

function userStore() {
  // Rendu sur le serveur
  if (!auth || !globalThis.window) {
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();
