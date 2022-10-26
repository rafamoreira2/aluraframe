class NegociacaoService{
    obterNegociacoesDaSemana(cb){ // cb = (erro, acerto)=>{}
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'negociacoes/semana')

        xhr.onreadystatechange = ()=>{
            if(xhr.readyState == 4){
                if(xhr.status == 200){

                    cb(null, JSON.parse(xhr.responseText).map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
                }
                else{
                    console.log(xhr.responseText)
                   cb('Houve um erro na importação.', null)
                }
            }
        } 

        xhr.send()
    }
}