import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector("img");
  }
  open(name, link) {
    const imageElement = this._popup.querySelector(".modal__image");
    imageElement.src = link;
    imageElement.alt = name;
    super.open();
  }
}
