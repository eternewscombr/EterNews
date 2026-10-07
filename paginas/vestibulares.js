'use strict';

/* ============================================================
   CENTRAL DE VESTIBULARES — ETER NEWS
   Todos os links abaixo apontam para páginas OFICIAIS.
   Para trocar um link ou data no futuro, edite só este bloco.
============================================================ */
/* Páginas que JÁ EXISTEM no projeto (não foram recriadas), na mesma pasta de vestibulares.html.
   O primeiro nome de cada lista é o principal. Se o clique não achar o arquivo, os outros nomes são
   testados automaticamente. Depois de confirmar o nome real, deixe só ele na lista. */
const PAGES = {
  desafioEnem:   ['Enem .html', 'Enem_.html', 'Enem.html', 'ENEM.html'],
  narrativaEnem: ['Narrativa ENEM.html', 'Narrativa_ENEM.html', 'Narrativa Enem.html'],
  estudos:       ['Área de Estudo.html']
};
const pg = k => PAGES[k][0];

const L = {
  cartilhaRedacao: 'https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/a_redacao_no_enem_2024_cartilha_do_participante.pdf',
  enem:        'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem',
  enemProvas:  'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos',
  enemLegis:   'https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enem',
  enemMatriz:  'https://download.inep.gov.br/download/enem/matriz_referencia.pdf',
  enemPart:    'https://enem.inep.gov.br/participante',
  uerj:        'https://www.vestibular.uerj.br/',
  uerjNews:    'https://www.uerj.br/noticia/vestibular-uerj-2027-inscricoes-para-1o-exame-de-qualificacao-vao-ate-7-5-prova-sera-aplicada-em-junho/',
  ufrjAcesso:  'https://acessograduacao.ufrj.br/',
  ufrj:        'https://ufrj.br/',
  sisu:        'https://sisu.mec.gov.br/'
};

/* Cada item = uma função/destino diferente. [ico, título, descrição, botão, destino, tipo]
   tipo: 'ext' = site oficial (nova aba) | 'page' = página do projeto | 'anchor' = seção desta página */
const ENEM_CARDS = [
  ['ℹ️','Informações','Saiba como funciona o ENEM, sua estrutura e suas áreas.','Acessar informações oficiais →',L.enem,'ext'],
  ['📖','Narrativa ENEM','Prepare-se para o ENEM através de conteúdos, informações, destaques e materiais organizados para sua preparação.','Preparar para o ENEM →',pg('narrativaEnem'),'page','','narrativaEnem'],
  ['🧠','Desafio ENEM','Teste seus conhecimentos com questões e desafios inspirados no ENEM.','Começar desafio →',pg('desafioEnem'),'page','','desafioEnem'],
  ['📚','Provas anteriores','Acesse provas e gabaritos oficiais de edições anteriores.','Ver provas e gabaritos →','#provas','anchor','ENEM'],
  ['👤','Página do Participante','Acesse diretamente a página oficial.','Abrir Página do Participante →',L.enemPart,'ext']
];
const UERJ_CARDS = [
  ['📌','Informações do vestibular','Exame de Qualificação, Exame Discursivo, conteúdos e editais no site oficial da UERJ.','Acessar site oficial →',L.uerj,'ext'],
  ['📅','Calendário','Veja as datas importantes do vestibular nesta página.','Ver calendário →','#calendario','anchor'],
  ['📚','Provas anteriores','Acesse provas e gabaritos oficiais de edições anteriores.','Ver provas e gabaritos →','#provas','anchor','UERJ']
];
const UFRJ_CARDS = [
  ['🎓','Acesso à graduação','Editais, calendário dos processos, cursos e documentos importantes.','Acessar página oficial →',L.ufrjAcesso,'ext'],
  ['📝','SiSU','Sistema de Seleção Unificada, que usa a nota do ENEM.','Acessar o SiSU →',L.sisu,'ext'],
  ['🏛️','Site da UFRJ','Cursos e informações institucionais.','Acessar site oficial →',L.ufrj,'ext']
];
const REDACAO_LINKS = [
  ['📚','Ver materiais de redação',pg('estudos'),'page'],
  ['📄','Cartilha da Redação no ENEM (INEP)',L.cartilhaRedacao,'ext']
];

const OUTROS = [
  ['UFF',      'https://www.uff.br/'],
  ['CEFET/RJ', 'https://www.cefet-rj.br/'],
  ['IFRJ',     'https://portal.ifrj.edu.br/'],
  ['PUC-Rio',  'https://www.puc-rio.br/'],
  ['UFRRJ',    'https://portal.ufrrj.br/'],
  ['UNIRIO',   'https://www.unirio.br/'],
  ['UENF',     'https://uenf.br/'],
  ['Colégio Pedro II', 'https://www.cp2.g12.br/'],
  ['FAETEC',   'https://www.faetec.rj.gov.br/']
];
const REDACAO = [
  ['Como estruturar uma redação', 'Organize o texto em introdução, desenvolvimento e conclusão, com um fio condutor claro.'],
  ['Introdução',                  'Apresente o tema e posicione-se com uma tese.'],
  ['Desenvolvimento',             'Aprofunde a tese em parágrafos que explicam e comprovam suas ideias.'],
  ['Conclusão',                   'Retome a tese e feche o raciocínio, respeitando as regras da prova.'],
  ['Argumentação',                'Sustente seu ponto de vista com dados, exemplos e raciocínio lógico.'],
  ['Coesão e coerência',          'Conecte ideias com conectivos adequados e evite contradições.'],
  ['Repertório sociocultural',    'Use conhecimentos de história, filosofia, literatura, atualidades etc. de forma pertinente.'],
  ['Temas de redação',            'Treine com temas sociais, culturais e atuais; confira os temas já cobrados nas provas anteriores.'],
  ['Critérios de avaliação',      'Cada exame tem critérios próprios: consulte sempre o edital e a cartilha oficial.']
];

/* Provas anteriores — cada botão abre a página oficial onde o PDF fica hospedado */
const ENEM_ANOS = []; for (let y = 2025; y >= 1998; y--) ENEM_ANOS.push(y);
const UERJ_ANOS = [2027, 2026, 2025, 2024, 2023];
const PROVAS = [
  ...ENEM_ANOS.map(y => ({ inst: 'ENEM', title: 'ENEM ' + y, url: L.enemProvas })),
  ...UERJ_ANOS.map(y => ({ inst: 'UERJ', title: 'UERJ ' + y, url: L.uerj }))
];
const PROVAS_NOTES = {
  all:   'Cada botão abre a página oficial onde ficam a prova e o gabarito da edição.',
  ENEM:  'INEP: provas e gabaritos de 1998 a 2025. Na página oficial, escolha o ano na aba correspondente.',
  UERJ:  'Site oficial do Vestibular UERJ. Edições mais antigas também ficam disponíveis lá.',
  UFRJ:  'Ainda não divulgado oficialmente aqui. A UFRJ usa ENEM/SiSU: consulte as provas do ENEM e o site oficial de acesso à graduação.',
  Outros:'Ainda não divulgado oficialmente aqui. Consulte o site oficial de cada instituição na seção "Outros vestibulares".'
};

/* Calendário — iso = data confirmada em fonte oficial; sem iso = texto exibido no lugar da data */
const EVENTOS = [
  { nome: 'ENEM 2026 — Inscrições (25/05 a 05/06)', inst: 'ENEM', iso: '2026-06-05', label: '05/06/2026', link: L.enemPart },
  { nome: 'ENEM 2026 — Provas (1º e 2º dia)',       inst: 'ENEM', iso: '2026-11-15', label: '08 e 15/11', link: L.enem },
  { nome: 'ENEM 2026 — Gabaritos',                  inst: 'ENEM', txt: 'Ainda não divulgado oficialmente', link: L.enemProvas },
  { nome: 'Vestibular UERJ 2027 — 1º Exame de Qualificação', inst: 'UERJ', iso: '2026-06-07', label: '07/06/2026', link: L.uerjNews },
  { nome: 'Vestibular UERJ 2027 — 2º Exame de Qualificação', inst: 'UERJ', iso: '2026-09-06', label: '06/09/2026', link: L.uerj },
  { nome: 'Vestibular UERJ 2027 — Exame Discursivo',         inst: 'UERJ', txt: 'Confirmar no site oficial', link: L.uerj },
  { nome: 'UFRJ — Processos seletivos e editais',   inst: 'UFRJ', txt: 'Data a definir', link: L.ufrjAcesso },
  { nome: 'SiSU — Período de inscrição',            inst: 'UFRJ', txt: 'Data a definir', link: L.sisu },
  { nome: 'Outros vestibulares do RJ (UFF, CEFET/RJ, IFRJ, PUC-Rio)', inst: 'RJ', txt: 'Data a definir', link: '#outros' }
];

/* ============================================================
   RENDERIZAÇÃO
============================================================ */
const $ = id => document.getElementById(id);
const extAttrs = 'target="_blank" rel="noopener noreferrer"';

const isExt = t => t === 'ext';
function featGrid(id, items) {
  $(id).innerHTML = items.map(([ico, title, desc, btn, href, type, filter, key]) =>
    `<div class="feat-card"><div class="feat-ico">${ico}</div><h4>${title}</h4><p>${desc}</p>
     <a class="btn-outline" href="${href}"${isExt(type) ? ' ' + extAttrs : ''}${filter ? ` data-filter="${filter}"` : ''}${key ? ` data-page="${key}"` : ''}>${btn}</a></div>`
  ).join('');
}
featGrid('enem-links', ENEM_CARDS);
featGrid('uerj-links', UERJ_CARDS);
featGrid('ufrj-links', UFRJ_CARDS);

$('redacao-btns').innerHTML = REDACAO_LINKS.map(([ico, nome, href, type]) =>
  `<a class="btn-outline" href="${href}"${isExt(type) ? ' ' + extAttrs : ''}>${ico} ${nome}</a>`
).join('');

$('outros-grid').innerHTML = OUTROS.map(([nome, url]) =>
  `<div class="info-card"><h4>${nome}</h4><p>Informações oficiais sobre ingresso.</p>
   <p style="margin-top:12px"><a class="btn-outline" href="${url}" ${extAttrs}>Acessar site oficial <i class="fas fa-arrow-right"></i></a></p></div>`
).join('');

$('redacao-grid').innerHTML = REDACAO.map(([t, d]) =>
  `<div class="info-card"><h4>${t}</h4><p>${d}</p></div>`
).join('');

/* Provas + filtros */
function renderProvas(filtro) {
  const lista = filtro === 'all' ? PROVAS : PROVAS.filter(p => p.inst === filtro);
  $('provas-note').textContent = PROVAS_NOTES[filtro];
  $('prova-grid').innerHTML = lista.length ? lista.map(p =>
    `<div class="prova-card"><h4>${p.title}</h4>
      <p class="pc-note"><strong>Prova + Gabarito</strong><br>Material oficial da edição do ${p.title}.</p>
      <a class="btn-outline" href="${p.url}" ${extAttrs}>📄 Acessar prova e gabarito</a></div>`
  ).join('') : '<p class="empty">Ainda não divulgado oficialmente.</p>';
}
$('filters').addEventListener('click', e => {
  const b = e.target.closest('.filter-btn'); if (!b) return;
  document.querySelectorAll('.filter-btn').forEach(x => x.classList.toggle('active', x === b));
  renderProvas(b.dataset.f);
});
renderProvas('all');
function setFilter(f) {
  document.querySelectorAll('.filter-btn').forEach(x => x.classList.toggle('active', x.dataset.f === f));
  renderProvas(f);
}
/* botões "Provas anteriores" das seções já deixam o filtro certo selecionado */
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-filter]'); if (a) setFilter(a.dataset.filter);
});

/* Calendário (status automático: realizado / próximo) */
const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
$('cal-list').innerHTML = EVENTOS.map(ev => {
  const past = ev.iso && new Date(ev.iso + 'T23:59:59') < hoje;
  const data = ev.iso ? ev.label : ev.txt;
  return `<div class="cal-item${past ? ' past' : ''}">
    <div class="cal-date${ev.iso ? '' : ' tbd'}">${data}</div>
    <div class="cal-body"><div class="cal-name">${ev.nome}</div><div class="cal-inst">${ev.inst}</div></div>
    ${past ? '<span class="cal-tag">Realizado</span>' : ''}
    <a class="btn-outline" href="${ev.link}"${ev.link.startsWith('#') ? '' : ' ' + extAttrs}>${ev.link.startsWith('#') ? 'Ver instituições' : 'Informações oficiais'} <i class="fas fa-arrow-right"></i></a>
  </div>`;
}).join('');

/* ============================================================
   NAVBAR + MENU INTERNO
============================================================ */
const siteHeader = $('site-header');
window.addEventListener('scroll', () => siteHeader.classList.toggle('scrolled', window.scrollY > 40), { passive: true });

const hamburger = $('hamburger'), mobilePanel = $('mobile-panel');
if (hamburger && mobilePanel) {
  hamburger.addEventListener('click', () => {
    const open = mobilePanel.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
}

/* destaca o item do menu interno conforme a rolagem */
const subLinks = [...document.querySelectorAll('#subnav a')];
const secs = subLinks.map(a => document.querySelector(a.getAttribute('href')));
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) subLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-35% 0px -60% 0px' });
secs.forEach(s => s && spy.observe(s));

/* Abre a página existente certa: testa os nomes da lista PAGES e vai para o primeiro que existir */
document.addEventListener('click', async e => {
  const a = e.target.closest('a[data-page]'); if (!a) return;
  e.preventDefault();
  const nomes = PAGES[a.dataset.page];
  for (const n of nomes) {
    try {
      const r = await fetch(encodeURI(n), { method: 'HEAD' });
      if (r.ok) { location.href = encodeURI(n); return; }
    } catch (_) { break; }            // abrindo direto do computador (file://): usa o link normal
  }
  location.href = encodeURI(nomes[0]);
});
