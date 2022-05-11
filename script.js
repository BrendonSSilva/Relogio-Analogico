//
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    //date é usado para a manipulação de data. 
    let now = new Date();
    //pegar as horas
    let hour = now.getHours();
    //pegar os minutos
    let minutes = now.getMinutes();
    //pegar os segundos
    let seconds = now.getSeconds();

    //hora digital (fixZero é uma função para corrigir a falta do número 0 quando for apenas 1 número. ex: 9:10. corrigindo: 09:10)
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    //um circulo tem 360 graus. 1 minuto é igual a 60 segundos. 360 / 60 = 10 || 1segundo = 6 graus
    let sDeg = ((360 / 60) * seconds) - 90;
    //um circulo tem 360 graus. 1 hora é igual a 60 minutos. 360 / 60 = 10 || 1 hora = 60 graus
    let mDeg = ((360 / 60) * minutes) - 90;
    //no relógio existem 12 horas. então siga a lógica de trocar o 60 pelo 12
    let hDeg = ((360 / 12) * hour) - 90;

    //transformar a direção dos ponteiros
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
    //se alguma parte do horário for menor que 10, irá retornar "0"+horário 
    return time < 10 ? '0' + time : time;
}

setInterval(updateClock, 1000)
updateClock()