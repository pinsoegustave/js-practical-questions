async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        
        if (!response.ok) throw new Error("Network Error!");

        const user = await response.json();
        return user;
    } catch (error) {
        throw new Error(`Failed to fetch user: ${error.message}`)
    }
}

document.getElementById("fetchButton").addEventListener("click", async () => {
    const output = document.getElementById("output");
    output.textContent = "Loading..."

    try {
        const user = await fetchUser();
        output.textContent = `Name: ${user.name}, Email: ${user.email}`;
    } catch (error) {
        output.textContent = error.message;
    }
});