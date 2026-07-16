export const Reflections = () => {
  const reflections = [
    {
      title: 'João 3:16',
      excerpt: 'Deus amou o mundo de tal maneira que deu Seu Filho, para que todo aquele que crê tenha a vida eterna. (João 3:16)'
    },
    {
      title: 'Salmo 23:1',
      excerpt: 'O Senhor cuida de nós como um pastor; nele encontramos sustento e paz para o coração. (Salmo 23:1)'
    },
    {
      title: 'Filipenses 4:13',
      excerpt: 'Em Cristo recebemos força para enfrentar desafios e seguir firmes na caminhada. (Filipenses 4:13)'
    },
    {
      title: 'Romanos 8:28',
      excerpt: 'Todas as coisas cooperam para o bem daqueles que amam a Deus — até as provas são usadas para o nosso crescimento. (Romanos 8:28)'
    },
    {
      title: 'Isaías 41:10',
      excerpt: 'Não temas: Deus está contigo, sustenta, fortalece e ajuda em todo momento. (Isaías 41:10)'
    }
  ];

  return `
    <section class="reflections-section py-5" id="reflexoes">
      <div class="container text-center">
        <h2 class="section-title">REFLEXÕES BÍBLICAS</h2>
        <div class="reflections-grid">
          ${reflections.map(reflection => `
            <div class="reflection-card text-center">
              <h3 class="reflection-title">${reflection.title}</h3>
              <p class="reflection-excerpt">${reflection.excerpt}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
};
