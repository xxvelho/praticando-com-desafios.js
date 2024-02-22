var quantidadeSuperior = parseInt(document.getElementById('qtd-superior').innerText);
var quantidadeInferior = parseInt(document.getElementById('qtd-inferior').innerText);
var quantidadePista = parseInt(document.getElementById('qtd-pista').innerText);

let tipo = document.getElementById('tipo-ingresso');

let qtd = document.getElementById('qtd');

function comprar(){
    if(tipo.value ===  "pista"){
        document.getElementById('qtd-pista').innerHTML = verificarDisponibilidade(quantidadePista, qtd.value);
    }else if(tipo.value ===  "inferior"){
        document.getElementById('qtd-inferior').innerHTML = verificarDisponibilidade(quantidadeInferior, qtd.value);
    }else if(tipo.value ===  "superior"){
        document.getElementById('qtd-superior').innerHTML = verificarDisponibilidade(quantidadeSuperior, qtd.value);
    }
}

function verificarDisponibilidade(ingressosDisponiveis, quantidade) {
    if(ingressosDisponiveis - quantidade < 0){
        alert(`Quantidade indisponivel pata ${tipo}`);
        return parseInt(ingressosDisponiveis);
    }else{
        return parseInt(ingressosDisponiveis-quantidade);
    }
}
