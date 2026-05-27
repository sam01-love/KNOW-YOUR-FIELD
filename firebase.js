// Import from a CDN like unpkg or esm.sh

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCIagZ5KfOURA9jyKVwPP4XopYpayQbmSM",
    authDomain: "know-your-field.firebaseapp.com",
    projectId: "know-your-field",
    storageBucket: "know-your-field.firebasestorage.app",
    messagingSenderId: "149807278945",
    appId: "1:149807278945:web:3da1ab085900b3bbf4b320",
    measurementId: "G-5CBKDCV2ND"
  };

  //Initialise Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
const Auth = getAuth(firebaseConfig);

// const firebaseConfig1 = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };



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
document.getElementByClassName("btn-submit");

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
document.getElementByClassName("btn-submit");

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
