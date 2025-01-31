function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('404');
            reject('Bad Data');
        }, 1000);
    })
}

function fun2() {
    console.log('function 2');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🐶');
        }, 100);
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}

function onError(error) {
    console.log(`Error Code: ${error}`)
}

function onFinally() {
    console.log("Finally everything ends\n here!")
}


fun1()
    .then(fun2)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally);