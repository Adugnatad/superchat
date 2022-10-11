import React from 'react'
import firebase from 'firebase/compat/app';
import '../App.css';

const auth = firebase.auth();
const ChatMessage = ({message}) => {
    const {text, uid, photoURL} = message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
    <img src={photoURL} alt="Profile Picture"/>
    <p>{text} </p>
    </div>
  )
}

export default ChatMessage