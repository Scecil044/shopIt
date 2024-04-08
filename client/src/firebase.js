// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "primepick01-77192.firebaseapp.com",
  projectId: "primepick01-77192",
  storageBucket: "primepick01-77192.appspot.com",
  messagingSenderId: "951349279637",
  appId: "1:951349279637:web:5624a965aa825f565f149c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
