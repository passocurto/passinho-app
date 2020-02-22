import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDt_RCX8k6k9L09IURkDl0LhdSwxdtpftw",
  authDomain: "rc-lm-f7600.firebaseapp.com",
  databaseURL: "https://rc-lm-f7600.firebaseio.com",
  projectId: "rc-lm-f7600",
  storageBucket: "rc-lm-f7600.appspot.com",
  messagingSenderId: "601295274423",
  appId: "1:601295274423:web:779c1c8bb5be80ff092832"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
