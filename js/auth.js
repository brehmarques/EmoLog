// Importação Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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

window.cadastrar = function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Erro ao cadastrar: " + error.message);
    });
}

window.login = function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      localStorage.setItem("logado", "true");
      alert("Login realizado com sucesso!");
      window.location.href = "diario.html";
    })
    .catch((error) => {
      alert("Erro ao fazer login: " + error.message);
    });
}