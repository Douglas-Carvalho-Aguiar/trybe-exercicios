//Sorteador de loteria

const checkNumber = (myNumber, randonNumber) => myNumber === randonNumber;

const resultadoLoteria = (myNumber, checkNumber) =>{
  const numeroAleatorio = Math.floor((Math.random() * 5) + 1);
  
  return checkNumber(myNumber, numeroAleatorio) ? 'Luck day, you won!' : 'Try again next time';
}

console.log(resultadoLoteria(2, checkNumber));