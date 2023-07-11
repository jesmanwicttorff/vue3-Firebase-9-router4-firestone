// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-KwJw-G7CztR_2hAhVWp0ynPEUQ7A6Ck",
  authDomain: "vue3-2023-bb892.firebaseapp.com",
  projectId: "vue3-2023-bb892",
  storageBucket: "vue3-2023-bb892.appspot.com",
  messagingSenderId: "934638702306",
  appId: "1:934638702306:web:0bcf2bd103acd07f2098bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {auth}