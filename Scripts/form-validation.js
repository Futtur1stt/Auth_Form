export class FormsValidation {
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
