//Seleciona os elementos do HTML
const inputTarefa = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

//Cria um array para armazenar as tarefas (em memória)
let tarefas = []

//Para adicionar evento de clique no botao
botaoAdicionar.addEventListener("click", () => {
    const texto = inputTarefa.value.trim(); //Vai pegar o valor digitado e limpar

    if (texto !== "") {
        tarefas.push(texto); //Adiciona o array
        atualizarLista(); //Atualiza a lista na tela
        inputTarefa.value = ""; //Limpa o campo
    }
});


    //Função para atualizar a lista visualmente
    function atualizarLista() {
        //Limpa a lista atual
        listaTarefas.innerHTML = "";

        //Para cada tarefa, cria um <li> com botão para excluir
        tarefas.forEach((tarefa, index) => {
            const li = document.createElement("li");
            li.textContent = tarefa;

        //Botão de Excluir
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "X";
        btnExcluir.addEventListener("click", ()=> {
            //Remove a tarefa do array e atualizar a lista
            tarefas.splice(index, 1);
            atualizarLista();
        });

        //Junta os elementos
        li.appendChild(btnExcluir);
        listaTarefas.appendChild(li);
        });
    }
