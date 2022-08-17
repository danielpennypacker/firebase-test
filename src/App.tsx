import React,{ useEffect } from 'react';
import * as THREE from 'three';

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

  const renderScene = () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );
    const scene = new THREE.Scene();

    const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    const points = [];
    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry, material );

    scene.add( line );
    renderer.render( scene, camera );

  };

  useEffect(()=> {
    doQuery();
    renderScene();
  })

  return (
    <div className="App">
      <header className="App-header">        
        <div>Hello! Line?</div>
      </header>
    </div>
  );
}

export default App;
