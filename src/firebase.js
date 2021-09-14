import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "***REMOVED***",
    authDomain: "xprsn-58800.firebaseapp.com",
    projectId: "xprsn-58800",
    storageBucket: "xprsn-58800.appspot.com",
    messagingSenderId: "***REMOVED***",
    appId: "***REMOVED***",
    measurementId: "G-T4LPBJPHY6"
  };

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

