//Funcao chamada ao clicar em um botao de operação

function calcular(operador) {
    const v1 = parseFloat(document.getElementById("valor1").value);
    const v2 = parseFloat(document.getElementById("valor2").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(v1) || isNaN(v2)) {
        resultado.textContent = "❌ Por favor, digite dois números válidos!"
    return;
    } 
    
    let total;

    switch (operador) {
        case '+':
            total = v1 + v2;
            break;

        case '-':
            total = v1 - v2;
            break;

        case '*':
            total = v1 * v2;
            break;

        case '/':
            total = v2 !== 0 ? v1 / v2 : `Erro: divisão por zero`;
            break;
        
    }

    resultado.textContent = "Resultado: " + total;
}