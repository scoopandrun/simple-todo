// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  initializeFirestore,
  persistentLocalCache,
  connectFirestoreEmulator,
} from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCQ0BhkMRPia4tIz7UmNw-V0dAlEhPMOdI",
  authDomain: "simple-todo-5c554.firebaseapp.com",
  projectId: "simple-todo-5c554",
  storageBucket: "simple-todo-5c554.appspot.com",
  messagingSenderId: "924550203762",
  appId: "1:924550203762:web:dc8682fc2c80c2996735eb",
  measurementId: "G-N8H4LKJ38X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = initializeFirestore(app, {
  localCache: persistentLocalCache(/*settings*/ {}),
});
connectFirestoreEmulator(firestore, "127.0.0.1", 8080);

const auth = getAuth(app);
connectAuthEmulator(auth, "http://127.0.0.1:9099");

const functions = getFunctions(app);
connectFunctionsEmulator(functions, "127.0.0.1", 5001);

const storage = getStorage(app);
connectStorageEmulator(storage, "127.0.0.1", 9199);

const analytics = getAnalytics(app);

export { app, firestore, auth, analytics };
