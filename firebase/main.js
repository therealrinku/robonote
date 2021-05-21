import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase";

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
