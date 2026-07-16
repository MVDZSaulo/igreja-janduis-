export const QuemSomos = () => {
  return `
    <section class="page-header py-5" style="background-image: linear-gradient(rgba(0,43,91,0.8), rgba(0,43,91,0.8)), url('src/assets/Foto da igreja de janduis.jpeg'); background-size: cover; background-position: center;">
      <div class="container text-center">
        <h1 style="color: var(--white); font-size: 3rem;">Quem Somos</h1>
      </div>
    </section>

    <section class="institutional-section py-5">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
          <div>
            <h2 class="section-title" style="text-align: left; left: 0; transform: none;">Nossa História</h2>
            <p>O evangelho teve início no final da década de 50, através do irmão Sérvulo Bezerra. Vindo de Recife em suas férias, pregava nas ruas e ganhou as primeiras pessoas para Jesus.</p>
            <p>Dentre os primeiros convertidos estavam os irmãos Lopes Menezes, Maria Lúcia da Conceição e outros irmãos que abraçaram a fé e ajudaram no crescimento do ministério.</p>
            <p>O pastor João Gomes da Silva vinha de Caraúbas duas vezes por semana para nos pastorear. Logo após, o primeiro pastor residente foi o Pr. José Herminio Pereira, em 1968, marcando um novo período na história de nossa comunidade.</p>
            <p>Hoje, continuamos com o mesmo propósito: levar a mensagem do evangelho a todas as pessoas, promovendo transformação social e espiritual.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&w=600&q=80" alt="Igreja" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
        </div>

        <!-- Missão / Visão / Valores cards removed -->

        <div class="leadership py-5 text-center">
          <h2 class="section-title">Nossa Liderança</h2>
          <div class="leadership-grid">
            <div class="leader-card">
              <img src="src/assets/Foto do Pastor.jpeg" alt="Pr. Enok Estelito" class="leader-photo">
              <h3>Pr. Enok Estelito</h3>
              <p>Pastor Local</p>
            </div>
            <div class="leader-card">
              <img src="src/assets/Mulher do pastor imagem.jpeg" alt="Jorverte" class="leader-photo">
              <h3>Jorverte</h3>
              <p>Esposa do Pastor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
