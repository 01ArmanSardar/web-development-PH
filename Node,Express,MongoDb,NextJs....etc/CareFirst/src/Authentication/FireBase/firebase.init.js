// Import the functions you need from the SDKs you need
import { initializeApp ,getAuth,} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain:  import.meta.env.VITE_apiKeyauthDomain,
  projectId:  import.meta.env.VITE_apiKeyprojectId,
  storageBucket:  import.meta.env.VITE_apiKeystorageBucket,
  messagingSenderId: import.meta.env.VITE_apiKeymessagingSenderId,
  appId:  import.meta.env.VITE_apiKeyappId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);