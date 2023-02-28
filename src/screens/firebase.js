// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import  Firestore  from "firebase/firestore";
// import * as firebase from 'firebase'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9oBjg5s7irMHvHUaVB1AApAM4IwMFjN4",
  authDomain: "task-14672.firebaseapp.com",
  databaseURL: "https://task-14672-default-rtdb.firebaseio.com",
  projectId: "task-14672",
  storageBucket: "task-14672.appspot.com",
  messagingSenderId: "770696893301",
  appId: "1:770696893301:web:644de7caf01bbe9838793c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default {auth}