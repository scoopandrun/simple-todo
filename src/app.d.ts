import type { FieldValue } from "firebase/firestore";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  type ValueOf<T> = T[keyof T];

  type Todo = {
    id: string | null;
    users: string[];
    createdAt?: FieldValue;
    updatedAt?: FieldValue;
    title: string;
    details: string;
    completed: boolean;
    color: string;
    tags: string[];
  };
}

export {};
