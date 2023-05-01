window.alert('estude mano, você vai chegar lá!')
function calcular() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {

    }else {
        var anim = document.getElementsByName('rani')
        var idade = ano - Number(fano.value)
        res.innerHTML = `O seu Dog tem ${idade}`
        var animal = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (anim[0].checked) {
            animal = 'Cachorro'
            if (idade >=0 && idade < 2) {
                img.setAttribute('src'), '..imagens/criança.jpg'
            }
        }
        res.innerHTML = `O seu ${animal} tem ${idade} anos!`
        res.appendChild (img)
    }
  
} 