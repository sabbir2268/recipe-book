import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQwqg-a-y5aObTM1fTHUrxZ4PUa3FpkKk",
  authDomain: "recipe-book-f32be.firebaseapp.com",
  projectId: "recipe-book-f32be",
  storageBucket: "recipe-book-f32be.firebasestorage.app",
  messagingSenderId: "419240286281",
  appId: "1:419240286281:web:c0c495956285efcb428798",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
