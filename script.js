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

// Recompensas do mês
const rewards = [
  { month: 5, year: 2025, icon: "🍩", title: "Prêmio Maio", desc: "Uma caixa de donuts Krispy Kreme.", label: "Donuts!" },
  { month: 6, year: 2025, icon: "🏁", title: "Prêmio Junho", desc: "Um dia pra finalizar Valentina.", label: "Valentina!" },
  { month: 7, year: 2025, icon: "🍝", title: "Prêmio Julho", desc: "Jantar especial no restaurante Rascal.", label: "Rascal!" },
  { month: 8, year: 2025, icon: "🏡", title: "Prêmio Agosto", desc: "Airbnb relaxante para recarregar as energias.", label: "Airbnb relax!" },
  { month: 9, year: 2025, icon: "🧠🎲", title: "Prêmio Setembro", desc: "Jogo Turing Machine.", label: "Turing Machine!" },
  { month: 10, year: 2025, icon: "🛍️", title: "Prêmio Outubro", desc: "Um dia de compras.", label: "Compras!" },
  { month: 11, year: 2025, icon: "🛀", title: "Prêmio Novembro", desc: "Sessão em um tanque de privação sensorial.", label: "Zen!" },
  { month: 12, year: 2025, icon: "⌚", title: "Prêmio Dezembro", desc: "Relógio Ingersoll.", label: "Ingersoll!" }
];

function getRewardFor(month, year, day = null) {
  if (day) return rewards.find(r => r.day === day && r.month === month && r.year === year);
  return rewards.find(r => r.month === month && r.year === year && !r.day);
}

// EMOJIS para cada hábito incremental
const habitEmojis = [
  "💧", "🥗", "🎮🚫", "💬", "📅", "📚", "⏰", "🧘",
  "🔥", "🏃", "🌅", "🚫", "🏋️", "🇮🇹", "🎯", "💪",
];

// Função para pegar o emoji cíclico certo:
function getCiclicoEmoji(habito) {
  if (habito.includes("Banho gelado")) return "🚿";
  if (habito.includes("Agilidade")) return "🧠";
  if (habito.includes("Diário")) return "🙏";
  if (habito.includes("Peso")) return "⚖️";
  return "🎯";
}

// Array de nomes dos meses fixos em PT-BR
const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

// --------- CELEBRAÇÃO ---------
function launchConfettiEpic() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';
  document.body.style.overflow = "hidden";
  let W = canvas.width, H = canvas.height;
  let particles = [];
  let colors = ['#ffe379','#e4c145','#f7e399','#FF522E','#fafff9','#FFD700','#FF69B4','#00E6F6','#82FF6A','#FF6666','#0ed156','#001130','#fd2a49'];
  for (let i = 0; i < 1200; i++) {
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
  celebrateText.style.display = 'block';
  setTimeout(() => {
    clearInterval(interval);
    ctx.clearRect(0, 0, W, H);
    canvas.style.display = 'none';
    celebrateText.style.display = 'none';
    document.body.style.overflow = "";
  }, 4000);
}

function launchRewardConfetti() {
  const canvas = document.getElementById('reward-confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';
  let W = canvas.width, H = canvas.height;
  let particles = [];
  let colors = ['#cf28ff', '#ff49e1', '#51ffe7', '#fff', '#9800cc', '#29012e'];
  for (let i = 0; i < 800; i++) {
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
  }, 3400);
}

// --- PROGRESSO SALVO ---
async function getProgress() {
  try {
    const doc = await db.collection("usuarios").doc("danilo").get();
    return doc.exists ? doc.data() : {};
  } catch (e) {
    console.error("Erro ao buscar dados do Firebase:", e);
    return JSON.parse(localStorage.getItem('habits-progress-v1')) || {};
  }
}

async function saveProgress(progress) {
  try {
    await db.collection("usuarios").doc("danilo").set(progress);
  } catch (e) {
    console.error("Erro ao salvar no Firebase:", e);
  }
  localStorage.setItem('habits-progress-v1', JSON.stringify(progress));
}

// --- DOMContentLoaded ---
document.addEventListener("DOMContentLoaded", async function() {
  const progress = await getProgress();
  const dados = [];
  const habitos_incrementais = {
    1: ["Beber 2L de água"],
    5: ["Dieta com alimentos integrais"],
    9: ["Eliminar jogos"],
    13: ["Afirmações"],
    17: ["Planejar dia"],
    21: ["Leitura (30 min)"],
    25: ["Acordar às 6h"],
    29: ["Meditação (10 min)"],
    33: ["1700 calorias"],
    37: ["Exercício (30 min)"],
    41: ["Acordar às 5h"],
    45: ["Eliminar vícios"],
    49: ["Exercício (60 min)"],
    53: ["Praticar italiano"],
    57: ["90 min de hiperfoco"],
    61: ["Exercício (90 min)"]
  };
  const habitos_ciclicos = ["Banho gelado", "Agilidade mental", "Diário & gratidão", "Peso e Selfie"];
  const inicio = new Date(2025, 4, 21), fim = new Date(2025, 11, 31);
  const dias_total = Math.floor((fim - inicio) / (1000 * 60 * 60 * 24)) + 1;
  let habitos_ativos = [];
  for (let i = 1; i <= dias_total; i++) {
    const data_atual = new Date(inicio);
    data_atual.setDate(inicio.getDate() + i - 1);
    if (habitos_incrementais[i]) habitos_ativos = habitos_ativos.concat(habitos_incrementais[i]);
    const habito_ciclico = habitos_ciclicos[(i - 1) % 4];
    dados.push({
      data: data_atual.toLocaleDateString('pt-BR'),
      dia: `Dia ${i}`,
      habitos: [...habitos_ativos],
      ciclico: habito_ciclico,
      mes: data_atual.getMonth() + 1,
      ano: data_atual.getFullYear(),
      diaDoMes: data_atual.getDate(),
      id: `dia-${data_atual.getFullYear()}-${data_atual.getMonth()+1}-${data_atual.getDate()}`
    });
  }
  const calendario = document.getElementById("calendario");
  const grupos = {};
  dados.forEach((obj) => {
    const id = `${obj.mes}-${obj.ano}`;
    if (!grupos[id]) grupos[id] = [];
    grupos[id].push(obj);
  });

  // === CALENDARIO HTML (com meses colapsáveis) ===
  let html = '';
  Object.entries(grupos).forEach(([id, dias]) => {
    const [mes, ano] = id.split("-");
    const mesNum = Number(mes);
    const anoNum = Number(ano);
    const nomeMes = monthNames[mesNum - 1].toUpperCase();

    html += `<div class='mes'>${nomeMes} ${ano}</div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Data</th>
            <th>Dia</th>
            <th>Hábitos Diários</th>
            <th>Hábito Cíclico</th>
          </tr>
        </thead>
        <tbody>`;
    dias.forEach((dia) => {
      const dayNum = parseInt(dia.dia.substring(4));
      let habitosCellText;
      if (dayNum <= 4) {
        habitosCellText = dia.habitos.join(', ');
      } else if (habitos_incrementais[dayNum]) {
        const newHabs = habitos_incrementais[dayNum];
        const totalBefore = dia.habitos.length - newHabs.length;
        habitosCellText = `${totalBefore} ${totalBefore > 1 ? 'hábitos' : 'hábito'} + ${newHabs.join(', ')}`;
      } else {
        const total = dia.habitos.length;
        habitosCellText = `${total} ${total > 1 ? 'hábitos' : 'hábito'}`;
      }
      html += `
        <tr class="main-row" data-dropdown="${dia.id}" id="mainrow-${dia.id}" style="--progress:0">
          <td><span class="expand-icon">&#9654;</span></td>
          <td class="progress-text gold">${dia.data}</td>
          <td class="progress-text gold">${dia.dia}</td>
          <td class="progress-text gold">${habitosCellText}</td>
          <td class="progress-text gold">${dia.ciclico}</td>
        </tr>
        <tr class="dropdown" id="dropdown-${dia.id}">
          <td colspan="5">
            <div class="habit-list">
              ${dia.habitos.map((h, idx) => `
                <div class="habit-item" id="habititem-${dia.id}-habit-${idx}">
                  <span class="habit-emoji" tabindex="0" data-checkbox="${dia.id}-habit-${idx}">${habitEmojis[idx % habitEmojis.length]}</span>
                  <label class="habit-label" for="${dia.id}-habit-${idx}" id="label-${dia.id}-habit-${idx}">${h}</label>
                  <input type="checkbox" class="habit-checkbox" id="${dia.id}-habit-${idx}">
                </div>
              `).join('')}
              <div class="habit-item" id="habititem-${dia.id}-ciclico">
                <span class="habit-emoji" tabindex="0" data-checkbox="${dia.id}-ciclico">${getCiclicoEmoji(dia.ciclico)}</span>
                <label class="habit-label" for="${dia.id}-ciclico" id="label-${dia.id}-ciclico">${dia.ciclico}</label>
                <input type="checkbox" class="habit-checkbox" id="${dia.id}-ciclico">
              </div>
            </div>
          </td>
        </tr>`;
    });
    html += `</tbody></table>`;

    // Card de prêmio do mês (exceto aniversário)
    const reward = getRewardFor(mesNum, anoNum);
    if (reward) {
      html += `
        <div class="reward-card" data-reward="${mes}-${ano}">
          <div class="reward-icon">${reward.icon}</div>
          <div class="title">${reward.title}</div>
          <div class="desc">${reward.desc}</div>
          <div class="reward-bar-bg"><div class="reward-bar" id="reward-bar-${mes}-${ano}"></div></div>
          <div class="reward-unlocked" id="reward-unlocked-${mes}-${ano}" style="display:none">Prêmio desbloqueado: <span>${reward.label}</span></div>
        </div>`;
    }
    // Card de prêmio especial de aniversário
    if (mesNum === 8 && anoNum === 2025) {
      const annivReward = getRewardFor(mesNum, anoNum, 21);
      if (annivReward) {
        html += `
            <div class="reward-card" data-reward="birthday-2025">
              <div class="reward-icon">${annivReward.icon}</div>
              <div class="title">${annivReward.title}</div>
              <div class="desc">${annivReward.desc}</div>
              <div class="reward-bar-bg"><div class="reward-bar" id="reward-bar-birthday"></div></div>
              <div class="reward-unlocked" id="reward-unlocked-birthday" style="display:none">Prêmio desbloqueado: <span>${annivReward.label}</span></div>
            </div>
          `;
      }
    }
  });
  calendario.innerHTML = html;

  // === Atribui progresso salvo ===
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

  // === Barra de progresso dourada por dia ===
  function updateProgressBar(dayId, habitCount) {
    let checked = 0;
    for (let i = 0; i < habitCount; i++) {
      if (document.getElementById(`${dayId}-habit-${i}`)?.checked) checked++;
    }
    if (document.getElementById(`${dayId}-ciclico`)?.checked) checked++;
    let pct = checked / habitCount;
    const row = document.getElementById(`mainrow-${dayId}`);
    if (row) {
      row.style.transition = 'background-size 0.7s cubic-bezier(.6,1.2,.16,1.08), color 0.3s';
      row.style.setProperty('--progress', pct);
      if (pct === 1) row.classList.add('day-complete');
      else row.classList.remove('day-complete');
    }
  }

  // Barra de progresso de recompensa por mês
  function updateRewardProgress(month, year, totalDias, diasCompletos) {
    const pct = diasCompletos / totalDias;
    const bar = document.getElementById(`reward-bar-${month}-${year}`);
    const unlocked = document.getElementById(`reward-unlocked-${month}-${year}`);
    if (bar) {
      bar.style.width = (pct * 100) + "%";
      if (pct === 1) {
        if (unlocked.style.display !== "block") {
          unlocked.style.display = "block";
          launchRewardConfetti();
        }
      } else {
        unlocked.style.display = "none";
      }
    }
  }
  // Barra de recompensa especial do aniversário
  function updateBirthdayRewardProgress(diasCompletos) {
    const bar = document.getElementById(`reward-bar-birthday`);
    const unlocked = document.getElementById(`reward-unlocked-birthday`);
    if (bar) {
      bar.style.width = (diasCompletos ? 100 : 0) + "%";
      if (diasCompletos) {
        unlocked.style.display = "block";
        launchRewardConfetti();
      } else {
        unlocked.style.display = "none";
      }
    }
  }

  // --- Dropdown de dias (habitual) ---
  document.querySelectorAll('tr.main-row').forEach(row => {
    row.addEventListener('click', function (e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL' || e.target.classList.contains('habit-emoji')) return;
      const dropdownId = this.getAttribute('data-dropdown');
      const dropdown = document.getElementById(`dropdown-${dropdownId}`);
      if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        dropdown.classList.add('drop-up');
        setTimeout(() => dropdown.classList.remove('drop-up'), 400);
        this.classList.remove('expanded');
      } else {
        document.querySelectorAll('.dropdown.active').forEach(dd => {
          dd.classList.remove('active');
          dd.classList.add('drop-up');
          setTimeout(() => dd.classList.remove('drop-up'), 400);
          document.querySelector(`.main-row[data-dropdown="${dd.id.replace('dropdown-', '')}"]`).classList.remove('expanded');
        });
        dropdown.classList.add('active');
        dropdown.classList.remove('drop-up');
        this.classList.add('expanded');
      }
    });
  });

  // --- Dropdown animado de meses ---
  function buildDropdowns() {
    const meses = [...document.querySelectorAll('.mes')];
    meses.forEach(mesEl => {
      mesEl.addEventListener('click', function () {
        this.classList.toggle('open');
        let next = this.nextElementSibling;
        if (!next) return;
        // Esconde/mostra todas as tabelas e cards até encontrar o próximo .mes ou fim
        while (next && !next.classList.contains('mes')) {
          if (next.style.display === 'none') next.style.display = '';
          else next.style.display = 'none';
          next = next.nextElementSibling;
        }
      });
    });
  }
  buildDropdowns();

  // Checagem de hábitos concluídos
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

  // Som de celebração
  function playCelebrateSound() {
    const audio = document.getElementById('celebrate-audio');
    audio.currentTime = 0;
    audio.volume = 0.97;
    let played = false;
    audio.play().then(() => { played = true; }).catch(() => {
      if (!played) {
        document.body.addEventListener('pointerdown', () => { audio.play(); }, { once: true });
      }
    });
  }

  // Checkbox logic
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
        const allDone = checkAllHabitsComplete(dayId, habitCount - 1);
        const dropdown = document.getElementById(`dropdown-${dayId}`);
        const dayRow = document.getElementById(`mainrow-${dayId}`);
        if (allDone) {
          dayRow.classList.add('day-complete');
          launchConfettiEpic();
          playCelebrateSound();
          setTimeout(() => {
            if (dropdown) {
              dropdown.classList.remove('active');
              dropdown.classList.add('drop-up');
              setTimeout(() => dropdown.classList.remove('drop-up'), 400);
            }
            if (dayRow) dayRow.classList.remove('expanded');
            document.body.style.overflow = "";
          }, 950);
        } else {
          dayRow.classList.remove('day-complete');
        }
        // Atualizar barras de recompensa
        updateAllRewardProgress();
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
      const id = emoji.getAttribute('data-checkbox');
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
      }
    });
  });

  // Progress bar e checagem para todos os dias e prêmios!
  dados.forEach((dia) => {
    const habitCount = dia.habitos.length + 1;
    updateProgressBar(dia.id, habitCount);
    const allDone = checkAllHabitsComplete(dia.id, habitCount - 1);
    if (allDone) {
      const dayRow = document.getElementById(`mainrow-${dia.id}`);
      if (dayRow) dayRow.classList.add('day-complete');
    }
  });

  function updateAllRewardProgress() {
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
      updateRewardProgress(mes, ano, dias.length, diasCompletos);
    });
    // Aniversário
    if (document.getElementById("reward-bar-birthday")) {
      let birthdayDone = false;
      dados.forEach((dia) => {
        if (dia.ano == 2025 && dia.mes == 8 && dia.diaDoMes == 21) {
          const habitCount = dia.habitos.length + 1;
          birthdayDone = checkAllHabitsComplete(dia.id, habitCount - 1);
        }
      });
      updateBirthdayRewardProgress(birthdayDone);
    }
  }
  updateAllRewardProgress();

  // Redimensiona confetti se precisar
  window.addEventListener('resize', function () {
    const canvas = document.getElementById('confetti-canvas');
    if (canvas.style.display === 'block') {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  });
});

// --- Contadores estilizados/atualização visual (opcional extra) ---
// Você pode incrementar aqui efeitos de animar número ou ajustar a posição via JS se desejar.
