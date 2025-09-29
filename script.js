// =================== Firebase config ===================
const firebaseConfig = {
  apiKey: "AIzaSyAMnk4nDBd6nbvt9ElZeKDlJA7cp2vYfIk",
  authDomain: "habitos-danilo.firebaseapp.com",
  projectId: "habitos-danilo",
  storageBucket: "habitos-danilo.appspot.com",
  messagingSenderId: "342699648229",
  appId: "1:342699648229:web:a22b4706e2dde3c1c1200c",
  measurementId: "G-5589029JGV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// =================== Recompensas ===================
const rewards = [
  { month: 9, year: 2025, icon: "😒", title: "Prêmio Setembro", desc: "Fez o minimo né", label: "Minimo" },
  { month: 10, year: 2025, icon: "⌚", title: "Prêmio Outubro", desc: "Relógio Ingersoll", label: "Ingersoll" },
  { month: 11, year: 2025, icon: "🧠🎲", title: "Prêmio Novembro", desc: "Turing Machine", label: "Turing" },
  { month: 12, year: 2025, icon: "🍝", title: "Prêmio Dezembro", desc: "Rascal", label: "Rascal" },
  { month: 1, year: 2026, icon: "🛍️", title: "Prêmio Janeiro", desc: "Compras estilosas", label: "Compras" },
  { month: 2, year: 2026, icon: "🛀", title: "Prêmio Fevereiro", desc: "Tanque sensorial", label: "Tanque" },
  { month: 3, year: 2026, icon: "🚗", title: "Prêmio Março", desc: "Comprar um carro", label: "Carro" },
  { month: 4, year: 2026, icon: "🏠", title: "Prêmio Abril", desc: "Ter um apê aconchegante", label: "Apê" },
  { month: 5, year: 2026, icon: "📺", title: "Prêmio Maio", desc: "Comprar uma TV top", label: "TV" },
  { month: 6, year: 2026, icon: "🛀", title: "Prêmio Junho", desc: "Tanque sensorial", label: "Tanque" },
  { month: 7, year: 2026, icon: "📸", title: "Prêmio Julho", desc: "Sessão de foto Daphne no Castelo", label: "Daphne" },
  { month: 8, year: 2026, icon: "💉", title: "Prêmio Agosto", desc: "Fechar o braço", label: "Tattoo" },
  { month: 9, year: 2026, icon: "👨‍🦳", title: "Prêmio Setembro", desc: "Cabelo branco", label: "Cabelo" },
  { month: 10, year: 2026, icon: "✈️", title: "Prêmio Outubro", desc: "Viagem para fora", label: "Viagem" }
];

function getRewardFor(month, year, day = null) {
  if (day) return rewards.find(r => r.day === day && r.month === month && r.year === year);
  return rewards.find(r => r.month === month && r.year === year && !r.day);
}

const habitEmojiMap = {
  "Acordar às 6h": "⏰",
  "Exercício (30 min)": "🏃",
  "Dormir até meia noite": "🌙",
  "Planejar dia": "📅",
  "Eliminar Youtube": "📺",
  "Beber 2L de água": "💧",
  "45 min de hiperfoco": "🎯",
  "Afirmações": "💬",
  "Exercício (60 min)": "🏋️",
  "1700 calorias": "🔥",
  "Acordar às 5h": "🌅",
  "Meditação (10 min)": "🧘",
  "90 min de hiperfoco": "🎯",
  "Leitura (30 min)": "📚",
  "Exercício (90 min)": "💪",
  "Praticar italiano": "\uD83C\uDDEE\uD83C\uDDF9",
  "Eliminar vícios": "🚫",
  "90 min de hiperfoco (2x)": "🎯",
};

const habitPriority = [
  "Dormir até meia noite",
  "Exercício (30 min)",
  "Planejar dia",
  "Eliminar Youtube",
  "Beber 2L de água",
  "45 min de hiperfoco",
  "Acordar às 6h",
  "Afirmações",
  "Exercício (60 min)",
  "1700 calorias",
  "Acordar às 5h",
  "Meditação (10 min)",
  "90 min de hiperfoco",
  "Leitura (30 min)",
  "Exercício (90 min)",
  "Praticar italiano",
  "Eliminar vícios",
  "90 min de hiperfoco (2x)",
];

function sortHabits(list) {
  return list.slice().sort((a, b) => {
    const ai = habitPriority.indexOf(a);
    const bi = habitPriority.indexOf(b);
    return ai - bi;
  });
}

function getHabitEmoji(habit) {
  return habitEmojiMap[habit] || "❓";
}

function getCiclicoEmoji(habito) {
  if (habito.includes("Banho gelado")) return "🚿";
  if (habito.includes("Arrumar o quarto")) return "🧹";
  if (habito.includes("Se expresse")) return "🗣️";
  if (habito.includes("Verificar peso")) return "⚖️";
  if (habito.includes("Diário")) return "🙏";
  return "🎯";
}

const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

// =================== Confetti Functions ===================
function launchConfettiEpic() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';
  document.body.style.overflow = "hidden";
  document.body.classList.add('shake-dance');
  let W = canvas.width, H = canvas.height;
  let particles = [];
  let colors = ['#ffe379','#e4c145','#f7e399','#FF522E','#fafff9','#FFD700','#FF69B4','#00E6F6','#82FF6A','#FF6666','#0ed156','#001130','#fd2a49'];
  for (let i = 0; i < 2000; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * -H,
      r: 7 + Math.random() * 12,
      d: Math.random() * 180,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 16 - 8,
      tiltAngle: 0,
      tiltAngleIncremental: (Math.random() * 0.09) + .05,
      alpha: 0.84 + Math.random() * 0.16
    });
  }
  let angle = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      ctx.beginPath();
      ctx.lineWidth = particles[i].r / 2;
      ctx.strokeStyle = particles[i].color;
      ctx.globalAlpha = particles[i].alpha;
      ctx.moveTo(particles[i].x + particles[i].tilt + particles[i].r / 4, particles[i].y);
      ctx.lineTo(particles[i].x + particles[i].tilt, particles[i].y + particles[i].r);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    update();
  }
  function update() {
    angle += 0.008;
    for (let i = 0; i < particles.length; i++) {
      particles[i].y += (Math.cos(angle + particles[i].d) + 2.8 + particles[i].r/6) * 0.93;
      particles[i].x += Math.sin(angle * 1.18 + i) * 2.7;
      particles[i].tiltAngle += particles[i].tiltAngleIncremental;
      particles[i].tilt = Math.sin(particles[i].tiltAngle - (i % 3)) * 18;
      if (particles[i].y > H + 30) {
        particles[i].y = -14;
        particles[i].x = Math.random() * W;
      }
    }
  }
  let interval = setInterval(draw, 13);
  const celebrateText = document.getElementById('celebrate-text');
  const lights = document.getElementById('party-lights');
  celebrateText.style.display = 'block';
  if (lights) lights.style.display = 'block';
  setTimeout(() => {
    clearInterval(interval);
    ctx.clearRect(0, 0, W, H);
    canvas.style.display = 'none';
    celebrateText.style.display = 'none';
    if (lights) lights.style.display = 'none';
    document.body.style.overflow = "";
    document.body.classList.remove('shake-dance');
  }, 7000);
}

function launchRewardConfetti() {
  const canvas = document.getElementById('reward-confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';
  document.body.classList.add('shake-dance');
  const lights = document.getElementById('party-lights');
  if (lights) lights.style.display = 'block';
  let W = canvas.width, H = canvas.height;
  let particles = [];
  let colors = ['#cf28ff', '#ff49e1', '#51ffe7', '#fff', '#9800cc', '#29012e'];
  for (let i = 0; i < 1200; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * -H,
      r: 8 + Math.random() * 10,
      d: Math.random() * 160,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 20 - 10,
      tiltAngle: 0,
      tiltAngleIncremental: (Math.random() * 0.07) + .06,
      alpha: 0.82 + Math.random() * 0.18
    });
  }
  let angle = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      ctx.beginPath();
      ctx.lineWidth = particles[i].r / 2;
      ctx.strokeStyle = particles[i].color;
      ctx.globalAlpha = particles[i].alpha;
      ctx.moveTo(particles[i].x + particles[i].tilt + particles[i].r / 4, particles[i].y);
      ctx.lineTo(particles[i].x + particles[i].tilt, particles[i].y + particles[i].r);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    update();
  }
  function update() {
    angle += 0.01;
    for (let i = 0; i < particles.length; i++) {
      particles[i].y += (Math.cos(angle + particles[i].d) + 2.5 + particles[i].r/6) * 0.84;
      particles[i].x += Math.sin(angle * 1.07 + i) * 2.3;
      particles[i].tiltAngle += particles[i].tiltAngleIncremental;
      particles[i].tilt = Math.sin(particles[i].tiltAngle - (i % 2)) * 19;
      if (particles[i].y > H + 30) {
        particles[i].y = -14;
        particles[i].x = Math.random() * W;
      }
    }
  }
  let interval = setInterval(draw, 13);
  setTimeout(() => {
    clearInterval(interval);
    ctx.clearRect(0, 0, W, H);
    canvas.style.display = 'none';
    if (lights) lights.style.display = 'none';
    document.body.classList.remove('shake-dance');
  }, 6000);
}

// =================== Progress Save/Load ===================
  async function getProgress() {
    try {
      const doc = await db.collection("usuarios").doc("danilo2").get();
      return doc.exists ? doc.data() : {};
    } catch (e) {
      console.error("Erro ao buscar dados do Firebase:", e);
      return JSON.parse(localStorage.getItem('habits-progress-v2')) || {};
    }
  }
  async function saveProgress(progress) {
    try {
      await db.collection("usuarios").doc("danilo2").set(progress);
    } catch (e) {
      console.error("Erro ao salvar no Firebase:", e);
    }
    localStorage.setItem('habits-progress-v2', JSON.stringify(progress));
  }

const DIARY_LOCAL_KEY = 'habitos-diary-entries-v1';

function loadDiaryEntriesLocal() {
  try {
    const stored = localStorage.getItem(DIARY_LOCAL_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== 'object') return {};
    Object.keys(parsed).forEach((key) => {
      if (!parsed[key] || !parsed[key].texto) {
        delete parsed[key];
      }
    });
    return parsed;
  } catch (err) {
    console.error('Falha ao ler diário local:', err);
    return {};
  }
}

function saveDiaryEntriesLocal(entries) {
  try {
    localStorage.setItem(DIARY_LOCAL_KEY, JSON.stringify(entries));
  } catch (err) {
    console.error('Falha ao salvar diário local:', err);
  }
}

function formatDiaryDisplayDate(meta) {
  if (!meta) return '';
  const dia = String(meta.diaDoMes).padStart(2, '0');
  const mes = String(meta.mes).padStart(2, '0');
  return `${dia}/${mes}/${meta.ano}`;
}

function normalizeDiaryDoc(docId, data) {
  if (!data) return null;
  const texto = data.texto || '';
  const displayDate = data.displayDate || data.data || docId;
  let order = data.order;
  if (order == null) {
    if (data.referenciaDia && typeof data.referenciaDia.toMillis === 'function') {
      order = data.referenciaDia.toMillis();
    } else if (data.timestamp && typeof data.timestamp.toMillis === 'function') {
      order = data.timestamp.toMillis();
    } else {
      order = Date.now();
    }
  }
  return { texto, displayDate, order };
}

async function getDiaryEntries() {
  try {
    const snapshot = await db.collection('usuarios').doc('danilo2').collection('diario').get();
    const entries = {};
    snapshot.forEach((doc) => {
      const normalized = normalizeDiaryDoc(doc.id, doc.data());
      if (normalized && normalized.texto) entries[doc.id] = normalized;
    });
    saveDiaryEntriesLocal(entries);
    return entries;
  } catch (error) {
    console.error('Erro ao buscar diário no Firebase:', error);
    return loadDiaryEntriesLocal();
  }
}

async function setDiaryEntryRemote(dayId, text, meta) {
  const ref = db.collection('usuarios').doc('danilo2').collection('diario').doc(dayId);
  if (!text) {
    try {
      await ref.delete();
    } catch (err) {
      console.error('Erro ao remover diário no Firebase:', err);
      throw err;
    }
    return null;
  }
  const displayDate = formatDiaryDisplayDate(meta);
  const referencia = new Date(meta.ano, meta.mes - 1, meta.diaDoMes);
  const payload = {
    texto: text,
    displayDate,
    order: referencia.getTime(),
    diaId: dayId,
    referenciaDia: firebase.firestore.Timestamp.fromDate(referencia),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
  await ref.set(payload);
  return { texto: text, displayDate, order: payload.order };
}

function escapeHTML(str) {
  if (str == null) return '';
  return str.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return char;
    }
  });
}

function renderProgressText(content, extraClass = '') {
  const safe = escapeHTML(content ?? '');
  const extra = extraClass ? ` ${extraClass}` : '';
  return `<span class="progress-text-content"><span class="progress-text-base${extra}">${safe}</span><span class="progress-text-cover${extra}">${safe}</span></span>`;
}

// Aplica Twemoji para converter emojis em imagens pixeladas
function applyTwemoji(target = document.body) {
  if (window.twemoji) {
    twemoji.parse(target, {
      folder: '72x72',
      ext: '.png',
      className: 'emoji'
    });
  }
}

// === INÍCIO DO DOMContentLoaded ===
document.addEventListener("DOMContentLoaded", async function () {
  const bgVideo = document.querySelector('.arcade-bg');
  if (bgVideo) {
    bgVideo.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    });
    bgVideo.play().catch(() => {});
  }

  const startScreen = document.getElementById('start-screen');
  const calendarioEl = document.getElementById('calendario');
  const countersEl = document.querySelector('.arcade-counters');
  const lifeContainer = document.getElementById('life-container');
  const videoWrapper = document.getElementById('video-wrapper');
  let currentScale = 1;
  let diaryButtonWrapper = null;
  let hasGameStarted = false;

  function positionLives(scale = currentScale) {
    if (!lifeContainer || !calendarioEl) return;
    const calRect = calendarioEl.getBoundingClientRect();
    const parentRect = lifeContainer.parentElement.getBoundingClientRect();
    const left = calRect.left + calRect.width / 2 - parentRect.left;
    lifeContainer.style.left = `${left / scale}px`;
  }

  function positionDiaryButton(scale = currentScale) {
    if (!diaryButtonWrapper || !calendarioEl) return;
    const calRect = calendarioEl.getBoundingClientRect();
    if (!calRect.width || !calRect.height) return;
    const parentRect = diaryButtonWrapper.parentElement.getBoundingClientRect();
    const left = calRect.left + calRect.width / 2 - parentRect.left;
    const bottom = calRect.top + calRect.height - parentRect.top;
    const offset = 32;
    diaryButtonWrapper.style.left = `${left / scale}px`;
    diaryButtonWrapper.style.top = `${(bottom + offset) / scale}px`;
  }

  function resizeWrapper() {
    const baseW = 1920;
    const baseH = 1080;
    const scale = Math.max(window.innerWidth / baseW, window.innerHeight / baseH);
    const left = Math.round((window.innerWidth - baseW * scale) / 2);
    const top = Math.round((window.innerHeight - baseH * scale) / 2);
    if (videoWrapper) {
      videoWrapper.style.transform = `translate(${left}px, ${top}px) scale(${scale})`;
    }
    currentScale = scale;
    positionLives(scale);
    positionDiaryButton(scale);
  }
  window.addEventListener('resize', resizeWrapper);
  resizeWrapper();
  if (videoWrapper) videoWrapper.classList.add('visible');
  function openCurrentMonthDay() {
    const today = new Date();
    const mesAtual = today.getMonth() + 1;
    const anoAtual = today.getFullYear();
    const diaAtual = today.getDate();
    const allAnoDivs = document.querySelectorAll('#calendario .ano');
    const allAnoDrops = document.querySelectorAll('#calendario .ano-dropdown');
    const allMesDivs = document.querySelectorAll('#calendario .mes');
    const allDropdowns = document.querySelectorAll('#calendario .mes-dropdown');
    const allRewards = document.querySelectorAll('#calendario .reward-card');

    allAnoDivs.forEach((anoDiv, idx) => {
      const dropA = allAnoDrops[idx];
      dropA.style.display = 'none';
      anoDiv.classList.remove('open','ano-atual');
      anoDiv.querySelector('.arcade-arrow').innerHTML = '';
    });
    allMesDivs.forEach((mesDiv, idx) => {
      const dropdown = allDropdowns[idx];
      dropdown.style.display = 'none';
      mesDiv.classList.remove('open', 'mes-atual');
      mesDiv.querySelector('.arcade-arrow').innerHTML = '';
      if (allRewards[idx]) allRewards[idx].style.display = 'none';
    });

    allAnoDivs.forEach((anoDiv, idx) => {
      const aNum = parseInt(anoDiv.getAttribute('data-ano'));
      const dropA = allAnoDrops[idx];
      if (aNum === anoAtual) {
        dropA.style.display = 'block';
        anoDiv.classList.add('open','ano-atual');
      }
    });
    allMesDivs.forEach((mesDiv, idx) => {
      const mesNum = parseInt(mesDiv.getAttribute('data-mes'));
      const anoNum = parseInt(mesDiv.getAttribute('data-ano'));
      const dropdown = allDropdowns[idx];
      if (mesNum === mesAtual && anoNum === anoAtual) {
        dropdown.style.display = 'block';
        setTimeout(() => dropdown.classList.add('arcade-drop-show'), 5);
        mesDiv.classList.add('open', 'mes-atual');
        if (allRewards[idx]) allRewards[idx].style.display = '';
        const rows = dropdown.querySelectorAll('tr.main-row');
        rows.forEach((row, j) => {
          const dropRow = dropdown.querySelectorAll('.dropdown')[j];
          const dateCell = row.querySelectorAll('td')[0];
          const d = parseInt(dateCell.innerText.split('/')[0]);
          if (d === diaAtual) {
            row.classList.add('current-day', 'expanded');
            dropRow.style.display = 'block';
            setTimeout(() => dropRow.classList.add('arcade-drop-show'), 5);
          }
        });
      }
    });
    centerTodayDropdown();
    adjustVerticalCentering();
    handleStickyTitles();
    updateIndicators();
  }

  function startApp() {
    if (hasGameStarted) return;
    hasGameStarted = true;
    startScreen.classList.add('hidden');
    setTimeout(() => {
      if (calendarioEl) {
        calendarioEl.style.display = '';
        calendarioEl.classList.add('show-rgb');
      }
      if (countersEl) {
        countersEl.style.display = '';
        countersEl.classList.add('show-stroke');
      }
      if (lifeContainer) {
        lifeContainer.style.display = '';
        lifeContainer.classList.add('show');
        updateLivesDisplay();
        positionLives(currentScale);
      }
      if (diaryButtonWrapper) {
        diaryButtonWrapper.classList.add('show');
        positionDiaryButton(currentScale);
      }
      openCurrentMonthDay();
    }, 800);
  }
  startScreen.addEventListener('click', startApp, { once: true });
  document.addEventListener('keydown', function(e) {
    if (e.code === 'Enter' || e.code === 'Space') startApp();
  }, { once: true });

  const progress = await getProgress();
  let diaryEntries = await getDiaryEntries();
  if (!diaryEntries || typeof diaryEntries !== 'object') diaryEntries = {};
  const dados = [];
  const habitos_incrementais = {
    1: ["Dormir até meia noite"],
    6: ["Exercício (30 min)"],
    11: ["Planejar dia"],
    16: ["Eliminar Youtube"],
    21: ["Beber 2L de água"],
    26: ["45 min de hiperfoco"],
    31: ["Acordar às 6h"],
    36: ["Afirmações"],
    41: ["Exercício (60 min)"],
    46: ["1700 calorias"],
    51: ["Acordar às 5h"],
    56: ["Meditação (10 min)"],
    61: ["90 min de hiperfoco"],
    66: ["Leitura (30 min)"],
    71: ["Exercício (90 min)"],
    76: ["Praticar italiano"],
    81: ["Eliminar vícios"],
    86: ["90 min de hiperfoco (2x)"],
  };
  const habitos_ciclicos = [
    "Banho gelado",
    "Arrumar o quarto",
    "Se expresse",
    "Verificar peso",
    "Diário e gratidão"
  ];
  // Cria calendário de 29/09/2025 até 30/09/2026 para contemplar todas as recompensas
  const inicio = new Date(2025, 8, 29), fim = new Date(2026, 8, 30);
  const dias_total = Math.floor((fim - inicio) / (1000 * 60 * 60 * 24)) + 1;
  const caloriasFim = new Date(2026, 2, 10);
  let habitos_ativos = [];
  for (let i = 1; i <= dias_total; i++) {
    const data_atual = new Date(inicio);
    data_atual.setDate(inicio.getDate() + i - 1);
    if (habitos_incrementais[i]) {
      habitos_incrementais[i].forEach(novo => {
        if (novo.startsWith('Acordar')) {
          habitos_ativos = habitos_ativos.filter(h => !h.startsWith('Acordar'));
        } else if (novo.startsWith('Exercício')) {
          habitos_ativos = habitos_ativos.filter(h => !h.startsWith('Exercício'));
        } else if (novo.startsWith('Eliminar')) {
          habitos_ativos = habitos_ativos.filter(h => !h.startsWith('Eliminar'));
        } else if (novo.includes('hiperfoco')) {
          habitos_ativos = habitos_ativos.filter(h => !h.includes('hiperfoco'));
        }
        habitos_ativos.push(novo);
      });
    }
    if (data_atual > caloriasFim) {
      habitos_ativos = habitos_ativos.filter(h => h !== '1700 calorias');
    }
    const habito_ciclico = habitos_ciclicos[(i - 1) % habitos_ciclicos.length];
    dados.push({
      data: data_atual.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      dia: `Dia ${i}`,
      habitos: sortHabits(habitos_ativos),
      ciclico: habito_ciclico,
      mes: data_atual.getMonth() + 1,
      ano: data_atual.getFullYear(),
      diaDoMes: data_atual.getDate(),
      id: `dia-${data_atual.getFullYear()}-${data_atual.getMonth() + 1}-${data_atual.getDate()}`
    });
  }
  const calendario = document.getElementById("calendario");

  const diaLookup = {};
  dados.forEach((d) => {
    diaLookup[d.id] = d;
  });

  const anos = {};
  const grupos = {};
  dados.forEach((obj) => {
    if (!anos[obj.ano]) anos[obj.ano] = {};
    if (!anos[obj.ano][obj.mes]) anos[obj.ano][obj.mes] = [];
    anos[obj.ano][obj.mes].push(obj);

    const gid = `${obj.mes}-${obj.ano}`;
    if (!grupos[gid]) grupos[gid] = [];
    grupos[gid].push(obj);
  });

  // === Gera o HTML do calendário ===
  let html = '';
  Object.entries(anos).forEach(([ano, meses]) => {
    html += `<div class='ano arcade-clicavel' data-ano="${ano}">${ano} <span class="arcade-arrow"></span></div>`;
    html += `<div class="ano-dropdown" id="dropdown-ano-${ano}">`;

    Object.entries(meses).forEach(([mesNum, dias]) => {
      const nomeMes = monthNames[mesNum - 1].toUpperCase();
      html += `<div class='mes arcade-clicavel' data-mes="${mesNum}" data-ano="${ano}">${nomeMes} <span class="arcade-arrow"></span></div>
      <div class="mes-dropdown" id="dropdown-mes-${mesNum}-${ano}">
        <table>
          <colgroup>
            <col class="col-date">
            <col class="col-daily">
            <col class="col-cyclic">
          </colgroup>
          <thead>
            <tr>
              <th class="col-date">Data</th>
              <th class="col-daily">Hábitos Diários</th>
              <th class="col-cyclic">Hábito Cíclico</th>
            </tr>
          </thead>
          <tbody>`;
      dias.forEach((dia, i) => {
        const dayNum = parseInt(dia.dia.substring(4));
        let habitosCellText;
        if (dayNum <= 5) {
          habitosCellText = dia.habitos.join(', ');
        } else if (habitos_incrementais[dayNum]) {
        const newHabs = habitos_incrementais[dayNum];
        habitosCellText = `+ ${newHabs.join(', ')}`;
      } else {
        const total = dia.habitos.length;
        habitosCellText = `${total} ${total > 1 ? 'hábitos' : 'hábito'}`;
      }
      const isDiary = dia.ciclico === "Diário e gratidão";
      const diaryAttrs = isDiary ? ` data-diary-day="${dia.id}"` : '';
      const diaryLabelAttrs = isDiary ? ` data-diary-day="${dia.id}" data-diary="true"` : '';
      const diaryEmojiAttrs = isDiary ? ` data-diary-day="${dia.id}"` : '';
      const diaryEditorHtml = isDiary ? `
            <div class="diary-editor" id="diary-editor-${dia.id}" data-day="${dia.id}" style="display:none;">
              <textarea class="diary-textarea" id="diary-textarea-${dia.id}" placeholder="Escreva seu diário..."></textarea>
              <div class="diary-actions">
                <button type="button" class="diary-save" data-day="${dia.id}">Salvar</button>
                <button type="button" class="diary-cancel" data-day="${dia.id}">Cancelar</button>
              </div>
            </div>` : '';
      html += `
        <tr class="main-row arcade-clicavel" data-dropdown="${dia.id}" id="mainrow-${dia.id}">
          <td class="progress-text gold col-date">${renderProgressText(dia.data)}</td>
          <td class="progress-text gold col-daily">${renderProgressText(habitosCellText)}</td>
          <td class="progress-text gold col-cyclic">${renderProgressText(dia.ciclico)}</td>
        </tr>
        <tr class="dropdown" id="dropdown-${dia.id}" style="display: none;">
          <td colspan="3">
            <div class="habit-list">
              ${dia.habitos.map((h, idx) => `
                <div class="habit-item arcade-clicavel" id="habititem-${dia.id}-habit-${idx}">
                  <span class="habit-emoji" tabindex="0" data-checkbox="${dia.id}-habit-${idx}">${getHabitEmoji(h)}</span>
                  <label class="habit-label" for="${dia.id}-habit-${idx}" id="label-${dia.id}-habit-${idx}">${h}</label>
                  <input type="checkbox" class="habit-checkbox" id="${dia.id}-habit-${idx}">
                </div>
              `).join('')}
              <div class="habit-item arcade-clicavel${isDiary ? ' diary-habit' : ''}" id="habititem-${dia.id}-ciclico"${diaryAttrs}>
                <span class="habit-emoji" tabindex="0" data-checkbox="${dia.id}-ciclico"${diaryEmojiAttrs}>${getCiclicoEmoji(dia.ciclico)}</span>
                <label class="habit-label" for="${dia.id}-ciclico" id="label-${dia.id}-ciclico"${diaryLabelAttrs}>${dia.ciclico}</label>
                <input type="checkbox" class="habit-checkbox" id="${dia.id}-ciclico"${isDiary ? ` data-diary-day="${dia.id}"` : ''}>
              </div>
            </div>
            ${diaryEditorHtml}
          </td>
        </tr>`;
      });
      html += `</tbody>
        </table>`;
      // Prêmio
      const reward = getRewardFor(Number(mesNum), Number(ano));
      if (reward) {
        html += `
        <div class="reward-card" data-reward="${mesNum}-${ano}">
          <div class="reward-icon">${reward.icon}</div>
          <div class="title">${reward.title}</div>
          <div class="desc">${reward.desc}</div>
          <div class="reward-bar-bg"><div class="reward-bar" id="reward-bar-${mesNum}-${ano}"></div></div>
          <div class="reward-unlocked" id="reward-unlocked-${mesNum}-${ano}" style="display:none">Prêmio desbloqueado: <span>${reward.label}</span></div>
        </div>`;
      }
      html += `</div>`; // fecha o .mes-dropdown
    });

    html += `</div>`; // fecha o ano-dropdown
  });
  calendario.innerHTML = html;
  applyTwemoji(calendario);
  calendario.classList.add('loaded');

  const screenWrapper = calendario.parentElement;
  if (screenWrapper) {
    const existingWrapper = screenWrapper.querySelector('#diary-log-button-wrapper');
    if (existingWrapper) existingWrapper.remove();
  }
  diaryButtonWrapper = document.createElement('div');
  diaryButtonWrapper.id = 'diary-log-button-wrapper';
  diaryButtonWrapper.className = 'diary-log-button-wrapper';
  diaryButtonWrapper.innerHTML = `<button type="button" id="open-diary-log" class="diary-log-button arcade-clicavel">📔 Diário</button>`;
  if (screenWrapper) {
    screenWrapper.appendChild(diaryButtonWrapper);
  } else {
    calendario.appendChild(diaryButtonWrapper);
  }
  if (hasGameStarted) {
    requestAnimationFrame(() => {
      diaryButtonWrapper.classList.add('show');
      positionDiaryButton(currentScale);
    });
  } else {
    diaryButtonWrapper.classList.remove('show');
  }
  positionDiaryButton(currentScale);
  applyTwemoji(diaryButtonWrapper);

  const previousPanel = calendario.querySelector('#diary-log-panel');
  if (previousPanel) previousPanel.remove();
  const diaryPanel = document.createElement('div');
  diaryPanel.id = 'diary-log-panel';
  diaryPanel.className = 'diary-log-panel';
  diaryPanel.innerHTML = `
    <div class="diary-log-content">
      <div class="diary-log-header">
        <span class="diary-log-title">Registro do Diário</span>
        <button type="button" class="diary-log-close">Fechar</button>
      </div>
      <div class="diary-log-list" id="diary-log-list"></div>
    </div>
  `;
  calendario.appendChild(diaryPanel);
  applyTwemoji(diaryPanel);
  const diaryLogList = diaryPanel.querySelector('#diary-log-list');

  function renderDiaryLog() {
    if (!diaryLogList) return;
    const entriesArr = Object.entries(diaryEntries)
      .filter(([, entry]) => entry && entry.texto)
      .sort((a, b) => (b[1].order || 0) - (a[1].order || 0));
    if (!entriesArr.length) {
      diaryLogList.innerHTML = '<p class="diary-empty">Nenhuma entrada registrada ainda.</p>';
      return;
    }
    const itemsHtml = entriesArr.map(([dayId, entry]) => {
      const safeText = escapeHTML(entry.texto).replace(/\n/g, '<br>');
      const plain = (entry.texto || '').replace(/\s+/g, ' ').trim();
      const previewBase = plain.length ? plain : 'Entrada registrada';
      const preview = previewBase.length > 120 ? previewBase.slice(0, 117) + '…' : previewBase;
      return `
        <tr class="main-row arcade-clicavel diary-log-row" data-day="${dayId}">
          <td class="progress-text gold">${renderProgressText(entry.displayDate)}</td>
          <td class="progress-text gold">${renderProgressText(preview, 'diary-log-preview')}</td>
        </tr>
        <tr class="dropdown diary-log-dropdown" data-day="${dayId}" style="display: none;">
          <td colspan="2">
            <div class="diary-log-item" data-day="${dayId}">
              <div class="diary-log-date">${entry.displayDate}</div>
              <div class="diary-log-text">${safeText}</div>
            </div>
          </td>
        </tr>`;
    }).join('');
    diaryLogList.innerHTML = `
      <table class="diary-log-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Resumo</th>
          </tr>
        </thead>
        <tbody>${itemsHtml}</tbody>
      </table>
    `;
    diaryLogList.scrollTop = 0;
    applyTwemoji(diaryLogList);
    const rows = diaryLogList.querySelectorAll('.diary-log-row');
    rows.forEach((row) => {
      row.addEventListener('click', () => {
        const dayId = row.getAttribute('data-day');
        if (!dayId) return;
        const dropdown = diaryLogList.querySelector(`.diary-log-dropdown[data-day="${dayId}"]`);
        const isOpen = row.classList.contains('expanded');
        rows.forEach((r) => r.classList.remove('expanded'));
        diaryLogList.querySelectorAll('.diary-log-dropdown').forEach((dd) => {
          dd.style.display = 'none';
          dd.classList.remove('arcade-drop-show');
        });
        if (!isOpen) {
          row.classList.add('expanded');
          if (dropdown) {
            dropdown.style.display = 'table-row';
            setTimeout(() => dropdown.classList.add('arcade-drop-show'), 5);
          }
        }
      });
    });
  }

  function updateDiaryVisualState(dayId) {
    const item = document.getElementById(`habititem-${dayId}-ciclico`);
    if (!item) return;
    if (diaryEntries[dayId] && diaryEntries[dayId].texto) {
      item.classList.add('diary-filled');
    } else {
      item.classList.remove('diary-filled');
    }
  }

  function resetDiaryEditor(dayId) {
    const textarea = document.getElementById(`diary-textarea-${dayId}`);
    if (textarea) {
      textarea.value = diaryEntries[dayId]?.texto || '';
    }
  }

  function showDiaryEditor(dayId) {
    const editor = document.getElementById(`diary-editor-${dayId}`);
    if (!editor) return;
    resetDiaryEditor(dayId);
    editor.style.display = 'block';
    editor.classList.add('open');
    const textarea = document.getElementById(`diary-textarea-${dayId}`);
    if (textarea) {
      textarea.focus();
      const length = textarea.value.length;
      textarea.setSelectionRange(length, length);
    }
  }

  function hideDiaryEditor(dayId) {
    const editor = document.getElementById(`diary-editor-${dayId}`);
    if (!editor) return;
    editor.style.display = 'none';
    editor.classList.remove('open');
  }

  const openDiaryBtn = diaryButtonWrapper.querySelector('#open-diary-log');
  const closeDiaryBtn = diaryPanel.querySelector('.diary-log-close');

  if (openDiaryBtn) {
    openDiaryBtn.setAttribute('aria-controls', 'diary-log-panel');
  }

  const setDiaryButtonState = (isOpen) => {
    if (!openDiaryBtn) return;
    openDiaryBtn.classList.toggle('active', isOpen);
    openDiaryBtn.innerHTML = isOpen ? 'Fechar Diário' : '📔 Diário';
    openDiaryBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    applyTwemoji(openDiaryBtn);
  };

  const toggleDiaryPanel = (force) => {
    const shouldOpen = typeof force === 'boolean' ? force : !calendario.classList.contains('show-diary');
    calendario.classList.toggle('show-diary', shouldOpen);
    if (shouldOpen) {
      renderDiaryLog();
      if (diaryLogList) diaryLogList.scrollTop = 0;
      calendario.scrollTop = 0;
    }
    setDiaryButtonState(shouldOpen);
    positionDiaryButton(currentScale);
  };

  if (openDiaryBtn) {
    openDiaryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDiaryPanel();
    });
  }

  if (closeDiaryBtn) {
    closeDiaryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDiaryPanel(false);
    });
  }

  if (document.__diaryEscapeHandler) {
    document.removeEventListener('keydown', document.__diaryEscapeHandler);
  }
  const handleDiaryEscape = (e) => {
    if (e.key === 'Escape' && calendario.classList.contains('show-diary')) {
      toggleDiaryPanel(false);
    }
  };
  document.__diaryEscapeHandler = handleDiaryEscape;
  document.addEventListener('keydown', handleDiaryEscape);

  calendario.classList.remove('show-diary');
  setDiaryButtonState(false);

  document.querySelectorAll('.habit-item[data-diary-day]').forEach((item) => {
    const dayId = item.getAttribute('data-diary-day');
    updateDiaryVisualState(dayId);
    resetDiaryEditor(dayId);
    const label = item.querySelector('.habit-label');
    const checkbox = item.querySelector('.habit-checkbox');

    item.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (e.target.classList.contains('habit-emoji')) return;
      if (e.target.classList.contains('habit-label')) return;
      if (e.target.closest('.diary-actions')) return;
      showDiaryEditor(dayId);
    });

    if (label) {
      label.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showDiaryEditor(dayId);
      });
    }

    if (checkbox) {
      checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  });

  document.querySelectorAll('.diary-save').forEach((button) => {
    button.addEventListener('click', async (e) => {
      e.stopPropagation();
      const dayId = button.getAttribute('data-day');
      if (!dayId) return;
      const textarea = document.getElementById(`diary-textarea-${dayId}`);
      if (!textarea) return;
      const meta = diaLookup[dayId];
      if (!meta) return;
      const text = textarea.value.trim();
      const original = button.textContent;
      button.disabled = true;
      button.textContent = 'Salvando...';
      try {
        const normalized = await setDiaryEntryRemote(dayId, text, meta);
        if (normalized) {
          diaryEntries[dayId] = normalized;
        } else {
          delete diaryEntries[dayId];
        }
        saveDiaryEntriesLocal(diaryEntries);
        resetDiaryEditor(dayId);
        updateDiaryVisualState(dayId);
        renderDiaryLog();
        hideDiaryEditor(dayId);
        const checkbox = document.getElementById(`${dayId}-ciclico`);
        if (text) {
          if (checkbox && !checkbox.checked) {
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change'));
          }
        } else if (checkbox && checkbox.checked) {
          checkbox.checked = false;
          checkbox.dispatchEvent(new Event('change'));
        }
        button.textContent = 'Salvo!';
        setTimeout(() => { button.textContent = original; }, 1500);
      } catch (error) {
        console.error('Erro ao salvar diário:', error);
        button.textContent = 'Erro';
        setTimeout(() => { button.textContent = original; }, 2000);
        return;
      } finally {
        button.disabled = false;
      }
    });
  });

  document.querySelectorAll('.diary-cancel').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dayId = button.getAttribute('data-day');
      if (!dayId) return;
      resetDiaryEditor(dayId);
      hideDiaryEditor(dayId);
    });
  });

  renderDiaryLog();
  // sticky titles disabled
  function adjustVerticalCentering() {
    const styles = window.getComputedStyle(calendario);
    const paddingBottom = parseFloat(styles.paddingBottom) || 0;
    const effectiveHeight = calendario.scrollHeight - paddingBottom;
    if (effectiveHeight <= calendario.clientHeight + 5) {
      calendario.classList.add('vertical-center');
    } else {
      calendario.classList.remove('vertical-center');
    }
  }
  function handleStickyTitles() {
    // Sticky titles desativados para evitar o 
    // reposicionamento automático ao rolar a página
  }

  function updateIndicators() {
    document.querySelectorAll('#calendario .arcade-arrow').forEach(a => a.innerHTML = '');
    const openMonth = document.querySelector('#calendario .mes.open');
    const openYear = document.querySelector('#calendario .ano.open');
    if (openMonth) {
      // apenas indicador do dia
      return;
    }
    if (openYear) {
      const monthDiv = Array.from(allMesDivs).find(m =>
        parseInt(m.getAttribute('data-mes')) === mesAtual &&
        parseInt(m.getAttribute('data-ano')) === anoAtual);
      if (monthDiv) monthDiv.querySelector('.arcade-arrow').innerHTML = '<span class="neon-arrow"></span>';
    } else {
      const yearDiv = Array.from(allAnoDivs).find(a =>
        parseInt(a.getAttribute('data-ano')) === anoAtual);
      if (yearDiv) yearDiv.querySelector('.arcade-arrow').innerHTML = '<span class="neon-arrow"></span>';
    }
  }
  adjustVerticalCentering();

  if (calendarioEl) {
    calendarioEl.addEventListener('scroll', handleStickyTitles);
  }

  // --- CONTINUAÇÃO ABAIXO ---
  // Dropdown lógica: abrir/fechar ANO, MÊS e DIAS
  const allAnoDivs = document.querySelectorAll('#calendario .ano');
  const allAnoDrops = document.querySelectorAll('#calendario .ano-dropdown');
  const allMesDivs = document.querySelectorAll('#calendario .mes');
  const allDropdowns = document.querySelectorAll('#calendario .mes-dropdown');
  const allRewards = document.querySelectorAll('#calendario .reward-card');

  const today = new Date();
  const mesAtual = today.getMonth() + 1;
  const anoAtual = today.getFullYear();
  const diaAtual = today.getDate();
  const monthLabel = document.getElementById('currentMonth');
  if (monthLabel) monthLabel.textContent = monthNames[mesAtual - 1];

  // Inicializa: todos fechados
  allAnoDivs.forEach((anoDiv, idx) => {
    const anoNum = parseInt(anoDiv.getAttribute("data-ano"));
    const drop = allAnoDrops[idx];
    drop.style.display = 'none';
    anoDiv.classList.remove('open', 'ano-atual');
    anoDiv.querySelector('.arcade-arrow').innerHTML = '';

    anoDiv.onclick = () => {
      const wasOpen = anoDiv.classList.contains('open');
      allAnoDrops.forEach((d,i) => {
        d.style.display = 'none';
        allAnoDivs[i].classList.remove('open','ano-atual');
        allAnoDivs[i].querySelector('.arcade-arrow').innerHTML = '';
      });
      // fecha meses
      allDropdowns.forEach(d => {d.style.display = 'none';});
      allMesDivs.forEach(m => {m.classList.remove('open','mes-atual'); m.querySelector('.arcade-arrow').innerHTML='';});
      allRewards.forEach(r => {r.style.display = 'none';});
      if (wasOpen) {
        adjustVerticalCentering();
        handleStickyTitles();
        updateIndicators();
        return;
      }
      drop.style.display = 'block';
      anoDiv.classList.add('open','ano-atual');
      adjustVerticalCentering();
      handleStickyTitles();
      updateIndicators();
    };
  });

  // Inicializa meses: todos fechados
  allMesDivs.forEach((mesDiv, idx) => {
    const mesNum = parseInt(mesDiv.getAttribute("data-mes"));
    const anoNum = parseInt(mesDiv.getAttribute("data-ano"));
    const dropdown = allDropdowns[idx];
    // limpa indicador
    mesDiv.querySelector(".arcade-arrow").innerHTML = '';
    dropdown.style.display = 'none';
    mesDiv.classList.remove('open', 'mes-atual');
    if (allRewards[idx]) {
      allRewards[idx].style.display = 'none';
    }
  
    // Evento de abrir/fechar mês (com animação)
    mesDiv.onclick = (e) => {
      const wasOpen = mesDiv.classList.contains('open');
      // Desativa todos
      allDropdowns.forEach((d, i) => {
        d.style.display = 'none';
        allMesDivs[i].classList.remove('open', 'mes-atual');
        allMesDivs[i].querySelector('.arcade-arrow').innerHTML = '';
        if (allRewards[i]) {
          allRewards[i].style.display = 'none';
        }
      });
      if (wasOpen) {
        adjustVerticalCentering();
        handleStickyTitles();
        updateIndicators();
        return;
      }
      // Ativa clicado
      dropdown.style.display = 'block';
      requestAnimationFrame(() => refreshVisibleRowProgress(dropdown));
      setTimeout(() => dropdown.classList.add('arcade-drop-show'), 5);
      mesDiv.classList.add('open', 'mes-atual');
      if (allRewards[idx]) {
        allRewards[idx].style.display = '';
      }
      // Fecha todos dropdowns de dias
      dropdown.querySelectorAll('.dropdown').forEach(dd => {
        dd.style.display = 'none';
        dd.classList.remove('arcade-drop-show');
        let tr = dropdown.querySelector(`tr[data-dropdown="${dd.id.replace('dropdown-','')}"]`);
        if (tr) tr.classList.remove('expanded');
      });
      // Abre dia atual, se for este mês
      if (mesNum === mesAtual && anoNum === anoAtual) {
        let idxDia = Array.from(dropdown.querySelectorAll('.main-row')).findIndex(row => {
          let dateCell = row.querySelectorAll('td')[0];
          if (!dateCell) return false;
          let d = parseInt(dateCell.innerText.split("/")[0]);
          return d === diaAtual;
        });
      if (idxDia >= 0) {
        const mainRow = dropdown.querySelectorAll('.main-row')[idxDia];
        const dropRow = dropdown.querySelectorAll('.dropdown')[idxDia];
        mainRow.classList.add('expanded');
        dropRow.style.display = 'block';
        setTimeout(() => dropRow.classList.add('arcade-drop-show'), 5);
      }
    }
      adjustVerticalCentering();
      handleStickyTitles();
      updateIndicators();
    };
  });

  // Dropdowns de dias: todos fechados
  document.querySelectorAll('#calendario .mes-dropdown').forEach((dropdown, dIdx) => {
    const rows = dropdown.querySelectorAll('tr.main-row');
    const mesNum = parseInt(allMesDivs[dIdx].getAttribute("data-mes"));
    const anoNum = parseInt(allMesDivs[dIdx].getAttribute("data-ano"));
    rows.forEach((row, idx) => {
      const dropRow = dropdown.querySelectorAll('.dropdown')[idx];
      // Só abre o dia atual do mês atual
      let dateCell = row.querySelectorAll('td')[0];
      let d = parseInt(dateCell ? dateCell.innerText.split("/")[0] : 0);
      if (mesNum === mesAtual && anoNum === anoAtual && d === diaAtual) {
        row.classList.add('current-day');
      }
      dropRow.style.display = 'none';
      dropRow.classList.remove('arcade-drop-show');
      row.classList.remove('expanded');

      // Evento de abrir/fechar dia
      row.onclick = (e) => {
        // Só se clicar fora dos inputs/labels
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL' || e.target.classList.contains('habit-emoji')) return;
        const wasOpen = row.classList.contains('expanded');
        // Fecha todos do mês
        rows.forEach((r, i) => {
          const dr = dropdown.querySelectorAll('.dropdown')[i];
          dr.style.display = 'none';
          dr.classList.remove('arcade-drop-show');
          r.classList.remove('expanded');
        });
        handleStickyTitles();
        if (wasOpen) {
          adjustVerticalCentering();
          return;
        }
        // Abre clicado
        dropRow.style.display = 'block';
        setTimeout(() => dropRow.classList.add('arcade-drop-show'), 5);
        row.classList.add('expanded');
        adjustVerticalCentering();
        handleStickyTitles();
      };
    });
  });

  // Aplica progresso salvo + highlights arcade
  Object.keys(progress).forEach(checkId => {
    const checkbox = document.getElementById(checkId);
    if (checkbox) {
      checkbox.checked = progress[checkId];
      const label = document.getElementById('label-' + checkId);
      if (label) label.classList.toggle('habit-done', progress[checkId]);
      const hi = document.getElementById('habititem-' + checkId);
      if (hi) hi.classList.toggle('habit-complete', progress[checkId]);
    }
  });

  function applyRowProgressClip(row, pct) {
    if (!row) return;
    row.dataset.progressValue = pct;
    const covers = row.querySelectorAll('.progress-text-cover');
    if (!covers.length) return;

    const rowRect = row.getBoundingClientRect();
    const rowWidth = rowRect.width;
    const clampedPct = Math.max(0, Math.min(1, pct));
    const coveragePx = rowWidth * clampedPct;

    covers.forEach((cover) => {
      const holder = cover.parentElement;
      if (!holder) return;
      const holderRect = holder.getBoundingClientRect();
      const start = holderRect.left - rowRect.left;
      const width = holderRect.width;

      let uncoveredPercent = 100;
      if (!rowWidth || !width) {
        uncoveredPercent = clampedPct >= 1 ? 0 : 100;
      } else if (coveragePx <= start) {
        uncoveredPercent = 100;
      } else if (coveragePx >= start + width) {
        uncoveredPercent = 0;
      } else {
        const coveredWidth = coveragePx - start;
        uncoveredPercent = ((width - coveredWidth) / width) * 100;
      }

      uncoveredPercent = Math.max(0, Math.min(100, uncoveredPercent));
      cover.style.setProperty('--progress-cover-uncovered', `${uncoveredPercent}%`);
    });
  }

  function refreshVisibleRowProgress(scope = document) {
    const rows = scope.querySelectorAll ? scope.querySelectorAll('tr.main-row') : [];
    rows.forEach((row) => {
      const stored = parseFloat(row.dataset.progressValue);
      if (!Number.isNaN(stored)) {
        applyRowProgressClip(row, stored);
      }
    });
  }

  // Barra de progresso e highlights
  function updateProgressBar(dayId, habitCount) {
    let checked = 0;
    for (let i = 0; i < habitCount; i++) {
      if (document.getElementById(`${dayId}-habit-${i}`)?.checked) checked++;
    }
    if (document.getElementById(`${dayId}-ciclico`)?.checked) checked++;
    const total = habitCount || 0;
    const pct = total > 0 ? Math.min(1, Math.max(0, checked / total)) : 0;
    const row = document.getElementById(`mainrow-${dayId}`);
    if (row) {
      row.style.setProperty('--day-progress', pct);
      applyRowProgressClip(row, pct);
      row.classList.toggle('day-has-progress', pct > 0);
      const wasComplete = row.classList.contains('day-complete');
      if (!row.dataset.initDone) {
        row.dataset.initDone = 'true';
      } else if (pct === 1 && !wasComplete) {
        row.classList.add('day-complete');
        launchConfettiEpic();
        const audio = document.getElementById('celebrate-audio');
        if (audio) {
          audio.currentTime = 0;
          audio.play().catch(() => {});
        }
      } else if (pct === 1) {
        row.classList.add('day-complete');
      } else {
        row.classList.remove('day-complete');
      }
    }
  }

  // Prêmios
  function updateRewardProgress(month, year, totalDias, diasCompletos, skipCelebrate = false) {
    const pct = diasCompletos / totalDias;
    const bar = document.getElementById(`reward-bar-${month}-${year}`);
    const counterBar = document.getElementById("current-reward-bar");
    const unlocked = document.getElementById(`reward-unlocked-${month}-${year}`);
    if (bar) {
      bar.style.width = (pct * 100) + "%";
      if (counterBar && Number(month) === mesAtual && Number(year) === anoAtual) counterBar.style.width = (pct * 100) + "%";
      const celebrateKey = `reward-celebrated-${month}-${year}`;
      const already = localStorage.getItem(celebrateKey) === 'true';
      if (pct === 1) {
        unlocked.style.display = "block";
        if (!already && !skipCelebrate) {
          launchRewardConfetti();
          localStorage.setItem(celebrateKey, 'true');
        }
      } else {
        unlocked.style.display = "none";
        localStorage.removeItem(celebrateKey);
      }
    }
  }

  function checkAllHabitsComplete(dayId, habitCount) {
    let complete = true;
    for (let i = 0; i < habitCount; i++) {
      if (!document.getElementById(`${dayId}-habit-${i}`)?.checked) {
        complete = false;
        break;
      }
    }
    if (complete && !document.getElementById(`${dayId}-ciclico`)?.checked) complete = false;
    return complete;
  }

  function updateAllRewardProgress(skipCelebrate = false) {
    Object.entries(grupos).forEach(([id, dias]) => {
      const [mes, ano] = id.split("-");
      const reward = getRewardFor(Number(mes), Number(ano));
      if (!reward) return;
      let diasCompletos = 0;
      dias.forEach((dia) => {
        const habitCount = dia.habitos.length + 1;
        const allDone = checkAllHabitsComplete(dia.id, habitCount - 1);
        if (allDone) diasCompletos++;
      });
      updateRewardProgress(mes, ano, dias.length, diasCompletos, skipCelebrate);
    });
  }

  // Contadores 3D
  function countStats() {
    const checkboxes = document.querySelectorAll('.habit-checkbox');
    let done = 0;
    let maxSeq = 0, currentSeq = 0;
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    for (const dia of dados) {
      const rowDate = new Date(dia.ano, dia.mes - 1, dia.diaDoMes);
      if (rowDate > startOfToday) break;
      const row = document.getElementById(`mainrow-${dia.id}`);
      if (row && row.classList.contains('day-complete')) {
        currentSeq++;
        if (currentSeq > maxSeq) maxSeq = currentSeq;
      } else {
        if (rowDate.getTime() === startOfToday.getTime()) break;
        currentSeq = 0;
      }
    }
    const currentStreak = currentSeq;
    checkboxes.forEach(cb => { if (cb.checked) done++; });
    const seqEl = document.getElementById('seqCount');
    const recEl = document.getElementById('recordCount');
    if (seqEl) seqEl.textContent = currentStreak;
    if (recEl) recEl.textContent = maxSeq;
    const reward = getRewardFor(mesAtual, anoAtual);
    if (reward) {
      document.getElementById('rewardText').textContent = reward.label;
    }
    updateLivesDisplay();
  }

  function updateLivesDisplay() {
    if (!lifeContainer) return;
    const hearts = lifeContainer.querySelectorAll('.life-heart');
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    let lost = 0;
    for (const dia of dados) {
      const rowDate = new Date(dia.ano, dia.mes - 1, dia.diaDoMes);
      if (rowDate < startOfMonth) continue;
      if (rowDate > yesterday) break;
      const row = document.getElementById(`mainrow-${dia.id}`);
      if (!row || !row.classList.contains('day-complete')) {
        lost++;
        if (lost >= 3) break;
      }
    }
    const remaining = Math.max(0, 3 - lost);
    hearts.forEach((h, idx) => {
      h.style.visibility = idx < remaining ? 'visible' : 'hidden';
    });
  }

  // Checkbox lógica
  document.querySelectorAll('.habit-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const label = document.getElementById('label-' + this.id);
      if (label) label.classList.toggle('habit-done', this.checked);

      getProgress().then(progress => {
        progress[this.id] = this.checked;
        saveProgress(progress);
      });

      const hi = document.getElementById('habititem-' + this.id);
      if (hi) hi.classList.toggle('habit-complete', this.checked);
      const parts = this.id.match(/^dia-\d+-\d+-\d+/);
      if (parts) {
        const dayId = parts[0];
        const habitCount = document.querySelectorAll(`#dropdown-${dayId} .habit-checkbox`).length;
        updateProgressBar(dayId, habitCount);
        updateAllRewardProgress(false);
        countStats();
      }
    });
  });

  // Emoji interativo
  document.querySelectorAll('.habit-emoji').forEach(emoji => {
    emoji.addEventListener('mouseenter', function () {
      emoji.classList.add('glow');
      setTimeout(() => emoji.classList.remove('glow'), 680);
    });
    emoji.addEventListener('mouseleave', function () {
      emoji.classList.remove('glow');
    });
    emoji.addEventListener('click', function (e) {
      e.stopPropagation();
      const diaryDay = emoji.getAttribute('data-diary-day');
      if (diaryDay) {
        showDiaryEditor(diaryDay);
        return;
      }
      const id = emoji.getAttribute('data-checkbox');
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
      }
    });
  });

  // Inicializa barras, status e highlights
  dados.forEach((dia) => {
    const habitCount = dia.habitos.length + 1;
    updateProgressBar(dia.id, habitCount);
    const allDone = checkAllHabitsComplete(dia.id, habitCount - 1);
    if (allDone) {
      const dayRow = document.getElementById(`mainrow-${dia.id}`);
      if (dayRow) dayRow.classList.add('day-complete');
    }
  });
  updateAllRewardProgress(true);
  countStats();

  let resizeProgressTimeout = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeProgressTimeout);
    resizeProgressTimeout = setTimeout(() => {
      refreshVisibleRowProgress(document);
    }, 120);
  });

  const segCounter = document.getElementById('seguidos-counter');
  const recordCounter = document.getElementById('record-counter');
  if (segCounter && recordCounter) {
    recordCounter.style.display = 'none';
    let showRecord = false;
    setInterval(() => {
      showRecord = !showRecord;
      if (showRecord) {
        segCounter.style.display = 'none';
        recordCounter.style.display = 'flex';
      } else {
        segCounter.style.display = 'flex';
        recordCounter.style.display = 'none';
      }
    }, 6000);
  }

  // Centraliza visualmente o dropdown do dia atual na tela
  function centerTodayDropdown() {
    const calendario = document.getElementById('calendario');
    const todayDrop = document.getElementById(`dropdown-dia-${anoAtual}-${mesAtual}-${diaAtual}`);
    if (calendario && todayDrop) {
      // aguarda a animação de abertura do dropdown antes de centralizar
      setTimeout(() => {
        todayDrop.scrollIntoView({ block: 'center' });
      }, 350);
    }
  }
  // Chamado após abrir mês e dia atuais

  // Responsividade confetti
  window.addEventListener('resize', function () {
    const canvas = document.getElementById('confetti-canvas');
    if (canvas && canvas.style.display === 'block') {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  });
  positionLives(currentScale);
  applyTwemoji();
}); // Fecha DOMContentLoaded
