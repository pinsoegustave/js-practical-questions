function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 3000);
}

fetchData((data) => {
    console.log(data);
})