# Relatorio do Projeto - Stray Kids Fanpage

Data do levantamento: 22/06/2026
Atualizado em: 15/07/2026 (ver secao 15 para o registro de mudancas)

## 1. Resumo executivo

O projeto e uma fanpage estatica e interativa sobre o grupo Stray Kids, voltada principalmente para novos STAYs. A aplicacao foi criada com HTML, CSS e JavaScript puro, sem frameworks, sem gerenciador de pacotes e sem etapa de build.

A pagina principal concentra conteudo editorial, imagens externas, dados estruturados em JavaScript e varias interacoes de interface: modal de membros, filtros de discografia, carrossel de MVs, lightbox da galeria, tema claro/escuro, busca global, menu mobile, contador para Rock in Rio 2026 e botoes de compartilhamento.

O estado geral e bom para um projeto estatico/publicavel via GitHub Pages. Os principais pontos de atencao sao manutencao dos dados, dependencia forte de assets externos, algumas inconsistencias entre README e implementacao, estilos nao utilizados e ausencia de testes automatizados ou validacao automatica de HTML/CSS.

## 2. Objetivo do projeto

O objetivo e apresentar um guia completo e visual do Stray Kids, incluindo:

- Perfis dos 8 membros.
- Discografia com capas, faixas principais e filtros.
- Linha do tempo historica de 2017 a 2026.
- Historico de tours e destaque para Rock in Rio 2026.
- Curiosidades gerais, recordes e fatos por membro.
- Videoclipes com thumbnails e links para YouTube.
- Galeria com ampliacao em lightbox.
- Personagens oficiais SKZoo.
- Guia introdutorio para novos STAYs.
- Links de streaming, votacao e redes/plataformas oficiais.

## 3. Estrutura do projeto

| Arquivo | Linhas | Tamanho aprox. | Funcao |
|---|---:|---:|---|
| `index.html` | 307 | 16 KB | Estrutura da pagina principal, secoes, SEO, navbar, modais, drawer e carregamento dos assets |
| `style.css` | 1404 | 60 KB | Tema visual, layout responsivo, animacoes, cards, modais, busca, drawer, carrossel e modo claro |
| `script.js` | 736 | 55 KB | Dados do projeto e interatividade/renderizacao dinamica |
| `404.html` | 206 | 8 KB | Pagina de erro personalizada para GitHub Pages |
| `README.md` | 82 | 4 KB | Documentacao principal |
| `README_stray-kids-fanpage.md` | 78 | 4 KB | Copia do README principal |
| `spotify.svg` | - | 4 KB | Icone local usado nos cards de streaming |
| `youtube.svg` | - | 4 KB | Icone local usado nos cards de streaming |
| `applemusic.svg` | - | 4 KB | Icone local usado nos cards de streaming |
| `.gitignore` | 1 | - | Ignora `.DS_Store` |

O repositorio esta limpo, sem alteracoes pendentes antes da criacao deste relatorio.

## 4. Tecnologias utilizadas

- HTML5.
- CSS3.
- JavaScript puro.
- Canvas 2D para efeitos visuais no hero.
- Google Fonts: `Bebas Neue` e `Inter`.
- Google Analytics: tag `G-WPNMTCYJ6Q`.
- GitHub Pages como destino indicado no README.
- Assets externos de Pinimg, YouTube, Letras, Spotify, Apple Music e sites de premiacoes.

Nao ha `package.json`, dependencias npm, bundler, framework, pre-processador CSS ou pipeline de build.

## 5. Arquitetura e funcionamento

### HTML

O `index.html` define a estrutura fixa da aplicacao e deixa varios containers vazios para preenchimento via JavaScript. As principais secoes sao:

- `#introScreen`
- `#navbar`
- `#hero`
- `#statsBar`
- `#membros`
- `#discografia`
- `#timeline`
- `#tours`
- `#curiosidades`
- `#mvs`
- `#galeria`
- `#skzoo`
- `#stream`
- `#novos-stays`
- `#quotes`
- `#footer`
- `#searchWrap`
- `#drawer`

Tambem existem elementos auxiliares para modal de membro, lightbox da galeria, barra de compartilhamento e botao de voltar ao topo.

### CSS

O `style.css` usa variaveis CSS no `:root` para controlar tema, cores, bordas, fundos, brilho e gradiente. O tema base e escuro, com vermelho como cor de destaque. O modo claro e aplicado por `body.light-mode`.

O arquivo tambem contem:

- Reset basico.
- Estilos globais de cards, secoes e botoes.
- Hero com canvas e composicao visual.
- Layout responsivo por media queries.
- Estilos para modal, lightbox, busca global e drawer mobile.
- Estilos para carrossel de MVs.
- Estilos para componentes futuros ou removidos, como favoritos, comparador de eras e pagina individual de membro.

### JavaScript

O `script.js` concentra tanto dados quanto logica de interface. Ele define arrays/objetos de conteudo e, no `DOMContentLoaded`, renderiza dinamicamente as secoes.

Contagens dos dados atuais:

| Conjunto | Quantidade |
|---|---:|
| Membros | 8 |
| Albuns/singles/EPs | 32 |
| Eventos da timeline | 13 |
| Tours | 7 |
| Curiosidades gerais | 6 |
| Recordes | 7 |
| Curiosidades por membro | 8 |
| MVs | 17 |
| Imagens da galeria | 8 |
| SKZoo | 9 |
| Links de stream/votacao | 7 |
| Frases/quotes | 6 |

Principais funcoes:

- `shareTwitter`, `shareWhatsapp`, `copyLink`: compartilhamento.
- `closeDrawer`: fechamento do menu mobile.
- `openMemberDetail`: abertura do modal de perfil.
- `renderMembers`: cards dos membros.
- `renderDiscografia`: grade, filtro e botao "ver mais/menos".
- `renderTimeline`: linha do tempo alternada.
- `renderTours`: cards de tours e countdown para Rock in Rio.
- `renderFacts`: curiosidades por aba.
- `renderMVs`: MV em destaque e carrossel.
- `renderGallery`: galeria e lightbox.
- `renderSkzoo`: cards SKZoo.
- `renderStream`: streaming e votacao.
- `renderQuotes`: frases.
- `renderNewStays`: guia para novos STAYs.
- `initReveal`: animacao de entrada com `IntersectionObserver`.

## 6. Funcionalidades implementadas

### Navegacao

- Navbar fixa com alteracao visual no scroll.
- Links ancora para as secoes.
- Drawer mobile com overlay e bloqueio do scroll do body.
- Botao de voltar ao topo.

### Experiencia inicial

- Tela de introducao com logo, subtitulo, barra animada e botao de entrada.
- Hero com background radial, canvas animado, destaque de Rock in Rio 2026 e CTAs.

### Conteudo interativo

- Cards de membros com modal completo.
- Discografia filtravel por tipo.
- Botao para mostrar todos os albuns ou voltar aos 12 iniciais.
- Linha do tempo com eventos renderizados dinamicamente.
- Countdown em tempo real para `2026-09-19T20:00:00-03:00`.
- Abas de curiosidades.
- MV mais recente em destaque e carrossel horizontal.
- Galeria com lightbox e swipe mobile.
- Secao SKZoo.
- Secao Stream & Votar.
- Secao Para Novos STAYs.
- Secao de frases.

### Tema e preferencias

- Alternancia entre modo escuro e claro.
- Preferencia salva em `localStorage` com a chave `skz-theme`.

### Busca

- Overlay de busca global.
- Atalho `/` para abrir busca.
- `Escape` para fechar.
- Busca em membros, albuns e curiosidades.

### SEO e compartilhamento

- `meta description`.
- `meta keywords`.
- Open Graph.
- Twitter Card.
- Favicon inline em SVG.
- Botoes de compartilhamento para X/Twitter, WhatsApp e copia de link.

## 7. Qualidade tecnica

### Pontos fortes

- Projeto simples de publicar e manter, sem complexidade de build.
- Boa separacao fisica entre HTML, CSS e JS.
- Conteudo centralizado em estruturas JavaScript, facilitando edicoes pontuais.
- Interface rica para um projeto estatico.
- Responsividade considerada em varios componentes.
- JavaScript passou em validacao sintatica com `node --check script.js`.
- README claro e visual.
- Pagina 404 personalizada e coerente com a identidade visual.

### Pontos de atencao

- O `script.js` mistura dados, renderizacao e comportamento em um unico arquivo. Isso funciona, mas tende a ficar dificil de manter conforme o projeto cresce.
- O `style.css` tem 1404 linhas e inclui trechos de recursos que nao aparecem no HTML atual.
- Existem estilos para favoritos, comparador de eras, pagina individual de membro e embeds de streaming, mas essas telas/estruturas nao estao ativas no `index.html`.
- O README menciona MelOn e Genie na secao "Stream e Votar", mas a grade renderizada no JavaScript inclui Spotify, YouTube, Apple Music, MAMA, AMAs, SMA e AAA.
- O HTML possui `data-i18n` e `#langControls`, e o CSS possui estilos de language switcher, mas nao ha logica de troca de idioma implementada.
- A funcao `applyLightModeInlineFixes` existe, mas nao e chamada.
- Ha duplicacao de documentacao entre `README.md` e `README_stray-kids-fanpage.md`.
- Muitas imagens dependem de URLs externas, principalmente Pinimg e Letras. Se essas URLs quebrarem ou bloquearem hotlink, a experiencia visual sera afetada.
- Nao ha testes automatizados, linter, formatador, validacao HTML ou validacao CSS configurados.
- Dados sobre eventos futuros e recordes de 2026 exigem revisao periodica para evitar desatualizacao.

## 8. Acessibilidade e UX

### Positivos

- Muitas imagens possuem `alt`.
- A pagina usa secoes bem definidas.
- Ha responsividade para mobile.
- Busca e drawer melhoram navegacao em telas menores.
- Lightbox pode ser fechado clicando fora.

### Melhorias recomendadas

- Adicionar `aria-label` em botoes iconicos como busca, tema, menu, fechar modal, fechar lightbox e voltar ao topo. — ✓ Implementado (15/07/2026).
- Evitar depender apenas de emojis como conteudo de botoes. — Parcial: `aria-label` agora fornece rotulo textual acessivel a esses botoes.
- Implementar foco visivel consistente para usuarios de teclado.
- Ao abrir modal, prender o foco dentro dele e devolver o foco ao botao/card de origem ao fechar.
- Tornar os resultados da busca clicaveis para navegar ate a secao correspondente. — ✓ Implementado (15/07/2026).
- Adicionar `rel="noopener noreferrer"` nos links com `target="_blank"`. — ✓ Implementado (15/07/2026).
- Considerar `prefers-reduced-motion` para reduzir animacoes de canvas, reveal e efeitos constantes.

## 9. Performance

### Pontos positivos

- Projeto estatico e leve em infraestrutura.
- Imagens renderizadas pelo JavaScript usam `loading="lazy"` em varios pontos.
- Nao ha bundles grandes de framework.

### Riscos

- Muitas imagens externas podem pesar o carregamento e gerar falhas visuais.
- O hero canvas roda continuamente com `requestAnimationFrame`, inclusive quando o usuario nao interage.
- Fontes externas e Google Analytics adicionam requisicoes de rede.
- Sem otimizacao local de imagens, cache control proprio ou fallback consistente para imagens quebradas.

### Melhorias sugeridas

- Hospedar imagens essenciais localmente ou em um CDN controlado.
- Adicionar fallback visual para imagens que falharem. — ✓ Implementado (15/07/2026): atributo `onerror` nas imagens dinamicas.
- Pausar ou reduzir o canvas quando a aba estiver invisivel.
- Usar `preconnect` tambem na pagina principal para fontes.
- Otimizar thumbnails e capas para tamanhos adequados.

## 10. Seguranca e privacidade

- O projeto nao possui backend, login ou armazenamento sensivel.
- Usa `localStorage` apenas para tema.
- Usa Google Analytics, entao deve haver atencao a aviso de privacidade se a pagina for divulgada publicamente.
- Conteudos HTML sao montados via template string com dados locais. O risco e baixo enquanto os dados forem controlados pela autora, mas aumentaria se esses dados viessem de usuario/API.
- Links externos abertos em nova aba devem receber `rel="noopener noreferrer"`.

## 11. Estado de verificacao

Comandos executados:

```bash
rg --files
git status --short
wc -l index.html style.css script.js README.md README_stray-kids-fanpage.md 404.html
node --check script.js
du -h index.html style.css script.js 404.html README.md README_stray-kids-fanpage.md applemusic.svg spotify.svg youtube.svg
```

Resultado:

- Repositorio sem alteracoes pendentes antes deste relatorio.
- JavaScript sem erro sintatico detectado por `node --check`.
- Projeto sem etapa de build/teste automatizado identificada.
- Nao foi feita validacao visual em navegador nem auditoria Lighthouse neste levantamento.

## 12. Inconsistencias encontradas

| Item | Situacao | Impacto |
|---|---|---|
| README mencionava MelOn e Genie na grade de Stream e Votar | Corrigido em 15/07/2026: README agora reflete Spotify, YouTube, Apple Music, MAMA, AMAs, SMA e AAA | Resolvido |
| `#langControls` e `data-i18n` existem | Nao ha script de internacionalizacao | Usuario pode esperar troca de idioma que nao existe |
| CSS de favoritos/comparador/pagina individual | Nao ha HTML/JS ativo correspondente no fluxo atual | Aumenta tamanho e complexidade de manutencao |
| `applyLightModeInlineFixes` | Funcao definida mas nao chamada | Codigo morto ou feature incompleta |
| `README.md` e `README_stray-kids-fanpage.md` | Conteudo duplicado | Risco de divergencia futura |
| Dados sobre 2026 | Conteudo futuro e sensivel a mudancas | Necessita revisao periodica |

## 13. Recomendacoes priorizadas

### Prioridade alta

1. Atualizar README para refletir exatamente os links de stream/votacao renderizados. — ✓ Feito (15/07/2026).
2. Decidir se o seletor de idioma sera implementado ou removido.
3. Remover ou finalizar estilos de recursos inativos: favoritos, comparador de eras, pagina individual e embeds.
4. Adicionar `rel="noopener noreferrer"` a links externos com `target="_blank"`. — ✓ Feito (15/07/2026).
5. Revisar dados factuais e datas futuras antes de publicar ou divulgar amplamente. — Parcial: dados de 2026 revisados e atualizados em 15/07/2026.

### Prioridade media

1. Separar `script.js` em blocos/arquivos logicos: dados, renderizacao, utilitarios e eventos.
2. Adicionar tratamento de erro para imagens externas. — ✓ Feito (15/07/2026).
3. Melhorar acessibilidade de modais, botoes iconicos e navegacao por teclado. — Parcial: `aria-label` e busca clicavel feitos (15/07/2026); falta focus trap e foco visivel.
4. Adicionar uma pequena suite de validacao, mesmo que simples: HTML validator, CSS validator e smoke test JS.
5. Consolidar a documentacao em um unico README.

### Prioridade baixa

1. Otimizar animacoes para `prefers-reduced-motion`.
2. Criar uma estrategia de cache/localizacao para assets importantes.
3. Adicionar um changelog simples.
4. Considerar um arquivo `data.js` para separar conteudo editorial do comportamento.

## 14. Conclusao

O projeto esta bem encaminhado como fanpage estatica: visualmente rico, com bastante conteudo e varias interacoes sem depender de frameworks. A base e simples de publicar e adequada para GitHub Pages.

Para evoluir com mais seguranca, o foco deve ser reduzir inconsistencias, limpar codigo nao utilizado, melhorar acessibilidade e tornar os dados mais faceis de atualizar. O maior risco atual nao e estrutural, mas de manutencao: muito conteudo e muitas features estao concentrados em poucos arquivos grandes.

## 15. Atualizacoes de 15/07/2026

Esta secao registra as mudancas feitas apos o levantamento inicial de 22/06/2026.

### Conteudo atualizado

- Discografia: adicionados 3 lancamentos de 2026 — THIS & THAT (mini album), RUN IT (single de pre-lancamento) e Endless Sun (single de colaboracao com a Biore UV). Total de 29 para 32.
- MVs: adicionado o MV de RUN IT como destaque "Mais recente". Total de 16 para 17.
- Tours: corrigidos os numeros finais da dominATE World Tour (56 shows, 35 cidades, US$185,7M, encerramento em out/2025), adicionada a RUN IT World Tour e a Seoul KSPO DOME. Total de 6 para 7.
- Timeline: adicionados os eventos Governors Ball (jun/2026) e Recording Academy & THIS & THAT (2026). Total de 12 para 13.
- Recordes: atualizado o recorde do Billboard (8 albuns consecutivos em #1), unificado Lollapalooza + Governors Ball em "Festivais" e adicionado o recorde de Grammy/Recording Academy. Total de 6 para 7.
- SKZoo: adicionado o personagem TASY (mascote do fandom STAY), incluindo verbete no glossario. Total de 8 para 9.
- Membros: atualizadas biografias e fatos de Felix, Changbin, Hyunjin e Han (novas parcerias de marca e conquistas de 2026).
- Cards de "Para novos STAYs": atualizados "discografia em ordem", "conquistas historicas" e "sobre o grupo".

### Melhorias tecnicas implementadas

- Acessibilidade: `aria-label` adicionado a todos os botoes de icone (abrir/fechar busca, tema, abrir/fechar menu, fechar modal, fechar lightbox e voltar ao topo).
- Busca: os resultados agora sao `<button>` clicaveis que rolam suavemente ate a secao correspondente (via `data-anchor`) e fecham o overlay.
- Seguranca: `rel="noopener noreferrer"` nos `<a target="_blank">` e `noopener,noreferrer` nos `window.open`, em todos os pontos que abrem nova aba.
- Robustez visual: atributo `onerror` nas imagens geradas dinamicamente (cards de membro, modal, capas da discografia, MVs, galeria, SKZoo e badges), exibindo fallback quando a imagem externa falha.
- README atualizado: contagens, faixa de anos (2018–2026) e grade real de streaming (Apple Music no lugar de MelOn/Genie).

Verificacao: `node --check script.js` sem erros apos as alteracoes.

### Recomendacoes ainda pendentes

- Focus trap em modais e foco visivel consistente para teclado.
- Suporte a `prefers-reduced-motion`.
- Decidir sobre o seletor de idioma (`#langControls` / `data-i18n`) e limpar CSS de recursos inativos.
- Consolidar `README.md` e `README_stray-kids-fanpage.md`.
- Validacao automatizada (HTML/CSS) e organizacao de `script.js` em modulos de dados/render/eventos.
