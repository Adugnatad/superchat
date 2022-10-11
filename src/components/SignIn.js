import React from 'react'
import '../App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: "AIzaSyA8VwE3mUc_GyRYwRq55s0mVJ7bephsaYw",
  authDomain: "superchat-bd7bf.firebaseapp.com",
  projectId: "superchat-bd7bf",
  storageBucket: "superchat-bd7bf.appspot.com",
  messagingSenderId: "727075814221",
  appId: "1:727075814221:web:10e1b3835124defc539504",
  measurementId: "G-FMDZ9MBL9Q"
})

const SignIn = () => {
    const auth = firebase.auth();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google </button>
  )
}

export default SignIn