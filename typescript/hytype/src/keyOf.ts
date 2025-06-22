interface User {
    name: string,
    age: number,
    location: string
}

type UserKeys = keyof User
const key : UserKeys = 'name'