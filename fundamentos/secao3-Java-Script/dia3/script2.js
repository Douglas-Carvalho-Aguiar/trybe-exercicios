//Criando função do índice maior


function indiciMaior(numeros){
    let maior =0;
    for(let index in numeros){
        if(numero[maior] < numeros[index]){
            maior = index;
        }
    }
    return maior;
}

indiciMaior([2,3,6,7,10,1])
