import { eventsData } from '../data/eventsData.js';

export const Events = () => {
  const events = eventsData;

  return `
    <section class="events-section py-5" id="eventos">
      <div class="container text-center">
        <h2 class="section-title">PRÓXIMOS EVENTOS</h2>
        <div class="events-grid">
          ${events.map((event, index) => `
            <div class="event-card" id="evento-${index}">
              <img src="${event.img}" alt="${event.title}" class="event-img">
              <div class="event-content text-center">
                <span class="event-date">${event.date}</span>
                <h3 class="event-title">${event.title}</h3>
                <a href="#evento-detail-${index}" class="btn btn-outline event-link" data-index="${index}">${event.btnText || 'Saiba Mais'}</a>
              </div>
            </div>
          `).join('')}
        </div>
        </div>
    </section>
  `;
};
