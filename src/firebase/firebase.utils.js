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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //if no userAuth, exit from this func.
  //if userAuth exists then query inside of firestore for the document to see if already exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  //if snapShot desn't exist we'll create this (with set method) data in that place. So this code simply creates the Snapshot
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
