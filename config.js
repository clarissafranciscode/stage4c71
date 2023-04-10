import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCVy70vPHBaWPG9CNloXrm9IShQaYVgZsw",
  authDomain: "e-ride-s4-33da6.firebaseapp.com",
  projectId: "e-ride-s4-33da6",
  storageBucket: "e-ride-s4-33da6.appspot.com",
  messagingSenderId: "885059508118",
  appId: "1:885059508118:web:bafd8ba95110bea1ef6fb7"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
