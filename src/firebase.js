import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCpdNMRKc0XvHuXcwtOQYTy7LaP4HYh750",
    authDomain: "xprsn-58800.firebaseapp.com",
    projectId: "xprsn-58800",
    storageBucket: "xprsn-58800.appspot.com",
    messagingSenderId: "939220999366",
    appId: "1:939220999366:web:14a1579f6da98894488bc7",
    measurementId: "G-T4LPBJPHY6"
  };

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

