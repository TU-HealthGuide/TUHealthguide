import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Firebase Config (Replace with your actual config from Firebase Console)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Sign Up Function
export const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Signup Error:", error.message);
  }
};

// Sign In Function
export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    console.error("Signin Error:", error.message);
  }
};

// Save Health Data
export const saveHealthData = async (userId, bloodPressure, bmi, stressLevel) => {
  try {
    await addDoc(collection(db, "healthData"), {
      userId,
      bloodPressure,
      bmi,
      stressLevel,
      timestamp: new Date(),
    });
    console.log("Health data saved!");
  } catch (error) {
    console.error("Error saving health data:", error.message);
  }
};
