// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADgWyafIuCzIJ7TR6cOSPWc63rLFOrrIk",
  authDomain: "eatery-34ca8.firebaseapp.com",
  projectId: "eatery-34ca8",
  storageBucket: "eatery-34ca8.appspot.com",
  messagingSenderId: "94618756594",
  appId: "1:94618756594:web:9b97dbaf83ca9d23bab76b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
