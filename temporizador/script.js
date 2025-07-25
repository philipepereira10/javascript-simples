// variavel para guardar o setInterval
let intervalo;

document.getElementById("btnIniciar").addEventListener("click", function(){
    let tempo = parseInt(document.getElementById("tempoInput").value);

    if(isNaN(tempo) || tempo <= 0) {
        alert ("Digite um número válido!")
        return;
    }

    document.getElementById("contador").textContent = tempo;

    //Limpa o intervalo anterior, se houver algo 
    clearInterval(intervalo);

    //Começa contagem regressiva 
    intervalo = setInterval(function() {
        tempo --;
        document.getElementById("contador").textContent = tempo;

        if (tempo <= 0) {
            clearInterval(intervalo); //Para a contagem
            document.getElementById("contador").textContent = "Tempo esgotado!";
        }
    }, 1000);
    });