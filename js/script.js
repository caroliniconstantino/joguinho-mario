const mario = document.querySelector('.mario') //seletor css
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump');//função que add um nova classe à tag mario (html)

    setTimeout(() =>{//método q recebe função no 1ª parâmetro e o tempo (no 2º parâmetro) que deve esperar p/ executar a função
        mario.classList.remove('jump');//dps de 500s(tempo do pulo), ele remove a class jump do mario
    }, 500)
}

const loop = setInterval(()=>{//método q recebe função no 1ª parâmetro e o tempo (no 2º parâmetro) que deve esperar p/ executar a função
    const pipePosition = pipe.offsetLeft;//pega a posição, à esquerda, entre a borda e o pipe 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');//pega o infos do estilo q foi atribuído ao Mario, q neste caso é o bottom
    //replace substitui o px por nada e o + converte a string em number

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){//se a posição do tubo chegar a 120 E o morio tiver com a posição MENOR q 80 E o tubo tiver no posição > 0, significa q bateu no tubo, então executa o if e termina jogo*/
        pipe.style.animation = 'none'; //acaba a animação
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';//para a animação exatamente quando bater no tubo
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src="./images/mario_game_over.png";//altera a imagem para a imagem de game over
        mario.style.width = '6%';
        mario.style.marginLeft = '50px'

        clearInterval(loop);//interrompe o loop
    }

}, 10)

document.addEventListener('keydown', jump)
//método que escuto um evento, q neste caso é o 'keydown' (clique botão) e executa a função
//que está sendo passado no 2º parâmetro (jump)