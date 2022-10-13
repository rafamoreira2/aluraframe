class ProxyFactory{
    static create(objeto, props, acao){

        return new Proxy(objeto, {
            get(target, prop, receiver){ 
                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])){
                        return function(){
                        console.log(`${target[prop]} foi interceptado`);
                        Reflect.apply(target[prop], target, arguments)
                        return acao(target)
                    }}

                return Reflect.get(target, prop, receiver)
            }, //NECESSÁRIO SEPARAR COM VÍRGULA.

            set(target, prop, value, receiver){
                if(props.includes(prop)){
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver)
            }
        })
    }
        
    static _ehFuncao(func){
    return typeof(func) == typeof(Function);
    }
}