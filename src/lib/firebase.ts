// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa7b1ZIkN74Q68pGk0QtJjnZ9nI8r_aBg",
  authDomain: "e-commerce-website-next-fc04e.firebaseapp.com",
  projectId: "e-commerce-website-next-fc04e",
  storageBucket: "e-commerce-website-next-fc04e.appspot.com",
  messagingSenderId: "253210742487",
  appId: "1:253210742487:web:dee02458c89351b250ea92",
  measurementId: "G-X84XYDN8PY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);