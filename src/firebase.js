import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESHIP_KEY,
  authDomain: "dashboard-fe793.firebaseapp.com",
  projectId: "dashboard-fe793",
  storageBucket: "dashboard-fe793.appspot.com",
  messagingSenderId: "717042568342",
  appId: "1:717042568342:web:f373addfe818b9e25446b7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);
export const storage = getStorage(app);
