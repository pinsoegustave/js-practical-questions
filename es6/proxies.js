const proxyObj = new Proxy({ age: 5, height: 4}, {
    get(targetObject, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObject[property]);
    }
});

proxyObj.age;
proxyObj.height;

proxyObj.weight = 120;
proxyObj.weight;