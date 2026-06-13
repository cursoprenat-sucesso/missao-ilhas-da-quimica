(() => {
  const app = document.getElementById('app');
  const letters = ['A', 'B', 'C', 'D', 'E'];
  let settings = null;
  let questions = [];
  let progress = null;
  let currentRun = null;

  const FONT_STACKS = {
    inter: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    arial: 'Arial, Helvetica, sans-serif',
    trebuchet: '"Trebuchet MS", "Segoe UI", sans-serif',
    verdana: 'Verdana, Geneva, sans-serif',
    georgia: 'Georgia, "Times New Roman", serif',
    times: '"Times New Roman", Times, serif',
    palatino: '"Palatino Linotype", Palatino, Georgia, serif'
  };

  const DEFAULT_SETTINGS = {
    slug: 'missao-ilhas-da-quimica-prenat-v1',
    brand: 'PRENAT+',
    missionName: 'Missão Ilhas da Química',
    missionKicker: 'CAMPO DE TREINO PRENAT+',
    subtitle: 'Uma jornada gamificada pela Química do zero ao Boss Final.',
    intro: 'A tartaruga PRENAT+ vai atravessar ilhas temáticas de Química. Cada ilha é uma revisão estratégica: acerte, preserve vidas, ganhe estrelas, acumule XP e desbloqueie a próxima travessia.',
    studentThemeNote: 'Cada rodada sorteia perguntas do banco da ilha. Você pode colocar muitas questões no professor; o jogo seleciona apenas a quantidade configurada para aquela fase.',
    showMetaToStudent: false,
    logo: 'logo-prenat.png',
    fontBodyKey: 'inter',
    fontHeadingKey: 'inter',
    starsMax: 5,
    starThresholds: [60, 70, 80, 85, 90],
    xpPerCorrect: 10,
    xpPerStar: 60,
    xpCompletionBonus: 100,
    coinPerStar: 4,
    coinCompletionBonus: 10,
    turtleRewards: [],
    ranks: [],
    phases: []
  };

  document.getElementById('resetProgress')?.addEventListener('click', () => {
    if (!settings) return;
    if (confirm('Deseja recomeçar esta missão? XP, moedas, estrelas e ilhas salvas neste navegador serão apagados.')) {
      localStorage.removeItem(stateKey());
      progress = createInitialProgress();
      renderHome();
    }
  });

  init();

  async function init() {
    try {
      settings = await fetchJson('settings.json', DEFAULT_SETTINGS);
      questions = await fetchJson('questions.json', []);
      normalizeData();
      progress = loadProgress();
      applyBrand();
      renderHome();
    } catch (error) {
      console.error(error);
      app.innerHTML = `<section class="result-card glass-card"><div class="result-icon">⚠️</div><h1>Erro ao carregar</h1><p>Confira se settings.json e questions.json foram enviados corretamente.</p></section>`;
    }
  }

  async function fetchJson(url, fallback) {
    try {
      const response = await fetch(`${url}?v=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Falha ao buscar ${url}`);
      return await response.json();
    } catch (error) {
      console.warn(`Usando fallback para ${url}`, error);
      return structuredClone ? structuredClone(fallback) : JSON.parse(JSON.stringify(fallback));
    }
  }

  function normalizeData() {
    settings = { ...DEFAULT_SETTINGS, ...settings };
    settings.starsMax = Number(settings.starsMax || 5);
    settings.starThresholds = Array.isArray(settings.starThresholds) && settings.starThresholds.length
      ? settings.starThresholds.map(Number)
      : [settings.phases?.[0]?.minPercent || 60, 70, 80, 85, 90];
    settings.turtleRewards = Array.isArray(settings.turtleRewards) ? settings.turtleRewards.map((item, index) => ({
      phaseId: Number(item.phaseId || index + 1),
      name: item.name || `Item de evolução ${index + 1}`,
      icon: item.icon || '🐢',
      message: item.message || 'Você ganhou um novo item de evolução para a tartaruga PRENAT+.'
    })) : [];
    settings.ranks = Array.isArray(settings.ranks) ? settings.ranks.map((rank, index) => ({
      name: rank.name || `Patente ${index}`,
      icon: rank.icon || '🐢',
      visualStage: Number(rank.visualStage ?? index),
      description: rank.description || ''
    })) : [];
    settings.phases = Array.isArray(settings.phases) ? settings.phases.map((phase, index) => ({
      id: Number(phase.id || index + 1),
      name: phase.name || `Ilha ${index + 1}`,
      title: phase.title || `Fase ${index + 1}`,
      story: phase.story || 'Vença as questões para desbloquear a próxima etapa.',
      minPercent: Number(phase.minPercent || 60),
      lives: Number(phase.lives || 3),
      questionLimit: Number(phase.questionLimit || 0),
      shuffle: phase.shuffle !== false,
      rewardRankIndex: Number(phase.rewardRankIndex ?? Math.min(index + 1, Math.max(0, settings.ranks.length - 1))),
      rewardItemIndex: Number(phase.rewardItemIndex ?? index),
      difficultyLabel: phase.difficultyLabel || 'Treino',
      iconStage: Number(phase.iconStage ?? index),
      icon: phase.icon || islandIcon(index),
      x: clamp(Number(phase.x ?? mapX(index)), 4, 92),
      y: clamp(Number(phase.y ?? mapY(index)), 8, 92)
    })) : [];
    questions = Array.isArray(questions) ? questions.map((q, index) => normalizeQuestion(q, index)) : [];
  }

  function normalizeQuestion(q, index) {
    let options = [];
    if (Array.isArray(q.options)) {
      options = q.options.map((op, i) => typeof op === 'string'
        ? { text: op, correct: Number(q.correctIndex) === i, feedback: '' }
        : { text: op.text || '', correct: Boolean(op.correct), feedback: op.feedback || '' });
    }
    if (!options.some(op => op.correct) && Number.isInteger(q.correctIndex) && options[q.correctIndex]) options[q.correctIndex].correct = true;
    return {
      id: q.id || `q_${index + 1}`,
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

  function applyBrand() {
    document.title = `${settings.brand} | ${settings.missionName}`;
    const brandName = document.getElementById('brandName');
    const missionMini = document.getElementById('missionMini');
    const brandLogo = document.getElementById('brandLogo');
    if (brandName) brandName.textContent = settings.brand;
    if (missionMini) missionMini.textContent = settings.missionName;
    if (brandLogo && settings.logo) brandLogo.src = settings.logo;
    document.querySelectorAll('.mission-logo-img').forEach(img => { if (settings.logo) img.src = settings.logo; });
    const bodyFont = FONT_STACKS[settings.fontBodyKey] || FONT_STACKS.inter;
    const headingFont = FONT_STACKS[settings.fontHeadingKey] || bodyFont;
    document.documentElement.style.setProperty('--student-body-font', bodyFont);
    document.documentElement.style.setProperty('--student-heading-font', headingFont);
  }

  function stateKey() { return `prenat_quimica_progress_${settings.slug || settings.missionName || 'missao'}`; }
  function createInitialProgress() { return { unlockedPhase: 1, completedPhases: [], rankIndex: 0, phaseScores: {}, rewardItems: [], xp: 0, coins: 0 }; }
  function loadProgress() {
    try {
      const saved = localStorage.getItem(stateKey());
      return saved ? { ...createInitialProgress(), ...JSON.parse(saved) } : createInitialProgress();
    } catch { return createInitialProgress(); }
  }
  function saveProgress() { localStorage.setItem(stateKey(), JSON.stringify(progress)); }

  function renderHome() {
    const template = document.getElementById('homeTemplate').content.cloneNode(true);
    app.innerHTML = '';
    app.appendChild(template);
    bindText('[data-bind="missionKicker"]', settings.missionKicker);
    bindText('[data-bind="missionName"]', settings.missionName);
    bindText('[data-bind="subtitle"]', settings.subtitle);
    bindText('[data-bind="intro"]', settings.intro);
    bindText('[data-bind="studentThemeNote"]', settings.studentThemeNote || 'Avance no seu ritmo. Cada tentativa é treino real.');
    renderRankPanel();
    renderMap();
    app.querySelector('[data-action="continue"]')?.addEventListener('click', () => {
      const next = settings.phases.find(p => !progress.completedPhases.includes(p.id) && p.id <= progress.unlockedPhase) || settings.phases.find(p => p.id === progress.unlockedPhase) || settings.phases[0];
      if (next) startPhase(next.id);
    });
    app.querySelector('[data-action="view-map"]')?.addEventListener('click', () => document.getElementById('mapa')?.scrollIntoView({ behavior: 'smooth' }));
  }

  function bindText(selector, text) { const el = app.querySelector(selector); if (el) el.textContent = text ?? ''; }

  function renderRankPanel() {
    const rank = settings.ranks[Math.min(progress.rankIndex || 0, settings.ranks.length - 1)] || settings.ranks[0] || { name: 'Patente inicial', description: '' };
    const completedCount = progress.completedPhases.length;
    const total = settings.phases.length || 1;
    const percent = Math.round((completedCount / total) * 100);
    const nextPhase = settings.phases.find(p => !progress.completedPhases.includes(p.id));
    const nextRank = nextPhase ? settings.ranks[nextPhase.rewardRankIndex] : null;
    const maxStars = total * (settings.starsMax || 5);
    const starTotal = Object.values(progress.phaseScores || {}).reduce((sum, item) => sum + Number(item.stars || 0), 0);

    const rankIcon = app.querySelector('[data-rank-icon]');
    if (rankIcon) rankIcon.innerHTML = badgeSvg(rank.icon || '🐢', rank.visualStage || 0, 'rank');
    app.querySelector('[data-rank-name]').textContent = rank.name || 'Patente inicial';
    app.querySelector('[data-rank-description]').textContent = rank.description || '';
    app.querySelector('[data-xp-total]').textContent = String(progress.xp || 0);
    app.querySelector('[data-coin-total]').textContent = String(progress.coins || 0);
    app.querySelector('[data-star-total]').textContent = `${starTotal}/${maxStars}`;
    app.querySelector('[data-progress-text]').textContent = `${percent}%`;
    app.querySelector('[data-progress-caption]').textContent = nextRank
      ? `${completedCount} de ${total} ilhas concluídas · próxima patente: ${nextRank.name}`
      : `${completedCount} de ${total} ilhas concluídas · travessia química completa`;
    const circle = app.querySelector('[data-progress-circle]');
    if (circle) circle.style.strokeDashoffset = String(314 - (314 * percent / 100));
    renderEvolutionStrip();
  }

  function renderEvolutionStrip() {
    const strip = app.querySelector('[data-evolution-strip]');
    if (!strip) return;
    const earnedIds = new Set(progress.rewardItems || []);
    const preview = settings.turtleRewards.slice(0, 6).map(item => {
      const earned = earnedIds.has(item.phaseId);
      return `<span class="evolution-token ${earned ? 'earned' : ''}" title="${escapeHtml(item.name)}">${earned ? escapeHtml(item.icon) : '🔒'}</span>`;
    }).join('');
    const totalEarned = earnedIds.size;
    strip.innerHTML = `<span class="evolution-label">Evolução da tartaruga</span><div>${preview}</div><small>${totalEarned}/${settings.turtleRewards.length || settings.phases.length} itens</small>`;
  }

  function renderMap() {
    const map = app.querySelector('[data-island-map]');
    const story = app.querySelector('[data-map-story]');
    if (story) story.textContent = 'Siga a tartaruga pelo arquipélago. As ilhas bloqueadas abrem quando você vence a etapa anterior; cada rodada sorteia perguntas do banco.';
    if (!map) return;
    map.innerHTML = '';
    settings.phases.forEach((phase, index) => {
      const unlocked = phase.id <= progress.unlockedPhase;
      const completed = progress.completedPhases.includes(phase.id);
      const active = unlocked && !completed;
      const phaseQuestions = getQuestionsForPhase(phase.id);
      const playableCount = getPlayableCount(phase, phaseQuestions.length);
      const score = progress.phaseScores?.[phase.id];
      const stars = score?.stars || 0;
      const node = document.createElement('article');
      node.className = `map-node ${unlocked ? 'unlocked' : 'locked'} ${completed ? 'completed' : ''} ${active ? 'current' : ''}`;
      node.style.left = `${phase.x}%`;
      node.style.top = `${phase.y}%`;
      node.innerHTML = `
        <div class="island-orb ${completed ? 'orb-done' : active ? 'orb-current' : ''}">
          <div class="island-number">${index + 1}</div>
          <div class="island-icon">${escapeHtml(phase.icon || islandIcon(index))}</div>
          <span class="lock-chip">${completed ? '✓' : unlocked ? 'Aberta' : '🔒'}</span>
        </div>
        <div class="island-popover">
          <span class="tiny-label">${escapeHtml(phase.name)}</span>
          <h3>${escapeHtml(phase.title)}</h3>
          <p>${escapeHtml(phase.story)}</p>
          <div class="star-row" aria-label="${stars} estrelas">${starHtml(stars)}</div>
          <div class="island-meta">
            <span class="meta-chip">Meta ${phase.minPercent}%</span>
            <span class="meta-chip">${phase.lives} vidas</span>
            <span class="meta-chip">${playableCount || phase.questionLimit || 'todas'} questões</span>
            <span class="meta-chip">${escapeHtml(phase.difficultyLabel)}</span>
          </div>
          <button class="btn ${unlocked ? 'btn-primary' : 'btn-soft'}" ${unlocked && phaseQuestions.length ? '' : 'disabled'} data-start-phase="${phase.id}">
            ${completed ? 'Refazer ilha' : unlocked ? 'Entrar na ilha' : 'Bloqueada'}
          </button>
          ${unlocked && !phaseQuestions.length ? '<p class="small-muted">Ilha em preparação: ainda não há questões cadastradas.</p>' : ''}
        </div>`;
      map.appendChild(node);
    });
    map.querySelectorAll('[data-start-phase]').forEach(btn => btn.addEventListener('click', () => startPhase(Number(btn.dataset.startPhase))));
    updateRouteProgress();
  }

  function updateRouteProgress() {
    const path = app.querySelector('.route-done');
    if (!path || typeof path.getTotalLength !== 'function') return;
    const totalPhases = Math.max(1, settings.phases.length - 1);
    const ratio = Math.max(0, Math.min(1, (Number(progress.unlockedPhase || 1) - 1) / totalPhases));
    requestAnimationFrame(() => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length * (1 - ratio));
    });
  }

  function getQuestionsForPhase(phaseId) { return questions.filter(q => Number(q.phase) === Number(phaseId) && q.statement && q.options.length >= 2 && q.options.some(op => op.correct)); }
  function getPlayableCount(phase, poolLength) {
    if (!poolLength) return 0;
    if (!phase.questionLimit || phase.questionLimit <= 0) return poolLength;
    return Math.min(phase.questionLimit, poolLength);
  }
  function selectQuestionsForAttempt(phase, pool) {
    const shuffled = phase.shuffle ? shuffleArray(pool) : [...pool];
    const limit = getPlayableCount(phase, shuffled.length);
    return shuffled.slice(0, limit);
  }

  function startPhase(phaseId) {
    const phase = settings.phases.find(p => p.id === phaseId);
    if (!phase || phase.id > progress.unlockedPhase) return renderHome();
    const pool = getQuestionsForPhase(phase.id);
    if (!pool.length) { alert('Esta ilha ainda não possui questões cadastradas.'); return renderHome(); }
    const phaseQuestions = selectQuestionsForAttempt(phase, pool);
    currentRun = { phase, poolSize: pool.length, questions: phaseQuestions, index: 0, lives: phase.lives, score: 0, answered: false };
    renderQuestion();
  }

  function renderQuestion() {
    const run = currentRun;
    const q = run.questions[run.index];
    const template = document.getElementById('quizTemplate').content.cloneNode(true);
    app.innerHTML = '';
    app.appendChild(template);
    app.querySelector('[data-action="back-home"]')?.addEventListener('click', renderHome);
    app.querySelector('[data-phase-title]').textContent = run.phase.title;
    app.querySelector('[data-phase-story]').textContent = run.phase.story;
    app.querySelector('[data-lives]').textContent = '❤️'.repeat(run.lives) || '0';
    app.querySelector('[data-minpercent]').textContent = `${run.phase.minPercent}%`;
    app.querySelector('[data-score]').textContent = `${run.score}/${run.questions.length}`;
    app.querySelector('[data-question-count]').textContent = `Questão ${run.index + 1} de ${run.questions.length} · sorteada de ${run.poolSize} do banco da ilha`;
    app.querySelector('[data-quiz-progress]').style.width = `${(run.index / run.questions.length) * 100}%`;
    app.querySelector('[data-question-index]').textContent = `Questão ${run.index + 1}`;
    app.querySelector('[data-question-meta]').textContent = settings.showMetaToStudent
      ? [q.discipline, q.topic, q.difficulty].filter(Boolean).join(' · ')
      : 'Desafio de Química';
    app.querySelector('[data-question-statement]').innerHTML = q.statement;
    const imgWrap = app.querySelector('[data-question-image-wrap]');
    const img = app.querySelector('[data-question-image]');
    if (q.image) { img.src = q.image; imgWrap.classList.add('visible'); }
    const list = app.querySelector('[data-options-list]');
    q.options.forEach((op, i) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.innerHTML = `<span class="option-letter">${letters[i] || i + 1}</span><span>${op.text}</span>`;
      button.addEventListener('click', () => answerQuestion(i));
      list.appendChild(button);
    });
    typesetMath();
  }

  function answerQuestion(selectedIndex) {
    const run = currentRun;
    if (run.answered) return;
    run.answered = true;
    const q = run.questions[run.index];
    const selected = q.options[selectedIndex];
    const correctIndex = q.options.findIndex(op => op.correct);
    const isCorrect = Boolean(selected?.correct);
    if (isCorrect) run.score += 1;
    else run.lives = Math.max(0, run.lives - 1);
    app.querySelector('[data-lives]').textContent = '❤️'.repeat(run.lives) || '0';
    app.querySelector('[data-score]').textContent = `${run.score}/${run.questions.length}`;
    app.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === correctIndex) btn.classList.add('correct');
      if (i === selectedIndex && !isCorrect) btn.classList.add('wrong');
    });
    const panel = app.querySelector('[data-feedback-panel]');
    panel.classList.remove('hidden');
    panel.classList.toggle('correct-feedback', isCorrect);
    panel.classList.toggle('wrong-feedback', !isCorrect);
    app.querySelector('[data-feedback-title]').textContent = isCorrect ? 'Boa! A rota iluminou.' : (run.lives <= 0 ? 'As vidas acabaram nesta rodada.' : 'Armadilha encontrada — ajuste a estratégia.');
    app.querySelector('[data-feedback-text]').innerHTML = buildFeedbackText(isCorrect, q, selected);
    app.querySelector('[data-feedback-descriptor]').innerHTML = selected?.feedback || (isCorrect ? 'Você identificou o ponto químico central.' : 'Esse distrator parece bom, mas ignora uma condição do enunciado.');
    const nextButton = app.querySelector('[data-action="next-question"]');
    nextButton.textContent = run.lives <= 0 ? 'Ver resultado' : (run.index >= run.questions.length - 1 ? 'Concluir ilha' : 'Continuar travessia');
    nextButton.addEventListener('click', nextStep);
    typesetMath();
  }

  function buildFeedbackText(isCorrect, q) {
    const explanation = q.explanation || '';
    if (isCorrect) return explanation ? `<strong>Mandou bem.</strong> ${explanation}` : '<strong>Mandou bem.</strong> Você venceu a armadilha desta questão.';
    return explanation ? `<strong>Boa tentativa.</strong> ${explanation}<br><br>Respire, proteja o casco e continue. Errar aqui também faz parte do treino.` : '<strong>Boa tentativa.</strong> Essa alternativa tinha uma armadilha. Respire e siga.';
  }

  function nextStep() {
    if (currentRun.lives <= 0 || currentRun.index >= currentRun.questions.length - 1) return finishPhase();
    currentRun.index += 1;
    currentRun.answered = false;
    renderQuestion();
  }

  function finishPhase() {
    const run = currentRun;
    const percent = Math.round((run.score / run.questions.length) * 100);
    const passed = run.lives > 0 && percent >= run.phase.minPercent;
    const stars = passed ? calculateStars(percent, run.phase.minPercent) : 0;
    const earned = calculateRewards(run.score, stars, passed);
    const previousRank = settings.ranks[progress.rankIndex] || settings.ranks[0] || { name: 'Patente inicial' };
    const nextRank = settings.ranks[run.phase.rewardRankIndex] || previousRank;
    const previousBest = progress.phaseScores?.[run.phase.id] || { xpAwarded: 0, coinAwarded: 0, stars: 0, percent: 0 };

    if (passed) {
      if (!progress.completedPhases.includes(run.phase.id)) progress.completedPhases.push(run.phase.id);
      progress.unlockedPhase = Math.max(progress.unlockedPhase, run.phase.id + 1);
      progress.rankIndex = Math.max(progress.rankIndex, run.phase.rewardRankIndex || 0);
      const reward = getRewardForPhase(run.phase);
      if (reward && !progress.rewardItems.includes(reward.phaseId)) progress.rewardItems.push(reward.phaseId);
      const xpDelta = Math.max(0, earned.xp - Number(previousBest.xpAwarded || 0));
      const coinDelta = Math.max(0, earned.coins - Number(previousBest.coinAwarded || 0));
      progress.xp = Number(progress.xp || 0) + xpDelta;
      progress.coins = Number(progress.coins || 0) + coinDelta;
      if (stars >= Number(previousBest.stars || 0) || percent >= Number(previousBest.percent || 0)) {
        progress.phaseScores[run.phase.id] = { score: run.score, total: run.questions.length, percent, stars, date: new Date().toISOString(), poolSize: run.poolSize, xpAwarded: Math.max(earned.xp, previousBest.xpAwarded || 0), coinAwarded: Math.max(earned.coins, previousBest.coinAwarded || 0) };
      }
      saveProgress();
    }
    renderResult({ passed, percent, previousRank, nextRank, run, stars, earned });
  }

  function calculateStars(percent, minPercent) {
    const thresholds = [minPercent, 70, 80, 85, 90].map(Number).sort((a, b) => a - b);
    return Math.max(1, Math.min(settings.starsMax || 5, thresholds.filter(t => percent >= t).length));
  }
  function calculateRewards(score, stars, passed) {
    const xp = Number(score || 0) * Number(settings.xpPerCorrect || 10) + Number(stars || 0) * Number(settings.xpPerStar || 60) + (passed ? Number(settings.xpCompletionBonus || 100) : 0);
    const coins = Number(stars || 0) * Number(settings.coinPerStar || 4) + (passed ? Number(settings.coinCompletionBonus || 10) : 0);
    return { xp, coins };
  }

  function renderResult({ passed, percent, previousRank, nextRank, run, stars, earned }) {
    const reward = getRewardForPhase(run.phase);
    const template = document.getElementById('resultTemplate').content.cloneNode(true);
    app.innerHTML = '';
    app.appendChild(template);
    const resultIcon = app.querySelector('[data-result-icon]');
    if (resultIcon) resultIcon.innerHTML = badgeSvg(passed ? (nextRank.icon || '🐢') : (previousRank.icon || '🐢'), passed ? (nextRank.visualStage || 0) : (previousRank.visualStage || 0), 'result');
    app.querySelector('[data-result-kicker]').textContent = passed ? 'Ilha conquistada' : 'Travessia em treinamento';
    app.querySelector('[data-result-title]').textContent = passed ? 'Você venceu esta ilha!' : 'Ainda não foi dessa vez.';
    app.querySelector('[data-result-message]').textContent = passed
      ? buildVictoryMessage(run.phase, previousRank, nextRank, stars)
      : `Ainda não foi dessa vez. Você fez ${percent}% e precisava de ${run.phase.minPercent}%, mantendo pelo menos uma vida. Respire: a próxima rodada será sorteada de novo no banco desta ilha.`;
    app.querySelector('[data-result-stars]').innerHTML = passed ? starHtml(stars, true) : starHtml(0, true);
    app.querySelector('[data-result-score]').textContent = `${run.score}/${run.questions.length}`;
    app.querySelector('[data-result-percent]').textContent = `${percent}%`;
    app.querySelector('[data-result-target]').textContent = `${run.phase.minPercent}%`;
    app.querySelector('[data-result-xp]').textContent = passed ? `+${earned.xp}` : '+0';
    app.querySelector('[data-result-coins]').textContent = passed ? `+${earned.coins}` : '+0';
    app.querySelector('[data-rank-unlock]').innerHTML = passed
      ? `<span class="tiny-label">Evolução desbloqueada</span><br><strong>${escapeHtml(previousRank.name || 'Patente anterior')} → ${escapeHtml(nextRank.name || 'nova patente')}</strong><p>${escapeHtml(nextRank.description || '')}</p>`
      : `<strong>Evolução ainda bloqueada:</strong> vença esta ilha para conquistar ${escapeHtml(nextRank.name || 'a próxima patente')}. Você pode tentar novamente quantas vezes precisar.`;
    const rewardBox = app.querySelector('[data-reward-unlock]');
    if (rewardBox) rewardBox.innerHTML = passed && reward
      ? `<span class="reward-icon">${escapeHtml(reward.icon)}</span><div><span class="tiny-label">Item da tartaruga conquistado</span><strong>${escapeHtml(reward.name)}</strong><p>${escapeHtml(reward.message)}</p></div>`
      : `<span class="reward-icon locked">🔒</span><div><strong>Item da tartaruga ainda bloqueado</strong><p>Volte para a ilha, preserve suas vidas e alcance a meta para liberar este item de evolução.</p></div>`;
    const mainButton = app.querySelector('[data-action="result-main"]');
    mainButton.textContent = passed ? 'Seguir para a próxima ilha' : 'Tentar uma nova rodada';
    mainButton.addEventListener('click', () => {
      if (passed) {
        const nextPhase = settings.phases.find(p => p.id === run.phase.id + 1);
        nextPhase ? startPhase(nextPhase.id) : renderHome();
      } else startPhase(run.phase.id);
    });
    app.querySelector('[data-action="back-home"]')?.addEventListener('click', renderHome);
  }

  function buildVictoryMessage(phase, previousRank, nextRank, stars) {
    const reward = getRewardForPhase(phase);
    const starText = stars === 5
      ? 'Você conquistou 5 estrelas: domínio máximo da ilha e travessia quase perfeita.'
      : `Você conquistou ${stars} estrela${stars > 1 ? 's' : ''}. Dá para voltar depois e buscar as 5 estrelas.`;
    const rewardText = reward ? ` Você também ganhou ${reward.name}: ${reward.message}` : '';
    if (nextRank?.visualStage >= 13) return `Travessia completa! Você venceu ${phase.title}, superou o Boss Final e alcançou ${nextRank.name}. ${starText}${rewardText}`;
    return `Sucesso! O caminho no mar foi desbloqueado. Você venceu ${phase.title} e evoluiu de ${previousRank?.name || 'sua patente anterior'} para ${nextRank?.name || 'a próxima patente'}. ${starText}${rewardText} Continue: a próxima ilha já está chamando.`;
  }

  function getRewardForPhase(phase) {
    if (!phase) return null;
    return settings.turtleRewards.find(item => Number(item.phaseId) === Number(phase.id)) || settings.turtleRewards[Number(phase.rewardItemIndex || 0)] || null;
  }

  function badgeSvg(icon = '🐢', stage = 0, mode = 'island') {
    const safe = escapeHtml(icon);
    return `<svg class="chem-badge stage-${Number(stage) || 0} ${mode}" viewBox="0 0 180 150" role="img" aria-label="${safe}">
      <ellipse cx="90" cy="132" rx="58" ry="13" fill="#d7b477" opacity=".76"/>
      <circle cx="90" cy="73" r="54" fill="#9be5df" opacity=".88"/>
      <ellipse cx="76" cy="48" rx="38" ry="13" fill="#d7fff9" opacity=".38"/>
      <text x="90" y="84" text-anchor="middle" dominant-baseline="middle" font-size="48">${safe}</text>
    </svg>`;
  }

  function starHtml(count, large = false) {
    const max = settings?.starsMax || 5;
    let out = '';
    for (let i = 1; i <= max; i++) out += `<span class="star ${i <= count ? 'filled' : ''} ${large ? 'large' : ''}">★</span>`;
    return out;
  }

  function islandIcon(index) { return ['⚛️','🧪','🔗','💧','⚖️','☢️','⏱️','🌊','🔋','🌋','🔥','🌿','🏆🦈'][index] || '🐢'; }
  function mapX(index) { return [8,30,56,79,52,24,10,37,64,84,55,28,82][index] || 50; }
  function mapY(index) { return [11,24,13,28,43,47,62,67,57,70,84,86,91][index] || 50; }
  function clamp(v, min, max) { return Math.max(min, Math.min(max, Number.isFinite(v) ? v : min)); }
  function shuffleArray(array) { const copy = [...array]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
  function escapeHtml(value) { return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' }[char])); }
  function typesetMath() { if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise().catch(() => {}); }
})();
