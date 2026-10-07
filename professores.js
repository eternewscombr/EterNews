/* ============================================================
   ETER NEWS — BLOGS DOS PROFESSORES (dados + componentes)
   Usado por index.html (cards) e blogs.html (página dinâmica).

   ► Para adicionar um professor: copie um bloco da lista abaixo,
     preencha e, se tiver as 5 respostas das perguntas padrão, use
     posts: postsPadrao([r1, r2, r3, r4, r5]).
     Não é preciso criar nenhuma página nova.
   ► A ORDEM da lista é a ordem em que os professores aparecem.
   ► genero: "f" (Professora) ou "m" (Professor).
   ► foto: caminho da imagem (vazio = mostra as iniciais).
============================================================ */

/* As 5 perguntas padrão: cada uma vira uma publicação no blog */
const PERGUNTAS_PADRAO = [
    { titulo: "Por que escolhi essa profissão",                 categoria: "Minha história" },
    { titulo: "Uma experiência que marcou minha carreira",      categoria: "Experiência" },
    { titulo: "A maior dificuldade dos alunos e minha dica",    categoria: "Dica" },
    { titulo: "Como estudar e aprender melhor a minha matéria", categoria: "Como estudar" },
    { titulo: "Meu conselho para os alunos da ETE República",   categoria: "Conselho" }
];

/* Monta as publicações a partir das respostas (na ordem das perguntas).
   Resposta vazia/null = a publicação não é criada. */
function postsPadrao(respostas) {
    return PERGUNTAS_PADRAO
        .map((p, i) => ({ titulo: p.titulo, categoria: p.categoria, conteudo: respostas[i] }))
        .filter(p => p.conteudo && String(p.conteudo).trim());
}

const professores = [
    {
        id: "Aline",
        nome: "Aline",
        genero: "f",
        materia: "Português/POE",
        foto: "LOGOS/aline.webp",
        descricao: "",
        posts: postsPadrao([
            "Minha mãe foi professora, e eu, frequentemente, ia à escola com ela. Com isso, aprendi a gostar da dinâmica do ambiente escolar. Além disso, é singular saber que a educação pode transformar a vida das pessoas. Como sempre gostei de ler e escrever, escolhi cursar Letras.",
            "Os momentos marcantes são aqueles que demonstram, não só o ensino do conteúdo em si, mas a troca de vivências, afeto e respeito.",
            "A principal dificuldade é ter interesse na aula e manter a concentração, devido à concorrência com a tecnologia. A dica é valorizar a escola e o trabalho dos professores, respeitando as características de cada um.",
            "Na minha matéria, é importantíssimo que os alunos se mantenham atualizados sobre o que acontece no Brasil e no mundo; leiam bastante e assistam a filmes, séries e documentários.",
            "Minha mensagem aos alunos é esta: não basta sonhar, é preciso lutar para que os sonhos se tornem realidade. Estudem, trabalhem e se dediquem. É isso que, no fim das contas, vale a pena."
        ])
    },
    {
        id: "professor-ingles",   /* id mantido do cadastro anterior ("Professor de ingles") */
        nome: "Luciana",
        genero: "f",
        materia: "Inglês",
        foto: "LOGOS/luciana.webp",
        descricao: "",
        posts: postsPadrao([
            "Comecei a estudar inglês no Ensino Médio Técnico e gostei muito das estratégias de leitura e das maneiras de aprender inglês voltadas para o técnico. Para mim, fazia mais sentido dessa forma. Foi então que escolhi fazer faculdade de Letras Inglês e seguir nessa profissão depois.",

            "Tive duas experiências bem marcantes. Uma foi com um aluno que tinha muitas dificuldades nas aulas. Ele não era um aluno bagunceiro nem nada assim, realmente tinha dificuldade com a matéria e com os exercícios. Quando comecei a conversar mais com ele, descobri que o problema era que ele chegava à escola sem ter comido nada durante o dia inteiro. Então, comecei a levar um pacote de biscoito para ele todos os dias, porque era o que eu tinha. Quando ele começou a comer durante a minha aula, começou também a melhorar na matéria. Essa foi a primeira experiência.\n\n" +
            "A segunda experiência que também foi muito marcante foi com um aluno meu que tinha servido nas tropas da ONU no Haiti. Ele estava lá na época em que aconteceu o terremoto, dentro de um canhão de guerra. Foi em um dia em que tínhamos poucos alunos em sala, e ele contou toda a história para a gente. Quando saiu do quartel em que estava e foi para o canhão, depois que eles saíram do canhão, tinha acontecido o terremoto e todo mundo ao redor tinha morrido. Só tinham sobrado eles dentro do canhão. Na semana seguinte, ele me trouxe um símbolo que usava na época em que servia lá e me deu de presente.",

            "Eu vejo que a maior dificuldade é que, normalmente, os alunos chegam ao Ensino Médio com aquela aprendizagem de cursinho ou até da Educação Fundamental de que precisam traduzir tudo. E não precisa traduzir tudo. Acho que traduzir, às vezes, acaba prendendo eles demais ao significado específico e à informação de cada palavra do texto, em vez de compreenderem o texto como um todo.\n\n" +
            "Então, o que eu sempre procuro fazer quando começo com uma turma nova é, na primeira aula, passar alguns exercícios sobre isso: mostrar como eles conseguem tirar informações do texto inteiro, mesmo que não compreendam algumas palavras. Depois disso, para aprender a gramática, o vocabulário e todo o restante da matéria, fica tudo mais fácil quando eles entendem o texto e partem dele para conseguir compreender as coisas.",

            "A minha primeira recomendação é que eles tentem entender o todo, em vez de ficar se prendendo à conjugação exata de um verbo, ao significado exato de uma palavra ou à necessidade de entender tudo que está no texto. Tentar tirar primeiro as principais informações. A partir delas, eles conseguem desenvolver o raciocínio para deduzir as outras informações e tudo mais.\n\n" +
            "A segunda dica que eu sempre dou é que, como hoje em dia vocês têm acesso a várias formas de tecnologia, estão com a internet na palma da mão e tudo mais, é importante buscar conteúdo. Antigamente, o pessoal falava que tinha que ler jornal, tinha que ler texto. Hoje em dia, vocês têm tudo muito mais fácil. Então, ver muito vídeo, filme, YouTube, Instagram, tudo em inglês, porque vocês vão se habituando com o vocabulário, até com a pronúncia das palavras, e vendo tudo isso dentro de um contexto que faz sentido para vocês.",

            "Como eu também fui aluna de técnico da FAETEC, eu acho que, primeiro de tudo, vocês já fizeram uma primeira escolha profissional. Mesmo que não seja a profissão que vocês vão levar para o resto da vida, vocês já estão aprendendo algumas coisas sobre carreira, sobre como se portar e como desenvolver as coisas, que vocês vão levar para a vida de vocês.\n\n" +
            "A partir daí, quando vocês forem, seja para a mesma área ou para outras, vocês devem continuar lembrando dessas coisas que viram aqui. Porque, de uma forma ou de outra, como eu falei, no meu caso eu não segui na área de informática, mas o inglês, para mim, fez muito mais sentido dentro da informática.\n\n" +
            "Então, vocês devem tentar buscar sempre o que viram aqui e como isso se aplica à realidade profissional que vocês estiverem vivendo na época. Se for da minha área, melhor ainda. Mas, se não for também, sempre existe uma possibilidade de puxar um gancho."
        ])
    },
    {
        id: "Henrique",
        nome: "Henrique",
        genero: "m",
        materia: "Biologia",
        foto: "LOGOS/henrique.webp",
        descricao: "",
        posts: postsPadrao([
            "A identificação com a Biologia me fez escolher ser biólogo, e o caminho para o magistério foi uma consequência, para poder transmitir o que eu gosto.",
            "Foi encontrar uma aluna que havia chamado a minha atenção e dizer a ela que estava desperdiçando o seu potencial. Ela foi em frente e fez doutorado; a banca deu resultado.",
            "Atualmente, a perda na capacidade de concentração. Acho que a leitura contribui bastante para melhorar.",
            "Revisando a matéria dada a cada aula, antes da próxima, e anotando as dúvidas para perguntar aos professores.",
            "Procure sempre se manter atualizado na área que você escolheu profissionalmente. Nunca pare de estudar."
        ])
    },
    {
        id: "Renata",
        nome: "Renata",
        genero: "f",
        materia: "Geografia",
        foto: "LOGOS/renata.jpg",   /* ainda sem foto no documento: mostra as iniciais */
        descricao: "",
        posts: postsPadrao([
    "Bom, eu escolhi essa profissão porque eu gosto da escola. Sempre gostei quando era estudante, enfim, porque eu gosto dessa relação com as pessoas, das pessoas pensando, discutindo, debatendo diferentes temas, né? Porque eu amo Geografia, sou apaixonada por essa ciência. Acho que a escola é meu lugar, então por isso permaneço, apesar de todas as dificuldades, de todos os problemas que a gente enfrenta.",

    "Bom, eu tive muitas experiências marcantes, tanto boas quanto não tão boas, né, ruins. Mas, para mim, é sempre muito marcante, muito mesmo, quando eu vejo meus alunos, principalmente na FAETEC, que é onde eu dou aula para o Ensino Médio, quando eu vejo vocês voltando, dizendo que passaram para as universidades públicas que vocês querem estudar, que vocês estão seguindo caminhos legais.\n\n" +
    "Eu vejo no Instagram vocês se desenvolvendo, assim, e isso é sempre muito marcante para mim. Então, são várias dessas experiências, ainda bem.",

    "Bom, a principal dificuldade que eu percebo nos alunos é uma coisa que não é de agora, né, mas também não é tão antiga, que é essa quase impossibilidade de sentar, estudar, ler um texto, fazer suas próprias anotações, pensar, participar das aulas, das discussões, né?\n\n" +
    "Então, eu acredito que as redes sociais, as telas, isso tudo cada vez mais vem atrapalhando processos de aprendizagem que não envelhecem. Aprender, se desenvolver intelectualmente, dá trabalho. Não é legal sempre, né? Tem muitos momentos em que é chato mesmo, mas é assim que o conhecimento se desenvolve, assim que a mente das pessoas se desenvolve.\n\n" +
    "Eu vejo cada vez mais dificuldade nos alunos conseguirem isso: concentração, disponibilidade, vontade mesmo, assim, talvez por não enxergarem mais um futuro através da educação, né? Então, isso tem sido uma dificuldade muito grande em todos os lugares em que eu dou aula, enfim.",

    "Recomendo, para estudar e aprender melhor a minha matéria, Geografia, mas não só, principalmente na área de Ciências Humanas, se manter atualizado, ter paciência, porque são disciplinas, né? Geografia, História, Sociologia, Filosofia são disciplinas necessárias para o ser humano entender o mundo, entender a sociedade, entender a si próprio, né?\n\n" +
    "E, diante disso, encontrar seus melhores caminhos. Então, eu indico que eles se mantenham atualizados. Claro que a gente nunca vai saber de tudo que está acontecendo em todo lugar, também isso não é necessário, mas que exista um hábito de leituras de jornais, de informação, assim. Acho que é a minha dica.\n\n" +
    "É muito estranho chegar numa aula, saber que tem coisas importantes acontecendo no mundo e alunos que têm acesso à informação não fazerem ideia daquilo, assim, nem de ouvir falar. Então, isso sempre me deixa muito surpresa e triste também.",

    "E, como mensagem para o futuro e carreira, né, eu acho que é entender que construir um futuro que se quer, a gente precisa construir, né? E que isso é um trabalho de formiguinha: um passinho cada dia, um pouquinho de cada vez.\n\n" +
    "Saber buscar, aproveitar as oportunidades, né, se empenhar. Nem sempre o empenho vai ser reconhecido ou vai trazer aqueles resultados imediatos, mas, no final das contas, ou passado um tempo, tudo aquilo que se foi construindo, degrau por degrau, te leva a lugares importantes e para a pessoa se sentir realizada profissionalmente.\n\n" +
    "Então, que tenha paciência e construa o futuro que deseja."
])
    },
    {
        id: "walter-alo",   /* perfil existente mantido (sem duplicar) e posicionado por último */
        nome: "Walter Alô",
        genero: "m",
        materia: "História",
        foto: "LOGOS/walter alo.jpeg",   // ex.: "LOGOS/professores/walter-alo.jpg" (vazio = iniciais)
        descricao: "Apresentação do professor. Substitua por um texto sobre sua trajetória e sua relação com a matéria.",
      posts: postsPadrao([
    "Desde pequeno gostei de ler, o que foi me gerando curiosidade, principalmente em relação a culturas, povos, religiões, o que fui encontrando mais concretamente no estudo da História, da Filosofia. Ser professor, para mim, foi consequência da minha personalidade, de compartilhar, ser solidário, acho. Mas foi um excelente professor que tive no antigo segundo grau que me fez consolidar a vocação do magistério.",

    "Acho que muitas: a alegria de uma boa aula; a aceitação dos alunos em relação a novas experiências pedagógicas; a percepção de que as reflexões nas aulas abriram portas para a conscientização social e política do mundo e do país, para a transformação da realidade, para o exercício da cidadania.\n\n" +
    "E, sem dúvida, ter o retorno dos alunos nos dizendo que se estabeleceram bem e com sucesso profissional. Que estão felizes.",

    "Acredito que tenha sido a perda da cultura da leitura. Quem lê escreve, pensa e fala melhor, vai ter mais ferramentas para entender e transformar a sociedade, o mundo, para se realizar pessoal e profissionalmente.\n\n" +
    "Outra questão, que é mundial, é a utilização exagerada das mídias e redes sociais, o que é uma ironia, pois a tecnologia abriu portas inimagináveis para o conhecimento, o estudo.\n\n" +
    "Dica? Usar os benefícios da tecnologia, Internet, de maneira racional e construtiva, mas ler, ler!! Inclusive e-books.",

    "Em relação à História, é imprescindível a leitura, hábito que se constrói desde os primeiros anos escolares, pressupondo prazer.\n\n" +
    "Pensando no dia a dia da sala de aula, a atenção nas aulas, nas explicações e uma disciplina mínima de estudo além do tempo na escola. Sei que, numa escola como a nossa, fica pesado...\n\n" +
    "E aproveitar a incomparável oferta de conhecimento que a tecnologia oferece, mas de maneira equilibrada na Internet.",

    "Para se realizar profissionalmente em qualquer carreira é preciso disciplina no estudo, curiosidade, dedicação e amor, prazer no hábito de estudar. Vai chegar um momento em que no seu caminho haverá a necessidade de se aprofundar em uma área. Então se dedique, tente ir além do referencial que te deram.\n\n" +
    "Estes passos, sem dúvida, serão produtivos, porém outros fatores como sorte, relações pessoais e contatos, network, são importantes. Uma questão importante na futura trajetória profissional é a maturidade, o que na faixa etária de vocês, concluintes do ensino médio, ainda é algo em construção.\n\n" +
    "Nesse sentido, terminou a faculdade, emenda uma pós-graduação, um mestrado, não deixem de se qualificar, invistam em idiomas e se aperfeiçoem, pois o mundo onde vocês vão trabalhar será cada vez mais competitivo.\n\n" +
    "Busquem fazer uma CARREIRA, com direitos sociais assegurados e cuidado com as \"armadilhas\" da ideia que empreender é para todos..."
])
    }
];

const BLOGS_PAGE = "blogs.html";

/* ── Componentes (sem innerHTML com dados: seguro contra injeção) ── */
function profIniciais(nome) {
    return nome.split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join("");
}

/* "Professora de Geografia" / "Professor de História" */
function profCargo(prof) {
    return (prof.genero === "f" ? "Professora" : "Professor") + " de " + prof.materia;
}

function profAvatar(prof) {
    const box = document.createElement("div");
    box.className = "prof-avatar";
    const iniciais = () => { box.textContent = profIniciais(prof.nome); };
    if (prof.foto) {
        const img = document.createElement("img");
        img.src = prof.foto;
        img.alt = "Foto de " + prof.nome;
        img.loading = "lazy";
        img.onerror = () => { img.remove(); iniciais(); };
        box.appendChild(img);
    } else {
        iniciais();
    }
    return box;
}

function profCard(prof) {
    const a = document.createElement("a");
    a.className = "prof-card";
    a.href = BLOGS_PAGE + "?professor=" + encodeURIComponent(prof.id);
    a.dataset.professor = prof.id;
    const nome = document.createElement("h3");
    nome.textContent = prof.nome;
    const mat = document.createElement("p");
    mat.textContent = profCargo(prof);
    a.append(profAvatar(prof), nome, mat);
    return a;
}

function profRenderGrid(container, lista) {
    container.replaceChildren(...lista.map(profCard));
}

/* ── Estilos dos cards (isolados com prefixo .prof-) ── */
(function () {
    const css = `
    .prof-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(190px,1fr)); gap:var(--sp-6); margin-bottom:var(--sp-10); }
    .prof-card { display:flex; flex-direction:column; align-items:center; text-align:center; gap:var(--sp-2);
        padding:var(--sp-6) var(--sp-4); background:var(--color-surface-2); border:1px solid var(--color-border);
        border-radius:var(--radius-lg); transition:transform var(--t-base), border-color var(--t-base), box-shadow var(--t-base); }
    .prof-card:hover { transform:translateY(-4px); border-color:var(--color-border-hover); box-shadow:var(--shadow-md); }
    .prof-card h3 { font-size:var(--text-lg); font-weight:800; margin-top:var(--sp-3); }
    .prof-card p { font-size:var(--text-sm); color:var(--color-gray-300); }
    .prof-avatar { width:clamp(96px,14vw,128px); aspect-ratio:1; border-radius:50%; overflow:hidden; flex-shrink:0;
        display:flex; align-items:center; justify-content:center; background:var(--color-surface-3);
        border:2px solid rgba(255,255,255,0.15); font-weight:900; letter-spacing:0.04em; color:var(--color-white);
        font-size:clamp(1.5rem,4vw,2.25rem); }
    .prof-avatar img { width:100%; height:100%; object-fit:cover; }
    @media (max-width:480px) { .prof-grid { grid-template-columns:repeat(2,1fr); gap:var(--sp-3); } }`;
    const s = document.createElement("style");
    s.id = "prof-estilos";
    s.textContent = css;
    document.head.appendChild(s);
})();
