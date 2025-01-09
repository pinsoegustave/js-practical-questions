const text = document.getElementById('text');
const textMsg = document.getElementById('textMsg');

function countCharacters() {
    let count = 0;

    let char = text.value;

    count = char.length
        count++;
    textMsg.textContent = count + " characters"
}

text.addEventListener('input', countCharacters);