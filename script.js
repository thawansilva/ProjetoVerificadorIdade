function verificar() {
    var agora = new Date()
    var atual = agora.getFullYear()
    var ano_nasc = document.querySelector('#txtano')
    var texto = document.querySelector('#res')
    if (ano_nasc.value < 1900 || ano_nasc.value.length == 0 || Number(ano_nasc.value) > atual) {
        alert('Digite um ano de nascimento válido')
    } else {
        var fsex = document.querySelectorAll('#radsex')
        var idade = atual - Number(ano_nasc.value)
        var img = document.querySelector('#img')
        var gen =  ''
        if (fsex[0].checked) {
            // Homem
            gen = 'Homem'
            document.body.style.background = 'rgb(0, 0, 250)'
        } else {
            // Mulher
            gen = 'Mulher'
            document.body.style.background = 'rgb(247, 43, 77)'
        }
        // algoritmo puxa fotos de pastas diferentes dependendo do genero.
        if (idade <= 10) {
            img.setAttribute('src', `${gen}/foto-bebe.png`)
        } else if (idade <= 21) {
            img.setAttribute('src', `${gen}/foto-jovem.png`)
        } else if (idade <= 50) {
            img.setAttribute('src', `${gen}/foto-adulto.png`)
        } else {
            img.setAttribute('src', `${gen}/foto-idoso.png`)
        }
        texto.innerHTML = `${gen} com ${idade} anos`
    }
}