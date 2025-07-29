//Gera um número aleatório entre 1 a 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

//Contador de tentativas
let tentativas = 0 ;


//Seleciona elementos do HTML
const input = document.getElementById("palpite");
const botao = document.getElementById("verificar");
const mensagem = document.getElementById("mensagem");
const tentativasE1 = document.getElementById("tentativas");


//Evento de clique no "Botao"
botao.addEventListener("click", () => {
    //Pega o número digitado e converte para número inteiro
    const palpite = parseInt(input.value);

    //Verifica se o valor é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        mensagem.style.color="red",
        mensagem.textContent = "Escreva um número entre 1 e 10."
        return;
    }

    //Incrementa Tentativas
    tentativas++;

    //Verifica se accertou 

    if (palpite === numeroSecreto){
        mensagem.style.color="green";
        mensagem.textContent = `Parabéns!! Acertaste em ${tentativas} tentativas.`
        botao.disabled = true;
        input.disabled = true;

    } else if (palpite < numeroSecreto) {
        mensagem.style.color="red";
        mensagem.textContent = "🔺 Muito baixo! Tenta um número maior.";
    } else {
        mensagem.style.color="red";
        mensagem.textContent = "🔻 Muito acima! Tenta um número menor."
    }
    
    //Atualiza o número de tentativas
    tentativasE1.textContent = `Tentativas: ${tentativas}`;
});