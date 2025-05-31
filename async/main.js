const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not good.')
        }

        return response.json();
    })
    .then(userData => {
        console.log('User Data:', userData);
    }) 
    .catch(error => {
        console.error('Error: ', error)
    });