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

const confirmPasswordButton = document.querySelector(
  "[data-confirm-password-btn]"
);
const confirmPasswordTypeInput = document.querySelector(
  "[data-confirm-password-input]"
);
const confirmOpenEyeIcon = document.querySelector("[data-confirm-open-eye]");
const confirmCloseEyeIcon = document.querySelector("[data-confirm-close-eye]");

confirmPasswordButton.addEventListener("click", () => {
  const isPasswordHidden = confirmPasswordTypeInput.type === "password";
  confirmPasswordTypeInput.type = isPasswordHidden ? "text" : "password";
  confirmPasswordButton.title = isPasswordHidden
    ? "Скрыть пароль"
    : "Показать пароль";

  if (isPasswordHidden) {
    confirmOpenEyeIcon.classList.add("visually-hidden");
    confirmCloseEyeIcon.classList.remove("visually-hidden");
  } else {
    confirmOpenEyeIcon.classList.remove("visually-hidden");
    confirmCloseEyeIcon.classList.add("visually-hidden");
  }
});
