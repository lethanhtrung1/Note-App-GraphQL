// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfXHTrBCOhqQ-z6rRYeVW0zjLG9VetTek",
  authDomain: "note-app-d8819.firebaseapp.com",
  projectId: "note-app-d8819",
  storageBucket: "note-app-d8819.appspot.com",
  messagingSenderId: "312576938246",
  appId: "1:312576938246:web:a146b34c9d12d761688e87",
  measurementId: "G-HTB3E91MEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);