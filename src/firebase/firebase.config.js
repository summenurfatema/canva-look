// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiC7dQG_uCBpc6vIrRToY2Xkcc77fRM6k",
    authDomain: "canvalook.firebaseapp.com",
    projectId: "canvalook",
    storageBucket: "canvalook.appspot.com",
    messagingSenderId: "351548051685",
    appId: "1:351548051685:web:27a55a93591edb3e2b040c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;