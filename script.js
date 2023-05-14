function calcular() {
    let data = new Date()
    let ano = data.getFullYear()
    let n1 = document.getElementById ('txtano')
    let res = document.getElementById ('res')
    if (n1.ariaValueMax.length == 0 || Number (n1.value) > ano) {
        window.alert('verifique os dados e tente novamente!')
    }
}