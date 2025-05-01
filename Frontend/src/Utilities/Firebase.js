// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOfrbAwsmVt9nloMNumUnYLFnRC7lkTP4",
  authDomain: "learn-firebase-6b8ab.firebaseapp.com",
  projectId: "learn-firebase-6b8ab",
  storageBucket: "learn-firebase-6b8ab.appspot.com",
  messagingSenderId: "832163353779",
  appId: "1:832163353779:web:cca1391ec8750fde994cc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);