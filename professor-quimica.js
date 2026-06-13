(() => {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  let settings = null;
  let questions = [];

  const FONT_OPTIONS = ['inter','arial','trebuchet','verdana','georgia','times','palatino'];

  const DEFAULT_SETTINGS = {
    "slug": "missao-ilhas-da-quimica-prenat-v1",
    "brand": "PRENAT+",
    "missionName": "Missão Ilhas da Química",
    "missionKicker": "CAMPO DE TREINO PRENAT+",
    "subtitle": "Uma jornada gamificada pela Química do zero ao Boss Final.",
    "intro": "A tartaruga PRENAT+ vai atravessar ilhas temáticas de Química. Cada ilha é uma revisão estratégica: acerte, preserve vidas, ganhe estrelas, acumule XP e desbloqueie a próxima travessia.",
    "studentThemeNote": "Cada rodada sorteia perguntas do banco da ilha. Você pode colocar muitas questões no professor; o jogo seleciona apenas a quantidade configurada para aquela fase.",
    "showMetaToStudent": false,
    "logo": "logo-prenat.png",
    "fontBodyKey": "inter",
    "fontHeadingKey": "inter",
    "starsMax": 5,
    "starThresholds": [
      60,
      65,
      70,
      75,
      80
    ],
    "xpPerCorrect": 10,
    "xpPerStar": 60,
    "xpCompletionBonus": 100,
    "coinPerStar": 4,
    "coinCompletionBonus": 10,
    "ranks": [
      {
        "name": "Ovo de Laboratório",
        "icon": "🥚",
        "visualStage": 0,
        "description": "Você está começando a travessia. A casca protege sua base antes da primeira reação."
      },
      {
        "name": "Filhote do Casco Atômico",
        "icon": "🐢",
        "visualStage": 1,
        "description": "Você rompeu a casca e começou a enxergar a matéria com olhar químico."
      },
      {
        "name": "Explorador das Misturas",
        "icon": "🐢",
        "visualStage": 2,
        "description": "Você já identifica sistemas, fases e propriedades usadas para separar componentes."
      },
      {
        "name": "Guardião das Ligações",
        "icon": "🐢",
        "visualStage": 3,
        "description": "Você começa a prever estruturas, interações e propriedades das substâncias."
      },
      {
        "name": "Navegador dos Cálculos",
        "icon": "🐢",
        "visualStage": 4,
        "description": "Você atravessa proporções, dados e raciocínios quantitativos com mais segurança."
      },
      {
        "name": "Mestre das Reações",
        "icon": "🐢",
        "visualStage": 5,
        "description": "Você domina transformações, energia, equilíbrio e velocidade das reações."
      },
      {
        "name": "Alquimista PRENAT+",
        "icon": "🐢",
        "visualStage": 6,
        "description": "Você integra toda a Química e se aproxima do Boss Final."
      },
      {
        "name": "Grande Mestre da Travessia Química",
        "icon": "🏆",
        "visualStage": 7,
        "description": "Você venceu o desafio cumulativo e concluiu a Missão Ilhas da Química."
      }
    ],
    "phases": [
      {
        "id": 1,
        "name": "Ilha de Dalton",
        "title": "Matéria, Energia e Modelos Atômicos",
        "story": "Nesta primeira ilha, você vai romper a casca da Química: matéria, energia, mudanças de estado, estrutura atômica e modelos atômicos. Proteja suas vidas e construa sua base.",
        "minPercent": 60,
        "lives": 3,
        "questionLimit": 10,
        "shuffle": true,
        "rewardRankIndex": 1,
        "difficultyLabel": "Aquecimento",
        "iconStage": 0,
        "icon": "⚛️",
        "x": 8,
        "y": 11
      },
      {
        "id": 2,
        "name": "Praia das Misturas",
        "title": "Misturas e Separação",
        "story": "Aqui você vai atravessar sistemas homogêneos e heterogêneos, fases, componentes e métodos de separação. Observe propriedades, não apenas nomes decorados.",
        "minPercent": 60,
        "lives": 3,
        "questionLimit": 10,
        "shuffle": true,
        "rewardRankIndex": 2,
        "difficultyLabel": "Base contextual",
        "iconStage": 1,
        "icon": "🧪",
        "x": 30,
        "y": 24
      },
      {
        "id": 3,
        "name": "Ponte das Ligações",
        "title": "Ligações Químicas",
        "story": "Você vai cruzar pontes entre átomos: ligação iônica, covalente, metálica, polaridade, geometria e propriedades das substâncias.",
        "minPercent": 65,
        "lives": 4,
        "questionLimit": 15,
        "shuffle": true,
        "rewardRankIndex": 3,
        "difficultyLabel": "Interpretação",
        "iconStage": 2,
        "icon": "🔗",
        "x": 56,
        "y": 13
      },
      {
        "id": 4,
        "name": "Gruta das Funções",
        "title": "Funções Inorgânicas e Interações",
        "story": "Nesta ilha, você vai reconhecer ácidos, bases, sais, óxidos, geometria molecular e forças intermoleculares em situações do cotidiano.",
        "minPercent": 65,
        "lives": 4,
        "questionLimit": 15,
        "shuffle": true,
        "rewardRankIndex": 3,
        "difficultyLabel": "Conceitual forte",
        "iconStage": 3,
        "icon": "💧",
        "x": 79,
        "y": 28
      },
      {
        "id": 5,
        "name": "Balança Estequiométrica",
        "title": "Estequiometria",
        "story": "Agora a travessia pede proporção, conservação de massa, reagente limitante, excesso, rendimento e leitura cuidadosa de dados.",
        "minPercent": 70,
        "lives": 5,
        "questionLimit": 20,
        "shuffle": true,
        "rewardRankIndex": 4,
        "difficultyLabel": "Cálculo guiado",
        "iconStage": 4,
        "icon": "⚖️",
        "x": 52,
        "y": 43
      },
      {
        "id": 6,
        "name": "Farol Radioativo",
        "title": "Radioatividade",
        "story": "Nesta ilha, você vai lidar com emissões, meia-vida, aplicações médicas, riscos ambientais e leitura crítica de contextos nucleares.",
        "minPercent": 70,
        "lives": 5,
        "questionLimit": 20,
        "shuffle": true,
        "rewardRankIndex": 4,
        "difficultyLabel": "Aplicações",
        "iconStage": 5,
        "icon": "☢️",
        "x": 24,
        "y": 47
      },
      {
        "id": 7,
        "name": "Corrente Cinética",
        "title": "Cinética Química",
        "story": "Você vai enfrentar velocidade das reações, catalisadores, temperatura, superfície de contato, concentração e colisões efetivas.",
        "minPercent": 75,
        "lives": 6,
        "questionLimit": 25,
        "shuffle": true,
        "rewardRankIndex": 5,
        "difficultyLabel": "Médio-forte",
        "iconStage": 6,
        "icon": "⏱️",
        "x": 10,
        "y": 62
      },
      {
        "id": 8,
        "name": "Lago das Soluções",
        "title": "Soluções",
        "story": "Aqui aparecem concentração, diluição, mistura de soluções, solubilidade, curvas, unidades e interpretação de preparo de soluções.",
        "minPercent": 75,
        "lives": 6,
        "questionLimit": 25,
        "shuffle": true,
        "rewardRankIndex": 5,
        "difficultyLabel": "Dados e gráficos",
        "iconStage": 7,
        "icon": "🌊",
        "x": 37,
        "y": 67
      },
      {
        "id": 9,
        "name": "Usina Eletroquímica",
        "title": "Eletroquímica",
        "story": "Nesta ilha, você vai percorrer oxirredução, NOX, pilhas, eletrólise, corrosão e aplicações tecnológicas.",
        "minPercent": 80,
        "lives": 7,
        "questionLimit": 30,
        "shuffle": true,
        "rewardRankIndex": 6,
        "difficultyLabel": "Avançado",
        "iconStage": 8,
        "icon": "🔋",
        "x": 64,
        "y": 57
      },
      {
        "id": 10,
        "name": "Vulcão do Equilíbrio",
        "title": "Equilíbrio Químico",
        "story": "Você vai controlar o vulcão das reações reversíveis: Kc, deslocamento, Le Châtelier, pH, hidrólise e aplicações industriais.",
        "minPercent": 80,
        "lives": 7,
        "questionLimit": 30,
        "shuffle": true,
        "rewardRankIndex": 6,
        "difficultyLabel": "Avançado",
        "iconStage": 9,
        "icon": "🌋",
        "x": 84,
        "y": 70
      },
      {
        "id": 11,
        "name": "Caldeira Termoquímica",
        "title": "Termoquímica",
        "story": "Nesta caldeira, você vai interpretar calor, entalpia, reações exotérmicas e endotérmicas, energia de ligação e combustíveis.",
        "minPercent": 82,
        "lives": 8,
        "questionLimit": 35,
        "shuffle": true,
        "rewardRankIndex": 6,
        "difficultyLabel": "Hard controlado",
        "iconStage": 10,
        "icon": "🔥",
        "x": 55,
        "y": 84
      },
      {
        "id": 12,
        "name": "Floresta Orgânica",
        "title": "Química Orgânica",
        "story": "Você vai atravessar cadeias carbônicas, funções orgânicas, isomeria, propriedades e aplicações em saúde, ambiente e cotidiano.",
        "minPercent": 85,
        "lives": 8,
        "questionLimit": 40,
        "shuffle": true,
        "rewardRankIndex": 7,
        "difficultyLabel": "Hard estratégico",
        "iconStage": 11,
        "icon": "🌿",
        "x": 28,
        "y": 86
      },
      {
        "id": 13,
        "name": "Boss Final",
        "title": "Grande Travessia Química",
        "story": "Chegou o Boss Final. Pode cair qualquer conteúdo das ilhas anteriores. Respire, leia com estratégia, preserve vidas e mostre domínio cumulativo.",
        "minPercent": 85,
        "lives": 9,
        "questionLimit": 45,
        "shuffle": true,
        "rewardRankIndex": 7,
        "difficultyLabel": "Boss cumulativo",
        "iconStage": 12,
        "icon": "🏆🦈",
        "cumulative": true,
        "cumulativeFromPrevious": true,
        "x": 82,
        "y": 91
      }
    ]
  };

  init();

  async function init() {
    settings = await fetchJson('settings.json', DEFAULT_SETTINGS);
    questions = await fetchJson('questions.json', []);
    normalize();
    setupLinks();
    setupTabs();
    populateConfigForm();
    renderPhaseEditors();
    renderQuestionForm();
    renderQuestionBank();
    setupButtons();
    setupRichTextHelpers();
    setupImageTools();
  }

  async function fetchJson(url, fallback) {
    try {
      const response = await fetch(`${url}?v=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(url);
      return await response.json();
    } catch {
      return structuredClone ? structuredClone(fallback) : JSON.parse(JSON.stringify(fallback));
    }
  }

  function normalize() {
    settings = { ...DEFAULT_SETTINGS, ...settings };
    settings.starThresholds = Array.isArray(settings.starThresholds) && settings.starThresholds.length ? settings.starThresholds : [60, 65, 70, 75, 80];
    settings.ranks = Array.isArray(settings.ranks) && settings.ranks.length ? settings.ranks : DEFAULT_SETTINGS.ranks;
    settings.phases = Array.isArray(settings.phases) && settings.phases.length ? settings.phases : DEFAULT_SETTINGS.phases;
    const lastPhaseId = Math.max(...settings.phases.map(p => Number(p.id || 0)));
    settings.phases = settings.phases.map(p => Number(p.id) === lastPhaseId ? { ...p, cumulative: true, cumulativeFromPrevious: true } : p);
    questions = Array.isArray(questions) ? questions.map(normalizeQuestion) : [];
  }

  function normalizeQuestion(q) {
    const options = Array.isArray(q.options) ? q.options.map((op, i) => typeof op === 'string'
      ? { text: op, correct: Number(q.correctIndex) === i, feedback: '' }
      : { text: op.text || '', correct: Boolean(op.correct), feedback: op.feedback || '' }) : [];
    if (!options.some(o => o.correct) && Number.isInteger(q.correctIndex) && options[q.correctIndex]) options[q.correctIndex].correct = true;
    return {
      id: q.id || makeId(),
      phase: Number(q.phase || 1),
      discipline: q.discipline || '',
      topic: q.topic || '',
      difficulty: q.difficulty || '',
      statement: q.statement || q.text || '',
      image: q.image || '',
      options,
      explanation: q.explanation || ''
    };
  }

  function setupLinks() {
    const base = window.location.href.replace(/professor\.html.*$/, '').replace(/index\.html.*$/, '');
    setValue('studentLink', `${base || './'}index.html`);
    setValue('teacherLink', `${base || './'}professor.html`);
    const top = document.getElementById('studentLinkTop');
    if (top) top.href = `${base || './'}index.html`;
  }

  function setupTabs() {
    document.querySelectorAll('[data-tab-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tabBtn;
        document.querySelectorAll('[data-tab]').forEach(panel => panel.classList.toggle('hidden', panel.dataset.tab !== tab));
        document.querySelectorAll('[data-tab-btn]').forEach(b => b.className = 'btn btn-soft');
        btn.className = 'btn btn-primary';
      });
    });
  }

  function setupButtons() {
    document.getElementById('saveConfigLocal')?.addEventListener('click', () => {
      collectConfigFromForm();
      localStorage.setItem('prenat_teacher_settings', JSON.stringify(settings));
      alert('Configuração salva no navegador. Para atualizar o jogo publicado, baixe o settings.json e envie no GitHub.');
      renderQuestionForm();
      renderQuestionBank();
    });
    document.getElementById('resetConfigDefault')?.addEventListener('click', () => {
      if (!confirm('Restaurar a configuração padrão PRENAT+?')) return;
      settings = structuredClone ? structuredClone(DEFAULT_SETTINGS) : JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
      populateConfigForm();
      renderPhaseEditors();
      renderQuestionForm();
    });
    document.getElementById('saveQuestionBtn')?.addEventListener('click', saveQuestionFromForm);
    document.getElementById('clearQuestionBtn')?.addEventListener('click', clearQuestionForm);
    document.getElementById('downloadSettings')?.addEventListener('click', () => { collectConfigFromForm(); downloadJson('settings.json', settings); });
    document.getElementById('downloadQuestions')?.addEventListener('click', () => downloadJson('questions.json', questions));
    document.getElementById('importSettings')?.addEventListener('change', e => importJsonFile(e, data => {
      settings = { ...DEFAULT_SETTINGS, ...data };
      normalize();
      populateConfigForm();
      renderPhaseEditors();
      renderQuestionForm();
      alert('settings.json importado.');
    }));
    document.getElementById('importQuestions')?.addEventListener('change', e => importJsonFile(e, data => {
      questions = Array.isArray(data) ? data.map(normalizeQuestion) : [];
      renderQuestionBank();
      alert('questions.json importado.');
    }));
    document.getElementById('qImage')?.addEventListener('input', updateImagePreview);
    document.getElementById('clearImageBtn')?.addEventListener('click', () => {
      setValue('qImage', '');
      updateImagePreview();
    });
  }

  function populateConfigForm() {
    setValue('brandInput', settings.brand);
    setValue('missionNameInput', settings.missionName);
    setValue('missionKickerInput', settings.missionKicker);
    setValue('logoInput', settings.logo);
    setValue('subtitleInput', settings.subtitle);
    setValue('introInput', settings.intro);
    setValue('studentThemeNoteInput', settings.studentThemeNote);
    setValue('showMetaInput', String(Boolean(settings.showMetaToStudent)));
    setValue('fontBodyInput', FONT_OPTIONS.includes(settings.fontBodyKey) ? settings.fontBodyKey : 'inter');
    setValue('fontHeadingInput', FONT_OPTIONS.includes(settings.fontHeadingKey) ? settings.fontHeadingKey : 'inter');
  }

  function collectConfigFromForm() {
    settings.brand = getValue('brandInput');
    settings.missionName = getValue('missionNameInput');
    settings.missionKicker = getValue('missionKickerInput');
    settings.logo = getValue('logoInput') || 'logo-prenat.png';
    settings.subtitle = getValue('subtitleInput');
    settings.intro = getValue('introInput');
    settings.studentThemeNote = getValue('studentThemeNoteInput');
    settings.showMetaToStudent = getValue('showMetaInput') === 'true';
    settings.fontBodyKey = FONT_OPTIONS.includes(getValue('fontBodyInput')) ? getValue('fontBodyInput') : 'inter';
    settings.fontHeadingKey = FONT_OPTIONS.includes(getValue('fontHeadingInput')) ? getValue('fontHeadingInput') : settings.fontBodyKey;
    settings.phases = settings.phases.map((phase, idx) => ({
      ...phase,
      name: getValue(`phase_${phase.id}_name`),
      title: getValue(`phase_${phase.id}_title`),
      story: getValue(`phase_${phase.id}_story`),
      minPercent: Number(getValue(`phase_${phase.id}_min`) || 60),
      lives: Number(getValue(`phase_${phase.id}_lives`) || 3),
      questionLimit: Number(getValue(`phase_${phase.id}_limit`) || 0),
      shuffle: getValue(`phase_${phase.id}_shuffle`) === 'true',
      rewardRankIndex: Number(getValue(`phase_${phase.id}_rank`) || phase.rewardRankIndex || 0),
      difficultyLabel: getValue(`phase_${phase.id}_difficulty`),
      iconStage: Number(phase.iconStage ?? idx),
      icon: phase.icon || '',
      x: Number(phase.x ?? 50),
      y: Number(phase.y ?? 50),
      starThresholds: phase.starThresholds
    }));
  }

  function renderPhaseEditors() {
    const wrap = document.getElementById('phaseEditorList');
    if (!wrap) return;
    wrap.innerHTML = '';
    settings.phases.forEach(phase => {
      const card = document.createElement('article');
      card.className = 'phase-editor-card';
      card.innerHTML = `
        <div class="phase-editor-head"><h3>${escapeHtml(phase.name)} · ${escapeHtml(phase.title)}</h3><span class="badge-pill">${escapeHtml(phase.difficultyLabel)}</span></div>
        <div class="form-grid three" style="margin-top:14px">
          <div class="form-field"><label>Nome curto</label><input id="phase_${phase.id}_name" value="${escapeAttr(phase.name)}"></div>
          <div class="form-field"><label>Título da fase</label><input id="phase_${phase.id}_title" value="${escapeAttr(phase.title)}"></div>
          <div class="form-field"><label>Rótulo de dificuldade</label><input id="phase_${phase.id}_difficulty" value="${escapeAttr(phase.difficultyLabel)}"></div>
          <div class="form-field"><label>Meta (%)</label><input id="phase_${phase.id}_min" type="number" min="0" max="100" value="${phase.minPercent}"></div>
          <div class="form-field"><label>Vidas</label><input id="phase_${phase.id}_lives" type="number" min="1" value="${phase.lives}"></div>
          <div class="form-field"><label>Questões por tentativa</label><input id="phase_${phase.id}_limit" type="number" min="0" value="${phase.questionLimit}"></div>
          <div class="form-field"><label>Embaralhar questões?</label><select id="phase_${phase.id}_shuffle"><option value="true" ${phase.shuffle ? 'selected' : ''}>Sim</option><option value="false" ${!phase.shuffle ? 'selected' : ''}>Não</option></select></div>
          <div class="form-field"><label>Patente desbloqueada</label><select id="phase_${phase.id}_rank">${settings.ranks.map((rank, idx) => `<option value="${idx}" ${idx === phase.rewardRankIndex ? 'selected' : ''}>${rank.icon} ${escapeHtml(rank.name)}</option>`).join('')}</select></div>
          <div class="form-field full"><label>História da fase</label><textarea id="phase_${phase.id}_story">${escapeHtml(phase.story)}</textarea></div>
        </div>`;
      wrap.appendChild(card);
    });
  }

  function renderQuestionForm() {
    const phaseSelect = document.getElementById('qPhase');
    if (phaseSelect) {
      phaseSelect.innerHTML = settings.phases.map(p => `<option value="${p.id}">${escapeHtml(p.name)} · ${escapeHtml(p.title)}${p.cumulative ? ' · Boss cumulativo' : ''}</option>`).join('');
      phaseSelect.onchange = () => {
        const bankFilter = document.getElementById('bankPhaseFilter');
        if (bankFilter) bankFilter.value = phaseSelect.value;
        renderQuestionBank();
      };
    }
    const bankFilter = document.getElementById('bankPhaseFilter');
    if (bankFilter) {
      bankFilter.innerHTML = '<option value="all">Todas as ilhas</option>' + settings.phases.map(p => `<option value="${p.id}">${escapeHtml(p.name)} · ${escapeHtml(p.title)}${p.cumulative ? ' · Boss cumulativo' : ''}</option>`).join('');
      bankFilter.onchange = renderQuestionBank;
    }
    const options = document.getElementById('optionsEditor');
    if (!options) return;
    options.innerHTML = '';
    letters.forEach((letter, index) => {
      const card = document.createElement('div');
      card.className = 'phase-editor-card';
      card.innerHTML = `
        <div class="phase-editor-head"><h3>Alternativa ${letter}</h3><label><input type="radio" name="correctOption" value="${index}" ${index === 0 ? 'checked' : ''}> Correta</label></div>
        <div class="form-grid" style="margin-top:12px">
          <div class="form-field full rich-field"><label>Texto da alternativa ${letter}</label><textarea id="opt_${index}_text" data-rich="true"></textarea></div>
          <div class="form-field full rich-field"><label>Comentário/distrator da alternativa ${letter}</label><textarea id="opt_${index}_feedback" data-rich="true" placeholder="Explique por que essa alternativa está certa ou errada."></textarea></div>
        </div>`;
      options.appendChild(card);
    });
    setupRichTextHelpers();
  }

  function saveQuestionFromForm() {
    const statement = getValue('qStatement').trim();
    const options = letters.map((_, i) => ({
      text: getValue(`opt_${i}_text`).trim(),
      feedback: getValue(`opt_${i}_feedback`).trim(),
      correct: Number(document.querySelector('input[name="correctOption"]:checked')?.value || 0) === i
    })).filter(op => op.text);

    if (!statement) return alert('Preencha o enunciado da questão.');
    if (options.length < 2) return alert('Preencha pelo menos duas alternativas. O ideal é usar cinco.');
    if (!options.some(op => op.correct)) options[0].correct = true;

    const editingId = getValue('editingQuestionId');
    const question = {
      id: editingId || makeId(),
      phase: Number(getValue('qPhase') || 1),
      discipline: getValue('qDiscipline'),
      topic: getValue('qTopic'),
      difficulty: getValue('qDifficulty'),
      statement,
      image: getValue('qImage'),
      options,
      explanation: getValue('qExplanation')
    };

    const index = questions.findIndex(q => q.id === editingId);
    if (index >= 0) questions[index] = question;
    else questions.push(question);

    clearQuestionForm();
    renderQuestionBank();
    alert('Questão salva no painel. Para atualizar o site publicado, baixe o questions.json e envie no GitHub.');
  }

  function editQuestion(id) {
    const q = questions.find(item => item.id === id);
    if (!q) return;
    setValue('editingQuestionId', q.id);
    setValue('qPhase', q.phase);
    const bankFilter = document.getElementById('bankPhaseFilter');
    if (bankFilter) bankFilter.value = String(q.phase);
    setValue('qDiscipline', q.discipline);
    setValue('qTopic', q.topic);
    setValue('qDifficulty', q.difficulty);
    setValue('qStatement', q.statement);
    setValue('qImage', q.image);
    updateImagePreview();
    setValue('qExplanation', q.explanation);
    letters.forEach((_, i) => {
      const op = q.options[i] || { text:'', feedback:'', correct:false };
      setValue(`opt_${i}_text`, op.text);
      setValue(`opt_${i}_feedback`, op.feedback);
      const radio = document.querySelector(`input[name="correctOption"][value="${i}"]`);
      if (radio) radio.checked = Boolean(op.correct);
    });
    document.querySelector('[data-tab-btn="questoes"]')?.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function deleteQuestion(id) {
    if (!confirm('Excluir esta questão do banco?')) return;
    questions = questions.filter(q => q.id !== id);
    renderQuestionBank();
  }

  function clearQuestionForm() {
    ['editingQuestionId','qDiscipline','qTopic','qDifficulty','qStatement','qImage','qExplanation'].forEach(id => setValue(id, ''));
    setValue('qPhase', settings.phases[0]?.id || 1);
    letters.forEach((_, i) => {
      setValue(`opt_${i}_text`, '');
      setValue(`opt_${i}_feedback`, '');
      const radio = document.querySelector(`input[name="correctOption"][value="${i}"]`);
      if (radio) radio.checked = i === 0;
    });
    updateImagePreview();
  }

  function renderQuestionBank() {
    const list = document.getElementById('questionBankList');
    const stats = document.getElementById('phaseQuestionStats');
    const filter = document.getElementById('bankPhaseFilter')?.value || 'all';
    if (!list) return;

    const counts = {};
    questions.forEach(q => { counts[q.phase] = (counts[q.phase] || 0) + 1; });

    if (stats) {
      const selectedPhase = filter === 'all' ? null : settings.phases.find(p => Number(p.id) === Number(filter));
      if (selectedPhase) {
        const direct = counts[selectedPhase.id] || 0;
        const cumulative = selectedPhase.cumulative ? questions.filter(q => Number(q.phase) <= Number(selectedPhase.id)).length : direct;
        stats.innerHTML = `<strong>${escapeHtml(selectedPhase.name)}</strong><span>${direct} questão(ões) cadastrada(s) diretamente nesta ilha${selectedPhase.cumulative ? ` · ${cumulative} no banco cumulativo do Boss` : ''}</span>`;
      } else {
        const total = questions.length;
        const chips = settings.phases.map(p => `<span class="bank-chip">${escapeHtml(p.name)}: <strong>${counts[p.id] || 0}</strong></span>`).join('');
        stats.innerHTML = `<strong>Total: ${total} questão(ões)</strong><div>${chips}</div>`;
      }
    }

    if (!questions.length) {
      list.innerHTML = '<p class="warning-tip">Ainda não há questões cadastradas. Escolha uma ilha no campo “Fase/ilha” e salve as questões daquela temática.</p>';
      return;
    }

    const visible = [...questions]
      .filter(q => filter === 'all' || Number(q.phase) === Number(filter))
      .sort((a,b) => a.phase - b.phase);

    if (!visible.length) {
      list.innerHTML = '<p class="warning-tip">Essa ilha ainda não possui questões cadastradas. Cadastre questões selecionando essa ilha no formulário acima.</p>';
      return;
    }

    list.innerHTML = '';

    if (filter === 'all') {
      settings.phases.forEach(phase => {
        const group = visible.filter(q => Number(q.phase) === Number(phase.id));
        const box = document.createElement('section');
        box.className = 'question-phase-group';
        box.innerHTML = `<h3>${escapeHtml(phase.name)} · ${escapeHtml(phase.title)} <span>${group.length} questão(ões)</span></h3>`;
        if (!group.length) {
          box.innerHTML += '<p class="small-muted">Nenhuma questão cadastrada nesta ilha ainda.</p>';
        } else {
          group.forEach(q => box.appendChild(questionRow(q)));
        }
        list.appendChild(box);
      });
    } else {
      visible.forEach(q => list.appendChild(questionRow(q)));
    }

    list.querySelectorAll('[data-edit]').forEach(btn => btn.addEventListener('click', () => editQuestion(btn.dataset.edit)));
    list.querySelectorAll('[data-delete]').forEach(btn => btn.addEventListener('click', () => deleteQuestion(btn.dataset.delete)));
  }

  function questionRow(q) {
    const phase = settings.phases.find(p => p.id === q.phase);
    const row = document.createElement('article');
    row.className = 'question-row';
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(phase ? `${phase.name} · ${phase.title}` : `Fase ${q.phase}`)}</strong>
        <small>${escapeHtml([q.discipline, q.topic, q.difficulty].filter(Boolean).join(' · ') || 'Sem etiquetas')}</small>
        <p>${escapeHtml(stripHtml(q.statement).slice(0, 180))}${stripHtml(q.statement).length > 180 ? '...' : ''}</p>
      </div>
      <div class="teacher-actions">
        <button class="btn btn-soft small" data-edit="${q.id}">Editar</button>
        <button class="btn btn-soft small danger" data-delete="${q.id}">Excluir</button>
      </div>`;
    return row;
  }

  function setupRichTextHelpers() {
    document.querySelectorAll('textarea[data-rich="true"]').forEach(textarea => {
      if (textarea.dataset.toolbarReady === 'true') return;
      textarea.dataset.toolbarReady = 'true';
      const toolbar = document.createElement('div');
      toolbar.className = 'rich-toolbar';
      toolbar.innerHTML = `
        <button type="button" data-rich-action="sub">x<sub>2</sub> Subscrito</button>
        <button type="button" data-rich-action="sup">x<sup>2</sup> Sobrescrito</button>
        <button type="button" data-rich-action="latex">Fórmula \( \)</button>
        <button type="button" data-rich-action="chem">Auto química</button>
        <button type="button" data-rich-action="arrow">→</button>
        <button type="button" data-rich-action="equilibrium">⇌</button>
        <button type="button" data-rich-action="delta">Δ</button>
      `;
      textarea.parentElement.insertBefore(toolbar, textarea.nextSibling);
      toolbar.addEventListener('click', event => {
        const btn = event.target.closest('button[data-rich-action]');
        if (!btn) return;
        applyRichAction(textarea, btn.dataset.richAction);
      });
    });
  }

  function applyRichAction(textarea, action) {
    textarea.focus();
    if (action === 'sub') return wrapSelection(textarea, '<sub>', '</sub>', '2');
    if (action === 'sup') return wrapSelection(textarea, '<sup>', '</sup>', '2');
    if (action === 'latex') return wrapSelection(textarea, '\\( ', ' \\)', 'Q = m \\cdot c \\cdot \\Delta T');
    if (action === 'arrow') return insertAtCursor(textarea, ' → ');
    if (action === 'equilibrium') return insertAtCursor(textarea, ' ⇌ ');
    if (action === 'delta') return insertAtCursor(textarea, 'Δ');
    if (action === 'chem') return autoSubscriptChemistry(textarea);
  }

  function wrapSelection(textarea, before, after, placeholder) {
    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? textarea.value.length;
    const selected = textarea.value.slice(start, end) || placeholder;
    const next = textarea.value.slice(0, start) + before + selected + after + textarea.value.slice(end);
    textarea.value = next;
    const newStart = start + before.length;
    const newEnd = newStart + selected.length;
    textarea.setSelectionRange(newStart, newEnd);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function insertAtCursor(textarea, value) {
    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? textarea.value.length;
    textarea.value = textarea.value.slice(0, start) + value + textarea.value.slice(end);
    const pos = start + value.length;
    textarea.setSelectionRange(pos, pos);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function autoSubscriptChemistry(textarea) {
    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;
    const hasSelection = end > start;
    const original = hasSelection ? textarea.value.slice(start, end) : textarea.value;
    const converted = convertChemicalNumbers(original);
    if (hasSelection) {
      textarea.value = textarea.value.slice(0, start) + converted + textarea.value.slice(end);
      textarea.setSelectionRange(start, start + converted.length);
    } else {
      textarea.value = converted;
    }
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function convertChemicalNumbers(value) {
    // Converte números em fórmulas químicas comuns sem mexer em números de etapa, porcentagens ou datas.
    // Exemplos: H2O -> H<sub>2</sub>O; Na2CO3 -> Na<sub>2</sub>CO<sub>3</sub>; Ca(OH)2 -> Ca(OH)<sub>2</sub>.
    return String(value || '').replace(/([A-Z][a-z]?|\))([0-9]+)/g, '$1<sub>$2</sub>');
  }

  function setupImageTools() {
    const fileInput = document.getElementById('qImageFile');
    const zone = document.getElementById('imagePasteZone');
    const imageInput = document.getElementById('qImage');
    if (fileInput && fileInput.dataset.imageReady !== 'true') {
      fileInput.dataset.imageReady = 'true';
      fileInput.addEventListener('change', event => {
        const file = event.target.files?.[0];
        if (file) handleImageFile(file);
        event.target.value = '';
      });
    }
    if (zone && zone.dataset.imageReady !== 'true') {
      zone.dataset.imageReady = 'true';
      zone.addEventListener('paste', event => handlePasteImage(event));
      zone.addEventListener('dragover', event => { event.preventDefault(); zone.classList.add('dragging'); });
      zone.addEventListener('dragleave', () => zone.classList.remove('dragging'));
      zone.addEventListener('drop', event => {
        event.preventDefault();
        zone.classList.remove('dragging');
        const file = [...(event.dataTransfer?.files || [])].find(item => item.type.startsWith('image/'));
        if (file) handleImageFile(file);
      });
    }
    if (imageInput && imageInput.dataset.pasteReady !== 'true') {
      imageInput.dataset.pasteReady = 'true';
      imageInput.addEventListener('paste', event => handlePasteImage(event));
    }
    document.addEventListener('paste', event => {
      const active = document.activeElement;
      const isQuestionTabOpen = !document.querySelector('[data-tab="questoes"]')?.classList.contains('hidden');
      if (!isQuestionTabOpen) return;
      if (active?.tagName === 'TEXTAREA' && !event.clipboardData?.files?.length) return;
      handlePasteImage(event);
    });
    updateImagePreview();
  }

  function handlePasteImage(event) {
    const items = [...(event.clipboardData?.items || [])];
    const file = items.find(item => item.type.startsWith('image/'))?.getAsFile();
    if (!file) return;
    event.preventDefault();
    handleImageFile(file);
  }

  async function handleImageFile(file) {
    if (!file.type.startsWith('image/')) return alert('Escolha um arquivo de imagem.');
    try {
      const dataUrl = await imageFileToDataUrl(file, 1200, 0.86);
      setValue('qImage', dataUrl);
      updateImagePreview();
      alert('Imagem adicionada à questão. Ela será salva dentro do questions.json.');
    } catch (error) {
      console.error(error);
      alert('Não consegui carregar essa imagem. Tente PNG ou JPG.');
    }
  }

  function imageFileToDataUrl(file, maxSize = 1200, quality = 0.86) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(img.width * scale));
          canvas.height = Math.max(1, Math.round(img.height * scale));
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const type = file.type === 'image/png' && file.size < 350000 ? 'image/png' : 'image/jpeg';
          resolve(canvas.toDataURL(type, quality));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function updateImagePreview() {
    const value = getValue('qImage').trim();
    const wrap = document.getElementById('qImagePreviewWrap');
    const img = document.getElementById('qImagePreview');
    if (!wrap || !img) return;
    if (!value) {
      wrap.classList.add('hidden');
      img.removeAttribute('src');
      return;
    }
    img.src = value;
    wrap.classList.remove('hidden');
  }


  function downloadJson(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function importJsonFile(event, callback) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try { callback(JSON.parse(reader.result)); }
      catch { alert('Arquivo JSON inválido.'); }
    };
    reader.readAsText(file);
  }

  function makeId() {
    return `q_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
  }

  function getValue(id) { return document.getElementById(id)?.value ?? ''; }
  function setValue(id, value) { const el = document.getElementById(id); if (el) el.value = value ?? ''; }
  function escapeHtml(value) { return String(value ?? '').replace(/[&<>'"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' }[c])); }
  function escapeAttr(value) { return escapeHtml(value).replace(/`/g, '&#096;'); }
  function stripHtml(value) { const div = document.createElement('div'); div.innerHTML = value || ''; return div.textContent || div.innerText || ''; }
})();
