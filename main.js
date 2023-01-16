function tocarSom(seletorAuldio) {

    const elemento = document.querySelector(seletorAuldio);

    if (elemento  && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seleteor invalido');
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocarSom;


//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    }   

    tecla.onkeydown = function (evento) {

        // console.log(evento.code === 'Space');

        if (evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
