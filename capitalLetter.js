const myName = "Keith";
let capitalName ="";

for (let i = 0; i < myName.length; i++){
    capitalName += myName[i].toLocaleUpperCase()
}
console.log(capitalName)

//

const courseName = "Elements of JS - ";
const plataformName = "Alura";

const completName = courseName.concat(plataformName)
console.log(completName)