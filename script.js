/**
 * Módulo de Tema Dark/Light Mode
 * Responsável por alternar entre temas escuro e claro,
 * e persistir a preferência do usuário no localStorage
 */

// ==================== CONSTANTES ====================
const THEME_STORAGE_KEY = "theme";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

// ==================== SELETORES ====================
const themeToggleCheckbox = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const bodyElement = document.body;

// ==================== FUNÇÕES ====================

/**
 * Obtém o tema salvo no localStorage
 * @returns {string|null} O tema salvo ('light' ou 'dark') ou null se não existir
 */
function getSavedTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY);
}

/**
 * Salva o tema no localStorage
 * @param {string} theme - O tema a ser salvo ('light' ou 'dark')
 */
function saveThemeToStorage(theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

/**
 * Aplica o tema claro ao documento
 */
function applyLightTheme() {
  bodyElement.classList.remove(DARK_THEME);
  bodyElement.classList.add(LIGHT_THEME);
}

/**
 * Aplica o tema escuro ao documento
 */
function applyDarkTheme() {
  bodyElement.classList.remove(LIGHT_THEME);
  bodyElement.classList.add(DARK_THEME);
}

/**
 * Alterna entre os temas claro e escuro
 */
function toggleTheme() {
  if (themeToggleCheckbox.checked) {
    applyLightTheme();
    saveThemeToStorage(LIGHT_THEME);
  } else {
    applyDarkTheme();
    saveThemeToStorage(DARK_THEME);
  }
}

/**
 * Inicializa o tema baseado nas preferências salvas
 */
function initializeTheme() {
  const savedTheme = getSavedTheme();

  if (savedTheme === LIGHT_THEME) {
    themeToggleCheckbox.checked = true;
    applyLightTheme();
  } else {
    applyDarkTheme();
  }
}

// ==================== EVENT LISTENERS ====================

/**
 * Listener para mudanças no checkbox de tema
 */
themeToggleCheckbox.addEventListener("change", toggleTheme);

// ==================== INICIALIZAÇÃO ====================

/**
 * Executa a inicialização quando o DOM está pronto
 */
initializeTheme();

// ==================== SISTEMA DE PERFIS ====================

/**
 * Captura o nome e a imagem do perfil clicado e salva no localStorage
 */
function setupProfileSelection() {
  const profiles = document.querySelectorAll(".profile a");

  profiles.forEach((profileLink) => {
    profileLink.addEventListener("click", (event) => {
      const figCaption = profileLink.querySelector(".nome-perfil");
      const profileImage = profileLink.querySelector("img");

      if (figCaption) {
        const profileName = figCaption.textContent;
        localStorage.setItem("currentProfile", profileName);
      }

      if (profileImage) {
        const imageSrc = profileImage.src;
        localStorage.setItem("currentProfileImage", imageSrc);
      }
    });
  });
}

/**
 * Inicializa a seleção de perfis
 */
setupProfileSelection();
