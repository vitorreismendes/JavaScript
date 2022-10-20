function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Você nasceu no ano de <strong>${fano.value}</strong> e tem <strong>${idade}</strong> anos.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bbhomem.png')
            } else if (idade < 20) {
                // Adolescente
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança 
                img.setAttribute('src', 'bbmulher.png')
            } else if (idade < 20) {
                // Adolescente
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultomulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}