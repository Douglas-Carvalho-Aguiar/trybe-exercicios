//Transformando em uma função arrow function

const numeroAleatorio = () => {
    return Math.random()
  }
  console.log(numeroAleatorio());

  const hello = (nome) =>  `Olá, ${nome}!`
  
  let nome = 'Ivan';
  console.log(hello(nome));