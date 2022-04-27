function select() {
  var countrys = document.getElementsByTagName('option')
  var img = document.getElementById('img')

  if (countrys[1].selected) {
    document.body.style.backgroundImage = "url('brasil.jpg')"
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

  } else if (countrys[2].selected) {
    document.body.style.backgroundImage = "url('russia.jpg')"
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

  } else if (countrys[3].selected) {
    document.body.style.backgroundImage = "url('japao.jpg')"
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

  } else if (countrys[4].selected) {
    document.body.style.backgroundImage = "url('noruega.jpg')"
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

  } else if (countrys[5].selected) {
    document.body.style.backgroundImage = "url('grecia.jpg')"
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

  }
}

var toque = document.getElementById('select')
toque.addEventListener('mousemove', mover)
toque.addEventListener('mouseout', sair)

function mover() {
  toque.style.boxShadow = 'inset 0 0 5px rgba(0, 0, 0, 0.44)'
}

function sair() {
  toque.style.boxShadow = 'none'
}