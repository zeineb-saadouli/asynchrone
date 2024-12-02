// Attendre un appel
async function awaitCall() {
    try {
      // Simule un appel API avec un délai
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve("Données reçues de l'API");
        }, 3000);
      });
  
      console.log(response);
    } catch (error) {
      console.error("Erreur lors de l'obtention des données :", error);
    }
  }
  
  // Exemple d'utilisation
  awaitCall();
  