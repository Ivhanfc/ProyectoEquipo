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

  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  async function sendPushNotification(token, title, body) {
    const serverKey = 'TU_CLAVE_DEL_SERVIDOR_FIREBASE'; // Reemplázala desde Firebase Console
    const url = 'https://fcm.googleapis.com/fcm/send';
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `key=${serverKey}`
    };
  
    const payload = {
      to: token,
      notification: {
        title: title,
        body: body,
        // Opcional: Añadir icono, sonido, etc.
        icon: 'https://ejemplo.com/icono.png',
        click_action: 'OPEN_APP' // Para abrir la app al tocar la notificación
      }
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      console.log('Notificación enviada:', data);
      return data;
    } catch (error) {
      console.error('Error al enviar:', error);
      throw error;
    }
  }
  
  // Ejemplo de uso
  sendPushNotification(
    'TOKEN_DEL_DISPOSITIVO', 
    '¡Alerta de movimiento!', 
    'Se detectó actividad en la cámara.'
  );