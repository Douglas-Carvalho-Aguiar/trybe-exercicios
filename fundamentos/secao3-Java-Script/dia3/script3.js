// Criação da função índice do menor

let menor = 0;
function indiceMenor(numero){
    for(let index in numero){
        if(numero[menor] > numero[index]){
            menor = index;
        }
    }
    return menor;
}
indiceMenor([2,3,6,7,10,1])
