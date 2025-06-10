async function getFastPosts() {
    const urls = [
        'https://dummyjson.com/posts',
        'https://this-may-not-exist.com/posts',
        'https://jsonplaceholder.typicode.com/posts',
    ];

    const safeFetch = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error fetching url")
                }
                return response.json();
            })
            .catch(err => console.error(err));

            const fetchPromise = urls.map(safeFetch);
            Promise.race(fetchPromise);
    }
}
getFastPosts();