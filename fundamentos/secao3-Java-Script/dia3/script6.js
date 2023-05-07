//Somando números

function somaNumeros(numero){
    let soma = 0;
    if(numero < 0){
        return false;
    }
    for(let index =1; index <= numero; index +=1){
     soma = soma + index;
    }
    return soma;
}

somaNumeros(10)
