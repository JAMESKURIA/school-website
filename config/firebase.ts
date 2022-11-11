// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwLVHdox2Z68K62uNYQ-XN9jKknRwz258",
  authDomain: "voting-c89b6.firebaseapp.com",
  projectId: "voting-c89b6",
  storageBucket: "voting-c89b6.appspot.com",
  messagingSenderId: "389585486031",
  appId: "1:389585486031:web:34fa13e8e4dcf148a0b7ba",
  measurementId: "G-VJQGTFVCLG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
