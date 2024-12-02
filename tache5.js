//Attente de requêtes simultanées
async function concurrentRequests() {
    try {
      // Simule deux appels API simultanés
      const [result1, result2] = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve("Réponse de l'API 1"), 2000)),
        new Promise(resolve => setTimeout(() => resolve("Réponse de l'API 2"), 1500))
      ]);
  
      console.log("Résultat combiné des deux requêtes :");
      console.log(result1);
      console.log(result2);
    } catch (error) {
      console.error("Erreur lors de l'exécution des requêtes simultanées :", error);
    }
  }
  
  // Exemple d'utilisation
  concurrentRequests();
  