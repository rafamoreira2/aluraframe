//código de comparação com o modelo do curso.
//NÃO UTILIZADO!!!
var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor"),
];
console.log(campos)
var tbody = document.querySelector("#corpo-tabela")
var form = document.querySelector(".form")
document.querySelector(".form").addEventListener("submit", function(event){
    event.preventDefault()
    var tr = document.createElement("tr")
    campos.forEach(function(campo){
        var td = document.createElement("td")
        tr.appendChild(td)
        td.textContent = campo.value;
    })
    var tdVolume = document.createElement("td")
    tdVolume.textContent = (campos[1].value * campos[2].value)
    tr.appendChild(tdVolume)
    tbody.appendChild(tr)
    campos[0].value = ""
    campos[1].value = 1;
    campos[2].value = 0;
    
    campos[0].focus()



})
