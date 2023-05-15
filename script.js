function calcular() {
    let data = new Date()
    let ano = data.getFullYear()
    let n1 = document.getElementById ('txtano')
    let res = document.getElementById ('res')
    if (n1.ariaValueMax.length == 0 || Number (n1.value) > ano) {
        window.alert('verifique os dados e tente novamente!')
    }else {
        let anim = document.getElementsByName('rani')
        let idade = ano - Number(n1.value)
        res.innerHTML = `O seu Dog tem ${idade}`
        let animal = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (anim[0].checked) {
            animal = 'Cachorro'
            if (idade >= 0 && idade < 2) {
                /*img:cachorro-bebe*/
                img.setAttribute('src', 'bebe.jpg')
            }else if (idade < 2) {
                /*img:cachorro-criança*/
                img.setAttribute('src', 'criança.jpg')
            }else if (idade < 5) {
                /*img:cachorro-adolescente*/
                img.setAttribute('src', 'adolescente.jpg')
            }else if (idade < 8 ) {
                /*img:cachorro-adulto*/
                img.setAttribute('src', 'adulto.jpg')
            }else if (idade < 11) {
                /*img:cachorro-idoso*/
                img.setAttribute ('src', 'idoso.jpg')
            }
        }

    }
}