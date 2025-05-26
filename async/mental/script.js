function myFetch(url) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status.status <= 300) {
            var response = JSON.parse(xhr.responseText);
            console.log("Post title: ", response.title);
        }
        else {
            console.error('Request failed. Status: ', xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error('Network error occured.')
    };

    xhr.send();
}

myFetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error))