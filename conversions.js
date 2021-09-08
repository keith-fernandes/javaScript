//data type
//booleans

//implicit conversion
const num= 456;
const stringNum= "456";
//const stringNum= Number("456"); - conversion of a string to a number 

console.log(num == stringNum)
console.log(num + stringNum)
 

//explicit conversion

//Number()
console.log(num + Number(stringNum)) //conversion of a string to a number

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log( Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

//using + to convert
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let usuarioConectado= false;
console.log (Number( usuarioConectado ) ); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado= true;
console.log (Number( usuarioConectado ) ); // agora teremos a conversão de true (verdadeiro) para o número 1.