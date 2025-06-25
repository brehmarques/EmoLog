// Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKIRwlHVwIDCVbZqH1cSZ7tbZEm-12Hkg",
  authDomain: "emolog-a5270.firebaseapp.com",
  projectId: "emolog-a5270",
  storageBucket: "emolog-a5270.firebasestorage.app",
  messagingSenderId: "837136150341",
  appId: "1:837136150341:web:c6211df2d0effd98ff982c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

window.enviarMensagem = function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const timestamp = new Date().toISOString();
      set(ref(db, 'mensagens/' + uid + '/' + timestamp), {
        nome: nome,
        email: email,
        mensagem: mensagem
      })
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        document.querySelector("form").reset();
      })
      .catch((error) => {
        alert("Erro ao enviar: " + error.message);
      });
    } else {
      alert("Você precisa estar logado para enviar uma mensagem.");
    }
  });
}