//Attente des appels parallèles
async function parallelCalls(urls) {
    try {
      // Simule des requêtes parallèles
      const requests = urls.map(url => 
        new Promise(resolve => 
          setTimeout(() => resolve(`Réponse de l'URL : ${url}`), Math.random() * 3000)
        )
      );
  
      const results = await Promise.all(requests);
  
      console.log("Réponses combinées des requêtes parallèles :");
      results.forEach((response, index) => {
        console.log(`Réponse ${index + 1} :`, response);
      });
    } catch (error) {
      console.error("Erreur lors de l'exécution des requêtes parallèles :", error);
    }
  }
  
  // Exemple d'utilisation
  parallelCalls(["https://api.example.com/data1", "https://api.example.com/data2", "https://api.example.com/data3"]);
  

