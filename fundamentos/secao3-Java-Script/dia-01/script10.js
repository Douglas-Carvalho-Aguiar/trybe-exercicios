let a = 50;
let b = 100;
let c = b*0.2;
let result = b-(a+c);


if(result > 0){
    console.log('Seu lucro foi de:', result);
}else if(result == 0){
    console.log('Você não obteve lucro ou prejuízo');
}else{
    console.log('Erro');
}