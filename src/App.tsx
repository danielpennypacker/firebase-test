import React,{ useEffect } from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_UC4oSpUPgyjOW3IcHMzBv2E-4mf07o",
  authDomain: "cad-test-8eb75.firebaseapp.com",
  databaseURL: "https://cad-test-8eb75-default-rtdb.firebaseio.com",
  projectId: "cad-test-8eb75",
  storageBucket: "cad-test-8eb75.appspot.com",
  messagingSenderId: "352083746197",
  appId: "1:352083746197:web:e3bfdcf3104a68cfcd2a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function App() {

  const doQuery = async () => {
    const querySnapshot = await getDocs(collection(db, "text"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
    });    
  }

  useEffect(()=> {
    doQuery();
  },[])

  return (
    <div className="App">
      <header className="App-header">        
        <div>Hello! Deploy?</div>
      </header>
    </div>
  );
}

export default App;
