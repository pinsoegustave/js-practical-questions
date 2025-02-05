function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Partly cloudy');
        }, 1000)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                    resolve('🌞');
                    break;
                case 'Cloudy':
                    resolve('☁️');
                    break;
                case 'Rainy':
                    resolve('🌧️');
                    break;
                default:
                    reject('No Icon Found');
                    break;
            }
        })
    })
}

function onSuccess(data) {
    console.log(`Success info: ${data}`)
}

function onError(error) {
    console.log(`Error info: ${error}`);
}

getWeather().then(getWeatherIcon).then(onSuccess).catch(onError);