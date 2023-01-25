export class Negociacao {
    //Por inconsistência, foram modificadas as variáveis QUANTIDADE e VALOR de "private" para "public" para a classe NEGOCIACOESVIEW ter acesso à ambas
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
