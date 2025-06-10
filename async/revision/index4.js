function getMultipleUrls(urls) {
    const getPromise = urls.map(url => 
        fetch(url).then(response => {
            if (!response.ok) {
                new Error(`failed to fetch URLs`)
            }
            return response.json();
        })
    );
    return Promise.all(getPromise);
}
const manyUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
]
getMultipleUrls(manyUrls).then(results => {
    results.forEach(post => {
        console.log(post.title);
        console.log(post.body);
    })
}).catch(error => console.log(error));