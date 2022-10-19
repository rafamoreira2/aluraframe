class ProxyFactory{
    static create(objeto, props, acao){

        return new Proxy(objeto, {
            get(target, prop, receiver){ 
                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])){
                        return function(){
                        console.log(`${target[prop]} foi interceptado`);
                        let retorno = Reflect.apply(target[prop], target, arguments)
                        acao(target)
                        return retorno
                    }}

                return Reflect.get(target, prop, receiver)
            }, //NECESSÁRIO SEPARAR COM VÍRGULA.

            set(target, prop, value, receiver){
                let retorno = Reflect.set(target, prop, value, receiver)
                if(props.includes(prop))
                    target[prop] = value;
                    acao(target);
                return retorno
            }
        })
    }
        
    static _ehFuncao(func){
    return typeof(func) == typeof(Function);
    }
}