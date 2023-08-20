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
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "firebase/app-check";
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
const auth = getAuth(app);
const functions = getFunctions(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(
    "6Lf_Rb8nAAAAABWKq8MV3g5Rzo_b3QN0N_0N4S6U"
  ),
  isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
});

if (["localhost", "127.0.0.1"].includes(window.location.hostname)) {
  connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
  connectStorageEmulator(storage, "127.0.0.1", 9199);
}

export { app, firestore, auth, analytics };
