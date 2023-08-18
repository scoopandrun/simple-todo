// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ0BhkMRPia4tIz7UmNw-V0dAlEhPMOdI",
  authDomain: "simple-todo-5c554.firebaseapp.com",
  projectId: "simple-todo-5c554",
  storageBucket: "simple-todo-5c554.appspot.com",
  messagingSenderId: "924550203762",
  appId: "1:924550203762:web:dc8682fc2c80c2996735eb",
  measurementId: "G-N8H4LKJ38X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache(/*settings*/ {}),
});
export const auth = getAuth(app);
