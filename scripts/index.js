import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
// Variables

let initialCards = [
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

// variables para agregar titulo y url
import { formP, titleInput } from "./utils.js";
const urlImg = document.getElementById("imgLink");

const gallery = document.querySelector(".elements__container");

//objeto de config de validation
const validationConfig = {
  formSelector: ".modal__profile-form",
  inputSelector: ".modal__profile-input",
  submitButtonSelector: ".modal__profile-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// instancia de Card

initialCards.forEach((cardData) => {
  const card = new Card(cardData, "#card-template");
  const cardElement = card.generateCard();
  gallery.appendChild(cardElement);
});

// instancia de Formulario
const forms = document.querySelectorAll(".modal__profile-form");
forms.forEach((formElement) => {
  const validator = new FormValidator(validationConfig, formElement);
  validator.enableValidation();
});

//aplicacion de eventos para guardar titulo y url de nueva imagen

formP.addEventListener("submit", function (event) {
  event.preventDefault();

  const newCard = {
    name: titleInput.value,
    link: urlImg.value,
  };

  if (newCard.name && newCard.link) {
    initialCards = [newCard, ...initialCards];

    const card = new Card(newCard, "#card-template");
    const cardElement = card.generateCard();

    gallery.prepend(cardElement);

    formP.reset();
  }
  popup.classList.remove("modal--active");
});
