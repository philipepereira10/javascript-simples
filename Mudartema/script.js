// Seleciona o botao que troca o tema
const btn = document.getElementById('toggle-theme');

//Adiciona um ouvinte de evento de clique ao botao
btn.addEventListener('click', () => {
    //Alterna a classe 'dark-mode' no body (ativa ou desativa)
    document.body.classList.toggle('dark-mode');

    //Verifica se o body está com a classe 'dark-mode'
    if (document.body.classList.contains('dark-mode')) {
        //Se estiver no modo escuro, muda o texto do botao para "Mudar para claro"
        btn.textContent = 'Mudar para Claro';
    } else {
        //Se estiver no modo claro, muda o texto do botao para "Mudar para Escuro"
        btn.textContent = 'Mudar para Escuro';
    }
});