import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjs8UCFxTcB17qdspJRECKwPFAznTIujg",
    authDomain: "ecomm-react-db-3a035.firebaseapp.com",
    databaseURL: "https://ecomm-react-db-3a035.firebaseio.com",
    projectId: "ecomm-react-db-3a035",
    storageBucket: "ecomm-react-db-3a035.appspot.com",
    messagingSenderId: "123527015498",
    appId: "1:123527015498:web:5f969a62bb0a976749cab3",
    measurementId: "G-PW3E274LNZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

