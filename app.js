// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    let lista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;

    lista.appendChild(nuevoElemento);
    input.value = "";
    input.focus();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    let lista = document.getElementById("listaAmigos").children;
    
    if (lista.length === 0) {
        alert("No hay nombres en la lista para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    
    let nombreSorteado = lista[indiceAleatorio].textContent;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}