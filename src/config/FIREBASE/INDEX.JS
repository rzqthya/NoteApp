import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyB6BIhQHoXH16tBQW9Wg0a1VPHzdasAnso",
    authDomain: "noteapp-5f904.firebaseapp.com",
    databaseURL: "https://noteapp-5f904-default-rtdb.firebaseio.com",
    projectId: "noteapp-5f904",
    storageBucket: "noteapp-5f904.appspot.com",
    messagingSenderId: "484723081416",
    appId: "1:484723081416:web:82b2454366d0efde71a5fd"
});

const FIREBASE = firebase;

export default FIREBASE;

