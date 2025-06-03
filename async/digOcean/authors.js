const ul = document.getElementById('authors');
const list = document.createDocumentFragment();

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
