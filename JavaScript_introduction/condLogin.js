let objetoServidor = {
    acesso: true,
    login: "Renan",
};

let objetoServidor2 = {
    erro: "Erro ao conectar ao servidor"
};

function conexaoLogin(respostaDoServidor){
    if (respostaDoServidor == 1){
        respostaDoServidor = objetoServidor;
    }else{
        respostaDoServidor = objetoServidor2;
    }
    
    if (respostaDoServidor.erro == null){
        if(respostaDoServidor.acesso){
            alert(`login: ${respostaDoServidor.login}`);
        }else{
            alert("acesso negado!");
        }
    }else{
        alert(respostaDoServidor.erro);
    }
}