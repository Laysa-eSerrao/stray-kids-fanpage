/* ================================================
   Stray Kids Fan Page — script.js
   Autora: Laysa Serrão
   ================================================

   Índice:
   01. Dados — Membros
   02. Dados — Galeria
   03. Dados — Curiosidades
   04. Dados — Discografia
   05. Dados — SKZoo
   06. Funções de Render
   07. Funções de UI (tabs, lightbox, detail)
   08. Inicialização
================================================ */

const members=[
  {name:"Bang Chan",kr:"방찬 · Christopher Bang",pos:"Leader / Rapper / Vocal",unit:"3RACHA",av:"BC",color:"#e8192c",img:"https://i.pinimg.com/736x/3b/df/d9/3bdfd90a31d55fda2ca6ca7587b11d07.jpg",birthday:"3 out 1997",height:"171 cm",mbti:"ENFJ",nat:"Coreia / Austrália",fact:"Líder e produtor principal. Passou 7 anos como trainee na JYP. Criou o 3RACHA antes do debut. Realizava lives semanais chamadas 'Chan's Room' (2019-2023). Fala coreano, inglês, japonês e um pouco de chinês. Embaixador da Fendi desde 2025."},
  {name:"Lee Know",kr:"리노 · Lee Min-ho",pos:"Dancer / Rapper / Vocal",unit:"Dance Racha",av:"LK",color:"#cc2222",img:"https://i.pinimg.com/736x/56/7b/4e/567b4efec58b1fec7e36551fb498bf14.jpg",birthday:"25 out 1998",height:"172 cm",mbti:"ISFP",nat:"Sul-coreano",fact:"Um dos melhores dançarinos da 4ª geração. Tem 3 gatos: Sooni, Doongi e Dori. Embaixador global da Gucci desde 2025. Lema: 'Vamos comer bem e viver bem.' Adora ler — autor favorito é Keigo Higashino."},
  {name:"Changbin",kr:"창빈 · Seo Chang-bin",pos:"Rapper / Vocal / Producer",unit:"3RACHA",av:"CB",color:"#b01a1a",img:"https://i.pinimg.com/736x/ba/09/2f/ba092f2542294d51e26ac99fb21c1ca1.jpg",birthday:"11 ago 1999",height:"167 cm",mbti:"ESTP",nat:"Sul-coreano",fact:"Famoso pelo rap extremamente rápido. Menor do grupo em altura (167cm), mas com enorme presença de palco. Produz e escreve grande parte das letras do SKZ."},
  {name:"Hyunjin",kr:"황현진 · Hwang Hyun-jin",pos:"Dancer / Rapper / Vocal",unit:"Dance Racha",av:"HJ",color:"#e8192c",img:"https://i.pinimg.com/736x/02/65/4d/02654d65820f9322a70fb163e2561b02.jpg",birthday:"20 mar 2000",height:"179 cm",mbti:"INFP",nat:"Sul-coreano",fact:"O mais alto do grupo. Além de idol, é pintor e realizou exposições de arte. Embaixador da Cartier (2024), Givenchy Beauty (2025) e Guess (2026). Um dos dançarinos mais elogiados da geração."},
  {name:"Han",kr:"한 · Han Ji-sung",pos:"Rapper / Vocal / Producer",unit:"3RACHA",av:"HN",color:"#cc2222",img:"https://i.pinimg.com/736x/c7/fa/e2/c7fae2d48dd7914314ef69da4b520118.jpg",birthday:"14 set 2000",height:"170 cm",mbti:"INFP",nat:"Coreano (criado na Malásia)",fact:"Parte do trio produtor 3RACHA. Considerado um dos letristas mais criativos do K-pop. Cresceu na Malásia e voltou à Coreia para perseguir o sonho. Faz impressões de personagens de desenho animado."},
  {name:"Felix",kr:"필릭스 · Lee Yong-bok",pos:"Dancer / Rapper / Vocal",unit:"Dance Racha",av:"FL",color:"#b01a1a",img:"https://i.pinimg.com/736x/88/5f/13/885f133bf04ddd7e3ff5e608153b8bfa.jpg",birthday:"15 set 2000",height:"171 cm",mbti:"ENFP",nat:"Australiano",fact:"Único membro nascido fora da Ásia (Sydney, Austrália). Famoso pela voz profunda inconfundível. Embaixador da Louis Vuitton desde 2023 e desfilou em Paris Fashion Week em 2024."},
  {name:"Seungmin",kr:"승민 · Kim Seung-min",pos:"Vocalist",unit:"Vocal Racha",av:"SM",color:"#e8192c",img:"https://i.pinimg.com/736x/7e/62/1c/7e621c90fb513a243bae7506e33d5666.jpg",birthday:"22 set 2000",height:"178 cm",mbti:"ISFJ",nat:"Sul-coreano",fact:"Principal vocalista. Grande fã de beisebol — sonho alternativo era ser jogador profissional. Embaixador da Burberry. Apelido dos fãs: 'puppy Seungmin' por conta do sorriso."},
  {name:"I.N",kr:"아이엔 · Yang Jeong-in",pos:"Vocalist / Dancer",unit:"Vocal Racha",av:"IN",color:"#cc2222",img:"https://i.pinimg.com/736x/bc/90/ef/bc90ef74df83c02d36d3b8ce6cc1e056.jpg",birthday:"8 fev 2001",height:"173 cm",mbti:"INFP",nat:"Sul-coreano",fact:"Maknae (caçula) do grupo. Habilidade especial: cantar trot. Tem dois irmãos — um mais velho e um mais novo. Embaixador da Bottega Veneta e Damiani."},
];

const gallery=[
  {name:"Bang Chan",av:"BC",color:"#e8192c",url:"https://i.pinimg.com/736x/f5/ed/8f/f5ed8fde49105aa808c2aa84620c91a1.jpg"},
  {name:"Lee Know",av:"LK",color:"#cc2222",url:"https://i.pinimg.com/736x/cb/cb/16/cbcb16f0ee3562966f117e06e51ee54c.jpg"},
  {name:"Changbin",av:"CB",color:"#b01a1a",url:"https://i.pinimg.com/1200x/a2/ac/6e/a2ac6e6eea45914384d5cbc112504fe0.jpg"},
  {name:"Hyunjin",av:"HJ",color:"#e8192c",url:"https://i.pinimg.com/736x/dd/92/f3/dd92f33432472ed63b55741a9562ce4c.jpg"},
  {name:"Han",av:"HN",color:"#cc2222",url:"https://i.pinimg.com/736x/9c/f2/49/9cf249c2002c584430ad634a6e8f2d0a.jpg"},
  {name:"Felix",av:"FL",color:"#b01a1a",url:"https://i.pinimg.com/736x/c2/22/c1/c222c19c6196bf8318cd55a167a28422.jpg"},
  {name:"Seungmin",av:"SM",color:"#e8192c",url:"https://i.pinimg.com/736x/34/4e/94/344e94b97242015717f64559d8d62389.jpg"},
  {name:"I.N",av:"IN",color:"#cc2222",url:"https://i.pinimg.com/736x/26/1f/97/261f97eaeb3d5f5254bb68dbf3268f37.jpg"},
];

const facts=[
  {tag:"Origem",text:"O nome <strong>Stray Kids</strong> representa jovens que não se encaixam na sociedade — 'stray' significa 'errante'. O grupo foi criado para dar voz a esses jovens ao redor do mundo."},
  {tag:"Self-production",text:"O sub-grupo <strong>3RACHA</strong> (Bang Chan, Han e Changbin) produz e escreve a maioria das músicas. Eles têm controle criativo quase total sobre o som do grupo."},
  {tag:"Logo",text:"O logo do SKZ é uma letra <strong>'K'</strong> desenhada à mão pelo próprio <strong>Bang Chan</strong>. A cor muda a cada nova era — uma das marcas registradas visuais do grupo."},
  {tag:"Fandom",text:"O fandom <strong>STAY</strong> completa o slogan: <em>'You make Stray Kids stay'</em>. Sem os fãs, o grupo estaria 'stray' (perdido) — uma relação simbólica entre nome e fandom."},
  {tag:"Record",text:"O SKZ é um dos poucos grupos do K-pop a ter <strong>5 álbuns consecutivos</strong> estreando em #1 no Billboard 200, ao lado de nomes como BTS e Taylor Swift."},
  {tag:"Met Gala 2024",text:"Em maio de 2024, o Stray Kids se tornou o <strong>primeiro grupo K-pop</strong> cujos todos os membros compareceram juntos ao Met Gala, como convidados do designer Tommy Hilfiger."},
  {tag:"Deadpool",text:"A performance com tema do Deadpool gerou elogios de <strong>Ryan Reynolds e Hugh Jackman</strong>, levando o grupo a participar da trilha de <em>Deadpool & Wolverine</em> (2024)."},
  {tag:"Spotify",text:"Em fevereiro de 2025, o SKZ se tornou o <strong>terceiro artista coreano</strong> a atingir 10 bilhões de streams no Spotify, após BTS e BLACKPINK."},
  {tag:"Felix",text:"<strong>Felix</strong> tem uma das vozes mais reconhecíveis do K-pop — sua profundidade vocal incomum contrasta com sua aparência e virou marca registrada do grupo."},
  {tag:"Hyunjin artista",text:"Além de idol, <strong>Hyunjin</strong> é pintor sério. Já realizou exposições de arte e seus trabalhos foram leiloados. Usa a arte visual para expressar as eras do grupo."},
  {tag:"Chan's Room",text:"De 2019 a 2023, <strong>Bang Chan</strong> realizava lives semanais chamadas <em>'Chan's Room'</em> onde conversava com fãs, tocava músicas e mostrava bastidores. A série foi encerrada em agosto de 2023, sendo considerada pelos STAYs um dos conteúdos mais especiais do grupo."},
  {tag:"Rock in Rio 2026",text:"Em setembro de 2026, o Stray Kids headlinarão o <strong>Rock in Rio</strong> no Brasil — consolidando seu alcance global e aproximando o grupo dos fãs brasileiros."},
];

const albums=[
  {year:"2018",name:"Mixtape",badge:"Pré-debut"},
  {year:"2018",name:"I Am NOT",badge:"Mini album"},
  {year:"2019",name:"Clé 1: MIROH",badge:"Mini album"},
  {year:"2020",name:"GO LIVE",badge:"Full album"},
  {year:"2021",name:"NOEASY",badge:"Full album",gold:true},
  {year:"2022",name:"ODDINARY",badge:"Billboard #1",gold:true},
  {year:"2022",name:"MAXIDENT",badge:"Billboard #1",gold:true},
  {year:"2023",name:"★★★★★ (5-STAR)",badge:"Billboard #1",gold:true},
  {year:"2023",name:"ROCK-STAR",badge:"Billboard #1",gold:true},
  {year:"2024",name:"ATE",badge:"Billboard #1",gold:true},
  {year:"2025",name:"KARMA",badge:"Billboard #1",gold:true},
  {year:"2025",name:"SKZ IT TAPE",badge:"Do It — Hot 100",gold:true},
  {year:"2026",name:"별, 빛 (STAY)",badge:"Single aniversário"},
];

const skzoo=[
  {name:"Wolf Chan",  member:"Bang Chan",animal:"Lobo",           color:"#e8192c",img:"https://i.pinimg.com/736x/0a/2c/b4/0a2cb4863654f61163fa566ea51ad136.jpg"},
  {name:"Leebit",     member:"Lee Know", animal:"Coelho",         color:"#cc2222",img:"https://i.pinimg.com/736x/60/32/41/60324170701609e857a671d34d4c9f81.jpg"},
  {name:"Dwaekki",    member:"Changbin", animal:"Coelho-porquinho",color:"#b01a1a",img:"https://i.pinimg.com/736x/f1/c6/28/f1c6289043efe05c31adbdaa58df1bef.jpg"},
  {name:"Jiniret",    member:"Hyunjin",  animal:"Furão",          color:"#e8192c",img:"https://i.pinimg.com/736x/92/f1/f0/92f1f06ea263fdfad827cb3c6b956470.jpg"},
  {name:"Han Quokka", member:"Han",      animal:"Esquilo",        color:"#cc2222",img:"https://i.pinimg.com/736x/7c/32/dc/7c32dc29d2aa04899ae6ea5036904ab8.jpg"},
  {name:"BbokAri",    member:"Felix",    animal:"Pinto",          color:"#b01a1a",img:"https://i.pinimg.com/1200x/ae/06/62/ae06620dbf96ac5f2559597fa61f12a4.jpg"},
  {name:"PuppyM",     member:"Seungmin", animal:"Cachorro",       color:"#e8192c",img:"https://i.pinimg.com/736x/2c/27/cf/2c27cf81307b9591a11d8c463b6d9857.jpg"},
  {name:"Fox I.Ny",   member:"I.N",      animal:"Raposa",         color:"#cc2222",img:"https://i.pinimg.com/736x/62/c0/e1/62c0e18118e175467bd241e5ebb023f4.jpg"},
];

function renderMembers(){
  const g=document.getElementById('members-grid');
  members.forEach((m,i)=>{
    const c=document.createElement('div');
    c.className='member-card';
    c.innerHTML=`<div class="m-avatar" style="background:${m.color}20;border:1.5px solid ${m.color}50;overflow:hidden;padding:0"><img src="${m.img}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div><div class="m-name">${m.name}</div><div class="m-kr">${m.kr.split('·')[1]?.trim()||''}</div><span class="m-pos">${m.pos.split('/')[0].trim()}</span><div class="m-unit">${m.unit}</div>`;
    c.onclick=()=>showMember(i,c);
    g.appendChild(c);
  });
}

function showMember(i,card){
  document.querySelectorAll('.member-card').forEach(c=>c.classList.remove('active'));
  card.classList.add('active');
  const m=members[i];
  const av=document.getElementById('d-avatar');
  av.style.cssText=`width:72px;height:72px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid ${m.color}60;`;
  av.innerHTML=`<img src="${m.img}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;">`;
  document.getElementById('d-name').textContent=m.name;
  document.getElementById('d-kr').textContent=m.kr;
  document.getElementById('d-grid').innerHTML=`<div class="di"><div class="di-label">Aniversário</div><div class="di-val">${m.birthday}</div></div><div class="di"><div class="di-label">Altura</div><div class="di-val">${m.height}</div></div><div class="di"><div class="di-label">MBTI</div><div class="di-val">${m.mbti}</div></div><div class="di"><div class="di-label">Posição</div><div class="di-val">${m.pos}</div></div><div class="di"><div class="di-label">Unidade</div><div class="di-val">${m.unit}</div></div><div class="di"><div class="di-label">Nacionalidade</div><div class="di-val">${m.nat}</div></div>`;
  document.getElementById('d-fact').textContent=m.fact;
  const d=document.getElementById('member-detail');
  d.classList.add('visible');
  d.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function closeDetail(){
  document.getElementById('member-detail').classList.remove('visible');
  document.querySelectorAll('.member-card').forEach(c=>c.classList.remove('active'));
}

function renderGallery(){
  const g=document.getElementById('gallery-grid');
  gallery.forEach(item=>{
    const el=document.createElement('div');
    el.className='g-item';
    el.innerHTML=`<img src="${item.url}" alt="${item.name}" loading="lazy"><div class="g-overlay"><div class="g-ovname">${item.name}</div></div>`;
    el.onclick=()=>openLightbox(item.url);
    g.appendChild(el);
  });
}

function openLightbox(url){ document.getElementById('lb-img').src=url; document.getElementById('lightbox').classList.add('open'); }
function closeLightbox(){ document.getElementById('lightbox').classList.remove('open'); }

function renderFacts(){
  const g=document.getElementById('facts-grid');
  facts.forEach((f,i)=>{
    const c=document.createElement('div');
    c.className='fact-card';
    c.setAttribute('data-num',String(i+1).padStart(2,'0'));
    c.innerHTML=`<div class="fact-tag">${f.tag}</div><div class="fact-text">${f.text}</div>`;
    g.appendChild(c);
  });
}

function renderAlbums(){
  const g=document.getElementById('album-grid');
  albums.forEach(a=>{
    const c=document.createElement('div');
    c.className='album-card';
    c.innerHTML=`<div class="album-year">${a.year}</div><div class="album-name">${a.name}</div><span class="album-badge ${a.gold?'gold':''}">${a.badge}</span>`;
    g.appendChild(c);
  });
}

function renderSkzoo(){
  const g=document.getElementById('skzoo-grid');
  if(!g) return;
  skzoo.forEach(s=>{
    const c=document.createElement('div');
    c.className='member-card';
    c.style.cursor='default';
    c.innerHTML=`<div class="m-avatar" style="background:${s.color}20;border:1.5px solid ${s.color}50;overflow:hidden;padding:0"><img src="${s.img}" alt="${s.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div><div class="m-name">${s.name}</div><div class="m-kr">${s.member}</div><span class="m-pos">${s.animal}</span>`;
    g.appendChild(c);
  });
}

function showTab(id,btn){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  btn.classList.add('active');
}

function showTabById(id){
  const btn=[...document.querySelectorAll('.nav-tab')].find(b=>b.getAttribute('onclick')?.includes("'"+id+"'"));
  if(btn) showTab(id,btn);
}

renderMembers(); renderGallery(); renderFacts(); renderAlbums(); renderSkzoo();
/* ================================================
   09. Botão Voltar ao Topo
================================================ */
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-to-top');
  if (window.scrollY > 300) btn.classList.add('visible');
  else btn.classList.remove('visible');
});

/* ================================================
   10. Toggle Modo Claro/Escuro
================================================ */
function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  btn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  applyLightModeInlineFixes(isLight);
}

// Carregar tema salvo
(function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = '☀️';
    applyLightModeInlineFixes(true);
  }
})();

/* Fix modo claro — forçar cor em elementos com estilo inline */
function applyLightModeInlineFixes(isLight) {
  document.querySelectorAll('[style*="color:#fff"], [style*="color: #fff"]').forEach(el => {
    if (isLight) {
      el.setAttribute('data-original-color', el.style.color || '#fff');
      el.style.color = '#111111';
      el.style.webkitTextFillColor = '#111111';
    } else {
      el.style.color = el.getAttribute('data-original-color') || '';
      el.style.webkitTextFillColor = '';
    }
  });
}

/* ================================================
   11. Contador Rock in Rio
================================================ */
function updateCountdown() {
  const target = new Date('2026-09-19T20:00:00-03:00'); // Rock in Rio estimado
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById('rircountdown').innerHTML = '<span style="font-family:Bebas Neue,sans-serif;font-size:32px;color:#fff;letter-spacing:4px;">JÁ ACONTECEU! 🎉</span>';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('rircountdown').innerHTML = `
    <div class="rir-unit"><span class="rir-num">${days}</span><span class="rir-label">Dias</span></div>
    <div class="rir-unit"><span class="rir-num">${String(hours).padStart(2,'0')}</span><span class="rir-label">Horas</span></div>
    <div class="rir-unit"><span class="rir-num">${String(minutes).padStart(2,'0')}</span><span class="rir-label">Min</span></div>
    <div class="rir-unit"><span class="rir-num">${String(seconds).padStart(2,'0')}</span><span class="rir-label">Seg</span></div>
  `;
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ================================================
   12. Compartilhar — Copiar link
================================================ */
function copyLink() {
  navigator.clipboard.writeText('https://laysa-eserrao.github.io/stray-kids-fanpage/').then(() => {
    const btn = document.getElementById('share-copy');
    btn.textContent = '✅ Copiado!';
    setTimeout(() => btn.textContent = '🔗 Copiar link', 2000);
  });
}

/* ================================================
   13. MVs
================================================ */
const mvs = [
  { title:"God's Menu",       year:"2020", views:"300M+ views", id:"WnSXFiBRBZI" },
  { title:"MIROH",            year:"2019", views:"200M+ views", id:"Yz6sAFqTmSc" },
  { title:"THUNDEROUS",       year:"2021", views:"250M+ views", id:"TQTlCHxyuu8" },
  { title:"MANIAC",           year:"2022", views:"200M+ views", id:"VcnCMBqjrk4" },
  { title:"S-CLASS",          year:"2023", views:"150M+ views", id:"fPyCtGQ1OVM" },
  { title:"LOSE MY BREATH",   year:"2023", views:"120M+ views", id:"tLQLa9nMDxk" },
  { title:"SOCIAL PATH",      year:"2023", views:"100M+ views", id:"kNXkMmqWPrk" },
  { title:"CHK CHK BOOM",     year:"2024", views:"80M+ views",  id:"gwXFkOrMVwU" },
  { title:"MOUNTAINS",        year:"2024", views:"60M+ views",  id:"gXFRvSEPxVY" },
  { title:"HALL OF FAME",     year:"2025", views:"50M+ views",  id:"r5sLGgHGMFg" },
];

function renderMVs() {
  const grid = document.getElementById('mvs-grid');
  if (!grid) return;
  mvs.forEach(mv => {
    const thumb = `https://img.youtube.com/vi/${mv.id}/mqdefault.jpg`;
    const url   = `https://www.youtube.com/watch?v=${mv.id}`;
    const card  = document.createElement('a');
    card.className = 'mv-card';
    card.href = url;
    card.target = '_blank';
    card.innerHTML = `
      <img class="mv-thumb" src="${thumb}" alt="${mv.title}" loading="lazy">
      <div class="mv-play">▶</div>
      <div class="mv-info">
        <div class="mv-title">${mv.title}</div>
        <div class="mv-year">${mv.year}</div>
        <div class="mv-views">▶ ${mv.views}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}
renderMVs();
