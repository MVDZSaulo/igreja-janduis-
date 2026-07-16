export const Header = () => {
  return `
    <nav class="header-nav">
      <div class="container nav-container">
        <a href="#home" class="logo">
          <img src="./src/assets/logo.png" alt="Igreja Janduis Logo" class="logo-img">
        </a>

        <ul class="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#quem-somos">Quem Somos</a></li>
          <li><a href="#eventos">Calendário de Eventos</a></li>
          <li><a href="#reflexoes">Reflexões</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <div class="nav-extras">
          <div class="social-icons">
            <a href="#" target="_blank"><i data-lucide="instagram"></i></a>
          </div>
          <button class="menu-toggle" id="menuToggle">
            <i data-lucide="menu"></i>
          </button>
        </div>
      </div>
    </nav>
  `;
};
