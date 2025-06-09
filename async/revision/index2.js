async function fetchData() {
    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("Data received!"), 1000);
        });

        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
fetchData();