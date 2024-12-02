// Chaîner Async/Await

async function firstFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Première fonction terminée");
  }
  async function secondFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Deuxième fonction terminée");
  }
  
  async function thirdFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Troisième fonction terminée");
  }
  
  async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
  }
  
  // Exemple d'utilisation
  chainedAsyncFunctions();
  