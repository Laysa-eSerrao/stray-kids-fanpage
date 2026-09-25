/* Stray Kids Fan Page — script.js | Autora: Laysa Serrão */

/* ── ÍCONES ── */
const ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path></svg>';
const ICON_SUN  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>';

/* ── SHARE — funções globais ── */
function shareTwitter(){ window.open('https://twitter.com/intent/tweet?text=Conhe%C3%A7a+o+Stray+Kids!&url='+encodeURIComponent(location.href),'_blank','noopener,noreferrer'); }
function shareWhatsapp(){ window.open('https://wa.me/?text=Conhe%C3%A7a+o+Stray+Kids!+'+encodeURIComponent(location.href),'_blank','noopener,noreferrer'); }
function copyLink(){
  navigator.clipboard.writeText(location.href).then(()=>{
    const btns = document.querySelectorAll('#shareBar button');
    const btn = btns[btns.length-1];
    if(btn){ btn.textContent='Copiado!'; setTimeout(()=>btn.textContent='Copiar link',2000); }
  });
}
function closeDrawer(){
  document.getElementById('drawer')?.classList.remove('open');
  document.getElementById('drawerOverlay')?.classList.remove('open');
  document.body.style.overflow='';
}

/* ── FOCUS TRAP — modais ── */
function trapFocus(modal, onClose){
  const anterior = document.activeElement;
  const seletor = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function handler(e){
    if(e.key === 'Escape'){
      onClose();
      return;
    }
    if(e.key !== 'Tab') return;
    const focaveis = Array.from(modal.querySelectorAll(seletor)).filter(el => el.offsetParent !== null);
    if(!focaveis.length) return;
    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    if(e.shiftKey && document.activeElement === primeiro){
      e.preventDefault();
      ultimo.focus();
    } else if(!e.shiftKey && document.activeElement === ultimo){
      e.preventDefault();
      primeiro.focus();
    }
  }

  modal.addEventListener('keydown', handler);

  return function liberar(){
    modal.removeEventListener('keydown', handler);
    if(anterior && typeof anterior.focus === 'function') anterior.focus();
  };
}

/* ── DADOS — Membros ── */
const members=[
  { name:"Bang Chan", kr:"방찬", full:"Christopher Bang", pos:"Leader / Rapper / Vocal", unit:"3RACHA", color:"#e8192c",
    img:"assets/members/member-bangchan.jpg",
    skzooImg:"assets/skzoo/skzoo-wolfchan.jpg",
    birthday:"3 out 1997", height:"171 cm", mbti:"ENFJ", nat:"Coreia / Austrália", skzoo:"Wolf Chan",
    bio:"Líder e produtor principal. Passou 7 anos como trainee na JYP. Criou o 3RACHA antes do debut. Realizava lives semanais chamadas 'Chan's Room' (2019–2023). Fala coreano, inglês, japonês e um pouco de chinês. Embaixador da Fendi desde 2025.",
    facts:["Criou o sub-grupo 3RACHA ainda como trainee","Desenhou o logo completo do Stray Kids à mão antes do debut","Passou 7 anos como trainee — o mais longo do grupo"]
  },
  { name:"Lee Know", kr:"리노", full:"Lee Min-ho", pos:"Dancer / Rapper / Vocal", unit:"Dance Racha", color:"#cc2222",
    img:"assets/members/member-leeknow.jpg",
    skzooImg:"assets/skzoo/skzoo-leebit.jpg",
    birthday:"25 out 1998", height:"172 cm", mbti:"ISFP", nat:"Sul-coreano", skzoo:"Leebit",
    bio:"Um dos melhores dançarinos da 4ª geração. Tem 3 gatos: Soonie, Doongie e Dori. Embaixador global da Gucci desde 2025. Adora ler — autor favorito é Keigo Higashino.",
    facts:["Estava no grupo de apoio do BTS antes de entrar no SKZ","Tem 3 gatos: Soonie, Doongie e Dori","Ganhou o apelido 'Eye Smile' pelo sorriso característico"]
  },
  { name:"Changbin", kr:"창빈", full:"Seo Chang-bin", pos:"Rapper / Vocal / Producer", unit:"3RACHA", color:"#b01a1a",
    img:"assets/members/member-changbin.jpg",
    skzooImg:"assets/skzoo/skzoo-dwaekki.jpg",
    birthday:"11 ago 1999", height:"167 cm", mbti:"ESTP", nat:"Sul-coreano", skzoo:"Dwaekki",
    bio:"Famoso pelo rap extremamente rápido. Menor do grupo em altura (167cm), mas com enorme presença de palco. Produz e escreve grande parte das letras do SKZ junto com Bang Chan e Han. Embaixador global da Autry (2026) — primeira celebridade a representar a marca italiana de calçados.",
    facts:["Tem um dos raps mais rápidos do K-pop","167cm — menor do grupo mas enorme presença de palco","Escreve letras poderosas sobre superação e identidade"]
  },
  { name:"Hyunjin", kr:"황현진", full:"Hwang Hyun-jin", pos:"Dancer / Rapper / Vocal", unit:"Dance Racha", color:"#e8192c",
    img:"assets/members/member-hyunjin.jpg",
    skzooImg:"assets/skzoo/skzoo-jiniret.jpg",
    birthday:"20 mar 2000", height:"179 cm", mbti:"INFP", nat:"Sul-coreano", skzoo:"Jiniret",
    bio:"O mais alto do grupo. Além de idol, é pintor e realizou exposições de arte. Embaixador global da Cartier (2024), Givenchy Beauty (2025) e Guess (2026).",
    facts:["Além de idol é pintor — já realizou exposições oficiais","179cm — o mais alto do grupo","Embaixador da Cartier, Givenchy Beauty e Guess"]
  },
  { name:"Han", kr:"한", full:"Han Ji-sung", pos:"Rapper / Vocal / Producer", unit:"3RACHA", color:"#cc2222",
    img:"assets/members/member-han.jpg",
    skzooImg:"assets/skzoo/skzoo-hanquokka.jpg",
    birthday:"14 set 2000", height:"170 cm", mbti:"INFP", nat:"Coreano (criado na Malásia)", skzoo:"Han Quokka",
    bio:"Parte do trio produtor 3RACHA. Considerado um dos letristas mais criativos do K-pop. Cresceu na Malásia e voltou à Coreia para perseguir o sonho. Embaixador global da Tod's (2026) — estreou na Milan Fashion Week pelo show Menswear SS27 da marca.",
    facts:["Cresceu em Kuala Lumpur, Malásia","Escreve letras desde muito jovem","O Han Quokka foi inspirado no animal sorridente da Austrália"]
  },
  { name:"Felix", kr:"필릭스", full:"Lee Yong-bok", pos:"Dancer / Rapper / Vocal", unit:"Dance Racha", color:"#b01a1a",
    img:"assets/members/member-felix.jpg",
    skzooImg:"assets/skzoo/skzoo-bbokari.jpg",
    birthday:"15 set 2000", height:"171 cm", mbti:"ENFP", nat:"Australiano", skzoo:"BbokAri",
    bio:"Único membro nascido fora da Ásia (Sydney, Austrália). Famoso pela voz profunda inconfundível. É o membro com mais parcerias de marca do grupo. Embaixador global da Louis Vuitton (2023), HERA (primeiro embaixador masculino da marca, 2025), Adidas Global Icon (2026) e Gong Cha (2025). Embaixador de Goodwill da UNICEF Coreia (2024). Também representa Samsung, Gentle Monster, Happiz, BB.Q Chicken e a campanha Hanbok Wave. Colaborou com LiSA na abertura do anime Solo Leveling 2ª temporada (2025). Conquistou 63 medalhas em Taekwondo antes de ser idol.",
    facts:["Embaixador global da Louis Vuitton, Adidas, HERA e Gong Cha — o membro com mais parcerias do grupo","Goodwill Ambassador da UNICEF Coreia desde 2024","Conquistou 63 medalhas em Taekwondo antes de ser idol"]
  },
  { name:"Seungmin", kr:"승민", full:"Kim Seung-min", pos:"Vocalist", unit:"Vocal Racha", color:"#e8192c",
    img:"assets/members/member-seungmin.jpg",
    skzooImg:"assets/skzoo/skzoo-puppym.jpg",
    birthday:"22 set 2000", height:"178 cm", mbti:"ISFJ", nat:"Sul-coreano", skzoo:"PuppyM",
    bio:"Principal vocalista. Apaixonado por beisebol desde a infância, chegou a praticar o esporte quando criança e já foi convidado como arremessador cerimonial em jogos profissionais. Torce pelo Doosan Bears. Embaixador da Burberry.",
    facts:["Praticou beisebol na infância e já foi arremessador cerimonial em jogo profissional","Torce pelo time Doosan Bears","Apelido 'Puppy Seungmin' pelo sorriso"]
  },
  { name:"I.N", kr:"아이엔", full:"Yang Jeong-in", pos:"Vocalist / Dancer", unit:"Vocal Racha", color:"#cc2222",
    img:"assets/members/member-in.jpg",
    skzooImg:"assets/skzoo/skzoo-foxiny.jpg",
    birthday:"8 fev 2001", height:"173 cm", mbti:"INFP", nat:"Sul-coreano", skzoo:"Fox I.Ny",
    bio:"Maknae (caçula) do grupo. Habilidade especial: cantar trot. Embaixador da Bottega Veneta e Damiani.",
    facts:["Maknae do grupo — nascido em 2001","Sabe cantar trot — estilo musical coreano tradicional","Fox I.Ny escolhido pela astúcia e charme"]
  }
];

/* ── DADOS — Álbuns ── */
const albums=[
  { year:"2026", name:"November 11th (11월 11일)", badge:"Single",                  type:"single",   track:"November 11th", tracks:1, img:"assets/albums/November-11th.png",
    desc:"Single lançado em 10 de setembro de 2026, o trabalho coletivo mais recente do grupo até o momento.",
    tracklist:["November 11th (11월 11일)"] },
  { year:"2026", name:"SKZ-REPLAY 2026 Pt.1", badge:"Compilação",              type:"compilation", track:"SKZ-REPLAY 2026", tracks:17, img:"assets/albums/SKZ-REPLAY-2026-Pt.1.png",
    desc:"Primeira parte da compilação SKZ-REPLAY de 2026, lançada em 1º de agosto, reunindo faixas dos projetos SKZ-RECORD e SKZ-PLAYER.",
    tracklist:["Compilação de faixas do SKZ-RECORD e SKZ-PLAYER"] },
  { year:"2026", name:"THIS & THAT",         badge:"Mini Álbum · BB #1",          type:"ep",          track:"This & That",    tracks:8,  img:"assets/albums/this-and-that.jpg",
    tracklist:["RUN IT","This & That","After You","FARMING","I Do","Way Out","Back Then","This & That (Festival ver.)"],
    desc:"Décimo mini álbum e maior estreia da carreira nos Estados Unidos. Entrou em #1 na Billboard 200 com 369 mil unidades equivalentes, tornando o grupo o primeiro ato da história a estrear seus nove primeiros álbuns no topo da parada. Produção integral do 3RACHA." },
  { year:"2026", name:"RUN IT",              badge:"Single · Pre-release",        type:"single",      track:"RUN IT",         tracks:1,  img:"assets/albums/run-it.jpg",
    tracklist:["RUN IT"],
    desc:"Single lançado em 24 de junho de 2026 que também dá nome à nova world tour. Produzido com participação do 3RACHA, narra a jornada do grupo desde os primeiros passos até se tornarem um dos maiores atos do K-pop." },
  { year:"2026", name:"Endless Sun",         badge:"Single · Collab",             type:"single",      track:"Endless Sun",    tracks:1,  img:"assets/albums/endless-sun.jpg",
    tracklist:["Endless Sun"],
    desc:"Single em colaboração com a marca Bioré UV, lançado em março de 2026 como parte de campanha 'Sunlight Is Your Spotlight'." },
  { year:"2026", name:"별, 빛 (STAY)",        badge:"Single",                      type:"single",      track:"별, 빛 (STAY)",   tracks:1,  img:"assets/albums/stay-single.jpg",
    tracklist:["별, 빛 (STAY)"],
    desc:"Single digital comemorativo dos oito anos do grupo, lançado em 25 de março de 2026 e feito especialmente para o fandom. Han e Seungmin participaram da composição e assinaram a letra." },
  { year:"2025", name:"DO IT",              badge:"Mini Álbum · SKZ IT Tape",     type:"ep",          track:"Do It",          tracks:5,  img:"assets/albums/do-it.jpg",
    tracklist:["Do It","DIVINE — 신선놀음","Holiday","Photobook","Do It (Festival Version)"],
    desc:"SKZ IT Tape com 5 faixas. Do It e DIVINE foram os destaques, explorando sonoridades mais suaves e experimentais." },
  { year:"2025", name:"KARMA",              badge:"Álbum · BB #1",               type:"full",        track:"CEREMONY",       tracks:11, img:"assets/albums/karma.jpg",
    tracklist:["BLEEP","CEREMONY","CREED","MESS","In My Head","Half Time","Phoenix","Ghost","0801","CEREMONY (Festival Version)","CEREMONY (English Version)"],
    desc:"Quarto álbum de estúdio e o mais premiado da carreira — rendeu Daesang no MAMA, Golden Disc e AAA. CEREMONY é a faixa principal." },
  { year:"2025", name:"Hollow",             badge:"EP · Japonês",                type:"japanese",    track:"Hollow",         tracks:5,  img:"assets/albums/hollow.jpg",
    tracklist:["Hollow","Parade","Never Alone","just a little","宿命 (Shukumei)"],
    desc:"Terceiro miniálbum japonês com 5 faixas originais. Venceu Album of the Year Asia no Japan Gold Disc Awards 2026." },
  { year:"2025", name:"Mixtape: dominATE",  badge:"Mini Álbum · 7º Aniversário", type:"ep",          track:"Truman",         tracks:5,  img:"assets/albums/dominate.jpg",
    tracklist:["GIANT (Korean Version)","Burnin' Tires (Changbin & I.N)","Truman (Felix & Han)","ESCAPE (Bang Chan & Hyunjin)","CINEMA (Lee Know & Seungmin)"],
    desc:"Projeto especial de aniversário com 5 faixas de duplas dos membros, lançado no 7º aniversário do grupo." },
  { year:"2024", name:"HOP",               badge:"Mini Álbum · SKZHOP Hiptape · BB #1", type:"ep",  track:"Walkin On Water", tracks:12, img:"assets/albums/hop.jpg",
    tracklist:["Walkin On Water","Bounce Back","U (feat. TABLO)","Railway (Bang Chan)","Unfair (Felix)","HALLUCINATION (I.N)","Youth (Lee Know)","So Good (Hyunjin)","ULTRA (Changbin)","Hold my hand (Han)","As we are (Seungmin)","Walkin On Water (HIP Version)"],
    desc:"SKZHOP Hiptape com faixas solo de cada membro além das músicas do grupo. Walkin On Water é a faixa principal." },
  { year:"2024", name:"GIANT",             badge:"Álbum · Japonês",              type:"japanese",    track:"GIANT",          tracks:10, img:"assets/albums/giant.jpg",
    tracklist:["GIANT","Chk Chk Boom (Japanese Version)","NIGHT","Falling Up","WHY?","Saiyan","Aiwokuretanoninaze","Christmas Love","NIGHT (English Version)","Falling Up (English Version)"],
    desc:"Segundo álbum japonês de estúdio apoiado por NIGHT, Falling Up e GIANT como singles." },
  { year:"2024", name:"SLASH",             badge:"Single",                        type:"single",      track:"SLASH",          tracks:1,  img:"assets/albums/slash.jpg",
    tracklist:["SLASH"],
    desc:"Single lançado em 2024 como parte da trilha sonora de Deadpool & Wolverine." },
  { year:"2024", name:"ATE",               badge:"Mini Álbum · BB #1",           type:"ep",          track:"Chk Chk Boom",   tracks:8,  img:"assets/albums/ate.jpg",
    tracklist:["MOUNTAINS","Chk Chk Boom","JJAM","I Like It","Runners","twilight","Stray Kids","Chk Chk Boom (Festival Version)"],
    desc:"Nono miniálbum com Chk Chk Boom como faixa principal, misturando hip-hop e pop com referências ao universo do grupo." },
  { year:"2024", name:"Lose My Breath",    badge:"Single",                        type:"single",      track:"Lose My Breath", tracks:1,  img:"assets/albums/lose-my-breath.jpg",
    tracklist:["Lose My Breath (feat. Charlie Puth)"],
    desc:"Colaboração com Charlie Puth lançada em 2024, misturando K-pop com pop ocidental." },
  { year:"2024", name:"Come Play (Arcane)",badge:"Single · OST",                  type:"single",      track:"Come Play",      tracks:1,  img:"assets/albums/come-play.jpg",
    tracklist:["Come Play"],
    desc:"Faixa da trilha sonora de Arcane, a animação da Netflix baseada em League of Legends — jogo favorito de Felix." },
  { year:"2023", name:"★★★★★ (5-STAR)",   badge:"Álbum · BB #1",               type:"full",        track:"S-Class",        tracks:12, img:"assets/albums/5-star.jpg",
    tracklist:["Hall of Fame","S-Class","ITEM","Super Bowl","TOPLINE (feat. Tiger JK)","DLC","GET LIT","Collision","FNF","Youtiful","THE SOUND (Korean Version)","Mixtape: Time Out"],
    desc:"Terceiro álbum de estúdio e maior recorde de pré-vendas da carreira, com mais de 5,13 milhões de encomendas antes do lançamento. S-Class se tornou um dos maiores hits do grupo e rendeu o prêmio de Best K-Pop no VMA 2023." },
  { year:"2023", name:"ROCK-STAR",         badge:"Mini Álbum · BB #1",           type:"ep",          track:"LALALALA",       tracks:8,  img:"assets/albums/rock-star.jpg",
    tracklist:["MEGAVERSE","LALALALA","BLIND SPOT","COMFLEX","Cover Me","Leave","Social Path (Korean Ver. feat. LiSA)","LALALALA (Rock Version)"],
    desc:"LALALALA foi a primeira música do grupo a entrar no Billboard Hot 100. Era mais sombria e rock do Stray Kids." },
  { year:"2023", name:"Social Path EP",    badge:"EP · Japonês",                 type:"japanese",    track:"Social Path",    tracks:5,  img:"assets/albums/social-path-ep.jpg",
    tracklist:["Social Path (feat. LiSA)","Super Bowl (Japanese Version)","Butterflies","Social Path (Instrumental)","Super Bowl (Japanese Version, Instrumental)"],
    desc:"EP japonês com Social Path (feat. LiSA) como destaque — colaboração com a cantora de anime mais famosa do Japão." },
  { year:"2022", name:"MAXIDENT",          badge:"Mini Álbum · BB #1",           type:"ep",          track:"CASE 143",       tracks:8,  img:"assets/albums/maxident.jpg",
    tracklist:["CASE 143","CHILL","Give Me Your TMI","SUPER BOARD","3RACHA (Bang Chan, Changbin & Han)","TASTE (Lee Know, Hyunjin & Felix)","Can't Stop (Seungmin & I.N)","CIRCUS (Korean Version)"],
    desc:"Sétimo miniálbum com CASE 143 como faixa principal. Segundo álbum consecutivo a estrear em #1 na Billboard 200, confirmando a sequência iniciada pelo ODDINARY no mesmo ano." },
  { year:"2022", name:"ODDINARY",          badge:"Mini Álbum · BB #1",           type:"ep",          track:"MANIAC",         tracks:7,  img:"assets/albums/oddinary.jpg",
    tracklist:["VENOM","MANIAC","Charmer","FREEZE","Lonely St.","Waiting For Us (Bang Chan, Lee Know, Seungmin & I.N)","Muddy Water (Changbin, Hyunjin, Han & Felix)"],
    desc:"Sexto miniálbum e primeiro #1 no Billboard 200 — marco histórico. MANIAC virou o maior hit da era." },
  { year:"2022", name:"CIRCUS",            badge:"EP · Japonês",                 type:"japanese",    track:"CIRCUS",         tracks:6,  img:"assets/albums/circus.jpg",
    tracklist:["CIRCUS","Fairytale","VENOM (Japanese Version)","MANIAC (Japanese Version)","Silent Cry (Japanese Version)","Your Eyes"],
    desc:"Segundo miniálbum japonês com a inconfundível faixa título CIRCUS." },
  { year:"2022", name:"SKZ-REPLAY",        badge:"Compilação",                   type:"compilation", track:"Limbo",          tracks:26, img:"assets/albums/skz-replay.jpg",
    tracklist:["A-Side: FAM, Connected, Limbo, Doodle, Love Untold, RUN, Deep End, Stars and Raindrops, Hug Me, #LoveSTAY","B-Side: ZONE, Close, Streetlight, I Hate to Admit, I GOT IT, Miss You, Maknae on Top, Alien, Because, Piece of a Puzzle, Wish You Back, HaPpY, Up All Night, Drive, ice.cream"],
    desc:"Compilação de músicas do SKZ-RECORD e SKZ-PLAYER reunindo solos e colaborações internas." },
  { year:"2021", name:"Christmas EveL",    badge:"Mini Álbum · Natal",           type:"ep",          track:"Christmas EveL", tracks:4,  img:"assets/albums/christmas-evel.jpg",
    tracklist:["Christmas EveL","24 to 25","Winter Falls","DOMINO (English Version)"],
    desc:"Single álbum especial de fim de ano com o clássico natalino Christmas EveL e Winter Falls." },
  { year:"2021", name:"NOEASY",            badge:"Álbum",                        type:"full",        track:"Thunderous",     tracks:14, img:"assets/albums/noeasy.jpg",
    tracklist:["CHEESE","Thunderous","DOMINO","SSICK","The View","Sorry, I Love You","Silent Cry","Secret Secret","Star Lost","Red Lights (Bang Chan & Hyunjin)","Surfin' (Lee Know, Changbin & Felix)","Gone Away (Han, Seungmin & I.N)","WOLFGANG","Mixtape: OH"],
    desc:"Segundo álbum de estúdio, primeiro a ultrapassar 1 milhão de cópias. Thunderous virou viral mundialmente." },
  { year:"2021", name:"SKZ2021",           badge:"Compilação",                   type:"compilation", track:"Scars",          tracks:14, img:"assets/albums/skz2021.jpg",
    tracklist:["Scars","Awaken","ROCK","3rd Eye","Placebo","Insomnia","Behind the Light","My Side","N/S","0325","For You","Maze of Memories","Broken Compass","Hoodie Season"],
    desc:"Segunda compilação reunindo músicas antigas regravadas com a formação atual de 8 membros." },
  { year:"2020", name:"IN生 (IN LIFE)",    badge:"Repackage",                    type:"full",        track:"Back Door",      tracks:17, img:"assets/albums/in-life.jpg",
    tracklist:["The Tortoise and the Hare","Back Door","B Me","Any","Ex","We Go (Bang Chan, Changbin & Han)","Wow (Lee Know, Hyunjin & Felix)","My Universe (Seungmin & I.N)","God's Menu","Easy","Pacemaker","Airplane","Another Day","Phobia","Blueprint","TA","Haven"],
    desc:"Repackage de GO LIVE com 17 faixas no total, incluindo cinco inéditas e três faixas de unidades. Back Door se tornou um dos maiores hits do grupo." },
  { year:"2020", name:"ALL IN",            badge:"EP · Japonês",                 type:"japanese",    track:"ALL IN",         tracks:7,  img:"assets/albums/all-in.jpg",
    tracklist:["ALL IN","FAM","One Day","God's Menu (Japanese Version)","Back Door (Japanese Version)","TOP (Japanese Version)","SLUMP (Japanese Version)"],
    desc:"Primeiro mini álbum japonês do grupo, reunindo faixas inéditas e versões japonesas dos primeiros hits. A estreia oficial no Japão havia sido o álbum de compilação SKZ2020, lançado em março do mesmo ano." },
  { year:"2020", name:"GO LIVE",           badge:"Álbum",                        type:"full",        track:"God's Menu",     tracks:14, img:"assets/albums/go-live.jpg",
    tracklist:["GO LIVE","God's Menu","Easy","Pacemaker","Airplane","Another Day","Phobia","Blueprint","TA","Haven","TOP","SLUMP","Gone Days","On Track"],
    desc:"Primeiro álbum completo coreano. God's Menu definiu a identidade sonora do Stray Kids e marcou o início de uma nova era." },
  { year:"2020", name:"SKZ2020",           badge:"Compilação",                   type:"compilation", track:"Double Knot",    tracks:27, img:"assets/albums/skz2020.jpg",
    tracklist:["Hellevator","Grrr","Spread My Wings","YAYAYA","District 9","Mirror","Grow Up","My Pace","Voices","Question","M.I.A.","Awkward Silence","I am YOU","Get Cool","MIROH","Victory Song","Boxer","Chronosaurus","19","Side Effects","TMT","Double Knot","Levanter","Astronaut","My Pace (Japanese Ver.)","Double Knot (Japanese Ver.)","Levanter (Japanese Ver.)"],
    desc:"Primeira compilação do grupo e estreia oficial no mercado japonês, reunindo 27 faixas dos primeiros anos regravadas com a formação de oito integrantes." },
  { year:"2019", name:"Clé: Levanter",    badge:"Mini Álbum",                   type:"ep",          track:"Levanter",       tracks:7,  img:"assets/albums/cle-levanter.jpg",
    tracklist:["STOP","Double Knot","Levanter","Booster","Astronaut","Sunshine","You Can STAY"],
    desc:"Quinto miniálbum encerrando a trilogia Clé. Levanter é uma das músicas mais emotivas e amadas pelos STAYs." },
  { year:"2019", name:"Clé 2: Yellow Wood",badge:"Mini Álbum Especial",          type:"ep",          track:"Side Effects",   tracks:7,  img:"assets/albums/cle2-yellow-wood.jpg",
    tracklist:["Road Not Taken","Side Effects","TMT","Mixtape#1","Mixtape#2","Mixtape#3","Mixtape#4"],
    desc:"Álbum especial da trilogia Clé reunindo as Mixtapes e Side Effects como faixa principal." },
  { year:"2019", name:"Clé 1: MIROH",     badge:"Mini Álbum",                   type:"ep",          track:"MIROH",          tracks:7,  img:"assets/albums/cle1-miroh.jpg",
    tracklist:["Entrance","MIROH","Victory Song","Maze of Memories","Boxer","Chronosaurus","19"],
    desc:"Quarto miniálbum e primeiro grande hit internacional do grupo. MIROH marcou a virada da carreira." },
  { year:"2018", name:"I am YOU",         badge:"Mini Álbum",                   type:"ep",          track:"I am YOU",       tracks:7,  img:"assets/albums/i-am-you.jpg",
    tracklist:["YOU.","I am YOU","My Side","Hero's Soup","Get Cool","N/S","0325"],
    desc:"Terceiro miniálbum completando a trilogia 'I am'. Get Cool foi destaque pela leveza e energia." },
  { year:"2018", name:"I am WHO",         badge:"Mini Álbum",                   type:"ep",          track:"My Pace",        tracks:7,  img:"assets/albums/i-am-who.jpg",
    tracklist:["WHO?","My Pace","Voices","Question","Insomnia","M.I.A.","Awkward Silence"],
    desc:"Segundo miniálbum com My Pace — mensagem de autoconfiança que ressoou com fãs ao redor do mundo." },
  { year:"2018", name:"I am NOT",        badge:"Mini Álbum · Debut",            type:"ep",          track:"District 9",     tracks:7,  img:"assets/albums/i-am-not.jpg",
    tracklist:["NOT!","District 9","Mirror","Awaken","ROCK","Grow Up","3rd Eye"],
    desc:"Estreia oficial do grupo em 25 de março de 2018, com District 9 como faixa principal." },
  { year:"2018", name:"Mixtape",          badge:"Mini Álbum · Pré-debut",       type:"ep",          track:"Hellevator",     tracks:7,  img:"assets/albums/mixtape.jpg",
    tracklist:["Hellevator","Grrr — 총량의 법칙","Spread My Wings — 어린 날개","YAYAYA","GLOW","School Life","4419"],
    desc:"Mini álbum de pré-estreia lançado em janeiro de 2018. Hellevator foi o primeiro vislumbre do som que definiria o grupo." },
  { year:"2023", name:"THE SOUND",        badge:"Álbum · Japonês",              type:"japanese",    track:"THE SOUND",      tracks:10, img:"assets/albums/the-sound.jpg",
    tracklist:["THE SOUND","Battle Ground","Lost Me","DLMLU","Novel","CASE 143 (Japanese Version)","CHILL (Japanese Version)","Scars","Thunderous (Japanese Version)","There"],
    desc:"Primeiro álbum completo japonês com 10 faixas, incluindo versões japonesas de hits coreanos." },
];

/* ── DADOS — Timeline ── */
const timelineEvents=[
  { year:"2017", event:"Nasce o Stray Kids", desc:"A JYP Entertainment anuncia o reality show onde trainees competem por uma vaga no grupo. Nove integrantes são selecionados: Bang Chan, Woojin, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin e I.N.", badge:"Origem" },
  { year:"Jan 2018", event:"Mixtape — Pré-estreia", desc:"O grupo lança o mini álbum Mixtape antes da estreia oficial. Hellevator apresenta ao público o som que definiria a identidade do Stray Kids.", badge:"Pré-estreia" },
  { year:"Mar 2018", event:"Estreia Oficial — I am NOT", desc:"Estreia oficial em 25 de março com o primeiro mini álbum I am NOT e a faixa District 9. A identidade de self-production já aparece desde o primeiro dia.", badge:"Marco histórico", gold:true },
  { year:"2019", event:"MIROH — Primeiro Grande Hit", desc:"Clé 1: MIROH marca a virada do grupo. A faixa título se torna o primeiro grande hit internacional e consolida a presença do Stray Kids fora da Coreia.", badge:"Breakthrough" },
  { year:"Out 2019", event:"Saída do Woojin", desc:"Woojin anuncia sua saída por motivos pessoais. O grupo continua como octeto.", badge:"Mudança" },
  { year:"2020", event:"God's Menu — A Era da Identidade", desc:"GO LIVE com God's Menu define o som característico do SKZ. Identidade musical consolidada.", badge:"Identidade" },
  { year:"2021", event:"NOEASY e Kingdom", desc:"NOEASY se torna o primeiro álbum do grupo a ultrapassar um milhão de cópias e Thunderous viraliza mundialmente. No mesmo ano, o grupo vence o programa Kingdom: Legendary War.", badge:"Primeiro milhão", gold:true },
  { year:"2022", event:"ODDINARY — Primeiro #1 no Billboard", desc:"ODDINARY é a primeira entrada do grupo na Billboard 200 e estreia direto em #1, tornando o Stray Kids o terceiro grupo de K-pop a liderar a parada, depois de BTS e SuperM.", badge:"Billboard #1", gold:true },
  { year:"2022", event:"MAXIDENT & MANIAC World Tour", desc:"MAXIDENT estreia em #1 — segundo consecutivo. MANIAC World Tour com shows sold out.", badge:"Billboard #1", gold:true },
  { year:"2023", event:"5-STAR e Lollapalooza Paris", desc:"Dois álbuns em #1 no Billboard no mesmo ano. Realizam o 5-STAR Dome Tour e headlinam o Lollapalooza Paris — primeiro ato de K-pop a headlinear uma edição do festival.", badge:"Lollapalooza Paris", gold:true },
  { year:"2024", event:"Met Gala, ATE e Lollapalooza Chicago", desc:"Vão ao Met Gala — primeiros artistas K-pop juntos. ATE marca o quinto álbum consecutivo em #1. Headlinam o Lollapalooza Chicago, I-Days em Milão e BST Hyde Park em Londres. Iniciam o dominATE World Tour.", badge:"Lollapalooza Chicago", gold:true },
  { year:"2025", event:"KARMA & Recorde Mundial", desc:"KARMA: 7º álbum em #1. O dominATE Tour fatura US$185,9M com +1,3 milhão de ingressos — maior tour K-pop da história.", badge:"Maior tour K-pop", gold:true },
  { year:"Jun–Jul 2026", event:"Governors Ball e Recording Academy", desc:"Em junho tornam-se o primeiro grupo de K-pop a headlinear o Governors Ball em Nova York. Em 14 de julho, os oito membros são convidados como membros votantes da Recording Academy, podendo votar no Grammy a partir de 2027.", badge:"Grammy", gold:true },
  { year:"Ago 2026", event:"THIS & THAT — Nono #1 Consecutivo", desc:"O décimo mini álbum estreia em #1 na Billboard 200 com 369 mil unidades, a maior semana da carreira nos Estados Unidos. O grupo torna-se o primeiro da história a estrear seus nove primeiros álbuns no topo e empata com os Rolling Stones.", badge:"Recorde histórico", gold:true },
  { year:"Set 2026", event:"Rock in Rio e STRAYCITY", desc:"Headliner do Palco Mundo do Rock in Rio para um público estimado em mais de 100 mil pessoas — primeiro ato de K-pop em 41 anos de festival. No mesmo mês estreia o STRAYCITY, festival próprio criado com a Live Nation, passando por Bogotá, Buenos Aires e Cidade do México.", badge:"Rock in Rio", gold:true },
];

/* ── DADOS — Tours ── */
const tours=[
  { era:"2026–2027", name:"RUN IT World Tour", desc:"Quarta world tour do grupo, em suporte a THIS & THAT e ao EP japonês SUIATSU. Começou em Seul com cinco shows no KSPO Dome entre 25 de julho e 2 de agosto. Segue por Hong Kong e Taipei em dezembro, Bangkok em janeiro e encerra em Singapura em 7 de março de 2027. Etapas na América do Norte e Europa previstas para 2027.", badges:["Em andamento","Seul · Japão · Ásia","Encerra em março de 2027"], gold:true },
  { era:"Ago–Nov 2026", name:"RUN IT Japan", desc:"Etapa japonesa da turnê. Nos dias 29 e 30 de agosto o grupo se apresentou no MUFG Stadium, tornando-se o primeiro artista masculino estrangeiro a realizar show solo no Estádio Nacional de Tóquio. Três datas extras foram anunciadas no Tokyo Dome para 6, 7 e 8 de novembro.", badges:["Estádio Nacional de Tóquio","Primeiro ato masculino estrangeiro","Tokyo Dome · 3 datas"], gold:true },
  { era:"Set 2026", name:"Rock in Rio", desc:"Headliner do Palco Mundo na madrugada de 12 de setembro, das 0h05 à 1h45. Primeiro ato de K-pop a headlinear o festival em 41 anos de história, para um público estimado em mais de 100 mil pessoas. Ingressos esgotados desde julho.", badges:["Primeiro K-pop headliner","Mais de 100 mil pessoas","Palco Mundo"], gold:true },
  { era:"Set 2026", name:"STRAYCITY", desc:"Festival próprio criado pela JYP em parceria com a Live Nation, com o grupo como atração central. Estreou em Bogotá em 9 de setembro, seguiu para Buenos Aires em 14 e 15 e encerra na Cidade do México em 25 e 26. A demanda por ingressos dobrou as datas de Argentina e México.", badges:["Bogotá","Buenos Aires · 2 noites","Cidade do México · 2 noites"], gold:true },
  { era:"2024–2025", name:"dominATE World Tour", desc:"Terceira world tour e a maior da história do K-pop até então, com 56 shows em 35 cidades. Os números reportados à Billboard cobrem 31 desses shows: mais de 1,3 milhão de ingressos e US$185,7 milhões faturados. Encerrou no Incheon Asiad Main Stadium em outubro de 2025.", badges:["56 shows · 35 cidades","+1,3M ingressos em 31 shows","US$185,7M reportados"], gold:true },
  { era:"2024", name:"Circuito de Festivais", desc:"Ano em que o grupo headlinou três grandes festivais internacionais pela primeira vez: I-Days em Milão e BST Hyde Park em Londres, em julho, e o Lollapalooza Chicago em 2 de agosto.", badges:["I-Days Milão","BST Hyde Park","Lollapalooza Chicago"], gold:true },
  { era:"2023", name:"5-STAR Dome Tour", desc:"Primeira turnê inteiramente em domes, pelo Japão e Ásia, com 341 mil espectadores. No mesmo ano headlinaram o Lollapalooza Paris, tornando-se o primeiro ato de K-pop a headlinear uma edição do festival.", badges:["Japão","341 mil espectadores","Lollapalooza Paris"], gold:false },
  { era:"2022–2023", name:"MANIAC World Tour", desc:"Segunda turnê e primeiro grande retorno aos palcos após a pandemia. 42 shows pela Ásia, América do Norte e Austrália.", badges:["42 shows","América do Norte","Europa e Ásia"], gold:false },
  { era:"2019–2020", name:"District 9: Unlock", desc:"Primeira world tour do grupo. A maioria das datas foi cancelada ou adiada pela pandemia, encerrando com o show online Unlock: Go Live In Life.", badges:["Primeira world tour","24 shows previstos","Encerrada online"], gold:false },
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
    { tag:"Billboard", text:"O Stray Kids é o <strong>primeiro ato da história do Billboard 200</strong> a estrear com seus nove primeiros álbuns em #1. A sequência vai de ODDINARY (2022) a THIS & THAT (2026). Com nove #1, empataram com os <strong>Rolling Stones</strong> em segundo lugar entre grupos na história da parada, atrás apenas dos Beatles." },
    { tag:"Met Gala 2024", text:"Em maio de 2024, o Stray Kids se tornou o <strong>primeiro grupo K-pop</strong> cujos todos os membros compareceram juntos ao Met Gala." },
    { tag:"dominATE Tour", text:"O dominATE World Tour (2024–2025) é o <strong>maior tour K-pop da história</strong>: US$185,9M com +1,3 milhão de ingressos. #2 no ranking global da Pollstar." },
    { tag:"Festivais", text:"Em julho de 2023 headlinaram o <strong>Lollapalooza Paris</strong>, primeiros de K-pop a conseguir isso em qualquer edição do festival. Em 2024 headlinaram <strong>I-Days Milão</strong>, <strong>BST Hyde Park</strong> e <strong>Lollapalooza Chicago</strong>. Em junho de 2026 foram os primeiros de K-pop no <strong>Governors Ball</strong> e, em setembro, os primeiros a headlinear o <strong>Rock in Rio</strong> em 41 anos." },
    { tag:"Spotify", text:"Em 2025, o SKZ se tornou o <strong>terceiro artista coreano</strong> a atingir 10 bilhões de streams no Spotify, após BTS e BLACKPINK." },
    { tag:"Hot 100", text:"A faixa <strong>This & That</strong> estreou na <strong>38ª posição da Billboard Hot 100</strong> em agosto de 2026 — a melhor colocação do grupo na parada de singles dos Estados Unidos até hoje." },
    { tag:"Tóquio", text:"Em agosto de 2026, o Stray Kids tornou-se o <strong>primeiro artista masculino estrangeiro</strong> a realizar show solo no <strong>Estádio Nacional de Tóquio</strong>, com duas apresentações no MUFG Stadium." },
  ],
  membros:[
    { tag:"Felix", text:"<strong>Felix</strong> tem uma das vozes mais reconhecíveis do K-pop. Em 2025, colaborou com LiSA na abertura do anime <em>Solo Leveling</em> 2ª temporada. Antes de ser idol, conquistou <strong>63 medalhas em Taekwondo</strong>." },
    { tag:"Hyunjin artista", text:"Além de idol, <strong>Hyunjin</strong> é pintor sério. Já realizou exposições de arte e seus trabalhos foram leiloados." },
    { tag:"Chan's Room", text:"De 2019 a 2023, <strong>Bang Chan</strong> realizava lives semanais chamadas <em>'Chan's Room'</em>. A série foi encerrada em agosto de 2023." },
    { tag:"Lee Know & gatos", text:"<strong>Lee Know</strong> tem 3 gatos chamados Soonie, Doongie e Dori — tão famosos entre os STAYs que têm fã-clube próprio." },
    { tag:"Han letrista", text:"<strong>Han</strong> cresceu na Malásia e voltou à Coreia para perseguir o sonho — experiência que inspira suas letras sobre solidão e pertencimento." },
    { tag:"Seungmin & beisebol", text:"<strong>Seungmin</strong> praticou beisebol na infância e chegou a sonhar em seguir carreira no esporte. Já foi convidado como arremessador cerimonial em jogos profissionais e continua acompanhando o Doosan Bears." },
    { tag:"I.N & trot", text:"<strong>I.N</strong>, o maknae, sabe cantar trot — gênero musical coreano tradicional. Surpreende fãs e membros sempre que demonstra essa habilidade." },
    { tag:"Changbin & rap", text:"<strong>Changbin</strong> é famoso por seu rap extremamente rápido. Apesar de ser o menor do grupo (167cm), tem presença de palco avassaladora." },
  ]
};

/* ── DADOS — MVs ── */
const mvs=[
  { title:"This & That",    year:"2026", views:"",      id:"BZ4UzthYTss" },
  { title:"After You",      year:"2026", views:"",      id:"thHxtnJf9HA" },
  { title:"FARMING",        year:"2026", views:"",      id:"6CqeGHXXioU" },
  { title:"RUN IT",         year:"2026", views:"",      id:"Q7IFjVUUb_E" },
  { title:"CEREMONY",       year:"2025", views:"120M+", id:"P7vBoGWoReg" },
  { title:"Do It",          year:"2025", views:"120M+", id:"NED7nev2ywQ" },
  { title:"DIVINE",         year:"2025", views:"80M+",  id:"E8i32NXMxnc" },
  { title:"Walkin On Water",year:"2024", views:"100M+", id:"ovHoY8UBIu8" },
  { title:"CASE 143",       year:"2022", views:"240M+", id:"jYSlpC6Ud2A" },
  { title:"Back Door",      year:"2020", views:"400M+", id:"X-uJtV8ScYk" },
  { title:"Topline",        year:"2023", views:"90M+",  id:"b3GYcA7j5mg" },
  { title:"God's Menu",     year:"2020", views:"570M+", id:"TQTlCHxyuu8" },
  { title:"MIROH",          year:"2019", views:"200M+", id:"Dab4EENTW5I" },
  { title:"THUNDEROUS",     year:"2021", views:"450M+", id:"EaswWiwMVs8" },
  { title:"MANIAC",         year:"2022", views:"340M+", id:"OvioeS1ZZ7o" },
  { title:"S-CLASS",        year:"2023", views:"300M+", id:"JsOOis4bBFg" },
  { title:"LOSE MY BREATH", year:"2024", views:"80M+",  id:"SQ1yPMTIwCU" },
  { title:"SOCIAL PATH",    year:"2023", views:"80M+",  id:"M0c04xfBtyc" },
  { title:"CHK CHK BOOM",   year:"2024", views:"200M+", id:"0P0aQreFs8w" },
  { title:"LALALALA",       year:"2023", views:"340M+", id:"dBDkYofMUs4" },
  { title:"VENOM",          year:"2022", views:"150M+", id:"pM-jOfy_1jM" },
  { title:"Red Lights",     year:"2021", views:"170M+", id:"k8Y6ZTjmCXs" },
  { title:"CHEESE",         year:"2021", views:"115M+", id:"YLtEc-kvOqA" },
  { title:"Hellevator",     year:"2017", views:"125M+", id:"AdfIfFGCqgo" },
  { title:"Christmas EveL", year:"2021", views:"190M+", id:"57n4dZAPxNY" },
];

/* ── DADOS — Galeria ── */
const gallery=[
  { url:"assets/gallery/gallery-bangchan.jpg", alt:"Bang Chan" },
  { url:"assets/gallery/gallery-leeknow.jpg", alt:"Lee Know" },
  { url:"assets/gallery/gallery-changbin.jpg", alt:"Changbin" },
  { url:"assets/gallery/gallery-hyunjin.jpg", alt:"Hyunjin" },
  { url:"assets/gallery/gallery-han.jpg", alt:"Han" },
  { url:"assets/gallery/gallery-felix.jpg", alt:"Felix" },
  { url:"assets/gallery/gallery-seungmin.jpg", alt:"Seungmin" },
  { url:"assets/gallery/gallery-in.jpg", alt:"I.N" },
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

  const closeBtn = document.getElementById('modalCloseBtn');
  const liberar = trapFocus(modal, () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    liberar();
  });
  modal._liberarFoco = liberar;
  if(closeBtn) closeBtn.focus();
}

function openAlbumDetail(a){
  const existing = document.getElementById('albumModal');
  if(existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'albumModal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.75);backdrop-filter:blur(8px);padding:1rem';

  const tracklist = a.tracklist
    ? a.tracklist.map((t,i) => `
        <div style="display:flex;align-items:baseline;gap:.75rem;padding:.5rem 0;border-bottom:1px solid var(--bd)">
          <span style="font-size:.7rem;color:var(--ac);font-family:'Bebas Neue',sans-serif;min-width:1.5rem">${i+1}</span>
          <span style="font-size:.85rem;color:var(--t2)">${t}</span>
        </div>`).join('')
    : '<p style="color:var(--t3);font-size:.85rem">Tracklist não disponível.</p>';

  modal.innerHTML = `
    <div style="background:var(--bg-2);border:1px solid var(--bd);border-radius:16px;max-width:520px;width:100%;max-height:85vh;overflow-y:auto;position:relative;box-shadow:var(--glow)">
      <button id="albumModalClose" type="button" aria-label="Fechar" style="position:absolute;top:1rem;right:1rem;background:var(--bg-3);border:none;color:var(--t1);width:32px;height:32px;border-radius:50%;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2">×</button>
      <div style="display:flex;gap:1.25rem;padding:1.5rem;border-bottom:1px solid var(--bd)">
        ${a.img ? `<img src="${a.img}" alt="${a.name}" style="width:100px;height:100px;object-fit:cover;border-radius:10px;flex-shrink:0" onerror="this.style.display='none'">` : ''}
        <div>
          <div style="font-size:.65rem;color:var(--ac);letter-spacing:.1em;margin-bottom:.3rem">${a.badge}</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:1.4rem;color:var(--t1);letter-spacing:.04em;line-height:1.1;margin-bottom:.4rem">${a.name}</div>
          <div style="font-size:.8rem;color:var(--t3)">${a.year}${a.tracks > 0 ? ` · ${a.tracks} faixa${a.tracks>1?'s':''}` : ''}</div>
          <div style="font-size:.8rem;color:var(--ac);margin-top:.3rem">▶ ${a.track}</div>
          ${a.desc ? `<div style="font-size:.8rem;color:var(--t2);margin-top:.6rem;line-height:1.6;font-style:italic">${a.desc}</div>` : ''}
        </div>
      </div>
      <div style="padding:1rem 1.5rem">
        <div style="font-size:.7rem;letter-spacing:.12em;color:var(--t3);margin-bottom:.75rem">TRACKLIST</div>
        ${tracklist}
      </div>
    </div>`;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  const fechar = () => {
    liberar();
    modal.remove();
    document.body.style.overflow = '';
  };
  const liberar = trapFocus(modal, fechar);
  modal._fechar = fechar;

  document.getElementById('albumModalClose').addEventListener('click', fechar);
  modal.addEventListener('click', e => {
    if(e.target === modal) fechar();
  });

  document.getElementById('albumModalClose')?.focus();
}

document.addEventListener('DOMContentLoaded', function(){

/* ── INTRO ── */
const introBtn = document.getElementById('introEnterBtn');
const introScreen = document.getElementById('introScreen');
if (introBtn && introScreen) {
  // Mostra intro apenas uma vez por sessão
  if (sessionStorage.getItem('skz-intro-seen')) {
    introScreen.style.display = 'none';
  } else {
    introScreen.classList.remove('hidden');
    introBtn.addEventListener('click', () => {
      sessionStorage.setItem('skz-intro-seen', '1');
      introScreen.classList.add('out');
      setTimeout(() => { introScreen.style.display = 'none'; }, 800);
    });
    // Botão de pular
    const skipBtn = document.getElementById('introSkipBtn');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        sessionStorage.setItem('skz-intro-seen', '1');
        introScreen.style.display = 'none';
      });
    }
  }
}

/* ── HERO CANVAS ── */
(function(){
  const canvas = document.getElementById('heroCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles=[], mouse={x:0,y:0};
  let animFrameId;
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
    animFrameId = requestAnimationFrame(draw);
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animFrameId);
    else animFrameId = requestAnimationFrame(draw);
  });
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    canvas.style.display = 'none';
  } else {
    createParticles();
    window.addEventListener('resize', createParticles);
    animFrameId = requestAnimationFrame(draw);
  }
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

document.querySelector('.nav-dropdown-btn')?.addEventListener('click', () => {
  document.querySelector('.nav-dropdown')?.classList.toggle('open');
});
document.addEventListener('click', e => {
  if(!e.target.closest('.nav-dropdown')) {
    document.querySelector('.nav-dropdown')?.classList.remove('open');
  }
});

/* ── THEME TOGGLE ── */
document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('themeToggleBtn').innerHTML = isLight ? ICON_SUN : ICON_MOON;
  localStorage.setItem('skz-theme', isLight ? 'light' : 'dark');
  const logoImg = document.getElementById('logoImg');
  const introLogoImg = document.getElementById('introLogoImg');
  const logoSrc = isLight ? 'skz-logo-light.png' : 'skz-logo-dark.png';
  if(logoImg) logoImg.src = logoSrc;
  if(introLogoImg) introLogoImg.src = logoSrc;
  const drawerLogoImg = document.getElementById('drawerLogoImg');
  if(drawerLogoImg) drawerLogoImg.src = logoSrc;
  const heroLogoImg = document.getElementById('heroLogoImg');
  if(heroLogoImg) heroLogoImg.src = logoSrc;
});
if(localStorage.getItem('skz-theme')==='light'){
  document.body.classList.add('light-mode');
  const btn = document.getElementById('themeToggleBtn');
  if(btn) btn.innerHTML=ICON_SUN;
  const logoImg = document.getElementById('logoImg');
  const introLogoImg = document.getElementById('introLogoImg');
  if(logoImg) logoImg.src = 'skz-logo-light.png';
  if(introLogoImg) introLogoImg.src = 'skz-logo-light.png';
  const drawerLogoImg = document.getElementById('drawerLogoImg');
  if(drawerLogoImg) drawerLogoImg.src = 'skz-logo-light.png';
  const heroLogoImg = document.getElementById('heroLogoImg');
  if(heroLogoImg) heroLogoImg.src = 'skz-logo-light.png';
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
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Ver perfil de ${m.name}`);
    card.addEventListener('click', ()=> openMemberDetail(i));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMemberDetail(i);
      }
    });
    grid.appendChild(card);
  });
}

/* ── DISCOGRAFIA ── */
function renderDiscografia(){
  const grid = document.getElementById('discoGrid');
  if(!grid) return;
  const SHOW = 12;
  let showAll = false;

  function build(){
    grid.innerHTML = '';
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    const sorted = activeFilter === 'all'
      ? [...albums].sort((a,b) => parseInt(b.year) - parseInt(a.year))
      : [...albums].filter(a => a.type === activeFilter).sort((a,b) => parseInt(b.year) - parseInt(a.year));

    const list = showAll ? sorted : sorted.slice(0, SHOW);

    list.forEach(a => {
      const card = document.createElement('div');
      card.className = 'disco-card reveal';
      card.dataset.type = a.type;
      const imgH = a.img
        ? `<img src="${a.img}" alt="${a.name}" loading="lazy" onerror="this.style.display='none'">`
        : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--ac);opacity:.3">${a.name.charAt(0)}</div>`;
      const isUpcoming = a.badge && a.badge.includes('Em breve');
      const upcomingSeal = isUpcoming
        ? `<div style="position:absolute;top:8px;left:8px;background:var(--ac);color:#fff;font-size:.65rem;font-family:'Bebas Neue',sans-serif;letter-spacing:.08em;padding:3px 8px;border-radius:4px;z-index:2">EM BREVE</div>`
        : '';
      card.innerHTML = `
        <div class="disco-cover">${upcomingSeal}${imgH}<span class="disco-type-tag">${a.badge}</span></div>
        <div class="disco-info">
          <div class="disco-name">${a.name}</div>
          <div class="disco-year">${a.year}${a.tracks > 0 ? ` · ${a.tracks} faixa${a.tracks>1?'s':''}` : ''}</div>
          <div class="disco-track">▶ ${a.track}</div>
        </div>`;
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => openAlbumDetail(a));
      grid.appendChild(card);
    });

    // Botão ver todos/menos
    const ex = document.getElementById('discoToggleBtn');
    if(ex) ex.remove();
    if(sorted.length > SHOW){
      const btn = document.createElement('button');
      btn.id = 'discoToggleBtn';
      btn.className = 'disco-toggle-btn';
      btn.textContent = showAll ? '▲ Ver menos' : `▼ Ver todos os ${sorted.length} lançamentos`;
      btn.setAttribute('aria-label', showAll ? 'Mostrar menos lançamentos' : 'Mostrar todos os lançamentos');
      btn.addEventListener('click', () => {
        showAll = !showAll;
        build();
        if(!showAll) grid.scrollIntoView({ behavior:'smooth', block:'start' });
        setTimeout(initReveal, 50);
      });
      grid.insertAdjacentElement('afterend', btn);
    }

    setTimeout(initReveal, 50);
  }
  build();
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      showAll = false;
      build();
    });
  });
}

/* ── TIMELINE ── */
function renderTimeline(){
  const container = document.getElementById('timelineContainer');
  if(!container) return;
  container.innerHTML = '';
  timelineEvents.forEach((ev,i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    const badge = ev.badge ? `<span class="timeline-badge ${ev.gold?'gold':''}">${ev.badge}</span>` : '';
    const cardH = `<div class="timeline-year">${ev.year}</div><div class="timeline-event">${ev.event}</div><div class="timeline-desc">${ev.desc}</div>${badge}`;
    const dot = `<div class="timeline-dot"></div>`;
    const spacer = `<div class="timeline-spacer"></div>`;
    if(i%2===0){
      item.innerHTML = `<div class="timeline-side tl-left">${cardH}</div>${dot}${spacer}`;
    } else {
      item.innerHTML = `${spacer}${dot}<div class="timeline-side tl-right-content">${cardH}</div>`;
    }
    container.appendChild(item);
  });
}

/* ── TOURS ── */
function renderTours(){
  const grid = document.getElementById('toursGrid');
  if(!grid) return;

  function buildTours(filterEra){
    grid.innerHTML = '';
    const list = filterEra
      ? tours.filter(t => t.era.toString().includes(filterEra))
      : tours;
    list.forEach(t => {
      const card = document.createElement('div');
      card.className = 'tour-card reveal';
      card.innerHTML = `<div class="tour-era">${t.era}</div><div class="tour-name">${t.name}</div><div class="tour-desc">${t.desc}</div>${t.badges.map(b=>`<span class="tour-badge ${t.gold?'gold':''}">${b}</span>`).join('')}`;
      grid.appendChild(card);
    });
    setTimeout(initReveal, 50);
  }

  buildTours(null);
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
    featured.innerHTML = `
  <div class="mv-featured-card">
    <div class="mv-featured-thumb" id="mvFeaturedThumb">
      <img src="https://img.youtube.com/vi/${first.id}/maxresdefault.jpg"
           onerror="this.src='https://img.youtube.com/vi/${first.id}/hqdefault.jpg'"
           alt="${first.title}" loading="lazy">
      <div class="mv-featured-overlay">
        <button class="mv-featured-play" id="mvPlayBtn" aria-label="Assistir ${first.title} no YouTube" type="button">▶</button>
        <div class="mv-featured-info">
          <div class="mv-featured-badge">Mais recente</div>
          <div class="mv-featured-title">${first.title}</div>
          <div class="mv-featured-year">${first.year}</div>
        </div>
      </div>
    </div>
    <div id="mvEmbedWrap" style="display:none;width:100%;aspect-ratio:16/9;border-radius:12px;overflow:hidden;">
      <iframe id="mvEmbed" style="width:100%;height:100%;border:0;border-radius:12px;"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  </div>`;
    document.getElementById('mvPlayBtn')?.addEventListener('click', () => {
      const thumb = document.getElementById('mvFeaturedThumb');
      const embedWrap = document.getElementById('mvEmbedWrap');
      const iframe = document.getElementById('mvEmbed');
      if (thumb && embedWrap && iframe) {
        thumb.style.display = 'none';
        embedWrap.style.display = 'block';
        iframe.src = `https://www.youtube.com/embed/${first.id}?autoplay=1&rel=0`;
      }
    });
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
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Ampliar foto de ${g.alt}`);
    item.addEventListener('click',()=>{ document.getElementById('lbImg').src=g.url; document.getElementById('lbImg').alt = `Foto ampliada de ${g.alt}`; document.getElementById('lightbox').classList.remove('hidden'); });
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        document.getElementById('lbImg').src = g.url;
        document.getElementById('lbImg').alt = `Foto ampliada de ${g.alt}`;
        document.getElementById('lightbox').classList.remove('hidden');
      }
    });
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

  // Card especial TASY
  const tasyWrap = document.createElement('div');
  tasyWrap.className = 'reveal';
  tasyWrap.style.cssText = 'grid-column:1/-1;margin-top:1.5rem;border:1px solid var(--bdh);border-radius:16px;overflow:hidden;background:var(--bg-2);box-shadow:var(--glow)';

  tasyWrap.innerHTML = `
    <div style="background:var(--ac);padding:.5rem 1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">
      <span style="font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.15em;color:#fff">✦ PERSONAGEM OFICIAL DO FANDOM</span>
      <span style="font-size:.7rem;color:rgba(255,255,255,.8);letter-spacing:.08em">Apresentada em 10 de julho de 2026</span>
    </div>
    <div style="display:grid;grid-template-columns:280px 1fr;gap:0" id="tasyGrid">
      <div style="background:linear-gradient(135deg,#1a0a2e,#0a0a1a);display:flex;align-items:center;justify-content:center;padding:2rem;border-right:1px solid var(--bd)">
        <img src="assets/skzoo/skzoo-tasy.jpg" alt="TASY"
          style="width:180px;height:180px;object-fit:contain;filter:drop-shadow(0 0 20px rgba(180,120,255,0.4))"
          onerror="this.style.display='none'">
      </div>
      <div style="padding:2rem">
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:.5rem;flex-wrap:wrap">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--t1);letter-spacing:.06em">TASY</div>
          <span style="font-size:.8rem;color:var(--t3)">테이지 · pronunciado "Teiji"</span>
        </div>
        <div style="display:inline-block;font-size:.7rem;letter-spacing:.1em;padding:3px 12px;border-radius:20px;background:var(--ac);color:#fff;margin-bottom:1.25rem">Representa: STAY (fandom)</div>
        <div style="font-size:.88rem;color:var(--t2);line-height:1.8;margin-bottom:1.25rem">
          TASY é a personagem oficial criada para representar o fandom <strong style="color:var(--t1)">STAY</strong> dentro do universo dos SKZOO. Enquanto cada um dos oito personagens representa um integrante do Stray Kids, TASY representa <strong style="color:var(--t1)">todos os fãs</strong>.
        </div>
        <div style="background:var(--bg-3);border-radius:10px;padding:1rem;border:1px solid var(--bd);max-width:320px">
          <div style="font-size:.65rem;color:var(--ac);letter-spacing:.12em;margin-bottom:.4rem">SIGNIFICADO DO NOME</div>
          <div style="font-size:.9rem;color:var(--t1);font-weight:600;margin-bottom:.3rem">STAY → TASY</div>
          <div style="font-size:.78rem;color:var(--t2);line-height:1.5">As mesmas letras de STAY reorganizadas — reforçando que a personagem pertence aos fãs.</div>
        </div>
      </div>
    </div>`;

  grid.appendChild(tasyWrap);
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
  makeSection('Streaming', streamLinks.filter(s=>s.type==='stream'));
  makeSection('Votação', streamLinks.filter(s=>s.type==='vote'));
}

/* ── PARA NOVOS STAYs ── */
function renderNewStays(){
  const grid=document.getElementById('newStaysGrid');
  if(!grid) return;
  const cards=[
    { title:'Por onde começar', text:'Comece pelo MV de <strong>God\'s Menu</strong> (2020). Depois ouça <strong>MIROH</strong> e <strong>Thunderous</strong>. Para o álbum completo, vá direto para o <strong>5-STAR</strong>.' },
    { title:'O que assistir', text:'Assista <strong>SKZ CODE</strong> no YouTube para conhecer a personalidade de cada membro. Depois experimente o <strong>2 Kids Room</strong> para conversas mais íntimas.' },
    { title:'Como apoiar', text:'Stream nas plataformas conta para os charts. Vote no <strong>MAMA Awards</strong> durante o período de votação. Compre álbuns em lojas certificadas <strong>Hanteo</strong>.' },
    { title:'Glossário STAY', glossary:[{word:'STAY',def:'Nome oficial do fandom'},{word:'OT8',def:'Referência à formação atual de oito integrantes'},{word:'3RACHA',def:'Sub-grupo produtor'},{word:'Racha',def:'As 3 unidades do grupo'},{word:'Maknae',def:'O mais jovem — I.N'},{word:'SKZoo',def:'Personagens animais oficiais'},{word:'Self-prod',def:'O grupo produz suas músicas'},{word:'Daesang',def:'Maior prêmio do K-pop'},{word:'TASY',def:'Personagem oficial do fandom STAY — anagrama de STAY'}] },
    { title:'Discografia em ordem', text:'<strong>2018:</strong> Mixtape → I Am NOT → WHO → YOU<br><strong>2019:</strong> Clé 1-2-Levanter<br><strong>2020:</strong> GO LIVE<br><strong>2021:</strong> NOEASY<br><strong>2022:</strong> ODDINARY → MAXIDENT<br><strong>2023:</strong> 5-STAR → ROCK-STAR<br><strong>2024:</strong> ATE → HOP<br><strong>2025:</strong> KARMA → DO IT<br><strong>2026:</strong> Endless Sun · RUN IT · THIS & THAT' },
    { title:'Sobre o grupo', text:'8 membros, fundado em 2018 pela <strong>JYP Entertainment</strong>. O sub-grupo <strong>3RACHA</strong> produz quase tudo. Já venderam <strong>mais de 40 milhões de álbuns</strong> somando lançamentos coreanos e japoneses, e têm <strong>9 álbuns consecutivos #1 no Billboard 200</strong>.' },
    { title:'Conquistas históricas', text:'Headlinaram o <strong>Lollapalooza Paris</strong> (2023) e o <strong>Lollapalooza Chicago</strong> (2024). Foram ao <strong>Met Gala 2024</strong> juntos. O dominATE Tour foi o <strong>maior tour K-pop da história</strong>. Os 8 membros são <strong>membros votantes da Recording Academy</strong>.' },
  ];
  cards.forEach(c=>{
    const card=document.createElement('div');
    card.className='stay-card reveal';
    let inner=`<div class="stay-card-title">${c.title}</div>`;
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
  const modal = document.getElementById('memberModal');
  modal?._liberarFoco?.();
  modal?.classList.add('hidden');
  document.body.style.overflow='';
});
document.getElementById('memberModal')?.addEventListener('click', e=>{
  if(e.target===e.currentTarget){
    e.target._liberarFoco?.();
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
  if (e.key === 'Escape') {
    document.getElementById('searchWrap')?.classList.remove('open');
    const memberModal = document.getElementById('memberModal');
    if(memberModal && !memberModal.classList.contains('hidden')){
      memberModal._liberarFoco?.();
      memberModal.classList.add('hidden');
    }
    document.getElementById('lightbox')?.classList.add('hidden');
    const albumModal = document.getElementById('albumModal');
    if(albumModal){
      if(albumModal._fechar) albumModal._fechar();
      else albumModal.remove();
    }
    document.body.style.overflow = '';
  }
});
document.getElementById('searchInput')?.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  const results=document.getElementById('searchResults');
  if(!results) return;
  if(!q){ results.innerHTML=''; return; }
  const index = [
    ...members.map((m, i) => ({
      title: m.name, sub: m.pos, tag: 'Membro', img: m.img,
      anchor: '#membros', type: 'member', idx: i
    })),
    ...albums.map(a => ({
      title: a.name, sub: `${a.year} · ${a.track}`, tag: 'Álbum', img: a.img,
      anchor: '#discografia', type: 'album'
    })),
    ...Object.entries(factsData).flatMap(([tab, facts]) =>
      facts.map(f => ({
        title: f.tag,
        sub: f.text.replace(/<[^>]+>/g, '').substring(0, 80) + '…',
        tag: 'Curiosidade', anchor: '#curiosidades', type: 'fact', tab
      }))
    ),
  ];
  const hits=index.filter(item=>item.title.toLowerCase().includes(q)||item.sub?.toLowerCase().includes(q));
  if(!hits.length){ results.innerHTML=`<div class="search-empty">Nenhum resultado para "<strong>${q}</strong>"</div>`; return; }
  results.innerHTML=hits.slice(0,12).map(h=>`<button class="search-result-item" type="button" data-anchor="${h.anchor||''}" data-type="${h.type||''}" data-idx="${h.idx ?? ''}" data-tab="${h.tab||''}">${h.img?`<img class="search-result-thumb" src="${h.img}" alt="${h.title}" loading="lazy">`:`<div class="search-result-thumb" style="display:flex;align-items:center;justify-content:center;font-size:1.2rem;background:var(--bg-3)">${(h.title||'?').charAt(0).toUpperCase()}</div>`}<div class="search-result-info"><div class="search-result-title">${h.title}</div><div class="search-result-sub">${h.sub||''}</div></div><span class="search-result-tag">${h.tag}</span></button>`).join('');
});
document.getElementById('searchResults')?.addEventListener('click', e => {
  const item = e.target.closest('.search-result-item');
  if (!item) return;

  const anchor = item.dataset.anchor;
  const type = item.dataset.type;
  const idx = item.dataset.idx;

  // Fecha a busca
  document.getElementById('searchWrap')?.classList.remove('open');
  document.body.style.overflow = '';

  if (type === 'member') {
    // Scroll até membros e abre o modal
    document.querySelector('#membros')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => openMemberDetail(parseInt(idx)), 600);

  } else if (type === 'album') {
    // Scroll até discografia
    document.querySelector('#discografia')?.scrollIntoView({ behavior: 'smooth' });

  } else if (type === 'fact') {
    // Scroll até curiosidades e ativa a aba correta
    document.querySelector('#curiosidades')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const tab = document.querySelector(`.facts-tab[data-tab="${item.dataset.tab}"]`);
      if (tab) {
        tab.click();
      }
    }, 600);
  }
});

/* ── MODO CLARO ── */
function applyLightModeInlineFixes(isLight){
  document.querySelectorAll('[style*="color:#fff"],[style*="color: #fff"]').forEach(el=>{
    if(isLight){ el.setAttribute('data-oc',el.style.color||''); el.style.color='#111'; el.style.webkitTextFillColor='#111'; }
    else{ el.style.color=el.getAttribute('data-oc')||''; el.style.webkitTextFillColor=''; }
  });
}

function renderPremios(){
  const tbody = document.getElementById('premiosTbody');
  if(!tbody) return;
  const premios = [
    { cerimonia:"Asia Artist Awards",         vitorias:"16", destaque:"5 Daesangs entre 2021 e 2025 — Performance of the Year, Album of the Year duas vezes, Stage of the Year e Artist of the Year. 3RACHA e membros individuais também premiados.", gold:true },
    { cerimonia:"Golden Disc Awards",         vitorias:"10", destaque:"Daesang Album of the Year 2026 por KARMA · 5 Bonsangs consecutivos (2022–2026) · Rookie 2019", gold:true },
    { cerimonia:"Hanteo Music Awards",        vitorias:"12", destaque:"Daesang Best Album 2026 por KARMA · 2 Daesangs Best Performance (2023–2024) · 4 prêmios continentais 2026", gold:true },
    { cerimonia:"The Fact Music Awards",      vitorias:"13", destaque:"2 Daesangs 2025: Honor of the Year + Record of the Year · Artist Bonsang 2021–2025", gold:true },
    { cerimonia:"Korea Grand Music Awards",   vitorias:"6",  destaque:"2 Daesangs 2025: Grand Honor's Choice + Grand Record · Best-Selling Album KARMA", gold:true },
    { cerimonia:"MAMA Awards",               vitorias:"8",  destaque:"Daesang Album of the Year 2025 por KARMA — primeiro Daesang do grupo no MAMA · Worldwide Fans' Choice múltiplos anos", gold:true },
    { cerimonia:"K-World Dream Awards",       vitorias:"8",  destaque:"Daesang Boy Group Best Artist 2025 · K World Class Award · múltiplos Bonsangs", gold:true },
    { cerimonia:"D Awards",                  vitorias:"1",  destaque:"Daesang Black Label Album of the Year 2026 por KARMA", gold:true },
    { cerimonia:"Asia Star Entertainer Awards",vitorias:"3", destaque:"Daesang Grand Prize 2024 · Album of the Year 5-STAR · Best Group Male 2026", gold:true },
    { cerimonia:"Circle Chart Music Awards",  vitorias:"6",  destaque:"World Rookie of the Year 2020 · World K-Pop Star 2022 · Artist of the Year Album 2024", gold:false },
    { cerimonia:"Seoul Music Awards",         vitorias:"5",  destaque:"Rookie of the Year 2019 · 4 Bonsangs consecutivos (2021–2024)", gold:false },
    { cerimonia:"Japan Gold Disc Awards",     vitorias:"8",  destaque:"Best Artist Asia 2026 · Album of the Year Asia 2026 por Hollow · 4 troféus na edição de 2026", gold:false },
    { cerimonia:"iHeartRadio Music Awards",   vitorias:"3",  destaque:"K-Pop Group of the Year 2026 · K-Pop Album of the Year 2024 (5-STAR) e 2025 (ATE)", gold:false },
    { cerimonia:"Billboard Music Awards",     vitorias:"2",  destaque:"Top Global K-Pop Artist 2024 · Top K-Pop Album 2023 por 5-STAR", gold:false },
    { cerimonia:"People's Choice Awards",     vitorias:"1",  destaque:"Group/Duo of the Year 2024 — votação 100% dos fãs", gold:false },
    { cerimonia:"Nickelodeon Kids' Choice",   vitorias:"1",  destaque:"Favorite Music Group 2025", gold:false },
    { cerimonia:"MTV Video Music Awards",     vitorias:"1",  destaque:"Best K-Pop 2023 por S-Class", gold:false },
    { cerimonia:"MTV Europe Music Awards",    vitorias:"1",  destaque:"Best Korean Act 2020", gold:false },
    { cerimonia:"MTV VMA Japan",             vitorias:"1",  destaque:"Best Group Video International 2023 por CASE 143", gold:false },
    { cerimonia:"Tencent Music Year-End",     vitorias:"2",  destaque:"Top 10 K-Pop Albums (HOP) + Top 10 K-Pop Groups 2025", gold:false },
    { cerimonia:"Programas Musicais",        vitorias:"45", destaque:"Triple Crown · vitórias com MIROH, Thunderous, CASE 143, S-Class, Chk Chk Boom, CEREMONY e outros", gold:false },
  ];
  premios.forEach((p, i) => {
    const tr = document.createElement('tr');
    tr.style.cssText = 'border-bottom:1px solid var(--bd);transition:background .15s';

    const corRepouso = p.cerimonia.includes('Programas Musicais')
      ? 'var(--bg-3)'
      : (i % 2 === 0 ? 'var(--bg-2)' : 'var(--bg-3)');

    tr.style.background = corRepouso;

    if(p.cerimonia.includes('Programas Musicais')){
      tr.style.borderTop = '2px solid var(--bdh)';
    }

    tr.innerHTML = `
      <td style="padding:.875rem 1.25rem;color:var(--t1);font-weight:${p.gold?'600':'400'}">
        ${p.cerimonia}
      </td>
      <td style="padding:.875rem 1.25rem;text-align:center;font-family:'Bebas Neue',sans-serif;font-size:1.2rem;color:var(--ac)">${p.vitorias}</td>
      <td style="padding:.875rem 1.25rem;color:var(--t2);font-size:.8rem;line-height:1.5">${p.destaque}</td>`;

    tr.addEventListener('mouseenter', () => tr.style.background = 'var(--glass)');
    tr.addEventListener('mouseleave', () => tr.style.background = corRepouso);
    tbody.appendChild(tr);
  });
}

function renderUniverso(){
  const grid = document.getElementById('universoGrid');
  if(!grid) return;

  const cards = [
    {
      title:'O que é o 3RACHA?',
      text:'Sub-grupo produtor formado por <strong>Bang Chan (CB97)</strong>, <strong>Changbin (SPEARB)</strong> e <strong>Han (J.ONE)</strong>. Eles existiam antes mesmo do debut do Stray Kids e são responsáveis por compor, escrever e produzir grande parte da discografia do grupo. A identidade musical do SKZ foi construída por eles desde o início.'
    },
    {
      title:'As três unidades (Racha)',
      text:'O grupo é dividido em três unidades por especialidade:<br><br><strong>3RACHA</strong> — Bang Chan, Changbin e Han (produção e rap)<br><strong>Dance Racha</strong> — Lee Know, Hyunjin e Felix (dança)<br><strong>Vocal Racha</strong> — Seungmin e I.N (vocais)<br><br>Mas todos os membros participam de vocais, dança e performance em diferentes níveis.'
    },
    {
      title:'SKZ-RECORD e SKZ-PLAYER',
      text:'Projetos onde os membros lançam músicas fora dos álbuns oficiais — solos, covers, colaborações internas e composições próprias. Algumas dessas faixas ganharam versões oficiais no <strong>SKZ-REPLAY</strong>. São a melhor forma de conhecer o lado mais íntimo e experimental de cada membro.'
    },
    {
      title:'O que são os vídeos INTRO?',
      text:'Vídeos especiais lançados antes de novos álbuns onde cada membro ou unidade apresenta o conceito da nova era. São parte essencial da experiência de acompanhar um comeback do Stray Kids — revelam a identidade visual, o clima e o som do que está por vir.'
    },
    {
      title:'O que são os SKZoo?',
      text:'Personagens animais oficiais que representam cada membro. Foram criados com base em características físicas, apelidos ou traços de personalidade de cada um. Em 2026, o fandom STAY ganhou seu próprio personagem: o <strong>TASY</strong>, um tanuki azul cujo nome é anagrama de STAY.'
    },
    {
      title:'O que significa OT8?',
      text:'<strong>OT8</strong> é como o fandom se refere à formação atual de oito integrantes do Stray Kids. O grupo estreou em 2018 com nove membros, e Woojin deixou o grupo em outubro de 2019. Desde então, Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin e I.N formam o OT8.'
    },
    {
      title:'Comeback, title track, b-side e era',
      text:'<strong>Comeback</strong> — lançamento de novo álbum ou single após um hiato.<br><strong>Title track</strong> — faixa principal do álbum, geralmente com MV oficial.<br><strong>B-side</strong> — faixas do álbum que não são a principal, frequentemente favoritas dos fãs por serem mais experimentais.<br><strong>Era</strong> — período temático de um álbum, com conceito visual e sonoro próprio.'
    },
    {
      title:'Daesang — o maior prêmio',
      text:'<strong>Daesang</strong> significa "Grande Prêmio" em coreano e é a principal categoria das cerimônias de premiação sul-coreanas, acima dos prêmios por categoria. O Stray Kids acumula daesangs em cerimônias como MAMA, Golden Disc Awards, Asia Artist Awards e The Fact Music Awards. KARMA foi o álbum mais premiado da carreira.'
    },
    {
      title:'Kingdom: Legendary War',
      text:'Em 2021, o Stray Kids venceu o programa de competição <strong>Kingdom: Legendary War</strong>. As apresentações ficaram conhecidas pelos cenários elaborados e pela narrativa conectada entre performance, dança e música. Essa participação apresentou o grupo a um público muito maior e marcou uma virada na carreira internacional.'
    },
    {
      title:'Por que o nome "Stray Kids"?',
      text:'"Stray Kids" representa jovens que deixam um caminho definido por outros para buscar a própria direção. Essa ideia aparece frequentemente nas músicas: romper padrões, não se comparar, avançar mesmo sem ter todas as respostas. Por isso <strong>estradas, labirintos, portas, chaves e caminhos</strong> aparecem tantas vezes em seus trabalhos.'
    },
    {
      title:'STAY — o fandom',
      text:'O fandom oficial se chama <strong>STAY</strong>. O nome completa a frase: <em>"You make Stray Kids stay"</em> — os fãs são a razão para que os "garotos perdidos" encontrem um lugar onde possam permanecer. Em 2026, o fandom ganhou o mascote oficial <strong>TASY</strong>, anagrama de STAY.'
    },
    {
      title:'Self-produced — o diferencial',
      text:'O Stray Kids tem controle criativo sobre sua música desde o debut. O <strong>3RACHA</strong> produz, compõe e escreve a maioria das faixas internamente — algo raro no K-pop tradicional. Isso significa que as letras sobre crescimento, pressão, liberdade e identidade vêm das próprias experiências dos membros.'
    },
  ];

  grid.innerHTML = `
    <div style="position:relative">
      <div id="universoTrack" style="display:flex;gap:1.25rem;overflow:hidden;scroll-behavior:smooth">
        ${cards.map((c,i) => `
          <div class="stay-card reveal" style="min-width:320px;max-width:320px;flex-shrink:0;transition-delay:${i*.06}s">
            <div class="stay-card-title">${c.title}</div>
            <div class="stay-card-text" style="line-height:1.7">${c.text}</div>
          </div>`).join('')}
      </div>

      <div style="display:flex;align-items:center;justify-content:center;gap:1rem;margin-top:1.5rem">
        <button id="universoPrev" type="button" aria-label="Anterior"
          style="width:36px;height:36px;border-radius:50%;background:var(--bg-3);border:1px solid var(--bd);color:var(--t1);font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s">
          ‹
        </button>
        <div id="universoDots" style="display:flex;gap:.4rem">
          ${cards.map((_,i) => `<button class="universo-dot" type="button" data-idx="${i}" aria-label="Ir para o item ${i+1}" aria-current="${i===0?'true':'false'}" style="width:10px;height:10px;padding:0;border-radius:50%;background:${i===0?'var(--ac)':'var(--bd)'};border:none;cursor:pointer;transition:background .2s"></button>`).join('')}
        </div>
        <button id="universoNext" type="button" aria-label="Próximo"
          style="width:36px;height:36px;border-radius:50%;background:var(--bg-3);border:1px solid var(--bd);color:var(--t1);font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s">
          ›
        </button>
      </div>
    </div>`;

  const track = document.getElementById('universoTrack');
  const dots = document.querySelectorAll('.universo-dot');
  let current = 0;

  function goTo(idx){
    current = Math.max(0, Math.min(idx, cards.length - 1));
    const cardWidth = track.querySelector('.stay-card').offsetWidth + 20;
    track.scrollTo({ left: current * cardWidth, behavior: 'smooth' });
    dots.forEach((d,i) => {
      d.style.background = i === current ? 'var(--ac)' : 'var(--bd)';
      d.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  }

  document.getElementById('universoPrev')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('universoNext')?.addEventListener('click', () => goTo(current + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.idx))));

  // Swipe mobile
  let sx = 0;
  track.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    if(Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
  });

  setTimeout(initReveal, 100);
}

function renderAlemDaMusica(){
  const grid = document.getElementById('alemGrid');
  if(!grid) return;

  const cards = [
    { num:"01", tag:"Self-production", title:"O grupo que constrói a própria identidade", text:"Desde os primeiros lançamentos, o Stray Kids construiu uma identidade marcada por letras sobre crescimento, inseguranças, pressão, liberdade e busca pelo próprio caminho. Grande parte desse trabalho é liderada pelo <strong>3RACHA</strong> — Bang Chan, Changbin e Han — que participam da composição, escrita e produção de grande parte da discografia." },
    { num:"02", tag:"Nome", title:"Stray Kids representa quem escolhe o próprio caminho", text:"O nome pode ser relacionado a jovens que deixam um caminho definido por outros para buscar a própria direção. Por isso <strong>estradas, labirintos, portas, chaves e caminhos</strong> aparecem tantas vezes nas músicas. Romper padrões, não se comparar e avançar mesmo sem respostas são temas centrais." },
    { num:"03", tag:"Fandom", title:"A frase do fandom completa o nome do grupo", text:"Uma das frases mais importantes é: <em>\"You make Stray Kids stay.\"</em> Ela cria um jogo com o nome do fandom, <strong>STAY</strong>. A ideia é que os fãs são a razão para que os garotos perdidos encontrem um lugar onde possam permanecer." },
    { num:"04", tag:"Bang Chan", title:"Bang Chan participou da escolha dos integrantes", text:"Bang Chan passou vários anos como trainee antes do debut e teve um papel incomum na formação do grupo — além de ser o líder, participou do processo de reunir os integrantes que trabalhariam juntos. Isso explica por que liderança, confiança e união são temas tão importantes para o Stray Kids." },
    { num:"05", tag:"Logo", title:"O logotipo foi desenhado pelo próprio Bang Chan", text:"O logotipo escrito do Stray Kids foi baseado na <strong>caligrafia de Bang Chan</strong>. Esse detalhe reforça a ideia de que os integrantes participaram não apenas da música, mas também da construção visual e conceitual do grupo desde o início." },
    { num:"06", tag:"Bang Chan & Felix", title:"Cresceram na Austrália", text:"Bang Chan e Felix cresceram em <strong>Sydney</strong> antes de se mudarem para a Coreia do Sul para seguir carreira. Por isso, ambos falam inglês fluentemente e frequentemente ajudam o grupo em entrevistas e conteúdos internacionais. Apesar da história em comum, eles <strong>não se conheceram na Austrália</strong> — a amizade começou durante o período de treinamento." },
    { num:"07", tag:"Lee Know", title:"Dançarino profissional antes do Stray Kids", text:"Antes de estrear, Lee Know acumulou experiência como <strong>dançarino de apoio</strong>, o que contribuiu para sua precisão e consciência de palco. Essa trajetória também explica por que ele frequentemente ajuda os outros integrantes durante os ensaios." },
    { num:"08", tag:"Han", title:"Conhecido como um 'ace'", text:"No K-pop, <strong>'ace'</strong> é usado para artistas que se destacam em várias áreas. Han é frequentemente associado a essa descrição por conseguir assumir rap, vocal, composição, produção e performance com igual habilidade em diferentes músicas." },
    { num:"09", tag:"Changbin", title:"Contraste como identidade", text:"Changbin é conhecido pelo rap intenso e presença de palco poderosa. Ao mesmo tempo, sua personalidade fora dos palcos costuma ser divertida e afetuosa. Esse contraste inspirou o personagem <strong>Dwaekki</strong> — combinação de dwaeji (porco) e tokki (coelho)." },
    { num:"10", tag:"Felix", title:"Taekwondo e UNICEF", text:"Antes de ser idol, Felix praticou taekwondo durante anos e participou de competições, conquistando <strong>63 medalhas</strong>. Em setembro de 2024, foi nomeado <strong>Embaixador de Boa Vontade do UNICEF Coreia</strong>, participando de ações relacionadas a nutrição e saneamento no Laos." },
    { num:"11", tag:"Hyunjin", title:"Pintura como expressão artística", text:"Além da dança e música, Hyunjin desenvolveu forte interesse por <strong>desenho e pintura</strong>. Ele costuma compartilhar trabalhos que exploram paisagens, retratos e emoções. Sua relação com a arte também aparece em músicas solo e performances mais expressivas." },
    { num:"12", tag:"Seungmin", title:"A paixão pelo beisebol", text:"Seungmin é um grande fã de beisebol e já demonstrou bastante conhecimento sobre o esporte. Essa paixão se tornou uma de suas características mais reconhecidas pelos fãs. Mesmo seguindo a música, ele continua acompanhando partidas e mencionando o esporte em conteúdos do grupo." },
    { num:"13", tag:"I.N", title:"Habilidade com o trot", text:"I.N demonstrou habilidade para cantar <strong>trot</strong>, um gênero tradicional da música popular coreana. A técnica usa interpretação e ornamentação vocal bem diferentes das encontradas nas músicas do Stray Kids, mostrando outro lado de sua voz que sempre surpreende." },
  ];

  grid.innerHTML = `
    <div style="position:relative">
      <div id="alemTrack" style="display:flex;gap:1.25rem;overflow:hidden;scroll-behavior:smooth">
        ${cards.map((c,i) => `
          <div class="fact-card reveal" style="min-width:300px;max-width:300px;flex-shrink:0;transition-delay:${i*.05}s">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem">
              <span style="font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--ac);opacity:.3;line-height:1">${c.num}</span>
              <span class="fact-tag">${c.tag}</span>
            </div>
            <div style="font-size:.95rem;font-weight:700;color:var(--t1);margin-bottom:.6rem;line-height:1.3">${c.title}</div>
            <div style="font-size:.82rem;color:var(--t2);line-height:1.7">${c.text}</div>
          </div>`).join('')}
      </div>

      <div style="display:flex;align-items:center;justify-content:center;gap:1rem;margin-top:1.5rem">
        <button id="alemPrev" type="button" aria-label="Anterior"
          style="width:36px;height:36px;border-radius:50%;background:var(--bg-3);border:1px solid var(--bd);color:var(--t1);font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center">‹</button>
        <div id="alemDots" style="display:flex;gap:.4rem">
          ${cards.map((_,i) => `<button class="alem-dot" type="button" data-idx="${i}" aria-label="Ir para o item ${i+1}" aria-current="${i===0?'true':'false'}" style="width:10px;height:10px;padding:0;border-radius:50%;background:${i===0?'var(--ac)':'var(--bd)'};border:none;cursor:pointer;transition:background .2s"></button>`).join('')}
        </div>
        <button id="alemNext" type="button" aria-label="Próximo"
          style="width:36px;height:36px;border-radius:50%;background:var(--bg-3);border:1px solid var(--bd);color:var(--t1);font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center">›</button>
      </div>
    </div>`;

  const track = document.getElementById('alemTrack');
  const dots = document.querySelectorAll('.alem-dot');
  let current = 0;

  function goTo(idx){
    current = Math.max(0, Math.min(idx, cards.length - 1));
    const cardWidth = track.querySelector('.fact-card').offsetWidth + 20;
    track.scrollTo({ left: current * cardWidth, behavior: 'smooth' });
    dots.forEach((d,i) => {
      d.style.background = i === current ? 'var(--ac)' : 'var(--bd)';
      d.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  }

  document.getElementById('alemPrev')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('alemNext')?.addEventListener('click', () => goTo(current + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.idx))));

  let sx = 0;
  track.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    if(Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
  });

  setTimeout(initReveal, 100);
}

function renderGuiaConteudo(){
  const grid = document.getElementById('guiaGrid');
  if(!grid) return;

  const trilhas = [
    {
      cor:'#e8192c',
      titulo:'Para conhecer as personalidades',
      desc:'Descubra quem são os membros além do palco — humor, amizades e personalidades reais.',
      items:[
        { titulo:'SKZ CODE', desc:'Jogos, desafios e situações inusitadas — o melhor para conhecer a dinâmica do grupo.', url:'https://www.youtube.com/watch?v=byf5FHGL_sE&list=PL2HLJ87twWI1DhyFxYbQRB4_JLKPIYXli', label:'Ver playlist' },
        { titulo:'2 Kids Room (2022)', desc:'Duplas de membros conversam enquanto os outros comentam.', url:'https://www.youtube.com/watch?v=6ntUxIK1osU&list=PL2HLJ87twWI1hoPijG05KoASLwnVhPzez', label:'Ver playlist' },
        { titulo:'2 Kids Room (2025)', desc:'Reboot íntimo da série clássica — só os dois membros em conversa.', url:'https://www.youtube.com/watch?v=fETjgY83o7Q&list=PL2HLJ87twWI1jvyqJoBiABUo4s4TeUQoO', label:'Ver playlist' },
        { titulo:"One Kid's Room", desc:'Cada membro individualmente — ideal para conhecer cada personalidade a fundo.', url:'https://www.youtube.com/watch?v=GTm864QK16g&list=PL2HLJ87twWI2jdF0VDJrOIrfL83Zp9uTk', label:'Ver playlist' },
        { titulo:'SKZ-TALKER', desc:'Bastidores de álbuns e premiações — o grupo sendo ele mesmo nos bastidores.', url:'https://www.youtube.com/watch?v=jLjVVP3tw9s&list=PL2HLJ87twWI17t3AiqazIlW1Zkx-iGj1P', label:'Ver playlist' },
      ]
    },
    {
      cor:'#cc5500',
      titulo:'Para conhecer o processo musical',
      desc:'Entenda como o Stray Kids cria sua música e o que torna o 3RACHA único.',
      items:[
        { titulo:'SKZ-RECORD', desc:'Músicas autorais, covers e experimentos sonoros fora dos álbuns oficiais.', url:'https://www.youtube.com/watch?v=ZfPS2mXbv5Q&list=PL2HLJ87twWI2NAAEOqo9SJJ9_Oh3pqQOP', label:'Ver playlist' },
        { titulo:'Vídeos INTRO', desc:'Apresentações de cada nova era — revelam o conceito visual e sonoro antes do comeback.', url:'https://www.youtube.com/watch?v=0YeBUh5rmVQ&list=PL9K3xwFkFqWEUOC39i3GD1mio7QMGveuU', label:'Ver playlist' },
        { titulo:'Canal oficial', desc:'Todos os MVs, performances e conteúdos oficiais em um só lugar.', url:'https://www.youtube.com/@StrayKids', label:'Acessar canal' },
      ]
    },
    {
      cor:'#aa8800',
      titulo:'Para entender a história',
      desc:'Do survival show ao maior tour do K-pop — a trajetória completa do grupo.',
      items:[
        { titulo:'Survival Show (2017)', desc:'Como o Stray Kids foi formado — o começo de tudo como trainees na JYP.', url:'https://www.youtube.com/watch?v=bqnJd5N2pI8&list=PLRZBydIeH0x8P0TWA1DpUi7yerqyHap2G', label:'Assistir' },
        { titulo:'Kingdom: Legendary War', desc:'Todas as performances do programa que o grupo venceu em 2021.', url:'https://www.youtube.com/watch?v=MIeOEqGZopw&list=PLQcPdinBalXuoC820tlg9v0P_jO59EZ70', label:'Ver performances' },
      ]
    },
    {
      cor:'#006699',
      titulo:'Para ver as melhores performances',
      desc:'As apresentações que marcaram a carreira e definiram o Stray Kids na cena global.',
      items:[
        { titulo:'MAMA 2022', desc:'Thunderous + MANIAC — cenografia épica e uma das performances mais elogiadas da geração.', url:'https://www.youtube.com/watch?v=0QKhAdN-keY', label:'Assistir' },
        { titulo:"Kingdom — God's Menu + Back Door", desc:'Narrativa, dança e produção visual que impressionaram no Kingdom.', url:'https://www.youtube.com/watch?v=UL0ud2w8pPo', label:'Assistir' },
        { titulo:"Kingdom — I'll Be Your Man", desc:'Performance emotiva que mostrou o lado mais sensível e virtuoso do grupo.', url:'https://www.youtube.com/watch?v=8_pLQnZ09Hk', label:'Assistir' },
        { titulo:'MAMA 2025', desc:'Performance de CEREMONY + KARMA na noite do Daesang de Álbum do Ano.', url:'https://www.youtube.com/watch?v=zRYTFhPxiyA', label:'Assistir' },
      ]
    },
  ];

  grid.innerHTML = `
    <div style="position:relative">
      <div id="guiaTrack" style="display:flex;gap:1.25rem;overflow:hidden;scroll-behavior:smooth">
        ${trilhas.map((trilha, ti) => `
          <div class="guia-card reveal" style="min-width:calc(50% - 10px);max-width:calc(50% - 10px);flex-shrink:0;transition-delay:${ti*.1}s;border:1px solid var(--bd);border-radius:14px;overflow:hidden;display:flex;flex-direction:column">
            <div style="padding:1.25rem 1.25rem 1rem;border-bottom:1px solid var(--bd);background:var(--bg-2)">
              <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.5rem">
                <div style="font-size:.75rem;font-weight:700;color:${trilha.cor};letter-spacing:.08em;line-height:1.3">${trilha.titulo}</div>
              </div>
              <div style="font-size:.78rem;color:var(--t3);line-height:1.5">${trilha.desc}</div>
            </div>
            <div style="padding:.75rem;display:flex;flex-direction:column;gap:.5rem;flex:1;background:var(--bg-1)">
              ${trilha.items.map(item => `
                <a href="${item.url}" target="_blank" rel="noopener noreferrer"
                  style="display:flex;align-items:flex-start;justify-content:space-between;gap:.75rem;padding:.75rem;border-radius:8px;border:1px solid var(--bd);background:var(--bg-2);text-decoration:none;transition:border-color .2s,background .2s"
                  onmouseover="this.style.borderColor='var(--bdh)';this.style.background='var(--glass)'"
                  onmouseout="this.style.borderColor='var(--bd)';this.style.background='var(--bg-2)'">
                  <div>
                    <div style="font-size:.82rem;font-weight:600;color:var(--t1);margin-bottom:.2rem">${item.titulo}</div>
                    <div style="font-size:.72rem;color:var(--t3);line-height:1.4">${item.desc}</div>
                  </div>
                  <span style="font-size:.7rem;color:${trilha.cor};white-space:nowrap;padding:3px 8px;border-radius:20px;border:1px solid ${trilha.cor};margin-top:.1rem;flex-shrink:0">${item.label} ↗</span>
                </a>`).join('')}
            </div>
          </div>`).join('')}
      </div>

      <div style="display:flex;align-items:center;justify-content:center;gap:1rem;margin-top:1.5rem">
        <button id="guiaPrev" type="button" aria-label="Anterior"
          style="width:36px;height:36px;border-radius:50%;background:var(--bg-3);border:1px solid var(--bd);color:var(--t1);font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center">‹</button>
        <div id="guiaDots" style="display:flex;gap:.4rem">
          ${trilhas.map((_,i) => `<button class="guia-dot" type="button" data-idx="${i}" aria-label="Ir para o item ${i+1}" aria-current="${i===0?'true':'false'}" style="width:10px;height:10px;padding:0;border-radius:50%;background:${i===0?'var(--ac)':'var(--bd)'};border:none;cursor:pointer;transition:background .2s"></button>`).join('')}
        </div>
        <button id="guiaNext" type="button" aria-label="Próximo"
          style="width:36px;height:36px;border-radius:50%;background:var(--bg-3);border:1px solid var(--bd);color:var(--t1);font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center">›</button>
      </div>
    </div>`;

  const track = document.getElementById('guiaTrack');
  const dots = document.querySelectorAll('.guia-dot');
  let current = 0;

  function goTo(idx){
    current = Math.max(0, Math.min(idx, trilhas.length - 1));
    const card = track.querySelector('div');
    const cardWidth = card.offsetWidth + 20;
    track.scrollTo({ left: current * cardWidth, behavior:'smooth' });
    dots.forEach((d,i) => {
      d.style.background = i === current ? 'var(--ac)' : 'var(--bd)';
      d.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  }

  document.getElementById('guiaPrev')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('guiaNext')?.addEventListener('click', () => goTo(current + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.idx))));

  let sx = 0;
  track.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive:true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    if(Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
  });

  setTimeout(initReveal, 100);
}

function renderNachimbong(){
  const container = document.getElementById('nachimbongContainer');
  if(!container) return;

  container.innerHTML = `
    <div style="border:1px solid var(--bdh);border-radius:16px;overflow:hidden;background:var(--bg-2);box-shadow:var(--glow)">
      <div style="background:var(--bg-3);padding:.5rem 1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;border-bottom:1px solid var(--bd)">
        <span style="font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.15em;color:var(--t1)">LIGHT STICK OFICIAL DO STRAY KIDS</span>
        <a href="https://www.jypshop.com/en-us/stray-kids" target="_blank" rel="noopener noreferrer"
          style="font-size:.75rem;color:var(--ac);letter-spacing:.08em;text-decoration:none">Comprar na JYP Shop ↗</a>
      </div>

      <div style="padding:1.5rem">
        <div style="font-size:.88rem;color:var(--t2);line-height:1.8;margin-bottom:1.5rem;max-width:800px">
          A light stick oficial do Stray Kids é conhecida pelos fãs como <strong style="color:var(--t1)">Nachimbong</strong>, nome inspirado na palavra coreana para bússola. Seu design representa a busca por uma direção própria — ideia presente na história, nas músicas e na identidade do grupo desde o debut.
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem" id="lightstickGrid">

          <div style="border:1px solid var(--bd);border-radius:12px;overflow:hidden;background:var(--bg-1)">
            <div style="aspect-ratio:1;overflow:hidden;background:#f5f5f5;display:flex;align-items:center;justify-content:center">
              <img src="assets/lightstick-v1.jpg" alt="Nachimbong Ver.1"
                style="width:100%;height:100%;object-fit:cover"
                onerror="this.style.display='none'">
            </div>
            <div style="padding:1rem">
              <div style="font-size:.65rem;color:var(--ac);letter-spacing:.12em;margin-bottom:.3rem">2019 · VERSÃO ORIGINAL</div>
              <div style="font-family:'Bebas Neue',sans-serif;font-size:1.2rem;color:var(--t1);letter-spacing:.04em;margin-bottom:.5rem">Ver.1 — Nachimbong</div>
              <div style="font-size:.8rem;color:var(--t2);line-height:1.6">Lançada para a turnê District 9: Unlock. Bússola prateada móvel dentro de estrutura vermelha e transparente. Item colecionável.</div>
            </div>
          </div>

          <div style="border:1px solid var(--bdh);border-radius:12px;overflow:hidden;background:var(--bg-1)">
            <div style="aspect-ratio:1;overflow:hidden;background:#111;display:flex;align-items:center;justify-content:center">
              <img src="assets/lightstick-v2.jpg" alt="Nachimbong Ver.2"
                style="width:100%;height:100%;object-fit:cover"
                onerror="this.style.display='none'">
            </div>
            <div style="padding:1rem">
              <div style="font-size:.65rem;color:var(--ac);letter-spacing:.12em;margin-bottom:.3rem">2023 · VERSÃO ATUAL OFICIAL</div>
              <div style="font-family:'Bebas Neue',sans-serif;font-size:1.2rem;color:var(--t1);letter-spacing:.04em;margin-bottom:.5rem">Ver.2 — Official Light Stick</div>
              <div style="font-size:.8rem;color:var(--t2);line-height:1.6">Lançada em junho de 2023. Estrela de oito pontas representando os 8 membros e tela OLED traseira personalizável.</div>
            </div>
          </div>

        </div>
      </div>
    </div>`;
}

/* ── INIT ── */
renderMembers();
renderDiscografia();
renderTimeline();
renderTours();
renderFacts('geral');
renderPremios();
renderMVs();
renderGallery();
renderSkzoo();
renderNachimbong();
renderStream();
renderNewStays();
renderUniverso();
renderAlemDaMusica();
renderGuiaConteudo();
setTimeout(initReveal, 200);

}); // DOMContentLoaded
