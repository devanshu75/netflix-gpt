// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqf2173iP4gS2aGIj0BaLhtT2LV7Dhf2A",
  authDomain: "netflixgpt-e5526.firebaseapp.com",
  projectId: "netflixgpt-e5526",
  storageBucket: "netflixgpt-e5526.firebasestorage.app",
  messagingSenderId: "600850879986",
  appId: "1:600850879986:web:9272d92845276c6942c76b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
