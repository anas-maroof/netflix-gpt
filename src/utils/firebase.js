// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ8ukzrgWj9j6hUqg0i3PiHGEOZwDACJM",
  authDomain: "netflix-gpt-d84d0.firebaseapp.com",
  projectId: "netflix-gpt-d84d0",
  storageBucket: "netflix-gpt-d84d0.firebasestorage.app",
  messagingSenderId: "1039419896459",
  appId: "1:1039419896459:web:77c67557c316da4ea99a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();