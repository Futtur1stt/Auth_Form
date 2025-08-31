const body = document.querySelector("body");
const lightThemeButton = document.querySelector('[data-theme-btn="light"]');
const darkThemeButton = document.querySelector('[data-theme-btn="dark"]');

const enableDarkTheme = () => {
  body.classList.add("dark-theme");
  localStorage.setItem("theme", "dark");
};

const enableLightTheme = () => {
  body.classList.remove("dark-theme");
  localStorage.setItem("theme", "light");
};

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  enableDarkTheme();
} else {
  enableLightTheme();
}

darkThemeButton.addEventListener("click", enableDarkTheme);
lightThemeButton.addEventListener("click", enableLightTheme);

const loginButton = document.querySelector("[data-login-btn]");
const registrationButton = document.querySelector("[data-registration-btn]");

const loginTitle = document.querySelector("[data-login-title]");
const registrationTitle = document.querySelector("[data-registration-title]");

const registrationBox = document.querySelector("[data-registration-box]");

loginButton.addEventListener("click", () => {
  registrationBox.classList.remove("active");

  setTimeout(() => {
    loginButton.classList.add("visually-hidden");
    loginButton.setAttribute("tabindex", "-1");
    loginButton.setAttribute("aria-hidden", "true");

    registrationButton.classList.remove("visually-hidden");
    registrationButton.setAttribute("tabindex", "0");
    registrationButton.removeAttribute("aria-hidden");

    loginTitle.classList.add("visually-hidden");
    loginTitle.setAttribute("aria-hidden", "true");

    registrationTitle.classList.remove("visually-hidden");
    registrationTitle.removeAttribute("aria-hidden");

    registrationButton.focus();
  }, 300);
});

registrationButton.addEventListener("click", () => {
  registrationBox.classList.add("active");

  setTimeout(() => {
    loginButton.classList.remove("visually-hidden");
    loginButton.setAttribute("tabindex", "0");
    loginButton.removeAttribute("aria-hidden");

    registrationButton.classList.add("visually-hidden");
    registrationButton.setAttribute("tabindex", "-1");
    registrationButton.setAttribute("aria-hidden", "true");

    loginTitle.classList.remove("visually-hidden");
    loginTitle.removeAttribute("aria-hidden");

    registrationTitle.classList.add("visually-hidden");
    registrationTitle.setAttribute("aria-hidden", "true");

    loginButton.focus();
  }, 300);
});

const passwordButtonSignIn = document.querySelector(
  "[data-password-btn-signin]"
);
const passwordTypeInputSignIn = document.querySelector(
  "[data-password-input-signin]"
);
const openEyeIconSignIn = document.querySelector("[data-open-eye-signin]");
const closeEyeIconSignIn = document.querySelector("[data-close-eye-signin]");

passwordButtonSignIn.addEventListener("click", () => {
  const isPasswordHidden = passwordTypeInputSignIn.type === "password";
  passwordTypeInputSignIn.type = isPasswordHidden ? "text" : "password";
  passwordButtonSignIn.title = isPasswordHidden
    ? "Скрыть пароль"
    : "Показать пароль";

  if (isPasswordHidden) {
    openEyeIconSignIn.classList.add("visually-hidden");
    closeEyeIconSignIn.classList.remove("visually-hidden");
  } else {
    openEyeIconSignIn.classList.remove("visually-hidden");
    closeEyeIconSignIn.classList.add("visually-hidden");
  }
});

const passwordButtonSignUp = document.querySelector(
  "[data-password-btn-signup]"
);
const passwordTypeInputSignUp = document.querySelector(
  "[data-password-input-signup]"
);
const openEyeIconSignUp = document.querySelector("[data-open-eye-signup]");
const closeEyeIconSignUp = document.querySelector("[data-close-eye-signup]");

passwordButtonSignUp.addEventListener("click", () => {
  const isPasswordHidden = passwordTypeInputSignUp.type === "password";
  passwordTypeInputSignUp.type = isPasswordHidden ? "text" : "password";
  passwordButtonSignUp.title = isPasswordHidden
    ? "Скрыть пароль"
    : "Показать пароль";

  if (isPasswordHidden) {
    openEyeIconSignUp.classList.add("visually-hidden");
    closeEyeIconSignUp.classList.remove("visually-hidden");
  } else {
    openEyeIconSignUp.classList.remove("visually-hidden");
    closeEyeIconSignUp.classList.add("visually-hidden");
  }
});

class FormsValidation {
  selectors = {
    form: "[data-js-form]",
    fieldErrors: "[data-js-form-field-errors]",
  };

  errorMessages = {
    valueMissing: () => "Пожалуйста, заполните данное поле",
    patternMismatch: ({ title }) => title || "Данные не соответствуют формату ",
    tooShort: ({ minLength }) =>
      `Слишком короткое значение, минимум символов: ${minLength}`,
    tooLong: ({ maxLength }) =>
      `Слишком длинное значение, ограничение символов: ${maxLength}`,
  };

  constructor() {
    this.bindEvents();
  }

  manageErrors(formInputElement, errorMessages) {
    const listItem = formInputElement.closest(".form__item");
    const fieldErrorsElement = listItem.querySelector(
      this.selectors.fieldErrors
    );

    fieldErrorsElement.innerHTML = errorMessages
      .map((message) => `<span class="form__errors">${message}</span>`)
      .join("");
  }

  validateField(formInputElement) {
    const errors = formInputElement.validity;
    const errorMessages = [];

    Object.entries(this.errorMessages).forEach(
      ([errorType, getErrorMessage]) => {
        if (errors[errorType]) {
          errorMessages.push(getErrorMessage(formInputElement));
        }
      }
    );

    this.manageErrors(formInputElement, errorMessages);

    const isValid = errorMessages.length === 0;

    formInputElement.ariaInvalid = !isValid;

    return isValid;
  }

  onBlur(event) {
    const { target } = event;
    const isFormField = target.closest(this.selectors.form);
    const isRequired = target.required;

    if (isFormField && isRequired) {
      this.validateField(target);
    }
  }

  onSubmit(event) {
    const isFormElement = event.target.matches(this.selectors.form);

    if (!isFormElement) {
      return;
    }

    const requiredControlElements = [...event.target.elements].filter(
      ({ required }) => required
    );
    let isFormValid = true;
    let firstInvalidFieldControl = null;

    requiredControlElements.forEach((element) => {
      const isFieldValid = this.validateField(element);

      if (!isFieldValid) {
        isFormValid = false;

        if (!firstInvalidFieldControl) {
          firstInvalidFieldControl = element;
        }
      }
    });

    if (!isFormValid) {
      event.preventDefault();
      firstInvalidFieldControl.focus();
    }
  }

  bindEvents() {
    document.addEventListener(
      "blur",
      (event) => {
        this.onBlur(event);
      },
      { capture: true }
    );
    document.addEventListener("submit", (event) => {
      this.onSubmit(event);
    });
  }
}

new FormsValidation();
