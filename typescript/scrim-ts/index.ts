
const button = document.querySelector('.button');
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
export const screen = document.querySelector('.screen');


function addNumbers(a: number, b: number) {
    screen.innerHTML = (a + b).toString()
}
// function addNumbers(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         screen.innerHTML = a + b;
//     }
//     else {
//         screen.innerHTML = parseInt(a) + parseInt(b);
//     }

//     // screen.innerHTML = a + b;
// }

button.addEventListener('click', () => 
    addNumbers(Number(firstInput.value), Number(secondInput.value)));