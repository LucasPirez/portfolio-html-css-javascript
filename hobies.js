const hobbiesBox = [...document.getElementsByName('_box')]
const guitarra = document.getElementById('guitarra_id_description')
const lectura = document.getElementById('lectura_id_description')
const musica = document.getElementById('musica_id_description')
const series = document.getElementById('series_id_description')
const cocinar = document.getElementById('cocinar_id_description')

const arrHobbies = [lectura, guitarra, musica, series, cocinar]

// const dicSwitch = {
//   guitarra: (display,index) => {
//     guitarra.style.display = display
//     hobbiesBox[index].style.transform = 'scale(1.1)'
//   }
// }

function s(display,index,scale)=>{
  arrHobbies[index].style.display = display;
  hobbiesBox[index].style.transform = `scale(${scale})`
}

// function switchDisplay(val) {
//   switch (val) {
//     case 'lectura':
//       lectura.style.display = 'block'
//       hobbiesBox[0].style.transform = 'scale(1.1)'
//       break
//     case 'guitarra':
//       guitarra.style.display = 'block'
//       hobbiesBox[1].style.transform = 'scale(1.1)'
//       break
//     case 'musica':
//       musica.style.display = 'block'
//       hobbiesBox[2].style.transform = 'scale(1.1)'
//       break
//     case 'series':
//       series.style.display = 'block'
//       hobbiesBox[3].style.transform = 'scale(1.1)'
//       break
//     case 'cocinar':
//       cocinar.style.display = 'block'
//       hobbiesBox[4].style.transform = 'scale(1.1)'
//       break
//     default:
//       break
//   }
// }

// function switchDisplayNone(val) {
//   switch (val) {
//     case 'lectura':
//       lectura.style.display = 'none'
//       hobbiesBox[0].style.transform = 'scale(1)'
//       break
//     case 'guitarra':
//       guitarra.style.display = 'none'
//       hobbiesBox[1].style.transform = 'scale(1)'
//       break
//     case 'musica':
//       musica.style.display = 'none'
//       hobbiesBox[2].style.transform = 'scale(1)'
//       break
//     case 'series':
//       series.style.display = 'none'
//       hobbiesBox[3].style.transform = 'scale(1)'
//       break
//     case 'cocinar':
//       cocinar.style.display = 'none'
//       hobbiesBox[4].style.transform = 'scale(1)'
//       break
//     default:
//       break
//   }
// }

let inter

let num = 0
function intervalo() {
  inter = setInterval(() => {
    if (num >= 6) {
      num = 0
    }
    if (num > 0) {
      // switchDisplayNone(hobbiesBox[num - 1].title)
      s('none',num-1,1)
    }
    if (num < 5) {
      // switchDisplay(hobbiesBox[num].title)
      s('block',num,1.1)
    }
    num++
  }, 3000)
}
intervalo()

function clear() {
  clearInterval(inter)
  hobbiesBox.forEach((u) => (u.style.transform = 'scale(1)'))
}
if (window.innerWidth < 768) clear()

window.addEventListener('resize', (e) => {
  if (window.innerWidth < 768) {
    clear()
    // switchDisplayNone(hobbiesBox[num - 1].title)
    s('none',num-1,1)
  }
})

hobbiesBox.forEach((box, i) => {
  box.onmouseenter = (e) => {
    const { title } = e.target

    guitarra.style.display = 'none'
    lectura.style.display = 'none'
    musica.style.display = 'none'
    series.style.display = 'none'
    cocinar.style.display = 'none'
    clear()
    switchDisplay(title)
  }

  box.onmouseleave = (e) => {
    const { title } = e.target
    intervalo()
    switchDisplayNone(title)
  }
})
