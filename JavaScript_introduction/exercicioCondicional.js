function testarTamanho(valor){
    if (valor > 15){
        return 'maior';
    }else if(valor < 3){
        return 'menor';
    }else if(valor >= 3 && valor <= 15){
        return 'na faixa';
    }
}