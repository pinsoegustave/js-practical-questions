
const button = document.querySelector('.button');
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
export const screen = document.querySelector('.screen');


function addNumbers(a, b) {
    screen.innerHTML = a + b
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

button.addEventListener('click', () => addNumbers(firstInput.value, secondInput.value));