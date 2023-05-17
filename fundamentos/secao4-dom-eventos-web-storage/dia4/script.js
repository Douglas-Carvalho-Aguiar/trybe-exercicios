//As pessoas devem ter o poder de alterar:


window.onload = () =>{
// Cor de fundo da tela;

    const mudancaDeCorDeFundo = (corFundo) =>{
     const fundo = document.querySelector('.content');
     fundo.style.backgroundColor = corFundo;
    }
    // Cor do texto;

    const mudancaNaCorDosParagrafos = (corParagrafo) =>{
        const paragrafo = document.querySelectorAll('.paragraph');
        
         for(let index = 0; index < paragrafo.length; index +=1){
             paragrafo[index].style.color = corParagrafo;
         }
    }

    // Tamanho da fonte;
    const mudandoFonte = (fonte) =>{
        const paragrafo = document.querySelectorAll('.paragraph');
        
         for(let index = 0; index < paragrafo.length; index +=1){
             paragrafo[index].style.fontSize = fonte;
         }
    }
    // Espaçamento entre as linhas do texto;
    const mudandoEspaco = (altura) =>{
        const paragrafo = document.querySelectorAll('.paragraph');
        
         for(let index = 0; index < paragrafo.length; index +=1){
             paragrafo[index].style.lineHeight = altura;
         }
    }
    // Tipo da fonte (Font family).
    const mudandoTipoFonte = (tipoFonte) =>{
        const paragrafo = document.querySelectorAll('.paragraph');
        
         for(let index = 0; index < paragrafo.length; index +=1){
             paragrafo[index].style.fontFamily = tipoFonte;
         }
    }

    //Ativando os botões
 
    let corDeFundo = document.querySelectorAll('#background-color>button');
for(let index = 0; index < corDeFundo.length; index += 1){
    corDeFundo[index].addEventListener('click', (evento) =>{
        mudancaDeCorDeFundo(evento.target.innerHTML);
    });
}

let corDosParagrafos = document.querySelectorAll('#font-color>button');
for(let index = 0; index < corDosParagrafos.length; index +=1){
    corDosParagrafos[index].addEventListener('click', (evento2) =>{
        mudancaNaCorDosParagrafos(evento2.target.innerHTML);
    });
}
  
let mudancaDaFonte = document.querySelectorAll('#font-size>button');
for(let index = 0; index < mudancaDaFonte.length; index +=1){
    mudancaDaFonte[index].addEventListener('click', (evento3) =>{
        mudandoFonte(evento3.target.innerHTML);
    });
}

let espacamento = document.querySelectorAll('#line-height>button');
for(let index = 0; index < espacamento.length; index +=1){
    espacamento[index].addEventListener('click', (evento4) =>{
        mudandoEspaco(evento4.target.innerHTML);
    });
}

let tipo = document.querySelectorAll('#font-family>button');
for(let index = 0; index < tipo.length; index +=1){
    tipo[index].addEventListener('click', (evento5) =>{
        mudandoTipoFonte(evento5.target.innerHTML);
    });
}
}