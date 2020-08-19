import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKYYDVK2CK_6kw3G_EMTdt9eZOeVzZcZg",
  authDomain: "slack-clone-b28d0.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: "slack-clone-b28d0",
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
