function contar(){
    //Recendo as informações dos inputs
    var inicio = parseInt(document.getElementById('inicio').value)
    var fim = parseInt(document.getElementById('fim').value)
    var passo = parseInt(document.getElementById('passo').value)
    //Atribuindo os parágrafos de retorno à variáveis
    var res = document.getElementById('res')
    var acao = document.getElementById('acao')

    acao.innerHTML = ''
    res.innerHTML = ''

    if(passo === 0 || inicio >= fim || inicio.toString() == 'NaN' || fim.toString() == 'NaN' || passo.toString() == 'NaN'){
        acao.innerHTML = 'Não foi possível contar. Rever os valores inseridos.'
    }else{
        acao.innerHTML = 'Contando:'

        var i = inicio //Iniciaçizando o contador
        while(i <= fim){
            res.innerHTML += i.toString()

            if((i + passo) > fim){
                res.innerHTML += '<span>&#x1F3C1;</span>'
            }else{
                res.innerHTML += '<span>&#x1F449;</span>'
            }
        
            i += passo
        }
    }
    
}