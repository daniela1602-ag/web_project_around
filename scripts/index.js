import Section from "./components/Section.js";
import Card from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import { initialCards } from "./utils.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";

//objeto de config de validation
const validationConfig = {
  formSelector: ".modal__profile-form",
  inputSelector: ".modal__profile-input",
  submitButtonSelector: ".modal__profile-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};

//Instancia de Api
const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "ba6770a4-f21f-4ddd-977e-1f1898f269d8",
    "Content-Type": "application/json",
  },
});

//instancia de la clase Section
let cardSection;
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });
    userInfo.setUserAvatar(userData.avatar);
    cardSection = new Section(
      {
        items: cardsData,
        renderer: (cardData) => {
          const card = new Card(
            cardData,
            "#card-template",
            handleCardClick,
            handleDeleteConfirmation,
            api
          );
          const cardElement = card.generateCard();
          cardSection.addInitialItem(cardElement);
        },
      },
      ".elements__container"
    );
    cardSection.renderItems();

    // adatar la funcion callback
    function handleAddCardSubmit(inputValues) {
      const submitButton = addCardPopup.getSubmitButton("submitButton");
      addCardPopup.renderLoading(true, submitButton);

      const cardData = {
        title: inputValues.title,
        imgLink: inputValues.imgLink,
      };
      api
        .addCard(cardData)
        .then((cardInfo) => {
          const newCard = new Card(
            cardInfo,
            "#card-template",
            handleCardClick,
            handleDeleteConfirmation,
            api
          );
          const cardElement = newCard.generateCard();
          cardSection.addNewItem(cardElement);
          addCardPopup.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          addCardPopup.renderLoading(false, submitButton);
        });
    }
    // Instancia de la clase PopupWithForm para agregar nuevas tarjetas

    const addCardPopup = new PopupWithForm("#popup", handleAddCardSubmit);
    addCardPopup.setEventListeners();
  })
  .catch((err) => console.log(err));

//Instancia de PopupWithForm para editar perfil
function handleEditProfileSubmit(profileData) {
  const submitButton = editProfilePopup.getSubmitButton("acc");
  editProfilePopup.renderLoading(true, submitButton);

  api
    .updateUserInfo({
      name: profileData.name,
      about: profileData.about,
    })
    .then((updatedUserData) => {
      userInfo.setUserInfo({
        name: updatedUserData.name,
        about: updatedUserData.about,
      });
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editProfilePopup.renderLoading(false, submitButton);
    });
}
const editProfilePopup = new PopupWithForm("#modal", handleEditProfileSubmit);
editProfilePopup.setEventListeners();

//Instancia de PopupWithForm para foto de perfil
const popupEditAvatar = new PopupWithForm("#popupAvatar", (inputValues) => {
  const submitButton = popupEditAvatar.getSubmitButton("submitButtonAvatar");
  popupEditAvatar.renderLoading(true, submitButton);

  api
    .updateUserAvatar(inputValues.AvatarLink)
    .then((updatedUser) => {
      userInfo.setUserAvatar(updatedUser.avatar);
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log("Error al actualizar avatar:", err);
    })
    .finally(() => {
      popupEditAvatar.renderLoading(false, submitButton);
    });
});
popupEditAvatar.setEventListeners();

//event listener para abrir form de avatar
const avatarEditIcon = document.querySelector(".profile__avatar-edit-icon");

avatarEditIcon.addEventListener("click", () => {
  popupEditAvatar.open();
});

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
  avatarSelector: ".profile__avatar",
});

//funcion para manejar la confirmacion de eliminacion
function handleDeleteConfirmation(card) {
  deleteCardPopup.open();
  deleteCardPopup.setSubmitAction(() => {
    api
      .deleteCard(card.getId())
      .then(() => {
        card.removeCard();
        deleteCardPopup.close();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
//Instancia de PopupWithConfirmation
const deleteCardPopup = new PopupWithConfirmation("#confirmDeletePopup");
deleteCardPopup.setEventListeners();
