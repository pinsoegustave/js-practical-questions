// 3. **Filtering from an Object:**
//     - Write a function that accepts an object of user data:
const users = { user1: 18, user2: 22, user3: 16 };
//     Return a new object containing only users aged 18 or older.

function filterAdults(users) { 
    return Object.fromEntries(Object.entries(users).filter(([key, age]) => age >= 18));
};
console.log(filterAdults({ user1: 18, user2: 22, user3: 16 }));
