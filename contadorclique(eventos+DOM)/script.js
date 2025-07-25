 var contador = 0; //Começamos com 0 cliques

 //Quando o botáo for clicado...
 document.getElementById("botaoClique").addEventListener("click", function() {
    contador++; //Aumenta o número de cliques 

    document.getElementById("contador").textContent = contador; // Atualiza o valor no ecrã
 })