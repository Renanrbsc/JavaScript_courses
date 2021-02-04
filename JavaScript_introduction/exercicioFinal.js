function testeFinal(umaString, umNumero){
    let retorno;
 
    switch(umaString){
        case "mundojs":
            console.log("MundoJS");
            retorno = umNumero;
            break;
 
        case "soma":
            let metadeNumero = (umNumero/2);
            let quadradoNumero = (umNumero*umNumero);
            retorno = metadeNumero + quadradoNumero;
            break;
 
        case "vetor":
            let vetor = [];
            for(let i = 0; i< 5; i++){
                vetor[i] = umNumero + (i * 2);
            }
            retorno = vetor;
            break;
 
        case "booleano":
            let array = [];
            let total = 0;
            for(let i = 0; i < 5; i++){
                array[i] = umNumero + (i * 2);
                total = total + array[i];
            }
            retorno = total > 35;
            break;
        default:
            retorno = -1;
    }
    return retorno;
}