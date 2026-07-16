import { eventsData } from '../data/eventsData.js';

export const Slider = () => {
  const slides = eventsData;

  return `
    <section class="slider-section">
      <div class="slider-container">
        ${slides.map((slide, index) => `
          <div class="slide ${index === 0 ? 'active' : ''}" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${slide.img}')">
            <div class="container slide-content">
              <h1 class="slide-title">${slide.title}</h1>
              <p class="slide-info">
                <span><i data-lucide="calendar"></i> ${slide.date}</span>
                <span><i data-lucide="map-pin"></i> ${slide.location}</span>
              </p>
              <a href="#evento-${index}" class="btn btn-secondary slide-btn event-link" data-index="${index}">${slide.btnText}</a>
            </div>
          </div>
        `).join('')}
        
        <button class="slider-prev"><i data-lucide="chevron-left"></i></button>
        <button class="slider-next"><i data-lucide="chevron-right"></i></button>

        <div class="slider-dots">
          ${slides.map((_, index) => `<span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`).join('')}
        </div>
      </div>
    </section>
  `;
};
