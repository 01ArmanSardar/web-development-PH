// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD59KT5CrfEeuh29Gb-Ba01Keu5rnA3wzY",
  authDomain: "usermanagement-9aa32.firebaseapp.com",
  projectId: "usermanagement-9aa32",
  storageBucket: "usermanagement-9aa32.firebasestorage.app",
  messagingSenderId: "992921118928",
  appId: "1:992921118928:web:383954c31b6c41a9f296d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth