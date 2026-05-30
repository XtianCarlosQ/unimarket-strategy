/* ==========================================================================
   DATOS ESTRATÉGICOS (MIGRACIÓN COMPLETA DE A Y B)
   ========================================================================== */

const moscowData = {
  must: {
    title: 'Must Have',
    badge: 'Obligatorio para demostrar confianza y liquidez',
    why: 'Estas funciones son el núcleo del negocio. Sin ellas, UniMarket sería solo otro catálogo bonito y repetiría el desorden y la saturación de los grupos de WhatsApp.',
    stakeholder: 'Para stakeholders: primero probamos la identidad institucional, la visibilidad de oferta diaria real (24h) y la coordinación segura sin exponer privacidad. Luego invertimos en features más complejos.',
    items: [
      {name:'Filtro Escudo Sanmarquino', detail:'Verificación de identidad obligatoria exigiendo el correo institucional @unmsm.edu.pe con validación OTP.', example:'Compradores y vendedores saben que operan dentro de una comunidad 100% cerrada y de confianza.', effort:'M', impact:'Crítico', risk:'Bajo'},
      {name:'Pizarra Efímera de 24 Horas', detail:'Base de datos con TTL (Time-To-Live) automático de 24 horas para cada publicación de producto.', example:'Mantiene el feed limpio y libre de spam. Genera hábito de apertura diaria por urgencia (FOMO).', effort:'M', impact:'Alto', risk:'Bajo'},
      {name:'Chat Interno en Tiempo Real', detail:'Mensajería P2P basada en WebSockets para coordinar compras sin exponer números personales.', example:'Protege la privacidad de los alumnos y retiene el uso dentro de la plataforma para analítica futura.', effort:'L', impact:'Alto', risk:'Medio'},
      {name:'Publicación y Exploración de Productos', detail:'Formulario rápido para subir fotos, título, precio, categoría y pabellón.', example:'Vendedor publica "queque S/ 4 en Letras a la 1 pm", visible instantáneamente para el campus.', effort:'M', impact:'Alto', risk:'Bajo'},
      {name:'Categorías y Búsqueda Simple', detail:'Filtros rápidos por precio, disponibilidad y categoría de producto.', example:'Clasificación directa en Postres, Servicios, Moda, Tutorías y Libros.', effort:'S', impact:'Alto', risk:'Bajo'}
    ]
  },
  should: {
    title: 'Should Have',
    badge: 'Muy valioso, pero no debe bloquear el MVP',
    why: 'Estas funciones incrementan de manera exponencial la diferenciación frente a WhatsApp y aceleran la retención, pero se introducen tras validar el núcleo transaccional.',
    stakeholder: 'Para stakeholders: el buscador cognitivo con IA genera alto impacto estratégico, pero primero necesitamos el flujo básico operativo para entrenar los embeddings con datos reales de productos del campus.',
    items: [
      {name:'Buscador Cognitivo con IA', detail:'Procesamiento semántico FastAPI para entender intenciones complejas en lenguaje informal estudiantil.', example:'Búsqueda: "un regalo barato para mi novia para hoy a las 6 pm" → Muestra rosas y detalles.', effort:'L', impact:'Alto', risk:'Medio'},
      {name:'Filtro por Pabellón o Facultad', detail:'Clasificación geográfica que prioriza los productos según el pabellón de entrega.', example:'Permite transacciones ultra rápidas en el receso de 10 minutos entre clases.', effort:'M', impact:'Medio-Alto', risk:'Bajo'},
      {name:'Horarios Disponibles del Vendedor', detail:'Carga de ventanas horarias del vendedor para evitar la coordinación eterna de chats.', example:'"Entrego en Biblioteca Central de 2 a 3 pm" simplifica la reserva del comprador.', effort:'M', impact:'Alto', risk:'Bajo'},
      {name:'Popularidad y Reputación Básica', detail:'Señales de confianza basadas en la cantidad de entregas concretadas y feedback positivo.', example:'"15 entregas exitosas, valoración 4.9/5" otorga seguridad inmediata al comprador.', effort:'M', impact:'Alto', risk:'Medio'}
    ]
  },
  could: {
    title: 'Could Have',
    badge: 'Deseable para deleitar, no esencial de arranque',
    why: 'Estas ideas aportan un valor estético y de gamificación muy atractivo, pero se incorporan como experimentos reactivos según el feedback de los primeros 50 usuarios.',
    stakeholder: 'Para stakeholders: mantener estas funciones en la recámara nos permite cuidar la velocidad de entrega del equipo sin cerrar las puertas a la innovación progresiva.',
    items: [
      {name:'Penalización Digital por Plantón', detail:'Algoritmo de moderación que suspende temporalmente perfiles con múltiples inasistencias a entregas.', example:'Fomenta la responsabilidad y seriedad del comercio estudiantil.', effort:'H', impact:'Medio', risk:'Alto'},
      {name:'Mapa de Puntos de Encuentro Seguros', detail:'Geolocalización efímera por 15 minutos en zonas de campus con resguardo o videovigilancia.', example:'Los estudiantes se ubican en tiempo real en Plaza del Rectorado o Biblioteca Central.', effort:'L', impact:'Medio', risk:'Medio'},
      {name:'Historias de Campus (Clips de 15s)', detail:'Formato de video vertical efímero de 24h para mostrar el detrás de escena o stock del día.', example:'Una estudiante de modas muestra el proceso de costura de sus poleras en un clip rápido.', effort:'L', impact:'Medio', risk:'Medio'},
      {name:'Dashboard Premium para Vendedores', detail:'Estadísticas de visualizaciones, clics en chat y retención de stock para perfiles de pago.', example:'Saber qué días de la semana y qué horas generan el mayor volumen de intención de compra.', effort:'M', impact:'Medio', risk:'Bajo'}
    ]
  },
  wont: {
    title: 'Won’t Have (Fase 1)',
    badge: 'Fuera de alcance inicial para controlar riesgos',
    why: 'Estas funciones desvían el foco legal, financiero y técnico en el primer año. Excluirlas protege el presupuesto y la credibilidad operativa.',
    stakeholder: 'Para stakeholders: decir "no todavía" nos blinda de burocracias regulatorias de pasarelas de pago externas o de costos logísticos de delivery innecesarios.',
    items: [
      {name:'Pasarela de Pagos Completa', detail:'Integración de pagos con tarjetas de crédito/débito dentro de la app (split payments/escrow internacional).', example:'Mitigación: Mantener coordinación directa con Yape/Plin o efectivo al momento del encuentro.', effort:'XL', impact:'Medio', risk:'Muy Alto'},
      {name:'Logística y Delivery Externo', detail:'Flota de entregas motorizadas o alianzas externas de logística dentro del campus.', example:'Mitigación: El intercambio sigue siendo directo de estudiante a estudiante dentro del campus.', effort:'XL', impact:'Bajo', risk:'Alto'},
      {name:'Expansión Multicampus Inmediata', detail:'Apertura de la app en múltiples universidades (PUCP, ULima, UP) desde el día uno.', example:'Mitigación: Validar primero la densidad, PMF y reputación en el piloto cerrado de la UNMSM.', effort:'H', impact:'Alto', risk:'Alto'},
      {name:'Red Social Romántica integrada', detail:'Features de citas o encuentros casuales entre estudiantes.', example:'Mitigación: Foco 100% profesional y comercial universitario bajo marca institucional.', effort:'M', impact:'Bajo', risk:'Alto'}
    ]
  }
};

const sprintData = [
  {
    id: 'Sprint 0', title: 'Fundamentos & Setup', weeks: 'Semanas 0-1', goal: 'Configurar entorno técnico y cerrar base de datos.',
    deliverables: ['Product Backlog cerrado en MoSCoW', 'Diseño de base de datos (Supabase)', 'CI/CD pipeline en GitHub Actions', 'Wireframes críticos del flujo comprador/vendedor'],
    demo: 'Demostrar arquitectura de base de datos y flujo lógico extremo a extremo en baja fidelidad.'
  },
  {
    id: 'Sprint 1', title: 'Auth & Escudo', weeks: 'Semanas 2-3', goal: 'Garantizar el entorno seguro y validación institucional.',
    deliverables: ['Autenticación Supabase Auth', 'Filtro Regex para correo @unmsm.edu.pe', 'Validación OTP por email', 'Onboarding de perfiles de usuario'],
    demo: 'Registro de un nuevo estudiante sanmarquino, verificación de OTP y creación exitosa de su perfil.'
  },
  {
    id: 'Sprint 2', title: 'Pizarra Efímera', weeks: 'Semanas 4-5', goal: 'Permitir publicaciones reales y expiración automática.',
    deliverables: ['CRUD de productos', 'Carga de imágenes optimizada', 'Configuración de TTL en base de datos para expiración en 24h', 'Feed principal clasificado'],
    demo: 'Vendedor publica stock de brownies del día y el feed se limpia automáticamente pasadas las 24 horas.'
  },
  {
    id: 'Sprint 3', title: 'Chat Seguro P2P', weeks: 'Semanas 6-7', goal: 'Habilitar coordinación en tiempo real sin salir de la app.',
    deliverables: ['Mensajería WebSocket en tiempo real', 'Notificaciones push en background', 'Plantillas de coordinación', 'Políticas de privacidad en chat'],
    demo: 'Comprador inicia conversación con vendedor coordinando punto de entrega sin intercambiar números telefónicos.'
  },
  {
    id: 'Sprint 4', title: 'Logística de Campus', weeks: 'Semanas 8-9', goal: 'Atacar el dolor operativo de coordinar encuentros.',
    deliverables: ['Carga de ventanas horarias de vendedores', 'Geotagging básico de pabellones', 'Puntos seguros de encuentro sugeridos', 'Reserva de producto'],
    demo: 'Comprador reserva un postre, selecciona Biblioteca Central e indica que recogerá en el cambio de clase a las 2 pm.'
  },
  {
    id: 'Sprint 5', title: 'Adopción & Feedback', weeks: 'Semanas 10-11', goal: 'Preparar el lanzamiento del piloto y validar percepción.',
    deliverables: ['Métricas analíticas integradas', 'Landing page de captación de sellers', 'Sistema de valoración básica', 'Test A/B de paletas'],
    demo: 'Revisión del panel de analítica captando eventos de uso y visualización del feedback de los primeros 10 usuarios beta.'
  },
  {
    id: 'Sprint 6', title: 'Piloto & Cierre', weeks: 'Semana 12', goal: 'Ejecutar piloto completo y tomar la decisión Go/No-Go.',
    deliverables: ['Piloto controlado de 50 estudiantes', 'Reporte final de KPI y NPS', 'Backlog de deuda técnica corregido', 'Pitch de escala'],
    demo: 'Presentación ejecutiva a jefa y stakeholders con datos reales de transacciones, liquidez y NPS del piloto.'
  }
];

const financialScenarios = {
  pesimista: {
    label: 'Escenario Pesimista (Crecimiento Lento)',
    conversion: [0, 0, 0.002, 0.003, 0.004, 0.005, 0.006, 0.007, 0.008, 0.009, 0.01, 0.01],
    users: [50, 80, 120, 180, 250, 330, 420, 520, 620, 700, 760, 800],
    ads: [0, 0, 0, 50, 80, 100, 120, 130, 140, 150, 150, 150],
    commissions: [0, 5, 12, 20, 30, 42, 55, 68, 80, 90, 95, 100],
    costs: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
  },
  base: {
    label: 'Escenario Medio (Proyección Moderada)',
    conversion: [0, 0.002, 0.005, 0.008, 0.012, 0.016, 0.02, 0.023, 0.026, 0.028, 0.03, 0.03],
    users: [50, 100, 250, 500, 850, 1300, 1800, 2300, 2800, 3200, 3400, 3500],
    ads: [0, 40, 70, 100, 160, 220, 280, 340, 390, 430, 470, 500],
    commissions: [0, 12, 35, 70, 110, 160, 220, 290, 340, 390, 430, 450],
    costs: [0, 0, 50, 80, 150, 250, 250, 250, 250, 250, 250, 250]
  },
  optimista: {
    label: 'Escenario Esperanzador (Escala Multi-Campus)',
    conversion: [0.002, 0.005, 0.01, 0.018, 0.025, 0.032, 0.038, 0.043, 0.047, 0.05, 0.05, 0.05],
    users: [100, 300, 800, 1500, 2500, 4000, 6000, 8000, 9500, 10500, 11500, 12000],
    ads: [0, 80, 150, 250, 380, 550, 750, 950, 1250, 1550, 1800, 2000],
    commissions: [5, 25, 80, 180, 320, 520, 820, 1150, 1500, 1850, 2200, 2500],
    costs: [50, 80, 120, 200, 320, 450, 600, 700, 800, 800, 800, 800]
  }
};

const palettes = [
  {
    key: 'original',
    name: 'Institucional actual (unimarket-mvp)',
    note: 'Violeta + lila + rosado. Sabor creativo, juvenil y cercano.',
    colors: ['#35106f', '#5b21b6', '#7c3aed', '#f45dbb', '#ffb23f']
  },
  {
    key: 'nahimic',
    name: 'Nahimic CyberTech (Tu 1ra Captura)',
    note: 'Gris medianoche + cian neón. Alto rendimiento, software y velocidad.',
    colors: ['#0b111e', '#111827', '#22d3ee', '#38bdf8', '#1e293b']
  },
  {
    key: 'premium',
    name: 'Premium Indigo (Tu 2da Captura)',
    note: 'Gris lila profundo + índigo + verde. Confianza fintech, limpio y unisex.',
    colors: ['#0e0e16', '#141421', '#8b5cf6', '#10b981', '#fbbf24']
  },
  {
    key: 'shadcn',
    name: 'Shadcn Zinc (ui.shadcn.com)',
    note: 'Zinc puro + blanco + gris ceniza. Minimalismo, contraste y legibilidad.',
    colors: ['#09090b', '#18181b', '#fafafa', '#a1a1aa', '#27272a']
  },
  {
    key: 'unmsm',
    name: 'UNMSM Modern Tech',
    note: 'Navy profundo + azul eléctrico + dorado. Académico oficial y tecnológico.',
    colors: ['#07111e', '#0e1a2b', '#3b82f6', '#fbbf24', '#34d399']
  }
];

const ideas = [
  {icon:'🧑‍🏫', title:'UniMarket Services', text:'Marketplace de servicios académicos: "Te explico cálculo por S/ 20 la hora", "Traduzco tu paper". Valida el nivel de tutoría con el mismo escudo institucional.', score:5},
  {icon:'🎥', title:'Historias de Campus', text:'Clips de 15 segundos del detrás de escena (preparando postres, cosiendo poleras). Caducan a las 24 horas encajando en la pizarra efímera.', score:4},
  {icon:'📍', title:'Puntos de Encuentro Seguros', text:'Sala de geolocalización efímera por 15 minutos estilo Uber para reducir plantones y desencuentros en grandes campus.', score:4},
  {icon:'🤝', title:'UniCo-Founders', text:'Pivot de concepto social hacia la búsqueda de socios, programadores o diseñadores dentro de la propia universidad.', score:5},
  {icon:'🏫', title:'Licencia B2B2C Campus OS', text:'SaaS vendido a universidades como plataforma de economía circular, seguridad de campus y fomento del emprendimiento.', score:5},
  {icon:'🧠', title:'Buscador Semántico Horario', text:'Cruce inteligente que clasifica el stock según la urgencia, precio, cercanía al pabellón y disponibilidad de entrega.', score:5}
];

/* ==========================================================================
   INICIALIZACIÓN Y NAVEGACIÓN
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const sections = Array.from(document.querySelectorAll('.section'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const progressBar = document.getElementById('progressBar');
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');
  const nextSectionBtn = document.getElementById('nextSection');
  const scenarioSelect = document.getElementById('scenarioSelect');
  const themeModeBtn = document.getElementById('themeModeBtn');

  // Inicialización de la navegación
  function scrollToSection(id) {
    const targetSection = document.getElementById(id);
    if (!targetSection) return;
    
    sections.forEach(s => s.classList.remove('active'));
    targetSection.classList.add('active');
    
    targetSection.scrollIntoView({behavior: 'smooth', block: 'start'});
    
    if (window.innerWidth <= 1180) {
      sidebar.classList.remove('open');
    }
    
    updateActiveNav();
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => scrollToSection(link.dataset.target));
  });

  document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      scrollToSection(e.currentTarget.dataset.target);
    });
  });

  menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  nextSectionBtn?.addEventListener('click', () => {
    const activeIndex = navLinks.findIndex(n => n.classList.contains('active'));
    const next = navLinks[Math.min(activeIndex + 1, navLinks.length - 1)];
    if (next) scrollToSection(next.dataset.target);
  });

  function updateActiveNav() {
    const activeSection = sections.find(s => s.classList.contains('active')) || sections[0];
    const currentId = activeSection.id;
    
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.target === currentId);
    });
    
    const index = sections.findIndex(s => s.id === currentId);
    const percent = ((index + 1) / sections.length) * 100;
    if (progressBar) progressBar.style.width = `${percent}%`;
    
    // Si la sección activa es de finanzas, redibujar charts
    if (currentId === 'finanzas') {
      setTimeout(() => {
        renderFinancials(scenarioSelect ? scenarioSelect.value : 'base');
      }, 100);
    }
  }

  // ==========================================================================
  // CONTROLES DE PALETAS Y MODO CLARO/OSCURO
  // ==========================================================================
  
  let currentTheme = localStorage.getItem('unimarket-theme') || 'original';
  let currentMode = localStorage.getItem('unimarket-mode') || 'light';

  function applyThemeAndMode(theme, mode) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.mode = mode;
    
    currentTheme = theme;
    currentMode = mode;
    
    localStorage.setItem('unimarket-theme', theme);
    localStorage.setItem('unimarket-mode', mode);
    
    // Actualizar estados visuales de los botones de paleta
    document.querySelectorAll('.palette-card').forEach(card => {
      card.classList.toggle('active', card.dataset.palette === theme);
    });

    // Actualizar estados visuales de los botones rápidos en el sidebar
    document.querySelectorAll('.quick-palette-dot').forEach(dot => {
      dot.classList.toggle('active', dot.dataset.quickPalette === theme);
    });

    // Actualizar botón de modo
    if (themeModeBtn) {
      themeModeBtn.innerHTML = mode === 'dark' 
        ? '<i class="fas fa-sun"></i> Modo Claro' 
        : '<i class="fas fa-moon"></i> Modo Oscuro';
    }

    // Rediseñar el mockup del celular según la paleta para que sea WOW
    updatePhoneMockupTheme(theme, mode);
    
    // Redibujar gráficos si es necesario
    if (document.getElementById('finanzas').classList.contains('active')) {
      renderFinancials(scenarioSelect ? scenarioSelect.value : 'base');
    }
  }

  // Switch de modo
  themeModeBtn?.addEventListener('click', () => {
    const nextMode = currentMode === 'light' ? 'dark' : 'light';
    applyThemeAndMode(currentTheme, nextMode);
  });

  // Mockup adaptivo
  function updatePhoneMockupTheme(theme, mode) {
    const miniHero = document.querySelector('.app-hero-mini');
    const miniTabs = document.querySelectorAll('.mini-tabs span');
    const miniChat = document.querySelector('.mini-chat');
    
    if (!miniHero) return;
    
    // Cambiar gradientes del mockup para encajar con el tema activo
    const rootStyles = getComputedStyle(document.documentElement);
    const primary = rootStyles.getPropertyValue('--purple-700').trim();
    const secondary = rootStyles.getPropertyValue('--purple-500').trim();
    const accentSoft = rootStyles.getPropertyValue('--pink-soft').trim();
    const accentText = rootStyles.getPropertyValue('--purple-800').trim();

    miniHero.style.background = `linear-gradient(135deg, ${primary}, ${secondary})`;
    
    miniTabs.forEach(tab => {
      tab.style.background = rootStyles.getPropertyValue('--lilac-100').trim();
      tab.style.color = primary;
    });

    if (miniChat) {
      miniChat.style.background = accentSoft;
      miniChat.style.color = accentText;
    }
  }

  // ==========================================================================
  // RENDER INTERACTIVOS: MOSCOW, SPRINTS E IDEAS
  // ==========================================================================

  function renderMoscow(key = 'must') {
    const data = moscowData[key];
    const stage = document.getElementById('moscowStage');
    if (!stage) return;

    stage.innerHTML = `
      <article class="moscow-summary glowing-border">
        <h3>${data.title}</h3>
        <span class="priority-badge">${data.badge}</span>
        <p>${data.why}</p>
        <p><strong>Argumento de Negocio:</strong> ${data.stakeholder}</p>
      </article>
      <article class="moscow-items">
        ${data.items.map(item => `
          <div class="feature-item">
            <h4>${item.name}</h4>
            <p>${item.detail}</p>
            <p style="margin-top: 4px;"><strong>Ejemplo UX:</strong> <em>${item.example}</em></p>
            <div class="feature-meta">
              <span>Esfuerzo: ${item.effort}</span>
              <span>Impacto: ${item.impact}</span>
              <span>Riesgo: ${item.risk}</span>
            </div>
          </div>
        `).join('')}
      </article>
    `;
  }

  document.querySelectorAll('.moscow-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.moscow-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMoscow(btn.dataset.moscow);
    });
  });

  function renderSprints() {
    const timeline = document.getElementById('sprintTimeline');
    if (!timeline) return;

    timeline.innerHTML = sprintData.map((s, idx) => `
      <button class="sprint-card ${idx === 0 ? 'active' : ''}" data-sprint="${idx}">
        <small>${s.id} • ${s.weeks}</small>
        <h4>${s.title}</h4>
        <p>${s.goal}</p>
      </button>
    `).join('');

    timeline.querySelectorAll('.sprint-card').forEach(card => {
      card.addEventListener('click', () => {
        renderSprintDetail(Number(card.dataset.sprint));
      });
    });

    renderSprintDetail(0);
  }

  function renderSprintDetail(index) {
    document.querySelectorAll('.sprint-card').forEach((c, i) => c.classList.toggle('active', i === index));
    const s = sprintData[index];
    const details = document.getElementById('sprintDetails');
    if (!details) return;

    details.innerHTML = `
      <h3>${s.id}: ${s.title}</h3>
      <p><strong>Objetivo Principal:</strong> ${s.goal}</p>
      <p><strong>Demo Demostrable a Stakeholders:</strong> <em>${s.demo}</em></p>
      <hr style="margin: 16px 0; border: 0; border-top: 1px solid var(--line);">
      <h4 style="font-size: 15px; margin-bottom: 8px; text-transform: uppercase; color: var(--purple-700);">Entregables Técnicos:</h4>
      <ul>
        ${s.deliverables.map(d => `<li>${d}</li>`).join('')}
      </ul>
    `;
  }

  function renderIdeas() {
    const grid = document.getElementById('ideaGrid');
    if (!grid) return;

    grid.innerHTML = ideas.map(idea => `
      <article class="idea-card">
        <span class="idea-icon">${idea.icon}</span>
        <h3>${idea.title}</h3>
        <p style="margin-top: 8px;">${idea.text}</p>
        <div class="idea-meter" aria-label="Prioridad de impacto ${idea.score} de 5">
          ${Array.from({length: 5}, (_, i) => `<span class="${i < idea.score ? 'on' : ''}"></span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  // ==========================================================================
  // MODELO FINANCIERO E INTERACCIÓN DE ESCENARIOS
  // ==========================================================================

  function computeFinancialRows(key) {
    const s = financialScenarios[key];
    return s.users.map((users, i) => {
      const subs = Math.round(users * s.conversion[i] * 7); // S/ 7 de suscripción
      const ads = s.ads[i];
      const commissions = s.commissions[i];
      const costs = s.costs[i];
      const net = subs + ads + commissions - costs;
      return {month: i + 1, users, subs, ads, commissions, costs, net};
    });
  }

  function formatMoney(value) {
    return new Intl.NumberFormat('es-PE', {style: 'currency', currency: 'PEN', maximumFractionDigits: 0}).format(value);
  }

  const costDetailsData = {
    pesimista: {
      title: 'Desglose de Costos Operativos (Escenario Pesimista)',
      intro: 'Bajo este escenario de crecimiento lento, mantendremos los **costos fijos mínimos en S/ 50 mensuales** durante todo el año, operando en la capa 100% gratuita y limitando gastos de captación.',
      items: [
        { period: 'Mes 1 a 12', total: 'S/ 50 / mes', server: 'S/ 0 (Free tiers activos de Supabase PostgreSQL y servidores Render FastAPI).', marketing: 'S/ 50 al mes para impresión de volantes con código QR y guerrilla física en pabellones de mayor tránsito.', ops: 'S/ 0 en soporte (administración directa del equipo).' }
      ]
    },
    base: {
      title: 'Desglose de Costos Operativos (Escenario Medio)',
      intro: 'En el escenario moderado, escalamos la infraestructura técnica a partir del **Mes 5** a un plan de pago para evitar la hibernación de base de datos y ampliamos progresivamente la folletería de captación.',
      items: [
        { period: 'Mes 1 y 2', total: 'S/ 0 / mes', server: 'S/ 0 (Capas gratuitas de servidores y BD Supabase).', marketing: 'S/ 0 (Marketing 100% orgánico y recomendación por referidos en grupos cerrados).', ops: 'S/ 0 (Soporte directo).' },
        { period: 'Mes 3', total: 'S/ 50 / mes', server: 'S/ 0 (Capas gratuitas activas).', marketing: 'S/ 50 en impresión de QRs físicos para el piloto de 50 usuarios.', ops: 'S/ 0 (Soporte directo).' },
        { period: 'Mes 4', total: 'S/ 80 / mes', server: 'S/ 0 (Capas gratuitas activas).', marketing: 'S/ 80 en folletería física y marketing de guerrilla en pabellón de Letras.', ops: 'S/ 0 (Soporte directo).' },
        { period: 'Mes 5', total: 'S/ 150 / mes', server: 'S/ 50 (Upgrade de servidor Render para FastAPI backend para evitar demoras de inicio).', marketing: 'S/ 100 en campañas impresas multifacultad y branding en campus.', ops: 'S/ 0 (Soporte directo).' },
        { period: 'Mes 6 a 12', total: 'S/ 250 / mes', server: 'S/ 100 ($25 USD) para base de datos Supabase Pro Tier (PostgreSQL dedicada sin pausa).', marketing: 'S/ 150 al mes en marketing de guerrilla continuo, folletos y embajadores.', ops: 'S/ 0 (Soporte directo).' }
      ]
    },
    optimista: {
      title: 'Desglose de Costos Operativos (Escenario Esperanzador)',
      intro: 'Bajo crecimiento acelerado e integración multi-campus, invertimos en **hosting de alto tráfico, soporte escalable e Inteligencia Artificial en background**, financiados por el alto flujo de comisiones y primas.',
      items: [
        { period: 'Mes 1', total: 'S/ 50 / mes', server: 'S/ 0 (Capas cloud gratuitas).', marketing: 'S/ 50 para volantes QR de captación inicial en pabellón de Ciencias Administrativas.', ops: 'S/ 0 (Soporte directo).' },
        { period: 'Mes 2 y 3', total: 'S/ 80 - 120 / mes', server: 'S/ 0 (Capas cloud gratuitas).', marketing: 'S/ 80-120 para crecimiento acelerado de guerrilla e incentivos a embajadores.', ops: 'S/ 0 (Soporte directo).' },
        { period: 'Mes 4 y 5', total: 'S/ 200 - 320 / mes', server: 'S/ 100 (Upgrade a Supabase Pro PostgreSQL) + S/ 40 (Render FastAPI Pro).', marketing: 'S/ 100-180 en marketing impreso de guerrilla y activaciones en campus.', ops: 'S/ 0 (Soporte).' },
        { period: 'Mes 6 y 7', total: 'S/ 450 - 600 / mes', server: 'S/ 200 (Infraestructura de base de datos escalable, redundancia + hosting en VPS de alto tráfico).', marketing: 'S/ 200-300 en activaciones masivas en campus y S/ 50 en pasarela SMS/notificaciones push automáticas.', ops: 'S/ 0 (Soporte).' },
        { period: 'Mes 8 a 12', total: 'S/ 700 - 800 / mes', server: 'S/ 250 (Infraestructura dedicada, bases de datos optimizadas, balanceador de carga y APIs de mensajería).', marketing: 'S/ 400-500 al mes en reclutamiento de embajadores multi-campus (UNMSM, PUCP, ULima, UP) y guerrilla.', ops: 'S/ 50 en moderador in-app.' }
      ]
    }
  };

  function renderCostBreakdown(key) {
    const data = costDetailsData[key];
    const container = document.getElementById('costBreakdownCard');
    if (!container) return;

    container.innerHTML = `
      <!-- CUADRITO DE DEFINICIÓN CONCEPTUAL DE COSTOS OPERATIVOS -->
      <div class="cost-definition-box" style="margin-bottom: 24px; padding: 20px; border-radius: var(--radius-lg); background: rgba(var(--purple-500-rgb), 0.04); border: 1.5px solid rgba(var(--purple-500-rgb), 0.15); display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 24px; align-items: start;">
        <div>
          <h4 style="font-size: 16.5px; color: var(--purple-700); font-weight: 800; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-info-circle" style="color: var(--purple-700);"></i> ¿Qué son los Costos Operativos?
          </h4>
          <p style="font-size: 13.5px; line-height: 1.6; color: var(--muted); margin: 0;">
            Los <strong>Costos Operativos (OpEx)</strong> en UniMarket son los egresos mensuales recurrentes necesarios para mantener la plataforma activa, segura y en constante crecimiento estudiantil. Se dividen en tres pilares clave para asegurar una operación <em>Bootstrap</em> de bajo costo y máxima eficiencia en el campus.
          </p>
        </div>
        <div style="display: grid; gap: 10px; font-size: 13px;">
          <div style="display: flex; gap: 10px; align-items: center;">
            <span style="font-size: 16px; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 8px; background: var(--lilac-100); color: var(--purple-700); flex-shrink: 0;"><i class="fas fa-server"></i></span>
            <div>
              <strong style="color: var(--ink);">1. Infraestructura Cloud:</strong>
              <span style="display: block; color: var(--muted); font-size: 12px;">Base de datos (Supabase PostgreSQL) y APIs (FastAPI backend).</span>
            </div>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <span style="font-size: 16px; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 8px; background: var(--pink-soft); color: var(--pink); flex-shrink: 0;"><i class="fas fa-bullhorn"></i></span>
            <div>
              <strong style="color: var(--ink);">2. Marketing de Guerrilla:</strong>
              <span style="display: block; color: var(--muted); font-size: 12px;">Volantes, tableros QR de facultades y captación por embajadores.</span>
            </div>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <span style="font-size: 16px; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 8px; background: #fffbeb; color: var(--gold); flex-shrink: 0;"><i class="fas fa-cogs"></i></span>
            <div>
              <strong style="color: var(--ink);">3. Soporte y Operación:</strong>
              <span style="display: block; color: var(--muted); font-size: 12px;">Moderación de posts in-app y resolución de incidencias en campus.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- DETALLE DE EGRESOS DEL ESCENARIO SELECCIONADO EN TABLA RESPONSIVE -->
      <div style="margin-bottom: 12px;">
        <h4 style="font-size: 16px; color: var(--ink); font-weight: 700; display: flex; align-items: center; gap: 8px; margin: 0;">
          <i class="fas fa-table" style="color: var(--purple-700);"></i> Detalle de Egresos por Mes: ${data.title}
        </h4>
        <p style="margin-top: 4px; font-size: 13.5px; line-height: 1.6; color: var(--muted);">${data.intro}</p>
      </div>

      <div class="table-wrap" style="margin-top: 12px; border: 1px solid var(--line); border-radius: var(--radius-md); overflow-x: auto; box-shadow: var(--shadow-soft);">
        <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; text-align: left; min-width: 720px;">
          <thead>
            <tr style="background: var(--lilac-100); color: var(--purple-700); border-bottom: 2px solid var(--line);">
              <th style="padding: 12px 16px; font-weight: 800;">Período / Mes</th>
              <th style="padding: 12px 16px; font-weight: 800; text-align: right;">Costo Total</th>
              <th style="padding: 12px 16px; font-weight: 800;"><i class="fas fa-server" style="color: var(--purple-700); margin-right: 4px;"></i> Infraestructura Cloud</th>
              <th style="padding: 12px 16px; font-weight: 800;"><i class="fas fa-bullhorn" style="color: var(--pink); margin-right: 4px;"></i> Marketing Guerrilla</th>
              <th style="padding: 12px 16px; font-weight: 800;"><i class="fas fa-cogs" style="color: var(--gold); margin-right: 4px;"></i> Operaciones</th>
            </tr>
          </thead>
          <tbody>
            ${data.items.map((item, index) => `
              <tr style="border-bottom: 1px solid var(--line); background: ${index % 2 === 0 ? 'rgba(var(--card-rgb), 0.3)' : 'rgba(var(--purple-500-rgb), 0.02)'}; transition: var(--transition);">
                <td style="padding: 14px 16px; font-weight: 700; color: var(--ink);">${item.period}</td>
                <td style="padding: 14px 16px; font-weight: 800; text-align: right; color: var(--purple-700); white-space: nowrap;">${item.total}</td>
                <td style="padding: 14px 16px; color: var(--muted); line-height: 1.45;">${item.server}</td>
                <td style="padding: 14px 16px; color: var(--muted); line-height: 1.45;">${item.marketing}</td>
                <td style="padding: 14px 16px; color: var(--muted); line-height: 1.45;">${item.ops}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderFinancials(key = 'base') {
    const rows = computeFinancialRows(key);
    const scenario = financialScenarios[key];
    
    document.querySelectorAll('.scenario-btn').forEach(b => b.classList.toggle('active', b.dataset.scenario === key));
    if (scenarioSelect && scenarioSelect.value !== key) scenarioSelect.value = key;
    
    const cashflowCaption = document.getElementById('cashflowCaption');
    if (cashflowCaption) cashflowCaption.textContent = scenario.label;
    
    const totalRevenue = rows.reduce((acc, r) => acc + r.subs + r.ads + r.commissions, 0);
    const totalCosts = rows.reduce((acc, r) => acc + r.costs, 0);
    const totalNet = rows.reduce((acc, r) => acc + r.net, 0);
    const m12 = rows[rows.length - 1];
    
    // Hallar punto de equilibrio (primer mes con neto > 0)
    const breakEvenRow = rows.find(r => r.net > 0);
    const breakEven = breakEvenRow ? `Mes ${breakEvenRow.month}` : 'Pendiente Año 2';

    const kpiWrap = document.getElementById('financeKpis');
    if (kpiWrap) {
      kpiWrap.innerHTML = `
        <article>
          <b>Alumnos Activos M12</b>
          <strong>${m12.users.toLocaleString('es-PE')}</strong>
          <span>Meta del piloto de 50 a escala</span>
        </article>
        <article>
          <b>Ingresos Brutos Anuales</b>
          <strong>${formatMoney(totalRevenue)}</strong>
          <span>Suscripciones, B2C y escrow</span>
        </article>
        <article>
          <b>Flujo Neto Anual</b>
          <strong class="${totalNet >= 0 ? '' : 'negative'}">${formatMoney(totalNet)}</strong>
          <span>Resultado neto restando costos</span>
        </article>
        <article>
          <b>Punto de Equilibrio</b>
          <strong>${breakEven}</strong>
          <span>Mes del primer flujo positivo</span>
        </article>
      `;
    }

    const tbody = document.querySelector('#cashflowTable tbody');
    if (tbody) {
      tbody.innerHTML = rows.map(r => `
        <tr>
          <td>Mes ${r.month}</td>
          <td>${r.users.toLocaleString('es-PE')}</td>
          <td>${formatMoney(r.subs)}</td>
          <td>${formatMoney(r.ads)}</td>
          <td>${formatMoney(r.commissions)}</td>
          <td>${formatMoney(r.costs)}</td>
          <td><strong style="color: ${r.net >= 0 ? 'var(--green)' : 'var(--danger)'}">${formatMoney(r.net)}</strong></td>
        </tr>
      `).join('');
    }

    // Dibujar gráficos Canvas
    drawCashFlow(rows);
    drawRevenueMix(m12);

    // Desglose dinámico de Costos
    renderCostBreakdown(key);
  }

  scenarioSelect?.addEventListener('change', (e) => {
    renderFinancials(e.target.value);
  });

  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderFinancials(btn.dataset.scenario);
    });
  });

  // ==========================================================================
  // GRÁFICOS PERSONALIZADOS EN CANVAS (THEMED AUTO-REDRAW)
  // ==========================================================================

  function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function drawCashFlow(rows) {
    const canvas = document.getElementById('cashFlowChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Hacer gráfico responsive con alta resolución
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width * 2 || 900;
    canvas.height = 360 * 2;
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
    
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.scale(2, 2); // Ajustar para duplicado de píxeles
    
    const canvasW = w / 2;
    const canvasH = h / 2;
    const padX = 64;
    const padY = 48;
    
    const values = rows.map(r => r.net);
    const max = Math.max(...values, 100);
    const min = Math.min(...values, -100);
    const range = max - min || 1;

    // Obtener variables de colores de CSS en tiempo real
    const colorLine = getCssVar('--line');
    const colorMuted = getCssVar('--muted');
    const colorInk = getCssVar('--ink');
    const colorChartA = getCssVar('--chart-a');
    const colorChartB = getCssVar('--chart-b');
    const colorGold = getCssVar('--gold');
    const colorCard = getCssVar('--card');

    // Dibujar guías y etiquetas del eje Y
    ctx.strokeStyle = colorLine;
    ctx.lineWidth = 1;
    ctx.font = '500 12px Inter, system-ui';
    ctx.fillStyle = colorMuted;
    ctx.textAlign = 'right';

    for (let i = 0; i < 5; i++) {
      const y = padY + ((canvasH - padY * 2) / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padX, y);
      ctx.lineTo(canvasW - padX, y);
      ctx.stroke();
      
      const valLabel = Math.round(max - (range / 4) * i);
      ctx.fillText(formatMoney(valLabel), padX - 10, y + 4);
    }

    // Dibujar línea de equilibrio (Cero)
    const yFor = v => padY + (max - v) / range * (canvasH - padY * 2);
    const zeroY = yFor(0);
    
    ctx.strokeStyle = colorGold;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 5]);
    ctx.beginPath();
    ctx.moveTo(padX, zeroY);
    ctx.lineTo(canvasW - padX, zeroY);
    ctx.stroke();
    ctx.setLineDash([]); // Restablecer

    // Dibujar línea de flujo de caja neto
    const xStep = (canvasW - padX * 2) / (rows.length - 1);
    
    // Rellenar área bajo la curva con gradiente sutil
    ctx.beginPath();
    ctx.moveTo(padX, zeroY);
    values.forEach((v, i) => {
      ctx.lineTo(padX + xStep * i, yFor(v));
    });
    ctx.lineTo(padX + xStep * (values.length - 1), zeroY);
    ctx.closePath();
    
    const areaGrad = ctx.createLinearGradient(0, padY, 0, canvasH - padY);
    areaGrad.addColorStop(0, hexToRgba(colorChartA, 0.15));
    areaGrad.addColorStop(1, hexToRgba(colorChartA, 0.0));
    ctx.fillStyle = areaGrad;
    ctx.fill();

    // Dibujar línea principal con gradiente
    const lineGrad = ctx.createLinearGradient(padX, 0, canvasW - padX, 0);
    lineGrad.addColorStop(0, colorChartA);
    lineGrad.addColorStop(0.5, colorChartB);
    lineGrad.addColorStop(1, colorChartA);
    
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 4;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    
    ctx.beginPath();
    values.forEach((v, i) => {
      const x = padX + xStep * i;
      const y = yFor(v);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Dibujar nodos de los meses
    values.forEach((v, i) => {
      const x = padX + xStep * i;
      const y = yFor(v);
      
      ctx.fillStyle = colorCard;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = colorChartA;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.stroke();
      
      // Etiquetas de los meses
      ctx.fillStyle = colorMuted;
      ctx.font = '600 11px Inter, system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(`M${i + 1}`, x, canvasH - 18);
    });
  }

  function drawRevenueMix(m12) {
    const canvas = document.getElementById('revenueMixChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width * 2 || 620;
    canvas.height = 360 * 2;
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
    
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.scale(2, 2);
    
    const canvasW = w / 2;
    const canvasH = h / 2;
    
    const values = [m12.subs, m12.ads, m12.commissions];
    const labels = ['Suscripciones', 'Publicidad B2C', 'Comisiones'];
    const colors = [getCssVar('--chart-a'), getCssVar('--chart-b'), getCssVar('--chart-c')];
    const total = values.reduce((a, b) => a + b, 0) || 1;

    const cx = canvasW / 2;
    const cy = canvasH / 2 - 15;
    const radius = 95;
    let startAngle = -Math.PI / 2;

    // Dibujar torta/donut
    values.forEach((v, i) => {
      const sliceAngle = (v / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = colors[i];
      ctx.fill();
      startAngle += sliceAngle;
    });

    // Donut hole
    ctx.fillStyle = getCssVar('--card');
    ctx.beginPath();
    ctx.arc(cx, cy, 50, 0, Math.PI * 2);
    ctx.fill();

    // Texto interior del total
    ctx.fillStyle = getCssVar('--ink');
    ctx.font = '800 15px Outfit, system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Ingresos M12', cx, cy - 4);
    
    ctx.font = '800 16px Inter, system-ui';
    ctx.fillStyle = getCssVar('--purple-800');
    ctx.fillText(formatMoney(total), cx, cy + 14);

    // Leyendas informativas
    ctx.textAlign = 'left';
    ctx.font = '600 12.5px Inter, system-ui';
    
    values.forEach((v, i) => {
      const legendY = canvasH - 74 + i * 24;
      ctx.fillStyle = colors[i];
      ctx.fillRect(24, legendY - 10, 14, 14);
      
      ctx.fillStyle = getCssVar('--muted');
      const pct = Math.round((v / total) * 100);
      ctx.fillText(`${labels[i]}: ${formatMoney(v)} (${pct}%)`, 46, legendY);
    });
  }

  // Helper útil para convertir hexadecimales CSS a RGBA para gradientes
  function hexToRgba(hex, alpha = 1.0) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // ==========================================================================
  // SWITCHER DE PALETAS DE COLORES (DIBUJADO E INTERACCIÓN)
  // ==========================================================================

  function renderPalettes() {
    const container = document.getElementById('paletteSwitcher');
    if (!container) return;

    container.innerHTML = palettes.map(p => `
      <article class="palette-card ${p.key === currentTheme ? 'active' : ''}" data-palette="${p.key}">
        <h3>${p.name}</h3>
        <p>${p.note}</p>
        <div class="palette-swatches">
          ${p.colors.map(c => `<span style="background: ${c}"></span>`).join('')}
        </div>
        <button class="apply-palette-btn" data-target-palette="${p.key}">Aplicar Paleta</button>
      </article>
    `).join('');

    container.querySelectorAll('.apply-palette-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pKey = btn.dataset.targetPalette;
        applyThemeAndMode(pKey, currentMode);
      });
    });
    
    container.querySelectorAll('.palette-card').forEach(card => {
      card.addEventListener('click', () => {
        const pKey = card.dataset.palette;
        applyThemeAndMode(pKey, currentMode);
      });
    });
  }

  // Escuchar redimensionados de pantalla para recálculo de Canvas
  window.addEventListener('resize', () => {
    if (document.getElementById('finanzas').classList.contains('active')) {
      renderFinancials(scenarioSelect ? scenarioSelect.value : 'base');
    }
  });

  // Escuchar clicks en los botones rápidos de paleta en la barra lateral
  document.querySelectorAll('.quick-palette-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const pKey = dot.dataset.quickPalette;
      applyThemeAndMode(pKey, currentMode);
    });
  });

  // Ejecución inicial en carga
  applyThemeAndMode(currentTheme, currentMode);
  renderMoscow('must');
  renderSprints();
  renderIdeas();
  renderPalettes();
  updateActiveNav();
});
