import { Header } from './src/components/Header.js';
import { Slider } from './src/components/Slider.js';
import { Shortcuts } from './src/sections/Shortcuts.js';
import { Events } from './src/sections/Events.js';
import { Reflections } from './src/sections/Reflections.js';
import { Footer } from './src/components/Footer.js';

// Page imports (to be created)
import { QuemSomos } from './src/pages/QuemSomos.js';
import { Contato } from './src/pages/Contato.js';
import { EventDetail } from './src/pages/EventDetail.js';

const app = document.getElementById('app');
const headerEl = document.getElementById('header');
const footerEl = document.getElementById('footer');

let currentSlide = 0;

// Função para lidar com o envio do formulário de contato
window.handleContatoFormSubmit = function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('nomeInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const telefone = document.getElementById('telefoneInput').value.trim();
  const mensagem = document.getElementById('mensagemInput').value.trim();

  if (!nome || !email || !telefone || !mensagem) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Número da igreja em formato internacional
  const numeroWhatsapp = '5584991344987';
  
  // Monta a mensagem
  const textoMensagem = '*Novo Contato do Site*\n\n' +
    'Nome: ' + nome + '\n' +
    'Email: ' + email + '\n' +
    'Telefone: ' + telefone + '\n' +
    'Mensagem: ' + mensagem;

  // Codifica o texto para URL
  const mensagemCodificada = encodeURIComponent(textoMensagem);
  
  // Redireciona para o WhatsApp
  window.open('https://wa.me/' + numeroWhatsapp + '?text=' + mensagemCodificada, '_blank');
};

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const nextBtn = document.querySelector('.slider-next');
  const prevBtn = document.querySelector('.slider-prev');

  if (!slides.length) return;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  nextBtn?.addEventListener('click', () => showSlide(currentSlide + 1));
  prevBtn?.addEventListener('click', () => showSlide(currentSlide - 1));

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  // Auto slide
  setInterval(() => showSlide(currentSlide + 1), 6000);
}

function initMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav-links');
  
  toggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Simple mobile menu overlay style in CSS would be needed
  });
}

function renderPage() {
  const hash = window.location.hash || '#home';
  
  headerEl.innerHTML = Header();
  footerEl.innerHTML = Footer();

  // Check if it's an event detail page (e.g., #evento-detail-0)
  const isEventDetailMatch = hash.match(/^#evento-detail-(\d+)$/);
  if (isEventDetailMatch) {
    const eventIndex = Number(isEventDetailMatch[1]);
    app.innerHTML = EventDetail(eventIndex);
    initMenu();
    if (window.lucide) {
      window.lucide.createIcons();
    }
    window.scrollTo(0, 0);
    return;
  }

  // Support deep-links to sections that live on the home page
  const homeAnchors = ['#home', '#reflexoes', '#eventos', '#informativo', '#atalhos'];
  const isEventoAnchor = hash.startsWith('#evento-') && !isEventDetailMatch;
  if (homeAnchors.includes(hash) || isEventoAnchor) {
    app.innerHTML = `
      ${Slider()}
      ${Shortcuts()}
      ${Events()}
      ${Reflections()}
    `;
    initSlider();
    // If an anchor other than #home was requested, scroll to it after render
    if (hash !== '#home') {
      // small timeout to ensure DOM is painted
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
    // attach handlers for event links and handle pending highlight
    setTimeout(() => {
      attachEventLinkHandlers();
      attachSlideClickHandlers();
      // if directly linking to an event anchor (e.g. #evento-1), set pending highlight
      if (isEventoAnchor) {
        const idx = Number(hash.replace('#evento-', ''));
        if (Number.isFinite(idx)) {
          highlightEvent(idx);
        }
      }
      if (window.pendingEventHighlight != null) {
        highlightEvent(window.pendingEventHighlight);
        window.pendingEventHighlight = null;
      }
    }, 80);
  } else if (hash === '#quem-somos') {
    app.innerHTML = QuemSomos();
  } else if (hash === '#contato') {
    app.innerHTML = Contato();
  } else {
    app.innerHTML = `<section class="py-5 text-center"><h1>Página em construção</h1><a href="#home">Voltar para início</a></section>`;
  }

  initMenu();
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
  
  window.scrollTo(0, 0);
}

function attachEventLinkHandlers() {
  document.querySelectorAll('.event-link').forEach(a => {
    a.removeEventListener('click', eventLinkHandler);
    a.addEventListener('click', eventLinkHandler);
  });
}

function eventLinkHandler(e) {
  const idx = Number(this.getAttribute('data-index'));
  e.preventDefault();
  const targetHash = `#evento-detail-${Number.isFinite(idx) ? idx : 0}`;
  if (window.location.hash !== targetHash) {
    window.location.hash = targetHash;
  } else {
    const el = document.querySelector(targetHash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

function highlightEvent(index) {
  // legacy: previous behavior added a persistent highlight class.
  // Now we only scroll the target into view without changing styles.
  const cards = Array.from(document.querySelectorAll('.events-grid .event-card'));
  const target = cards[index];
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function attachSlideClickHandlers() {
  const slides = Array.from(document.querySelectorAll('.slide'));
  slides.forEach(slide => {
    // remove previous handler if any
    slide.removeEventListener('click', slideClickHandler);
    slide.addEventListener('click', slideClickHandler);
  });
}

function slideClickHandler(e) {
  // Prevent clicking on inner links from triggering the slide animation twice
  if (e.target.closest('a')) return;
  const el = this;
  el.classList.remove('click-animate');
  // trigger reflow to restart animation
  // eslint-disable-next-line no-unused-expressions
  void el.offsetWidth;
  el.classList.add('click-animate');
  // remove class after animation completes (fallback timeout)
  const removeFn = () => {
    el.classList.remove('click-animate');
    el.removeEventListener('animationend', removeFn);
  };
  el.addEventListener('animationend', removeFn);
  setTimeout(() => { el.classList.remove('click-animate'); }, 1200);
}

window.addEventListener('hashchange', renderPage);
window.addEventListener('DOMContentLoaded', renderPage);
