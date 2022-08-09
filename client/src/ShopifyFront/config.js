// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFblVQ3mwqODW8lwIsX9IRiO6FgJgx5uc",
  authDomain: "souqdotcom-d22e2.firebaseapp.com",
  projectId: "souqdotcom-d22e2",
  storageBucket: "souqdotcom-d22e2.appspot.com",
  messagingSenderId: "234890551326",
  appId: "1:234890551326:web:3c40e23fe7ad936af40e0f",
  measurementId: "G-F7H8HGG2L0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
