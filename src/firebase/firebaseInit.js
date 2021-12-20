import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD423pNW0QywLbonGeP8egipOr1qHOPsFo",
    authDomain: "fireblogsyt-e5df8.firebaseapp.com",
    projectId: "fireblogsyt-e5df8",
    storageBucket: "fireblogsyt-e5df8.appspot.com",
    messagingSenderId: "621650550333",
    appId: "1:621650550333:web:14e745e7540245a1cfd454"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();