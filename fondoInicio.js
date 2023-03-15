// fondo
const colors = ['#f3e4ce']
let arr = []
const numBalls = 150
const balls = []
let count = 0
const newDiv = document.createDocumentFragment()

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement('div')

  ball.classList.add('ball')
  ball.style.left = `${Math.floor(Math.random() * 90)}vw`
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`
  ball.style.transform = `scale(${Math.random()})`
  ball.style.width = `${Math.random()}em`
  ball.style.height = ball.style.width

  balls.push(ball)
  newDiv.appendChild(ball)
  count++
}
document.getElementById('welcome').appendChild(newDiv)

/* Keyframes*/

balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: 60
  }

  const anim = el.animate(
    [
      { transform: 'translate(0, 0)' },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 3000,
      direction: 'alternate',
      fill: 'both',
      iterations: Infinity,
      easing: 'ease-in-out'
    }
  )

  arr.push(anim)
})
