
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
let userregister = null;

registro.addEventListener('click', (e) => {
    var user = document.getElementById('usuario').value;
    var email = document.getElementById('emailRegistro').value;
    var password = document.getElementById('contraseñaRegistro').value;

    createUserWithEmailAndPassword (auth, user, email, password) .then(cred =>{
        alert("Usuario Creado");
        userregister = true;
        sendEmailVerification(auth.currentUser).then(() =>{
            alert('Se ha enviado un correo de verificacion');
        });
    }).catch(error =>{
        const errorCode = error.code;

        if(errorCode == 'auth/email-already-in-use')
            alert('El correo ya esta en uso');
        else if(errorCode == 'auth/invalid-email')
            alert('El correo no es valido');
        else if(errorCode == 'auth/weak-password')
            alert('La contraseña debe tener al menos 6 caracteres');
    });
    
});
