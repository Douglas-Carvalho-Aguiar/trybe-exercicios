let peca = 'peao'
   
switch (peca){

    case 'cavalo':
        console.log('Movimentos em L');
        break;

        case 'peao':
            console.log('So pode mover 1 casa para frente, exeto pela primeirajogada, nesse o jogador pode mover 2 casas');
            break;

            default:
                console.log('qual sua peça?');
}
