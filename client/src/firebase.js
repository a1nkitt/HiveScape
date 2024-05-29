// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hive-scape.firebaseapp.com",
  projectId: "hive-scape",
  storageBucket: "hive-scape.appspot.com",
  messagingSenderId: "86434256116",
  appId: "1:86434256116:web:e4f6e16f2576052556baa1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
