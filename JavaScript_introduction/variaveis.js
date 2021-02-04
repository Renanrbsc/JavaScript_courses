let num = 120; // let funciona desntro deste bloco

var text = "string";

const booleano = true; // const nao pode ser alterado

let x = null;

/////////////////////// Strings

let hello = "Hello";
let world = "World";

let helloWorld1 = hello.concat(world)
let helloWorld2 = hello.concat(world, " ", hello)
let helloWorld3 = `${hello} ${world} ${1+1}`; // usando crase para recohecer os $

/////////////////////// Vetor

let vetor = [1,2,3,4,5,6]; 

console.log(vetor[1]);
vetor[0] = 9000;
vetor[5] = 7;

/////////////////////// Objeto

let carro = {
    rodas: 4,
    portas: 2,
    nome: "Um carro"
};

carro.portas = 2;
carro["portas"] = 2;

/////////////////////// Funçoes

let functionFirst = function(valor1, valor2){
    // make something 
    console.log(valor1 + valor2);
};

function functionSecond(valor1, valor2){
    alert(valor1 + valor2);
};
