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


  // ===== PRENAT+ SAFE TEACHER SAVE PATCH =====
  function safeClone(data) {
    return JSON.parse(JSON.stringify(data ?? null));
  }

  function missionSlugSafe() {
    return String((settings && settings.slug) || (DEFAULT_SETTINGS && DEFAULT_SETTINGS.slug) || location.pathname || 'prenat_missao').replace(/[^\w\-]+/g, '_');
  }

  function teacherStorageKeys() {
    const slug = missionSlugSafe();
    return {
      questions: `prenat_teacher_questions_${slug}`,
      settings: `prenat_teacher_settings_${slug}`,
      backup: `prenat_teacher_backup_${slug}`,
      last: `prenat_teacher_last_backup_${slug}`
    };
  }

  function extractQuestionArraySafe(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.questions)) return data.questions;
    if (data && typeof data === 'object') {
      const numeric = Object.keys(data)
        .filter(k => /^\d+$/.test(k))
        .sort((a,b) => Number(a) - Number(b))
        .map(k => data[k])
        .filter(q => q && typeof q === 'object' && (q.statement || q.text || Array.isArray(q.options)));
      if (numeric.length) return numeric;
    }
    return [];
  }

  function sanitizeSettingsSafe(data) {
    const source = data && typeof data === 'object' ? data : {};
    const copy = {};
    Object.keys(source).forEach(key => {
      if (/^\d+$/.test(key)) return;
      if (['questions','options','statement','correctIndex','explanation'].includes(key)) return;
      copy[key] = source[key];
    });
    if (!Array.isArray(copy.phases) && DEFAULT_SETTINGS?.phases) copy.phases = safeClone(DEFAULT_SETTINGS.phases);
    if (!Array.isArray(copy.ranks) && DEFAULT_SETTINGS?.ranks) copy.ranks = safeClone(DEFAULT_SETTINGS.ranks);
    return copy;
  }

  function readJsonStorageSafe(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function findLegacyQuestionBankSafe() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (/prenat.*(questions|questoes|backup)/i.test(key || '')) keys.push(key);
    }
    let best = [];
    keys.forEach(key => {
      const data = readJsonStorageSafe(key);
      const arr = extractQuestionArraySafe(data);
      if (arr.length > best.length) best = arr;
      if (data && Array.isArray(data.questions) && data.questions.length > best.length) best = data.questions;
    });
    return best;
  }

  function loadLocalDraftsSafe() {
    const keys = teacherStorageKeys();
    const localSettings = readJsonStorageSafe(keys.settings) || readJsonStorageSafe('prenat_teacher_settings');
    if (localSettings && typeof localSettings === 'object') {
      settings = { ...settings, ...sanitizeSettingsSafe(localSettings) };
    }

    const localQuestions = readJsonStorageSafe(keys.questions) || readJsonStorageSafe('prenat_teacher_questions');
    let localBank = extractQuestionArraySafe(localQuestions);

    if (!localBank.length) {
      const backup = readJsonStorageSafe(keys.backup);
      if (backup?.questions) localBank = extractQuestionArraySafe(backup.questions);
    }

    if (!localBank.length) {
      localBank = findLegacyQuestionBankSafe();
    }

    if (localBank.length) {
      questions = localBank.map(normalizeQuestion);
    }
  }

  function persistTeacherDraftSafe(message) {
    const keys = teacherStorageKeys();
    const cleanSettings = sanitizeSettingsSafe(settings);
    const cleanQuestions = stripOptionFeedbackForGeneralOnly(questions).map(normalizeQuestion);
    questions = cleanQuestions;

    const questionsJson = JSON.stringify(cleanQuestions);
    const settingsJson = JSON.stringify(cleanSettings);
    const backup = {
      type: 'prenat_teacher_emergency_backup',
      version: 3,
      savedAt: new Date().toISOString(),
      missionSlug: missionSlugSafe(),
      settings: cleanSettings,
      questions: cleanQuestions
    };
    const backupJson = JSON.stringify(backup);

    try {
      localStorage.setItem(keys.questions, questionsJson);
      localStorage.setItem(keys.settings, settingsJson);
      localStorage.setItem(keys.backup, backupJson);
      localStorage.setItem(keys.last, backup.savedAt);
      updateTeacherSafeStatus(message || 'Banco salvo automaticamente no navegador.');
      return { ok: true, mode: 'full' };
    } catch (error) {
      console.warn('PRENAT+ salvamento completo falhou; tentando modo leve.', error);
      try {
        localStorage.removeItem(keys.backup);
        localStorage.removeItem(keys.last);
        localStorage.setItem(keys.questions, questionsJson);
        localStorage.setItem(keys.settings, settingsJson);
        updateTeacherSafeStatus((message || 'Banco salvo no navegador.') + ' Backup local interno foi dispensado para economizar espaço. Baixe também o backup de emergência.');
        return { ok: true, mode: 'light', error };
      } catch (secondError) {
        console.error('PRENAT+ salvamento leve também falhou.', secondError);
        updateTeacherSafeStatus('Banco atualizado na tela, mas o navegador não conseguiu salvar localmente. Baixe o questions.json atualizado agora.');
        return { ok: false, mode: 'failed', error: secondError };
      }
    }
  }

  function updateTeacherSafeStatus(message) {
    const totalEl = document.getElementById('bankCountTotal');
    const phaseEl = document.getElementById('bankCountByPhase');
    const statusEl = document.getElementById('teacherSaveStatus');
    const lastEl = document.getElementById('lastBackupTime');
    if (!totalEl && !phaseEl && !statusEl && !lastEl) return;

    const cleanQuestions = extractQuestionArraySafe(questions);
    const counts = {};
    cleanQuestions.forEach(q => { counts[Number(q.phase || 1)] = (counts[Number(q.phase || 1)] || 0) + 1; });

    if (totalEl) totalEl.textContent = String(cleanQuestions.length);
    if (statusEl) {
      statusEl.textContent = cleanQuestions.length
        ? (message || `Há ${cleanQuestions.length} questão(ões) salvas no banco local deste navegador.`)
        : 'Banco local vazio. Se você já tinha questões, importe um backup ou um questions.json.';
    }
    if (lastEl) {
      const saved = localStorage.getItem(teacherStorageKeys().last);
      if (saved) {
        try { lastEl.textContent = new Date(saved).toLocaleString('pt-BR'); }
        catch { lastEl.textContent = saved; }
      } else {
        lastEl.textContent = '—';
      }
    }
    if (phaseEl) {
      phaseEl.innerHTML = (settings.phases || []).map(p => `<span>${escapeHtml(p.name || ('Ilha ' + p.id))}: <strong>${counts[Number(p.id)] || 0}</strong></span>`).join('');
    }
  }

  function downloadEmergencyBackupSafe() {
    collectConfigFromForm?.();
    persistTeacherDraftSafe('Backup de emergência atualizado.');
    const backup = readJsonStorageSafe(teacherStorageKeys().backup);
    downloadJson(`backup-emergencia-${missionSlugSafe()}.json`, backup);
  }

  function importEmergencyBackupSafe(event) {
    importJsonFile(event, data => {
      const importedSettings = sanitizeSettingsSafe(data?.settings || data);
      const importedQuestions = extractQuestionArraySafe(data?.questions || data);
      if (importedSettings && Object.keys(importedSettings).length) settings = { ...settings, ...importedSettings };
      if (importedQuestions.length) questions = importedQuestions.map(normalizeQuestion);
      populateConfigForm?.();
      renderPhaseEditors?.();
      renderQuestionForm?.();
      renderQuestionBank?.();
      persistTeacherDraftSafe(`Backup importado com ${questions.length} questão(ões).`);
      alert(`Backup importado. Banco atual: ${questions.length} questão(ões). Se o backup automático estiver ligado, confira o arquivo baixado na pasta Downloads.`);
    });
  }

  function moveVisibleQuestionsToSelectedPhaseSafe() {
    const filter = document.getElementById('bankPhaseFilter')?.value || 'all';
    const target = Number(document.getElementById('qPhase')?.value || settings.phases?.[0]?.id || 1);
    const phaseName = settings.phases?.find(p => Number(p.id) === target)?.name || `Ilha ${target}`;
    if (!confirm(`Mover as questões ${filter === 'all' ? 'do banco inteiro' : 'do filtro atual'} para ${phaseName}?`)) return;
    questions = questions.map(q => {
      if (filter === 'all' || Number(q.phase) === Number(filter)) return { ...q, phase: target };
      return q;
    });
    renderQuestionBank?.();
    persistTeacherDraftSafe(`Questões movidas para ${phaseName}.`);
  }

  function timestampForFileSafe() {
    const d = new Date();
    const pad = n => String(n).padStart(2,'0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`;
  }

  function shouldAutoDownloadBackupSafe() {
    const box = document.getElementById('autoDownloadBackupOnSave');
    return box ? box.checked : true;
  }

  function autoDownloadBackupAfterSaveSafe() {
    if (!shouldAutoDownloadBackupSafe()) return;
    const cleanQuestions = stripOptionFeedbackForGeneralOnly
      ? stripOptionFeedbackForGeneralOnly(questions).map(normalizeQuestion)
      : extractQuestionArraySafe(questions).map(normalizeQuestion);
    const backup = {
      type: 'prenat_teacher_auto_backup_after_save',
      version: 3,
      savedAt: new Date().toISOString(),
      missionSlug: missionSlugSafe(),
      totalQuestions: cleanQuestions.length,
      settings: sanitizeSettingsSafe(settings),
      questions: cleanQuestions
    };
    downloadJson(`backup-automatico-${missionSlugSafe()}-${timestampForFileSafe()}.json`, backup);
  }


  // ===== PRENAT+ CSV IMPORT + FEEDBACK POSITIVO/NEGATIVO =====
  function normalizeHeaderSafe(value) {
    return String(value || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function pickCsvCell(row, names) {
    const wanted = names.map(normalizeHeaderSafe);
    for (const key of Object.keys(row || {})) {
      if (wanted.includes(normalizeHeaderSafe(key))) return String(row[key] ?? '').trim();
    }
    return '';
  }

  function isTruthyCsv(value) {
    const v = normalizeHeaderSafe(value);
    return ['sim','s','yes','y','true','verdadeiro','correta','correto','x','1'].includes(v);
  }

  function detectCsvDelimiter(firstLine) {
    const semicolon = (firstLine.match(/;/g) || []).length;
    const comma = (firstLine.match(/,/g) || []).length;
    return semicolon >= comma ? ';' : ',';
  }

  function parseCsvTextSafe(text) {
    const clean = String(text || '').replace(/^\uFEFF/, '');
    const firstLine = clean.split(/\r?\n/)[0] || '';
    const delimiter = detectCsvDelimiter(firstLine);
    const rows = [];
    let row = [];
    let cell = '';
    let inQuotes = false;

    for (let i = 0; i < clean.length; i++) {
      const ch = clean[i];
      const next = clean[i + 1];

      if (ch === '"') {
        if (inQuotes && next === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }

      if (!inQuotes && ch === delimiter) {
        row.push(cell);
        cell = '';
        continue;
      }

      if (!inQuotes && (ch === '\n' || ch === '\r')) {
        if (ch === '\r' && next === '\n') i++;
        row.push(cell);
        if (row.some(v => String(v).trim() !== '')) rows.push(row);
        row = [];
        cell = '';
        continue;
      }

      cell += ch;
    }
    row.push(cell);
    if (row.some(v => String(v).trim() !== '')) rows.push(row);

    if (rows.length < 2) return [];
    const headers = rows[0].map(h => String(h || '').trim());
    return rows.slice(1).map(values => {
      const obj = {};
      headers.forEach((h, idx) => { obj[h] = String(values[idx] ?? '').trim(); });
      return obj;
    });
  }

  function resolvePhaseFromCsv(row) {
    const raw = pickCsvCell(row, ['Fase','Ilha','Phase','Ilha/Fase','Fase/Ilha','Número da Ilha','Numero da Ilha','ID da Ilha']);
    const fallback = Number(getValue('qPhase') || settings.phases?.[0]?.id || 1);
    if (!raw) return fallback;

    const numeric = Number(String(raw).replace(/[^\d]/g, ''));
    if (numeric && settings.phases?.some(p => Number(p.id) === numeric)) return numeric;

    const normalized = normalizeHeaderSafe(raw);
    const found = settings.phases?.find(p => {
      const name = normalizeHeaderSafe(p.name);
      const title = normalizeHeaderSafe(p.title);
      return name.includes(normalized) || title.includes(normalized) || normalized.includes(name) || normalized.includes(title);
    });
    return found ? Number(found.id) : fallback;
  }

  function metadataFromCsv(row) {
    const meta = {};
    for (let i = 1; i <= 8; i++) {
      const key = pickCsvCell(row, [`Metadado ${i}`, `Metadata ${i}`]);
      const value = pickCsvCell(row, [`Valor ${i}`, `Value ${i}`]);
      if (key || value) meta[key || `Metadado ${i}`] = value;
    }
    return meta;
  }

  function questionFromCsvRow(row, index) {
    const statement = pickCsvCell(row, ['Enunciado','Questão','Questao','Pergunta','Texto','Statement']);
    if (!statement) return null;

    const sample = normalizeHeaderSafe(statement);
    if (sample.includes('este e o exemplo de um enunciado') || sample.includes('escreva aqui o enunciado completo')) return null;

    const meta = metadataFromCsv(row);
    const category = pickCsvCell(row, ['Categoria','Categoria(s)','Tema','Tópico','Topico','Assunto','Category']);
    const discipline = pickCsvCell(row, ['Disciplina','Materia','Matéria','Area','Área']) || getValue('qDiscipline');
    const difficulty =
      pickCsvCell(row, ['Dificuldade','Nível','Nivel','Difficulty']) ||
      meta['Dificuldade'] ||
      '';

    const options = [];
    for (let i = 1; i <= 8; i++) {
      const text = pickCsvCell(row, [`Alternativa ${i}`, `Opção ${i}`, `Opcao ${i}`, `Alternative ${i}`]);
      if (!text) continue;
      const correct = isTruthyCsv(pickCsvCell(row, [`Alternativa ${i} Correta`, `Opção ${i} Correta`, `Opcao ${i} Correta`, `Correta ${i}`, `Gabarito ${i}`]));
      options.push({ text, correct, feedback: '' });
    }
    if (options.length < 2) return null;
    if (!options.some(op => op.correct)) options[0].correct = true;

    const positive =
      pickCsvCell(row, ['Feedback Positivo','Comentário Positivo','Comentario Positivo','Feedback Acerto','Feedback Correto','Positivo']) ||
      '🎉 Muito bem! A tartaruga PRENAT+ avançou. Você identificou o caminho correto da questão.';
    const negative =
      pickCsvCell(row, ['Feedback Negativo','Comentário Negativo','Comentario Negativo','Feedback Erro','Feedback Errado','Negativo']) ||
      '🐢 Você caiu em uma armadilha da travessia. Revise o raciocínio e observe por que a alternativa correta resolve melhor o problema.';

    return normalizeQuestion({
      id: `q_csv_${Date.now()}_${index}_${Math.random().toString(16).slice(2, 8)}`,
      phase: resolvePhaseFromCsv(row),
      discipline,
      topic: category,
      difficulty,
      statement,
      image: pickCsvCell(row, ['Imagem','Image','URL da Imagem','Link da Imagem']),
      options,
      feedbackPositive: positive,
      feedbackNegative: negative,
      explanation: positive,
      metadata: meta
    });
  }

  function importQuestionsFromCsvFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const rows = parseCsvTextSafe(reader.result);
        const imported = rows.map(questionFromCsvRow).filter(Boolean);
        if (!imported.length) {
          alert('Nenhuma questão válida foi encontrada na planilha. Confira as colunas Enunciado, Alternativas e Correta.');
          event.target.value = '';
          return;
        }

        const invalidImported = [];
        imported.forEach((q, index) => {
          const problems = validateQuestionBeforeStoreSafe(q);
          if (problems.length) invalidImported.push(`Linha ${index + 2}: ${problems.join('; ')}`);
        });
        if (invalidImported.length) {
          alert('Problema(s) encontrado(s) na planilha:\n\n' + invalidImported.slice(0, 12).join('\n') + (invalidImported.length > 12 ? `\n... e mais ${invalidImported.length - 12} linha(s).` : '') + '\n\nCorrija o CSV antes de importar.');
          event.target.value = '';
          return;
        }

        const byPhase = {};
        imported.forEach(q => { byPhase[q.phase] = (byPhase[q.phase] || 0) + 1; });
        const resumo = Object.entries(byPhase).map(([phase, count]) => {
          const p = settings.phases?.find(item => Number(item.id) === Number(phase));
          return `${p?.name || 'Ilha ' + phase}: ${count}`;
        }).join('\n');

        if (!confirm(`Importar ${imported.length} questão(ões) da planilha?\n\n${resumo}\n\nElas serão adicionadas ao banco atual.`)) {
          event.target.value = '';
          return;
        }

        questions = [...questions, ...imported].map(normalizeQuestion);
        renderQuestionBank();
        persistTeacherDraftSafe(`Planilha importada com ${imported.length} questão(ões). Banco atual: ${questions.length}.`);
        autoDownloadBackupAfterSaveSafe();
        alert(`Importação concluída.\n\nForam adicionadas ${imported.length} questão(ões).\nBanco atual: ${questions.length} questão(ões).`);
      } catch (error) {
        console.error(error);
        alert('Não foi possível importar a planilha. Salve como CSV separado por ponto e vírgula e tente novamente.');
      } finally {
        event.target.value = '';
      }
    };
    reader.readAsText(file, 'utf-8');
  }

  function downloadCsvTemplateSafe() {
    const csv = `"Enunciado";"Categoria";"Feedback Positivo";"Feedback Negativo";"Alternativa 1";"Alternativa 1 Correta";"Alternativa 2";"Alternativa 2 Correta";"Alternativa 3";"Alternativa 3 Correta";"Alternativa 4";"Alternativa 4 Correta";"Alternativa 5";"Alternativa 5 Correta";"Alternativa 6";"Alternativa 6 Correta";"Alternativa 7";"Alternativa 7 Correta";"Alternativa 8";"Alternativa 8 Correta";"Metadado 1";"Valor 1";"Metadado 2";"Valor 2";"Metadado 3";"Valor 3";"Ilha/Fase";"Imagem"
"Digite aqui o enunciado";"Tema";"🎉 Muito bem! Explique por que a alternativa correta está certa.";"🐢 Você caiu na armadilha. Explique o erro e o raciocínio correto.";"Alternativa correta";"Sim";"Distrator 1";"Não";"Distrator 2";"Não";"Distrator 3";"Não";"Distrator 4";"Não";"";"";"";"";"";"";"Ano";"2026";"Banca";"ENEM";"Dificuldade";"Média";"1";""`;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `modelo-importacao-${missionSlugSafe()}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  }


  // ===== PRENAT+ ZIP IMPORT COM IMAGENS =====
  function getZipImageMime(filename) {
    const ext = String(filename || '').split('.').pop().toLowerCase();
    if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
    if (ext === 'png') return 'image/png';
    if (ext === 'webp') return 'image/webp';
    if (ext === 'gif') return 'image/gif';
    if (ext === 'svg') return 'image/svg+xml';
    return 'application/octet-stream';
  }

  function basenameSafe(path) {
    return String(path || '').split('/').pop().split('\\').pop().trim();
  }

  function normalizeImageLookupName(name) {
    return normalizeHeaderSafe(basenameSafe(name));
  }

  async function buildImageMapFromZip(zip) {
    const imageMap = {};
    const imageExtensions = /\.(png|jpe?g|webp|gif|svg)$/i;
    const entries = Object.values(zip.files || {});
    for (const file of entries) {
      if (file.dir) continue;
      if (file.name.includes('__MACOSX/')) continue;
      if (!imageExtensions.test(file.name)) continue;
      const baseName = basenameSafe(file.name);
      const mime = getZipImageMime(baseName);
      const base64 = await file.async('base64');
      const dataUrl = `data:${mime};base64,${base64}`;
      imageMap[normalizeImageLookupName(baseName)] = dataUrl;
      imageMap[normalizeImageLookupName(file.name)] = dataUrl;
    }
    return imageMap;
  }

  function findCsvFileInZip(zip) {
    const files = Object.values(zip.files || {}).filter(file =>
      !file.dir &&
      !file.name.includes('__MACOSX/') &&
      /\.csv$/i.test(file.name)
    );
    if (!files.length) return null;
    return files.find(file => /(^|\/)questoes\.csv$/i.test(file.name)) || files[0];
  }

  async function importQuestionsFromZipWithImages(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (typeof JSZip === 'undefined') {
      alert('A biblioteca JSZip não carregou. Confira a internet e recarregue o professor.');
      event.target.value = '';
      return;
    }

    try {
      const zip = await JSZip.loadAsync(file);
      const csvFile = findCsvFileInZip(zip);
      if (!csvFile) {
        alert('O ZIP não possui arquivo CSV. Inclua um arquivo chamado questoes.csv na raiz do pacote.');
        event.target.value = '';
        return;
      }

      const imageMap = await buildImageMapFromZip(zip);
      const csvText = await csvFile.async('string');
      const rows = parseCsvTextSafe(csvText);

      const missingImages = [];
      const imported = rows.map((row, index) => {
        const q = questionFromCsvRow(row, index);
        if (!q) return null;

        const imageRef = pickCsvCell(row, ['Imagem','Image','Arquivo da Imagem','Nome da Imagem','Imagem Nome','URL da Imagem','Link da Imagem']);
        if (imageRef) {
          const normalizedRef = normalizeImageLookupName(imageRef);
          const linkedImage = imageMap[normalizedRef];
          if (linkedImage) {
            q.image = linkedImage;
            q.metadata = { ...(q.metadata || {}), imagemOriginal: basenameSafe(imageRef) };
          } else if (/^https?:\/\//i.test(imageRef) || /^data:image\//i.test(imageRef)) {
            q.image = imageRef;
          } else {
            q.image = '';
            missingImages.push(`Linha ${index + 2}: ${imageRef}`);
          }
        }
        return q;
      }).filter(Boolean);

      if (!imported.length) {
        alert('Nenhuma questão válida foi encontrada no ZIP. Confira se o questoes.csv possui Enunciado, Alternativas e Correta.');
        event.target.value = '';
        return;
      }

      const invalidImported = [];
      imported.forEach((q, index) => {
        const problems = validateQuestionBeforeStoreSafe(q);
        if (problems.length) invalidImported.push(`Questão ${index + 1}: ${problems.join('; ')}`);
      });
      if (invalidImported.length) {
        alert('Problema(s) encontrado(s) no ZIP:\n\n' + invalidImported.slice(0, 12).join('\n') + (invalidImported.length > 12 ? `\n... e mais ${invalidImported.length - 12} questão(ões).` : '') + '\n\nCorrija o pacote antes de importar.');
        event.target.value = '';
        return;
      }

      const withImages = imported.filter(q => q.image && String(q.image).startsWith('data:image/')).length;
      const byPhase = {};
      imported.forEach(q => { byPhase[q.phase] = (byPhase[q.phase] || 0) + 1; });
      const resumo = Object.entries(byPhase).map(([phase, count]) => {
        const p = settings.phases?.find(item => Number(item.id) === Number(phase));
        return `${p?.name || 'Ilha ' + phase}: ${count}`;
      }).join('\n');

      let message = `Importar ${imported.length} questão(ões) do ZIP?\n\n${resumo}\n\nImagem(ns) vinculada(s): ${withImages}.`;
      if (missingImages.length) {
        message += `\n\nAtenção: ${missingImages.length} imagem(ns) citada(s) não foram encontradas no ZIP:\n${missingImages.slice(0, 8).join('\n')}${missingImages.length > 8 ? '\n...' : ''}`;
      }
      message += '\n\nAs questões serão adicionadas ao banco atual.';

      if (!confirm(message)) {
        event.target.value = '';
        return;
      }

      questions = [...questions, ...imported].map(normalizeQuestion);
      renderQuestionBank();
      const saveResult = persistTeacherDraftSafe(`ZIP com imagens importado com ${imported.length} questão(ões). Banco atual: ${questions.length}.`);
      autoDownloadBackupAfterSaveSafe();
      if (saveResult?.ok === false) {
        alert(`As questões foram importadas para a tela, mas o navegador não conseguiu salvar no armazenamento local.

Questões adicionadas: ${imported.length}
Imagens vinculadas: ${withImages}
Banco atual na tela: ${questions.length}

AÇÃO NECESSÁRIA: clique agora em "Baixar questions.json atualizado" e guarde/suba esse arquivo no GitHub.

Erro técnico: ${saveResult.error?.name || 'Erro'} - ${saveResult.error?.message || 'sem mensagem'}`);
      } else if (saveResult?.mode === 'light') {
        alert(`Importação concluída em modo leve.

Questões adicionadas: ${imported.length}
Imagens vinculadas: ${withImages}
Banco atual: ${questions.length} questão(ões).

O backup local interno foi dispensado para economizar espaço no navegador. Clique em "Exportar backup de emergência" para guardar uma cópia segura.`);
      } else {
        alert(`Importação concluída.

Questões adicionadas: ${imported.length}
Imagens vinculadas: ${withImages}
Banco atual: ${questions.length} questão(ões).`);
      }
    } catch (error) {
      console.error(error);
      alert(`Não foi possível importar o ZIP.

O arquivo pode estar correto, mas ocorreu um erro no processamento do professor.

Detalhe técnico: ${error?.name || 'Erro'} - ${error?.message || 'sem mensagem'}

Confira se o ZIP contém questoes.csv na raiz e pasta imagens com PNG, JPG, WEBP, GIF ou SVG.`);
    } finally {
      event.target.value = '';
    }
  }

  function downloadZipImageTemplateSafe() {
    if (typeof JSZip === 'undefined') {
      alert('A biblioteca JSZip não carregou. Confira a internet e recarregue o professor.');
      return;
    }

    const csv = `"Enunciado";"Categoria";"Feedback Positivo";"Feedback Negativo";"Alternativa 1";"Alternativa 1 Correta";"Alternativa 2";"Alternativa 2 Correta";"Alternativa 3";"Alternativa 3 Correta";"Alternativa 4";"Alternativa 4 Correta";"Alternativa 5";"Alternativa 5 Correta";"Alternativa 6";"Alternativa 6 Correta";"Alternativa 7";"Alternativa 7 Correta";"Alternativa 8";"Alternativa 8 Correta";"Metadado 1";"Valor 1";"Metadado 2";"Valor 2";"Metadado 3";"Valor 3";"Ilha/Fase";"Imagem"
"Observe a imagem associada ao item e responda à questão teste de Química.";"Teste com imagem";"Parabéns, você acertou! 🐢💙 A alternativa correta é a A. A imagem foi vinculada corretamente ao item e aparece como apoio visual da questão.";"Que pena, não foi dessa vez, mas vou te explicar para você evoluir! 🐢💙 A alternativa correta é a A. Neste teste, o objetivo é apenas confirmar se a imagem foi importada e associada à questão correta.";"Alternativa correta de teste";"Sim";"Distrator 1";"";"Distrator 2";"";"Distrator 3";"";"Distrator 4";"";"";"";"";"";"";"";"Ano";"2026";"Banca";"ENEM";"Dificuldade";"Teste";"1";"Q001.svg"`;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520">
      <rect width="900" height="520" fill="#ffffff"/>
      <rect x="38" y="38" width="824" height="444" rx="34" fill="#e8fbfb" stroke="#09999F" stroke-width="8"/>
      <circle cx="250" cy="250" r="112" fill="#FCCC46" stroke="#055274" stroke-width="8"/>
      <ellipse cx="470" cy="255" rx="170" ry="95" fill="#ffffff" stroke="#D01890" stroke-width="7"/>
      <text x="450" y="112" font-family="Arial" font-size="46" font-weight="700" text-anchor="middle" fill="#055274">Imagem teste PRENAT+</text>
      <text x="450" y="405" font-family="Arial" font-size="30" text-anchor="middle" fill="#055274">Se esta imagem aparecer no aluno, a importação funcionou.</text>
      <text x="470" y="270" font-family="Arial" font-size="42" font-weight="700" text-anchor="middle" fill="#D01890">Q001.svg</text>
    </svg>`;

    const zip = new JSZip();
    zip.file('questoes.csv', csv);
    zip.folder('imagens').file('Q001.svg', svg);
    zip.file('LEIA-ME.txt', 'Modelo PRENAT+ para importação com imagens. Mantenha o arquivo questoes.csv e coloque as imagens na pasta imagens. Na coluna Imagem, escreva exatamente o nome do arquivo, por exemplo Q001.png, Q001.jpg, Q001.webp ou Q001.svg.');
    zip.generateAsync({ type: 'blob' }).then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `modelo-zip-com-imagens-${missionSlugSafe()}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    });
  }
  // ===== FIM ZIP IMPORT COM IMAGENS =====

  // ===== FIM CSV IMPORT =====

  // ===== FIM DO PATCH =====

  init();

  async function init() {
    settings = await fetchJson('settings.json', DEFAULT_SETTINGS);
    questions = await fetchJson('questions.json', []);
    normalize();
    loadLocalDraftsSafe();
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
    updateTeacherSafeStatus('Painel carregado com salvamento seguro.');
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
    const fallbackPositive = q.feedbackPositive || q.positiveFeedback || q.feedback_pos || q.explanation || '';
    const fallbackNegative = q.feedbackNegative || q.negativeFeedback || q.feedback_neg || q.explanation || '';
    const options = Array.isArray(q.options) ? q.options.map((op, i) => typeof op === 'string'
      ? { text: op, correct: Number(q.correctIndex) === i, feedback: '' }
      : { text: op.text || '', correct: Boolean(op.correct), feedback: '' }) : [];
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
      feedbackPositive: fallbackPositive,
      feedbackNegative: fallbackNegative,
      explanation: q.explanation || fallbackPositive || fallbackNegative || '',
      metadata: q.metadata || {}
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
      persistTeacherDraftSafe('Configuração e banco salvos automaticamente no navegador.');
      alert('Configuração salva. O banco também foi preservado no navegador e no backup de emergência.');
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
    document.getElementById('downloadSettings')?.addEventListener('click', () => { collectConfigFromForm(); persistTeacherDraftSafe('settings.json limpo preparado.'); downloadJson('settings.json', sanitizeSettingsSafe(settings)); });
    document.getElementById('downloadQuestions')?.addEventListener('click', () => { persistTeacherDraftSafe('questions.json atualizado preparado.'); downloadJson('questions.json', stripOptionFeedbackForGeneralOnly(questions).map(normalizeQuestion)); });
    document.getElementById('importSettings')?.addEventListener('change', e => importJsonFile(e, data => {
      settings = { ...DEFAULT_SETTINGS, ...sanitizeSettingsSafe(data) };
      normalize();
      loadLocalDraftsSafe();
      normalize();
      populateConfigForm();
      renderPhaseEditors();
      renderQuestionForm();
      persistTeacherDraftSafe('settings.json limpo importado.');
      alert('settings.json importado sem misturar questões.');
    }));
    document.getElementById('importQuestions')?.addEventListener('change', e => importJsonFile(e, data => {
      questions = extractQuestionArraySafe(data).map(normalizeQuestion);
      renderQuestionBank();
      persistTeacherDraftSafe(`questions.json importado com ${questions.length} questão(ões).`);
      alert(`questions.json importado com ${questions.length} questão(ões).`);
    }));
    document.getElementById('downloadQuestionsTop')?.addEventListener('click', () => { persistTeacherDraftSafe('questions.json atualizado preparado.'); downloadJson('questions.json', stripOptionFeedbackForGeneralOnly(questions).map(normalizeQuestion)); });
    document.getElementById('downloadEmergencyBackup')?.addEventListener('click', downloadEmergencyBackupSafe);
    document.getElementById('downloadEmergencyBackupExport')?.addEventListener('click', downloadEmergencyBackupSafe);
    document.getElementById('importEmergencyBackup')?.addEventListener('change', importEmergencyBackupSafe);
    document.getElementById('moveAllVisibleToPhase')?.addEventListener('click', moveVisibleQuestionsToSelectedPhaseSafe);
    document.getElementById('importQuestionsCsv')?.addEventListener('change', importQuestionsFromCsvFile);
    document.getElementById('downloadCsvTemplate')?.addEventListener('click', downloadCsvTemplateSafe);
    document.getElementById('importQuestionsZipImages')?.addEventListener('change', importQuestionsFromZipWithImages);
    document.getElementById('downloadZipImageTemplate')?.addEventListener('click', downloadZipImageTemplateSafe);
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
        </div>`;
      options.appendChild(card);
    });
    setupRichTextHelpers();
  }


  function stripOptionFeedbackForGeneralOnly(bank) {
    const arr = extractQuestionArraySafe ? extractQuestionArraySafe(bank) : (Array.isArray(bank) ? bank : []);
    return arr.map(q => ({
      ...q,
      feedbackPositive: q.feedbackPositive || q.explanation || '',
      feedbackNegative: q.feedbackNegative || q.explanation || '',
      explanation: q.explanation || q.feedbackPositive || q.feedbackNegative || '',
      options: Array.isArray(q.options)
        ? q.options.map(op => ({ ...op, feedback: '' }))
        : []
    }));
  }


  function normalizeAlternativeForCompareSafe(text) {
    const superscriptMap = {
      '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-','⁺':'+'
    };
    return String(text || '')
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]/g, ch => superscriptMap[ch] || ch)
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/[^\p{L}\p{N}+\-]+/gu, ' ')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ');
  }

  function validateQuestionBeforeStoreSafe(question) {
    const problems = [];
    const options = Array.isArray(question.options) ? question.options.filter(op => String(op.text || '').trim()) : [];
    if (!String(question.statement || '').trim()) problems.push('enunciado vazio');
    if (options.length < 2) problems.push('menos de duas alternativas preenchidas');
    const correctCount = options.filter(op => op.correct).length;
    if (correctCount !== 1) problems.push('a questão precisa ter exatamente uma alternativa correta');
    const seen = new Map();
    options.forEach((op, index) => {
      const key = normalizeAlternativeForCompareSafe(op.text);
      if (!key) return;
      if (seen.has(key)) {
        const first = seen.get(key);
        problems.push(`alternativas duplicadas: ${letters[first] || first + 1} e ${letters[index] || index + 1}`);
      } else {
        seen.set(key, index);
      }
    });
    return problems;
  }

  function saveQuestionFromForm() {
    const statement = getValue('qStatement').trim();
    const options = letters.map((_, i) => ({
      text: getValue(`opt_${i}_text`).trim(),
      feedback: '',
      correct: Number(document.querySelector('input[name="correctOption"]:checked')?.value || 0) === i
    })).filter(op => op.text);

    if (!statement) return alert('Preencha o enunciado da questão.');
    if (options.length < 2) return alert('Preencha pelo menos duas alternativas. O ideal é usar cinco.');
    if (!options.some(op => op.correct)) options[0].correct = true;

    const positive = getValue('qFeedbackPositive').trim();
    const negative = getValue('qFeedbackNegative').trim();

    const editingId = getValue('editingQuestionId');
    const question = normalizeQuestion({
      id: editingId || makeId(),
      phase: Number(getValue('qPhase') || 1),
      discipline: getValue('qDiscipline'),
      topic: getValue('qTopic'),
      difficulty: getValue('qDifficulty'),
      statement,
      image: getValue('qImage'),
      options,
      feedbackPositive: positive,
      feedbackNegative: negative,
      explanation: positive || negative
    });

    const validationProblems = validateQuestionBeforeStoreSafe(question);
    if (validationProblems.length) {
      alert('Problema(s) encontrados nesta questão:\n\n- ' + validationProblems.join('\n- ') + '\n\nCorrija antes de salvar.');
      return;
    }

    const index = questions.findIndex(q => q.id === editingId);
    if (index >= 0) questions[index] = question;
    else questions.push(question);

    clearQuestionForm();
    renderQuestionBank();
    persistTeacherDraftSafe(`Questão salva. Banco atual: ${questions.length} questão(ões). Se o backup automático estiver ligado, confira o arquivo baixado na pasta Downloads.`);
    autoDownloadBackupAfterSaveSafe();
    alert(`Questão salva e preservada no navegador. Banco atual: ${questions.length} questão(ões). Se o backup automático estiver ligado, confira o arquivo baixado na pasta Downloads.`);
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
    setValue('qFeedbackPositive', q.feedbackPositive || q.explanation || '');
    setValue('qFeedbackNegative', q.feedbackNegative || q.explanation || '');
    letters.forEach((_, i) => {
      const op = q.options[i] || { text:'', feedback:'', correct:false };
      setValue(`opt_${i}_text`, op.text);
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
    persistTeacherDraftSafe(`Questão excluída. Banco atual: ${questions.length} questão(ões). Se o backup automático estiver ligado, confira o arquivo baixado na pasta Downloads.`);
  }

  function clearQuestionForm() {
    ['editingQuestionId','qDiscipline','qTopic','qDifficulty','qStatement','qImage','qExplanation','qFeedbackPositive','qFeedbackNegative'].forEach(id => setValue(id, ''));
    setValue('qPhase', settings.phases[0]?.id || 1);
    letters.forEach((_, i) => {
      setValue(`opt_${i}_text`, '');
      const radio = document.querySelector(`input[name="correctOption"][value="${i}"]`);
      if (radio) radio.checked = i === 0;
    });
    updateImagePreview();
  }

  function renderQuestionBank() {
    const list = document.getElementById('questionBankList');
    const stats = document.getElementById('phaseQuestionStats');
    const filter = document.getElementById('bankPhaseFilter')?.value || 'all';
    if (!list) { updateTeacherSafeStatus(); return; }

    const counts = {};
    questions.forEach(q => { counts[q.phase] = (counts[q.phase] || 0) + 1; });
    updateTeacherSafeStatus();

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
