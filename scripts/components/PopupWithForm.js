import Popup from "./Popup.js";

// Se encarga de recopilar los datos del form
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".modal__profile-form");
  }

  //recopilar datos de todos los campos de entrada
  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(".modal__profile-input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
  //metodo para el texto guardando... mientras se carga
  renderLoading(
    isLoading,
    button,
    originalText = "Guardar",
    loadingText = "Guardando..."
  ) {
    if (isLoading) {
      button.textContent = loadingText;
      button.disabled = true; //opcional: deshabilitar el boton mientras carga
    } else {
      button.textContent = originalText;
      button.disabled = false;
    }
  }
  //metodo para obtener la referencia al boton de submit del formulario
  getSubmitButton(buttonId) {
    return this._popup.querySelector(`#${buttonId}`);
  }
}
