
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth ,
    createUserWithEmailAndPassword
    
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase- firebase/auth";
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
    appId: "1:825926836828:web:e597218ef08501b5e8bc99"    ,
    measurementId: "G-SF44HKN9HE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// sign up

const auth = getAuth();

document.getElementById('signup').addEventListener('click', () => {

    createUserWithEmailAndPassword(auth, 'raza@gmail.com', 'raza1234')
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    console.log(`===> ${user}`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..

    console.log(`=====> error ${errorMessage}`)
  });
})


 










// function signup() {
//     var email = document.getElementById('email').value
//     console.log(email)
// }

// signup()