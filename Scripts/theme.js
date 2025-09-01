export function initTheme() {
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
}
