// Classes as First-class citizens

function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() {
        console.log('Wamuuzoboloo ogghi'); 
    }
});

greeting.sayHi();   // returns 'wamuuzoboloo ooggghi