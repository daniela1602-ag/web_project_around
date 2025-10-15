export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick, api) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = () => handleDeleteClick(this);
    this._api = api;
  }
  //metodo privado: obtener plantilla
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__card-image")
      .cloneNode(true);

    return cardElement;
  }

  //metodo privado: manejar el like
  _handleLike() {
    console.log("ID de la tarjeta:", this._id); // ← Agregar esto
    console.log("Estado del like:", this._isLiked); // ← Y esto también

    if (this._isLiked) {
      this._api
        .removeLike(this._id)
        .then(() => {
          this._isLiked = false;
          this._likeButton.classList.remove(
            "elements__card-image-button--active"
          );
          this._likeIcon.src = "./images/vectorcorazon.svg";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this._api
        .addLike(this._id)
        .then(() => {
          this._isLiked = true;
          this._likeButton.classList.add("elements__card-image-button--active");
          this._likeIcon.src = "./images/vectorblack.svg";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //metodo para acceder al id de cada tarjeta
  getId() {
    return this._id;
  }

  //metodo para borrar del DOM
  removeCard() {
    this._element.remove();
    this._element = null;
  }

  //metodo privado: boton eliminar
  _handleDeleteClickEvent() {
    this._handleDeleteClick();
  }
  /*
  //metodo privado: visualización de imagen
  _handlePreviewImage() {
    const popupImage = document.querySelector(".modal_type_image");
    const popupImg = popupImage.querySelector(".modal__image");
    popupImg.src = this._link;
    popupImg.alt = this._name;

    popupImage.classList.add("modal--active");
  }
*/
  //metodo privado: asignar eventos
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLike());
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteClickEvent()
    );
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }

  //metodo público: crear card
  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".elements__image");
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    this._element.querySelector(".elements__card-image-text").textContent =
      this._name;
    this._likeButton = this._element.querySelector(
      ".elements__card-image-button"
    );
    this._likeIcon = this._element.querySelector(".elements__card-like-icon");
    if (this._isLiked) {
      this._likeButton.classList.add("elements__card-image-button--active");
      this._likeIcon.src = "./images/vectorblack.svg";
    } else {
      this._likeButton.classList.remove("elements__card-image-button--active");
      this._likeIcon.src = "./images/vectorcorazon.svg";
    }
    this._deleteButton = this._element.querySelector(
      ".elements__card-delete-button"
    );

    this._setEventListeners();

    return this._element;
  }
}

/*
function createCard(cardData) {
  //declaracion de variables

  const container = document.querySelector(".elements__container");

  const card = document.createElement("div");
  card.classList.add("elements__card-image");

  const elementImage = document.createElement("img");
  elementImage.classList.add("elements__image");
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;

  const trashElement = document.createElement("img");
  trashElement.classList.add("elements__card-delete-button");
  trashElement.src = "./images/trash.svg";
  trashElement.alt = "Eliminar";

  const rectangle = document.createElement("div");
  rectangle.classList.add("elements__card-image-rectangle");

  const cardText = document.createElement("h3");
  cardText.classList.add("elements__card-image-text");
  cardText.textContent = cardData.name;

  const cardLike = document.createElement("div");
  cardLike.classList.add("elements__card-image-button");

  const like = document.createElement("img");
  like.classList.add("elements__card-like-icon");
  like.src = "./images/vectorcorazon.svg";
  like.alt = "like";

  cardLike.append(like);
  rectangle.append(cardText, cardLike);
  card.append(elementImage, trashElement, rectangle);
  container.append(card);

  /*
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

   */
/*
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

// initcializacion del div(.elements__container), este div contine las tarjetas

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  gallery.appendChild(cardElement);
  assignEvents(cardElement, cardData);
});
*/
