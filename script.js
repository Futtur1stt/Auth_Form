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
const registrationBox = document.querySelector("[data-registration-box]");
const registrationTitleFirst = document.querySelector("[data-title-first]");
const registrationTitleSecond = document.querySelector("[data-title-second]");

loginButton.addEventListener("click", () => {
  registrationBox.classList.remove("active");
  setTimeout(() => {
    registrationTitleFirst.classList.add("visually-hidden");
    loginButton.classList.add("visually-hidden");
    registrationTitleSecond.classList.remove("visually-hidden");
    registrationButton.classList.remove("visually-hidden");

    registrationButton.setAttribute("tabindex", "0");
    registrationButton.setAttribute("aria-hidden", "true");
    registrationTitleSecond.setAttribute("aria-hidden", "true");

    loginButton.setAttribute("tabindex", "-1");
    loginButton.setAttribute("aria-hidden", "false");
    registrationTitleFirst.setAttribute("aria-hidden", "false");

    registrationButton.focus();
  }, 300);
});

registrationButton.addEventListener("click", () => {
  registrationBox.classList.add("active");
  setTimeout(() => {
    registrationTitleFirst.classList.remove("visually-hidden");
    loginButton.classList.remove("visually-hidden");
    registrationTitleSecond.classList.add("visually-hidden");
    registrationButton.classList.add("visually-hidden");

    loginButton.setAttribute("tabindex", "0");
    loginButton.setAttribute("aria-hidden", "true");
    registrationTitleFirst.setAttribute("aria-hidden", "true");

    registrationButton.setAttribute("tabindex", "-1");
    registrationButton.setAttribute("aria-hidden", "false");
    registrationTitleSecond.setAttribute("aria-hidden", "false");

    loginButton.focus();
  }, 300);
});

const passwordButton = document.querySelector("[data-password-btn]");
const passwordTypeInput = document.querySelector("[data-password-input]");
const openEyeIcon = document.querySelector("[data-open-eye]");
const closeEyeIcon = document.querySelector("[data-close-eye]");

passwordButton.addEventListener("click", () => {
  const isPasswordHidden = passwordTypeInput.type === "password";
  passwordTypeInput.type = isPasswordHidden ? "text" : "password";
  passwordButton.title = isPasswordHidden ? "Скрыть пароль" : "Показать пароль";
  openEyeIcon.classList.toggle("visually-hidden", !isPasswordHidden);
  closeEyeIcon.classList.toggle("visually-hidden", isPasswordHidden);
});
