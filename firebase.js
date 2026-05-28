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

import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
const auth = getAuth(app);

// const firebaseConfig1 = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };



import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}
    from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";


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
            window.location.href =
                "login.html";

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
            window.location.href =
                "explore.html";
        })

        .catch((error) => {

            alert(error.message);

        });

});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Return true immediately to keep the channel open
    fetchData().then(data => {
        sendResponse(data);
    }).catch(err => {
        sendResponse({ error: err.message });
    });

    return true; // This tells Chrome you will call sendResponse later
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'getData') {
        // Perform async work
        fetch(message.url)
            .then(response => response.json())
            .then(data => sendResponse({ success: true, data }))
            .catch(error => sendResponse({ success: false, error: error.message }));

        return true; // Keep the channel open for the async fetch above
    }

    // If not handling the message, return nothing (or false)
    // This prevents the "channel closed" error for unhandled message types
});