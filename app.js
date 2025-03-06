let amigos = [];

function adicionarAmigos() {
    let amigoEscolhido = document.querySelector("input").value;
    if (amigoEscolhido === "") {
        alert("Digite um nome para adicionar ao sorteio");
    } else {
        amigos.push(amigoEscolhido);
        limparCampo();
        mostrarAmigosNaLista();
    }
}

function limparCampo() {
    amigoEscolhido = document.querySelector("input");
    amigoEscolhido.value = "";
}

function sortearAmigos() {
    paragrafoAmigos = document.getElementById("listaAmigos");
    paragrafoAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
       let item = document.createElement("li");
       item.textContent = amigos[i];
       paragrafoAmigos.appendChild(item);
    }
}