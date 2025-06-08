// Display todos with title

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const todos = JSON.parse(xhr.responseText);
        const longTodos = todos.filter(todo => 
            todo.title.length > 60
        );
        longTodos.forEach(todo => console.log(todo.title));
    }
};

xhr.send();