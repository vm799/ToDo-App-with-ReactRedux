// import  firebase  from 'firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA80txTpmTBOSEunuev7XJxNfbFxXs6Paw",
    authDomain: "react-redux-todo-app-d5e30.firebaseapp.com",
    projectId: "react-redux-todo-app-d5e30",
    storageBucket: "react-redux-todo-app-d5e30.appspot.com",
    messagingSenderId: "1050804677910",
    appId: "1:1050804677910:web:a9b835dc6e3646365fb437"
  };

  firebase.initializeApp(firebaseConfig)

  export const db = firebase.firestore()
