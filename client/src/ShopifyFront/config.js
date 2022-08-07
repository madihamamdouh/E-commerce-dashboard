import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTAPbW7JImStkahHy_gSfJ2nw7UdIk5QI",
  authDomain: "blog-56c04.firebaseapp.com",
  projectId: "blog-56c04",
  storageBucket: "blog-56c04.appspot.com",
  messagingSenderId: "757428737599",
  appId: "1:757428737599:web:cef34a95829a1278da8a8a",
  measurementId: "G-HLHTYVF7ZM"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default app;
