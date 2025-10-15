import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  //metodo para configurar la accion de confirmacion
  setSubmitAction(callback) {
    this._handleSubmitCallback = callback;
  }

  setEventListeners() {
    //llama primero a este para mantener la funcionalidad de cerrar con x, esc, etc.
    super.setEventListeners();
    //Agregar evento al boton de confirmacion
    this._popup
      .querySelector(".modal__profile-submit")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        if (this._handleSubmitCallback) {
          this._handleSubmitCallback();
        }
      });
  }
}
