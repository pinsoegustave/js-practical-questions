const myList = document.getElementById('myList');
const docFrag = document.createDocumentFragment();


let item1 = document.createElement('li');
let item2 = document.createElement('li');

item1.textContent = "Apples"
item2.textContent = "Bananas"

docFrag.appendChild(item1);
docFrag.appendChild(item2);

myList.appendChild(docFrag);

const list = document.querySelector('#book-list');

list.addEventListener('click', function(e){
    if (e.target.className === "delete") {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete'
    bookName.textContent = value

    deleteBtn.style.paddingLeft = '20px'
    deleteBtn.setAttribute("class", "delete");

    //append elements to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    list.appendChild(li);
})

