/* Stray Kids Fan Page — script.js | Autora: Laysa Serrão */

/* ── SHARE — funções globais ── */
function shareTwitter(){ window.open('https://twitter.com/intent/tweet?text=Conhe%C3%A7a+o+Stray+Kids!&url='+encodeURIComponent(location.href),'_blank','noopener,noreferrer'); }
function shareWhatsapp(){ window.open('https://wa.me/?text=Conhe%C3%A7a+o+Stray+Kids!+'+encodeURIComponent(location.href),'_blank','noopener,noreferrer'); }
function copyLink(){
  navigator.clipboard.writeText(location.href).then(()=>{
    const btns = document.querySelectorAll('#shareBar button');
    const btn = btns[btns.length-1];
    if(btn){ btn.textContent='✅ Copiado!'; setTimeout(()=>btn.textContent='🔗 Copiar',2000); }
  });
}
function closeDrawer(){
  document.getElementById('drawer')?.classList.remove('open');
  document.getElementById('drawerOverlay')?.classList.remove('open');
  document.body.style.overflow='';
}

/* ── DADOS — Membros ── */
const members=[
  { name:"Bang Chan", kr:"방찬", full:"Christopher Bang", pos:"Leader / Rapper / Vocal", unit:"3RACHA", color:"#e8192c",
    img:"https://i.pinimg.com/736x/3b/df/d9/3bdfd90a31d55fda2ca6ca7587b11d07.jpg",
    skzooImg:"https://i.pinimg.com/736x/0a/2c/b4/0a2cb4863654f61163fa566ea51ad136.jpg",
    birthday:"3 out 1997", height:"171 cm", mbti:"ENFJ", nat:"Coreia / Austrália", skzoo:"Wolf Chan",
    bio:"Líder e produtor principal. Passou 7 anos como trainee na JYP. Criou o 3RACHA antes do debut. Realizava lives semanais chamadas 'Chan's Room' (2019–2023). Fala coreano, inglês, japonês e um pouco de chinês. Embaixador da Fendi desde 2025.",
    facts:["Criou o sub-grupo 3RACHA ainda como trainee","Desenhou o logo completo do Stray Kids à mão antes do debut","Passou 7 anos como trainee — o mais longo do grupo"]
  },
  { name:"Lee Know", kr:"리노", full:"Lee Min-ho", pos:"Dancer / Rapper / Vocal", unit:"Dance Racha", color:"#cc2222",
    img:"https://i.pinimg.com/736x/56/7b/4e/567b4efec58b1fec7e36551fb498bf14.jpg",
    skzooImg:"https://i.pinimg.com/736x/60/32/41/60324170701609e857a671d34d4c9f81.jpg",
    birthday:"25 out 1998", height:"172 cm", mbti:"ISFP", nat:"Sul-coreano", skzoo:"Leebit",
    bio:"Um dos melhores dançarinos da 4ª geração. Tem 3 gatos: Soonie, Doongie e Dori. Embaixador global da Gucci desde 2025. Adora ler — autor favorito é Keigo Higashino.",
    facts:["Estava no grupo de apoio do BTS antes de entrar no SKZ","Tem 3 gatos: Soonie, Doongie e Dori","Ganhou o apelido 'Eye Smile' pelo sorriso característico"]
  },
  { name:"Changbin", kr:"창빈", full:"Seo Chang-bin", pos:"Rapper / Vocal / Producer", unit:"3RACHA", color:"#b01a1a",
    img:"https://i.pinimg.com/736x/ba/09/2f/ba092f2542294d51e26ac99fb21c1ca1.jpg",
    skzooImg:"https://i.pinimg.com/736x/f1/c6/28/f1c6289043efe05c31adbdaa58df1bef.jpg",
    birthday:"11 ago 1999", height:"167 cm", mbti:"ESTP", nat:"Sul-coreano", skzoo:"Dwaekki",
    bio:"Famoso pelo rap extremamente rápido. Menor do grupo em altura (167cm), mas com enorme presença de palco. Produz e escreve grande parte das letras do SKZ junto com Bang Chan e Han. Embaixador global da Autry (2026) — primeira celebridade a representar a marca italiana de calçados.",
    facts:["Tem um dos raps mais rápidos do K-pop","167cm — menor do grupo mas enorme presença de palco","Escreve letras poderosas sobre superação e identidade"]
  },
  { name:"Hyunjin", kr:"황현진", full:"Hwang Hyun-jin", pos:"Dancer / Rapper / Vocal", unit:"Dance Racha", color:"#e8192c",
    img:"https://i.pinimg.com/736x/02/65/4d/02654d65820f9322a70fb163e2561b02.jpg",
    skzooImg:"https://i.pinimg.com/736x/92/f1/f0/92f1f06ea263fdfad827cb3c6b956470.jpg",
    birthday:"20 mar 2000", height:"179 cm", mbti:"INFP", nat:"Sul-coreano", skzoo:"Jiniret",
    bio:"O mais alto do grupo. Além de idol, é pintor e realizou exposições de arte. Embaixador global da Cartier (2024), Givenchy Beauty (2025) e Guess (2026).",
    facts:["Além de idol é pintor — já realizou exposições oficiais","179cm — o mais alto do grupo","Embaixador da Cartier, Givenchy Beauty e Guess"]
  },
  { name:"Han", kr:"한", full:"Han Ji-sung", pos:"Rapper / Vocal / Producer", unit:"3RACHA", color:"#cc2222",
    img:"https://i.pinimg.com/736x/c7/fa/e2/c7fae2d48dd7914314ef69da4b520118.jpg",
    skzooImg:"https://i.pinimg.com/736x/7c/32/dc/7c32dc29d2aa04899ae6ea5036904ab8.jpg",
    birthday:"14 set 2000", height:"170 cm", mbti:"INFP", nat:"Coreano (criado na Malásia)", skzoo:"Han Quokka",
    bio:"Parte do trio produtor 3RACHA. Considerado um dos letristas mais criativos do K-pop. Cresceu na Malásia e voltou à Coreia para perseguir o sonho. Embaixador global da Tod's (2026) — estreou na Milan Fashion Week pelo show Menswear SS27 da marca.",
    facts:["Cresceu em Kuala Lumpur, Malásia","Escreve letras desde muito jovem","O Han Quokka foi inspirado no animal sorridente da Austrália"]
  },
  { name:"Felix", kr:"필릭스", full:"Lee Yong-bok", pos:"Dancer / Rapper / Vocal", unit:"Dance Racha", color:"#b01a1a",
    img:"https://i.pinimg.com/736x/88/5f/13/885f133bf04ddd7e3ff5e608153b8bfa.jpg",
    skzooImg:"https://i.pinimg.com/1200x/ae/06/62/ae06620dbf96ac5f2559597fa61f12a4.jpg",
    birthday:"15 set 2000", height:"171 cm", mbti:"ENFP", nat:"Australiano", skzoo:"BbokAri",
    bio:"Único membro nascido fora da Ásia (Sydney, Austrália). Famoso pela voz profunda inconfundível. É o membro com mais parcerias de marca do grupo. Embaixador global da Louis Vuitton (2023), HERA (primeiro embaixador masculino da marca, 2025), Adidas Global Icon (2026) e Gong Cha (2025). Embaixador de Goodwill da UNICEF Coreia (2024). Também representa Samsung, Gentle Monster, Happiz, BB.Q Chicken e a campanha Hanbok Wave. Colaborou com LiSA na abertura do anime Solo Leveling 2ª temporada (2025). Conquistou 63 medalhas em Taekwondo antes de ser idol.",
    facts:["Embaixador global da Louis Vuitton, Adidas, HERA e Gong Cha — o membro com mais parcerias do grupo","Goodwill Ambassador da UNICEF Coreia desde 2024","Conquistou 63 medalhas em Taekwondo antes de ser idol"]
  },
  { name:"Seungmin", kr:"승민", full:"Kim Seung-min", pos:"Vocalist", unit:"Vocal Racha", color:"#e8192c",
    img:"https://i.pinimg.com/736x/7e/62/1c/7e621c90fb513a243bae7506e33d5666.jpg",
    skzooImg:"https://i.pinimg.com/736x/2c/27/cf/2c27cf81307b9591a11d8c463b6d9857.jpg",
    birthday:"22 set 2000", height:"178 cm", mbti:"ISFJ", nat:"Sul-coreano", skzoo:"PuppyM",
    bio:"Principal vocalista. Grande fã de beisebol — sonho alternativo era ser jogador profissional. Embaixador da Burberry.",
    facts:["Praticou beisebol profissionalmente antes de ser idol","Torce pelo time Doosan Bears","Apelido 'Puppy Seungmin' pelo sorriso"]
  },
  { name:"I.N", kr:"아이엔", full:"Yang Jeong-in", pos:"Vocalist / Dancer", unit:"Vocal Racha", color:"#cc2222",
    img:"https://i.pinimg.com/736x/bc/90/ef/bc90ef74df83c02d36d3b8ce6cc1e056.jpg",
    skzooImg:"https://i.pinimg.com/736x/62/c0/e1/62c0e18118e175467bd241e5ebb023f4.jpg",
    birthday:"8 fev 2001", height:"173 cm", mbti:"INFP", nat:"Sul-coreano", skzoo:"Fox I.Ny",
    bio:"Maknae (caçula) do grupo. Habilidade especial: cantar trot. Embaixador da Bottega Veneta e Damiani.",
    facts:["Maknae do grupo — nascido em 2001","Sabe cantar trot — estilo musical coreano tradicional","Fox I.Ny escolhido pela astúcia e charme"]
  }
];

/* ── DADOS — Álbuns ── */
const albums=[
  { year:"2026", name:"THIS & THAT",              badge:"Mini Álbum",       type:"full",    track:"This & That",      tracks:8,  img:"https://static.wikia.nocookie.net/stray-kids/images/3/3d/THIS_%26_THAT_Digital_Cover.jpg/revision/latest/scale-to-width-down/1000?cb=20260714140146" },
  { year:"2026", name:"RUN IT",                   badge:"Single",           type:"single",  track:"RUN IT",           tracks:1,  img:"https://d1al7qj7ydfbpt.cloudfront.net/artists/straykids/albums/1782273961369-881e95eb.jpg" },
  { year:"2026", name:"Endless Sun",              badge:"Single",           type:"single",  track:"Endless Sun",      tracks:1,  img:"https://static.wikia.nocookie.net/stray-kids/images/7/71/Endless_Sun_Digital_Cover.jpg/revision/latest/scale-to-width-down/1000?cb=20260313042615" },
  { year:"2026", name:"별, 빛 (STAY)",            badge:"Single",           type:"single",  track:"별, 빛 (STAY)",    tracks:1,  img:"https://akamai.sscdn.co/letras/360x360/albuns/4/7/7/3/4809391776718807.jpg" },
  { year:"2025", name:"DO IT",                    badge:"EP · BB #1",       type:"ep",      track:"Do It",            tracks:5,  img:"https://akamai.sscdn.co/letras/360x360/albuns/4/6/3/9/4219271763739713.jpg" },
  { year:"2025", name:"KARMA",                    badge:"Álbum · BB #1",    type:"full",    track:"CEREMONY",         tracks:11, img:"https://akamai.sscdn.co/letras/360x360/albuns/9/0/1/7/3671491759770818.jpg" },
  { year:"2025", name:"Hollow",                   badge:"EP · Japonês",     type:"ep",      track:"Hollow",           tracks:5,  img:"https://akamai.sscdn.co/letras/360x360/albuns/f/2/5/4/3219971753127268.jpg" },
  { year:"2025", name:"Mixtape: dominATE",        badge:"EP · 7º Aniv.",    type:"ep",      track:"Truman",           tracks:5,  img:"https://akamai.sscdn.co/letras/360x360/albuns/7/f/e/9/2891771742554519.jpg" },
  { year:"2024", name:"HOP",                      badge:"Álbum · BB #1",    type:"full",    track:"Walkin On Water",  tracks:6,  img:"https://akamai.sscdn.co/letras/360x360/albuns/a/d/7/5/2218701734439880.jpg" },
  { year:"2024", name:"GIANT",                    badge:"Álbum · Japonês",  type:"full",    track:"Giant",            tracks:5,  img:"https://akamai.sscdn.co/letras/360x360/albuns/6/c/4/c/2437281731521663.jpg" },
  { year:"2024", name:"SLASH",                    badge:"Single",           type:"single",  track:"SLASH",            tracks:1,  img:"https://akamai.sscdn.co/letras/360x360/albuns/3/2/8/5/2309341721749059.jpg" },
  { year:"2024", name:"ATE",                      badge:"Álbum · BB #1",    type:"full",    track:"Chk Chk Boom",     tracks:9,  img:"https://akamai.sscdn.co/letras/360x360/albuns/1/8/c/4/2304721721390720.jpg" },
  { year:"2024", name:"Lose My Breath",           badge:"Single",           type:"single",  track:"Lose My Breath",   tracks:1,  img:"https://akamai.sscdn.co/letras/360x360/albuns/e/f/a/d/2241071717439651.jpg" },
  { year:"2024", name:"Come Play (Arcane)",       badge:"Single",           type:"single",  track:"Come Play",        tracks:1,  img:"https://akamai.sscdn.co/letras/360x360/albuns/4/b/d/e/2407601729245928.jpg" },
  { year:"2023", name:"★★★★★ (5-STAR)",          badge:"Álbum · BB #1",    type:"full",    track:"S-Class",          tracks:12, img:"https://akamai.sscdn.co/letras/360x360/albuns/6/0/b/b/1586341706541058.jpg" },
  { year:"2023", name:"ROCK-STAR",                badge:"Álbum · BB #1",    type:"full",    track:"LALALALA",         tracks:6,  img:"https://i.pinimg.com/1200x/cf/df/97/cfdf97cbbcfe4f1e877ff9db280c84f5.jpg" },
  { year:"2023", name:"SKZ-REPLAY",               badge:"Álbum",            type:"full",    track:"Limbo",            tracks:14, img:"https://akamai.sscdn.co/letras/360x360/albuns/4/a/0/c/1444131681997935.jpg" },
  { year:"2022", name:"MAXIDENT",                 badge:"Álbum · BB #1",    type:"full",    track:"Case 143",         tracks:7,  img:"https://akamai.sscdn.co/letras/360x360/albuns/b/3/d/4/1392111681997927.jpg" },
  { year:"2022", name:"ODDINARY",                 badge:"Álbum · BB #1",    type:"full",    track:"MANIAC",           tracks:6,  img:"https://akamai.sscdn.co/letras/360x360/albuns/d/4/3/4/1255491681997918.jpg" },
  { year:"2022", name:"Circus",                   badge:"Single/EP · JP",   type:"ep",      track:"Circus",           tracks:6,  img:"https://akamai.sscdn.co/letras/360x360/albuns/6/b/6/d/1400281682347938.jpg" },
  { year:"2022", name:"Christmas EveL",           badge:"EP",               type:"ep",      track:"Christmas EveL",   tracks:3,  img:"https://akamai.sscdn.co/letras/360x360/albuns/c/e/e/c/1205891682347933.jpg" },
  { year:"2021", name:"SKZ2021",                  badge:"Álbum",            type:"full",    track:"Scars",            tracks:14, img:"https://akamai.sscdn.co/letras/360x360/albuns/5/b/5/9/1220471681997909.jpg" },
  { year:"2021", name:"NOEASY",                   badge:"Álbum",            type:"full",    track:"Thunderous",       tracks:14, img:"https://akamai.sscdn.co/letras/360x360/albuns/e/6/8/e/1136961681997899.jpg" },
  { year:"2020", name:"IN生 (IN LIFE)",           badge:"Álbum",            type:"full",    track:"Back Door",        tracks:16, img:"https://akamai.sscdn.co/letras/360x360/albuns/4/b/4/c/962401681997889.jpg" },
  { year:"2020", name:"GO LIVE",                  badge:"Álbum",            type:"full",    track:"God's Menu",       tracks:14, img:"https://akamai.sscdn.co/uploadfile/letras/albuns/9/8/1/d/917981681997881.jpg" },
  { year:"2019", name:"Clé: Levanter",           badge:"Álbum",            type:"full",    track:"Levanter",         tracks:7,  img:"https://akamai.sscdn.co/uploadfile/letras/albuns/1/8/6/4/820831681997786.jpg" },
  { year:"2019", name:"Clé 2: Yellow Wood",      badge:"Álbum",            type:"full",    track:"Side Effects",     tracks:6,  img:"https://akamai.sscdn.co/uploadfile/letras/albuns/f/a/4/2/739351681997869.jpg" },
  { year:"2019", name:"Clé 1: MIROH",            badge:"Álbum",            type:"full",    track:"MIROH",            tracks:6,  img:"https://akamai.sscdn.co/uploadfile/letras/albuns/4/e/a/e/710451681997861.jpg" },
  { year:"2018", name:"I Am YOU",                badge:"Álbum",            type:"full",    track:"I Am YOU",         tracks:7,  img:"https://akamai.sscdn.co/uploadfile/letras/albuns/a/7/5/8/667931681997795.jpg" },
  { year:"2018", name:"I Am WHO",                badge:"Álbum",            type:"full",    track:"My Pace",          tracks:7,  img:"https://akamai.sscdn.co/uploadfile/letras/albuns/9/1/5/8/657101681997849.jpg" },
  { year:"2018", name:"I Am NOT",               badge:"Álbum",            type:"full",    track:"District 9",       tracks:8,  img:"https://akamai.sscdn.co/uploadfile/letras/albuns/0/a/9/3/633621681997843.jpg" },
  { year:"2018", name:"Mixtape",                 badge:"Álbum · Pré-debut",type:"full",    track:"Hellevator",       tracks:7,  img:"https://akamai.sscdn.co/uploadfile/letras/albuns/3/0/e/c/615131708092816.jpg" },
];

/* ── DADOS — Timeline ── */
const timelineEvents=[
  { year:"2017", event:"Nasce o Stray Kids", desc:"A JYP Entertainment anuncia o reality show onde trainees competem por uma vaga no grupo. Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin e I.N são selecionados.", badge:"Origem" },
  { year:"Mar 2018", event:"Debut Oficial", desc:"O grupo faz seu debut com o mini-álbum Mixtape. A identidade de self-production já aparece desde o primeiro dia.", badge:"Marco histórico", gold:true },
  { year:"2019", event:"MIROH — Primeiro Grande Hit", desc:"Clé 1: MIROH marca a virada do grupo. A faixa título se torna um hit internacional. Lee Know retorna após lesão.", badge:"Breakthrough" },
  { year:"Out 2019", event:"Saída do Woojin", desc:"Woojin anuncia sua saída por motivos pessoais. O grupo continua como octeto.", badge:"Mudança" },
  { year:"2020", event:"God's Menu — A Era da Identidade", desc:"GO LIVE com God's Menu define o som característico do SKZ. Identidade musical consolidada.", badge:"Identidade" },
  { year:"2021", event:"NOEASY — Billboard Top 5", desc:"NOEASY entra no Top 5 do Billboard 200. Thunderous vira viral.", badge:"Billboard Top 5", gold:true },
  { year:"2022", event:"ODDINARY — Primeiro #1 no Billboard", desc:"ODDINARY estreia em #1 no Billboard 200 — segundo grupo de K-pop da história.", badge:"Billboard #1", gold:true },
  { year:"2022", event:"MAXIDENT & MANIAC World Tour", desc:"MAXIDENT estreia em #1 — segundo consecutivo. MANIAC World Tour com shows sold out.", badge:"Billboard #1", gold:true },
  { year:"2023", event:"5-STAR Dome Tour & Lollapalooza", desc:"Dois álbuns em #1 no Billboard. Realizam o 5-STAR Dome Tour e headlinam o Lollapalooza Chicago — primeiros K-pop a fazer isso.", badge:"Lollapalooza", gold:true },
  { year:"2024", event:"Met Gala & ATE", desc:"Vão ao Met Gala — primeiros artistas K-pop juntos. ATE: 5º álbum consecutivo em #1. Iniciam o dominATE World Tour.", badge:"Met Gala", gold:true },
  { year:"2025", event:"KARMA & Recorde Mundial", desc:"KARMA: 7º álbum em #1. O dominATE Tour fatura US$185,9M com +1,3 milhão de ingressos — maior tour K-pop da história.", badge:"Maior tour K-pop", gold:true },
  { year:"Jun 2026", event:"Governors Ball — Primeiro K-pop Headliner", desc:"O Stray Kids se torna o primeiro grupo de K-pop a headlinar o Governors Ball em Nova York, performando para 45.000 pessoas. Seungmin não participou por lesão no tornozelo.", badge:"História do K-pop", gold:true },
  { year:"2026", event:"Recording Academy & THIS & THAT", desc:"Os 8 membros são convidados como membros votantes da Recording Academy — podendo votar no Grammy. Lançamento do single RUN IT (jun) e do álbum THIS & THAT (ago), com nova RUN IT World Tour anunciada.", badge:"Grammy · Nova Era", gold:true },
];

/* ── DADOS — Tours ── */
const tours=[
  { era:"2022", name:"MANIAC World Tour", desc:"Primeiro grande retorno aos palcos internacionais após a pandemia. América do Norte, Europa e Ásia.", badges:["América do Norte","Europa","Ásia"] },
  { era:"2023", name:"5-STAR Dome Tour", desc:"Tour em dômes no Japão e Ásia. Headlinaram também o Lollapalooza Chicago.", badges:["Japão","Lollapalooza Chicago","Ásia"], gold:true },
  { era:"2024–2025", name:"dominATE World Tour", desc:"O maior tour da história do K-pop. 56 shows em 35 cidades. +1,3 milhão de ingressos. US$185,7M faturados. Encerrou no Incheon Asiad Main Stadium em outubro de 2025.", badges:["+1.3M ingressos","US$185,7M","56 shows · 35 cidades","#2 Pollstar Global"], gold:true },
  { era:"Set 2026", name:"STRAYCITY — Latin America", desc:"Tour pela América Latina com shows em Bogotá (9 set), Buenos Aires (14 set) e Cidade do México (25 set).", badges:["Bogotá 🇨🇴 · 9 set","Buenos Aires 🇦🇷 · 14 set","Cidade do México 🇲🇽 · 25 set"], gold:true },
  { era:"Set 2026", name:"Rock in Rio", desc:"Headliners confirmados do Rock in Rio — primeiro ato de K-pop a ser headliner do festival.", badges:["Rock in Rio 🇧🇷","Setembro 2026"], gold:true },
  { era:"2026", name:"RUN IT World Tour", desc:"Nova world tour anunciada junto com o álbum THIS & THAT. Promete superar a escala da dominATE. Datas e cidades a serem confirmadas oficialmente.", badges:["Em breve","Global","+ de 56 shows previstos"], gold:true },
  { era:"Jul–Ago 2026", name:"Seoul KSPO DOME", desc:"5 shows sold-out em Seoul antes do lançamento do álbum THIS & THAT. Aquecimento para a nova era.", badges:["5 shows","Seoul","KSPO DOME","Jul–Ago 2026"], gold:true },
];

/* ── DADOS — Curiosidades ── */
const factsData={
  geral:[
    { tag:"Origem", text:"O nome <strong>Stray Kids</strong> representa jovens que não se encaixam — 'stray' significa errante. O grupo foi criado para dar voz a esses jovens ao redor do mundo." },
    { tag:"Self-production", text:"O sub-grupo <strong>3RACHA</strong> (Bang Chan, Han e Changbin) produz e escreve a maioria das músicas. Eles têm controle criativo quase total sobre o som do grupo." },
    { tag:"Logo", text:"O logo completo do Stray Kids foi desenhado à mão pelo próprio <strong>Bang Chan</strong> antes do debut. A cor muda a cada nova era." },
    { tag:"Fandom", text:"O fandom <strong>STAY</strong> completa o slogan: <em>'You make Stray Kids stay'</em>. Sem os fãs, o grupo estaria 'stray' (perdido)." },
    { tag:"Deadpool", text:"A performance do Stray Kids com tema do Deadpool gerou elogios de <strong>Ryan Reynolds e Hugh Jackman</strong>, levando o grupo a participar da trilha sonora de <em>Deadpool & Wolverine</em> (2024)." },
    { tag:"Arcane", text:"O Stray Kids participou da trilha sonora de <strong>Arcane</strong>, a animação da Netflix inspirada em <em>League of Legends</em> — jogo favorito do <strong>Felix</strong>." },
  ],
  recordes:[
    { tag:"Billboard", text:"O SKZ é o <strong>primeiro ato da história do Billboard 200</strong> a estrear com seus primeiros 8 álbuns consecutivos em #1 — feito que nenhum outro artista, nem BTS nem Taylor Swift, havia conquistado. A sequência vai de ODDINARY (2022) a DO IT (2025)." },
    { tag:"Met Gala 2024", text:"Em maio de 2024, o Stray Kids se tornou o <strong>primeiro grupo K-pop</strong> cujos todos os membros compareceram juntos ao Met Gala." },
    { tag:"dominATE Tour", text:"O dominATE World Tour (2024–2025) é o <strong>maior tour K-pop da história</strong>: US$185,9M com +1,3 milhão de ingressos. #2 no ranking global da Pollstar." },
    { tag:"Festivais", text:"Em 2023, headlinaram o <strong>Lollapalooza Chicago</strong>. Em 2026, se tornaram o <strong>primeiro grupo de K-pop a headlinar o Governors Ball</strong> em Nova York, performando para 45.000 pessoas." },
    { tag:"Spotify", text:"Em 2025, o SKZ se tornou o <strong>terceiro artista coreano</strong> a atingir 10 bilhões de streams no Spotify, após BTS e BLACKPINK." },
    { tag:"Rock in Rio", text:"Em 2026, o Stray Kids se torna o <strong>primeiro ato de K-pop a headlinar o Rock in Rio</strong> — consolidando seu alcance global." },
    { tag:"Grammy", text:"Em julho de 2026, os <strong>8 membros do Stray Kids</strong> foram convidados para integrar a <strong>Recording Academy</strong> como membros votantes — podendo votar nas indicações e vencedores do Grammy Awards a partir de 2027." },
  ],
  membros:[
    { tag:"Felix", text:"<strong>Felix</strong> tem uma das vozes mais reconhecíveis do K-pop. Em 2025, colaborou com LiSA na abertura do anime <em>Solo Leveling</em> 2ª temporada. Antes de ser idol, conquistou <strong>63 medalhas em Taekwondo</strong>." },
    { tag:"Hyunjin artista", text:"Além de idol, <strong>Hyunjin</strong> é pintor sério. Já realizou exposições de arte e seus trabalhos foram leiloados." },
    { tag:"Chan's Room", text:"De 2019 a 2023, <strong>Bang Chan</strong> realizava lives semanais chamadas <em>'Chan's Room'</em>. A série foi encerrada em agosto de 2023." },
    { tag:"Lee Know & gatos", text:"<strong>Lee Know</strong> tem 3 gatos chamados Soonie, Doongie e Dori — tão famosos entre os STAYs que têm fã-clube próprio." },
    { tag:"Han letrista", text:"<strong>Han</strong> cresceu na Malásia e voltou à Coreia para perseguir o sonho — experiência que inspira suas letras sobre solidão e pertencimento." },
    { tag:"Seungmin & beisebol", text:"<strong>Seungmin</strong> praticou beisebol profissionalmente antes de se tornar trainee. Torce pelo time Doosan Bears." },
    { tag:"I.N & trot", text:"<strong>I.N</strong>, o maknae, sabe cantar trot — gênero musical coreano tradicional. Surpreende fãs e membros sempre que demonstra essa habilidade." },
    { tag:"Changbin & rap", text:"<strong>Changbin</strong> é famoso por seu rap extremamente rápido. Apesar de ser o menor do grupo (167cm), tem presença de palco avassaladora." },
  ]
};

/* ── DADOS — MVs ── */
const mvs=[
  { title:"RUN IT",         year:"2026", views:"",      id:"Q7IFjVUUb_E" },
  { title:"CEREMONY",       year:"2025", views:"",      id:"P7vBoGWoReg" },
  { title:"Do It",          year:"2025", views:"",      id:"NED7nev2ywQ" },
  { title:"DIVINE",         year:"2025", views:"",      id:"E8i32NXMxnc" },
  { title:"Walkin On Water",year:"2024", views:"",      id:"ovHoY8UBIu8" },
  { title:"CASE 143",       year:"2022", views:"",      id:"jYSlpC6Ud2A" },
  { title:"Back Door",      year:"2020", views:"",      id:"X-uJtV8ScYk" },
  { title:"Topline",        year:"2024", views:"",      id:"b3GYcA7j5mg" },
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

/* ── DADOS — Galeria ── */
const gallery=[
  { url:"https://i.pinimg.com/736x/f5/ed/8f/f5ed8fde49105aa808c2aa84620c91a1.jpg", alt:"Bang Chan" },
  { url:"https://i.pinimg.com/736x/cb/cb/16/cbcb16f0ee3562966f117e06e51ee54c.jpg", alt:"Lee Know" },
  { url:"https://i.pinimg.com/1200x/a2/ac/6e/a2ac6e6eea45914384d5cbc112504fe0.jpg", alt:"Changbin" },
  { url:"https://i.pinimg.com/736x/dd/92/f3/dd92f33432472ed63b55741a9562ce4c.jpg", alt:"Hyunjin" },
  { url:"https://i.pinimg.com/736x/9c/f2/49/9cf249c2002c584430ad634a6e8f2d0a.jpg", alt:"Han" },
  { url:"https://i.pinimg.com/736x/c2/22/c1/c222c19c6196bf8318cd55a167a28422.jpg", alt:"Felix" },
  { url:"https://i.pinimg.com/736x/34/4e/94/344e94b97242015717f64559d8d62389.jpg", alt:"Seungmin" },
  { url:"https://i.pinimg.com/736x/26/1f/97/261f97eaeb3d5f5254bb68dbf3268f37.jpg", alt:"I.N" },
];

/* ── DADOS — SKZoo ── */
const skzoo=[
  { name:"Wolf Chan",  member:"Bang Chan", animal:"Lobo",             img:"https://i.pinimg.com/736x/0a/2c/b4/0a2cb4863654f61163fa566ea51ad136.jpg" },
  { name:"Leebit",     member:"Lee Know",  animal:"Coelho",           img:"https://i.pinimg.com/736x/60/32/41/60324170701609e857a671d34d4c9f81.jpg" },
  { name:"Dwaekki",    member:"Changbin",  animal:"Coelho-porquinho", img:"https://i.pinimg.com/736x/f1/c6/28/f1c6289043efe05c31adbdaa58df1bef.jpg" },
  { name:"Jiniret",    member:"Hyunjin",   animal:"Furão",            img:"https://i.pinimg.com/736x/92/f1/f0/92f1f06ea263fdfad827cb3c6b956470.jpg" },
  { name:"Han Quokka", member:"Han",       animal:"Esquilo",          img:"https://i.pinimg.com/736x/7c/32/dc/7c32dc29d2aa04899ae6ea5036904ab8.jpg" },
  { name:"BbokAri",    member:"Felix",     animal:"Pinto",            img:"https://i.pinimg.com/1200x/ae/06/62/ae06620dbf96ac5f2559597fa61f12a4.jpg" },
  { name:"PuppyM",     member:"Seungmin",  animal:"Cachorro",         img:"https://i.pinimg.com/736x/2c/27/cf/2c27cf81307b9591a11d8c463b6d9857.jpg" },
  { name:"Fox I.Ny",   member:"I.N",       animal:"Raposa",           img:"https://i.pinimg.com/736x/62/c0/e1/62c0e18118e175467bd241e5ebb023f4.jpg" },
  { name:"TASY",       member:"STAY (fandom)", animal:"Tanuki",       img:"https://res.cloudinary.com/f3jwqtcy/image/upload/f_auto,q_auto/tasy_-_Imgur_iwnxjc" },
];

/* ── DADOS — Stream ── */
const streamLinks=[
  { type:"stream", icon:'<img src="spotify.svg" alt="Spotify" style="width:36px;height:36px;filter:brightness(0) saturate(100%) invert(71%) sepia(61%) saturate(500%) hue-rotate(95deg) brightness(101%) contrast(97%)">', name:"Spotify",     action:"Stream agora", url:"https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE", color:"#1ED760" },
  { type:"stream", icon:'<img src="youtube.svg" alt="YouTube" style="width:36px;height:36px;filter:brightness(0) saturate(100%) invert(17%) sepia(99%) saturate(7492%) hue-rotate(1deg) brightness(105%) contrast(116%)">', name:"YouTube",     action:"Assistir MVs", url:"https://www.youtube.com/@StrayKids", color:"#FF0000" },
  { type:"stream", icon:'<img src="applemusic.svg" alt="Apple Music" style="width:36px;height:36px;filter:brightness(0) saturate(100%) invert(20%) sepia(97%) saturate(4000%) hue-rotate(340deg) brightness(103%) contrast(102%)">', name:"Apple Music", action:"Stream agora", url:"https://music.apple.com/us/artist/stray-kids/1304823362", color:"#FA243C" },
  { type:"vote", icon:'<img src="https://mama.mnetplus.world/images/history/icon/icon-mnetplus.svg" alt="MAMA" style="width:36px;height:36px;object-fit:contain">', name:"MAMA Awards", action:"Votar agora", url:"https://mama.mnetplus.world/", color:"#e8192c" },
  { type:"vote", icon:'<img src="https://www.theamas.com/wp-content/uploads/2025/02/25AMA_Logo.png" alt="AMAs" style="width:60px;height:36px;object-fit:contain">', name:"AMAs", action:"Votar agora", url:"https://www.theamas.com/", color:"#ffffff" },
  { type:"vote", icon:'<img src="https://seoulmusicawards.com/assets/img/logo/figma/ic_logo.43695db77e.svg" alt="SMA" style="width:36px;height:36px;object-fit:contain">', name:"SMA", action:"Votar agora", url:"https://seoulmusicawards.com/en/overview/awards", color:"#ffffff" },
  { type:"vote", icon:'<img src="https://cf.asiaartistawards.com/asiaartistawards/img/img_logo.png" alt="AAA" style="width:60px;height:36px;object-fit:contain">', name:"AAA", action:"Votar agora", url:"https://www.asiaartistawards.com/", color:"#ffffff" },
];

/* ── DADOS — Quotes ── */
const quotes=[
  { text:"You make Stray Kids stay", context:"Slogan oficial do grupo", member:"OT8" },
  { text:"We go — the Stray Kids way", context:"Frase de palco", member:"OT8" },
  { text:"우리의 음악은 우리가 만든다 — Nossa música, nós fazemos.", context:"Filosofia do 3RACHA", member:"3RACHA" },
  { text:"SKZ — self-produced, self-expressed.", context:"Identidade do grupo", member:"OT8" },
  { text:"Stay, you make us stay.", context:"Mensagem para o fandom", member:"OT8" },
  { text:"I Purple You? No — I RED you.", context:"Brincadeira em show ao vivo", member:"Bang Chan" },
];

/* ── MODAL DO MEMBRO ── */
function openMemberDetail(idx){
  const m = members[idx];
  const modal = document.getElementById('memberModal');
  const imgSide = document.getElementById('modalImgSide');
  const infoSide = document.getElementById('modalInfoSide');
  if(!modal) return;

  imgSide.innerHTML = `<img src="${m.img}" onerror="this.style.opacity='0'" alt="${m.name}" style="width:100%;height:100%;object-fit:cover">`;
  infoSide.innerHTML = `
    <div class="modal-stage">${m.name}</div>
    <div class="modal-fullname">${m.kr} · ${m.full}</div>
    <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1rem">
      <span class="modal-pill">${m.unit}</span>
      <span class="modal-pill">${m.skzoo}</span>
    </div>
    <div class="modal-divider"></div>
    <div class="modal-stats">
      <div><div class="modal-stat-label">Aniversário</div><div class="modal-stat-value">${m.birthday}</div></div>
      <div><div class="modal-stat-label">Altura</div><div class="modal-stat-value">${m.height}</div></div>
      <div><div class="modal-stat-label">MBTI</div><div class="modal-stat-value">${m.mbti}</div></div>
      <div><div class="modal-stat-label">Nac.</div><div class="modal-stat-value">${m.nat}</div></div>
    </div>
    <div class="modal-divider"></div>
    <div class="modal-bio">${m.bio}</div>
    <div class="modal-divider"></div>
    <div>${m.facts.map(f=>`<div class="modal-fact">${f}</div>`).join('')}</div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

document.addEventListener('DOMContentLoaded', function(){

/* ── INTRO ── */
const introBtn = document.getElementById('introEnterBtn');
const introScreen = document.getElementById('introScreen');
if(introBtn && introScreen){
  introBtn.addEventListener('click', ()=>{
    introScreen.classList.add('out');
    setTimeout(()=>{ introScreen.style.display='none'; }, 800);
  });
}

/* ── HERO CANVAS ── */
(function(){
  const canvas = document.getElementById('heroCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles=[], mouse={x:0,y:0};
  function resize(){ W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e=>{ mouse.x=e.clientX; mouse.y=e.clientY; });
  function createParticles(){
    particles=[];
    const count=Math.min(120,Math.floor(W*H/8000));
    for(let i=0;i<count;i++){
      const type=Math.random()<.15?'star':Math.random()<.3?'ring':'dot';
      particles.push({ x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4, r:type==='star'?3:type==='ring'?Math.random()*3+2:Math.random()*1.8+.4, a:Math.random()*.8+.1, type, pulse:Math.random()*Math.PI*2, speed:Math.random()*.02+.005 });
    }
  }
  createParticles();
  window.addEventListener('resize', createParticles);
  function drawK(alpha){
    const cx=W/2,cy=H/2,size=Math.min(W,H)*.55;
    ctx.save(); ctx.globalAlpha=alpha; ctx.strokeStyle='#e8192c'; ctx.lineWidth=size*.035; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(cx-size*.18,cy-size*.38); ctx.lineTo(cx-size*.18,cy+size*.38); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx-size*.18,cy-size*.02); ctx.lineTo(cx+size*.22,cy-size*.38); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx-size*.18,cy-size*.02); ctx.lineTo(cx+size*.22,cy+size*.38); ctx.stroke();
    ctx.restore();
  }
  let frame=0;
  function draw(){
    ctx.clearRect(0,0,W,H); frame++;
    drawK(.025+Math.sin(frame*.012)*.01);
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<-10)p.x=W+10; if(p.x>W+10)p.x=-10; if(p.y<-10)p.y=H+10; if(p.y>H+10)p.y=-10;
      const dx=p.x-mouse.x,dy=p.y-mouse.y,dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<120){ p.vx+=dx/dist*.08; p.vy+=dy/dist*.08; }
      const speed=Math.sqrt(p.vx*p.vx+p.vy*p.vy);
      if(speed>.8){ p.vx=p.vx/speed*.8; p.vy=p.vy/speed*.8; }
      p.pulse+=p.speed;
      const pulseA=p.a*(.7+Math.sin(p.pulse)*.3);
      if(p.type==='star'){
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.pulse); ctx.fillStyle=`rgba(255,107,122,${pulseA})`;
        ctx.beginPath();
        for(let j=0;j<4;j++){ const angle=(j/4)*Math.PI*2; ctx.lineTo(Math.cos(angle)*p.r*2.5,Math.sin(angle)*p.r*2.5); ctx.lineTo(Math.cos(angle+Math.PI/4)*p.r*.8,Math.sin(angle+Math.PI/4)*p.r*.8); }
        ctx.closePath(); ctx.fill(); ctx.restore();
      } else if(p.type==='ring'){
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.strokeStyle=`rgba(232,25,44,${pulseA*.6})`; ctx.lineWidth=.8; ctx.stroke();
      } else {
        const grad=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*3);
        grad.addColorStop(0,`rgba(232,25,44,${pulseA})`); grad.addColorStop(1,'rgba(232,25,44,0)');
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r*3,0,Math.PI*2); ctx.fillStyle=grad; ctx.fill();
      }
    });
    for(let i=0;i<particles.length;i++) for(let j=i+1;j<particles.length;j++){
      const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<90){ ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.strokeStyle=`rgba(232,25,44,${(1-d/90)*.12})`; ctx.lineWidth=.5; ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── NAVBAR ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', ()=>{ navbar.classList.toggle('scrolled', window.scrollY>60); });
document.getElementById('navToggle')?.addEventListener('click', ()=>{
  document.getElementById('drawer')?.classList.add('open');
  document.getElementById('drawerOverlay')?.classList.add('open');
  document.body.style.overflow='hidden';
});
document.getElementById('drawerClose')?.addEventListener('click', closeDrawer);
document.getElementById('drawerOverlay')?.addEventListener('click', closeDrawer);

/* ── THEME TOGGLE ── */
document.getElementById('themeToggleBtn')?.addEventListener('click', ()=>{
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('themeToggleBtn').textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('skz-theme', isLight ? 'light' : 'dark');
});
if(localStorage.getItem('skz-theme')==='light'){
  document.body.classList.add('light-mode');
  const btn = document.getElementById('themeToggleBtn');
  if(btn) btn.textContent='☀️';
}

/* ── STATS COUNTER ── */
const statNums = document.querySelectorAll('.stat-num');
const statsObs = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    const el=entry.target, target=parseInt(el.dataset.target);
    let cur=0; const step=target/60;
    const t=setInterval(()=>{ cur=Math.min(cur+step,target); el.textContent=Math.floor(cur); if(cur>=target) clearInterval(t); },16);
    statsObs.unobserve(el);
  });
},{threshold:.5});
statNums.forEach(el=>statsObs.observe(el));

/* ── MEMBROS ── */
function renderMembers(){
  const grid = document.getElementById('membersGrid');
  if(!grid) return;
  grid.innerHTML='';
  grid.style.gridTemplateColumns='repeat(4,1fr)';
  members.forEach((m,i)=>{
    const card = document.createElement('div');
    card.className='member-card reveal';
    card.style.transitionDelay=`${i*.07}s`;
    card.innerHTML=`
      <div class="member-img-wrap">
        <img src="${m.img}" onerror="this.style.opacity='0'" alt="${m.name}" loading="lazy">
        <div class="member-overlay"></div>
        <div class="member-skzoo-badge"><img src="${m.skzooImg}" onerror="this.style.display='none'" alt="${m.skzoo}"></div>
        <div class="member-bottom">
          <span class="member-badge">${m.unit}</span>
          <div class="member-stage">${m.name}</div>
          <div class="member-name">${m.full}</div>
          <div class="member-role">${m.pos.split('/')[0].trim()}</div>
        </div>
      </div>`;
    card.addEventListener('click', ()=> openMemberDetail(i));
    grid.appendChild(card);
  });
}

/* ── DISCOGRAFIA ── */
function renderDiscografia(){
  const grid = document.getElementById('discoGrid');
  if(!grid) return;
  const SHOW=12; let showAll=false;
  function build(){
    grid.innerHTML='';
    const activeFilter=document.querySelector('.filter-btn.active')?.dataset.filter||'all';
    const list=activeFilter==='all'?(showAll?albums:albums.slice(0,SHOW)):albums.filter(a=>a.type===activeFilter);
    list.forEach(a=>{
      const card=document.createElement('div');
      card.className='disco-card reveal'; card.dataset.type=a.type;
      const imgH=a.img?`<img src="${a.img}" onerror="this.style.display='none'" alt="${a.name}" loading="lazy">`:`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--ac);opacity:.3">${a.name.charAt(0)}</div>`;
      card.innerHTML=`<div class="disco-cover">${imgH}<span class="disco-type-tag">${a.badge}</span></div><div class="disco-info"><div class="disco-name">${a.name}</div><div class="disco-year">${a.year} · ${a.tracks} faixa${a.tracks>1?'s':''}</div><div class="disco-track">▶ ${a.track}</div></div>`;
      grid.appendChild(card);
    });
    const ex=document.getElementById('discoToggleBtn'); if(ex) ex.remove();
    if(activeFilter==='all'){
      const btn=document.createElement('button');
      btn.id='discoToggleBtn'; btn.className='disco-toggle-btn';
      btn.textContent=showAll?'▲ Ver menos':`▼ Ver todos os ${albums.length} álbuns`;
      btn.addEventListener('click',()=>{ showAll=!showAll; build(); if(!showAll) grid.scrollIntoView({behavior:'smooth',block:'start'}); setTimeout(initReveal,50); });
      grid.insertAdjacentElement('afterend',btn);
    }
    setTimeout(initReveal,50);
  }
  build();
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active'); showAll=false; build();
    });
  });
}

/* ── TIMELINE ── */
function renderTimeline(){
  const container=document.getElementById('timelineContainer');
  if(!container) return;
  timelineEvents.forEach((ev,i)=>{
    const item=document.createElement('div');
    item.className='timeline-item reveal';
    const badge=ev.badge?`<span class="timeline-badge ${ev.gold?'gold':''}">${ev.badge}</span>`:'';
    const cardH=`<div class="timeline-year">${ev.year}</div><div class="timeline-event">${ev.event}</div><div class="timeline-desc">${ev.desc}</div>${badge}`;
    const dot=`<div class="timeline-dot"></div>`;
    const spacer=`<div class="timeline-spacer"></div>`;
    if(i%2===0){
      item.innerHTML=`<div class="timeline-side tl-left">${cardH}</div>${dot}${spacer}`;
    } else {
      item.innerHTML=`${spacer}${dot}<div class="timeline-side tl-right-content">${cardH}</div>`;
    }
    container.appendChild(item);
  });
}

/* ── TOURS ── */
function renderTours(){
  const grid=document.getElementById('toursGrid');
  if(!grid) return;
  tours.forEach(t=>{
    const card=document.createElement('div');
    card.className='tour-card reveal';
    card.innerHTML=`<div class="tour-era">${t.era}</div><div class="tour-name">${t.name}</div><div class="tour-desc">${t.desc}</div>${t.badges.map(b=>`<span class="tour-badge ${t.gold?'gold':''}">${b}</span>`).join('')}`;
    grid.appendChild(card);
  });
  // Countdown
  const target=new Date('2026-09-11T20:00:00-03:00');
  function updateCd(){
    const el=document.getElementById('rirCountdown');
    if(!el) return;
    const diff=target-new Date();
    if(diff<=0){ el.innerHTML='<div class="cd-unit"><span class="cd-num">JÁ ACONTECEU!</span><span class="cd-label">🎉</span></div>'; return; }
    const d=Math.floor(diff/86400000),h=Math.floor((diff%86400000)/3600000),m=Math.floor((diff%3600000)/60000),s=Math.floor((diff%60000)/1000);
    const unit=(n,l)=>`<div class="cd-unit"><span class="cd-num">${n}</span><span class="cd-label">${l}</span></div>`;
    el.innerHTML=unit(d,'Dias')+'<div class="cd-sep">:</div>'+unit(String(h).padStart(2,'0'),'Horas')+'<div class="cd-sep">:</div>'+unit(String(m).padStart(2,'0'),'Min')+'<div class="cd-sep">:</div>'+unit(String(s).padStart(2,'0'),'Seg');
  }
  updateCd(); setInterval(updateCd,1000);
}

/* ── CURIOSIDADES ── */
let currentFact='geral';
function renderFacts(tab){
  const grid=document.getElementById('factsGrid');
  if(!grid) return;
  grid.innerHTML='';
  factsData[tab].forEach((f,i)=>{
    const card=document.createElement('div');
    card.className='fact-card reveal';
    card.style.transitionDelay=`${i*.08}s`;
    card.innerHTML=`<div class="fact-tag">${f.tag}</div><div class="fact-text">${f.text}</div>`;
    grid.appendChild(card);
  });
  setTimeout(initReveal,50);
}
document.querySelectorAll('.facts-tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.facts-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active'); currentFact=btn.dataset.tab; renderFacts(currentFact);
  });
});

/* ── MVs ── */
function renderMVs(){
  const featured=document.getElementById('mvsFeatured');
  const grid=document.getElementById('mvsCarousel');
  if(!grid) return;
  const first=mvs[0];
  if(featured){
    featured.innerHTML=`<a href="https://www.youtube.com/watch?v=${first.id}" target="_blank" rel="noopener noreferrer" class="mv-featured-card"><div class="mv-featured-thumb"><img src="https://img.youtube.com/vi/${first.id}/maxresdefault.jpg" onerror="this.src='https://img.youtube.com/vi/${first.id}/hqdefault.jpg'" alt="${first.title}" loading="lazy"><div class="mv-featured-overlay"><div class="mv-featured-play">▶</div><div class="mv-featured-info"><div class="mv-featured-badge">Mais recente</div><div class="mv-featured-title">${first.title}</div><div class="mv-featured-year">${first.year}</div></div></div></div></a>`;
  }
  mvs.slice(1).forEach(mv=>{
    const card=document.createElement('a');
    card.className='mv-card';
    card.href=`https://www.youtube.com/watch?v=${mv.id}`; card.target='_blank'; card.rel='noopener noreferrer';
    card.innerHTML=`<div class="mv-thumb"><img src="https://img.youtube.com/vi/${mv.id}/mqdefault.jpg" onerror="this.src='https://img.youtube.com/vi/default/hqdefault.jpg'" alt="${mv.title}" loading="lazy"><div class="mv-play"><span>▶</span></div></div><div class="mv-info"><div class="mv-title">${mv.title}</div><div class="mv-year">${mv.year}</div>${mv.views?`<div class="mv-views">▶ ${mv.views} views</div>`:''}</div>`;
    grid.appendChild(card);
  });
  setTimeout(()=>{
    const g=document.getElementById('mvsCarousel');
    if(g){
      let sx=0;
      g.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;},{passive:true});
      g.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)g.scrollBy({left:dx<0?300:-300,behavior:'smooth'});});
    }
  },500);
}

/* ── GALERIA ── */
function renderGallery(){
  const grid=document.getElementById('galleryGrid');
  if(!grid) return;
  gallery.forEach(g=>{
    const item=document.createElement('div');
    item.className='gallery-item';
    item.innerHTML=`<img src="${g.url}" onerror="this.style.opacity='0.2'" alt="${g.alt}" loading="lazy"><div class="gallery-hover"><span class="gallery-name">${g.alt}</span></div>`;
    item.addEventListener('click',()=>{ document.getElementById('lbImg').src=g.url; document.getElementById('lightbox').classList.remove('hidden'); });
    grid.appendChild(item);
  });
  document.getElementById('lbClose')?.addEventListener('click',()=>document.getElementById('lightbox').classList.add('hidden'));
  document.getElementById('lightbox')?.addEventListener('click',e=>{ if(e.target===e.currentTarget) document.getElementById('lightbox').classList.add('hidden'); });
  // Swipe lightbox
  const lb=document.getElementById('lightbox');
  if(lb){
    let sx=0;
    lb.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;},{passive:true});
    lb.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-sx;
      if(Math.abs(dx)<50) return;
      const cur=document.getElementById('lbImg').src;
      const idx=gallery.findIndex(g=>cur.includes(g.url.split('/').pop().split('?')[0]));
      if(idx===-1) return;
      const next=dx<0?(idx+1)%gallery.length:(idx-1+gallery.length)%gallery.length;
      document.getElementById('lbImg').src=gallery[next].url;
    });
  }
}

/* ── SKZOO ── */
function renderSkzoo(){
  const grid=document.getElementById('skzooGrid');
  if(!grid) return;
  grid.style.gridTemplateColumns='repeat(4,1fr)';
  skzoo.forEach(s=>{
    const card=document.createElement('div');
    card.className='skzoo-card reveal';
    card.innerHTML=`<div class="skzoo-img-wrap"><img src="${s.img}" onerror="this.style.opacity='0'" alt="${s.name}" loading="lazy"></div><div class="skzoo-info"><div class="skzoo-name">${s.name}</div><div class="skzoo-member">${s.member}</div><span class="skzoo-badge">${s.animal}</span></div>`;
    grid.appendChild(card);
  });
}

/* ── STREAM ── */
function renderStream(){
  const grid=document.getElementById('streamGrid');
  if(!grid) return;
  const makeSection=(title,items)=>{
    const label=document.createElement('div');
    label.className='stream-section-label'; label.textContent=title;
    grid.appendChild(label);
    const row=document.createElement('div');
    row.className='stream-row';
    items.forEach(s=>{
      const card=document.createElement('a');
      card.className='stream-card'; card.href=s.url; card.target='_blank'; card.rel='noopener noreferrer';
      card.style.setProperty('--card-color',s.color);
      card.innerHTML=`<div class="stream-icon">${s.icon}</div><div class="stream-name">${s.name}</div><div class="stream-action">${s.action}</div>`;
      row.appendChild(card);
    });
    grid.appendChild(row);
  };
  makeSection('🎵 Streaming', streamLinks.filter(s=>s.type==='stream'));
  makeSection('🗳️ Votação', streamLinks.filter(s=>s.type==='vote'));
}

/* ── QUOTES ── */
function renderQuotes(){
  const grid=document.getElementById('quotesSection');
  if(!grid) return;
  quotes.forEach((q,i)=>{
    const card=document.createElement('div');
    card.className='quote-card reveal';
    card.style.transitionDelay=`${i*.08}s`;
    card.innerHTML=`<div class="quote-mark">"</div><div class="quote-text">${q.text}</div><div class="quote-meta"><span class="quote-song">${q.context}</span><span class="quote-member">${q.member}</span></div>`;
    grid.appendChild(card);
  });
}

/* ── PARA NOVOS STAYs ── */
function renderNewStays(){
  const grid=document.getElementById('newStaysGrid');
  if(!grid) return;
  const cards=[
    { icon:'🎵', title:'Por onde começar', text:'Comece pelo MV de <strong>God\'s Menu</strong> (2020). Depois ouça <strong>MIROH</strong> e <strong>Thunderous</strong>. Para o álbum completo, vá direto para o <strong>5-STAR</strong>.' },
    { icon:'📺', title:'O que assistir', text:'Assista <strong>SKZ CODE</strong> no YouTube para conhecer a personalidade de cada membro. Depois experimente o <strong>2 Kids Room</strong> para conversas mais íntimas.' },
    { icon:'🤝', title:'Como apoiar', text:'Stream nas plataformas conta para os charts. Vote no <strong>MAMA Awards</strong> durante o período de votação. Compre álbuns em lojas certificadas <strong>Hanteo</strong>.' },
    { icon:'📖', title:'Glossário STAY', glossary:[{word:'STAY',def:'Nome oficial do fandom'},{word:'OT8',def:'Original Eight — os 8 membros'},{word:'3RACHA',def:'Sub-grupo produtor'},{word:'Racha',def:'As 3 unidades do grupo'},{word:'Maknae',def:'O mais jovem — I.N'},{word:'SKZoo',def:'Personagens animais oficiais'},{word:'Self-prod',def:'O grupo produz suas músicas'},{word:'Daesang',def:'Maior prêmio do K-pop'},{word:'TASY',def:'Personagem oficial do fandom STAY — anagrama de STAY'}] },
    { icon:'💿', title:'Discografia em ordem', text:'<strong>2018:</strong> Mixtape → I Am NOT → WHO → YOU<br><strong>2019:</strong> Clé 1-2-Levanter<br><strong>2020:</strong> GO LIVE<br><strong>2021:</strong> NOEASY<br><strong>2022:</strong> ODDINARY → MAXIDENT<br><strong>2023:</strong> 5-STAR → ROCK-STAR<br><strong>2024:</strong> ATE → HOP<br><strong>2025:</strong> KARMA → DO IT<br><strong>2026:</strong> Endless Sun · RUN IT · THIS & THAT' },
    { icon:'🌍', title:'Sobre o grupo', text:'8 membros, fundado em 2018 pela <strong>JYP Entertainment</strong>. O sub-grupo <strong>3RACHA</strong> produz quase tudo. Já venderam <strong>mais de 40 milhões de álbuns</strong> e têm <strong>8 álbuns consecutivos #1 no Billboard 200</strong>.' },
    { icon:'🎤', title:'Unidades do grupo', text:'<strong>3RACHA</strong> — Bang Chan, Han e Changbin (produção e rap)<br><strong>Dance Racha</strong> — Lee Know, Hyunjin e Felix (dança)<br><strong>Vocal Racha</strong> — Seungmin e I.N (vocais)' },
    { icon:'🏆', title:'Conquistas históricas', text:'Headlinaram o <strong>Lollapalooza Chicago</strong> (2023) e o <strong>Governors Ball</strong> em Nova York (2026) — primeiro K-pop headliner. Foram ao <strong>Met Gala 2024</strong> juntos. O dominATE Tour foi o <strong>maior tour K-pop da história</strong>. Os 8 membros são <strong>membros votantes da Recording Academy</strong> (Grammy).' },
  ];
  cards.forEach(c=>{
    const card=document.createElement('div');
    card.className='stay-card reveal';
    let inner=`<div class="stay-card-icon">${c.icon}</div><div class="stay-card-title">${c.title}</div>`;
    if(c.glossary) inner+=`<div class="stay-glossary">${c.glossary.map(g=>`<div class="stay-term"><span class="stay-term-word">${g.word}</span><span class="stay-term-def">${g.def}</span></div>`).join('')}</div>`;
    else inner+=`<div class="stay-card-text">${c.text}</div>`;
    card.innerHTML=inner;
    grid.appendChild(card);
  });
}

/* ── SCROLL REVEAL ── */
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}

/* ── MODAL MEMBRO ── */
document.getElementById('modalCloseBtn')?.addEventListener('click', ()=>{
  document.getElementById('memberModal')?.classList.add('hidden');
  document.body.style.overflow='';
});
document.getElementById('memberModal')?.addEventListener('click', e=>{
  if(e.target===e.currentTarget){
    e.target.classList.add('hidden');
    document.body.style.overflow='';
  }
});

/* ── BACK TO TOP ── */
const btt=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{ btt?.classList.toggle('visible',window.scrollY>400); });
btt?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ── SHARE BAR ── */
const shareBar=document.getElementById('shareBar');
window.addEventListener('scroll',()=>{
  const max=document.body.scrollHeight-window.innerHeight;
  shareBar?.classList.toggle('visible',window.scrollY>600&&window.scrollY<max-600);
});

/* ── BUSCA GLOBAL ── */
document.getElementById('searchOpenBtn')?.addEventListener('click',()=>{
  document.getElementById('searchWrap')?.classList.add('open');
  document.getElementById('searchInput')?.focus();
  document.body.style.overflow='hidden';
});
document.getElementById('searchCloseBtn')?.addEventListener('click',()=>{
  document.getElementById('searchWrap')?.classList.remove('open');
  document.body.style.overflow='';
});
document.getElementById('searchWrap')?.addEventListener('click',e=>{ if(e.target===e.currentTarget){ e.target.classList.remove('open'); document.body.style.overflow=''; } });
document.addEventListener('keydown',e=>{
  if(e.key==='/'&&document.activeElement.tagName!=='INPUT'){ e.preventDefault(); document.getElementById('searchWrap')?.classList.add('open'); document.getElementById('searchInput')?.focus(); document.body.style.overflow='hidden'; }
  if(e.key==='Escape'){ document.getElementById('searchWrap')?.classList.remove('open'); document.body.style.overflow=''; }
});
document.getElementById('searchInput')?.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  const results=document.getElementById('searchResults');
  if(!results) return;
  if(!q){ results.innerHTML=''; return; }
  const index=[
    ...members.map(m=>({title:m.name,sub:m.pos,tag:'Membro',img:m.img,anchor:'#membros'})),
    ...albums.map(a=>({title:a.name,sub:`${a.year} · ${a.track}`,tag:'Álbum',img:a.img,anchor:'#discografia'})),
    ...Object.values(factsData).flat().map(f=>({title:f.tag,sub:f.text.replace(/<[^>]+>/g,'').substring(0,80)+'…',tag:'Curiosidade',anchor:'#curiosidades'})),
  ];
  const hits=index.filter(item=>item.title.toLowerCase().includes(q)||item.sub?.toLowerCase().includes(q));
  if(!hits.length){ results.innerHTML=`<div class="search-empty">Nenhum resultado para "<strong>${q}</strong>"</div>`; return; }
  results.innerHTML=hits.slice(0,12).map(h=>`<button class="search-result-item" type="button" data-anchor="${h.anchor||''}">${h.img?`<img class="search-result-thumb" src="${h.img}" alt="${h.title}" loading="lazy">`:`<div class="search-result-thumb" style="display:flex;align-items:center;justify-content:center;font-size:1.2rem;background:var(--bg-3)">${h.tag==='Membro'?'👤':h.tag==='Álbum'?'💿':'💡'}</div>`}<div class="search-result-info"><div class="search-result-title">${h.title}</div><div class="search-result-sub">${h.sub||''}</div></div><span class="search-result-tag">${h.tag}</span></button>`).join('');
});
document.getElementById('searchResults')?.addEventListener('click',e=>{
  const item=e.target.closest('.search-result-item');
  if(!item) return;
  const anchor=item.dataset.anchor;
  if(anchor) document.querySelector(anchor)?.scrollIntoView({behavior:'smooth'});
  document.getElementById('searchWrap')?.classList.remove('open');
  document.body.style.overflow='';
});

/* ── MODO CLARO ── */
function applyLightModeInlineFixes(isLight){
  document.querySelectorAll('[style*="color:#fff"],[style*="color: #fff"]').forEach(el=>{
    if(isLight){ el.setAttribute('data-oc',el.style.color||''); el.style.color='#111'; el.style.webkitTextFillColor='#111'; }
    else{ el.style.color=el.getAttribute('data-oc')||''; el.style.webkitTextFillColor=''; }
  });
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
renderQuotes();
renderNewStays();
setTimeout(initReveal, 200);

}); // DOMContentLoaded
