import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { sendEmailVerification, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBVYMeMZsn_hxSyoYVopGcgx9ydr0BhxDY",
  authDomain: "proyectocecyte-9f75e.firebaseapp.com",
  databaseURL: "https://proyectocecyte-9f75e-default-rtdb.firebaseio.com",
  projectId: "proyectocecyte-9f75e",
  storageBucket: "proyectocecyte-9f75e.firebasestorage.app",
  messagingSenderId: "478449984037",
  appId: "1:478449984037:web:34110861ef0289292cd5cc",
  measurementId: "G-DV46P0XEV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector('.form-box.login form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
  
    try {
      const userCredential = await window.firebaseSignIn(window.firebaseAuth, email, password);
      alert('Inicio de sesión exitoso!');
      
      // Redirigir a otra página, por ejemplo dashboard.html
      window.location.href = 'index.html';
  
    } catch (error) {
      console.error(error);
      alert('Error al iniciar sesión: ' + error.message);
    }
  });
  