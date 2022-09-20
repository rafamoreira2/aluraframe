class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacao = new ListaNegociacoes();
        this._negociacaoView = new NegociacaoView($('#negociacaoView'))
        this._negociacaoView.update(this._listaNegociacao)
    }
    adiciona(event) {
            event.preventDefault()
            this._listaNegociacao.adiciona(this._criaNegociacao())
            this._negociacaoView.update(this._listaNegociacao)
            this._limpaFormulario()
        }
    
    
    _criaNegociacao(){
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
            )
            return negociacao;
    }
    
    
    _limpaFormulario(){
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }
    }