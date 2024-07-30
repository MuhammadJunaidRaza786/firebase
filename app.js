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
  apiKey: "AIzaSyComKkYC9X9-Nq2zSfDQW30geYcIrt5Wpw",
  authDomain: "authentiation-1635c.firebaseapp.com",
  projectId: "authentiation-1635c",
  storageBucket: "authentiation-1635c.appspot.com",
  messagingSenderId: "910220494018",
  appId: "1:910220494018:web:e592243b50e1fc98ede75b",
  measurementId: "G-BP25Y7Y9NY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

let signup_button = document.getElementById("signup_button");

signup_button.addEventListener("click", () => {
  const email = document.getElementById("Sign_up_e").value;
  const password = document.getElementById("Sign_up_p").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("You're Successfully Signed Up");
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error ${errorCode}: ${errorMessage}`);
    });
});

let signin_button = document.getElementById("Signin_button");
signin_button.addEventListener("click", () => {
  const email = document.getElementById("sign_in_e").value;
  const password = document.getElementById("sign_in_p").value;
  console.log(email);
  console.log(password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
