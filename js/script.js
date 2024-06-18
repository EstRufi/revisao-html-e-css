//constantes
const fotoGrande = document.getElementById('fotoGrande')
const desc = document.getElementById('desc')

//função para trocar a foto
function trocaImg(value) {
    fotoGrande.src = 'assets/' + value
}