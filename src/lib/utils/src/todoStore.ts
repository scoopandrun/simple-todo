import { writable, get } from "svelte/store";
import { v4 as uuid } from "uuid";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  deleteDoc,
  where,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

import { db } from "$lib/firebase";

import { mapify } from "$lib/utils";
import { user as userStore } from "$lib/auth";

const { subscribe, set, update } = writable<Map<Todo["id"], Todo>>(
  new Map(),
  (set) => {
    let unsubscribe: () => void = () => {};

    userStore.subscribe((user) => {
      if (user) {
        const q = query(
          collection(db, "todos"),
          where("users", "array-contains", user.uid)
        );

        unsubscribe = onSnapshot(q, (snapshot) => {
          const todos: Todo[] = [];
          snapshot.forEach((doc) =>
            todos.push({ id: doc.id, ...doc.data() } as Todo)
          );
          set(mapify(todos));
        });
      }
    });

    return unsubscribe; // unsubscribe firestore
  }
);

/**
 * Créer un nouvel objet Todo.
 */
function blank(): Todo {
  return {
    id: null,
    users: [get(userStore)?.uid || ""],
    title: "",
    details: "",
    completed: false,
    color: "#ffffff",
    tags: [],
  };
}

/**
 * Enregistrer une tâche (nouvelle ou existante).
 */
function save(todo: Todo) {
  if (!todo.id) {
    todo.id = uuid();
  }

  todo = {
    ...blank(),
    ...todo,
    updatedAt: serverTimestamp(),
  };

  update((todos) => {
    todos.set(todo.id, todo);
    return todos;
  });

  setDoc(doc(db, "todos", todo.id as string), todo);
}

/**
 * Supprimer une tâche.
 *
 * @param id Identifiant de la tâche.
 */
function remove(id: Todo["id"]): void {
  if (!id) {
    throw new Error("remove(id): L'id ne peut pas être null");
  }

  update((todos) => {
    todos.delete(id);
    return todos;
  });

  deleteDoc(doc(db, "todos", id));
}

/**
 * Suppression des tâches du stockage local.
 */
function clearLocal() {
  set(new Map());
}

/**
 * Store permettant la gestion des objets Todo (tâches).
 */
export const todoStore = {
  subscribe,
  new: blank,
  save,
  remove,
  clearLocal,
};
