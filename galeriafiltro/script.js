//Lista de imagens com categoria

const imagens = [
  { src: 'https://placehold.co/200x120?text=Show+1', categoria: 'shows' },
  { src: 'https://placehold.co/200x120?text=Show+2', categoria: 'shows' },
  { src: 'https://placehold.co/200x120?text=Bastidores+1', categoria: 'bastidores' },
  { src: 'https://placehold.co/200x120?text=Capa+1', categoria: 'capas' },
  { src: 'https://placehold.co/200x120?text=Capa+2', categoria: 'capas' },
  { src: 'https://placehold.co/200x120?text=Bastidores+2', categoria: 'bastidores' },
];


//Elementos 
const galeria = document.getElementById("galeria");
const botoes = document.querySelectorAll("#botoes-categorias button");

//Função para mostrar imagens

function mostrarImagens(categoria) {
    galeria.innerHTML = "";

    const filtradas = categoria === "todos"
    ? imagens
    : imagens.filter(img => img.categoria === categoria);

    filtradas.forEach (img => {
        const elemento = document.createElement("img");
         elemento.src = img.src;
        elemento.alt = img.categoria;
        elemento.style.margin = "10px";
        galeria.appendChild(elemento);

    galeria.appendChild(elemento);
    });
   
};


//Eventos nos botoes 
botoes.forEach (botao => {
    botao.addEventListener("click", () => {
        const categoria = botao.dataset.categoria;
        mostrarImagens(categoria);
    });
});

//Mostrar todos ao carregar 
mostrarImagens("todos");