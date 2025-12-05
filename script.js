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

const baseVisualizerTheme = {
  headline: "Recompensa Arcade",
  tagline: "Modo vitória ativado",
  description: "Sua disciplina abriu mais uma porta secreta dentro do fliperama da vida.",
  icon: "🕹️",
  primary: "#51ffe7",
  secondary: "#cf28ff",
  accent: "#ffe379",
  background: "radial-gradient(circle at 20% 20%, rgba(81, 255, 231, 0.28) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(207, 40, 255, 0.28) 0%, transparent 55%), linear-gradient(135deg, #010915 0%, #03162a 45%, #01050f 100%)",
  warpStart: "rgba(81, 255, 231, 0.6)",
  warpEnd: "rgba(207, 40, 255, 0.45)",
  gridColor: "rgba(81, 255, 231, 0.18)",
  haze: "rgba(207, 40, 255, 0.12)",
  particleColor: "#ffe379",
  particleGlow: "rgba(81, 255, 231, 0.65)",
  contentBg: "linear-gradient(135deg, rgba(0, 10, 24, 0.78), rgba(0, 18, 44, 0.82))",
  contentBorder: "rgba(81, 255, 231, 0.32)",
  contentShadow: "0 0 45px rgba(0, 0, 0, 0.75), 0 0 85px rgba(0, 0, 0, 0.45), 0 0 40px rgba(81, 255, 231, 0.55)",
  innerBorder: "rgba(255, 255, 255, 0.08)",
  contentSheen: "linear-gradient(130deg, rgba(81, 255, 231, 0.12), rgba(207, 40, 255, 0.08), rgba(255, 227, 121, 0.12))",
  chipBg: "linear-gradient(135deg, rgba(81, 255, 231, 0.12), rgba(207, 40, 255, 0.12))",
  chipBorder: "rgba(255, 255, 255, 0.18)",
  chipShadow: "0 0 18px rgba(0, 0, 0, 0.55)",
  chipColor: "rgba(255, 255, 255, 0.85)",
  taglineColor: "#ffe379",
  progressText: "rgba(255, 255, 255, 0.78)",
  progressAccent: "#ffe379",
  progressBar: "linear-gradient(90deg, rgba(81, 255, 231, 0.9), rgba(207, 40, 255, 0.85))",
  cardBackground: "linear-gradient(135deg, rgba(0, 12, 30, 0.85), rgba(0, 28, 60, 0.9))",
  cardBorder: "rgba(81, 255, 231, 0.45)",
  cardGlow: "0 0 26px rgba(81, 255, 231, 0.4), 0 0 34px rgba(207, 40, 255, 0.18)",
  cardSheen: "rgba(255, 255, 255, 0.16)",
  cardGrid: "rgba(81, 255, 231, 0.18)",
  barGradient: "linear-gradient(90deg, rgba(81, 255, 231, 0.9), rgba(207, 40, 255, 0.85))",
  chips: ["Fase desbloqueada", "Combo perfeito", "Continue extra"],
  floaters: ["🕹️", "⭐", "⚡", "🎉"]
};

const rewardVisuals = {
  Minimo: {
    ...baseVisualizerTheme,
    headline: "Primeiro Continue",
    tagline: "Press Start em grande estilo",
    description: "O modo campanha começou. Cada hábito marcado acende os letreiros do seu fliperama pessoal.",
    icon: "🎯",
    chips: ["Setup concluído", "Score inicial", "Ritmo desbloqueado"],
    floaters: ["🎯", "⭐", "🕹️", "⚡"],
    background: "radial-gradient(circle at 12% 20%, rgba(81, 255, 231, 0.4) 0%, transparent 45%), radial-gradient(circle at 85% 25%, rgba(207, 40, 255, 0.3) 0%, transparent 60%), linear-gradient(135deg, #010d1d 0%, #041437 55%, #03001a 100%)",
    cardBackground: "linear-gradient(135deg, rgba(3, 18, 40, 0.94), rgba(2, 6, 22, 0.9))",
    cardGlow: "0 0 38px rgba(81, 255, 231, 0.45), 0 0 44px rgba(207, 40, 255, 0.28)",
    cardGrid: "rgba(81, 255, 231, 0.24)"
  },
  Ingersoll: {
    ...baseVisualizerTheme,
    headline: "Relógio Ingersoll",
    tagline: "Tempo lendário sob seu comando",
    description: "Você sincronizou engrenagens douradas com disciplina diária. Cada alavanca puxada no arcade virou um tique preciso no pulso.",
    icon: "⌚",
    primary: "#f6b564",
    secondary: "#ff49e1",
    accent: "#ffe8c5",
    chips: ["Engrenagens expostas", "Luxo clássico", "Pulso de campeão"],
    floaters: ["⌚", "⚙️", "💎", "⏱️"],
    background: "radial-gradient(circle at 30% 20%, rgba(246, 181, 100, 0.45) 0%, transparent 38%), radial-gradient(circle at 80% 70%, rgba(255, 73, 225, 0.3) 0%, transparent 55%), linear-gradient(135deg, #1c0901 0%, #3c0f2e 45%, #0e0318 100%)",
    warpStart: "rgba(246, 181, 100, 0.65)",
    warpEnd: "rgba(255, 73, 225, 0.5)",
    gridColor: "rgba(246, 181, 100, 0.22)",
    haze: "rgba(246, 181, 100, 0.25)",
    particleColor: "#ffe8c5",
    particleGlow: "rgba(246, 181, 100, 0.7)",
    contentBg: "linear-gradient(135deg, rgba(31, 9, 0, 0.88), rgba(60, 8, 40, 0.78))",
    contentBorder: "rgba(246, 181, 100, 0.45)",
    contentShadow: "0 0 45px rgba(0, 0, 0, 0.8), 0 0 65px rgba(255, 73, 225, 0.25), 0 0 45px rgba(246, 181, 100, 0.35)",
    innerBorder: "rgba(246, 181, 100, 0.28)",
    contentSheen: "linear-gradient(130deg, rgba(246, 181, 100, 0.2), rgba(255, 73, 225, 0.12), rgba(255, 227, 197, 0.2))",
    taglineColor: "#ffe8c5",
    progressText: "rgba(255, 230, 210, 0.85)",
    progressAccent: "#ffe8c5",
    progressBar: "linear-gradient(90deg, rgba(246, 181, 100, 0.9), rgba(255, 73, 225, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(31, 9, 0, 0.92), rgba(54, 10, 38, 0.88))",
    cardBorder: "rgba(246, 181, 100, 0.55)",
    cardGlow: "0 0 38px rgba(246, 181, 100, 0.35), 0 0 46px rgba(255, 73, 225, 0.25)",
    cardSheen: "rgba(246, 181, 100, 0.18)",
    cardGrid: "rgba(246, 181, 100, 0.22)",
    barGradient: "linear-gradient(90deg, rgba(246, 181, 100, 0.9), rgba(255, 73, 225, 0.9))"
  },
  Turing: {
    ...baseVisualizerTheme,
    headline: "Turing Machine",
    tagline: "Você decifrou o código secreto",
    description: "As cartas perfuradas e os algoritmos lógicos piscam nas luzes neon. Seu cérebro virou a CPU que resolve qualquer enigma.",
    icon: "🧠",
    secondary: "#6c5bff",
    accent: "#a6ff8f",
    chips: ["Código quebrado", "Lógica afiada", "Estrategista arcade"],
    floaters: ["🧠", "🔢", "🧩", "💡"],
    background: "radial-gradient(circle at 15% 30%, rgba(81, 255, 231, 0.38) 0%, transparent 45%), radial-gradient(circle at 85% 70%, rgba(108, 91, 255, 0.32) 0%, transparent 55%), linear-gradient(135deg, #020925 0%, #040b2f 45%, #010415 100%)",
    gridColor: "rgba(166, 255, 143, 0.24)",
    haze: "rgba(81, 255, 231, 0.25)",
    particleColor: "#a6ff8f",
    particleGlow: "rgba(108, 91, 255, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(2, 12, 36, 0.88), rgba(5, 18, 52, 0.8))",
    contentBorder: "rgba(166, 255, 143, 0.45)",
    innerBorder: "rgba(166, 255, 143, 0.25)",
    contentSheen: "linear-gradient(130deg, rgba(81, 255, 231, 0.2), rgba(108, 91, 255, 0.12), rgba(166, 255, 143, 0.2))",
    taglineColor: "#a6ff8f",
    progressAccent: "#a6ff8f",
    progressBar: "linear-gradient(90deg, rgba(81, 255, 231, 0.9), rgba(108, 91, 255, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(2, 16, 44, 0.92), rgba(4, 10, 28, 0.88))",
    cardBorder: "rgba(166, 255, 143, 0.5)",
    cardGlow: "0 0 36px rgba(108, 91, 255, 0.35), 0 0 40px rgba(81, 255, 231, 0.35)",
    cardSheen: "rgba(166, 255, 143, 0.18)",
    cardGrid: "rgba(166, 255, 143, 0.22)",
    barGradient: "linear-gradient(90deg, rgba(81, 255, 231, 0.9), rgba(108, 91, 255, 0.9))"
  },
  Rascal: {
    ...baseVisualizerTheme,
    headline: "Banquete Rascal",
    tagline: "Arcade mediterrâneo liberado",
    description: "Tabuleiros viraram buffets e cada fase vencida revela novos sabores. É hora de um festival de cores, temperos e high score gastronômico.",
    icon: "🍽️",
    primary: "#ff8f5b",
    secondary: "#ffe379",
    accent: "#ffdec8",
    chips: ["Mediterrâneo vibrante", "Mesa lendária", "Celebrar conquistas"],
    floaters: ["🍅", "🥗", "🔥", "🍇"],
    background: "radial-gradient(circle at 20% 25%, rgba(255, 143, 91, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 227, 121, 0.3) 0%, transparent 55%), linear-gradient(135deg, #210700 0%, #44130a 45%, #23050f 100%)",
    warpStart: "rgba(255, 143, 91, 0.6)",
    warpEnd: "rgba(255, 227, 121, 0.45)",
    gridColor: "rgba(255, 200, 140, 0.2)",
    haze: "rgba(255, 140, 90, 0.25)",
    particleColor: "#ffdec8",
    particleGlow: "rgba(255, 143, 91, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(46, 9, 0, 0.85), rgba(82, 22, 8, 0.78))",
    contentBorder: "rgba(255, 200, 140, 0.45)",
    innerBorder: "rgba(255, 200, 140, 0.25)",
    contentSheen: "linear-gradient(130deg, rgba(255, 143, 91, 0.2), rgba(255, 227, 121, 0.15), rgba(255, 222, 200, 0.2))",
    taglineColor: "#ffdec8",
    progressAccent: "#ffdec8",
    progressBar: "linear-gradient(90deg, rgba(255, 143, 91, 0.9), rgba(255, 227, 121, 0.85))",
    cardBackground: "linear-gradient(135deg, rgba(46, 9, 0, 0.92), rgba(94, 24, 10, 0.88))",
    cardBorder: "rgba(255, 200, 140, 0.55)",
    cardGlow: "0 0 36px rgba(255, 143, 91, 0.4), 0 0 42px rgba(255, 227, 121, 0.28)",
    cardSheen: "rgba(255, 200, 140, 0.18)",
    cardGrid: "rgba(255, 200, 140, 0.22)",
    barGradient: "linear-gradient(90deg, rgba(255, 143, 91, 0.9), rgba(255, 227, 121, 0.85))"
  },
  Compras: {
    ...baseVisualizerTheme,
    headline: "Compras Estilosas",
    tagline: "Runway em modo turbo",
    description: "Você transformou disciplina em estilo. Luzes de néon refletem em jaquetas impecáveis e sapatos prontos para qualquer boss fight social.",
    icon: "🛍️",
    primary: "#f472b6",
    secondary: "#51ffe7",
    accent: "#ffe0ff",
    chips: ["Guarda-roupa épico", "Confiança desbloqueada", "Combo de atitude"],
    floaters: ["🛍️", "✨", "🧥", "👟"],
    background: "radial-gradient(circle at 25% 25%, rgba(244, 114, 182, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(81, 255, 231, 0.3) 0%, transparent 55%), linear-gradient(135deg, #1a0336 0%, #02162c 50%, #030019 100%)",
    warpStart: "rgba(244, 114, 182, 0.6)",
    warpEnd: "rgba(81, 255, 231, 0.45)",
    gridColor: "rgba(244, 114, 182, 0.22)",
    haze: "rgba(244, 114, 182, 0.25)",
    particleColor: "#ffe0ff",
    particleGlow: "rgba(244, 114, 182, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(26, 3, 54, 0.88), rgba(0, 21, 44, 0.82))",
    contentBorder: "rgba(244, 114, 182, 0.45)",
    innerBorder: "rgba(244, 114, 182, 0.25)",
    contentSheen: "linear-gradient(130deg, rgba(244, 114, 182, 0.2), rgba(81, 255, 231, 0.12), rgba(255, 224, 255, 0.2))",
    taglineColor: "#ffe0ff",
    progressAccent: "#ffe0ff",
    progressBar: "linear-gradient(90deg, rgba(244, 114, 182, 0.9), rgba(81, 255, 231, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(26, 3, 54, 0.92), rgba(2, 13, 34, 0.88))",
    cardBorder: "rgba(244, 114, 182, 0.55)",
    cardGlow: "0 0 38px rgba(244, 114, 182, 0.45), 0 0 44px rgba(81, 255, 231, 0.25)",
    cardSheen: "rgba(244, 114, 182, 0.2)",
    cardGrid: "rgba(244, 114, 182, 0.22)",
    barGradient: "linear-gradient(90deg, rgba(244, 114, 182, 0.9), rgba(81, 255, 231, 0.9))"
  },
  Tanque: {
    ...baseVisualizerTheme,
    headline: "Tanque Sensorial",
    tagline: "Silêncio interestelar alcançado",
    description: "O mundo externo some, restam apenas ondas azul neon e respirações em ritmo de synthwave. Você conquistou um portal de tranquilidade.",
    icon: "🌌",
    secondary: "#7f5dff",
    accent: "#baffff",
    chips: ["Flutuação total", "Reset mental", "Calma em 8-bits"],
    floaters: ["🌌", "💫", "🛀", "🌙"],
    background: "radial-gradient(circle at 30% 30%, rgba(81, 255, 231, 0.35) 0%, transparent 45%), radial-gradient(circle at 75% 80%, rgba(127, 93, 255, 0.3) 0%, transparent 55%), linear-gradient(135deg, #020a2c 0%, #011c3c 45%, #00081e 100%)",
    warpStart: "rgba(81, 255, 231, 0.55)",
    warpEnd: "rgba(127, 93, 255, 0.45)",
    gridColor: "rgba(186, 255, 255, 0.24)",
    haze: "rgba(127, 93, 255, 0.25)",
    particleColor: "#baffff",
    particleGlow: "rgba(81, 255, 231, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(2, 12, 44, 0.9), rgba(0, 26, 60, 0.85))",
    contentBorder: "rgba(127, 93, 255, 0.45)",
    innerBorder: "rgba(127, 93, 255, 0.22)",
    contentSheen: "linear-gradient(130deg, rgba(81, 255, 231, 0.2), rgba(127, 93, 255, 0.12), rgba(186, 255, 255, 0.2))",
    taglineColor: "#baffff",
    progressAccent: "#baffff",
    progressBar: "linear-gradient(90deg, rgba(81, 255, 231, 0.85), rgba(127, 93, 255, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(2, 18, 48, 0.94), rgba(1, 11, 32, 0.9))",
    cardBorder: "rgba(127, 93, 255, 0.5)",
    cardGlow: "0 0 36px rgba(127, 93, 255, 0.4), 0 0 40px rgba(81, 255, 231, 0.3)",
    cardSheen: "rgba(186, 255, 255, 0.18)",
    cardGrid: "rgba(186, 255, 255, 0.22)",
    barGradient: "linear-gradient(90deg, rgba(81, 255, 231, 0.85), rgba(127, 93, 255, 0.9))"
  },
  Carro: {
    ...baseVisualizerTheme,
    headline: "Upgrade de Carro",
    tagline: "Garage neon desbloqueada",
    description: "Cada hábito foi um pit stop perfeito. Agora o painel digital pisca esperando sua próxima arrancada.",
    icon: "🚗",
    secondary: "#ff5252",
    chips: ["Torque disciplinado", "Volante firme", "Nitro conquistado"],
    floaters: ["🚗", "⚡", "🛣️", "🏁"],
    background: "radial-gradient(circle at 25% 30%, rgba(255, 82, 82, 0.35) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(81, 255, 231, 0.3) 0%, transparent 55%), linear-gradient(135deg, #01070f 0%, #210208 50%, #00040d 100%)",
    warpStart: "rgba(255, 82, 82, 0.55)",
    warpEnd: "rgba(81, 255, 231, 0.45)",
    gridColor: "rgba(255, 120, 120, 0.24)",
    haze: "rgba(255, 82, 82, 0.25)",
    particleColor: "#ffe379",
    particleGlow: "rgba(255, 82, 82, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(12, 3, 18, 0.9), rgba(40, 4, 18, 0.82))",
    contentBorder: "rgba(255, 120, 120, 0.45)",
    innerBorder: "rgba(255, 120, 120, 0.28)",
    contentSheen: "linear-gradient(130deg, rgba(255, 82, 82, 0.2), rgba(81, 255, 231, 0.12), rgba(255, 227, 121, 0.2))",
    progressBar: "linear-gradient(90deg, rgba(255, 82, 82, 0.9), rgba(81, 255, 231, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(20, 2, 12, 0.94), rgba(4, 18, 32, 0.88))",
    cardBorder: "rgba(255, 120, 120, 0.55)",
    cardGlow: "0 0 38px rgba(255, 82, 82, 0.42), 0 0 40px rgba(81, 255, 231, 0.28)",
    cardSheen: "rgba(255, 120, 120, 0.18)",
    cardGrid: "rgba(255, 120, 120, 0.24)",
    barGradient: "linear-gradient(90deg, rgba(255, 82, 82, 0.9), rgba(81, 255, 231, 0.9))"
  },
  "Apê": {
    ...baseVisualizerTheme,
    headline: "Refúgio High Score",
    tagline: "O lar perfeito ganhou vida",
    description: "Plantas neon, sofá confortável e paredes que brilham com suas vitórias. Você merece um HQ aconchegante.",
    icon: "🏠",
    primary: "#7bffb0",
    secondary: "#51ffe7",
    accent: "#ffe8c5",
    chips: ["Conforto hacker", "Espaço inspirador", "Base de operações"],
    floaters: ["🏠", "🌿", "🛋️", "🔑"],
    background: "radial-gradient(circle at 20% 25%, rgba(123, 255, 176, 0.4) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(81, 255, 231, 0.3) 0%, transparent 55%), linear-gradient(135deg, #011d16 0%, #023033 50%, #010d20 100%)",
    warpStart: "rgba(123, 255, 176, 0.6)",
    warpEnd: "rgba(81, 255, 231, 0.45)",
    gridColor: "rgba(123, 255, 176, 0.22)",
    haze: "rgba(81, 255, 231, 0.25)",
    particleColor: "#ffe8c5",
    particleGlow: "rgba(123, 255, 176, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(1, 29, 22, 0.9), rgba(0, 45, 54, 0.82))",
    contentBorder: "rgba(123, 255, 176, 0.45)",
    innerBorder: "rgba(123, 255, 176, 0.25)",
    contentSheen: "linear-gradient(130deg, rgba(123, 255, 176, 0.2), rgba(81, 255, 231, 0.12), rgba(255, 232, 197, 0.2))",
    taglineColor: "#ffe8c5",
    progressAccent: "#ffe8c5",
    progressBar: "linear-gradient(90deg, rgba(123, 255, 176, 0.9), rgba(81, 255, 231, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(1, 28, 22, 0.94), rgba(0, 44, 52, 0.88))",
    cardBorder: "rgba(123, 255, 176, 0.55)",
    cardGlow: "0 0 36px rgba(123, 255, 176, 0.4), 0 0 38px rgba(81, 255, 231, 0.28)",
    cardSheen: "rgba(123, 255, 176, 0.18)",
    cardGrid: "rgba(123, 255, 176, 0.22)",
    barGradient: "linear-gradient(90deg, rgba(123, 255, 176, 0.9), rgba(81, 255, 231, 0.9))"
  },
  TV: {
    ...baseVisualizerTheme,
    headline: "Cinema Neon",
    tagline: "Tela gigante liberada",
    description: "Luzes RGB refletem na nova tela enquanto você escolhe qual cutscene maratonar. Sessões épicas vêm aí.",
    icon: "📺",
    secondary: "#ff3cab",
    chips: ["Pixels perfeitos", "Som envolvente", "Sessões infinitas"],
    floaters: ["📺", "🎞️", "🎮", "⭐"],
    background: "radial-gradient(circle at 25% 25%, rgba(81, 255, 231, 0.35) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 60, 171, 0.32) 0%, transparent 55%), linear-gradient(135deg, #1b0030 0%, #021238 50%, #030018 100%)",
    warpStart: "rgba(255, 60, 171, 0.55)",
    warpEnd: "rgba(81, 255, 231, 0.45)",
    gridColor: "rgba(255, 60, 171, 0.22)",
    haze: "rgba(255, 60, 171, 0.2)",
    particleColor: "#ffe379",
    particleGlow: "rgba(255, 60, 171, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(27, 0, 48, 0.88), rgba(2, 16, 56, 0.82))",
    contentBorder: "rgba(255, 60, 171, 0.45)",
    innerBorder: "rgba(255, 60, 171, 0.28)",
    contentSheen: "linear-gradient(130deg, rgba(255, 60, 171, 0.2), rgba(81, 255, 231, 0.12), rgba(255, 227, 121, 0.2))",
    progressBar: "linear-gradient(90deg, rgba(255, 60, 171, 0.9), rgba(81, 255, 231, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(27, 0, 48, 0.94), rgba(3, 16, 52, 0.88))",
    cardBorder: "rgba(255, 60, 171, 0.55)",
    cardGlow: "0 0 38px rgba(255, 60, 171, 0.45), 0 0 42px rgba(81, 255, 231, 0.3)",
    cardSheen: "rgba(255, 60, 171, 0.18)",
    cardGrid: "rgba(255, 60, 171, 0.24)",
    barGradient: "linear-gradient(90deg, rgba(255, 60, 171, 0.9), rgba(81, 255, 231, 0.9))"
  },
  Daphne: {
    ...baseVisualizerTheme,
    headline: "Sessão no Castelo",
    tagline: "Daphne em conto de fadas neon",
    description: "O palco foi preparado para sua heroína de dois aninhos. Cada fase concluída virou um flash de câmera cheio de magia.",
    icon: "👑",
    primary: "#ff9de1",
    secondary: "#51ffe7",
    accent: "#ffe8ff",
    chips: ["Memórias eternas", "Brilho infantil", "Castelo encantado"],
    floaters: ["👑", "✨", "📸", "🦄"],
    background: "radial-gradient(circle at 20% 30%, rgba(255, 157, 225, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(81, 255, 231, 0.28) 0%, transparent 55%), linear-gradient(135deg, #2a0035 0%, #12052f 45%, #1d0030 100%)",
    warpStart: "rgba(255, 157, 225, 0.55)",
    warpEnd: "rgba(81, 255, 231, 0.45)",
    gridColor: "rgba(255, 157, 225, 0.22)",
    haze: "rgba(255, 157, 225, 0.25)",
    particleColor: "#ffe8ff",
    particleGlow: "rgba(255, 157, 225, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(32, 1, 48, 0.9), rgba(12, 8, 52, 0.82))",
    contentBorder: "rgba(255, 157, 225, 0.45)",
    innerBorder: "rgba(255, 157, 225, 0.25)",
    contentSheen: "linear-gradient(130deg, rgba(255, 157, 225, 0.2), rgba(81, 255, 231, 0.12), rgba(255, 232, 255, 0.2))",
    taglineColor: "#ffe8ff",
    progressAccent: "#ffe8ff",
    progressBar: "linear-gradient(90deg, rgba(255, 157, 225, 0.9), rgba(81, 255, 231, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(32, 1, 48, 0.94), rgba(14, 6, 56, 0.88))",
    cardBorder: "rgba(255, 157, 225, 0.55)",
    cardGlow: "0 0 38px rgba(255, 157, 225, 0.45), 0 0 44px rgba(81, 255, 231, 0.28)",
    cardSheen: "rgba(255, 157, 225, 0.2)",
    cardGrid: "rgba(255, 157, 225, 0.24)",
    barGradient: "linear-gradient(90deg, rgba(255, 157, 225, 0.9), rgba(81, 255, 231, 0.9))"
  },
  Tattoo: {
    ...baseVisualizerTheme,
    headline: "Fechar o Braço",
    tagline: "Ink master liberado",
    description: "Seu corpo vira a tela definitiva. Traços futuristas correm pelo braço como circuitos de um arcade lendário.",
    icon: "🖋️",
    secondary: "#ff2e63",
    chips: ["Coragem na pele", "Arte permanente", "Estilo máximo"],
    floaters: ["🖋️", "⚡", "🌀", "🎨"],
    background: "radial-gradient(circle at 25% 25%, rgba(255, 46, 99, 0.35) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(81, 255, 231, 0.3) 0%, transparent 55%), linear-gradient(135deg, #08010a 0%, #280008 45%, #020104 100%)",
    warpStart: "rgba(255, 46, 99, 0.55)",
    warpEnd: "rgba(81, 255, 231, 0.45)",
    gridColor: "rgba(255, 46, 99, 0.24)",
    haze: "rgba(255, 46, 99, 0.22)",
    particleColor: "#ffe379",
    particleGlow: "rgba(255, 46, 99, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(8, 1, 10, 0.92), rgba(34, 0, 12, 0.82))",
    contentBorder: "rgba(255, 46, 99, 0.45)",
    innerBorder: "rgba(255, 46, 99, 0.25)",
    contentSheen: "linear-gradient(130deg, rgba(255, 46, 99, 0.2), rgba(81, 255, 231, 0.12), rgba(255, 227, 121, 0.2))",
    progressBar: "linear-gradient(90deg, rgba(255, 46, 99, 0.9), rgba(81, 255, 231, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(8, 1, 10, 0.94), rgba(30, 0, 12, 0.88))",
    cardBorder: "rgba(255, 46, 99, 0.55)",
    cardGlow: "0 0 38px rgba(255, 46, 99, 0.45), 0 0 44px rgba(81, 255, 231, 0.28)",
    cardSheen: "rgba(255, 46, 99, 0.18)",
    cardGrid: "rgba(255, 46, 99, 0.24)",
    barGradient: "linear-gradient(90deg, rgba(255, 46, 99, 0.9), rgba(81, 255, 231, 0.9))"
  },
  Cabelo: {
    ...baseVisualizerTheme,
    headline: "Cabelo Branco",
    tagline: "Transformação lendária",
    description: "Mechas prateadas brilham como lasers de fliperama. Sua evolução é visível já na primeira fase do espelho.",
    icon: "👨‍🦳",
    primary: "#9dd9ff",
    secondary: "#cf28ff",
    accent: "#ffffff",
    chips: ["Estilo ousado", "Identidade marcante", "Fase nova"],
    floaters: ["👨‍🦳", "✨", "💈", "🌟"],
    background: "radial-gradient(circle at 20% 25%, rgba(157, 217, 255, 0.38) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(207, 40, 255, 0.3) 0%, transparent 55%), linear-gradient(135deg, #020310 0%, #19012a 45%, #010312 100%)",
    warpStart: "rgba(157, 217, 255, 0.55)",
    warpEnd: "rgba(207, 40, 255, 0.45)",
    gridColor: "rgba(157, 217, 255, 0.22)",
    haze: "rgba(157, 217, 255, 0.2)",
    particleColor: "#ffffff",
    particleGlow: "rgba(157, 217, 255, 0.65)",
    contentBg: "linear-gradient(135deg, rgba(3, 4, 20, 0.92), rgba(16, 6, 38, 0.82))",
    contentBorder: "rgba(157, 217, 255, 0.45)",
    innerBorder: "rgba(157, 217, 255, 0.25)",
    contentSheen: "linear-gradient(130deg, rgba(157, 217, 255, 0.2), rgba(207, 40, 255, 0.12), rgba(255, 255, 255, 0.25))",
    taglineColor: "#ffffff",
    progressAccent: "#ffffff",
    progressBar: "linear-gradient(90deg, rgba(157, 217, 255, 0.9), rgba(207, 40, 255, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(3, 4, 20, 0.94), rgba(18, 6, 40, 0.88))",
    cardBorder: "rgba(157, 217, 255, 0.55)",
    cardGlow: "0 0 38px rgba(157, 217, 255, 0.45), 0 0 44px rgba(207, 40, 255, 0.3)",
    cardSheen: "rgba(157, 217, 255, 0.2)",
    cardGrid: "rgba(157, 217, 255, 0.24)",
    barGradient: "linear-gradient(90deg, rgba(157, 217, 255, 0.9), rgba(207, 40, 255, 0.9))"
  },
  Viagem: {
    ...baseVisualizerTheme,
    headline: "Viagem Épica",
    tagline: "Passaporte interestelar",
    description: "Mapa-múndi iluminado aponta para novos mundos. Você desbloqueou créditos para explorar além das fronteiras.",
    icon: "✈️",
    secondary: "#ff8f5b",
    chips: ["Novos horizontes", "Mochila pronta", "Experiências raras"],
    floaters: ["✈️", "🌍", "🧳", "⭐"],
    background: "radial-gradient(circle at 25% 25%, rgba(81, 255, 231, 0.35) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(255, 143, 91, 0.3) 0%, transparent 55%), linear-gradient(135deg, #001421 0%, #301204 45%, #020a1a 100%)",
    warpStart: "rgba(81, 255, 231, 0.55)",
    warpEnd: "rgba(255, 143, 91, 0.45)",
    gridColor: "rgba(255, 143, 91, 0.22)",
    haze: "rgba(255, 143, 91, 0.22)",
    particleColor: "#ffe379",
    particleGlow: "rgba(255, 143, 91, 0.6)",
    contentBg: "linear-gradient(135deg, rgba(0, 20, 33, 0.9), rgba(40, 8, 2, 0.82))",
    contentBorder: "rgba(255, 143, 91, 0.45)",
    innerBorder: "rgba(255, 143, 91, 0.25)",
    contentSheen: "linear-gradient(130deg, rgba(81, 255, 231, 0.2), rgba(255, 143, 91, 0.12), rgba(255, 227, 121, 0.2))",
    progressBar: "linear-gradient(90deg, rgba(81, 255, 231, 0.9), rgba(255, 143, 91, 0.9))",
    cardBackground: "linear-gradient(135deg, rgba(0, 20, 33, 0.94), rgba(40, 10, 4, 0.88))",
    cardBorder: "rgba(255, 143, 91, 0.55)",
    cardGlow: "0 0 38px rgba(81, 255, 231, 0.4), 0 0 44px rgba(255, 143, 91, 0.3)",
    cardSheen: "rgba(255, 143, 91, 0.18)",
    cardGrid: "rgba(255, 143, 91, 0.24)",
    barGradient: "linear-gradient(90deg, rgba(81, 255, 231, 0.9), rgba(255, 143, 91, 0.9))"
  },
  default: { ...baseVisualizerTheme }
};


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
  if (!habito) return "🎯";
  const normalized = habito.toLowerCase();
  if (normalized.includes("verificar peso")) return "⚖️";
  if (normalized.includes("diário")) return "🙏";
  if (normalized.includes("arrumar")) return "🧹";
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
const DIARY_UNLOCK_KEY = 'habitos-diary-unlock-v1';
const DIARY_UNLOCK_CODE = '1684';
const WEIGHT_LOCAL_KEY = 'habitos-weight-entries-v1';
const WEIGHT_GOAL = 69;
const WEIGHT_START = 88;

const weightFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1
});

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

function clearDiaryEntriesLocal() {
  try {
    localStorage.removeItem(DIARY_LOCAL_KEY);
  } catch (err) {
    console.error('Falha ao limpar diário local:', err);
  }
}

function loadDiaryUnlockState() {
  try {
    return localStorage.getItem(DIARY_UNLOCK_KEY) === 'true';
  } catch (err) {
    console.error('Falha ao ler status de bloqueio do diário:', err);
    return false;
  }
}

function saveDiaryUnlockState(isUnlocked) {
  try {
    localStorage.setItem(DIARY_UNLOCK_KEY, isUnlocked ? 'true' : 'false');
  } catch (err) {
    console.error('Falha ao salvar status de bloqueio do diário:', err);
  }
}

function loadWeightEntriesLocal() {
  try {
    const stored = localStorage.getItem(WEIGHT_LOCAL_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== 'object') return {};
    Object.keys(parsed).forEach((key) => {
      const value = parsed[key]?.value;
      if (value == null || Number.isNaN(Number(value))) {
        delete parsed[key];
      } else {
        parsed[key] = {
          value: Number(value),
          savedAt: parsed[key]?.savedAt || Date.now()
        };
      }
    });
    return parsed;
  } catch (err) {
    console.error('Falha ao ler pesos locais:', err);
    return {};
  }
}

function saveWeightEntriesLocal(entries) {
  try {
    localStorage.setItem(WEIGHT_LOCAL_KEY, JSON.stringify(entries));
  } catch (err) {
    console.error('Falha ao salvar pesos locais:', err);
  }
}

function formatWeightDisplay(value) {
  if (value == null || Number.isNaN(value)) return '--';
  return `${weightFormatter.format(value)} kg`;
}

function formatWeightDelta(delta) {
  if (delta == null || Number.isNaN(delta)) return '--';
  if (Math.abs(delta) < 0.05) return '0 kg';
  const formatted = weightFormatter.format(Math.abs(delta));
  return `${delta > 0 ? '+' : '-'}${formatted} kg`;
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

async function resetDiaryEntriesRemote() {
  try {
    const collectionRef = db.collection('usuarios').doc('danilo2').collection('diario');
    const snapshot = await collectionRef.get();
    if (snapshot.empty) return;
    const batch = db.batch();
    snapshot.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
  } catch (error) {
    console.error('Erro ao resetar diário no Firebase:', error);
    throw error;
  }
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
  const levelContainer = document.getElementById('level-container');
  const statusIndicators = document.getElementById('status-indicators');
  const videoWrapper = document.getElementById('video-wrapper');
  const visualizerEl = document.getElementById('reward-visualizer');
  const visualizerIconEl = visualizerEl ? visualizerEl.querySelector('.visualizer-icon') : null;
  const visualizerTitleEl = visualizerEl ? visualizerEl.querySelector('.visualizer-title') : null;
  const visualizerTaglineEl = visualizerEl ? visualizerEl.querySelector('.visualizer-tagline') : null;
  const visualizerDescriptionEl = visualizerEl ? visualizerEl.querySelector('.visualizer-description') : null;
  const visualizerDetailsEl = visualizerEl ? visualizerEl.querySelector('.visualizer-details') : null;
  const visualizerProgressEl = visualizerEl ? visualizerEl.querySelector('.visualizer-progress') : null;
  const visualizerParticlesEl = visualizerEl ? visualizerEl.querySelector('.visualizer-particles') : null;
  const visualizerCloseEl = visualizerEl ? visualizerEl.querySelector('.visualizer-close') : null;
  const levelValueEl = levelContainer ? levelContainer.querySelector('.level-value') : null;
  let currentScale = 1;
  let diaryButtonWrapper = null;
  let hasGameStarted = false;
  let visualizerOpen = false;
  let visualizerEnterTimeout = null;
  let visualizerCloseTimeout = null;

  const visualizerStyleMap = {
    primary: '--visual-primary',
    secondary: '--visual-secondary',
    accent: '--visual-accent',
    background: '--visual-background',
    warpStart: '--visual-warp-start',
    warpEnd: '--visual-warp-end',
    gridColor: '--visual-grid-color',
    haze: '--visual-haze',
    particleColor: '--visual-particle-color',
    particleGlow: '--visual-particle-glow',
    contentBg: '--visual-content-bg',
    contentBorder: '--visual-content-border',
    contentShadow: '--visual-content-shadow',
    innerBorder: '--visual-inner-border',
    contentSheen: '--visual-content-sheen',
    chipBg: '--visual-chip-bg',
    chipBorder: '--visual-chip-border',
    chipShadow: '--visual-chip-shadow',
    chipColor: '--visual-chip-color',
    taglineColor: '--visual-tagline-color',
    progressText: '--visual-progress-text',
    progressAccent: '--visual-progress-accent',
    progressBar: '--visual-progress-bar'
  };

  const rewardCardStyleMap = {
    cardBackground: '--reward-card-bg',
    cardBorder: '--reward-card-border',
    cardGlow: '--reward-card-glow',
    cardSheen: '--reward-card-sheen',
    cardGrid: '--reward-card-grid-color',
    barGradient: '--reward-bar-gradient'
  };

  function setElementVar(element, variable, value) {
    if (!element) return;
    if (value !== undefined && value !== null && value !== '') {
      element.style.setProperty(variable, value);
    } else {
      element.style.removeProperty(variable);
    }
  }

  function applyVisualizerThemeStyles(theme) {
    if (!visualizerEl || !theme) return;
    Object.entries(visualizerStyleMap).forEach(([key, variable]) => {
      setElementVar(visualizerEl, variable, theme[key]);
    });
  }

  function applyRewardCardTheme(card, theme, reward) {
    if (!card || !theme) return;
    Object.entries(rewardCardStyleMap).forEach(([key, variable]) => {
      setElementVar(card, variable, theme[key]);
    });
    setElementVar(card, '--visual-primary', theme.primary);
    setElementVar(card, '--visual-secondary', theme.secondary);
    setElementVar(card, '--visual-accent', theme.accent);
    setElementVar(card, '--visual-progress-text', theme.progressText);
    setElementVar(card, '--visual-progress-accent', theme.progressAccent);
    const themeId = (reward?.label || 'default').toLowerCase().replace(/[^a-z0-9]+/gi, '-');
    if (themeId) card.dataset.theme = themeId;
  }

  if (visualizerCloseEl) {
    visualizerCloseEl.addEventListener('click', () => hideRewardVisualizer());
  }
  if (visualizerEl) {
    visualizerEl.addEventListener('click', (event) => {
      if (event.target === visualizerEl) hideRewardVisualizer();
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && visualizerOpen) {
      hideRewardVisualizer();
    }
  });

  function positionLives(scale = currentScale) {
    if (!lifeContainer) return;
    lifeContainer.style.removeProperty('left');
    lifeContainer.style.removeProperty('right');
    if (statusIndicators) {
      statusIndicators.style.transform = 'translateX(-50%)';
    }
  }

  function positionLevel(scale = currentScale) {
    if (!levelContainer) return;
    levelContainer.style.removeProperty('left');
    levelContainer.style.removeProperty('right');
    if (statusIndicators) {
      statusIndicators.style.transform = 'translateX(-50%)';
    }
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
      videoWrapper.style.setProperty('--wrapper-translate-x', `${left}px`);
      videoWrapper.style.setProperty('--wrapper-translate-y', `${top}px`);
      videoWrapper.style.setProperty('--wrapper-scale', scale);
    }
    currentScale = scale;
    positionLives(scale);
    positionLevel(scale);
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
      if (statusIndicators) {
        statusIndicators.classList.add('active');
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
      if (levelContainer) {
        levelContainer.style.display = '';
        levelContainer.classList.add('show');
        updateLevelDisplay();
        positionLevel(currentScale);
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
  let diaryUnlocked = loadDiaryUnlockState();
  let weightEntries = loadWeightEntriesLocal();
  if (!weightEntries || typeof weightEntries !== 'object') weightEntries = {};
  const dados = [];
  const habitosIncrementaisLista = [
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
    "90 min de hiperfoco (2x)"
  ];
  const habitos_incrementais = {};
  habitosIncrementaisLista.forEach((habito, index) => {
    const diaIntroducao = 1 + index * 3;
    habitos_incrementais[diaIntroducao] = [habito];
  });
  const habitos_ciclicos = [
    "Verificar peso",
    "Diário e gratidão",
    "Arrumar quarto"
  ];
  // Cria o calendário começando na data atual para evitar ciclos que já terminaram
  const inicio = new Date();
  inicio.setHours(0, 0, 0, 0);
  const fim = new Date(inicio);
  fim.setFullYear(fim.getFullYear() + 1);
  const dias_total = Math.floor((fim - inicio) / (1000 * 60 * 60 * 24)) + 1;
  const caloriasFim = new Date(inicio);
  caloriasFim.setDate(caloriasFim.getDate() + 163);
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

  function getRewardTheme(reward) {
    if (!reward) return rewardVisuals.default;
    return rewardVisuals[reward.label] || rewardVisuals.default;
  }

  function populateVisualizerParticles(theme) {
    if (!visualizerParticlesEl) return;
    visualizerParticlesEl.innerHTML = '';
    const icons = (theme && Array.isArray(theme.floaters) && theme.floaters.length)
      ? theme.floaters
      : rewardVisuals.default.floaters;
    const total = 18;
    for (let i = 0; i < total; i++) {
      const span = document.createElement('span');
      span.textContent = icons[i % icons.length];
      span.style.left = `${Math.random() * 100}%`;
      span.style.bottom = `${-10 + Math.random() * 20}%`;
      span.style.animationDuration = `${6 + Math.random() * 6}s`;
      span.style.animationDelay = `${Math.random() * 4}s`;
      visualizerParticlesEl.appendChild(span);
    }
  }

  function getRewardProgress(month, year) {
    if (!month || !year) return { done: 0, total: 0, percent: 0 };
    const key = `${month}-${year}`;
    const dias = grupos[key] || [];
    let done = 0;
    dias.forEach((dia) => {
      const habitCount = dia.habitos.length + 1;
      if (checkAllHabitsComplete(dia.id, habitCount - 1)) done++;
    });
    const total = dias.length;
    return { done, total, percent: total ? done / total : 0 };
  }

  function calculateRemainingLives(month, year) {
    if (!month || !year) return 3;
    const key = `${month}-${year}`;
    const dias = grupos[key] || [];
    if (!dias.length) return 3;
    let lost = 0;
    const today = new Date();
    const monthStart = new Date(year, month - 1, 1);
    if (monthStart > today) return 3;
    const isCurrent = today.getFullYear() === year && today.getMonth() + 1 === month;
    const cutoff = new Date(year, month - 1, today.getDate());
    dias.forEach((dia) => {
      const rowDate = new Date(dia.ano, dia.mes - 1, dia.diaDoMes);
      if (isCurrent && rowDate >= cutoff) return;
      const habitCount = dia.habitos.length + 1;
      if (!checkAllHabitsComplete(dia.id, habitCount - 1)) {
        lost++;
      }
    });
    return Math.max(0, 3 - lost);
  }

  function calculatePlayerLevel() {
    let completed = 0;
    rewards.forEach((reward) => {
      if (!reward) return;
      const progress = getRewardProgress(reward.month, reward.year);
      if (progress.total && progress.done >= progress.total) {
        completed++;
      }
    });
    return completed + 1;
  }

  function updateLevelDisplay() {
    if (!levelContainer || !levelValueEl) return;
    const level = calculatePlayerLevel();
    levelValueEl.textContent = level;
    levelContainer.setAttribute('data-level', level);
  }

  function hideRewardVisualizer() {
    if (!visualizerEl || !visualizerOpen) return;
    visualizerOpen = false;
    document.body.classList.remove('visualizer-portal');
    document.body.classList.remove('visualizer-entering');
    visualizerEl.classList.remove('entering');
    visualizerEl.classList.add('closing');
    if (visualizerEnterTimeout) {
      clearTimeout(visualizerEnterTimeout);
      visualizerEnterTimeout = null;
      document.body.classList.remove('visualizer-entering');
    }
    const focusTarget = visualizerEl.querySelector('.visualizer-content');
    if (focusTarget) focusTarget.removeAttribute('tabindex');
    if (visualizerCloseTimeout) {
      clearTimeout(visualizerCloseTimeout);
    }
    visualizerCloseTimeout = setTimeout(() => {
      visualizerEl.classList.remove('show', 'closing');
      visualizerEl.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('visualizer-open');
      if (visualizerParticlesEl) visualizerParticlesEl.innerHTML = '';
      if (visualizerEl.dataset.theme) delete visualizerEl.dataset.theme;
      visualizerCloseTimeout = null;
    }, 420);
  }

  function showRewardVisualizer(reward, context = {}) {
    if (!visualizerEl || !reward) return;
    const theme = getRewardTheme(reward);
    if (visualizerCloseTimeout) {
      clearTimeout(visualizerCloseTimeout);
      visualizerCloseTimeout = null;
    }
    if (visualizerEnterTimeout) {
      clearTimeout(visualizerEnterTimeout);
      visualizerEnterTimeout = null;
      document.body.classList.remove('visualizer-entering');
    }
    visualizerEl.classList.remove('closing');
    applyVisualizerThemeStyles(theme);

    if (visualizerIconEl) visualizerIconEl.textContent = theme.icon || reward.icon || '⭐';
    if (visualizerTitleEl) visualizerTitleEl.textContent = theme.headline || reward.title || 'Recompensa Arcade';

    const month = context.month ?? reward.month;
    const year = context.year ?? reward.year;
    const level = typeof context.level === 'number' ? context.level : calculatePlayerLevel();
    const monthLabel = month && monthNames[month - 1] ? `${monthNames[month - 1]} ${year}` : '';
    if (visualizerTaglineEl) {
      const baseTag = theme.tagline || reward.title || '';
      visualizerTaglineEl.textContent = monthLabel ? `${baseTag} • ${monthLabel}` : baseTag;
    }

    if (visualizerDescriptionEl) {
      visualizerDescriptionEl.textContent = theme.description || reward.desc || '';
    }

    if (visualizerDetailsEl) {
      visualizerDetailsEl.innerHTML = '';
      const chips = (theme.chips && theme.chips.length) ? theme.chips : rewardVisuals.default.chips;
      chips.forEach((chip) => {
        const div = document.createElement('div');
        div.className = 'chip';
        div.textContent = chip;
        visualizerDetailsEl.appendChild(div);
      });
    }

    const progress = context.progressOverride || getRewardProgress(month, year);
    const lives = typeof context.lives === 'number' ? context.lives : calculateRemainingLives(month, year);
    if (visualizerProgressEl) {
      visualizerProgressEl.innerHTML = '';
      const pct = progress.total ? Math.round((progress.done / progress.total) * 100) : 0;
      const bar = document.createElement('div');
      bar.className = 'visualizer-progress-bar';
      bar.style.setProperty('--progress', `${pct}%`);
      const barFill = document.createElement('span');
      bar.appendChild(barFill);
      visualizerProgressEl.appendChild(bar);

      const livesText = lives > 0 ? `${lives} ${lives === 1 ? 'vida' : 'vidas'} restantes` : 'Sem vidas restantes';
      const meta = document.createElement('div');
      meta.className = 'visualizer-progress-meta';
      meta.innerHTML = `<span><strong>${progress.done}/${progress.total}</strong> dias perfeitos</span><span>${livesText}</span>`;
      visualizerProgressEl.appendChild(meta);

      if (pct === 100) {
        const levelMeta = document.createElement('div');
        levelMeta.className = 'visualizer-progress-meta visualizer-level-up';
        levelMeta.innerHTML = `<strong>Nível ${level}</strong><span>Novo nível desbloqueado!</span>`;
        visualizerProgressEl.appendChild(levelMeta);

        const congrats = document.createElement('div');
        congrats.className = 'visualizer-progress-meta visualizer-progress-congrats';
        const suffix = lives > 0 ? ` com ${livesText.toLowerCase()}` : '';
        congrats.innerHTML = `<strong>Prêmio desbloqueado!</strong><span>Você finalizou o mês${suffix} e alcançou o nível ${level}.</span>`;
        visualizerProgressEl.appendChild(congrats);
      } else {
        const remaining = Math.max(0, progress.total - progress.done);
        const hint = document.createElement('div');
        hint.className = 'visualizer-progress-meta';
        hint.innerHTML = `<span>Faltam <strong>${remaining}</strong> dias perfeitos para liberar.</span>`;
        visualizerProgressEl.appendChild(hint);
      }
    }

    populateVisualizerParticles(theme);
    const themeId = (reward.label || 'default').toLowerCase().replace(/[^a-z0-9]+/gi, '-');
    if (themeId) visualizerEl.dataset.theme = themeId;
    visualizerEl.setAttribute('aria-hidden', 'false');
    visualizerEl.classList.add('show');
    document.body.classList.add('visualizer-portal');
    document.body.classList.add('visualizer-open');
    document.body.classList.add('visualizer-entering');
    visualizerOpen = true;
    requestAnimationFrame(() => {
      visualizerEl.classList.add('entering');
    });
    visualizerEnterTimeout = setTimeout(() => {
      visualizerEl.classList.remove('entering');
      document.body.classList.remove('visualizer-entering');
      visualizerEnterTimeout = null;
    }, 1300);

    const focusTarget = visualizerEl.querySelector('.visualizer-content');
    if (focusTarget) {
      focusTarget.setAttribute('tabindex', '-1');
      focusTarget.focus({ preventScroll: true });
    }
  }

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
        const isWeight = dia.ciclico === "Verificar peso";
        const diaryAttrs = isDiary ? ` data-diary-day="${dia.id}"` : '';
        const diaryLabelAttrs = isDiary ? ` data-diary-day="${dia.id}" data-diary="true"` : '';
        const diaryEmojiAttrs = isDiary ? ` data-diary-day="${dia.id}"` : '';
        const weightAttrs = isWeight ? ` data-weight-day="${dia.id}"` : '';
        const weightLabelAttrs = isWeight ? ` data-weight-day="${dia.id}" data-weight="true"` : '';
        const weightEmojiAttrs = isWeight ? ` data-weight-day="${dia.id}"` : '';
        const diaryEditorHtml = isDiary ? `
            <div class="diary-editor" id="diary-editor-${dia.id}" data-day="${dia.id}" style="display:none;">
              <textarea class="diary-textarea" id="diary-textarea-${dia.id}" placeholder="Escreva seu diário..."></textarea>
              <div class="diary-actions">
                <button type="button" class="diary-save" data-day="${dia.id}">Salvar</button>
                <button type="button" class="diary-cancel" data-day="${dia.id}">Cancelar</button>
              </div>
            </div>` : '';
        const weightEditorHtml = isWeight ? `
            <div class="weight-editor" id="weight-editor-${dia.id}" data-day="${dia.id}" style="display:none;">
              <div class="weight-input-group">
                <input type="number" min="0" step="0.1" class="weight-input" id="weight-input-${dia.id}" placeholder="Peso atual" inputmode="decimal">
                <span class="weight-unit">kg</span>
              </div>
              <div class="weight-actions">
                <button type="button" class="weight-save" data-day="${dia.id}">Salvar</button>
                <button type="button" class="weight-cancel" data-day="${dia.id}">Cancelar</button>
              </div>
            </div>` : '';
        const weightBadgeHtml = isWeight ? `
                <div class="weight-latest" id="weight-latest-${dia.id}"></div>` : '';
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
              <div class="habit-item arcade-clicavel${isDiary ? ' diary-habit' : ''}${isWeight ? ' weight-habit' : ''}" id="habititem-${dia.id}-ciclico"${diaryAttrs}${weightAttrs}>
                <span class="habit-emoji" tabindex="0" data-checkbox="${dia.id}-ciclico"${diaryEmojiAttrs}${weightEmojiAttrs}>${getCiclicoEmoji(dia.ciclico)}</span>
                <label class="habit-label" for="${dia.id}-ciclico" id="label-${dia.id}-ciclico"${diaryLabelAttrs}${weightLabelAttrs}>${dia.ciclico}</label>${weightBadgeHtml}
                <input type="checkbox" class="habit-checkbox" id="${dia.id}-ciclico"${isDiary ? ` data-diary-day="${dia.id}"` : ''}${isWeight ? ` data-weight-day="${dia.id}"` : ''}>
              </div>
            </div>
            ${diaryEditorHtml}
            ${weightEditorHtml}
          </td>
        </tr>`;
      });
      html += `</tbody>
        </table>`;
      // Prêmio
      const reward = getRewardFor(Number(mesNum), Number(ano));
      if (reward) {
        html += `
        <div class="reward-card arcade-clicavel" data-reward="${mesNum}-${ano}" role="button" tabindex="0">
          <div class="reward-card-warp"></div>
          <div class="reward-card-grid"></div>
          <div class="reward-card-sheen"></div>
          <div class="reward-card-content">
            <div class="reward-card-header">
              <div class="reward-card-icon">${reward.icon}</div>
              <div class="reward-card-text">
                <div class="reward-card-title">${reward.title}</div>
                <div class="reward-card-desc">${reward.desc}</div>
              </div>
            </div>
            <div class="reward-card-progress">
              <div class="reward-bar-bg"><div class="reward-bar" id="reward-bar-${mesNum}-${ano}"></div></div>
              <div class="reward-unlocked" id="reward-unlocked-${mesNum}-${ano}" style="display:none">Prêmio desbloqueado: <span>${reward.label}</span></div>
            </div>
          </div>
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
  diaryButtonWrapper.innerHTML = `
    <button type="button" id="open-diary-log" class="diary-log-button arcade-clicavel">📔 Diário</button>
    <button type="button" id="open-weight-log" class="diary-log-button weight-log-button arcade-clicavel">⚖️ Peso</button>
  `;
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
        <button type="button" id="diary-lock-toggle" class="diary-log-close diary-lock-toggle">Desbloquear</button>
      </div>
      <div class="diary-locker" id="diary-locker">
        <div class="diary-locker-glow"></div>
        <div class="diary-locker-inner">
          <div class="diary-locker-icon" aria-hidden="true">🔒</div>
          <p class="diary-locker-text">Conteúdo protegido. Digite o código secreto para liberar o diário.</p>
          <div class="diary-locker-form">
            <input type="password" id="diary-unlock-code" class="diary-unlock-input" placeholder="Código" maxlength="12" inputmode="numeric" autocomplete="off" aria-label="Código do diário">
            <button type="button" id="diary-unlock-button" class="diary-unlock-button">Desbloquear</button>
          </div>
          <div class="diary-locker-feedback" id="diary-unlock-feedback" aria-live="polite"></div>
        </div>
      </div>
      <div class="diary-log-list" id="diary-log-list"></div>
    </div>
  `;
  calendario.appendChild(diaryPanel);
  applyTwemoji(diaryPanel);
  const diaryLogList = diaryPanel.querySelector('#diary-log-list');
  const diaryLocker = diaryPanel.querySelector('#diary-locker');
  const diaryUnlockInput = diaryPanel.querySelector('#diary-unlock-code');
  const diaryUnlockButton = diaryPanel.querySelector('#diary-unlock-button');
  const diaryUnlockFeedback = diaryPanel.querySelector('#diary-unlock-feedback');
  const diaryLockToggleButton = diaryPanel.querySelector('#diary-lock-toggle');

  const previousWeightPanel = calendario.querySelector('#weight-log-panel');
  if (previousWeightPanel) previousWeightPanel.remove();
  const weightPanel = document.createElement('div');
  weightPanel.id = 'weight-log-panel';
  weightPanel.className = 'weight-log-panel';
  weightPanel.innerHTML = `
    <div class="weight-log-content">
      <div class="weight-log-header">
        <span class="weight-log-title">Histórico de Peso</span>
      </div>
      <div class="weight-stats">
        <div class="weight-stat">
          <span class="weight-stat-label">Meta</span>
          <span class="weight-stat-value">${formatWeightDisplay(WEIGHT_GOAL)}</span>
        </div>
        <div class="weight-stat">
          <span class="weight-stat-label">Inicial</span>
          <span class="weight-stat-value">${formatWeightDisplay(WEIGHT_START)}</span>
        </div>
        <div class="weight-stat">
          <span class="weight-stat-label">Atual</span>
          <span class="weight-stat-value" id="weight-current">--</span>
        </div>
        <div class="weight-stat">
          <span class="weight-stat-label">Falta</span>
          <span class="weight-stat-value" id="weight-remaining">--</span>
        </div>
      </div>
      <div class="weight-chart-wrapper" id="weight-chart"></div>
      <div class="weight-log-list" id="weight-log-list"></div>
    </div>
  `;
  calendario.appendChild(weightPanel);
  applyTwemoji(weightPanel);
  const weightChartContainer = weightPanel.querySelector('#weight-chart');
  const weightLogList = weightPanel.querySelector('#weight-log-list');
  const weightCurrentEl = weightPanel.querySelector('#weight-current');
  const weightRemainingEl = weightPanel.querySelector('#weight-remaining');

  function flashDiaryLocker(errorMessage) {
    if (!diaryLocker) return;
    diaryLocker.classList.remove('hidden');
    diaryLocker.classList.remove('diary-locker-shake');
    // force reflow for restart animation
    // eslint-disable-next-line no-unused-expressions
    diaryLocker.offsetHeight;
    diaryLocker.classList.add('diary-locker-shake');
    if (errorMessage && diaryUnlockFeedback) {
      diaryUnlockFeedback.textContent = errorMessage;
      diaryUnlockFeedback.classList.add('show-error');
    }
    if (diaryUnlockInput) {
      diaryUnlockInput.focus();
      diaryUnlockInput.select();
    }
  }

  function updateDiaryLockVisuals({ shouldRenderList = true, success = false, showLocker = false } = {}) {
    if (diaryPanel) {
      diaryPanel.classList.toggle('diary-locked', !diaryUnlocked);
    }
    if (diaryLocker) {
      const shouldShowLocker = showLocker && !diaryUnlocked;
      diaryLocker.classList.toggle('hidden', !shouldShowLocker);
      if (!shouldShowLocker && diaryUnlockInput) {
        diaryUnlockInput.value = '';
      }
      if (success) {
        diaryLocker.classList.add('diary-locker-success');
        setTimeout(() => diaryLocker && diaryLocker.classList.remove('diary-locker-success'), 1200);
      }
    }
    if (diaryUnlockFeedback) {
      diaryUnlockFeedback.textContent = diaryUnlocked ? 'Diário desbloqueado. Entradas liberadas!' : '';
      diaryUnlockFeedback.classList.toggle('show-error', false);
    }
    if (diaryLockToggleButton) {
      diaryLockToggleButton.textContent = diaryUnlocked ? 'Bloquear' : 'Desbloquear';
    }
    if (shouldRenderList) renderDiaryLog();
  }

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
      const plain = (entry.texto || '').replace(/\s+/g, ' ').trim();
      const shortBody = plain.length > 180 ? plain.slice(0, 177) + '…' : plain;
      const previewBase = diaryUnlocked ? (plain.length ? plain : 'Entrada registrada') : 'Conteúdo bloqueado';
      const previewLimit = diaryUnlocked ? 80 : 0;
      const preview = previewLimit ? (previewBase.length > previewLimit ? `${previewBase.slice(0, previewLimit - 1)}…` : previewBase) : previewBase;
      const previewSafe = escapeHTML(preview);
      const safeText = diaryUnlocked ? escapeHTML(shortBody).replace(/\n/g, '<br>') : '<em>Desbloqueie para visualizar.</em>';
      const displayDateSafe = escapeHTML(entry.displayDate || '');
      return `
        <article class="diary-entry" data-day="${dayId}">
          <button type="button" class="diary-entry-toggle" aria-expanded="false">
            <span class="diary-entry-date">${displayDateSafe}</span>
            <span class="diary-entry-preview">${previewSafe}</span>
            <span class="diary-entry-icon" aria-hidden="true">▼</span>
          </button>
          <div class="diary-entry-body" hidden>
            <div class="diary-entry-text">${safeText}</div>
          </div>
        </article>`;
    }).join('');
    diaryLogList.innerHTML = `<div class="diary-entry-list">${itemsHtml}</div>`;
    diaryLogList.scrollTop = 0;
    applyTwemoji(diaryLogList);
    const entries = Array.from(diaryLogList.querySelectorAll('.diary-entry'));
    entries.forEach((entryEl) => {
      const toggle = entryEl.querySelector('.diary-entry-toggle');
      const body = entryEl.querySelector('.diary-entry-body');
      if (!toggle || !body) return;
      toggle.addEventListener('click', () => {
        if (!diaryUnlocked) {
          updateDiaryLockVisuals({ shouldRenderList: false, showLocker: true });
          flashDiaryLocker();
          return;
        }
        const isOpen = entryEl.classList.contains('open');
        entries.forEach((other) => {
          if (other === entryEl) return;
          other.classList.remove('open');
          const otherToggle = other.querySelector('.diary-entry-toggle');
          const otherBody = other.querySelector('.diary-entry-body');
          if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.hidden = true;
        });
        if (isOpen) {
          entryEl.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          body.hidden = true;
        } else {
          entryEl.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
          body.hidden = false;
          entryEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      });
    });
  }

  function attemptDiaryUnlock() {
    if (!diaryUnlockInput) return;
    const code = (diaryUnlockInput.value || '').trim();
    if (!code) {
      flashDiaryLocker('Digite o código para desbloquear.');
      return;
    }
    if (code === DIARY_UNLOCK_CODE) {
      diaryUnlocked = true;
      saveDiaryUnlockState(true);
      updateDiaryLockVisuals({ success: true });
      refreshDiaryStates();
      return;
    }
    flashDiaryLocker('Código incorreto. Tente novamente.');
  }

  if (diaryUnlockButton) {
    diaryUnlockButton.addEventListener('click', (e) => {
      e.preventDefault();
      attemptDiaryUnlock();
    });
  }

  if (diaryUnlockInput) {
    diaryUnlockInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        attemptDiaryUnlock();
      }
    });
  }

  updateDiaryLockVisuals({ shouldRenderList: false, success: diaryUnlocked });

  function buildWeightEntries() {
    return Object.entries(weightEntries)
      .map(([dayId, entry]) => {
        if (!entry || entry.value == null) return null;
        const meta = diaLookup[dayId];
        if (!meta) return null;
        const date = new Date(meta.ano, meta.mes - 1, meta.diaDoMes);
        return {
          dayId,
          weight: Number(entry.value),
          date,
          label: formatDiaryDisplayDate(meta),
          order: date.getTime()
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.order - b.order);
  }

  function renderWeightLog() {
    if (!weightChartContainer || !weightLogList) return;
    const entries = buildWeightEntries();
    const startDate = new Date(inicio);
    const points = [{
      dayId: 'start',
      weight: WEIGHT_START,
      date: startDate,
      label: 'Início',
      order: startDate.getTime()
    }, ...entries];

    const latest = entries.length ? entries[entries.length - 1] : points[0];
    if (weightCurrentEl) weightCurrentEl.textContent = formatWeightDisplay(latest.weight);
    if (weightRemainingEl) {
      const remaining = Math.max(0, latest.weight - WEIGHT_GOAL);
      weightRemainingEl.textContent = `${weightFormatter.format(remaining)} kg`;
    }

    if (!entries.length) {
      weightLogList.innerHTML = '<p class="weight-empty">Nenhum peso registrado ainda.</p>';
    } else {
      const rows = entries.map((entry) => {
        const diff = formatWeightDelta(entry.weight - WEIGHT_GOAL);
        return `
          <tr>
            <td>${entry.label}</td>
            <td>${formatWeightDisplay(entry.weight)}</td>
            <td>${diff}</td>
          </tr>`;
      }).join('');
      weightLogList.innerHTML = `
        <table class="weight-log-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Peso</th>
              <th>Diferença p/ meta</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      `;
    }

    if (points.length <= 1) {
      weightChartContainer.innerHTML = '<p class="weight-empty">Registre um peso para visualizar o gráfico.</p>';
      return;
    }

    const allValues = points.map((p) => p.weight).concat([WEIGHT_GOAL]);
    let minVal = Math.min(...allValues);
    let maxVal = Math.max(...allValues);
    if (maxVal - minVal < 1) {
      const mid = (maxVal + minVal) / 2;
      maxVal = mid + 0.5;
      minVal = mid - 0.5;
    }
    const padding = Math.max((maxVal - minVal) * 0.1, 1);
    const minY = Math.max(0, minVal - padding);
    const maxY = maxVal + padding;
    const width = 820;
    const height = 360;
    const paddingLeft = 70;
    const paddingRight = 30;
    const paddingTop = 30;
    const paddingBottom = 60;
    const innerWidth = width - paddingLeft - paddingRight;
    const innerHeight = height - paddingTop - paddingBottom;
    const step = points.length > 1 ? innerWidth / (points.length - 1) : 0;
    const range = Math.max(1, maxY - minY);

    const coords = points.map((point, index) => {
      const x = paddingLeft + (points.length > 1 ? step * index : innerWidth / 2);
      const y = paddingTop + ((maxY - point.weight) / range) * innerHeight;
      return {
        ...point,
        x,
        y
      };
    });

    const pathData = coords.map((coord, index) => {
      const cmd = index === 0 ? 'M' : 'L';
      return `${cmd}${coord.x.toFixed(2)},${coord.y.toFixed(2)}`;
    }).join(' ');

    const goalY = paddingTop + ((maxY - WEIGHT_GOAL) / range) * innerHeight;
    const pointDots = coords.map((coord) => `<circle class="weight-chart-point" cx="${coord.x.toFixed(2)}" cy="${coord.y.toFixed(2)}" r="6"></circle>`).join('');
    const xLabels = coords.map((coord) => `<text x="${coord.x.toFixed(2)}" y="${height - paddingBottom / 2}" class="weight-chart-label">${coord.label}</text>`).join('');
    const yTicksValues = [maxVal, (maxVal + minVal) / 2, Math.max(minVal, 0)];
    const yTicks = yTicksValues.map((value) => {
      const y = paddingTop + ((maxY - value) / range) * innerHeight;
      return `<text x="${paddingLeft - 16}" y="${y.toFixed(2)}" class="weight-axis-label">${weightFormatter.format(value)}</text>`;
    }).join('');

    weightChartContainer.innerHTML = `
      <svg class="weight-chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="Gráfico de evolução do peso">
        <rect class="weight-chart-bg" x="0" y="0" width="${width}" height="${height}"></rect>
        <g class="weight-chart-axis">
          <line x1="${paddingLeft}" y1="${paddingTop}" x2="${paddingLeft}" y2="${height - paddingBottom}" class="weight-axis-line"></line>
          <line x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}" class="weight-axis-line"></line>
        </g>
        <g class="weight-chart-goal-group">
          <line x1="${paddingLeft}" y1="${goalY.toFixed(2)}" x2="${width - paddingRight}" y2="${goalY.toFixed(2)}" class="weight-chart-goal"></line>
          <text x="${width - paddingRight}" y="${goalY - 8}" class="weight-goal-label" text-anchor="end">Meta ${formatWeightDisplay(WEIGHT_GOAL)}</text>
        </g>
        <path class="weight-chart-line" d="${pathData}"></path>
        ${pointDots}
        <g class="weight-chart-labels">
          ${xLabels}
          ${yTicks}
        </g>
      </svg>
    `;
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

  function updateWeightVisualState(dayId) {
    const item = document.getElementById(`habititem-${dayId}-ciclico`);
    if (!item) return;
    const entry = weightEntries[dayId];
    const hasValue = entry && entry.value != null && !Number.isNaN(Number(entry.value));
    item.classList.toggle('weight-filled', Boolean(hasValue));
    const badge = document.getElementById(`weight-latest-${dayId}`);
    if (badge) {
      if (hasValue) {
        badge.textContent = `Peso: ${formatWeightDisplay(entry.value)}`;
        badge.style.display = '';
      } else {
        badge.textContent = '';
        badge.style.display = 'none';
      }
    }
  }

  function resetWeightEditor(dayId) {
    const input = document.getElementById(`weight-input-${dayId}`);
    if (input) {
      const entry = weightEntries[dayId];
      input.value = entry && entry.value != null ? Number(entry.value).toString() : '';
      input.classList.remove('weight-input-error');
    }
  }

  function showWeightEditor(dayId) {
    const editor = document.getElementById(`weight-editor-${dayId}`);
    if (!editor) return;
    resetWeightEditor(dayId);
    editor.style.display = 'block';
    editor.classList.add('open');
    const input = document.getElementById(`weight-input-${dayId}`);
    if (input) {
      input.focus();
      input.select();
    }
  }

  function hideWeightEditor(dayId) {
    const editor = document.getElementById(`weight-editor-${dayId}`);
    if (!editor) return;
    editor.style.display = 'none';
    editor.classList.remove('open');
  }

  function resetDiaryEditor(dayId) {
    const textarea = document.getElementById(`diary-textarea-${dayId}`);
    if (textarea) {
      textarea.value = diaryEntries[dayId]?.texto || '';
    }
  }

  function showDiaryEditor(dayId) {
    if (!diaryUnlocked) {
      flashDiaryLocker('Desbloqueie o diário para escrever.');
      return;
    }
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
  const openWeightBtn = diaryButtonWrapper.querySelector('#open-weight-log');

  if (openDiaryBtn) {
    openDiaryBtn.setAttribute('aria-controls', 'diary-log-panel');
  }

  if (openWeightBtn) {
    openWeightBtn.setAttribute('aria-controls', 'weight-log-panel');
  }

  const setDiaryButtonState = (isOpen) => {
    if (!openDiaryBtn) return;
    openDiaryBtn.classList.toggle('active', isOpen);
    openDiaryBtn.innerHTML = isOpen ? 'Fechar Diário' : '📔 Diário';
    openDiaryBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    applyTwemoji(openDiaryBtn);
  };

  const setWeightButtonState = (isOpen) => {
    if (!openWeightBtn) return;
    openWeightBtn.classList.toggle('active', isOpen);
    openWeightBtn.innerHTML = isOpen ? 'Fechar Peso' : '⚖️ Peso';
    openWeightBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    applyTwemoji(openWeightBtn);
  };

  const refreshDiaryStates = () => {
    document.querySelectorAll('.habit-item[data-diary-day]').forEach((item) => {
      const dayId = item.getAttribute('data-diary-day');
      if (dayId) {
        resetDiaryEditor(dayId);
        updateDiaryVisualState(dayId);
      }
    });
  };

  const toggleDiaryPanel = (force) => {
    const shouldOpen = typeof force === 'boolean' ? force : !calendario.classList.contains('show-diary');
    if (shouldOpen) {
      calendario.classList.remove('show-weight');
      setWeightButtonState(false);
    }
    calendario.classList.toggle('show-diary', shouldOpen);
    if (shouldOpen) {
      renderDiaryLog();
      if (diaryLogList) diaryLogList.scrollTop = 0;
      calendario.scrollTop = 0;
    }
    setDiaryButtonState(shouldOpen);
    positionDiaryButton(currentScale);
    positionLives(currentScale);
    positionLevel(currentScale);
  };

  const toggleWeightPanel = (force) => {
    const shouldOpen = typeof force === 'boolean' ? force : !calendario.classList.contains('show-weight');
    if (shouldOpen) {
      calendario.classList.remove('show-diary');
      setDiaryButtonState(false);
    }
    calendario.classList.toggle('show-weight', shouldOpen);
    if (shouldOpen) {
      renderWeightLog();
      calendario.scrollTop = 0;
    }
    setWeightButtonState(shouldOpen);
    positionDiaryButton(currentScale);
    positionLives(currentScale);
    positionLevel(currentScale);
  };

  if (openDiaryBtn) {
    openDiaryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDiaryPanel();
    });
  }

  if (openWeightBtn) {
    openWeightBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleWeightPanel();
    });
  }

  const lockDiary = () => {
    diaryUnlocked = false;
    saveDiaryUnlockState(false);
    updateDiaryLockVisuals();
    renderDiaryLog();
    refreshDiaryStates();
  };

  const promptDiaryUnlock = () => {
    updateDiaryLockVisuals({ shouldRenderList: false, showLocker: true });
    flashDiaryLocker();
    if (diaryLocker) {
      diaryLocker.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (diaryLockToggleButton) {
    diaryLockToggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (diaryUnlocked) {
        lockDiary();
      } else {
        promptDiaryUnlock();
      }
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

  if (document.__weightEscapeHandler) {
    document.removeEventListener('keydown', document.__weightEscapeHandler);
  }
  const handleWeightEscape = (e) => {
    if (e.key === 'Escape' && calendario.classList.contains('show-weight')) {
      toggleWeightPanel(false);
    }
  };
  document.__weightEscapeHandler = handleWeightEscape;
  document.addEventListener('keydown', handleWeightEscape);

  calendario.classList.remove('show-diary');
  setDiaryButtonState(false);
  calendario.classList.remove('show-weight');
  setWeightButtonState(false);

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

    document.querySelectorAll('.habit-item[data-weight-day]').forEach((item) => {
      const dayId = item.getAttribute('data-weight-day');
      updateWeightVisualState(dayId);
      resetWeightEditor(dayId);
      const label = item.querySelector('.habit-label');
      const checkbox = item.querySelector('.habit-checkbox');

      item.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT') return;
        if (e.target.classList.contains('habit-emoji')) return;
        if (e.target.classList.contains('habit-label')) return;
        if (e.target.closest('.weight-actions')) return;
        showWeightEditor(dayId);
      });

      if (label) {
        label.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          showWeightEditor(dayId);
        });
      }

      if (checkbox) {
        checkbox.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
    });

    document.querySelectorAll('.weight-input').forEach((input) => {
      input.addEventListener('input', () => {
        input.classList.remove('weight-input-error');
      });
    });

    document.querySelectorAll('.weight-save').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dayId = button.getAttribute('data-day');
        if (!dayId) return;
        const input = document.getElementById(`weight-input-${dayId}`);
        if (!input) return;
        const original = button.textContent;
        button.disabled = true;
        button.textContent = 'Salvando...';
        const rawValue = (input.value || '').toString().replace(',', '.').trim();
        const checkbox = document.getElementById(`${dayId}-ciclico`);

        if (!rawValue) {
          delete weightEntries[dayId];
          saveWeightEntriesLocal(weightEntries);
          hideWeightEditor(dayId);
          updateWeightVisualState(dayId);
          renderWeightLog();
          if (checkbox && checkbox.checked) {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
          }
          button.textContent = 'Removido';
          setTimeout(() => { button.textContent = original; }, 1500);
          button.disabled = false;
          return;
        }

        const parsed = parseFloat(rawValue);
        if (Number.isNaN(parsed) || parsed <= 0) {
          input.classList.add('weight-input-error');
          button.textContent = original;
          button.disabled = false;
          input.focus();
          return;
        }

        weightEntries[dayId] = {
          value: parsed,
          savedAt: Date.now()
        };
        saveWeightEntriesLocal(weightEntries);
        hideWeightEditor(dayId);
        updateWeightVisualState(dayId);
        renderWeightLog();
        if (checkbox && !checkbox.checked) {
          checkbox.checked = true;
          checkbox.dispatchEvent(new Event('change'));
        }
        button.textContent = 'Salvo!';
        setTimeout(() => { button.textContent = original; }, 1500);
        button.disabled = false;
      });
    });

    document.querySelectorAll('.weight-cancel').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dayId = button.getAttribute('data-day');
        if (!dayId) return;
        resetWeightEditor(dayId);
        hideWeightEditor(dayId);
      });
    });

    document.querySelectorAll('.diary-save').forEach((button) => {
      button.addEventListener('click', async (e) => {
        e.stopPropagation();
        const dayId = button.getAttribute('data-day');
        if (!dayId) return;
        if (!diaryUnlocked) {
          flashDiaryLocker('Desbloqueie o diário para salvar.');
          return;
        }
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
    renderWeightLog();
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

  function centerMonthDropdown(dropdown) {
    if (!calendarioEl || !dropdown) return;
    const firstRow = dropdown.querySelector('.main-row');
    const target = firstRow || dropdown;
    const targetCenter = target.offsetTop + target.offsetHeight / 2;
    const desiredScroll = Math.max(0, targetCenter - calendarioEl.clientHeight / 2);
    calendarioEl.scrollTo({ top: desiredScroll, behavior: 'smooth' });
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

  allRewards.forEach((card) => {
    const key = card.getAttribute('data-reward');
    if (!key) return;
    const [monthStr, yearStr] = key.split('-');
    const month = Number(monthStr);
    const year = Number(yearStr);
    const reward = getRewardFor(month, year);
    if (!reward) return;
    const theme = getRewardTheme(reward);
    applyRewardCardTheme(card, theme, reward);
    const ariaLabel = reward.desc ? `${reward.title} — ${reward.desc}` : reward.title;
    card.setAttribute('aria-label', ariaLabel);
    card.addEventListener('click', (event) => {
      event.stopPropagation();
      const progress = getRewardProgress(month, year);
      const lives = calculateRemainingLives(month, year);
      showRewardVisualizer(reward, { month, year, lives, progressOverride: progress });
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });

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
      requestAnimationFrame(() => {
        refreshVisibleRowProgress(dropdown);
        centerMonthDropdown(dropdown);
      });
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

  function applyRowProgressClip(row, pct, options = {}) {
    if (!row) return;
    const { animate = true } = options;
    const clampedPct = Math.max(0, Math.min(1, pct));
    const prevStored = parseFloat(row.dataset.prevProgress);
    const prevPct = Number.isNaN(prevStored) ? clampedPct : Math.max(0, Math.min(1, prevStored));
    row.dataset.progressValue = clampedPct;
    const covers = row.querySelectorAll('.progress-text-cover');
    if (!covers.length) {
      row.dataset.prevProgress = clampedPct;
      return;
    }

    const rowRect = row.getBoundingClientRect();
    const rowWidth = rowRect.width;
    const coveragePx = rowWidth * clampedPct;

    function computeTimingForSegment(prevValue, nextValue, startRatio, endRatio) {
      const baseDuration = 0.45;
      if (!animate || !rowWidth) {
        return { delay: 0, duration: 0 };
      }

      const deltaLocal = nextValue - prevValue;
      if (deltaLocal === 0) {
        return { delay: 0, duration: 0 };
      }

      if (deltaLocal < 0) {
        return computeTimingForSegment(1 - prevValue, 1 - nextValue, 1 - endRatio, 1 - startRatio);
      }

      const segmentStart = Math.max(prevValue, startRatio);
      const segmentEnd = Math.min(nextValue, endRatio);
      const changeAmount = Math.max(0, segmentEnd - segmentStart);
      if (changeAmount <= 0) {
        return { delay: 0, duration: 0 };
      }

      const delayFraction = (segmentStart - prevValue) / deltaLocal;
      const durationFraction = changeAmount / deltaLocal;
      return {
        delay: Math.max(0, delayFraction * baseDuration),
        duration: Math.max(0.05, durationFraction * baseDuration)
      };
    }

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

      if (!animate || !rowWidth || !width) {
        cover.style.transitionDuration = '0s';
        cover.style.transitionDelay = '0s';
        return;
      }

      const startRatio = rowWidth ? Math.max(0, Math.min(1, start / rowWidth)) : 0;
      const endRatio = rowWidth ? Math.max(0, Math.min(1, (start + width) / rowWidth)) : 0;
      const { delay, duration } = computeTimingForSegment(prevPct, clampedPct, startRatio, endRatio);
      cover.style.transitionDuration = `${duration}s`;
      cover.style.transitionDelay = `${delay}s`;
    });

    row.dataset.prevProgress = clampedPct;
  }

  function refreshVisibleRowProgress(scope = document) {
    const rows = scope.querySelectorAll ? scope.querySelectorAll('tr.main-row') : [];
    rows.forEach((row) => {
      const stored = parseFloat(row.dataset.progressValue);
      if (!Number.isNaN(stored)) {
        applyRowProgressClip(row, stored, { animate: false });
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
    const rewardObj = getRewardFor(Number(month), Number(year));
    if (bar) {
      bar.style.width = (pct * 100) + "%";
      if (counterBar && Number(month) === mesAtual && Number(year) === anoAtual) counterBar.style.width = (pct * 100) + "%";
      const celebrateKey = `reward-celebrated-${month}-${year}`;
      const already = localStorage.getItem(celebrateKey) === 'true';
      if (pct === 1) {
        if (unlocked) unlocked.style.display = "block";
        if (!already && !skipCelebrate) {
          launchRewardConfetti();
          localStorage.setItem(celebrateKey, 'true');
          if (rewardObj) {
            const remainingLives = calculateRemainingLives(Number(month), Number(year));
            const newLevel = calculatePlayerLevel();
            updateLevelDisplay();
            if (remainingLives > 0) {
              showRewardVisualizer(rewardObj, {
                month: Number(month),
                year: Number(year),
                lives: remainingLives,
                level: newLevel,
                progressOverride: { done: diasCompletos, total: totalDias }
              });
            }
          }
        }
      } else {
        if (unlocked) unlocked.style.display = "none";
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
    updateLevelDisplay();
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
      const weightDay = emoji.getAttribute('data-weight-day');
      if (weightDay) {
        showWeightEditor(weightDay);
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
