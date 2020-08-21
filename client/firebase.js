import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDnwTkJxPW13NacRWleqbJqjZ0gCKx2r1o",
  authDomain: "twitterclone-70948.firebaseapp.com",
  databaseURL: "https://twitterclone-70948.firebaseio.com",
  projectId: "twitterclone-70948",
  storageBucket: "twitterclone-70948.appspot.com",
  messagingSenderId: "392610903600",
  appId: "1:392610903600:web:151ba87737284446309ff5",
  measurementId: "G-2WZNYLH8N1",
};
//initializing the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//making this an easy variable to call in other files
const db = firebaseApp.firestore();

export default db;
