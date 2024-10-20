// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZdPAJ6Svl0BQRKoh9AchTnRSDuFn0l30",
  authDomain: "vite-contact-dedb7.firebaseapp.com",
  projectId: "vite-contact-dedb7",
  storageBucket: "vite-contact-dedb7.appspot.com",
  messagingSenderId: "473288136722",
  appId: "1:473288136722:web:fdb70411fa497b4faee0cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app);