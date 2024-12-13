const ulTasks = document.querySelector('#tasks');
const addForm = document.querySelector('#add-form');
const delBtn = document.querySelector('.delete');


ulTasks.addEventListener('click', (e) => {
    if (e.target.className === "delete") {
        const li = e.target.parentElement;
        ulTasks.removeChild(li)
    };
})