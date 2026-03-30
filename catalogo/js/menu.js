document.addEventListener("DOMContentLoaded", () => {
  // Botão que alterna o menu (ícone hambúrguer)
  const menuToggleButton = document.querySelector(".hamburger");
  // Menu de navegação principal
  const navigationMenu = document.querySelector(".nav-links");

  // Cria o overlay para escurecer o fundo e capturar cliques fora do menu
  const menuOverlay = document.createElement("div");
  menuOverlay.style.position = "fixed";
  menuOverlay.style.top = "0";
  menuOverlay.style.left = "0";
  menuOverlay.style.width = "100vw";
  menuOverlay.style.height = "100vh";
  menuOverlay.style.zIndex = "999";
  menuOverlay.style.display = "none";
  menuOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.body.appendChild(menuOverlay);

  // Fecha o menu lateral e reabilita o scroll
  function closeNavigationMenu() {
    navigationMenu.classList.remove("active");
    menuToggleButton.classList.remove("active");
    menuOverlay.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Abre o menu lateral e desabilita o scroll do fundo
  function openNavigationMenu() {
    navigationMenu.classList.add("active");
    menuToggleButton.classList.add("active");
    menuOverlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  // Clique no botão hambúrguer alterna o menu
  menuToggleButton.addEventListener("click", () => {
    if (navigationMenu.classList.contains("active")) {
      closeNavigationMenu();
    } else {
      openNavigationMenu();
    }
  });

  // Clique no overlay fecha o menu
  menuOverlay.addEventListener("click", closeNavigationMenu);
});
