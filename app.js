let amigos = [];

//Função para ADICIONAR amigos
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;
    if (!nomeAmigo) {//Validar que o campo de entrada não esteja vazio
        alert("Necessário adicionar pelo menos um nome na lista!");
        return;//O "return" é utilizado para interromper a execução do código e evitar possiveis bugs
    }

//Validar que o nome não esteja duplicado
 if(amigos.includes(nomeAmigo)) {
    alert(`O nome "${nomeAmigo}" já está na lista, por favor adicione outro nome.`)
    return;
   }

// Após validações, realizar a adição do amigo informado
    amigos.push(nomeAmigo);

// Limpeza do campo de entrada após inserção de amigo na lista
    inputAmigo.value = "";
    inputAmigo.focus();//O "focus" é utilizado para manter o cursor no campo de entrada após a inserção de um amigo
    atualizarLista();
}
//Fim da função para ADICIONAR amigos

//Inicio da função de Atualizar a Lista de Amigos
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}
//Fim da função de Atualizar a Lista de Amigos

//Inicio da função para SORTEAR os amigos

function sortearAmigo() {
    if (amigos.length === 0) { //Validar que a lista não esteja vazia
    alert("Não há amigos para o sorteio! Adicione pelo menos um nome para o sorteio.");
    return;
   }
// Após validações, realizar o sorteio
   let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `<li>"O amigo sorteado foi: "${sorteado} !"</li>`;
   let limparLista = document.getElementById("listaAmigos");//Limpar a lista de amigos após o sorteio
   limparLista.innerHTML = "";
   amigos = [];//Limpar o array de amigos após o sorteio
}