import Fila from "./Fila.js";
import Pedido from "./Pedido.js";

const fila = new Fila();

const cadastrar = document.getElementById("buttonCadastrar");
const excluir = document.getElementById("buttonExcluir");
const limpar = document.getElementById("limparFila");
const vender = document.getElementById("buttonVender");

vender.addEventListener("click", entregarPedido);
limpar.addEventListener("click", limparFila);
cadastrar.addEventListener("click", cadastrarPedido);
excluir.addEventListener("click", excluirPedido);

function entregarPedido() {
  if (fila.vazio()) {
    semPedidos();
  } else {
    let pedido = fila.getInicio();
    alert(`O pedido ${pedido.getDescricao()} foi entregue!`);

    fila.desenfileirar();
    renumerarPedidos(); 
    exibirPedidos();
  }
}

function exibirPedidos() {
  const divPedidos = document.getElementById("pedidos");
  divPedidos.innerHTML = "";
  let atual = fila.getInicio();

  while (atual != null) {
    const p = document.createElement("p");
    p.textContent = `Pedido n°${atual.getNumero()}: ${atual.getDescricao()}`;
    divPedidos.appendChild(p);
    atual = atual.proximo;
  }
}

function limparFila() {
  if (fila.vazio()) {
    semPedidos();
  } else {
    fila.esvaziarFila();
    exibirPedidos();
  }
}

function semPedidos() {
  alert("ATENÇÃO! NÃO TEM PEDIDOS CADASTRADOS");
}

function excluirPedido() {
  const div = document.getElementById("pedidos");
  const paragrafos = div.querySelectorAll("p");

  if (paragrafos.length > 0) {
    paragrafos[0].remove(); 

    fila.desenfileirar(); 
    renumerarPedidos();  
    exibirPedidos();
  } else {
    semPedidos();
  }
}

function cadastrarPedido() {
  const textoLanche = document.getElementById("lancheInput").value;

  if (textoLanche === null || textoLanche === "") {
    alert("ATENÇÃO! DIGITE ALGUM LANCHE!");
  } else {
    const pedido = new Pedido(0, textoLanche);
    document.getElementById("lancheInput").value = "";
    fila.enfileirar(pedido);

    renumerarPedidos();
    exibirPedidos();
  }
}

function renumerarPedidos() {
  let atual = fila.getInicio();
  let numero = 1;
  while (atual != null) {
    atual.setNumero(numero);
    numero++;
    atual = atual.proximo;
  }
}
