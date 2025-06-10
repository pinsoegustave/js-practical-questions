
async function getUrls() {
    const urls = [
        'https://dummyjson.com/posts',
        'https://this-may-not-exist.com/posts',
        'https://jsonplaceholder.typicode.com/posts'
    ]

    try {
        const response = await fetch(urls)
        
        if (!response.ok) {
            throw new Error("Failed to fetch a URL")
        }
       
        const data = response.json();
        
    } catch (error) {
        console.error(error);
    }
    const fetchUrls = urls.map(url => data);
    Promise.race(fetchUrls);
}
console.log(getUrls());
// getUrls().then(result => console.log(result))
    // .catch(error => console.log(error))