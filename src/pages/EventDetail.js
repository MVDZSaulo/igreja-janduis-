import { eventsData } from '../data/eventsData.js';

export const EventDetail = (eventIndex) => {
  const event = eventsData[eventIndex];
  
  if (!event) {
    return `
      <section class="event-detail py-5">
        <div class="container text-center">
          <h1>Evento não encontrado</h1>
          <a href="#home" class="btn btn-primary mt-3">Voltar para Início</a>
        </div>
      </section>
    `;
  }

  let detailContent = '';

  // Conteúdo específico para cada evento
  if (eventIndex === 0) {
    detailContent = `
      <div class="event-detail-content">
        <h2>${event.title}</h2>
        <p class="event-detail-date"><strong>Data da Reenauguração:</strong> ${event.date}</p>
        <p class="event-detail-location"><strong>Local:</strong> ${event.location}</p>
        <p class="event-detail-description">
          Somos felizes em anunciar o grande dia da Reenauguração da Igreja Central de Janduis!
          Este é um momento especial de celebração e comunhão. Esperamos você lá!
        </p>
      </div>
    `;
  } else if (eventIndex === 1) {
    detailContent = `
      <div class="event-detail-content">
        <h2>${event.title}</h2>
        <p class="event-detail-date"><strong>Data do Congresso:</strong> O evento acontecerá no dia 6 de Setembro</p>
        <p class="event-detail-location"><strong>Local:</strong> ${event.location}</p>
        <p class="event-detail-description">
          Venha participar do Congresso de Jovens! Será um tempo de crescimento espiritual,
          comunhão e diversão. Reunir-nos-emos para fortalecer nossa fé e nossa comunidade jovem.
          Não perca essa oportunidade de estar com outros jovens da região!
        </p>
      </div>
    `;
  } else if (eventIndex === 2) {
    detailContent = `
      <div class="event-detail-content">
        <h2>${event.title}</h2>
        <p class="event-detail-date"><strong>Frequência:</strong> Todas as Sextas-Feiras</p>
        <p class="event-detail-time"><strong>Horário:</strong> 19:00</p>
        <p class="event-detail-location"><strong>Local:</strong> ${event.location}</p>
        <p class="event-detail-description">
          O Culto de Doutrina é um momento dedicado ao aprofundamento de nossa fé e compreensão
          das Escrituras. Reunimo-nos todas as sextas-feiras para oração, estudo bíblico e
          comunhão. Você é convidado a participar regularmente deste importante culto!
        </p>
      </div>
    `;
  }

  return `
    <section class="event-detail py-5">
      <div class="container">
        <div class="event-detail-wrapper">
          <img src="${event.img}" alt="${event.title}" class="event-detail-img mb-4">
          ${detailContent}
          <div class="event-detail-actions mt-5">
            <a href="#home" class="btn btn-primary">Voltar para Eventos</a>
          </div>
        </div>
      </div>
    </section>
  `;
};
