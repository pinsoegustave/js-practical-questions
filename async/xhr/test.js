// Display email and name of all users

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        users.forEach(user => {
            console.log(`${user.name} (${user.email})`);
        })
    }
}
xhr.send();