// let x = "";
// console.log(x);
// x="Hi";
// console.log(x);

//1) declaration od function
             //string
function printText(text){
    console.log(text)
}

//2) execution of the function (1x or more)
printText(add())
printText("another text")

// three ways of wrinting functions

function add(){
   return 2+2;
}
// console.log(add())

let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }
        return e
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))