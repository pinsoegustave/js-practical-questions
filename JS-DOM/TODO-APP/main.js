const ulTasks = document.querySelector('#tasks');
const delBtn = document.querySelector('.delete');


ulTasks.addEventListener('click', (e) => {
    if (e.target.className === "delete") {
        const li = e.target.parentElement;
        ulTasks.removeChild(li)
    };
});

const addForm = document.forms['add-form'];

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value
    console.log(value);

    const newLi = document.createElement('li');
    const newMark = document.createElement('span');
    const newElement = document.createElement('span');
    const delElement = document.createElement('span');
    newMark.textContent = "Mark Completed"
    newElement.textContent = value;
    delElement.textContent = "Delete"

    newLi.appendChild(newMark);
    newLi.appendChild(newElement);
    newLi.appendChild(delElement);

    ulTasks.appendChild(newLi);
});
