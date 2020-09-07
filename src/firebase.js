import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNA4ZqSKYVJIAK3GJlPTB-9JI6IdGTekY",
  authDomain: "instagram-clone-react-93236.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-93236.firebaseio.com",
  projectId: "instagram-clone-react-93236",
  storageBucket: "instagram-clone-react-93236.appspot.com",
  messagingSenderId: "21590736072",
  appId: "1:21590736072:web:d5f5965bf5c6e151eef9fd",
  measurementId: "G-PL1NWR7YLX",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
