window.alert('estude mano, você vai chegar lá!')
function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var n1 = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (n1.value.length == 0 || Number(n1.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    }  else {
        var anim = document.getElementsByName('rani')
        var idade = ano - Number(n1.value)
        res.innerHTML = `O seu Dog tem ${idade}`
        var animal = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (anim[0].checked) {
            animal = 'Cachorro'
            if (idade >=0 && idade < 2) {
                /*cachorro-bebe*/
                img.setAttribute('src', 'bebe.jpg')
            }else if (idade < 2) {
                /*cachorro-criança*/
                img.setAttribute('src', 'criança.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `O seu ${animal} tem ${idade} anos!`
        res.appendChild (img)
    }
  
} 