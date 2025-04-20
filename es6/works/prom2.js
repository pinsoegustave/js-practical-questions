function getWeather() {
    return new Promise(function(resolve, reject) {
        resolve('Sunny');
        // reject("Rainny");
    });
}
function onSuccess(data) {
    console.log(`Success msg: ${data}`);
}
function onError(error) {
    console.log(`Error msg: ${error}`);
}
getWeather().then(onSuccess, onError);