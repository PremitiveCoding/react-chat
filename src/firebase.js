import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT7_meKWfbbvYlWuC8nqb2rIQTAcRDV5Q",
  authDomain: "react-chat-f5395.firebaseapp.com",
  projectId: "react-chat-f5395",
  storageBucket: "react-chat-f5395.appspot.com",
  messagingSenderId: "1088262060241",
  appId: "1:1088262060241:web:663c0e347d3a912d98adf0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
