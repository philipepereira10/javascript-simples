
// array  "frases" com frases inspiradoras
const frases = [
    "Acredite no seu código",
    "Toda linha conta.",
    "Erros são professores disfarçados",
    "Continue tentando, programador!",
    "Seu futuro Dev agradece o esforço de hoje!",
    "Debug é uma arte",
    "Persitência gera resultado!"
];

// Quando o botao com id "btnGerar" for clicado , executa a funcaoo
document.getElementById("btnGerar").addEventListener("click", function() { 

    
    var indiceAleatorio = Math.floor(Math.random() * frases.length)  // Gera um número aleatório entre 0 e o numero de frase -1
    var frase = frases[indiceAleatorio];

    document.getElementById("frase").textContent = frase;
})