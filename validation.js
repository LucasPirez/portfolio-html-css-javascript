const inputs = document.querySelectorAll("input");
const texterea = document.querySelector("textarea");

let bool = false;

const errorMessages = {
  nombre: {
    valueMissing: "Este campo no puede estar vacio",
  },
  email: {
    valueMissing: "Este campo no puede estar vacio",
    typeMismatch: "El correo no es valido",
  },
  asunto: {
    valueMissing: "Este campo no puede estar vacio",
  },
  mensaje: {
    valueMissing: "Este campo no puede estar vacio",
    tooShort: "El mensaje es muy corto",
  },
};

function mostrarError(type, input) {
  const errors = ["valueMissing", "tooShort", "typeMismatch"];
  let err = "";
  errors.forEach((u) => {
    console.log(input.validity[u]);
    if (input.validity[u]) {
      console.log(errorMessages[type][u]);
      err = errorMessages[type][u];
    }
  });
  return err;
}

const buttonSend = document.getElementById("send__form");

const arrValidity = [];
[...inputs, texterea].forEach((u, i) => {
  u.addEventListener("blur", (e) => {
    const icon = document.createElement("img");
    icon.src = "/assets/icons8-marca-de-verificacion.svg";
    icon.style.position = "absolute";
    icon.style.right = "0px";

    if (!u.validity.valid) {
      arrValidity[i] = false;
      u.parentElement.querySelector("svg").style.display = "none";

      u.parentElement.querySelector("span").innerText = mostrarError(u.name, u);
    } else {
      arrValidity[i] = true;

      u.parentElement.querySelector("span").innerText = "";
      u.parentElement.querySelector("svg").style.display = "inline-block";
    }

    if (
      inputs.length + 1 === arrValidity.length &&
      arrValidity.indexOf(false) === -1
    ) {
      buttonSend.disabled = false;
    } else {
      buttonSend.disabled = true;
    }

    u.addEventListener("focus", (e) => {
      u.parentElement.querySelector("span").innerText = "";
    });
    console.log(arrValidity);
  });
});

buttonSend.onclick = (e) => {
  e.preventDefault();

  buttonSend.innerHTML = "No envia nada, solo front-end &#128077";
};
