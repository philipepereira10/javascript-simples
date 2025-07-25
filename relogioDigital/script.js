//Funçáo que formata os numeros menores que 10 com um zero à esquerda

function formatarNumero(num) {
    return num < 10 ? '0' + num : num;
}

// Função que atualiza o relogio a cada segundo

function atualizarRelogio () {
    const agora = new Date(); //Hora e data Atual

    const horas = formatarNumero(agora.getHours());
    const minutos = formatarNumero(agora.getMinutes());
    const segundos = formatarNumero(agora.getSeconds());

    const horaAtual = `${horas}:${minutos}:${segundos}`;

// Atualiza o conteudo do elemento com id relogio

const relogioElemento = document.getElementById("relogio");
    if (relogioElemento) {
        relogioElemento.textContent = horaAtual;
    }
}

// Atualiza o relogio imediatamente e depois a cada 1000ms (1 segundo)

atualizarRelogio();
setInterval(atualizarRelogio, 1000);