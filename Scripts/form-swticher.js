export function initFormSwitcher() {
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
}
