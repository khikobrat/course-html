const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "Some data";
    if (data) {
      resolve(data);
    } else {
      reject("Error: Data not found");
    }
  }, 2000);
});

myPromise
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

async function fetchData() {
  try {
    const data = await myPromise;
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
