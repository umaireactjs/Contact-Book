// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrsznMND3_8DOct080V3YgVUftgc3065M",
  authDomain: "contacts-b4f01.firebaseapp.com",
  projectId: "contacts-b4f01",
  storageBucket: "contacts-b4f01.appspot.com",
  messagingSenderId: "485998380094",
  appId: "1:485998380094:web:30a99bb64d875a2afa7d6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);