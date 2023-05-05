
function calcular() {
    let data = new Date()
    let ano = data.getFullYear()
    let n1 = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (n1.value.length == 0 || Number(n1.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    }  else {
        let anim = document.getElementsByName('rani')
        let idade = ano - Number(n1.value)
        res.innerHTML = `O seu Dog tem ${idade}`
        let animal = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (anim[0].checked) {
            animal = 'Cachorro'
            if (idade >= 0 && idade <= 2) {
                /*img:cachorro-bebe*/
                img.setAttribute('src', 'bebe.jpg')
            }else if(idade <= 3 && idade <= 5) {
                /*img:cachorro-criança*/
                img.setAttribute('src', 'crianca.jpg')
            }else if(idade <= 6 && idade <= 8) {
                /*img:cachorro-adolescente*/
                img.setAttribute('src',  'adolescente.jpg')
            }else if (idade <= 9 && idade <= 12) {
                img.setAttribute('src', 'adulto.jpg')
            }else if (idade < 13){
                img.setAttribute('src', 'idoso.jpg')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `O seu ${animal} tem ${idade} anos.`
        res.appendChild (img)
    }
  
} 