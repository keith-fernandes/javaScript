const myName = "Ke";
const age = 2021 - 1990;
const birthCity = "Sao paulo"

// const presentation = "my name is " + myName + ", my age is " + age + " and i was born in " + birthCity;

const presentation = `my name is ${myName}, my age is ${age} and I was born in ${birthCity}.`

console.log(presentation)

const hisName = "Leo";
const hisAge = 23;
const overAgeDrink = "beer";
const underAgeDrink = "juice";

const order = `${hisName} says: "Please, can I have ${hisAge >= 18 ? overAgeDrink : underAgeDrink}"`
console.log(order)

const herClass = "Maths";
const students = 25;
const goToClass = "let's study!"
const doNotGo = "I'm to lazy today!"

const decision = `I have ${herClass} today, let's see how many friends I have there... ${students <= 15 ? goToClass : doNotGo }`
console.log(decision)