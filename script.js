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

// =================== RECOMPENSAS (ATUALIZADAS) ===================
const rewards = [
  { month: 5, year: 2025, icon: "🍩", title: "Maio", desc: "Caixa de donuts Krispy Kreme", label: "Donuts!" },
  { month: 6, year: 2025, icon: "🍝", title: "Junho", desc: "Restaurante Rascal", label: "Rascal!" },
  { month: 7, year: 2025, icon: "🛀", title: "Julho", desc: "Tanque de Isolamento Sensorial", label: "Isolamento!" },
  { month: 8, year: 2025, icon: "🏡", title: "Agosto", desc: "Airbnb Relaxante", label: "Airbnb!" },
  { month: 9, year: 2025, icon: "🧠🎲", title: "Setembro", desc: "Jogo Turing Machine", label: "Turing Machine!" },
  { month: 10, year: 2025, icon: "🛍️", title: "Outubro", desc: "Dia de Compras", label: "Compras!" },
  { month: 11, year: 2025, icon: "🏢", title: "Novembro", desc: "Alugar um Ape Aconchegante", label: "Apê!" },
  { month: 12, year: 2025, icon: "⌚", title: "Dezembro", desc: "Relógio Ingersoll", label: "Ingersoll!" },
  { month: 1, year: 2026, icon: "📺", title: "Janeiro", desc: "Comprar uma TV Top", label: "TV Top!" },
  { month: 2, year: 2026, icon: "🎟️", title: "Fevereiro", desc: "Jogo Ticket to Ride", label: "Ticket to Ride!" },
  { month: 3, year: 2026, icon: "🚪", title: "Março", desc: "Comprar Portão para Meus Pais", label: "Portão!" },
  { month: 4, year: 2026, icon: "🛒", title: "Abril", desc: "Dia de Compras", label: "Compras!" },
  { month: 5, year: 2026, icon: "💉", title: "Maio", desc: "Fechar o Braço com Tattoo", label: "Tattoo!" },
  { month: 6, year: 2026, icon: "👨‍🦳", title: "Junho", desc: "Cabelo Branco", label: "Cabelo Branco!" },
  { month: 7, year: 2026, icon: "🧒", title: "Julho", desc: "Look Daphne Foto", label: "Look Daphne!" },
  { month: 8, year: 2026, icon: "✈️", title: "Agosto", desc: "Viagem para Fora", label: "Viagem!" }
];

function getRewardFor(month, year) {
  return rewards.find(r => r.month === month && r.year === year);
}

// =================== HÁBITOS E UPGRADES ===================
const habitUpgrades = {
  25: "Acordar às 6h",
  41: "Acordar às 5h",         // Substitui o de 6h
  37: "Exercício (30 min)",
  49: "Exercício (60 min)",    // Substitui 30 min
  61: "Exercício (90 min)"     // Substitui 60 min
};
const habitos_incrementais = [
  { dia: 1, nome: "Beber 2L de água" },
  { dia: 5, nome: "Dieta com alimentos integrais" },
  { dia: 9, nome: "Eliminar jogos" },
  { dia: 13, nome: "Afirmações" },
  { dia: 17, nome: "Planejar dia" },
  { dia: 21, nome: "Leitura (30 min)" },
  { dia: 25, nome: "Acordar às 6h" },
  { dia: 29, nome: "Meditação (10 min)" },
  { dia: 33, nome: "1700 calorias" },
  { dia: 37, nome: "Exercício (30 min)" },
  { dia: 41, nome: "Acordar às 5h" },
  { dia: 45, nome: "Eliminar vícios" },
  { dia: 49, nome: "Exercício (60 min)" },
  { dia: 53, nome: "Praticar italiano" },
  { dia: 57, nome: "90 min de hiperfoco" },
  { dia: 61, nome: "Exercício (90 min)" }
];
const habitos_ciclicos = ["Banho gelado", "Agilidade mental", "Diário & gratidão", "Peso e Selfie"];
function getCiclicoEmoji(habito) {
  if (habito.includes("Banho gelado")) return "🚿";
  if (habito.includes("Agilidade")) return "🧠";
  if (habito.includes("Diário")) return "🙏";
  if (habito.includes("Peso")) return "⚖️";
  return "🎯";
}
const habitEmojis = [
  "💧", "🥗", "🎮🚫", "💬", "📅", "📚", "⏰", "🧘",
  "🔥", "🏃", "🌅", "🚫", "🏋️", "🇮🇹", "🎯", "💪"
];
const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

// =================== Progress Save/Load ===================
async function getProgress() {
  try {
    const doc = await db.collection("usuarios").doc("danilo").get();
    return doc.exists ? doc.data() : {};
  } catch (e) {
    return JSON.parse(localStorage.getItem('habits-progress-v1')) || {};
  }
}
async function saveProgress(progress) {
  try {
    await db.collection("usuarios").doc("danilo").set(progress);
  } catch (e) { }
  localStorage.setItem('habits-progress-v1', JSON.stringify(progress));
}

// ========== DOMContentLoaded ==========
document.addEventListener("DOMContentLoaded", async function () {
  const progress = await getProgress();
  const dados = [];
  const inicio = new Date(2025, 4, 21), fim = new Date(2026, 7, 31);
  const dias_total = Math.floor((fim - inicio) / (1000 * 60 * 60 * 24)) + 1;
  let habitos_ativos = [];
  // Previne duplicação em upgrades: remove anteriores
  for (let i = 1; i <= dias_total; i++) {
    const data_atual = new Date(inicio);
    data_atual.setDate(inicio.getDate() + i - 1);

    // Checa se tem upgrade
    if (habitUpgrades[i]) {
      habitos_ativos = habitos_ativos.filter(h => {
        if (habitUpgrades[i].startsWith("Acordar")) return !h.startsWith("Acordar");
        if (habitUpgrades[i].startsWith("Exercício")) return !h.startsWith("Exercício");
        return true;
      });
      habitos_ativos.push(habitUpgrades[i]);
    } else {
      let entry = habitos_incrementais.find(h => h.dia === i);
      if (entry) habitos_ativos.push(entry.nome);
    }

    let novoHabito = null;
    if (habitos_incrementais.find(h => h.dia === i) || habitUpgrades[i]) {
      novoHabito = habitos_ativos[habitos_ativos.length - 1];
    }
    const habito_ciclico = habitos_ciclicos[(i - 1) % 4];
    dados.push({
      data: data_atual.toLocaleDateString('pt-BR', { day: "2-digit", month: "2-digit" }),
      habitos: [...habitos_ativos],
      novoHabito,
      ciclico: habito_ciclico,
      mes: data_atual.getMonth() + 1,
      ano: data_atual.getFullYear(),
      diaDoMes: data_atual.getDate(),
      id: `dia-${data_atual.getFullYear()}-${data_atual.getMonth() + 1}-${data_atual.getDate()}`
    });
  }

  // ===== Gera HTML do calendário =====
  const calendario = document.getElementById("calendario");
  const grupos = {};
  dados.forEach((obj) => {
    const id = `${obj.mes}-${obj.ano}`;
    if (!grupos[id]) grupos[id] = [];
    grupos[id].push(obj);
  });
  let html = '';
  Object.entries(grupos).forEach(([id, dias]) => {
    const [mes, ano] = id.split("-");
    const mesNum = Number(mes);
    const anoNum = Number(ano);
    const nomeMes = monthNames[mesNum - 1].toUpperCase();
    html += `<div class='mes arcade-clicavel' data-mes="${mesNum}" data-ano="${anoNum}">${nomeMes} ${ano} 
      <span class="arcade-arrow"></span>
      <span class="arcade-pointer"></span>
    </div>
    <div class="mes-dropdown" id="dropdown-mes-${mesNum}-${anoNum}"><table>
      <thead>
        <tr>
          <th></th>
          <th>Data</th>
          <th>Hábitos Atuais</th>
          <th>Hábito Cíclico</th>
        </tr>
      </thead>
      <tbody>`;
    dias.forEach((dia, i) => {
      let habitosCellText;
      if (dia.novoHabito) {
        habitosCellText = `<span class="novo-habito">${dia.novoHabito}</span>`;
      } else {
        habitosCellText = `${dia.habitos.length} ${dia.habitos.length > 1 ? 'hábitos' : 'hábito'}`;
      }
      html += `
        <tr class="main-row arcade-clicavel" data-dropdown="${dia.id}" id="mainrow-${dia.id}">
          <td>
            <span class="expand-icon">&#9654;</span>
            <span class="arcade-pointer pointer-dia"></span>
          </td>
          <td class="progress-text gold">${dia.data}</td>
          <td class="progress-text gold">${habitosCellText}</td>
          <td class="progress-text gold">${dia.ciclico}</td>
        </tr>
        <tr class="dropdown" id="dropdown-${dia.id}" style="display: none;">
          <td colspan="4">
            <div class="habit-list">
              ${dia.habitos.map((h, idx) => `
                <div class="habit-item arcade-clicavel" id="habititem-${dia.id}-habit-${idx}">
                  <span class="habit-emoji big" tabindex="0" data-checkbox="${dia.id}-habit-${idx}">${habitEmojis[idx % habitEmojis.length]}</span>
                  <label class="habit-label" for="${dia.id}-habit-${idx}" id="label-${dia.id}-habit-${idx}">${h}</label>
                  <input type="checkbox" class="habit-checkbox pixel" id="${dia.id}-habit-${idx}">
                </div>
              `).join('')}
              <div class="habit-item arcade-clicavel" id="habititem-${dia.id}-ciclico">
                <span class="habit-emoji big" tabindex="0" data-checkbox="${dia.id}-ciclico">${getCiclicoEmoji(dia.ciclico)}</span>
                <label class="habit-label" for="${dia.id}-ciclico" id="label-${dia.id}-ciclico">${dia.ciclico}</label>
                <input type="checkbox" class="habit-checkbox pixel" id="${dia.id}-ciclico">
              </div>
            </div>
          </td>
        </tr>`;
    });
    html += `</tbody></table>`;
    // Prêmio
    const reward = getRewardFor(mesNum, anoNum);
    if (reward) {
      html += `
        <div class="reward-card" data-reward="${mes}-${ano}">
          <div class="reward-glow"></div>
          <div class="reward-icon">${reward.icon}</div>
          <div class="title">${reward.title}</div>
          <div class="desc">${reward.desc}</div>
          <div class="reward-bar-bg"><div class="reward-bar" id="reward-bar-${mes}-${ano}"></div></div>
          <div class="reward-unlocked" id="reward-unlocked-${mes}-${ano}" style="display:none">Prêmio desbloqueado: <span>${reward.label}</span></div>
        </div>`;
    }
    html += `</div>`; // fecha .mes-dropdown
  });
  calendario.innerHTML = html;

  // ========== Dropdown lógica: abrir/fechar mês e dia ==========
  const allMesDivs = document.querySelectorAll('#calendario .mes');
  const allDropdowns = document.querySelectorAll('#calendario .mes-dropdown');
  const allRewards = document.querySelectorAll('#calendario .reward-card');
  const today = new Date();
  const mesAtual = today.getMonth() + 1;
  const anoAtual = today.getFullYear();
  const diaAtual = today.getDate();

  allMesDivs.forEach((mesDiv, idx) => {
    const mesNum = parseInt(mesDiv.getAttribute("data-mes"));
    const anoNum = parseInt(mesDiv.getAttribute("data-ano"));
    const dropdown = allDropdowns[idx];
    mesDiv.querySelector(".arcade-arrow").innerHTML = (mesNum === mesAtual && anoNum === anoAtual) ?
      `<span class="arrow-pulse">&#9654;</span>` : `<span class="arrow-inactive">&#9654;</span>`;
    // Adiciona indicador arcade animado ao mês atual
    if (mesNum === mesAtual && anoNum === anoAtual) {
      mesDiv.classList.add('open', 'mes-atual');
      mesDiv.querySelector(".arcade-pointer").classList.add("arcade-pointer-ativo");
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
      mesDiv.classList.remove('open', 'mes-atual');
      mesDiv.querySelector(".arcade-pointer").classList.remove("arcade-pointer-ativo");
    }
    mesDiv.onclick = (e) => {
      // Toggle
      const isOpen = mesDiv.classList.contains('open');
      allDropdowns.forEach((d, i) => {
        d.style.display = 'none';
        allMesDivs[i].classList.remove('open', 'mes-atual');
        allMesDivs[i].querySelector(".arcade-pointer").classList.remove("arcade-pointer-ativo");
      });
      if (!isOpen) {
        dropdown.style.display = 'block';
        setTimeout(() => dropdown.classList.add('arcade-drop-show'), 5);
        mesDiv.classList.add('open', 'mes-atual');
        mesDiv.querySelector(".arcade-pointer").classList.add("arcade-pointer-ativo");
      } else {
        dropdown.style.display = 'none';
        mesDiv.classList.remove('open', 'mes-atual');
        mesDiv.querySelector(".arcade-pointer").classList.remove("arcade-pointer-ativo");
      }
      // Fecha todos os dropdowns de dias também
      dropdown.querySelectorAll('.dropdown').forEach(dd => {
        dd.style.display = 'none';
        dd.classList.remove('arcade-drop-show');
        let tr = dropdown.querySelector(`tr[data-dropdown="${dd.id.replace('dropdown-', '')}"]`);
        if (tr) tr.classList.remove('expanded');
      });
    };
  });

  // Dropdowns de dias: abre e fecha
  document.querySelectorAll('#calendario .mes-dropdown').forEach((dropdown, dIdx) => {
    const rows = dropdown.querySelectorAll('tr.main-row');
    const mesNum = parseInt(allMesDivs[dIdx].getAttribute("data-mes"));
    const anoNum = parseInt(allMesDivs[dIdx].getAttribute("data-ano"));
    rows.forEach((row, idx) => {
      const dropRow = dropdown.querySelectorAll('.dropdown')[idx];
      let dateCell = row.querySelectorAll('td')[1];
      let d = parseInt(dateCell ? dateCell.innerText.split("/")[0] : 0);
      const arcadePointerDia = row.querySelector('.arcade-pointer.pointer-dia');
      if (mesNum === mesAtual && anoNum === anoAtual && d === diaAtual) {
        row.classList.add('expanded');
        dropRow.style.display = 'table-row';
        setTimeout(() => dropRow.classList.add('arcade-drop-show'), 5);
        arcadePointerDia.classList.add('arcade-pointer-ativo');
      } else {
        row.classList.remove('expanded');
        dropRow.style.display = 'none';
        dropRow.classList.remove('arcade-drop-show');
        arcadePointerDia.classList.remove('arcade-pointer-ativo');
      }
      row.onclick = (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL' || e.target.classList.contains('habit-emoji')) return;
        const isOpen = row.classList.contains('expanded');
        rows.forEach((r, i) => {
          const dr = dropdown.querySelectorAll('.dropdown')[i];
          dr.style.display = 'none';
          dr.classList.remove('arcade-drop-show');
          r.classList.remove('expanded');
          r.querySelector('.arcade-pointer.pointer-dia').classList.remove('arcade-pointer-ativo');
        });
        if (!isOpen) {
          dropRow.style.display = 'table-row';
          setTimeout(() => dropRow.classList.add('arcade-drop-show'), 5);
          row.classList.add('expanded');
          arcadePointerDia.classList.add('arcade-pointer-ativo');
        } else {
          dropRow.style.display = 'none';
          dropRow.classList.remove('arcade-drop-show');
          row.classList.remove('expanded');
          arcadePointerDia.classList.remove('arcade-pointer-ativo');
        }
      };
    });
  });

  // === Checkbox lógica ===
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
    });
  });

  // === Emojis Arcade interativos ===
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

});
