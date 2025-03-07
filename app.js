let listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementbyID("resultado");

function adicionarAmigo() {
    if (!inputAmigo.value) {
        alert("Necessário adicionar pelo menos um nome na lista!");
        return;
    } 

    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

    // Limpeza do campo de entrada
    inputAmigo.value = "";
}