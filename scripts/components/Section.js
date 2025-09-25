export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  //metodo publico que renderiza todos los elementos en la pagina, renderer renderiza cada elemento.
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  //metodo especifico para tarjetas iniciales
  addInitialItem(element) {
    this._container.append(element);
  }
  //metodo especifico para nuevas tarjetas
  addNewItem(element) {
    this._container.prepend(element);
  }
}
