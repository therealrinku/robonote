import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "./config";

const firebaseService = firebase.initializeApp(firebaseConfig);

export default firebaseService;
