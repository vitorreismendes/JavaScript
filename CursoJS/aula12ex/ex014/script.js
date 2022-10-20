function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    /*var hora = 20*/
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        /*Bom dia*/
        img.src = 'manha.png'
        document.body.style.background = '#fedc4e'
    } else if (hora >= 12 && hora < 18) {
        /*Bom tarde*/
        img.src = 'tarde.png'
        document.body.style.background = '#fe7201'
    } else {
        /*Boa noite*/
        img.src = 'noite.png'
        document.body.style.background = '#001634'
    }
}    