let numero = 50;
//encontrando maior número primo

let primos = [2];
let maiorPrimo = 0;
let contador = 0;

for(let index = 50;index >= numero; index -=1){

for(let index1 =1; index1 < index; index1 +=1){
if(index % index1 == 0){
contatador = contador +1
}
}
if(contatador == 2){

    primos.push(index);
}
}
console.log(maiorPrimo);
console.log(primos);
