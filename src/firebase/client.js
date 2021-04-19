import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.APY_KEY,
  authDomain: "test-lim.firebaseapp.com",
  projectId: "test-lim",
  storageBucket: "test-lim.appspot.com",
  messagingSenderId: "914731159231",
  appId: "1:914731159231:web:db818f3cfe0502753ec00a"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);