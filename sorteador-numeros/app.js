function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    var lista = [];
    if(quantidade > ate-de+1){
        alert('Diminua a quantidade de números sorteados ou aumente o escopo da geração.\nEssa geração de números, não repete números já sorteados.');
    }else{
        for(let i=0; i<quantidade; i++){
            let numero = obeterNumeroAleatorio(de, ate);
            while(lista.includes(numero)){
                numero = obeterNumeroAleatorio(de, ate);
            }
            lista.push(numero);
        }
        mostrarNumerosSorteados(lista.sort());
    }
    ativarBotãoReiniciar();
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    let texto = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    document.getElementById('resultado').innerHTML = texto;
    ativarBotãoReiniciar();
}

function obeterNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

function mostrarNumerosSorteados(list){
    let texto = `<label class="texto__paragrafo">Números sorteados: <br>${list}</label>`
    document.getElementById('resultado').innerHTML = texto;
}

function ativarBotãoReiniciar() {
    let id = document.getElementById('btn-reiniciar');
    if(id.classList.contains('container__botao-desabilitado')){
        id.classList.remove('container__botao-desabilitado');
        id.classList.add('container__botao');
    }else{
        id.classList.add('container__botao-desabilitado');
        id.classList.remove('container__botao');
    }
}
