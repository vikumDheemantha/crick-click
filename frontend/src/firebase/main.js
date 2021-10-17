import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS7tvtGUWthPyuVqLVWIGZFsvAG4CabNk",
  authDomain: "crick-click.firebaseapp.com",
  projectId: "crick-click",
  storageBucket: "crick-click.appspot.com",
  messagingSenderId: "15672017340",
  appId: "1:15672017340:web:749891db2819660bb52bb9",
  measurementId: "G-4XPC9J42HZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);

export const db = getFirestore(app);
