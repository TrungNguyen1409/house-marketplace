import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWwkijOo4sf6_-tgBQAFCwgLEtvCm15Qo",
  authDomain: "house-marketplace-app-d34f6.firebaseapp.com",
  projectId: "house-marketplace-app-d34f6",
  storageBucket: "house-marketplace-app-d34f6.appspot.com",
  messagingSenderId: "1027971710238",
  appId: "1:1027971710238:web:f480dcf43d1d5b7a881d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()