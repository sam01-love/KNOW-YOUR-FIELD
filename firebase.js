// Import from a CDN like unpkg or esm.sh
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";;
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase/firestore.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase/storage.js"

// // Use the imported function instead of re-declaring it
// const app = initializeApp(firebaseConfig);
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

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

// CREATE ACCOUNT
const signupBtn =
document.getElementById("signup-btn");

signupBtn.addEventListener("click", () => {

  const email =
  document.getElementById("signup-email").value;

  const password =
  document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  .then((userCredential) => {

    alert("Account Created!");

    console.log(userCredential.user);

  })

  .catch((error) => {

    alert(error.message);

  });

});


// LOGIN
const loginBtn =
document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {

  const email =
  document.getElementById("login-email").value;

  const password =
  document.getElementById("login-password").value;

  signInWithEmailAndPassword(
    auth,
    email,
    password
  )

  .then((userCredential) => {

    alert("Login Successful!");

    console.log(userCredential.user);

  })

  .catch((error) => {

    alert(error.message);

  });

});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'FETCH_DATA') {
    // Returning true tells Chrome you will call sendResponse later
    performAsyncAction(message.payload)
      .then(data => sendResponse({ success: true, data }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; 
  }
  // If not async, don't return true; the channel closes automatically
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_DATA') {
    handleAsyncData(message)
      .then(data => sendResponse({ success: true, data }))
      .catch(err => sendResponse({ success: false, error: err.message }));
    return true; // Keep channel open
  }
  // If not handling asynchronously, don't return true. 
  // Optionally call sendResponse immediately.
  sendResponse({ status: 'unhandled' }); 
});
