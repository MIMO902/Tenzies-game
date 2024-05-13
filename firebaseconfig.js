// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzVjeYE7ZgOOU2-cJ-r0LiQdizO23FZMI",
  authDomain: "note-app-react-4d2c2.firebaseapp.com",
  projectId: "note-app-react-4d2c2",
  storageBucket: "note-app-react-4d2c2.appspot.com",
  messagingSenderId: "746204274290",
  appId: "1:746204274290:web:fff8cc354d9ec553776ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")