let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let contador =0;
let result = 0;
let maiorNumero = 0;
let contador2;
let maior =0;
let criandoArreys = [];


for(let index = 0; index <numbers.length; index+=1){
    console.log(numbers[index]);
    soma = soma + numbers[index];
    contador = contador +=1;


}
result = soma/contador;
console.log(soma);
console.log(result);
console.log(contador2);
if(result >20){
    console.log('O valor da média aritmética é maior que 20');
}else{
    console.log('O valor da média aritmética é menor ou igual a 20”');
}
