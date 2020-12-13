import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

let firebaseConfig = {
    apiKey: "AIzaSyCCHQf0IBFaeHM1QI-QS-jdJ0EGNR0uDlc",
    authDomain: "spot-it-usa.firebaseapp.com",
    databaseURL: "https://spot-it-usa.firebaseio.com",
    projectId: "spot-it-usa",
    storageBucket: "spot-it-usa.appspot.com",
    messagingSenderId: "49952167234",
    appId: "1:49952167234:web:59d4886b7fc162010424db",
    measurementId: "G-CPXMFD064H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;