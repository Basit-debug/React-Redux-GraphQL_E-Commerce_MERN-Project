import firebase from 'firebase/app';
import 'firebase/firestore'; //for database
import 'firebase/auth'; //for auth

const config = {
  apiKey: 'AIzaSyDS46T9cpJlydTdVcl0ubtsZWEiveXMP2c',
  authDomain: 'crwn-db-24549.firebaseapp.com',
  projectId: 'crwn-db-24549',
  storageBucket: 'crwn-db-24549.appspot.com',
  messagingSenderId: '67363684333',
  appId: '1:67363684333:web:b3b740df4d087ddb99b1e4',
  measurementId: 'G-P5CZ9YMWFN',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
