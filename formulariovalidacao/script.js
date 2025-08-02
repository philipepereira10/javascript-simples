//Selecionar os elementos do formulario

const form = document.getElementById("formulario")
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("password")
const confirmarSenha = document.getElementById("confirmarSenha");
const mensagem = document.getElementById("mensagem")

//Evento de envio de Formulário

form.addEventListener("submit",(e) => {
    e.preventDefault(); //Impede o envio automãtico


//Limpa a mensagem
mensagem.textContent = "";
mensagem.style.color = "red";

//Validaçóes
 if (nome.value.trim().length < 3) {
    mensagem.textContent = "O nome deve ter pelo menos 3 caracteres.";
    return;
 } 

 //Regex básico para validar email
 const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!regexEmail.test(email.value)) {
    mensagem.textContent = "Insira um email válido!";
    return;
 }
 
 if(senha.value.length < 6) {
    mensagem.textContent = "A password tem de ter pelo menos 6 caracteres.";
    return;
 }

 if (senha.value !== confirmarSenha.value) {  //!== se nao for igual
    mensagem.textContent = "As passwords não coincidem."
    return;
 } 

//Se tudo estiver certo
mensagem.textContent = "Registro efetuado com sucesso";
mensagem.style.color = "green";

//Para limpar o formulário
form.reset();

});
