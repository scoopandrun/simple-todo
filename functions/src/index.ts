/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import { initializeApp } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

import { setGlobalOptions } from "firebase-functions/v2";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { beforeUserCreated, HttpsError } from "firebase-functions/v2/identity";

initializeApp({
  storageBucket: "simple-todo-5c554.appspot.com",
});

setGlobalOptions({ region: "europe-west1" });

const bucket = getStorage().bucket();

/**
 * Ajouter le timestamp de la création.
 */
export const addCreatedAtTimestamp = onDocumentCreated(
  "/todos/{todoId}",
  (event) => {
    const snapshot = event.data;

    if (!snapshot) return;

    return snapshot.ref.set(
      { createdAt: snapshot.createTime },
      { merge: true }
    );
  }
);

/**
 * N'autoriser que des utilisateurs spécifiques.
 */
export const allowSpecificUsersToSignUp = beforeUserCreated(async (event) => {
  const allowedUsers: string[] = JSON.parse(
    (await bucket.file("admin/allowedUsers.json").download()).toString()
  );

  const user = event.data;

  if (!allowedUsers.includes(user.email || "")) {
    console.warn(
      "Cloud Function",
      "allowSpecificUsersToSignUp",
      "rejected sign up",
      user.email
    );
    throw new HttpsError("permission-denied", "Registration not allowed");
  }
});
