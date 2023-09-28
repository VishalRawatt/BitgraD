
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDtk8118UhdqsC0haSYLilZJ5NnYpeznEk",
  authDomain: "bitgrad-3d07a.firebaseapp.com",
  projectId: "bitgrad-3d07a",
  storageBucket: "bitgrad-3d07a.appspot.com",
  messagingSenderId: "724137158951",
  appId: "1:724137158951:web:8c5ea62b63299240542102",
  measurementId: "G-WK13Z3YSDR"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider}