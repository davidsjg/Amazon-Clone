import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyDrDiPIDdOrmc0v4ltoGoj7E9I4PUzb8AQ",
    authDomain: "clone-c0d87.firebaseapp.com",
    projectId: "clone-c0d87",
    storageBucket: "clone-c0d87.appspot.com",
    messagingSenderId: "947895704716",
    appId: "1:947895704716:web:941f6eca11e9357e372fa9",
    measurementId: "G-FHPXDL3ZSK"
  };
})


const auth = firebase.auth()

export {auth};