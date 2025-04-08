const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(); // Usa la configuración por defecto en funciones de Firebase

const db = admin.database();

exports.alexaWebhook = functions.https.onRequest(async (req, res) => {
  const intent = req.body?.request?.intent?.name;

  if (intent === "ObtenerTemperaturayhumedad") {
    try {
      // Obtener los valores de la temperatura y humedad de la base de datos
      const snapshot1 = await db.ref("sensores/dht11/temperatura/").once("value");
      const snapshot2 = await db.ref("sensores/dht11/humedad/").once("value");

      const temperatura = snapshot1.val();
      const humedad = snapshot2.val();

      // Verificar que los datos sean válidos
      if (temperatura !== null && humedad !== null) {
        const respuesta = `La temperatura de hoy es ${temperatura} grados y la humedad es ${humedad}%.`;
        res.json({
          version: "1.0",
          response: {
            outputSpeech: {
              type: "PlainText",
              text: respuesta,
            },
            shouldEndSession: true,
          },
        });
      } else {
        res.json({
          version: "1.0",
          response: {
            outputSpeech: {
              type: "PlainText",
              text: "No tengo registrada la temperatura o la humedad de hoy.",
            },
            shouldEndSession: true,
          },
        });
      }
    } catch (error) {
      console.error("Error al leer la temperatura y humedad:", error);
      res.json({
        version: "1.0",
        response: {
          outputSpeech: {
            type: "PlainText",
            text: "Hubo un error al obtener la temperatura y la humedad.",
          },
          shouldEndSession: true,
        },
      });
    }
  } else {
    res.json({
      version: "1.0",
      response: {
        outputSpeech: {
          type: "PlainText",
          text: "No entendí tu solicitud.",
        },
        shouldEndSession: true,
      },
    });
  }
});
