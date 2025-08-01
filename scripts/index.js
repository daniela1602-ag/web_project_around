/*
  Variables
*/

initialCards = [
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

//variables div de tarjetas(.elements__container)
const gallery = document.querySelector(".elements__container");

// variables para agregar titulo y url

const formP = document.getElementById("popupEditImg");
const titleInput = document.getElementById("title");
const urlImg = document.getElementById("imgLink");

/*
  End Variables
*/

/*
  init Funciones
*/

function assignEvents(cardElement, cardData) {
  const closeImagen = document.getElementById("closePopupImg");
  const popupImage = document.querySelector(".popup_type_image");
  const imgCardElement = cardElement.querySelector(".elements__image");

  closeImagen.addEventListener("click", function () {
    popupImage.classList.remove("modal--active");
  });

  imgCardElement.addEventListener("click", function () {
    popupImage.classList.add("modal--active");
    const popupImg = popupImage.querySelector(".popup__image");

    popupImg.src = cardData.link;
    popupImg.alt = cardData.name;
  });
}

function createCard(cardData) {
  //declaracion de variables
  const card = document.createElement("div");

  card.classList.add("elements__card-image");

  card.innerHTML = `
  <img class="elements__image" src="${cardData.link}" alt="imagen de ${cardData.name}" />
  <img class="elements__card-delete-button" src="./images/trash.svg" alt="Eliminar" />
  <div class="elements__card-image-rectangle">
   <h3 class="elements__card-image-text">${cardData.name}</h3>
   <div class="elements__card-image-button">
     <img class="elements__card-like-icon" src="./images/vectorcorazon.svg" alt="like" />
   </div>
  </div>
  `;

  const likeButton = card.querySelector(".elements__card-image-button");
  const likeIcon = card.querySelector(".elements__card-like-icon");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("elements__card-image-button--active");

    if (likeButton.classList.contains("elements__card-image-button--active")) {
      likeIcon.src = "./images/vectorblack.svg";
    } else {
      likeIcon.src = "./images/vectorcorazon.svg";
    }
  });

  const deleteButton = card.querySelector(".elements__card-delete-button");
  deleteButton.addEventListener("click", () => {
    card.remove();
  });

  return card;
}

/*
  End Funciones
*/

/*
  Begin of index.js
*/

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

// aplicacion de eventos de modal(popup)

openPopup.addEventListener("click", function () {
  popup.classList.add("modal--active");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("modal--active");
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

form.addEventListener("keyup", function (event) {
  let nombre = form.name.value;
  let acercaDeMi = form.about.value;

  if (nombre === "" || acercaDeMi === "") {
    form.acc.classList.remove("modal__submit--active");
  } else {
    form.acc.classList.add("modal__submit--active");
  }
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

    const cardElement = createCard(newCard);
    gallery.prepend(cardElement);
    assignEvents(cardElement, newCard);

    formP.reset();
  }
  popup.classList.remove("modal--active");
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

// initcializacion del div(.elements__container), este div contine las tarjetas

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  gallery.appendChild(cardElement);
  assignEvents(cardElement, cardData);
});

/*const popupImage =
  document.querySelector(".popup_type_image"); /* ventana de imagen ampliada
const popupImg = popupImage.querySelector(".popup__image");
const closeImagen = document.getElementById("closePopupImg");

function openImagePopup(src, alt) {
  popupImg.src = src;
  popupImg.alt = alt;
  popupImage.classList.add("popup_opened");
}

closeImagen.addEventListener("click", function () {
  popupImage.classList.remove("modal--active");
});

document.querySelectorAll(".elements__image").forEach((img) => {
  img.addEventListener("click", () => {
    openImagePopup(img.src, img.alt);
  });
});*/
