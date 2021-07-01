import firebase from "firebase";
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
   apiKey: "AIzaSyCgezgLxg_f5iTDoLGG3s7s0dy35_-pOnk",
   authDomain: "react-chat-app-nan.firebaseapp.com",
   projectId: "react-chat-app-nan",
   storageBucket: "react-chat-app-nan.appspot.com",
   messagingSenderId: "12443648872",
   appId: "1:12443648872:web:06916945551e9bff9d8cdd",
   measurementId: "G-JGTSKNH9Y2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()
const db = firebase.firestore()

auth.useEmulator('http://localhost:9099')
if (window.location.hostname === 'localhost') {
   db.useEmulator('localhost', 8080)
}

export { db, auth }
export default firebase