// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbUjm9e9JpdwJvdNOlt38Ox3E1JatHvko",
  authDomain: "elva-f0017.firebaseapp.com",
  projectId: "elva-f0017",
  storageBucket: "elva-f0017.firebasestorage.app",
  messagingSenderId: "1075363485210",
  appId: "1:1075363485210:web:ce8ab5f9d30d38932e23a3",
  measurementId: "G-080VPYW8KV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
