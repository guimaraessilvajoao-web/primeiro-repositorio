const botoes = document.querySelectoraLL('button')

botoes. forEach(function (botao)) {
  let curtiu = false;
  botao. addEventListener('click, botaoClicado');
  function botaoClicado(){
    console.log('fui clicado');
    let texto = botao.querySelrctor('span');
    if (curtiu ===false) {
      texto.texContent++;
      curtiu = true;  
} else {
texto.textCon

}

}
    
