import React from "react";
import './App.css';
import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'


import {useaAuthState, useAuthState} from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/auth/firebase'


firebase.initializeApp({
  apiKey: "AIzaSyDXiq_cQFxin7EbCTKZxMN5pXS5cmX2bcA",
  authDomain: "reactsuperchatwebapp.firebaseapp.com",
  projectId: "reactsuperchatwebapp",
  storageBucket: "reactsuperchatwebapp.appspot.com",
  messagingSenderId: "233321928843",
  appId: "1:233321928843:web:f56992cb5dfb6783829c8e",
  measurementId: "G-06TSP7Y2EJ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <section>
          {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

function SignIn(){

  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  
  return(<button onClick={signInWithGoogle}>Sign in with Google</button>)
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.SignOut()}>Sign Out</button>
  )
}


function ChatRoom(){

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    return(
      <>
      <div>
        {
          messages && messages.map(msg =>   <ChatMessage key={msg.id} message={msg}/>)
        }

      </div>
      </>
    )
}

function ChatMessage(props){
  const {text, uid} = props.message;
  return <p>
    {}
  </p>
}
export default App;
