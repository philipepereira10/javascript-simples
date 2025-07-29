// Lista de perguntas com alternativas e resposta correta 

const perguntas = [
    {
        pergunta : "Qual o nome do vocalista do Imagine Dragons?",
        opcoes : ["Dan Reynolds", "Chris Martin", "Adam Levine", "Billie Joe"],
        respostaCorreta : "Dan Reynolds"
    }, 

    {
        pergunta : "Qual dessas músicas é da banda Imagine Dragons?",
        opcoes : ["Radioactive", "Fix you", "Sugar", "In the End"],
        respostaCorreta : "Radioactive"

    },

    {
        pergunta : "Em que ano Imagine Dragons lançou o álbum 'Night Vision' ?",
        opcoes : ["2011", "2012", "2013", "2014"],
        respostaCorreta : "2012"
    }
];

//Variáveis de Controlo
let perguntaAtual = 0;
let pontuacao = 0;

//Seleciona elementos do HTML
const perguntaE1 = document.getElementById("pergunta");
const opcoesE1 = document.getElementById("opcoes");
const resultadoE1 = document.getElementById("resultado");
const botaoProxima = document.getElementById("proxima");

//Mostra a pergunta atual no HTML

function mostrarPergunta () {
    const pergunta = perguntas[perguntaAtual];
    perguntaE1.textContent = pergunta.pergunta;
    opcoesE1.innerHTML = "";

//Cria um botao para cada opção de resposta 
pergunta.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.addEventListener("click", () => verificarResposta(opcao));
    opcoesE1.appendChild(botao);
});
}

//Verifica se a resposta está correta 
function verificarResposta(opcaoSelecionada) {
    const pergunta = perguntas[perguntaAtual];

    if (opcaoSelecionada === pergunta.respostaCorreta) {
        resultadoE1.textContent = "✅ Resposta Certa!"
        pontuacao++;
    } else {
        resultadoE1.textContent= `❌ Errado! A resposta certa era ${pergunta.respostaCorreta}`;
    }

// Desativa os botoes após resposta
Array.from(opcoesE1.children).forEach(btn => btn.disable = true);
botaoProxima.style.display = "block";
}

//Vai para a próxima pergunta ou finaliza
botaoProxima.addEventListener("click", () => {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        resultadoE1.textContent = "";
        botaoProxima.style.display = "none";
        mostrarPergunta();
    } else {
        mostrarResultadoFinal();
    }
});

//Mostra pontuaçáo final

function mostrarResultadoFinal() { 
    perguntaE1.textContent = "Parabéns!!! Quiz Finalizado!";
    opcoesE1.innerHTML = "";
    resultadoE1.textContent = `Você acertou ${pontuacao}  de ${perguntas.length} perguntas.`;
    botaoProxima.style.display = "none";
}

//Inicia o Quiz
mostrarPergunta();


