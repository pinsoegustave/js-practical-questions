// Fetch posts by user ID

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const posts = JSON.parse(xhr.responseText);
        const userPosts = posts.filter(post => post.userId === 1);
        userPosts.forEach(post => {
            console.log(post.title);
        })
    }
}
xhr.send();