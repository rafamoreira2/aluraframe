class ProxyFactory{
    static create(objeto, props, acao){
        
        return new Proxy(objeto, {
            get(target, prop, receiver){ 
                if([props].includes(prop) && typeof(target[prop]) == typeof(Function)){
                    return function(){
                        console.log(`${target[prop]} foi interceptado`);
                        Reflect.apply(target[prop], target, arguments)
                        acao(target)
                    }
                }
                return Reflect.get(target, prop, receiver)
            }
        })
    }
}