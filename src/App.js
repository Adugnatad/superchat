import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";

firebase.initializeApp({
  apiKey: "AIzaSyA8VwE3mUc_GyRYwRq55s0mVJ7bephsaYw",
  authDomain: "superchat-bd7bf.firebaseapp.com",
  projectId: "superchat-bd7bf",
  storageBucket: "superchat-bd7bf.appspot.com",
  messagingSenderId: "727075814221",
  appId: "1:727075814221:web:10e1b3835124defc539504",
  measurementId: "G-FMDZ9MBL9Q"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
     
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
        </section>
    </div>
  );
}

export default App;
