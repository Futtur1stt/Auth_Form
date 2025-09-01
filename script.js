import { initTheme } from "./Scripts/theme.js";
import { initFormSwitcher } from "./Scripts/form-swticher.js";
import { initPasswordToggle } from "./Scripts/password-toggle.js";
import { FormsValidation } from "./Scripts/form-validation.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initFormSwitcher();
  initPasswordToggle();
  new FormsValidation();
});
