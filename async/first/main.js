const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not good.')
        }

        return response.json();
    })
    .then(userData => {
        const head = document.getElementById('user-details');
        // userData.map(element => {
            const newList = document.createElement('li');
            newList.innerHTML = `<li>Person_id: ${userData.id}</li><br/>
            <li>Name: ${userData.name}</li><br/>
            <li>Userame: ${userData.username}</li><br/>
            <li>Email: ${userData.email}</li><br/>
            <li>Adress(City): ${userData.address.city}</li><br/>
            <li>Address(Street): ${userData.address.street}</li><br/>`
            head.appendChild(newList);
        // });

        console.log('User Data:', userData);
    }) 
    .catch(error => {
        console.error('Error: ', error)
    });