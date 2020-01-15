import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyBa9z-UD_WaIaWdhaUBe9BbrN_nbvPisTQ",
//     authDomain: "partogram-6a99a.firebaseapp.com",
//     databaseURL: "https://partogram-6a99a.firebaseio.com",
//     projectId: "partogram-6a99a",
//     storageBucket: "partogram-6a99a.appspot.com",
//     messagingSenderId: "217198258411",
//     appId: "1:217198258411:web:c77e4c90205a82fa35b6ae",
//     measurementId: "G-M2SEKPSC32"
//   };

var firebaseConfig = {
    apiKey: "AIzaSyAibBfrCj-p5cJjzCqH2rct9AEP6HD4FR4",
    authDomain: "partograph.firebaseapp.com",
    databaseURL: "https://partograph.firebaseio.com",
    projectId: "partograph",
    storageBucket: "partograph.appspot.com",
    messagingSenderId: "111174108699",
    appId: "1:111174108699:web:117be26878aca51b645abe",
    measurementId: "G-D9J3JK6EHC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
