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
  { month: 5, year: 2025, icon: "🍩", title: "Prêmio Maio", desc: "Caixa de donuts Krispy Kreme", label: "Donuts" },
  { month: 6, year: 2025, icon: "🍝", title: "Prêmio Junho", desc: "Restaurante Rascal", label: "Rascal" },
  { month: 7, year: 2025, icon: "🛀", title: "Prêmio Julho", desc: "Tanque de isolamento sensorial", label: "Relax" },
  { month: 8, year: 2025, icon: "🏡", title: "Prêmio Agosto", desc: "Airbnb relaxante", label: "Airbnb" },
  { month: 9, year: 2025, icon: "🧠🎲", title: "Prêmio Setembro", desc: "Jogo Turing Machine", label: "Turing" },
  { month: 10, year: 2025, icon: "🛍️", title: "Prêmio Outubro", desc: "Dia de compras", label: "Compras" },
  { month: 11, year: 2025, icon: "🏠", title: "Prêmio Novembro", desc: "Alugar um apê aconchegante", label: "Apê" },
  { month: 12, year: 2025, icon: "⌚", title: "Prêmio Dezembro", desc: "Relógio Ingersoll", label: "Ingersoll" },
  { month: 1, year: 2026, icon: "📺", title: "Prêmio Janeiro", desc: "Comprar uma TV top", label: "TV" },
  { month: 2, year: 2026, icon: "🚂", title: "Prêmio Fevereiro", desc: "Jogo Ticket to Ride", label: "Ticket" },
  { month: 3, year: 2026, icon: "🚪", title: "Prêmio Março", desc: "Comprar portão para meus pais", label: "Portão" },
  { month: 4, year: 2026, icon: "🛍️", title: "Prêmio Abril", desc: "Dia de compras", label: "Compras" },
  { month: 5, year: 2026, icon: "💉", title: "Prêmio Maio", desc: "Fechar o braço com tattoo", label: "Tattoo" },
  { month: 6, year: 2026, icon: "👨‍🦳", title: "Prêmio Junho", desc: "Cabelo branco", label: "Cabelo" },
  { month: 7, year: 2026, icon: "📸", title: "Prêmio Julho", desc: "Look Daphne foto", label: "Daphne" },
  { month: 8, year: 2026, icon: "✈️", title: "Prêmio Agosto", desc: "Viagem para fora", label: "Viagem" }
];

function getRewardFor(month, year, day = null) {
  if (day) return rewards.find(r => r.day === day && r.month === month && r.year === year);
  return rewards.find(r => r.month === month && r.year === year && !r.day);
}

const habitEmojis = [
  "💧", "🥗", "🎮🚫", "💬", "📅", "📚", "⏰", "🧘",
  "🔥", "🏃", "🌅", "🚫", "🏋️", "🇮🇹", "🎯", "💪",
];

function getCiclicoEmoji(habito) {
  if (habito.includes("Banho gelado")) return "🚿";
  if (habito.includes("Agilidade")) return "🧠";
  if (habito.includes("Diário")) return "🙏";
  if (habito.includes("Peso")) return "⚖️";
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
            dropRow.style.display = 'table-row';
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
      openCurrentMonthDay();
    }, 800);
  }
  startScreen.addEventListener('click', startApp, { once: true });
  document.addEventListener('keydown', function(e) {
    if (e.code === 'Enter' || e.code === 'Space') startApp();
  }, { once: true });

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
  // Cria calendário de 21/05/2025 até 31/08/2026 para contemplar todas as recompensas
  const inicio = new Date(2025, 4, 21), fim = new Date(2026, 7, 31);
  const dias_total = Math.floor((fim - inicio) / (1000 * 60 * 60 * 24)) + 1;
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
        }
        habitos_ativos.push(novo);
      });
    }
    const habito_ciclico = habitos_ciclicos[(i - 1) % 4];
    dados.push({
      data: data_atual.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      dia: `Dia ${i}`,
      habitos: [...habitos_ativos],
      ciclico: habito_ciclico,
      mes: data_atual.getMonth() + 1,
      ano: data_atual.getFullYear(),
      diaDoMes: data_atual.getDate(),
      id: `dia-${data_atual.getFullYear()}-${data_atual.getMonth() + 1}-${data_atual.getDate()}`
    });
  }
  const calendario = document.getElementById("calendario");

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
      <div class="mes-dropdown" id="dropdown-mes-${mesNum}-${ano}"><table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Hábitos Diários</th>
            <th>Hábito Cíclico</th>
          </tr>
        </thead>
        <tbody>`;
      dias.forEach((dia, i) => {
        const dayNum = parseInt(dia.dia.substring(4));
        let habitosCellText;
        if (dayNum <= 4) {
          habitosCellText = dia.habitos.join(', ');
        } else if (habitos_incrementais[dayNum]) {
        const newHabs = habitos_incrementais[dayNum];
        habitosCellText = `+ ${newHabs.join(', ')}`;
      } else {
        const total = dia.habitos.length;
        habitosCellText = `${total} ${total > 1 ? 'hábitos' : 'hábito'}`;
      }
      html += `
        <tr class="main-row arcade-clicavel" data-dropdown="${dia.id}" id="mainrow-${dia.id}">
          <td class="progress-text gold">${dia.data}</td>
          <td class="progress-text gold">${habitosCellText}</td>
          <td class="progress-text gold">${dia.ciclico}</td>
        </tr>
        <tr class="dropdown" id="dropdown-${dia.id}" style="display: none;">
          <td colspan="3">
            <div class="habit-list">
              ${dia.habitos.map((h, idx) => `
                <div class="habit-item arcade-clicavel" id="habititem-${dia.id}-habit-${idx}">
                  <span class="habit-emoji" tabindex="0" data-checkbox="${dia.id}-habit-${idx}">${habitEmojis[idx % habitEmojis.length]}</span>
                  <label class="habit-label" for="${dia.id}-habit-${idx}" id="label-${dia.id}-habit-${idx}">${h}</label>
                  <input type="checkbox" class="habit-checkbox" id="${dia.id}-habit-${idx}">
                </div>
              `).join('')}
              <div class="habit-item arcade-clicavel" id="habititem-${dia.id}-ciclico">
                <span class="habit-emoji" tabindex="0" data-checkbox="${dia.id}-ciclico">${getCiclicoEmoji(dia.ciclico)}</span>
                <label class="habit-label" for="${dia.id}-ciclico" id="label-${dia.id}-ciclico">${dia.ciclico}</label>
                <input type="checkbox" class="habit-checkbox" id="${dia.id}-ciclico">
              </div>
            </div>
          </td>
        </tr>`;
      });
      html += `</tbody></table>`;
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
  if (window.twemoji) {
    twemoji.parse(calendario, {folder: '72x72', ext: '.png'});
  }
  calendario.classList.add('loaded');
  // sticky titles disabled
  function adjustVerticalCentering() {
    if (calendario.scrollHeight <= calendario.clientHeight + 5) {
      calendario.classList.add('vertical-center');
    } else {
      calendario.classList.remove('vertical-center');
    }
  }
  function handleStickyTitles() {
    const cal = document.getElementById('calendario');
    if (!cal) return;
    document.querySelectorAll('#calendario .ano, #calendario .mes, #calendario tr.main-row')
      .forEach(el => el.classList.remove('sticky-title'));
    cal.style.setProperty('--top-mask-stop', '35px');

    const stickyOffset = 40;

    const openDay = document.querySelector('#calendario tr.main-row.expanded');
    if (openDay) {
      const drop = openDay.nextElementSibling;
      if (drop && drop.scrollHeight > cal.clientHeight - openDay.offsetHeight - stickyOffset) {
        openDay.classList.add('sticky-title');
        cal.style.setProperty('--top-mask-stop', stickyOffset + 'px');
        return;
      }
    }

    const openMonth = document.querySelector('#calendario .mes.open');
    if (openMonth) {
      const drop = openMonth.nextElementSibling;
      if (drop && drop.scrollHeight > cal.clientHeight - openMonth.offsetHeight - stickyOffset) {
        openMonth.classList.add('sticky-title');
        cal.style.setProperty('--top-mask-stop', stickyOffset + 'px');
        return;
      }
    }

    const openYear = document.querySelector('#calendario .ano.open');
    if (openYear) {
      const drop = openYear.nextElementSibling;
      if (drop && drop.scrollHeight > cal.clientHeight - openYear.offsetHeight - stickyOffset) {
        openYear.classList.add('sticky-title');
        cal.style.setProperty('--top-mask-stop', stickyOffset + 'px');
      }
    }
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
        dropRow.style.display = 'table-row';
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
        dropRow.style.display = 'table-row';
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

  // Barra de progresso e highlights
  function updateProgressBar(dayId, habitCount) {
    let checked = 0;
    for (let i = 0; i < habitCount; i++) {
      if (document.getElementById(`${dayId}-habit-${i}`)?.checked) checked++;
    }
    if (document.getElementById(`${dayId}-ciclico`)?.checked) checked++;
    let pct = checked / habitCount;
    const row = document.getElementById(`mainrow-${dayId}`);
    if (row) {
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
    const unlocked = document.getElementById(`reward-unlocked-${month}-${year}`);
    if (bar) {
      bar.style.width = (pct * 100) + "%";
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
    let lastDone = false;
    // Para cada dia, verifica se todos hábitos estão completos para sequência
    const dias = Array.from(document.querySelectorAll('tr.main-row'));
    dias.forEach((row) => {
      if (row.classList.contains('day-complete')) {
        currentSeq++;
        if (currentSeq > maxSeq) maxSeq = currentSeq;
        lastDone = true;
      } else {
        currentSeq = 0;
        lastDone = false;
      }
    });
    checkboxes.forEach(cb => { if (cb.checked) done++; });
    document.getElementById('seqCount').textContent = maxSeq;
    const reward = getRewardFor(mesAtual, anoAtual);
    if (reward) {
      document.getElementById('rewardText').textContent = reward.label;
    }
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
}); // Fecha DOMContentLoaded
