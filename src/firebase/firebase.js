import * as firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase configuration
const config = {
    apiKey: "AIzaSyAKoBAv8qNttSjNsuduit8HQkRmoruL8W8",
    authDomain: "angus-adlib.firebaseapp.com",
    databaseURL: "https://angus-adlib.firebaseio.com",
    projectId: "angus-adlib",
    storageBucket: "angus-adlib.appspot.com",
    messagingSenderId: "297487923584",
    appId: "1:297487923584:web:91338c554d06afc545a965"
};
  
// Initialize Firebase
firebase.initializeApp(config);

///////
// DATABASE
///////////////////

const db = firebase.firestore();

// EXPORTS
export { 
    firebase,
    db as default
};