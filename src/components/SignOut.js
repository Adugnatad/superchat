import React from 'react'
import '../App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const SignOut = () => {
    const auth = firebase.auth();
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out </button>
  )
}

export default SignOut