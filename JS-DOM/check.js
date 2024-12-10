// eventListener: Listen for specific events to create interactive web pages events:
                // e.g: click, mouseover, mouseout.

const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');

myButton.addEventListener("click", event => {
    myBox.target.style.backgroundColor = "red";
    myBox.target.innerHTML = `<p>Ngo gate ark?</p>`
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it🔕"
})

myButton.addEventListener("mouseout", event => {
    myBox.target.style.backgroundColor = "lightgreen";
    myBox.target.textContent = "Click Me🔇🇷🇼"
})