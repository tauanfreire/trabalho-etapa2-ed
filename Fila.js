import Pedido from "./Pedido.js";

export default class Fila {
  #inicio;
  #fim;

  constructor() {
    this.#inicio = null;
    this.#fim = null;
  }

  vazio() {
    return this.#inicio === null;
  }

  enfileirar(pedido) {
    const novoPedido = pedido;

    if (this.vazio()) {
      this.#inicio = novoPedido;
      this.#fim = novoPedido;
    } else {
      this.#fim.proximo = novoPedido;
      this.#fim = novoPedido;
    }
  }

  desenfileirar() {
    if (this.vazio()) {
      console.log("A fila está vazia!");
      return;
    }

    const removido = this.#inicio;
    this.#inicio = this.#inicio.proximo;

    if (this.#inicio === null) {
      this.#fim = null;
    }

    return removido;
  }

  mostrarFila() {
    if (this.vazio()) {
      console.log("Fila Vazia");
      return;
    }

    let atual = this.#inicio;

    while (atual != null) {
      console.log("________________________");
      console.log(`Número do Pedido: ${atual.getNumero()}`);
      console.log(`Pedido: ${atual.getDescricao()}`);
      atual = atual.proximo;
    }
  }

  mostrarInicio() {
    if (this.vazio()) {
      return "Fila vazia";
    }
    return `Primeiro Pedido: {${this.#inicio.getNumero()}, ${this.#inicio.getDescricao()}}`;
  }

  getInicio() {
    return this.#inicio;
  }

  esvaziarFila(){
    let atual = this.#inicio

    while(atual != null){
      this.desenfileirar()

      atual = atual.proximo;
    }
  }
}
