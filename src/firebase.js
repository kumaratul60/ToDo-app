import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQVzU0aZCVsiBAgatAQycDQEorj18Qw4M",
  authDomain: "todo-app-dad9c.firebaseapp.com",
  projectId: "todo-app-dad9c",
  storageBucket: "todo-app-dad9c.appspot.com",
  messagingSenderId: "490646945795",
  appId: "1:490646945795:web:648514000a3c52c3920e36",
  measurementId: "G-J9VPPNGDNT",
});

const db = firebaseApp.firestore();
export default db;
