//Objetos em for/in

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem:'Tio Patinhas',
    origem:'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota:'O último MacPatinhas',
    recorrente:'sim'
  };


  for(let index in info){
    console.log(index);
  }
  for(let index1 in info){
    console.log(info[index1]);
  }

  console.log('Bem-vinda, ' + info.personagem);
  info['recorrente'] = 'Sim';
  console.log(info.recorrente);