//Seleção do botão 
var botao = document.getElementById("mudarCor");

//Criar um evento: quando o botao for clicado, vai executar a função abaixo
botao.addEventListener("click", function() {

    //Gerar 3 numeros aletórios entre 0 e 255 (para RGB)
    const r = Math.floor(Math.random () * 256); 
    const g = Math.floor(Math.random () * 256);
    const b = Math.floor(Math.random () * 256);

    //Para alterar a cor de fundo da página para a cor RGB gerada
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});