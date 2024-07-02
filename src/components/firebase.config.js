// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAExibK3u1iBYSJ5wGi0NN7cAtaDj6BoYI",
  authDomain: "otp-verification-6f6d9.firebaseapp.com",
  projectId: "otp-verification-6f6d9",
  storageBucket: "otp-verification-6f6d9.appspot.com",
  messagingSenderId: "273443265690",
  appId: "1:273443265690:web:ddde62ce41871dfdd5d323",
  measurementId: "G-5EFVZQNJGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)