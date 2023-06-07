//Corretor automático de exame

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const arrayComparation = (rightAnswers, studentAnswers) =>{

if(rightAnswers === studentAnswers){
  return 1;
}else if (studentAnswers === 'N.A'){
  return 0;
}else {
return -0.5;
}

}

const countPoints = (rightAnswers, studentAnswers, evento) =>{
  let contador = 0;
  for(let index =0; index < rightAnswers.length; index += 1){
    let valor = evento(rightAnswers[index], studentAnswers[index]);
    contador += valor;
  }
  rightAnswers
  return `Nota: ${contador}`;
}
console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS,arrayComparation));
