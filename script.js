const botao = document.querySelector ("#btn"); 
const img1 = document.querySelector ("#imagemprimeira");
const frase = document.querySelector ("#fraseprincipal");


btn.addEventListener ("click", function () { 
  if (botao.value == 'primeiro'){
    img1.src = "img/feliz.png"
    frase.innerText = "Como ele era feliz quando cuidavamos bem dele?"
    botao.value = 'segundo'
    }

  else if (botao.value == "segundo"){
    img1.src = "img/estudando.png"
    frase.innerText = "Como ele gostava de estudar e aprender?"
    botao.value = "terceiro"
    }
   
  else {
    img1.src =  "img/dormindo.png"
    frase.innerText = "E como gostava de dormir depois de um dia cheio??"
    botao.value = "terceiro"
    }

  });