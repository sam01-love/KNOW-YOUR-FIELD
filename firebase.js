import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

import {
    createUserWithEmailAndPassword
} from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential.user);
    })
    .catch((error) => {
        console.log(error.message);
    });

import {
    signInWithEmailAndPassword
} from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("Logged in");
    });