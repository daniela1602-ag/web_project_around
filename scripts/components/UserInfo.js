export default class UserInfo {
  constructor(selectors) {
    this._nameElement = document.querySelector(selectors.nameSelector);
    this._jobElement = document.querySelector(selectors.jobSelector);
  }

  //metodo publico que devuelve un objeto con información sobre el usuario
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  //metodo publico que toma los datos del nuevo usuario y los agrega en la página
  setUserInfo(userData) {
    this._nameElement.textContent = userData.name;
    this._jobElement.textContent = userData.about;
  }
}
