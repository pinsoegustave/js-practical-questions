const apiUrl = 'https://jsonplaceholder.typicode.com/users'

const formData = {
    username: 'john Doe',
    email: 'johnlambo@gmail.com',
    password: 'securePassword!@#32'
};

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not good');
        }
        return response.json();
    })
    .then(newUserData => {
        console.log('New User Data: ', newUserData);
    })
    .catch(error => {
        console.error('Error', error);
    });