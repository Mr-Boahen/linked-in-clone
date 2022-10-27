import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDUAdb4KRJtbGE3RaIK2Fecl-sq6cqrnRk",
    authDomain: "linkedin-clone-cf415.firebaseapp.com",
    projectId: "linkedin-clone-cf415",
    storageBucket: "linkedin-clone-cf415.appspot.com",
    messagingSenderId: "55289641926",
    appId: "1:55289641926:web:d08106186e620a4f9010c7",
    measurementId: "G-D3TWCBJLEE"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };