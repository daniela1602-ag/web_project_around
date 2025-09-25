// Variables

export let initialCards = [
  {
    name: "Golden Gates",
    link: "./images/goldengates.jpg",
  },
  {
    name: "Austria",
    link: "./images/austria.jpg",
  },
  {
    name: "Monte Fuji",
    link: "./images/montefuji.jpg",
  },
  {
    name: "Árbol de cerezos, Japón",
    link: "./images/cerezos.jpg",
  },

  {
    name: "Escocia",
    link: "./images/escocia.jpg",
  },
  {
    name: "Playa de Tulum, Cancún",
    link: "./images/playatulum.jpg",
  },
];
// variables de primer modal(modal)
const modal = document.getElementById("modal");
const openButton = document.querySelector(".profile__info-edit-button");
const closeButton = document.getElementById("closeModal");

// variables de segunda modal(popup)
const popup = document.getElementById("popup"); //ventana emergente 2
const openPopup = document.getElementById("openPopup"); //boton editar 2
const closePopup = document.getElementById("closePopup");

//variables form1(editProfileForm)

const form = document.getElementById("editProfileForm");

// variables para agregar titulo y url

export const formP = document.getElementById("popupEditImg");
export const titleInput = document.getElementById("title");

/*
  eventos para cerrar imagen ampliada
*/
const closeImagen = document.getElementById("closePopupImg");
const popupImage = document.querySelector(".modal_type_image");

closeImagen.addEventListener("click", function () {
  popupImage.classList.remove("modal--active");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popupImage.classList.remove("modal--active");
  }
});

popupImage.addEventListener("click", function (event) {
  if (event.target === popupImage) {
    popupImage.classList.remove("modal--active");
  }
});

// aplicacion de eventos de modal(modal)
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("modal--active");
  }
});

openButton.addEventListener("click", function () {
  modal.classList.add("modal--active");
});

closeButton.addEventListener("click", function () {
  modal.classList.remove("modal--active");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.remove("modal--active");
  }
});

// aplicacion de eventos de modal(popup)

openPopup.addEventListener("click", function () {
  popup.classList.add("modal--active");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("modal--active");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popup.classList.remove("modal--active");
  }
});

popup.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.classList.remove("modal--active");
  }
});

//aplicacion de eventos de form1(editProfileForm)

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = form.name.value;
  let acercaDeMi = form.about.value;

  document.querySelector(".profile__info-name").textContent = nombre;
  document.querySelector(".profile__info-job").textContent = acercaDeMi;

  modal.classList.remove("modal--active");
});

formP.addEventListener("keyup", function (event) {
  let titulo = formP.title.value;
  let enlaceAlaImagen = formP.imgLink.value;

  if (titulo === "" || enlaceAlaImagen === "") {
    formP.submitButton.classList.remove("modal__submit--active");
  } else {
    formP.submitButton.classList.add("modal__submit--active");
  }
});
