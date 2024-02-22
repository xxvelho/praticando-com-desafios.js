function alterarStatus(item){
    let itemId = `game-${item}`;
    
    let game = document.getElementById(itemId);
    
    let img = game.querySelector('div');
    let classImg = img.classList;
    
    let botao = game.querySelector('a');
    let classBotao = botao.classList;

    if(classBotao.contains('dashboard__item__button--return')){
        classBotao.remove('dashboard__item__button--return');
        classImg.remove('dashboard__item__img--rented');
        botao.innerHTML = "Alugar";
    }else{
        classBotao.add('dashboard__item__button--return');
        classImg.add('dashboard__item__img--rented');
        botao.innerHTML = "Devolver";
    }
}
