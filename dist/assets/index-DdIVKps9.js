(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const h=()=>`
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
  `,d=[{img:"./src/assets/Foto da igreja de janduis.jpeg",title:"Reenaguração da igreja Central",date:"15 de Junho | 18:00",location:"Igreja Central",btnText:"Saiba Mais"},{img:"./src/assets/slider2.png",title:"Congresso de Jovens",date:"4-5-6 de Setembro",location:"Módulo Esportivo",btnText:"Inscrições Indisponiveis"},{img:"./src/assets/Culto de doltrina.jpeg",title:"Culto de Doutrina",date:"Toda Sexta-Feira | 19:00",location:"Igreja Central",btnText:"Saiba Mais"}],f=()=>{const t=d;return`
    <section class="slider-section">
      <div class="slider-container">
        ${t.map((e,a)=>`
          <div class="slide ${a===0?"active":""}" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${e.img}')">
            <div class="container slide-content">
              <h1 class="slide-title">${e.title}</h1>
              <p class="slide-info">
                <span><i data-lucide="calendar"></i> ${e.date}</span>
                <span><i data-lucide="map-pin"></i> ${e.location}</span>
              </p>
              <a href="#evento-${a}" class="btn btn-secondary slide-btn event-link" data-index="${a}">${e.btnText}</a>
            </div>
          </div>
        `).join("")}
        
        <button class="slider-prev"><i data-lucide="chevron-left"></i></button>
        <button class="slider-next"><i data-lucide="chevron-right"></i></button>

        <div class="slider-dots">
          ${t.map((e,a)=>`<span class="dot ${a===0?"active":""}" data-index="${a}"></span>`).join("")}
        </div>
      </div>
    </section>
  `},b=()=>`
    <section class="shortcuts-section">
      <div class="container">
        <div class="shortcuts-grid">
          <!-- Shortcuts removed as requested -->
        </div>
      </div>
    </section>
  `,y=()=>`
    <section class="events-section py-5" id="eventos">
      <div class="container text-center">
        <h2 class="section-title">PRÓXIMOS EVENTOS</h2>
        <div class="events-grid">
          ${d.map((e,a)=>`
            <div class="event-card" id="evento-${a}">
              <img src="${e.img}" alt="${e.title}" class="event-img">
              <div class="event-content text-center">
                <span class="event-date">${e.date}</span>
                <h3 class="event-title">${e.title}</h3>
                <a href="#evento-detail-${a}" class="btn btn-outline event-link" data-index="${a}">${e.btnText||"Saiba Mais"}</a>
              </div>
            </div>
          `).join("")}
        </div>
        </div>
    </section>
  `,x=()=>`
    <section class="reflections-section py-5" id="reflexoes">
      <div class="container text-center">
        <h2 class="section-title">REFLEXÕES BÍBLICAS</h2>
        <div class="reflections-grid">
          ${[{title:"João 3:16",excerpt:"Deus amou o mundo de tal maneira que deu Seu Filho, para que todo aquele que crê tenha a vida eterna. (João 3:16)"},{title:"Salmo 23:1",excerpt:"O Senhor cuida de nós como um pastor; nele encontramos sustento e paz para o coração. (Salmo 23:1)"},{title:"Filipenses 4:13",excerpt:"Em Cristo recebemos força para enfrentar desafios e seguir firmes na caminhada. (Filipenses 4:13)"}].map(e=>`
            <div class="reflection-card text-center">
              <h3 class="reflection-title">${e.title}</h3>
              <p class="reflection-excerpt">${e.excerpt}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `,w=()=>`
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
                ${d.map((t,e)=>`<li><a href="#evento-${e}" class="event-link" data-index="${e}">${t.title}</a></li>`).join("")}
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
              <a href="mailto:assembleiadedeusjanduisrn@gmail.com">assembleiadedeusjanduisrn@gmail.com</a>
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
  `,E=()=>`
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
  `,L=()=>`
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
                <input type="email" id="emailInput" placeholder="assembleiadedeusjanduisrn@gmail.com" style="padding: 12px; border: 1px solid #ddd; border-radius: var(--radius-md);" required>
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
                  <p>assembleiadedeusjanduisrn@gmail.com</p>
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
  `,S=t=>{const e=d[t];if(!e)return`
      <section class="event-detail py-5">
        <div class="container text-center">
          <h1>Evento não encontrado</h1>
          <a href="#home" class="btn btn-primary mt-3">Voltar para Início</a>
        </div>
      </section>
    `;let a="";return t===0?a=`
      <div class="event-detail-content">
        <h2>${e.title}</h2>
        <p class="event-detail-date"><strong>Data da Reenauguração:</strong> ${e.date}</p>
        <p class="event-detail-location"><strong>Local:</strong> ${e.location}</p>
        <p class="event-detail-description">
          Somos felizes em anunciar o grande dia da Reenauguração da Igreja Central de Janduis!
          Este é um momento especial de celebração e comunhão. Esperamos você lá!
        </p>
      </div>
    `:t===1?a=`
      <div class="event-detail-content">
        <h2>${e.title}</h2>
        <p class="event-detail-date"><strong>Data do Congresso:</strong> O evento acontecerá no dia 6 de Setembro</p>
        <p class="event-detail-location"><strong>Local:</strong> ${e.location}</p>
        <p class="event-detail-description">
          Venha participar do Congresso de Jovens! Será um tempo de crescimento espiritual,
          comunhão e diversão. Reunir-nos-emos para fortalecer nossa fé e nossa comunidade jovem.
          Não perca essa oportunidade de estar com outros jovens da região!
        </p>
      </div>
    `:t===2&&(a=`
      <div class="event-detail-content">
        <h2>${e.title}</h2>
        <p class="event-detail-date"><strong>Frequência:</strong> Todas as Sextas-Feiras</p>
        <p class="event-detail-time"><strong>Horário:</strong> 19:00</p>
        <p class="event-detail-location"><strong>Local:</strong> ${e.location}</p>
        <p class="event-detail-description">
          O Culto de Doutrina é um momento dedicado ao aprofundamento de nossa fé e compreensão
          das Escrituras. Reunimo-nos todas as sextas-feiras para oração, estudo bíblico e
          comunhão. Você é convidado a participar regularmente deste importante culto!
        </p>
      </div>
    `),`
    <section class="event-detail py-5">
      <div class="container">
        <div class="event-detail-wrapper">
          <img src="${e.img}" alt="${e.title}" class="event-detail-img mb-4">
          ${a}
          <div class="event-detail-actions mt-5">
            <a href="#home" class="btn btn-primary">Voltar para Eventos</a>
          </div>
        </div>
      </div>
    </section>
  `},l=document.getElementById("app"),I=document.getElementById("header"),$=document.getElementById("footer");let n=0;window.handleContatoFormSubmit=function(t){t.preventDefault();const e=document.getElementById("nomeInput").value.trim(),a=document.getElementById("emailInput").value.trim(),s=document.getElementById("telefoneInput").value.trim(),o=document.getElementById("mensagemInput").value.trim();if(!e||!a||!s||!o){alert("Por favor, preencha todos os campos!");return}const i="5584991344987",r=`*Novo Contato do Site*

Nome: `+e+`
Email: `+a+`
Telefone: `+s+`
Mensagem: `+o,g=encodeURIComponent(r);window.open("https://wa.me/"+i+"?text="+g,"_blank")};function k(){const t=document.querySelectorAll(".slide"),e=document.querySelectorAll(".dot"),a=document.querySelector(".slider-next"),s=document.querySelector(".slider-prev");if(!t.length)return;function o(i){t[n].classList.remove("active"),e[n].classList.remove("active"),n=(i+t.length)%t.length,t[n].classList.add("active"),e[n].classList.add("active")}a?.addEventListener("click",()=>o(n+1)),s?.addEventListener("click",()=>o(n-1)),e.forEach((i,r)=>{i.addEventListener("click",()=>o(r))}),setInterval(()=>o(n+1),6e3)}function c(){const t=document.getElementById("menuToggle"),e=document.querySelector(".nav-links");t?.addEventListener("click",()=>{e.classList.toggle("active")})}function v(){const t=window.location.hash||"#home";I.innerHTML=h(),$.innerHTML=w();const e=t.match(/^#evento-detail-(\d+)$/);if(e){const o=Number(e[1]);l.innerHTML=S(o),c(),window.lucide&&window.lucide.createIcons(),window.scrollTo(0,0);return}const a=["#home","#reflexoes","#eventos","#informativo","#atalhos"],s=t.startsWith("#evento-")&&!e;a.includes(t)||s?(l.innerHTML=`
      ${f()}
      ${b()}
      ${y()}
      ${x()}
    `,k(),t!=="#home"&&setTimeout(()=>{const o=document.querySelector(t);o&&o.scrollIntoView({behavior:"smooth"})},50),setTimeout(()=>{if(C(),j(),s){const o=Number(t.replace("#evento-",""));Number.isFinite(o)&&p(o)}window.pendingEventHighlight!=null&&(p(window.pendingEventHighlight),window.pendingEventHighlight=null)},80)):t==="#quem-somos"?l.innerHTML=E():t==="#contato"?l.innerHTML=L():l.innerHTML='<section class="py-5 text-center"><h1>Página em construção</h1><a href="#home">Voltar para início</a></section>',c(),window.lucide&&window.lucide.createIcons(),window.scrollTo(0,0)}function C(){document.querySelectorAll(".event-link").forEach(t=>{t.removeEventListener("click",m),t.addEventListener("click",m)})}function m(t){const e=Number(this.getAttribute("data-index"));t.preventDefault();const a=`#evento-detail-${Number.isFinite(e)?e:0}`;if(window.location.hash!==a)window.location.hash=a;else{const s=document.querySelector(a);s&&s.scrollIntoView({behavior:"smooth",block:"center"})}}function p(t){const a=Array.from(document.querySelectorAll(".events-grid .event-card"))[t];a&&a.scrollIntoView({behavior:"smooth",block:"center"})}function j(){Array.from(document.querySelectorAll(".slide")).forEach(e=>{e.removeEventListener("click",u),e.addEventListener("click",u)})}function u(t){if(t.target.closest("a"))return;const e=this;e.classList.remove("click-animate"),e.offsetWidth,e.classList.add("click-animate");const a=()=>{e.classList.remove("click-animate"),e.removeEventListener("animationend",a)};e.addEventListener("animationend",a),setTimeout(()=>{e.classList.remove("click-animate")},1200)}window.addEventListener("hashchange",v);window.addEventListener("DOMContentLoaded",v);
