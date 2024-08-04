// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pantrytracker-78920.firebaseapp.com",
  projectId: "pantrytracker-78920",
  storageBucket: "pantrytracker-78920.appspot.com",
  messagingSenderId: "663866202609",
  appId: "1:663866202609:web:43e3824d71e7888f2b0c50",
  measurementId: "G-TCWL06YXDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
//const analytics = getAnalytics(app);
