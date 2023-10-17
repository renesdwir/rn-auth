// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import * as firebaseAuth from "firebase/auth";
const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCty3-bc8sttrrd7YlJ0C2zZ-Q11GHzDI",
  authDomain: "rn-auth-736f6.firebaseapp.com",
  projectId: "rn-auth-736f6",
  storageBucket: "rn-auth-736f6.appspot.com",
  messagingSenderId: "89493091114",
  appId: "1:89493091114:web:be680d0a52a4e8a69d2453",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: reactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
