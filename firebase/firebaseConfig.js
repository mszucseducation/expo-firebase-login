// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

//import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGbAKr040mHRNTHk8K-LLR6Ikac2-m4vs",
  authDomain: "monday-test-3126.firebaseapp.com",
  projectId: "monday-test-3126",
  storageBucket: "monday-test-3126.appspot.com",
  messagingSenderId: "437825696320",
  appId: "1:437825696320:web:19e7870f4b3cf0d7afa5a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);