const hobbiesBox = [...document.getElementsByName('_box')]
const guitarra = document.getElementById('guitarra_id_description')
const lectura = document.getElementById('lectura_id_description')
const musica = document.getElementById('musica_id_description')
const series = document.getElementById('series_id_description')
const cocinar = document.getElementById('cocinar_id_description')

const arrHobbies = [lectura, guitarra, musica, series, cocinar]

function switchDisplay(display, index, scale) {
  arrHobbies[index].style.display = display
  hobbiesBox[index].style.transform = `scale(${scale})`
}

let inter

let num = 0
function intervalo() {
  inter = setInterval(() => {
    if (num >= 6) {
      num = 0
    }
    if (num > 0) {
      switchDisplay('none', num - 1, 1)
    }
    if (num < 5) {
      switchDisplay('block', num, 1.1)
    }
    num++
  }, 3000)
}
intervalo()

function clear() {
  clearInterval(inter)
  arrHobbies.forEach((u) => (u.style.display = 'none'))
  hobbiesBox.forEach((u) => (u.style.transform = 'scale(1)'))
}

if (window.innerWidth < 768) clear()

window.addEventListener('resize', (e) => {
  if (window.innerWidth < 768) {
    clear()
    switchDisplay('none', num - 1, 1)
  }
})

hobbiesBox.forEach((box, i) => {
  box.onmouseenter = (e) => {
    const { title } = e.target
    clear()
    switchDisplay('block', i, 1.1)
  }

  box.onmouseleave = (e) => {
    const { title } = e.target
    intervalo()
    switchDisplay('none', i, 1)
  }
})
