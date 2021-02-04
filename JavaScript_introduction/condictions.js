let booleano = false;
let ola = "Ola Mundo";
let tchau = "Tchau Mundo";
let numero = 55;

if (numero == 66){
    booleano = !booleano;
}

if (booleano){
    console.log(ola);
}else{
    alert(tchau);
}

if (numero === "55"){
    console.log(ola);
}else if (booleano !== "false"){
    console.log(ola);
}else {
    console("não encontrado");
}

switch(numero){
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("nenhuma alternativa");
        break;
}
