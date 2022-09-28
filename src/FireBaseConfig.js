// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5luBsmp0j3e7_l9NIqVaPlvIs8PsNuek",
  authDomain: "rescate-informatico.firebaseapp.com",
  projectId: "rescate-informatico",
  storageBucket: "rescate-informatico.appspot.com",
  messagingSenderId: "787894535300",
  appId: "1:787894535300:web:9adaffbac007025b376ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

