class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacao = new Bind(
            new ListaNegociacoes(),
            new NegociacaoView($('#negociacaoView')),
            'adiciona','esvazia')
    
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto')
            
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
    importaNegociacoes(){
        let service = new NegociacaoService()
        service.obterNegociacoesDaSemana((error, negociacoes)=>{
            if(error){
                this._mensagem.texto = error;
                return;
            }
            negociacoes.forEach(negoc => this._listaNegociacao.adiciona(negoc))
            this._mensagem.texto = 'Negociações importadas com sucesso'
        })
    }
    }