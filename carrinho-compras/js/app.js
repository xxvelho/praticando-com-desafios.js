var total = 0;
var carrinho = document.querySelector('.carrinho__produtos__produto');
var itensCarrinho = [];
var listaQtd = [];
var listaItem = [];
var listaValor = [];

function adicionar(){
    let produto = document.getElementById('produto').value;
    let qtd = document.getElementById('quantidade').value;
    let index;
    if(qtd != "" && qtd > 0){
        if(produto === "Oculus VR - R$5000"){
            index = findIndexByObject(itensCarrinho, produto);
            if(index !== -1){
                listaQtd[index] += parseInt(qtd);
            }else{
                itensCarrinho.push(produto);
                listaQtd.push(parseInt(qtd));
                listaItem.push("Oculos VR");
                listaValor.push('5000');
            }
            calcularTotal(5000, parseInt(qtd));
        }else if(produto === "Fone de ouvido - R$100"){
            index = findIndexByObject(itensCarrinho, produto);
            if(index !== -1){
                listaQtd[index] += parseInt(qtd);
            }else{
                itensCarrinho.push(produto);
                listaQtd.push(parseInt(qtd));
                listaItem.push("Fone de ouvido");
                listaValor.push('100');
            }
            calcularTotal(100, parseInt(qtd));
        }
        else if(produto === "Celular - R$1400"){
            index = findIndexByObject(itensCarrinho, produto);
            if(index !== -1){
                listaQtd[index] += parseInt(qtd);
            }else{
                itensCarrinho.push(produto);
                listaQtd.push(parseInt(qtd));
                listaItem.push("Celular");
                listaValor.push('1400');
            }
            calcularTotal(1400, parseInt(qtd));
        }
    }
}

function calcularTotal (valor, quantidade){
    total += (valor * quantidade);
    mostrarTotal();
    mostrarCarrinho();
}

function mostrarTotal(){
    document.getElementById('valor-total').innerHTML = total;
}

function mostrarCarrinho() {
    let texto = ''
    for(let i=0; i<itensCarrinho.length; i++){
        texto = texto + `<span class="texto-azul">${listaQtd[i]}x</span> ${listaItem[i]} <span class="texto-azul">R$${listaValor[i]}</span><br>`;
    }
    carrinho.innerHTML = texto;
}

function limpar(){
    
    total = 0;
    carrinho.innerHTML = '';
    limparLista();
    mostrarTotal();
}

function limparLista(){
    itensCarrinho = [];
    listaItem = [];
    listaQtd = [];
    listaValor = [];
}

function findIndexByObject(array, obj) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === obj) {
            return i; // Retorna o índice quando o objeto for encontrado
        }
    }
    return -1; // Retorna -1 se o objeto não for encontrado na lista
}