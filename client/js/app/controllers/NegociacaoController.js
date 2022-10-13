class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._negociacaoView = new NegociacaoView($('#negociacaoView'))
        this._listaNegociacao = new Bind(
            new ListaNegociacoes(),
            this._negociacaoView,
            ['adiciona','esvazia'])
    
        
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto'])
            
    }

    adiciona(event) {
            event.preventDefault();
            this._listaNegociacao.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação criada com sucesso!';
            this._limpaFormulario();
        }

    esvazia(){
        this._listaNegociacao.esvazia();
        this._mensagem.texto = 'Negociações removidas com sucesso.';
        
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