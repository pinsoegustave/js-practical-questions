const myPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        const success = true;
        if(!success) {
            resolve("Operation successful!");
        }
        else {
            reject("Operation failed!");
        }
    }, 2000);
});

myPromise.then((result) => {
    console.log(result);
})
.catch((error) => {
        console.log(error);
    }) 