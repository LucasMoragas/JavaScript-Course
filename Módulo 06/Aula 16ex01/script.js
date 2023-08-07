let numbers = new Array()

function add(){
    var value = Number(document.getElementById('num').value)
    var list = document.getElementById('list')

    //Resetando a div de resposta
    document.getElementById('answer').innerHTML = ''

    //Validação
    if(value.toString() == 'NaN' || value > 100 || value < 1){
        alert('[ERRO] Confira o valor inserido.')
    }else{
        //Inserindo o input no vetor
        numbers.push(value)
        //Criando o elemento option para o select
        var op = document.createElement('option')
        op.innerHTML = `${value} foi adicionado.`
        //Inserindo o elemento option
        list.appendChild(op)


        document.getElementById('num').value = ''
    }
}

function analise(){
    var awnser = document.getElementById('answer')
    var sum = 0.0

    numbers.sort()

    for (var x = 0; x < numbers.length; x ++){
        sum += numbers[x]
    }

    awnser.innerHTML = `
    <p>Ao todo, temos ${numbers.length} números cadastrados.</p>
    <p>O maior número informado foi ${numbers[numbers.length - 1]}</p>
    <p>O menor número informado foi ${numbers[0]}</p>
    <p>A soma dos valores inserido é ${sum}</p>
    <p>A média dos valores inseridos é ${sum / numbers.length}</p>
    `
}
