import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAUmzBDrmaxWk6PkECp4FaAm1ywXBuHonY",
  authDomain: "crwn-db-70a09.firebaseapp.com",
  databaseURL: "https://crwn-db-70a09.firebaseio.com",
  projectId: "crwn-db-70a09",
  storageBucket: "crwn-db-70a09.appspot.com",
  messagingSenderId: "619190407888",
  appId: "1:619190407888:web:fb2671f777a1b7854444d5",
  measurementId: "G-SG11GS12BV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth){ return ;} 
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`error creating user`, error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
