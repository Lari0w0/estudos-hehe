let tempoDecorrido = 0;
let temporizador;
const lulao = document.querySelector('#lulao');
const bob = document.querySelector('#bob');
const jump = () => {
    lulao.classList.add('jump');
    setTimeout(() => {
        lulao.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const bobPosition = bob.offsetLeft;
    const lulaoPosition = +window.getComputedStyle(lulao).bottom.replace('px','');
    if (bobPosition <= 160 && bobPosition > 0 && lulaoPosition< 90){
        bob.style.animation = 'none';
        bob.style.left = `${bobPosition}px`;
        lulao.style.animation = 'none';
        lulao.style.bottom = `${lulaoPosition}px`;
        lulao.src = 'lulinha.gif';    
        clearInterval(loop);
        clearInterval(temporizador)
    }
},10)
document.addEventListener('keydown', jump);

tempoDecorrido = 0;
document.getElementById('tempo').innerText = tempoDecorrido;
temporizador = setInterval(atualizarTempo, 100);

function atualizarTempo() {
    tempoDecorrido++;
    document.getElementById('tempo').innerText = tempoDecorrido;
}