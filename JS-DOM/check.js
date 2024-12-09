// eventListener: Listen for specific events to create interactive web pages events:
                // e.g: click, mouseover, mouseout.

const myBox = document.getElementById('myBox');


myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "red";
    event.target.innerHTML = `<p>Ngo gate ark?</p>`
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it🔕"
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me🔇"
})