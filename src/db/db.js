import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk2c5NRpbO702KpX-XrgakLs40m70jt3E",
  authDomain: "havetodoo.firebaseapp.com",
  databaseURL: "https://havetodoo.firebaseio.com",
  projectId: "havetodoo",
  storageBucket: "havetodoo.appspot.com",
  messagingSenderId: "50413760936",
  appId: "1:50413760936:web:898c32ebd42b4a8b4d6d9d",
  measurementId: "G-TM8WP3JPG1",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
