// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: "alta-8b420.firebaseapp.com",
  projectId: "alta-8b420",
  storageBucket: "alta-8b420.appspot.com",
  messagingSenderId: "973330435802",
  appId: "1:973330435802:web:234c93cff3bf01bd525fe3",
  measurementId: "G-1VN33BP9HF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
