const domNav = document.getElementsByClassName('menu__list__item')

function callback(entry, observer) {
  ;[...domNav].forEach((u) => (u.style.background = 'none'))
  if (!entry[0].isIntersecting) {
    if (entry[0].target.id === 'welcome') {
      arr.forEach((u) => u.pause())
    }
  }
  if (entry[0].isIntersecting) {
    console.log(entry[0].target.id)
    switch (entry[0].target.id) {
      case 'sobreMi':
        domNav[0].style.background = '#e93658'
        bool = false
        break
      case 'hobbies':
        domNav[1].style.background = '#e93658'
        break
      case 'xp':
        domNav[2].style.background = '#e93658'
        break
      case 'contacto':
        domNav[3].style.background = '#e93658'
        break
      case 'welcome':
        arr.forEach((u) => u.play())
        break
      default:
        break
    }
  }
}

const about = document.getElementById('sobreMi')
const welcome = document.getElementById('welcome')
const hobbies = document.getElementById('hobbies')
const xp = document.getElementById('xp')
const contacto = document.getElementById('contacto')

const observer = new IntersectionObserver(callback, {
  rootMargin: '0px',
  threshold: 0.7
})

const arrContaire = [about, welcome, hobbies, xp, contacto]
arrContaire.forEach((u, i) => observer.observe(u))
