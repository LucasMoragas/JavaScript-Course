function tabuada(){
    let num = Number(document.getElementById('num').value)
    let tab = document.getElementById('tab')

    
    tab.innerHTML = ''
    
    let i = 0
    while(i <= 10){
        let item = document.createElement('option')
        item.innerHTML = `${num} x ${i} = ${i * num}`

        tab.appendChild(item)

        i++
    }
    
}