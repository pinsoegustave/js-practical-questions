// Count and display the post per user

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const posts = JSON.parse(xhr.responseText);
        const userPostCount = {};
        posts.forEach(post => {
            userPostCount[post.userId] = (userPostCount[post.userId] || 0 ) + 1;
        });
        for (const userId in userPostCount) {
            console.log(`User ${userId}: ${userPostCount[userId]} posts`);
        }
    }
};
xhr.send();