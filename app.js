let listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

//Função para ADICIONAR amigos
function adicionarAmigo() { //Validar que o campo de entrada não esteja vazio
    if (!inputAmigo.value) {
        alert("Necessário adicionar pelo menos um nome na lista!");
        return;
    }
//Validar que o nome não esteja duplicado
 if(listaAmigos.includes(inputAmigo.value)){
    alert(`"O nome "${inputAmigo.value}" já está na lista, por favor adicione outro nome."`)
    return;
   }
// Após validações, realizar a adição do amigo informado
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

// Limpeza do campo de entrada após inserção de amigo na lista
    inputAmigo.value = "";
}
//Fim da função para ADICIONAR amigos
//Inicio da função para SORTEAR os amigos
function sortearAmigo() { //Validar que a lista não esteja vazia
    if (listaAmigos.length === 0) {
    alert("Não há amigos para o sorteio! Adicione pelo menos um nome para o sorteio.");
    return
   }
// Após validações, realizar o sorteio
   const nomeRandom = Math.floor(Math.random() * listaAmigos.length);
   const amigoSorteado = listaAmigos[nomeRandom];
   ulResultado.innerHTML = `<li>"O amigo sorteado é: "${amigoSorteado} !"</li>`;

}