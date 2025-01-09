const text = document.getElementById('text');
const textMsg = document.getElementById('textMsg');

function countCharacters() {
    let count = 0;

    let char = text.value;

    for(let i = 0; i < char.length; i++) {
        count++;
    }
    console.log(count);
    textMsg.textContent = count + " character"
}

text.addEventListener('input', countCharacters);