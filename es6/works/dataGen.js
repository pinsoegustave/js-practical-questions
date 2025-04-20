function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin','James','Kagure','Kavite', 'Orit', 'Richard'];
    const facts = [];
    
    for (const name of names) {
        facts.push(yield name);
    }

    return facts;
}
const generatorIterator = getEmployee();

let namy = generatorIterator.next().value;
namy.generatorIterator.next(`${namy} is cool!`).value;


namy = generatorIterator.next(`${namy} is awesome!`).value; 
namy = generatorIterator.next(`${namy} is stupendous!`).value; 
namy = generatorIterator.next(`${namy} is rad!`).value; 
namy = generatorIterator.next(`${namy} is impressive!`).value;
namy = generatorIterator.next(`${namy} is stunning!`).value;
namy = generatorIterator.next(`${namy} is awe-inspiring!`).value;

const positions = generatorIterator.next(`${namy} is magnificent!`).value; 

// displays each namy with description on its own line
console.log( positions.join('\n')); 