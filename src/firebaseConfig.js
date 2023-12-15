import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJYJgSNcKp913ClAKcSpBkJpvL2r0TROw",
    authDomain: "typing-test-b5bfd.firebaseapp.com",
    projectId: "typing-test-b5bfd",
    storageBucket: "typing-test-b5bfd.appspot.com",
    messagingSenderId: "307889313430",
    appId: "1:307889313430:web:4d1b7d7f9030e155df94b7",
    measurementId: "G-DMQ26CSGJ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db};