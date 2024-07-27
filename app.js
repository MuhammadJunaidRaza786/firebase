// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCf1fB2-cv-nfgM_xJr-xIrApp2Gv16nI",
  authDomain: "project-1-48fb2.firebaseapp.com",
  projectId: "project-1-48fb2",
  storageBucket: "project-1-48fb2.appspot.com",
  messagingSenderId: "825926836828",
  appId: "1:825926836828:web:e597218ef08501b5e8bc99",
  measurementId: "G-SF44HKN9HE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

document.getElementById("signup_button").addEventListener('click', () => {
  let email = document.getElementById("Sign_up_e").value;
  console.log(email);
  let password = document.getElementById("Sign_up_p").value;
  console.log(password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("You're Sucessfully Sign Up");
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`=====> ${errorMessage} `);
      // ..
    });
});

document
  .getElementById("Signin_button").addEventListener('click', () => {
    let email = document.getElementById("Sign_in_e").value;
    console.log(email);
    let password = document.getElementById("Sign_in_p").value;
    console.log(password);

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;

    //     alert("You're Sucessfully Log In");
    //     console.log(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;

    //     console.log(`===> ${errorMessage}`);
    //   });
  });
