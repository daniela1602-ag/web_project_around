import Section from "./components/Section.js";
import Card from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import { initialCards } from "./utils.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";

//objeto de config de validation
const validationConfig = {
  formSelector: ".modal__profile-form",
  inputSelector: ".modal__profile-input",
  submitButtonSelector: ".modal__profile-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};
//instancia de la clase Section
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, "#card-template", handleCardClick);
      const cardElement = card.generateCard();
      cardSection.addInitialItem(cardElement);
    },
  },
  ".elements__container"
);
cardSection.renderItems();

// Instancia de la clase PopupWithForm para agregar nuevas tarjetas
//primero adatar la funcion callback
function handleAddCardSubmit(FormData) {
  const newCard = {
    name: FormData.title,
    link: FormData.imgLink,
  };
  const card = new Card(newCard, "#card-template", handleCardClick);
  const cardElement = card.generateCard();
  cardSection.addNewItem(cardElement);
  addCardPopup.close();
}

const addCardPopup = new PopupWithForm("#popup", handleAddCardSubmit);
addCardPopup.setEventListeners();

//Instanciia de PopupWithForm para editar perfil
function handleEditProfileSubmit(formData) {
  userInfo.setUserInfo({
    name: formData.name,
    about: formData.about,
  });
  editProfilePopup.close();
}
const editProfilePopup = new PopupWithForm("#modal", handleEditProfileSubmit);
editProfilePopup.setEventListeners();

// instancia de Formulario FormValidator
const forms = document.querySelectorAll(".modal__profile-form");
forms.forEach((formElement) => {
  const validator = new FormValidator(validationConfig, formElement);
  validator.enableValidation();
});

//funcion handleCardClick de Card
function handleCardClick(name, link) {
  imagePopup.open(name, link);
}

//Instancia del popup de imagen
const imagePopup = new PopupWithImage(".modal_type_image");

//Instancia de UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-job",
});
const datos = userInfo.getUserInfo();

//aplicacion de eventos para guardar titulo y url de nueva imagen
/*
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
*/
