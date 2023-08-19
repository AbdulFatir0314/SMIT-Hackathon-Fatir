import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBAU88Qqz4f1xW-O6oWfRrZPj_UAOegkR8",
  authDomain: "smit-mini-hackathon-a7da8.firebaseapp.com",
  projectId: "smit-mini-hackathon-a7da8",
  storageBucket: "smit-mini-hackathon-a7da8.appspot.com",
  messagingSenderId: "978980231581",
  appId: "1:978980231581:web:d34a688970dfe57147b774",
  measurementId: "G-7STM84P2W4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const signupBtn = document.getElementById("loginBtn")
signupBtn.addEventListener('click', () => {
  const email = document.getElementById("email").value
  const password = document.getElementById("passWord").value
  signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
  console.log(user)
  alert("User login successfully")
  window.location.href = "../Dashboard/dashboard.html"
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode, errorMessage)
});
})
