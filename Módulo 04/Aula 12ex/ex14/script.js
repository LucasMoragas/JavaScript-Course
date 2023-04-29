function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var time = document.getElementById('hora')
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')

    time.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora <= 11){
        img.src = './Imagens/manha.png'
        document.body.style.background = '#9ACD32'
        msg.innerHTML = 'Bom dia!'
    }else if(hora >= 12 && hora <= 18){
        img.src = './Imagens/tarde.png'
        document.body.style.background = '#F4A460'
        msg.innerHTML = 'Bom tarde!'
    }else{
        img.src = './Imagens/noite.png'
        document.body.style.background = '#2F4F4F'
        msg.innerHTML = 'Bom noite!'
    }
}

