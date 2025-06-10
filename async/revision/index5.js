
    const results = new Promise((resolve, reject) => {
    const success = false
    if (success) {
        resolve("My guy be well.");
    }
    else {
        reject("u a cooked");
    }
    return results;
});

results
    .then(result => console.log(result))
    .catch(error => console.log(error));