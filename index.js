const modal = document.getElementById("modal");
const openButton = document.querySelector(".profile__info-edit-button");
const closeButton = document.getElementById("closeModal");
const form = document.getElementById("editProfileForm");

openButton.addEventListener("click", function () {
  modal.classList.add("modal--active");
});

closeButton.addEventListener("click", function () {
  modal.classList.remove("modal--active");
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

  document.querySelector(".profile__info-name").textContent = nombre;
  document.querySelector(".profile__info-job").textContent = acercaDeMi;

  modal.classList.remove("modal--active");
});

form.addEventListener("keyup", function (event) {
  let nombre = form.name.value;
  let acercaDeMi = form.about.value;

  if (nombre === "" || acercaDeMi === "") {
    form.acc.classList.remove("modal__submit--active");
  } else {
    form.acc.classList.add("modal__submit--active");
  }
});
