//Gérer les erreurs avec Async/Await
async function awaitCall() {
    try {
      // Simule un appel API qui peut échouer
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simule une erreur aléatoire
          const success = Math.random() > 0.5;
          if (success) {
            resolve("Données reçues de l'API");
          } else {
            reject("Erreur de l'API : échec de la récupération des données");
          }
        }, 2000);
      });
  
      console.log(response);
    } catch (error) {
      console.error("Erreur lors de l'obtention des données :", error);
    }
  }
  
  // Exemple d'utilisation
  awaitCall();
  