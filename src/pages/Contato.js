export const Contato = () => {
  return `
    <section class="page-header py-5" style="background-image: linear-gradient(rgba(0,43,91,0.8), rgba(0,43,91,0.8)), url('https://images.unsplash.com/photo-1523966211575-eb4a03460699?auto=format&fit=crop&w=1200&q=80'); background-size: cover; background-position: center;">
      <div class="container text-center">
        <h1 style="color: var(--white); font-size: 3rem;">Fale Conosco</h1>
      </div>
    </section>

    <section class="contact-section py-5">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px;">
          <div>
            <h2 class="section-title" style="text-align: left; left: 0; transform: none;">Envie uma Mensagem</h2>
            <form id="contactForm" style="display: flex; flex-direction: column; gap: 20px;">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label>Nome Completo</label>
                <input type="text" id="nomeInput" placeholder="Seu nome" style="padding: 12px; border: 1px solid #ddd; border-radius: var(--radius-md);" required>
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label>E-mail</label>
                <input type="email" id="emailInput" placeholder="seu@email.com" style="padding: 12px; border: 1px solid #ddd; border-radius: var(--radius-md);" required>
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label>Telefone</label>
                <input type="tel" id="telefoneInput" placeholder="(00) 00000-0000" style="padding: 12px; border: 1px solid #ddd; border-radius: var(--radius-md);" required>
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label>Mensagem</label>
                <textarea id="mensagemInput" rows="5" placeholder="Como podemos ajudar?" style="padding: 12px; border: 1px solid #ddd; border-radius: var(--radius-md);" required></textarea>
              </div>
              <button type="button" class="btn btn-primary" style="width: 200px;" onclick="handleContatoFormSubmit(event)">Enviar Mensagem</button>
            </form>
          </div>

          <div>
            <h2 class="section-title" style="text-align: left; left: 0; transform: none;">Nossas Informações</h2>
            <div style="display: flex; flex-direction: column; gap: 30px; margin-bottom: 40px;">
              <div style="display: flex; gap: 20px; align-items: start;">
                <div class="shortcut-icon" style="width: 50px; height: 50px;"><i data-lucide="map-pin"></i></div>
                <div>
                  <h4 style="color: var(--primary);">Endereço</h4>
                  <p>Rua Principal, 456 - Centro, Janduis/RN</p>
                </div>
              </div>
              <div style="display: flex; gap: 20px; align-items: start;">
                <div class="shortcut-icon" style="width: 50px; height: 50px;"><i data-lucide="phone"></i></div>
                <div>
                  <h4 style="color: var(--primary);">Telefone</h4>
                  <p>(84) 9913-4987</p>
                </div>
              </div>
              <div style="display: flex; gap: 20px; align-items: start;">
                <div class="shortcut-icon" style="width: 50px; height: 50px;"><i data-lucide="mail"></i></div>
                <div>
                  <h4 style="color: var(--primary);">Email</h4>
                  <p>secretaria@igrejajanduis.com.br</p>
                </div>
              </div>
            </div>

              <div style="width: 100%; height: 320px; border-radius: var(--radius-lg); overflow: hidden; background: #eee;">
                <iframe
                  src="https://www.google.com/maps?q=IEADERN+-+Assembl%C3%A9ia+de+Deus+em+Janduis-RN&ll=-6.0162731,-37.4060163&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div style="margin-top:10px;">
                <a href="https://www.google.com/maps/place/IEADERN+-+Assembl%C3%A9ia+de+Deus+em+Janduis-RN/@-6.0161975,-37.4059816,17z/data=!4m6!3m5!1s0x7baa44870ca2ac7:0x48a3977fb5331cb2!8m2!3d-6.0162731!4d-37.4060163!16s%2Fg%2F11c2pdfr57?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank" rel="noopener noreferrer" style="color:var(--primary); font-weight:600;">Abrir no Google Maps</a>
              </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
