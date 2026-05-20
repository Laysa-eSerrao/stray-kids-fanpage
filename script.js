/* Stray Kids Fan Page — script.js | Autora: Laysa Serrão */

/* ── DADOS ── */
const members = [
  { name:"Bang Chan", kr:"방찬", full:"Christopher Bang", pos:"Leader / Rapper / Vocal", unit:"3RACHA", color:"#e8192c",
    img:"https://i.pinimg.com/736x/3b/df/d9/3bdfd90a31d55fda2ca6ca7587b11d07.jpg",
    skzooImg:"https://i.pinimg.com/736x/0a/2c/b4/0a2cb4863654f61163fa566ea51ad136.jpg",
    birthday:"3 out 1997", height:"171 cm", mbti:"ENFJ", nat:"Coreia / Austrália",
    skzoo:"Wolf Chan",
    bio:"Líder e produtor principal. Passou 7 anos como trainee na JYP. Criou o 3RACHA antes do debut. Realizava lives semanais chamadas 'Chan's Room' (2019–2023). Fala coreano, inglês, japonês e um pouco de chinês. Embaixador da Fendi desde 2025.",
    facts:["Criou o sub-grupo produtor 3RACHA ainda como trainee","Estudou na SOPA (School of Performing Arts Seoul)","Tem pedigree de dança e passou por programa intenso antes de ser aceito na JYP"]
  },
  { name:"Lee Know", kr:"리노", full:"Lee Min-ho", pos:"Dancer / Rapper / Vocal", unit:"Dance Racha", color:"#cc2222",
    img:"https://i.pinimg.com/736x/56/7b/4e/567b4efec58b1fec7e36551fb498bf14.jpg",
    skzooImg:"https://i.pinimg.com/736x/60/32/41/60324170701609e857a671d34d4c9f81.jpg",
    birthday:"25 out 1998", height:"172 cm", mbti:"ISFP", nat:"Sul-coreano",
    skzoo:"Leebit",
    bio:"Um dos melhores dançarinos da 4ª geração. Tem 3 gatos: Soonie, Doongie e Dori. Embaixador global da Gucci desde 2025. Lema: 'Vamos comer bem e viver bem.' Adora ler — autor favorito é Keigo Higashino.",
    facts:["Estava no grupo de apoio do BTS antes de entrar no SKZ","Perdeu e recuperou seu posto após lesão durante trainee","Ganhou o apelido 'Eye Smile' pelo sorriso característico"]
  },
  { name:"Changbin", kr:"창빈", full:"Seo Chang-bin", pos:"Rapper / Vocal / Producer", unit:"3RACHA", color:"#b01a1a",
    img:"https://i.pinimg.com/736x/ba/09/2f/ba092f2542294d51e26ac99fb21c1ca1.jpg",
    skzooImg:"https://i.pinimg.com/736x/f1/c6/28/f1c6289043efe05c31adbdaa58df1bef.jpg",
    birthday:"11 ago 1999", height:"167 cm", mbti:"ESTP", nat:"Sul-coreano",
    skzoo:"Dwaekki",
    bio:"Famoso pelo rap extremamente rápido. Menor do grupo em altura (167cm), mas com enorme presença de palco. Produz e escreve grande parte das letras do SKZ junto com Bang Chan e Han.",
    facts:["Tem um dos raps mais rápidos do K-pop — consegue articular sílabas em velocidades extraordinárias","O apelido 'Channie's bear' vem do Bang Chan","Foi aceito como trainee na JYP em 2017"]
  },
  { name:"Hyunjin", kr:"황현진", full:"Hwang Hyun-jin", pos:"Dancer / Rapper / Vocal", unit:"Dance Racha", color:"#e8192c",
    img:"https://i.pinimg.com/736x/02/65/4d/02654d65820f9322a70fb163e2561b02.jpg",
    skzooImg:"https://i.pinimg.com/736x/92/f1/f0/92f1f06ea263fdfad827cb3c6b956470.jpg",
    birthday:"20 mar 2000", height:"179 cm", mbti:"INFP", nat:"Sul-coreano",
    skzoo:"Jiniret",
    bio:"O mais alto do grupo. Além de idol, é pintor e realizou exposições de arte. Embaixador da Cartier (2024), Givenchy Beauty (2025) e Guess (2026). Um dos dançarinos mais elogiados da geração.",
    facts:["Estudou dança clássica e contemporânea desde criança","Pinta quadros regularmente e já realizou exposições oficiais","Seu personagem SKZoo (Jiniret) é um furão — o animal mais difícil de domesticar"]
  },
  { name:"Han", kr:"한", full:"Han Ji-sung", pos:"Rapper / Vocal / Producer", unit:"3RACHA", color:"#cc2222",
    img:"https://i.pinimg.com/736x/c7/fa/e2/c7fae2d48dd7914314ef69da4b520118.jpg",
    skzooImg:"https://i.pinimg.com/736x/7c/32/dc/7c32dc29d2aa04899ae6ea5036904ab8.jpg",
    birthday:"14 set 2000", height:"170 cm", mbti:"INFP", nat:"Coreano (criado na Malásia)",
    skzoo:"Han Quokka",
    bio:"Parte do trio produtor 3RACHA. Considerado um dos letristas mais criativos do K-pop. Cresceu na Malásia e voltou à Coreia para perseguir o sonho. Faz impressões de personagens de desenho animado.",
    facts:["Cresceu em Kuala Lumpur, Malásia, e fala coreano e inglês fluentemente","Escreve letras de músicas desde muito jovem — tem cadernos cheios de poesias","O personagem Han Quokka foi inspirado no animal sorridente da Austrália"]
  },
  { name:"Felix", kr:"필릭스", full:"Lee Yong-bok", pos:"Dancer / Rapper / Vocal", unit:"Dance Racha", color:"#b01a1a",
    img:"https://i.pinimg.com/736x/88/5f/13/885f133bf04ddd7e3ff5e608153b8bfa.jpg",
    skzooImg:"https://i.pinimg.com/1200x/ae/06/62/ae06620dbf96ac5f2559597fa61f12a4.jpg",
    birthday:"15 set 2000", height:"171 cm", mbti:"ENFP", nat:"Australiano",
    skzoo:"BbokAri",
    bio:"Único membro nascido fora da Ásia (Sydney, Austrália). Famoso pela voz profunda inconfundível. Embaixador da Louis Vuitton desde 2023 e desfilou em Paris Fashion Week em 2024. Em 2025, colaborou com LiSA na abertura do anime Solo Leveling (2ª temporada).",
    facts:["Foi aceito como trainee apenas 3 meses antes do debut","Sua voz profunda contrasta com sua aparência — virou marca registrada do grupo","'BbokAri' (pintinho) foi escolhido por ser adorável mas barulhento — igualzinho ao Felix"]
  },
  { name:"Seungmin", kr:"승민", full:"Kim Seung-min", pos:"Vocalist", unit:"Vocal Racha", color:"#e8192c",
    img:"https://i.pinimg.com/736x/7e/62/1c/7e621c90fb513a243bae7506e33d5666.jpg",
    skzooImg:"https://i.pinimg.com/736x/2c/27/cf/2c27cf81307b9591a11d8c463b6d9857.jpg",
    birthday:"22 set 2000", height:"178 cm", mbti:"ISFJ", nat:"Sul-coreano",
    skzoo:"PuppyM",
    bio:"Principal vocalista. Grande fã de beisebol — sonho alternativo era ser jogador profissional. Embaixador da Burberry. Apelido dos fãs: 'puppy Seungmin' por causa do sorriso.",
    facts:["Praticou beisebol profissionalmente antes de se tornar trainee","Tem o apelido 'Puppy Seungmin' por conta do sorriso e personalidade alegre","Estuda ativamente composição vocal e trabalha sua voz constantemente"]
  },
  { name:"I.N", kr:"아이엔", full:"Yang Jeong-in", pos:"Vocalist / Dancer", unit:"Vocal Racha", color:"#cc2222",
    img:"https://i.pinimg.com/736x/bc/90/ef/bc90ef74df83c02d36d3b8ce6cc1e056.jpg",
    skzooImg:"https://i.pinimg.com/736x/62/c0/e1/62c0e18118e175467bd241e5ebb023f4.jpg",
    birthday:"8 fev 2001", height:"173 cm", mbti:"INFP", nat:"Sul-coreano",
    skzoo:"Fox I.Ny",
    bio:"Maknae (caçula) do grupo. Habilidade especial: cantar trot. Tem dois irmãos — um mais velho e um mais novo. Embaixador da Bottega Veneta e Damiani.",
    facts:["É o maknae mas tem presença de palco que surpreende desde o debut","Sabe cantar trot — estilo musical coreano tradicional — com maestria","O personagem Fox I.Ny foi escolhido pela astúcia e charme que representam o I.N"]
  }
];

const albums = [
  { year:"2018", name:"Mixtape",          badge:"Pré-debut",       type:"special", track:"Hellevator",   tracks:6,  img:"https://i.pinimg.com/736x/f7/aa/d3/f7aad376f59e919671923bcc923e3e86.jpg" },
  { year:"2018", name:"I Am NOT",         badge:"Mini album",      type:"mini",    track:"District 9",   tracks:7,  img:"https://i.pinimg.com/1200x/ad/59/13/ad59134576356e430fc1c86ac7bf3a88.jpg" },
  { year:"2019", name:"Clé 1: MIROH",    badge:"Mini album",      type:"mini",    track:"MIROH",         tracks:6,  img:"https://i.pinimg.com/736x/4e/b0/db/4eb0dbc3c15866a8e6044e5e5dfc3f37.jpg" },
  { year:"2020", name:"GO LIVE",         badge:"Full album",      type:"full",    track:"God's Menu",    tracks:14, img:"https://i.pinimg.com/736x/c1/60/92/c1609251bb23b2b2c5038c8a418a9c40.jpg" },
  { year:"2021", name:"NOEASY",          badge:"Full album",      type:"full",    track:"Thunderous",    tracks:14, img:"https://i.pinimg.com/1200x/72/25/51/7225515ff73a11383d014120bccc9230.jpg" },
  { year:"2022", name:"ODDINARY",        badge:"Billboard #1",    type:"mini",    track:"MANIAC",        tracks:6,  img:"https://i.pinimg.com/1200x/b8/14/bb/b814bb3264e08248eb424dadbe9ae843.jpg" },
  { year:"2022", name:"MAXIDENT",        badge:"Billboard #1",    type:"mini",    track:"Case 143",      tracks:7,  img:"https://i.pinimg.com/1200x/22/3b/43/223b431c74e196436552f764654fa25c.jpg" },
  { year:"2023", name:"★★★★★ (5-STAR)", badge:"Billboard #1",    type:"full",    track:"S-Class",       tracks:13, img:"https://i.pinimg.com/736x/b7/00/63/b700635c05f277c71386149f61981bed.jpg" },
  { year:"2023", name:"ROCK-STAR",       badge:"Billboard #1",    type:"mini",    track:"LALALALA",      tracks:6,  img:"https://i.pinimg.com/1200x/cf/df/97/cfdf97cbbcfe4f1e877ff9db280c84f5.jpg" },
  { year:"2024", name:"ATE",             badge:"Billboard #1",    type:"mini",    track:"Chk Chk Boom",  tracks:9,  img:"https://i.pinimg.com/736x/eb/36/95/eb369561e109f1a2c719786dc9586440.jpg" },
  { year:"2025", name:"KARMA",           badge:"Billboard #1 · 7º", type:"full",  track:"CEREMONY",     tracks:11, img:"https://i.pinimg.com/736x/c4/84/f3/c484f39d8ec19c219e5df2d0ac7aea90.jpg" },
  { year:"2025", name:"DO IT",           badge:"Billboard #1 · 8º", type:"special",track:"Do It / DIVINE",tracks:5, img:"https://i.pinimg.com/736x/9d/20/bf/9d20bfdd0846c9fa44160593d31879df.jpg" },
];

const timelineEvents = [
  { year:"2017", event:"Nasce o Stray Kids", desc:"A JYP Entertainment anuncia o reality show onde 9 trainees competem por uma vaga no grupo. Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin e I.N são selecionados.", badge:"Origem" },
  { year:"Mar 2018", event:"Debut Oficial", desc:"O grupo faz seu debut com o mini-álbum Mixtape. A identidade de self-production já aparece desde o primeiro dia.", badge:"Marco histórico", gold:true },
  { year:"2019", event:"MIROH — Primeiro Grande Hit", desc:"Clé 1: MIROH marca a virada do grupo. A faixa título se torna um hit internacional. Lee Know retorna após lesão.", badge:"Breakthrough" },
  { year:"Out 2019", event:"Saída do Woojin", desc:"Woojin anuncia sua saída por motivos pessoais. O grupo continua como octeto — os 8 membros que conhecemos hoje.", badge:"Mudança" },
  { year:"2020", event:"God's Menu — A Era da Identidade", desc:"GO LIVE com God's Menu define o som característico do SKZ — intenso, experimental, com produção própria. Identidade musical consolidada.", badge:"Identidade" },
  { year:"2021", event:"NOEASY — Billboard Top 5", desc:"NOEASY entra no Top 5 do Billboard 200. Thunderous vira viral. O grupo firma seu status como um dos maiores do K-pop.", badge:"Billboard Top 5", gold:true },
  { year:"2022", event:"ODDINARY — Primeiro #1 no Billboard", desc:"ODDINARY estreia em #1 no Billboard 200 — segundo grupo de K-pop da história. O mundo para para ouvir o SKZ.", badge:"Billboard #1", gold:true },
  { year:"2022", event:"MAXIDENT & MANIAC World Tour", desc:"MAXIDENT estreia em #1 no Billboard 200 — segundo consecutivo. MANIAC World Tour: retorno aos palcos internacionais com shows sold out.", badge:"Billboard #1", gold:true },
  { year:"2023", event:"5-STAR Dome Tour & Lollapalooza", desc:"Dois álbuns em #1 no Billboard. Realizam o 5-STAR Dome Tour no Japão e Ásia. Headlinam o Lollapalooza Chicago — primeiros artistas K-pop a fazer isso.", badge:"Lollapalooza", gold:true },
  { year:"2024", event:"Met Gala & ATE", desc:"Vão ao Met Gala — primeiros artistas K-pop a comparecerem juntos. Lançam ATE, 5º álbum consecutivo em #1 no Billboard 200. Iniciam o dominATE World Tour.", badge:"Met Gala", gold:true },
  { year:"2025", event:"KARMA & Recorde Mundial de Tour", desc:"KARMA: 7º álbum em #1 no Billboard 200. O dominATE World Tour fatura US$185,9M com 1,3 milhão de ingressos — o maior tour K-pop da história.", badge:"Maior tour K-pop", gold:true },
  { year:"2026", event:"Rock in Rio & Novo Álbum", desc:"Novo álbum confirmado para o segundo semestre. Headlinarão o Rock in Rio em setembro — primeira vez em solo brasileiro.", badge:"Rock in Rio 🇧🇷", gold:true },
];

const tours = [
  { era:"2022", name:"MANIAC World Tour", desc:"Primeiro grande retorno aos palcos internacionais após a pandemia. América do Norte, Europa e Ásia.", badges:["América do Norte","Europa","Ásia"] },
  { era:"2023", name:"5-STAR Dome Tour", desc:"Tour em dômes no Japão e Ásia. Realizaram também o Lollapalooza Chicago — primeiros artistas K-pop a headlinar o festival.", badges:["Japão","Lollapalooza Chicago","Ásia"], gold:true },
  { era:"2024–2025", name:"dominATE World Tour", desc:"O maior tour da história do K-pop. 35 shows em 23 cidades. 1,3 milhão de ingressos. US$185,9M faturados. Headlinaram o Lollapalooza São Paulo.", badges:["1.3M ingressos","US$186M","35 cidades","#2 Pollstar Global"], gold:true },
  { era:"Set 2026", name:"Rock in Rio", desc:"Headliners confirmados do Rock in Rio, no Brasil — a primeira vez do grupo em solo brasileiro. Um momento histórico para os STAYs.", badges:["Rock in Rio 🇧🇷","Setembro 2026"], gold:true },
  { era:"2026", name:"Nova Tour Asiática", desc:"Nova tour pela Ásia confirmada para 2026. Datas e cidades a serem anunciadas pela JYP Entertainment.", badges:["Em breve","Ásia"] },
];

const factsData = {
  geral: [
    { tag:"Origem", text:"O nome <strong>Stray Kids</strong> representa jovens que não se encaixam — 'stray' significa errante. O grupo foi criado para dar voz a esses jovens ao redor do mundo." },
    { tag:"Self-production", text:"O sub-grupo <strong>3RACHA</strong> (Bang Chan, Han e Changbin) produz e escreve a maioria das músicas. Eles têm controle criativo quase total sobre o som do grupo." },
    { tag:"Logo", text:"O logo completo do Stray Kids foi desenhado à mão pelo próprio <strong>Bang Chan</strong> antes do debut. A cor muda a cada nova era, refletindo o conceito do álbum." },
    { tag:"Fandom", text:"O fandom <strong>STAY</strong> completa o slogan: <em>'You make Stray Kids stay'</em>. Sem os fãs, o grupo estaria 'stray' (perdido) — relação simbólica entre nome e fandom." },
  ],
  recordes: [
    { tag:"Record", text:"O SKZ é um dos poucos grupos do K-pop a ter <strong>8 álbuns consecutivos</strong> estreando em #1 no Billboard 200, ao lado de nomes como BTS e Taylor Swift." },
    { tag:"Met Gala 2024", text:"Em maio de 2024, o Stray Kids se tornou o <strong>primeiro grupo K-pop</strong> cujos todos os membros compareceram juntos ao Met Gala." },
    { tag:"Deadpool", text:"A performance com tema do Deadpool gerou elogios de <strong>Ryan Reynolds e Hugh Jackman</strong>, levando o grupo a participar da trilha de Deadpool & Wolverine (2024)." },
    { tag:"Spotify", text:"Em 2025, o SKZ se tornou o <strong>terceiro artista coreano</strong> a atingir 10 bilhões de streams no Spotify, após BTS e BLACKPINK." },
  ],
  membros: [
    { tag:"Felix", text:"<strong>Felix</strong> tem uma das vozes mais reconhecíveis do K-pop — sua profundidade vocal contrasta com sua aparência. Em 2025, colaborou com LiSA na abertura do anime <em>Solo Leveling</em> 2ª temporada." },
    { tag:"Hyunjin artista", text:"Além de idol, <strong>Hyunjin</strong> é pintor sério. Já realizou exposições de arte e seus trabalhos foram leiloados. Usa a arte visual para expressar as eras do grupo." },
    { tag:"Chan's Room", text:"De 2019 a 2023, <strong>Bang Chan</strong> realizava lives semanais chamadas <em>'Chan's Room'</em> — conteúdo muito amado pelos STAYs. A série foi encerrada em agosto de 2023." },
    { tag:"Rock in Rio 2026", text:"Em setembro de 2026, o Stray Kids headlinarão o <strong>Rock in Rio</strong> no Brasil — consolidando seu alcance global e aproximando o grupo dos fãs brasileiros." },
  ]
};

const mvs = [
  { title:"God's Menu",     year:"2020", views:"300M+", id:"TQTlCHxyuu8" },
  { title:"MIROH",          year:"2019", views:"200M+", id:"Dab4EENTW5I" },
  { title:"THUNDEROUS",     year:"2021", views:"250M+", id:"EaswWiwMVs8" },
  { title:"MANIAC",         year:"2022", views:"200M+", id:"OvioeS1ZZ7o" },
  { title:"S-CLASS",        year:"2023", views:"150M+", id:"JsOOis4bBFg" },
  { title:"LOSE MY BREATH", year:"2023", views:"120M+", id:"SQ1yPMTIwCU" },
  { title:"SOCIAL PATH",    year:"2023", views:"100M+", id:"M0c04xfBtyc" },
  { title:"CHK CHK BOOM",   year:"2024", views:"80M+",  id:"0P0aQreFs8w" },
  { title:"LALALALA",       year:"2023", views:"100M+", id:"dBDkYofMUs4" },
];

const gallery = [
  { url:"https://i.pinimg.com/736x/f5/ed/8f/f5ed8fde49105aa808c2aa84620c91a1.jpg", alt:"Bang Chan" },
  { url:"https://i.pinimg.com/736x/cb/cb/16/cbcb16f0ee3562966f117e06e51ee54c.jpg", alt:"Lee Know" },
  { url:"https://i.pinimg.com/1200x/a2/ac/6e/a2ac6e6eea45914384d5cbc112504fe0.jpg", alt:"Changbin" },
  { url:"https://i.pinimg.com/736x/dd/92/f3/dd92f33432472ed63b55741a9562ce4c.jpg", alt:"Hyunjin" },
  { url:"https://i.pinimg.com/736x/9c/f2/49/9cf249c2002c584430ad634a6e8f2d0a.jpg", alt:"Han" },
  { url:"https://i.pinimg.com/736x/c2/22/c1/c222c19c6196bf8318cd55a167a28422.jpg", alt:"Felix" },
  { url:"https://i.pinimg.com/736x/34/4e/94/344e94b97242015717f64559d8d62389.jpg", alt:"Seungmin" },
  { url:"https://i.pinimg.com/736x/26/1f/97/261f97eaeb3d5f5254bb68dbf3268f37.jpg", alt:"I.N" },
];

const skzoo = [
  { name:"Wolf Chan",  member:"Bang Chan", animal:"Lobo",            img:"https://i.pinimg.com/736x/0a/2c/b4/0a2cb4863654f61163fa566ea51ad136.jpg" },
  { name:"Leebit",     member:"Lee Know",  animal:"Coelho",          img:"https://i.pinimg.com/736x/60/32/41/60324170701609e857a671d34d4c9f81.jpg" },
  { name:"Dwaekki",    member:"Changbin",  animal:"Coelho-porquinho",img:"https://i.pinimg.com/736x/f1/c6/28/f1c6289043efe05c31adbdaa58df1bef.jpg" },
  { name:"Jiniret",    member:"Hyunjin",   animal:"Furão",           img:"https://i.pinimg.com/736x/92/f1/f0/92f1f06ea263fdfad827cb3c6b956470.jpg" },
  { name:"Han Quokka", member:"Han",       animal:"Esquilo",         img:"https://i.pinimg.com/736x/7c/32/dc/7c32dc29d2aa04899ae6ea5036904ab8.jpg" },
  { name:"BbokAri",    member:"Felix",     animal:"Pinto",           img:"https://i.pinimg.com/1200x/ae/06/62/ae06620dbf96ac5f2559597fa61f12a4.jpg" },
  { name:"PuppyM",     member:"Seungmin",  animal:"Cachorro",        img:"https://i.pinimg.com/736x/2c/27/cf/2c27cf81307b9591a11d8c463b6d9857.jpg" },
  { name:"Fox I.Ny",   member:"I.N",       animal:"Raposa",          img:"https://i.pinimg.com/736x/62/c0/e1/62c0e18118e175467bd241e5ebb023f4.jpg" },
];

const streamLinks = [
  { icon:"🎧", name:"Spotify",    action:"Stream agora", url:"https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE" },
  { icon:"▶️",  name:"YouTube",   action:"Assistir MVs", url:"https://www.youtube.com/@StrayKids" },
  { icon:"🍎", name:"Apple Music",action:"Stream agora", url:"https://music.apple.com/us/artist/stray-kids/1304823362" },
  { icon:"🍈", name:"MelOn",      action:"Chart coreano",url:"https://www.melon.com/artist/timeline.htm?artistId=845405" },
  { icon:"🏆", name:"MAMA Awards",action:"Votar agora",  url:"https://mama.mnetplus.world/" },
  { icon:"⭐",  name:"AMAs",       action:"Votar agora",  url:"https://www.theamas.com/" },
  { icon:"🎵", name:"SMA",        action:"Votar agora",  url:"https://seoulmusicawards.com/en/overview/awards" },
  { icon:"🌏", name:"AAA",        action:"Votar agora",  url:"https://www.asiaartistawards.com/" },
];

/* ── INTRO ── */
document.getElementById('introEnterBtn').addEventListener('click', () => {
  document.getElementById('introScreen').classList.add('out');
  setTimeout(() => { document.getElementById('introScreen').style.display='none'; }, 800);
});
setTimeout(() => { document.getElementById('introEnterBtn').style.opacity='1'; }, 2300);

/* ── HERO CANVAS ── */
(function(){
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  for(let i=0;i<80;i++) particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, vx:(Math.random()-.5)*.3, vy:(Math.random()-.5)*.3, r:Math.random()*1.5+.5, a:Math.random() });
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
      if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(232,25,44,${p.a*.4})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── NAVBAR ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', ()=>{ navbar.classList.toggle('scrolled', window.scrollY>60); });
document.getElementById('navToggle').addEventListener('click', ()=>{
  document.getElementById('navLinks').classList.toggle('open');
});

/* ── STATS COUNTER ── */
const statNums = document.querySelectorAll('.stat-num');
const statsObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = target/60;
      const timer = setInterval(()=>{
        current = Math.min(current+step, target);
        el.textContent = Math.floor(current);
        if(current>=target) clearInterval(timer);
      }, 16);
      statsObserver.unobserve(el);
    }
  });
},{threshold:.5});
statNums.forEach(el=>statsObserver.observe(el));

/* ── MEMBROS ── */
function renderMembers(){
  const grid = document.getElementById('membersGrid');
  members.forEach((m,i)=>{
    const card = document.createElement('div');
    card.className = 'member-card reveal';
    card.style.transitionDelay = `${i*.07}s`;
    card.innerHTML = `
      <div class="member-img-wrap">
        <img src="${m.skzooImg}" alt="${m.name}" loading="lazy">
        <div class="member-overlay"></div>
        <div class="member-bottom">
          <span class="member-badge">${m.unit}</span>
          <div class="member-stage">${m.name}</div>
          <div class="member-name">${m.full}</div>
          <div class="member-role">${m.pos.split('/')[0].trim()}</div>
          <div class="member-skzoo">SKZoo: ${m.skzoo}</div>
        </div>
      </div>
    `;
    card.addEventListener('click', ()=>openMemberModal(i));
    grid.appendChild(card);
  });
}

function openMemberModal(i){
  const m = members[i];
  document.getElementById('modalImgSide').innerHTML = `<img src="${m.img}" alt="${m.name}">`;
  document.getElementById('modalInfoSide').innerHTML = `
    <div class="modal-stage">${m.name}</div>
    <div class="modal-fullname">${m.kr} · ${m.full}</div>
    <div style="display:flex;gap:.5rem;flex-wrap:wrap">
      <span class="modal-pill">${m.unit}</span>
      <span class="modal-pill">${m.skzoo}</span>
    </div>
    <div class="modal-divider"></div>
    <div class="modal-stats">
      <div><div class="modal-stat-label">Aniversário</div><div class="modal-stat-value">${m.birthday}</div></div>
      <div><div class="modal-stat-label">Altura</div><div class="modal-stat-value">${m.height}</div></div>
      <div><div class="modal-stat-label">MBTI</div><div class="modal-stat-value">${m.mbti}</div></div>
      <div><div class="modal-stat-label">Nacionalidade</div><div class="modal-stat-value">${m.nat}</div></div>
    </div>
    <div class="modal-divider"></div>
    <div class="modal-bio">${m.bio}</div>
    <div class="modal-divider"></div>
    <div>${m.facts.map(f=>`<div class="modal-fact">${f}</div>`).join('')}</div>
  `;
  document.getElementById('memberModal').classList.remove('hidden');
  document.body.style.overflow='hidden';
}

document.getElementById('modalCloseBtn').addEventListener('click', closeMemberModal);
document.getElementById('memberModal').addEventListener('click', (e)=>{ if(e.target===e.currentTarget) closeMemberModal(); });
function closeMemberModal(){ document.getElementById('memberModal').classList.add('hidden'); document.body.style.overflow=''; }

/* ── DISCOGRAFIA ── */
function renderDiscografia(){
  const grid = document.getElementById('discoGrid');
  albums.forEach(a=>{
    const card = document.createElement('div');
    card.className = `disco-card reveal`;
    card.dataset.type = a.type;
    card.innerHTML = `
      <div class="disco-cover">
        <img src="${a.img}" alt="${a.name}" loading="lazy">
        <span class="disco-type-tag">${a.type}</span>
      </div>
      <div class="disco-info">
        <div class="disco-name">${a.name}</div>
        <div class="disco-year">${a.year} · ${a.tracks} faixas</div>
        <div class="disco-track">▶ ${a.track}</div>
      </div>
    `;
    grid.appendChild(card);
  });
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.disco-card').forEach(c=>{
        c.classList.toggle('hidden', filter!=='all' && c.dataset.type!==filter);
      });
    });
  });
}

/* ── TIMELINE ── */
function renderTimeline(){
  const container = document.getElementById('timelineContainer');
  timelineEvents.forEach((ev,i)=>{
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    const side1 = `<div class="timeline-side"><div class="timeline-year">${ev.year}</div><div class="timeline-event">${ev.event}</div><div class="timeline-desc">${ev.desc}</div>${ev.badge?`<span class="timeline-badge ${ev.gold?'gold':''}">${ev.badge}</span>`:''}</div>`;
    const dot = `<div class="timeline-dot"></div>`;
    const spacer = `<div class="timeline-spacer"></div>`;
    item.innerHTML = i%2===0 ? side1+dot+spacer : spacer+dot+side1;
    container.appendChild(item);
  });
}

/* ── TOURS ── */
function renderTours(){
  const grid = document.getElementById('toursGrid');
  tours.forEach(t=>{
    const card = document.createElement('div');
    card.className = 'tour-card reveal';
    card.innerHTML = `
      <div class="tour-era">${t.era}</div>
      <div class="tour-name">${t.name}</div>
      <div class="tour-desc">${t.desc}</div>
      ${t.badges.map(b=>`<span class="tour-badge ${t.gold?'gold':''}">${b}</span>`).join('')}
    `;
    grid.appendChild(card);
  });
  // Countdown Rock in Rio
  const target = new Date('2026-09-19T20:00:00-03:00');
  function updateCountdown(){
    const diff = target - new Date();
    if(diff<=0){ document.getElementById('rirCountdown').innerHTML='<span style="font-family:Bebas Neue,sans-serif;font-size:2rem;color:var(--acg)">JÁ ACONTECEU! 🎉</span>'; return; }
    const d=Math.floor(diff/86400000), h=Math.floor((diff%86400000)/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
    document.getElementById('rirCountdown').innerHTML = `
      <div><span>${d}</span><small>dias</small></div>
      <div><span>${String(h).padStart(2,'0')}</span><small>horas</small></div>
      <div><span>${String(m).padStart(2,'0')}</span><small>min</small></div>
      <div><span>${String(s).padStart(2,'0')}</span><small>seg</small></div>
    `;
  }
  updateCountdown(); setInterval(updateCountdown,1000);
}

/* ── CURIOSIDADES ── */
let currentTab = 'geral';
function renderFacts(tab){
  const grid = document.getElementById('factsGrid');
  grid.innerHTML = '';
  factsData[tab].forEach((f,i)=>{
    const card = document.createElement('div');
    card.className = 'fact-card reveal';
    card.style.transitionDelay = `${i*.08}s`;
    card.innerHTML = `<div class="fact-tag">${f.tag}</div><div class="fact-text">${f.text}</div>`;
    grid.appendChild(card);
  });
  setTimeout(initReveal,50);
}
document.querySelectorAll('.facts-tab').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.facts-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentTab = btn.dataset.tab;
    renderFacts(currentTab);
  });
});

/* ── MVs ── */
function renderMVs(){
  const grid = document.getElementById('mvsGrid');
  mvs.forEach(mv=>{
    const card = document.createElement('a');
    card.className = 'mv-card reveal';
    card.href = `https://www.youtube.com/watch?v=${mv.id}`;
    card.target = '_blank';
    card.innerHTML = `
      <div class="mv-thumb">
        <img src="https://img.youtube.com/vi/${mv.id}/mqdefault.jpg" alt="${mv.title}" loading="lazy">
        <div class="mv-play"><span>▶</span></div>
      </div>
      <div class="mv-info">
        <div class="mv-title">${mv.title}</div>
        <div class="mv-year">${mv.year}</div>
        <div class="mv-views">▶ ${mv.views} views</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── GALERIA ── */
function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  gallery.forEach(g=>{
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${g.url}" alt="${g.alt}" loading="lazy"><div class="gallery-hover">🔍</div>`;
    item.addEventListener('click', ()=>{
      document.getElementById('lbImg').src = g.url;
      document.getElementById('lightbox').classList.remove('hidden');
    });
    grid.appendChild(item);
  });
  document.getElementById('lbClose').addEventListener('click', ()=>document.getElementById('lightbox').classList.add('hidden'));
  document.getElementById('lightbox').addEventListener('click', e=>{ if(e.target===e.currentTarget) document.getElementById('lightbox').classList.add('hidden'); });
}

/* ── SKZOO ── */
function renderSkzoo(){
  const grid = document.getElementById('skzooGrid');
  skzoo.forEach(s=>{
    const card = document.createElement('div');
    card.className = 'skzoo-card reveal';
    card.innerHTML = `
      <div class="skzoo-img-wrap"><img src="${s.img}" alt="${s.name}" loading="lazy"></div>
      <div class="skzoo-info">
        <div class="skzoo-name">${s.name}</div>
        <div class="skzoo-member">${s.member}</div>
        <span class="skzoo-badge">${s.animal}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── STREAM ── */
function renderStream(){
  const grid = document.getElementById('streamGrid');
  streamLinks.forEach(s=>{
    const card = document.createElement('a');
    card.className = 'stream-card';
    card.href = s.url; card.target = '_blank';
    card.innerHTML = `<div class="stream-icon">${s.icon}</div><div class="stream-name">${s.name}</div><div class="stream-action">${s.action}</div>`;
    grid.appendChild(card);
  });
}

/* ── BACK TO TOP ── */
const btt = document.getElementById('backToTop');
window.addEventListener('scroll',()=>{ btt.classList.toggle('visible', window.scrollY>400); });
btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ── SHARE BAR ── */
const shareBar = document.getElementById('shareBar');
window.addEventListener('scroll',()=>{ shareBar.classList.toggle('visible', window.scrollY>600); });
function shareTwitter(){ window.open(`https://twitter.com/intent/tweet?text=Conheça o Stray Kids nessa fan page!&url=${encodeURIComponent(location.href)}`,'_blank'); }
function shareWhatsapp(){ window.open(`https://wa.me/?text=Conheça o Stray Kids! ${encodeURIComponent(location.href)}`,'_blank'); }
function copyLink(){ navigator.clipboard.writeText(location.href).then(()=>{ const btn=shareBar.querySelectorAll('button')[2]; btn.textContent='✅ Copiado!'; setTimeout(()=>btn.textContent='🔗 Copiar',2000); }); }

/* ── SCROLL REVEAL ── */
function initReveal(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target); } });
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}

/* ── INIT ── */
renderMembers();
renderDiscografia();
renderTimeline();
renderTours();
renderFacts('geral');
renderMVs();
renderGallery();
renderSkzoo();
renderStream();
setTimeout(initReveal, 150);
