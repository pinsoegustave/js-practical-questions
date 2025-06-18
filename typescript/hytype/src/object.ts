let employee : {
    id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Gustave",
    retire: (date: Date) => {
        console.log(date);
    }
}

employee.name = "Gustave"