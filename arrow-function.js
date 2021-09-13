function greeting (name){
    return `my name is ${name};`
}

const showArrow = name => `my name is ${name}`;
const add = (num1, num2) => num1 + num2;

//arrow function with more than 1 construction line
const addSmallNum = (num1, num2) =>{
    if (num1 || num2 > 10){
        return "only numbers from 1 to 9"
    }else{
        return num2 + num1;
    }
}
//hoisting: arroe function acts like a expression