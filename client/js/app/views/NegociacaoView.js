class NegociacaoView extends View{
    constructor(elemento){
        super(elemento)
    }

    template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody id="corpo-tabela">
                    ${model.negociacoes.map(n => `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr> `
                    ).join('')}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">TOTAL</td>
                        <td>${model.volumeTotal}</td>
                    </tr>
                </tfoot>
            </table>
    ` //".join('')" junta a template string a uma string vazia, possibilitando a exibição.
    }
}