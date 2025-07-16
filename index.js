const modal = document.getElementById("modal");
const openButton = document.querySelector(".profile__info-edit-button");
const closeButton = document.getElementById("closeModal");
const form = document.getElementById("editProfileForm");

console.log(modal);
console.log("javaScript funcionando");

openButton.addEventListener("click", function () {
  modal.classList.add("modal--active");
  console.log(modal);
});

closeButton.addEventListener("click", function () {
  modal.classList.remove("modal--active");
  console.log(modal);
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("modal--active");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = form.name.value;
  let acercaDeMi = form.about.value;

  console.log("Nombre", nombre);
  console.log("Acerca de mi", acercaDeMi);

  document.querySelector(".profile__info-name").textContent = nombre;
  document.querySelector(".profile__info-job").textContent = acercaDeMi;

  modal.classList.remove("modal--active");
});

console.log("javaScript funcionando");

form.addEventListener("keyup", function (event) {
  let nombre = form.name.value;
  let acercaDeMi = form.about.value;

  console.log(acercaDeMi);

  if (nombre === "" || acercaDeMi === "") {
    form.acc.classList.remove("modal__submit--active");
  } else {
    form.acc.classList.add("modal__submit--active");
  }
});
