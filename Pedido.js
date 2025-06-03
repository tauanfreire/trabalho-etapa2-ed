export default class Pedido {
  #numero;
  #descricao;
  proximo = null;

  constructor(numero, descricao) {
    this.#numero = numero;
    this.#descricao = descricao;
  }

  getNumero() {
    return this.#numero;
  }

  getDescricao() {
    return this.#descricao;
  }

  setNumero(numero){
    this.#numero = numero
  }
}
