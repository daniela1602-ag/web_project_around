/*const form = document.getElementById("editProfileForm");*/
//no entiendo porque no se valida la url
//objeto de configuración, sirve para almacenar clases y selectores.
//Luego este objeto se pasa a la función enableValidation que se encarga de validar utilizando el parametro config.
//funciones de form validation
const showInputError = (form, inputElement, errorMessage, config) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);

  errorElement.textContent = errorMessage;

  errorElement.classList.add(config.errorClass);
};

const hideInputError = (form, inputElement, config) => {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const isValid = (form, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(form, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(form, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.remove("modal__submit--active");
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.add("modal__submit--active");
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListener = (form, config) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  const buttonElement = form.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(form, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
  toggleButtonState(inputList, buttonElement, config);
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListener(form, config);
  });
};
enableValidation({
  formSelector: ".modal__profile-form",
  inputSelector: ".modal__profile-input",
  submitButtonSelector: ".modal__profile-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});
