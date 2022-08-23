// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8KgPvPEBrDb8YFhObIYlrcNUDxNWaLM",
  authDomain: "vue-wordpress-lite-elective.firebaseapp.com",
  projectId: "vue-wordpress-lite-elective",
  storageBucket: "vue-wordpress-lite-elective.appspot.com",
  messagingSenderId: "249976041702",
  appId: "1:249976041702:web:9c79081c35139309fd0b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);