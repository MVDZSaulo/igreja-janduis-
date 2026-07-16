import { eventsData } from '../data/eventsData.js';

export const Footer = () => {
  return `
    <footer class="main-footer py-5">
      <div class="container footer-grid">
        <div class="footer-col branding">
          <img src="./src/assets/logo.png" alt="Logo Igreja Janduis" class="footer-logo">
          <p class="footer-text">Igreja Evangélica Assembleia de Deus<br>Um lugar de adoração, comunhão e transformação.</p>
          <div class="social-icons" aria-label="Redes sociais">
            <a href="https://www.instagram.com/adjanduis.rn" title="Instagram da Igreja" rel="noopener noreferrer" target="_blank">
              <i data-lucide="instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">Páginas</h4>
          <nav aria-label="Rodapé - navegação">
            <ul class="footer-links">
              <li><a href="#home">Início</a></li>
              <li><a href="#quem-somos">Quem Somos</a></li>
              <li><a href="#informativo">Informativo</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
            <div style="margin-top:12px">
              <strong style="color:var(--secondary); display:block; margin-bottom:8px">Eventos</strong>
              <ul class="footer-links" style="grid-template-columns: 1fr;">
                ${eventsData.map((ev, i) => `<li><a href="#evento-${i}" class="event-link" data-index="${i}">${ev.title}</a></li>`).join('')}
              </ul>
            </div>
          </nav>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">Localização</h4>
          <address class="footer-info">
            <div class="info-row">
              <i data-lucide="map-pin" aria-hidden="true"></i>
              <span>114, R. São Bento - Centro, Janduís - RN, 59690-000</span>
            </div>
            <div class="info-row">
              <span>Janduís / RN</span>
            </div>
          </address>
        </div>

        <div class="footer-col">
          <h4 class="footer-title">Contato</h4>
          <div class="footer-info">
            <div class="info-row">
              <i data-lucide="mail" aria-hidden="true"></i>
              <a href="mailto:contato@igrejajanduis.com.br">contato@igrejajanduis.com.br</a>
            </div>
            <div class="info-row">
              <i data-lucide="phone" aria-hidden="true"></i>
              <a href="tel:+558499134987">(84) 9913-4987</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom container text-center">
        <hr>
        <p>&copy; 2026 Igreja Janduis. Todos os direitos reservados.</p>
      </div>
    </footer>
  `;
};
