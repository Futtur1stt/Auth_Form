export function initPasswordToggle() {
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
}
