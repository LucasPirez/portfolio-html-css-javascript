const buttomModal = document.getElementsByName("button_modal");
const modal = document.getElementsByName("modal");
console.log(buttomModal, modal);

function createIcon(bool) {
  const imgExpand = document.createElement("img");

  if (!bool) imgExpand.src = "assets/expand.svg";
  else imgExpand.src = "assets/reduce.svg";

  return imgExpand;
}

modal.forEach((u, i) => {
  u.style.transition = "all .3s";

  buttomModal[i].title = "expandir";
  buttomModal[i].appendChild(createIcon(false));

  buttomModal[i].onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    u.classList.toggle("experiencie__conditional");
    if (buttomModal[i].title === "expandir") {
      buttomModal[i].title = "reduce";
      buttomModal[i].replaceChild(
        createIcon(true),
        buttomModal[i].querySelector("img")
      );
    } else {
      buttomModal[i].title = "expandir";

      buttomModal[i].replaceChild(
        createIcon(false),
        buttomModal[i].querySelector("img")
      );
    }
  };
});

window.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("hola");
  modal.forEach((u, i) => {
    u.onclick = (e) => {
      e.stopPropagation();
    };
    if ([...u.classList].includes("experiencie__conditional")) {
      u.classList.remove("experiencie__conditional");
      buttomModal[i].title = "expandir";

      buttomModal[i].replaceChild(
        createIcon(false),
        buttomModal[i].querySelector("img")
      );
    }
  });
});
