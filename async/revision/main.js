
async function getCountries() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');   

    if (!response.ok) console.log("Network Error")
        
    const data = await response.json();

    return data;
    } catch (error) {
        console.log(error);
    }
    
}
getCountries()
    .then(result => console.log(result))
    .catch(err => console.log(err));

// getCountries().then((result) => {
//     console.log(result)
// })
// .catch((error) => 
//     console.log(error)
// );