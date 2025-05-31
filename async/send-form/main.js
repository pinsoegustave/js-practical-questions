const apiUrl = 'https://jsonplaceholder.typicode.com/posts'


const formData = {
    userId: 10,
    id: 101,
    title: "My new post varies by the football matches",
    body: "jsdflsdfsdojglkjfuhfosinjbkuiheionfiue0wrikmnvkbiurperfnkdjsfnifdsnjfkdsnfiudslfhskj"
}
// const formData = {
//     username: 'john Doe',
//     email: 'johnlambo@gmail.com',
//     password: 'securePassword!@#32'
// };

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