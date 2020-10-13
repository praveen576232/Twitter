import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBV7gooorpaeMn9nTkpO5XgA8h0T1plfqQ",
    authDomain: "tryfirebaseproject-21d0c.firebaseapp.com",
    databaseURL: "https://tryfirebaseproject-21d0c.firebaseio.com",
    projectId: "tryfirebaseproject-21d0c",
    storageBucket: "tryfirebaseproject-21d0c.appspot.com",
    messagingSenderId: "85488826435",
    appId: "1:85488826435:web:e7c9209b4098dcb8823cf6"
  };

  const app  = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  export default db;
  export {auth,provider};