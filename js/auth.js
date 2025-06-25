import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKIRwlHVwIDCVbZqH1cSZ7tbZEm-12Hkg",
  authDomain: "emolog-a5270.firebaseapp.com",
  projectId: "emolog-a5270",
  storageBucket: "emolog-a5270.firebasestorage.app",
  messagingSenderId: "837136150341",
  appId: "1:837136150341:web:c6211df2d0effd98ff982c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.loginEmail = function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  signInWithEmailAndPassword(auth, email, senha)
    .then(() => (window.location.href = "diario.html"))
    .catch(err => alert("Erro: " + err.message));
};

window.cadastrarUsuario = function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => (window.location.href = "diario.html"))
    .catch(err => alert("Erro: " + err.message));
};

window.loginGoogle = function() {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then(() => (window.location.href = "diario.html"))
    .catch(err => alert("Erro: " + err.message));
};

window.loginGitHub = function() {
  signInWithPopup(auth, new GithubAuthProvider())
    .then(() => (window.location.href = "diario.html"))
    .catch(err => alert("Erro: " + err.message));
};

window.logout = function() {
  signOut(auth).then(() => (window.location.href = "login.html"));
};