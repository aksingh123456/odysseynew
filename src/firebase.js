import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyA0EmuJyFzldfP36YF5BNON8OFNrr2WX5g",
  authDomain: "odyssey-53141.firebaseapp.com",
  projectId: "odyssey-53141",
  storageBucket: "odyssey-53141.firebasestorage.app",
  messagingSenderId: "412702369401",
  appId: "1:412702369401:web:8c12c60022bf99fee116a8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
