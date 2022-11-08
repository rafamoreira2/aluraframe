class ListaNegociacoes{

    constructor(){
        this._listaNegociacoes = [];
    }

    adiciona(negociacao){
        this._listaNegociacoes.push(negociacao)
    }
    esvazia(){
        this._listaNegociacoes = [];
    }
    get negociacoes(){
        return [].concat(this._listaNegociacoes)
    }
    get volumeTotal(){
        return this.negociacoes.reduce((total,item) => total + item.volume, 0.0)
    }
    ordena(criterio){
        this._listaNegociacoes.sort(criterio)
    }
    inverte(){
        this._listaNegociacoes.reverse()
    }
}