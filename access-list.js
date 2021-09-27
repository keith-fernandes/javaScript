const client = {
    name: "Andre", 
    age: 36, 
    cpf: "12123445687",
    email: "andre@email.com"
}

const brackets = ["name", "age", "cpf", "email"]

// console.log(client[brackets[2]])

brackets.forEach(info => console.log(client[info]))