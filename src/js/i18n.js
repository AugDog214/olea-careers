// Full EN/ES site swap — every visible string lives here as key → { en, es }.
// The toggle swaps the whole site's copy in place; choice persists for the
// session only (in-memory, per brief).

import { faqEntries, faqGroups, faqSchema } from './faq-content.js';

export const strings = {
  // --- chrome ---
  'nav.offer': { en: 'The offer', es: 'La oferta' },
  'nav.edge': { en: 'The edge', es: 'La ventaja' },
  'nav.proof': { en: 'Proof', es: 'Resultados' },
  'nav.faq': { en: 'FAQ', es: 'Preguntas' },
  'nav.mainsite': { en: 'MyOleaGroup.com', es: 'MyOleaGroup.com' },
  'ms.home': { en: 'Home', es: 'Inicio' },
  'ms.listings': { en: 'All listings', es: 'Propiedades' },
  'ms.sell': { en: 'Sell my home', es: 'Vender mi casa' },
  'ms.valuation': { en: 'Home valuation', es: 'Valuación de casa' },
  'ms.about': { en: 'About us', es: 'Nosotros' },
  'ms.reviews': { en: 'Reviews', es: 'Reseñas' },
  'cta.header': { en: 'Talk to the Managing Broker — confidential', es: 'Habla con la Broker Administradora — confidencial' },
  'cta.melt': { en: 'Talk to the Managing Broker', es: 'Habla con la Broker Administradora' },

  // --- 1 · hero ---
  'hero.title': { en: 'Join us', es: 'Únete a nosotros' },
  'hero.word.join': { en: 'JOIN', es: 'ÚNETE' },
  'hero.word.us': { en: 'US', es: 'HOY' },
  'hero.statement': { en: 'Independent agents. A brokerage that fits.', es: 'Agentes independientes. Una agencia a tu medida.' },
  'hero.sub': {
    en: 'The Olea Group is a boutique Cape Coral brokerage for independent agents, with 24/7 office access, a complimentary client moving truck, bilingual support, a collaborative environment, and user-friendly transaction software.',
    es: 'The Olea Group es una agencia boutique de Cape Coral para agentes independientes, con acceso a la oficina las 24 horas, un camión de mudanza de cortesía para clientes, apoyo bilingüe, un ambiente colaborativo y un sistema de transacciones fácil de usar.',
  },
  'hero.benefits.access': { en: '24/7 office access. A complimentary client moving truck.', es: 'Oficina disponible las 24 horas. Camión de mudanza gratuito para clientes.' },
  'hero.benefits.work': { en: 'Bilingual collaboration. Simple transactions. Clear checklists.', es: 'Colaboración bilingüe. Transacciones sencillas. Listas de verificación claras.' },
  'cta.hero': { en: 'Schedule a confidential chat', es: 'Agenda una charla confidencial' },
  'hero.micro': {
    en: 'Licensed Florida brokerage · LIC BK 3428799 · Hablamos Español',
    es: 'Brokerage con licencia de Florida · LIC BK 3428799 · We speak English',
  },

  // --- 2 · the offer ---
  'offer.eyebrow': { en: 'The offer', es: 'La oferta' },
  'offer.title': {
    en: 'You do the producing. You keep the money.',
    es: 'Tú produces. Tú te quedas con el dinero.',
  },
  'offer.p1.h': { en: 'Keep 100% of your commission.', es: 'Quédate con el 100% de tu comisión.' },
  'offer.p1.p': {
    en: 'Choose 100% commission for independent agents, or the 70/30 support plan for your first three residential sales before moving to 100%.',
    es: 'Elige el 100% de comisión para agentes independientes, o el plan de apoyo 70/30 para tus primeras tres ventas residenciales antes de pasar al 100%.',
  },
  'offer.p2.h': {
    en: 'Optional one-on-one support with the broker.',
    es: 'Apoyo individual opcional con la broker.',
  },
  'offer.p2.p': {
    en: 'Broker guidance is available on both plans. Choose the optional bilingual 30-Day Agent Success Program for structured one-on-one training and mentorship.',
    es: 'Ambos planes ofrecen orientación de la broker. Elige el Programa de Éxito para Agentes de 30 Días para formación estructurada y mentoría individual bilingüe.',
  },
  'offer.p3.h': {
    en: '$131.84 monthly. Clear transaction fees.',
    es: '$131.84 al mes. Tarifas de transacción claras.',
  },
  'offer.p3.p': {
    en: '$99 platform and license holding + $29 E&O insurance + 3% card processing. Due at joining, then on the 1st of each month. Transaction and file review fees apply separately; see the fact sheets below.',
    es: '$99 por plataforma y afiliación de licencia + $29 de seguro E&O + 3% de procesamiento de tarjeta. Se paga al unirte y el día 1 de cada mes. Las tarifas de transacción y revisión de expediente son independientes; consulta las fichas abajo.',
  },
  'calc.toggle': { en: 'See how much more you could keep ▾', es: 'Descubre cuánto más podrías conservar ▾' },
  'hero.previous': { en: '←', es: '←' },
  'hero.next': { en: '→', es: '→' },
  'hero.pause': { en: 'Pause motion', es: 'Pausar movimiento' },
  'hero.resume': { en: 'Play motion', es: 'Reproducir movimiento' },
  'calc.gci': { en: "Annual GCI", es: 'GCI anual' },
  'calc.tx': { en: 'Closed transactions', es: 'Transacciones cerradas' },
  'calc.split': { en: 'Your current split', es: 'Tu split actual' },
  'calc.cta': { en: 'Talk to the Managing Broker about your numbers →', es: 'Habla con la Broker Administradora sobre tus números →' },

  // --- 3 · the edge ---
  'edge.eyebrow': { en: 'What makes us different', es: 'Lo que nos hace diferentes' },
  'edge.title': {
    en: 'A simpler model. A broader reach.',
    es: 'Un modelo más simple. Un alcance más amplio.',
  },
  'edge.e1.h': { en: 'Independent by design.', es: 'Independiente por diseño.' },
  'edge.e1.p': {
    en: 'Run your business with 24/7 office access, broker and compliance review, a user-friendly transaction system with an easy checklist, and optional services only when they fit your business.',
    es: 'Dirige tu negocio con acceso a la oficina las 24 horas, revisión de broker y cumplimiento, un sistema de transacciones fácil de usar con una lista de verificación sencilla, y servicios opcionales solo cuando encajen con tu negocio.',
  },
  'edge.e2.h': { en: 'Bilingual by nature.', es: 'Bilingüe por naturaleza.' },
  'edge.e2.p': {
    en: 'The Managing Broker is fluent in English and Spanish, and most Olea Group agents also speak both languages. It is a practical advantage for serving both markets.',
    es: 'La Broker Administradora habla inglés y español con fluidez, y la mayoría de los agentes de The Olea Group también hablan ambos idiomas. Es una ventaja práctica para servir a ambos mercados.',
  },

  // --- 4 · proof: Heidy quote (word-split by quote-scrub, no data-i18n) ---
  'quote.q': {
    en: "I built The Olea Group for independent agents who want a simpler brokerage: keep what you earn, use the practical tools you need, and choose one-on-one guidance when you want it. You're not a number here. You're the business.",
    es: 'Construí The Olea Group para agentes independientes que quieren un brokerage más simple: quédate con lo que ganas, usa las herramientas prácticas que necesitas y elige orientación individual cuando la quieras. Aquí no eres un número. Eres el negocio.',
  },
  'quote.name': { en: 'Heidy Olea', es: 'Heidy Olea' },
  'quote.role': { en: 'Managing Broker', es: 'Broker Administradora' },

  // --- 4.5 · culture ---
  'culture.eyebrow': { en: 'Culture', es: 'Cultura' },
  'culture.title': {
    en: 'A professional home base, on your terms.',
    es: 'Una base profesional, en tus propios términos.',
  },
  'culture.r1.h': { en: 'Your business, your way', es: 'Tu negocio, a tu manera' },
  'culture.r1.p': {
    en: 'Independent agents run their own day-to-day business, with a clear home base in Cape Coral when they need it.',
    es: 'Los agentes independientes manejan su negocio diario, con una base clara en Cape Coral cuando la necesitan.',
  },
  'culture.r2.h': { en: 'Mentorship, when you choose it', es: 'Mentoría, cuando tú la eliges' },
  'culture.r2.p': {
    en: 'Paid one-on-one support with the Managing Broker is available for agents who choose more direct guidance.',
    es: 'El apoyo individual pagado con la Broker Administradora está disponible para los agentes que eligen una orientación más directa.',
  },
  'culture.r3.h': { en: 'Closing day', es: 'Día de cierre' },
  'culture.r3.p': {
    en: 'When requested, we offer complimentary exposure for agent listings and wins across our platforms on a rotating basis.',
    es: 'A solicitud del agente, ofrecemos exposición de cortesía para listados y logros en nuestras plataformas, por turnos.',
  },
  'culture.r4.h': { en: 'Rooted in SWFL', es: 'Raíces en SWFL' },
  'culture.r4.p': {
    en: 'A bilingual brokerage with a home base in Cape Coral and an extensive Florida service area.',
    es: 'Un brokerage bilingüe con una base en Cape Coral y una amplia área de servicio en Florida.',
  },

  // --- 4 · proof ---
  'proof.eyebrow': { en: 'Proof', es: 'Resultados' },
  'proof.title': { en: "Independent doesn't mean unclear.", es: 'Independiente no significa sin claridad.' },
  'proof.lead': {
    en: 'Broker and compliance guidance is available on both plans. New agents can choose direct assistance during their first three residential sales, with ongoing one-on-one mentorship available through the optional 30-Day Agent Success Program.',
    es: 'Ambos planes ofrecen orientación de la broker y de cumplimiento. Los agentes nuevos pueden elegir asistencia directa en sus primeras tres ventas residenciales, y mentoría continua mediante el programa opcional de 30 días.',
  },
  'proof.voices.eyebrow': { en: 'Agent voices', es: 'Voces de agentes' },
  'proof.voices.title': { en: 'Hear why agents choose Olea.', es: 'Escucha por qué los agentes eligen Olea.' },
  'proof.voices.team': { en: 'Olea team', es: 'Equipo Olea' },
  'proof.voices.label': { en: 'Agent perspective', es: 'Perspectiva de agente' },
  'proof.s1.label': { en: 'Closed volume', es: 'Volumen cerrado' },
  'proof.s1.value': { en: '$—M', es: '$—M' },
  'proof.s2.label': { en: 'Transactions', es: 'Transacciones' },
  'proof.s2.value': { en: '—', es: '—' },
  'proof.s3.label': { en: 'Agents', es: 'Agentes' },
  'proof.s3.value': { en: '—', es: '—' },
  // --- 5 · what's included ---
  'inc.eyebrow': { en: 'What we offer', es: 'Lo que ofrecemos' },
  'inc.title': {
    en: 'A simple brokerage. The tools you choose.',
    es: 'Un brokerage simple. Las herramientas que eliges.',
  },
  'inc.mls.title': { en: 'MLS access across Florida markets', es: 'Acceso MLS en mercados de Florida' },
  'inc.r1.h': { en: '100% commission structure', es: 'Estructura de comisión al 100%' },
  'inc.r1.p': {
    en: 'Choose the 100% commission plan for independent agents, or a 70/30 support plan for your first three residential sales. Monthly and applicable transaction fees are separate.',
    es: 'Elige el plan de 100% de comisión para agentes independientes o el plan de apoyo 70/30 para tus primeras tres ventas residenciales. Las cuotas mensuales y tarifas por transacción son independientes.',
  },
  'inc.r2.h': { en: 'Low monthly fees', es: 'Cuotas mensuales bajas' },
  'inc.r2.p': {
    en: '$131.84 due at joining and monthly thereafter: $99 platform and license holding, $29 E&O insurance, and 3% card processing. The fee is not prorated and renews on the 1st.',
    es: '$131.84 al unirte y cada mes: $99 por plataforma y afiliación de licencia, $29 de seguro E&O y 3% de procesamiento de tarjeta. No se prorratea y se renueva el día 1.',
  },
  'inc.r3.h': { en: '30-Day Agent Success Program', es: 'Programa de Éxito para Agentes de 30 Días' },
  'inc.r3.p': {
    en: 'Optional bilingual one-on-one mentorship with Heidy: structured weekly lessons, assignments, accountability, buyer and seller training, and a certificate of completion. Available separately.',
    es: 'Mentoría individual bilingüe opcional con Heidy: lecciones semanales, tareas, seguimiento, formación para compradores y vendedores y certificado de finalización. Disponible por separado.',
  },
  'inc.r4.h': { en: 'Broker & compliance review', es: 'Revisión de broker y cumplimiento' },
  'inc.r4.p': {
    en: 'Reach the broker for contract, negotiation, timeline, and compliance questions. Office hours are Monday–Friday, 9 AM–5 PM; text after hours for urgent, time-sensitive matters.',
    es: 'Contacta a la broker por dudas de contratos, negociaciones, plazos y cumplimiento. El horario es de lunes a viernes de 9 AM a 5 PM; fuera de horario, escribe para asuntos urgentes.',
  },
  'inc.r5.h': { en: 'Back-office tools & resource library', es: 'Herramientas y biblioteca de recursos' },
  'inc.r5.p': {
    en: 'Use our transaction platform and mobile app, brokerage forms, templates, video tutorials, and vendor resources. You bring your own clients and build your business your way.',
    es: 'Usa la plataforma de transacciones y aplicación móvil, formularios, plantillas, videos y recursos de proveedores. Tú traes tus clientes y desarrollas tu negocio a tu manera.',
  },
  'inc.r6.h': { en: 'Complimentary exposure for agent wins', es: 'Exposición de cortesía para los logros de agentes' },
  'inc.r6.p': {
    en: 'When requested, we offer complimentary exposure for agent listings and wins across our platforms on a rotating basis.',
    es: 'A solicitud del agente, ofrecemos exposición de cortesía para listados y logros en nuestras plataformas, por turnos.',
  },
  'inc.r7.h': { en: 'Complimentary client moving truck', es: 'Camión de mudanza de cortesía para clientes' },
  'inc.r7.p': {
    en: 'Reserve The Olea Group moving truck for clients at no additional charge, subject to scheduling and availability.',
    es: 'Reserva el camión de mudanza de The Olea Group para clientes sin cargo adicional, sujeto a programación y disponibilidad.',
  },
  'inc.r8.h': { en: 'Easy transactions', es: 'Transacciones sencillas' },
  'inc.r8.p': {
    en: 'The brokerage is affiliated with a bilingual transaction coordinator team that offers a low fee per transaction. Our resource library and checklists help you stay organized and see what comes next.',
    es: 'El brokerage está afiliado a un equipo bilingüe de coordinadores de transacciones que ofrece una tarifa baja por transacción. Nuestra biblioteca de recursos y listas de verificación te ayudan a mantenerte organizado y saber qué sigue.',
  },
  'inc.r9.h': { en: 'Up-to-date & transparent sales tracking', es: 'Seguimiento de ventas actualizado y transparente' },
  'inc.r9.p': {
    en: 'Clear, current sales tracking gives agents visibility into recorded production and performance.',
    es: 'El seguimiento claro y actualizado de ventas da a los agentes visibilidad de la producción y el rendimiento registrados.',
  },
  'inc.r10.h': { en: 'Office content room', es: 'Sala de contenido en la oficina' },
  'inc.r10.p': {
    en: 'The office content room gives you a place to create polished listing, video, and social content for your business.',
    es: 'La sala de contenido de la oficina te da un lugar para crear contenido profesional de listados, video y redes sociales para tu negocio.',
  },
  'inc.r11.h': { en: 'Professional conference room', es: 'Sala de conferencias profesional' },
  'inc.r11.p': {
    en: 'Our conference room gives you a professional setting to finalize deals and present to buyers and sellers. It provides a comfortable environment in a central Cape Coral location.',
    es: 'Nuestra sala de conferencias te brinda un entorno profesional para finalizar acuerdos y presentar a compradores y vendedores. Ofrece un ambiente cómodo en una ubicación céntrica de Cape Coral.',
  },
  'inc.callback': {
    en: 'Simple essentials. Straightforward options.',
    es: 'Lo esencial, simple. Las opciones, claras.',
  },

  // --- 6 · faq ---
  'facts.open': { en: 'Open full-size English fact sheet ↗', es: 'Abrir ficha completa en inglés ↗' },
  'systems.title': { en: 'See the tools in action.', es: 'Mira las herramientas en acción.' },
  'systems.intro': { en: 'A look inside our back-office system: track sales production and keep transaction documents organized.', es: 'Una mirada a nuestro sistema: sigue la producción y organiza los documentos de tus transacciones.' },
  'systems.pipeline': { en: 'Sales production & pipeline', es: 'Producción de ventas y pipeline' },
  'systems.checklist': { en: 'Transaction documents & checklist', es: 'Documentos y lista de verificación' },
  'systems.caption': { en: 'Supplied system screenshots. Figures and listing details reflect the captured records.', es: 'Capturas del sistema proporcionadas. Las cifras y los detalles reflejan los registros capturados.' },
  'systems.open': { en: 'View full screenshot ↗', es: 'Ver captura completa ↗' },
  'faq.eyebrow': { en: 'Facts & questions', es: 'Datos y preguntas' },
  'faq.title': { en: "The questions you're already asking.", es: 'Las preguntas que ya te estás haciendo.' },

  // --- 7 · final cta ---
  'contact.eyebrow': { en: 'The next step', es: 'El siguiente paso' },
  'contact.title': { en: "A confidential conversation. That's it.", es: 'Una conversación confidencial. Eso es todo.' },
  'contact.sub': {
    en: 'No recruiting script, no pressure. Bring your numbers, ask anything, and decide on your own timeline. Every conversation starts privately.',
    es: 'Sin guion de reclutamiento, sin presión. Trae tus números, pregunta lo que sea y decide a tu ritmo. Cada conversación comienza de forma privada.',
  },
  'form.name': { en: 'Name', es: 'Nombre' },
  'form.phone': { en: 'Phone', es: 'Teléfono' },
  'form.email': { en: 'Email', es: 'Correo electrónico' },
  'form.brokerage': { en: 'Current brokerage (optional)', es: 'Brokerage actual (opcional)' },
  'form.reason': {
    en: "What's the #1 reason you're considering a move?",
    es: '¿Cuál es la razón #1 por la que consideras un cambio?',
  },
  'form.submit': { en: 'Schedule my confidential chat', es: 'Agendar mi charla confidencial' },
  'form.micro': {
    en: '100% confidential. No pressure, no obligation.',
    es: '100% confidencial. Sin presión, sin compromiso.',
  },
  'form.emailNote': { en: 'Prefer email? theoleagroup@gmail.com', es: '¿Prefieres correo? theoleagroup@gmail.com' },

  // --- footer ---
  'footer.tag': {
    en: 'Real estate & construction, serving all of Southwest Florida.',
    es: 'Bienes raíces y construcción, sirviendo a todo el suroeste de Florida.',
  },
  'footer.contactH': { en: 'Contact', es: 'Contacto' },
  'footer.areasH': { en: 'Service areas', es: 'Áreas de servicio' },
  'footer.areas': {
    en: 'Lee County · Hendry County (LaBelle) · Broward & Miami-Dade counties · Sarasota County (North Port) · Charlotte County (Punta Gorda)',
    es: 'Condado de Lee · Condado de Hendry (LaBelle) · Condados de Broward y Miami-Dade · Condado de Sarasota (North Port) · Condado de Charlotte (Punta Gorda)',
  },
  'footer.license': {
    en: 'Heidy Olea, Managing Broker · LIC BK 3428799',
    es: 'Heidy Olea, Broker Administradora · LIC BK 3428799',
  },
  'footer.equal': {
    en: 'Equal Housing Opportunity. The Olea Group Real Estate & Construction, LLC supports the Fair Housing Act and equal opportunity in housing.',
    es: 'Igualdad de Oportunidades de Vivienda. The Olea Group Real Estate & Construction, LLC apoya la Ley de Vivienda Justa y la igualdad de oportunidades en la vivienda.',
  },
};

// One source of truth for both the indexable HTML and translated FAQ content.
faqEntries.forEach((entry, index) => {
  strings[`faq.q${index + 1}`] = { en: entry.en[0], es: entry.es[0] };
  strings[`faq.a${index + 1}`] = { en: entry.en[1], es: entry.es[1] };
});
faqGroups.forEach((group) => {
  strings[`faq.group.${group.id}`] = group.label;
});

let lang = 'en';

export function currentLang() {
  return lang;
}

// listeners other modules attach to run on every language change
const onChange = [];
export function onLangChange(fn) {
  onChange.push(fn);
}

export function setLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  const schemaElement = document.querySelector('script[type="application/ld+json"]');
  if (schemaElement) {
    const schema = JSON.parse(schemaElement.textContent);
    const faq = schema['@graph']?.find(node => node['@type'] === 'FAQPage');
    if (faq) {
      faq.mainEntity = faqSchema(lang);
      schemaElement.textContent = JSON.stringify(schema);
    }
  }
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = strings[el.dataset.i18n];
    if (entry) el.textContent = entry[lang];
  });
  // segmented EN | ES toggle — highlight the active side
  document.querySelectorAll('#lang-toggle .lang-opt').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  onChange.forEach((fn) => fn(lang));
}

export function initI18n() {
  document.querySelectorAll('#lang-toggle .lang-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang !== lang) setLang(btn.dataset.lang);
    });
  });
  // Apply the English source of truth on first paint too; fallback HTML must
  // never become a second, stale set of recruitment claims.
  setLang(lang);
}
