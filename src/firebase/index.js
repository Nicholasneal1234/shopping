import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD81FHMKuA3wlfnwJ2pgJBw_8z9sg9_zIU",
    authDomain: "nicholasneal-shopping.firebaseapp.com",
    projectId: "nicholasneal-shopping",
    storageBucket: "nicholasneal-shopping.appspot.com",
    messagingSenderId: "903945684241",
    appId: "1:903945684241:web:b4c7bbf855fd00fd4f78b0"
  };
  const fb = firebase.initializeApp(firebaseConfig);

  export const auth = fb.auth();
  export default fb;