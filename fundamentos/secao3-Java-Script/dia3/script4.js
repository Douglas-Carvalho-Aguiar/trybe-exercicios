//Criação da função maior palavra

function maiorPalavra(palavra){
    let maior = palavra[0];
    for(let index in palavra){
        if(palavra[index].length > maior.length){
            maior = palavra[index];
        }
    }
    return maior;
}

maiorPalavra(['douglas','agora','paralelepipedo'])
