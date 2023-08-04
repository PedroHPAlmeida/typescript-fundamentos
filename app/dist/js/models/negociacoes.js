export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    lista() {
        return this.negociacoes;
    }
}
