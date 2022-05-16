import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAUYfNpErIYcE87mBn2cWcIOaqEhviIrHM",
    authDomain: "clone-e8191.firebaseapp.com",
    projectId: "clone-e8191",
    storageBucket: "clone-e8191.appspot.com",
    messagingSenderId: "904639904148",
    appId: "1:904639904148:web:d07c12a46cd7e7ac9eb781",
    measurementId: "G-MK99YBJLV0"
})
const auth=firebase.auth();
export {auth};