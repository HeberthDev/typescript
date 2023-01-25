export class Negociacao {
    //Por inconsistência, foram modificadas as variáveis QUANTIDADE e VALOR de "private" para "public" para a classe NEGOCIACOESVIEW ter acesso à ambas
    constructor(
        private _data: Date, 
        public quantidade: number,
        public valor: number,
    ){}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
}