import React, { useState, useRef } from "react";
import "../App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import SignOut from "./SignOut";
import ChatMessage from "./ChatMessage";

import { useCollectionData } from "react-firebase-hooks/firestore";

const auth = firebase.auth();
const firestore = firebase.firestore();

firebase.initializeApp({
  apiKey: "AIzaSyA8VwE3mUc_GyRYwRq55s0mVJ7bephsaYw",
  authDomain: "superchat-bd7bf.firebaseapp.com",
  projectId: "superchat-bd7bf",
  storageBucket: "superchat-bd7bf.appspot.com",
  messagingSenderId: "727075814221",
  appId: "1:727075814221:web:10e1b3835124defc539504",
  measurementId: "G-FMDZ9MBL9Q",
});

const ChatRoom = () => {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query);

  const [formValue, setFormValue] = useState("");
  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main>
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}

        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">🐝</button>
      </form>
      {/* <SignOut /> */}
    </>
  );
};

export default ChatRoom;
