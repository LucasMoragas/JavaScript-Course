function verificar(){
    anoAtual = (new Date).getFullYear()
    var ano = document.getElementById('ano')
    var msg = document.getElementById('msg')
    var pic = document.getElementById('pic')

    if(ano.value.length == 0 || ano.value > anoAtual || ano.value < 1893){
        alert('Verifique os dados e tente novamente.')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - ano.value
        var gen = ''

        if(sexo[0].checked){
            gen = 'Homem'

            if(idade < 18){
                pic.src = './Imagens/menino.png'
            }else if(idade < 50){
                pic.src = './Imagens/homem.png'
            }else{
                pic.src = './Imagens/homemVelho.png'
            }

        }else{
            gen = 'Mulher'

            if(idade < 18){
                pic.src = './Imagens/menina.png'
            }else if(idade < 50){
                pic.src = './Imagens/mulher.png'
            }else{
                pic.src = './Imagens/mulherVelha.png'
            }

        }

        msg.innerHTML = `${gen} com ${idade} anos.`
    }
}