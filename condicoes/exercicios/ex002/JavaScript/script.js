function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genêro = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genêro = 'Homem'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'img/bebe-homem.png')
            }else if (idade < 21 ) {
                //JOVEM
                img.setAttribute('src', 'img/homem-jovem.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'img/homem-adulto.png')
            }else {
                //IDOSO
                img.setAttribute('src', 'img/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genêro = 'Mulher'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'img/bebe-mulher.png')
            }else if (idade < 21 ) {
                //JOVEM
                img.setAttribute('src', 'img/mulher-jovem.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'img/mulher-adulta.png')
            }else {
                //IDOSO
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        }

        res.innerHTML = `Detectamos ${genêro} com ${idade} Anos.`
        res.appendChild(img)
    }
}