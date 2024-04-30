// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, like fetching data from a server
    setTimeout(() => {
      const data = 42; // Simulated data
      if (data) {
        resolve(data); // If operation succeeds, call resolve
      } else {
        reject("Error: Data not found"); // If operation fails, call reject
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  // Handling the promise
  myPromise
    .then((result) => {
      console.log("Success:", result); // Handle fulfillment
    })
    .catch((error) => {
      console.error("Error:", error); // Handle rejection
    });
  