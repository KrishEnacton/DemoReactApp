import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB69m809pxpQY-74S7f2sm6fsL7SfWZDgA",
    authDomain: "demoreactapp-ab428.firebaseapp.com",
    projectId: "demoreactapp-ab428",
    storageBucket: "demoreactapp-ab428.appspot.com",
    messagingSenderId: "280291459634",
    appId: "1:280291459634:web:ad3d1fcbac376ac174f22b"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };