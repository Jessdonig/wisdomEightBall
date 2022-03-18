// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGNsBMKyhKzm1YvKe_5s91UW-oNAbx8Jw",
  authDomain: "capstone-open-arms.firebaseapp.com",
  projectId: "capstone-open-arms",
  storageBucket: "capstone-open-arms.appspot.com",
  messagingSenderId: "675039248237",
  appId: "1:675039248237:web:9c0a23d7ec253c1abfe464",
  measurementId: "G-W10NPGLXWM"
};

export const fireDB = app.firestore();
// Initialize Firebase
export default app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);