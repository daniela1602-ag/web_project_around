export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  //metodo publico para abrir ventana emmergente
  open() {
    this._popup.classList.add("modal--active");
  }

  //metodo publico para cerrar ventana emergente
  close() {
    this._popup.classList.remove("modal--active");
  }

  //metodo privado para cerrar ventanas popup con Esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  //metodo publico que agrega un detector de eventos de click al icono de cerrar del popup
  setEventListeners() {
    //cerrar con el icono X

    this._popup
      .querySelector(".modal__close-icon")
      .addEventListener("click", () => {
        this.close();
      });
    //cerrar con Esc
    document.addEventListener("keydown", this._handleEscClose.bind(this));
    //cerrar clickeando el sombreado
    this._popup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}
