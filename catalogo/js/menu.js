document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // 1. Criar o elemento de overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = '999';
    overlay.style.display = 'none';
    // Adiciona um fundo para capturar cliques e escurecer o conteúdo
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.body.appendChild(overlay);

    // Função para fechar o menu
    const closeMenu = () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.style.display = 'none';
        // Habilita o scroll da página novamente
        document.body.style.overflow = 'auto';
    };

    // Função para abrir o menu
    const openMenu = () => {
        navLinks.classList.add('active');
        hamburger.classList.add('active');
        overlay.style.display = 'block';
        // Desabilita o scroll da página ao fundo
        document.body.style.overflow = 'hidden';
    };

    // 2. O clique no hambúrguer abre/fecha o menu
    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // 3. O clique no overlay (fora do menu) fecha o menu
    overlay.addEventListener('click', () => {
        closeMenu();
    });
});
