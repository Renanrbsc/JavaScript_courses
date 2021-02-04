let vetorNumero = [1,2,3,4,55,33,22,100];
let valor = 5;
const valorLimite = 100;

///// FOR com index
for (let index= 0; index < vetorNumero.length; index++){
    if (vetorNumero [index]> 20){
        console.log("maior");
    }
}

///// FOR em lista
for (const item of vetorNumero){
    if (item > 20){
        console.log("maior");
    }
}

///// WHILE
while(valor < valorLimite){
    console.log(valor);
    valor = valor * 2;
}

///// DO
do{
    console.log(valor);
    valor = valor * 2;
}while(valor < valorLimite);

