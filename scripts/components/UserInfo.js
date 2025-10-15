export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  //metodo publico que devuelve un objeto con información sobre el usuario
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
    };
  }

  //metodo publico que toma los datos del nuevo usuario y los agrega en la página
  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = about;
  }

  //metodo para actuualizar el avatar
  setUserAvatar(avatarUrl) {
    this._avatarElement.src = avatarUrl;
    this._avatarElement.alt = "Foto de perfil";
  }
}
