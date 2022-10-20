const domNav = document.getElementsByClassName("menu__list__item");

let arr = [];

function callback(entry) {
  [...domNav].forEach((u) => (u.style.background = "none"));
  if (!entry[0].isIntersecting) {
    console.log("no interserting ", entry[0].target.id);
    if (entry[0].target.id === "welcome") {
      arr.forEach((u) => u.pause());
    }
  }

  if (entry[0].isIntersecting) {
    console.log(entry[0].target.id);
    switch (entry[0].target.id) {
      case "sobreMi":
        domNav[0].style.background = "#e93658";
        bool = false;
        break;
      case "hobbies":
        domNav[1].style.background = "#e93658";
        break;
      // case "formacion":
      //   domNav[2].style.background = "#e93658";
      //   break;
      case "xp":
        domNav[2].style.background = "#e93658";
        break;
      case "contacto":
        domNav[3].style.background = "#e93658";
        break;
      case "welcome":
        arr.forEach((u) => u.play());

        break;

      default:
        break;
    }
  }
}

const observer = new IntersectionObserver(callback, {
  rootMargin: "0px",
  threshold: 0.6,
});
const about = document.getElementById("sobreMi");
const welcome = document.getElementById("welcome");
const hobbies = document.getElementById("hobbies");
// const formacion = document.getElementById("formacion");
const xp = document.getElementById("xp");
const contacto = document.getElementById("contacto");

observer.observe(about);
observer.observe(hobbies);
observer.observe(xp);
// observer.observe(formacion);
observer.observe(welcome);
observer.observe(contacto);

// fondo
const colors = ["#f3e4ce"];

const numBalls = 150;
const balls = [];
let count = 0;
const newDiv = document.createDocumentFragment();

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");

  ball.classList.add("ball");
  ball.style.position = "absolute";
  ball.style.borderRadius = "50%";
  ball.style.opacity = "0.4";
  ball.style.zIndex = 1;
  ball.style.background = colors[0];
  ball.style.left = `${Math.floor(Math.random() * 90)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  newDiv.appendChild(ball);
  count++;
}
document.getElementById("welcome").appendChild(newDiv);

/* Keyframes*/

balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: 60,
  };

  const anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 3000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );

  arr.push(anim);
});
