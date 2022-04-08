// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIvMI3qwJ399vP1nqANT5aLb9WEyhZm6Q",
    authDomain: "email-password-auth-cbf0d.firebaseapp.com",
    projectId: "email-password-auth-cbf0d",
    storageBucket: "email-password-auth-cbf0d.appspot.com",
    messagingSenderId: "417325233382",
    appId: "1:417325233382:web:de4e8fb13e22072be77727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;