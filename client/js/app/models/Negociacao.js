class Negociacao{
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this)
    }
// getData() ou get data(). o segundo aparece como uma propriedade comum quando chamado.
    get volume(){
        var volume = this._quantidade * this._valor;
        return volume;
    }
    get data(){
        return new Date(this._data.getTime())
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}
