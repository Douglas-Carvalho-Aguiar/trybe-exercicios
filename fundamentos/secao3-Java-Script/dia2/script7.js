let array = ['java', 'javascript', 'python', 'html', 'css'];
let tamanhoMaior = array[0];
let tamanhoMenor = array[0];
for(let index = 1;index < array.length;index+=1){
if(tamanhoMaior.length < array[index].length){
    tamanhoMaior = array[index];
}
}
for(let index1 = 0;index1 < array.length;index1+=1){
    if(tamanhoMenor.length < array[index1].length){
        tamanhoMenor = array[index1];
    }
}
console.log(tamanhoMaior);
console.log(tamanhoMenor);

