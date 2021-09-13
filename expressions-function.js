  function myFunction (param){
      //cod
  }

//   myFunction("param")

  //expression of function

// const add = function(num1, num2) {return num1 + num2}
//   console.log(add(1, 5))

//main difference: HOISTING
// functions and var are "listed" at the top of the file

console.log(greeting())
function greeting (){
    return "hi";
}

console.log(add(1, 5))
const add = function(num1, num2) {return num1 + num2}
