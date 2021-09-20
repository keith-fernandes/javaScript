const myName = "Keith";
let capitalName ="";

for (let i = 0; i < myName.length; i++){
    capitalName += myName[i].toLocaleLowerCase()
}
console.log(capitalName)

//

const courseName = "Elements of JS - ";
const plataformName = "Alura";

const completName = courseName.concat(plataformName)
console.log(completName)

let text = "ESTOU Á DISPOSIÇÃO PARA MAIORES ESCLARECIMENTOS QUE SE FIZEREM NECESSÁRIOS"
// ME FOREM CONFIADAS, DEIXO SEMPRE AS PORTAS ABERTAS POR ONDE PASSO, SOU DE FÁCIL
// RELACIONAMENTO PROFISSIONAL E CONQUISTO A CONFIANÇA DOS CLIENTES, PASSANDO
// SEGURANÇA NOS CONTATOS E ARGUMENTAÇÕES NECESSÁRIAS.
// RESIDO A 50 KMS DE RIBEIRÃO PRETO, E Á DISPOSIÇÃO DE EVENTUALMENTE TRABALHAR
// COMO “ FREELANCE ( POSSUO VEÍCULO PRÓPRIO )
// ESTOU Á DISPOSIÇÃO PARA MAIORES ESCLARECIMENTOS QUE SE FIZEREM NECESSÁRIOS"
console.log(text.toLocaleLowerCase())