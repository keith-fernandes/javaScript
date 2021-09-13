//parameters of function

// function add(number1, number2){
//     return number1 + number2; 
// }
// console.log(add(1,2))

//parameters x arg
// order of parameters

function nameAge(name, age){
    return `my name is ${name} and my age is ${age}`;
}
// console.log(nameAge(31, "Keith"))

function add(number1, number2){
    return number1 + number2; 
}
function multiplication(number1 = 1, number2 = 1){
    return number1 * number2;
}
//each function has to have their own name, but each argument can repeat the name of the other function`s argument. eg. fucntions add and multiplication has the same names` arguments.


// console.log(multiplication(add(2, 5), add(3, 3))) 
console.log(multiplication(add(2, 5))) //- if there`s no standart number to parameter "number1 = 1" then the results will be NaN


function greetings(){
    return 'Hi people!'
   }
   
   greetings('Hi guys')

   function greetingPerson(person){
    console.log(`Hi, ${person}!`)
   }
   
   greetingPerson('Helena')

   function greeting2(namePerson) {
    console.log(`${greetings()} My name is ${namePerson}`)
   }
   
   greeting2('Paula')


   function maths(number1, number2, number3){
       return number1 + number2 + number3;
   }
   maths(50, 2, 2)
   console.log(maths())