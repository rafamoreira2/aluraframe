class NegociacaoService{
    	obterNegociacoesDaSemana(){
        	return new Promise((resolve, reject) =>{
            let xhr = new XMLHttpRequest()
            xhr.open('GET', 'negociacoes/semana')
            xhr.onreadystatechange = ()=>{

                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText).map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
                    }
                    else{
                        console.log(xhr.responseText)
                       reject('Houve um erro na importação das negociações da semana.')
                    }}} 
    
            xhr.send()
			})
		}

		obterNegociacoesDaSemanaAnterior(){
			return new Promise((resolve, reject) =>{
			 let xhr = new XMLHttpRequest()
			 xhr.open('GET', 'negociacoes/anterior')
			 xhr.onreadystatechange = ()=>{

				  if(xhr.readyState == 4){
						if(xhr.status == 200){
							 resolve(JSON.parse(xhr.responseText).map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
						}
						else{
							 console.log(xhr.responseText)
							reject('Houve um erro na importação das negociações da semana anterior.')
						}}} 
  
			 	xhr.send()
		 	})
	 	}
		obterNegociacoesDaSemanaRetrasada(){
			return new Promise((resolve, reject) =>{
			let xhr = new XMLHttpRequest()
			xhr.open('GET', 'negociacoes/retrasada')
			xhr.onreadystatechange = ()=>{

				if(xhr.readyState == 4){
						if(xhr.status == 200){
							resolve(JSON.parse(xhr.responseText).map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
						}
						else{
							console.log(xhr.responseText)
							reject('Houve um erro na importação das negociações da semana retrasada.')
						}}} 

				xhr.send()
			})
		}
}