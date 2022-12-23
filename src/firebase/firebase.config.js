// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-kfesVEUH-2ye9gtHtaVNuZ8Q-wUr7iA",
  authDomain: "fir-auth-practice-9715f.firebaseapp.com",
  projectId: "fir-auth-practice-9715f",
  storageBucket: "fir-auth-practice-9715f.appspot.com",
  messagingSenderId: "233334617803",
  appId: "1:233334617803:web:be521bbdcb9b4a90aa0d4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app