import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfzI7q_xnQME3-YxXpGvTajoBQk0F8_Xw",
    authDomain: "ecomm-react-db.firebaseapp.com",
    databaseURL: "https://ecomm-react-db.firebaseio.com",
    projectId: "ecomm-react-db",
    storageBucket: "ecomm-react-db.appspot.com",
    messagingSenderId: "225832712521",
    appId: "1:225832712521:web:d5b79aad353b19d9908298",
    measurementId: "G-TR63QHWVFM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

