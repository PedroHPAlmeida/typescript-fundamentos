export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    paraTexto() {
        return `
            Data: ${this.data} 
            Quantidade: ${this.quantidade} 
            Valor: ${this.valor} 
        `;
    }
    static criaDe(data, quantidade, valor) {
        return new Negociacao(new Date(data.replace('-', ',')), parseInt(quantidade), parseFloat(valor));
    }
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
