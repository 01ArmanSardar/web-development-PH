// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0O2bnBX3UyccgbFYExlIHouNxsO4cxwk",
  authDomain: "coffepracticeproject.firebaseapp.com",
  projectId: "coffepracticeproject",
  storageBucket: "coffepracticeproject.firebasestorage.app",
  messagingSenderId: "684023136397",
  appId: "1:684023136397:web:8afb2a1beba7cf883ba2c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth