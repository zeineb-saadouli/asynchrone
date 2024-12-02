//Itérer avec Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Attente de 1 seconde
    }
  }
  
  iterateWithAsyncAwait(["a", "b", "c", "d"]);