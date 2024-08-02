import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmO_Ly0bPPWBBOAI5GFV_aIr46PSnsKgM",
  authDomain: "transaction-ac5cc.firebaseapp.com",
  projectId: "transaction-ac5cc",
  storageBucket: "transaction-ac5cc.appspot.com",
  messagingSenderId: "161180574916",
  appId: "1:161180574916:web:9386952bc2d8790acdd591"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);