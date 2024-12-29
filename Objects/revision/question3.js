// 3. **Removing a Property:**
// - Given the object:
// How would you remove the `pages` property from the object?

const book = { 
    title: "2020",
    author: "George Orwell",
    pages: 328
};

delete book.pages;

console.log(book);