//Quando clicar no botao, executa a validação

document.getElementById("btnValidar").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");

    //Expressao simples para validar email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValido.test(email)) {
        mensagem.textContent = "✅ Email Válido!";
        mensagem.style.color = "lightgreen";
    } else {
        mensagem.textContent = " ❌ Email Inválido!";
        mensagem.style.color = "red";
    }
});
