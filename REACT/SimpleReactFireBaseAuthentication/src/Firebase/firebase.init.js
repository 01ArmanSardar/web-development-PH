// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV3h4M26e5iSjH6VM57zrTZPeIPySw7bc",
  authDomain: "simple-firebase-authenti-f18b9.firebaseapp.com",
  projectId: "simple-firebase-authenti-f18b9",
  storageBucket: "simple-firebase-authenti-f18b9.firebasestorage.app",
  messagingSenderId: "428020488971",
  appId: "1:428020488971:web:4f68243dbf3ea41b3b200e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app