// Full EN/ES site swap — every visible string lives here as key → { en, es }.
// The toggle swaps the whole site's copy in place; choice persists for the
// session only (in-memory, per brief).

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
  'hero.sub': {
    en: 'The Olea Group is a boutique brokerage in Cape Coral built for independent agents: 24/7 office access, exclusive moving-truck access for clients, a bilingual and collaborative environment, and a user-friendly transaction system with an easy checklist.',
    es: 'The Olea Group es un brokerage boutique en Cape Coral creado para agentes independientes: acceso a la oficina las 24 horas, acceso exclusivo al camión de mudanza para clientes, un ambiente bilingüe y colaborativo, y un sistema de transacciones fácil de usar con una lista de verificación sencilla.',
  },
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
    en: 'Your production stays yours. There is no commission split taken from each closing.',
    es: 'Tu producción sigue siendo tuya. No se descuenta un split de comisión en cada cierre.',
  },
  'offer.p2.h': {
    en: 'Optional one-on-one support with the broker.',
    es: 'Apoyo individual opcional con la broker.',
  },
  'offer.p2.p': {
    en: 'Choose paid individual guidance from the Managing Broker when you want more direct support. It is an option, not a required service.',
    es: 'Elige orientación individual pagada con la Broker Administradora cuando quieras un apoyo más directo. Es una opción, no un servicio obligatorio.',
  },
  'offer.p3.h': {
    en: 'Low monthly fee. Flat transaction fee. No caps.',
    es: 'Cuota mensual baja. Tarifa fija por transacción. Sin topes.',
  },
  'offer.p3.p': {
    en: 'Those are the only required brokerage costs. There is nothing else to pay unless you choose an optional CRM, qualified leads, or one-on-one support.',
    es: 'Esos son los únicos costos obligatorios del brokerage. No hay nada más que pagar a menos que elijas un CRM opcional, leads calificados o apoyo individual.',
  },
  'calc.toggle': { en: 'Run your numbers ▾', es: 'Calcula tus números ▾' },
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
    en: 'We do not provide marketing or design services. As a courtesy, we may share agent listings and wins; clients can also reserve the moving truck.',
    es: 'No brindamos servicios de marketing ni de diseño. Como cortesía, podemos compartir los listados y logros de los agentes; los clientes también pueden reservar el camión de mudanza.',
  },
  'culture.r4.h': { en: 'Rooted in SWFL', es: 'Raíces en SWFL' },
  'culture.r4.p': {
    en: 'A bilingual brokerage with practical access across Cape Coral, Fort Myers, Lehigh Acres, North Fort Myers, and Lee County.',
    es: 'Un brokerage bilingüe con acceso práctico en Cape Coral, Fort Myers, Lehigh Acres, North Fort Myers y Lee County.',
  },

  // --- 4 · proof ---
  'proof.eyebrow': { en: 'Proof', es: 'Resultados' },
  'proof.title': { en: "Independent doesn't mean unclear.", es: 'Independiente no significa sin claridad.' },
  'proof.lead': {
    en: 'The brokerage provides required broker and compliance review while agents retain control of their day-to-day business. Paid one-on-one support is available only when an agent chooses more direct guidance.',
    es: 'El brokerage brinda la revisión requerida de broker y cumplimiento mientras los agentes mantienen el control de su negocio diario. El apoyo individual pagado está disponible solo cuando un agente elige una orientación más directa.',
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
    en: 'Keep 100% of the commission you earn. The only required costs are a low monthly fee and a flat transaction fee, with no caps.',
    es: 'Conserva el 100% de la comisión que generas. Los únicos costos obligatorios son una cuota mensual baja y una tarifa fija por transacción, sin topes.',
  },
  'inc.r2.h': { en: 'Low monthly fees', es: 'Cuotas mensuales bajas' },
  'inc.r2.p': {
    en: 'Simple, predictable pricing with no split or franchise percentage taken from your commission. Nothing else is required unless you choose an optional service.',
    es: 'Precios simples y predecibles, sin splits ni porcentajes de franquicia descontados de tu comisión. No se requiere nada más a menos que elijas un servicio opcional.',
  },
  'inc.r3.h': { en: 'Optional one-on-one support', es: 'Apoyo individual opcional' },
  'inc.r3.p': {
    en: 'Paid one-on-one support is available for agents who choose more direct guidance from the Managing Broker.',
    es: 'El apoyo individual pagado está disponible para los agentes que eligen una orientación más directa de la Broker Administradora.',
  },
  'inc.r4.h': { en: 'Broker & compliance review', es: 'Revisión de broker y cumplimiento' },
  'inc.r4.p': {
    en: 'Independent agents manage their own day-to-day business. The brokerage provides required broker and compliance review, while direct one-on-one support remains a paid option.',
    es: 'Los agentes independientes manejan su negocio diario. El brokerage brinda la revisión requerida de broker y cumplimiento, mientras que el apoyo individual directo sigue siendo una opción pagada.',
  },
  'inc.r5.h': { en: 'Optional CRM & qualified lead tools', es: 'CRM y herramientas de leads calificados opcionales' },
  'inc.r5.p': {
    en: 'Choose a user-friendly CRM and qualified-lead option for an additional charge when they fit your business. Neither is included or guaranteed.',
    es: 'Elige un CRM fácil de usar y una opción de leads calificados por un cargo adicional cuando encajen con tu negocio. Ninguno está incluido ni garantizado.',
  },
  'inc.r6.h': { en: 'Courtesy promotion for agent wins', es: 'Promoción de cortesía para los logros de agentes' },
  'inc.r6.p': {
    en: 'We do not provide marketing or design services. As a courtesy, the brokerage may share agent listings and wins through its marketing channels.',
    es: 'No brindamos servicios de marketing ni de diseño. Como cortesía, el brokerage puede compartir los listados y logros de los agentes a través de sus canales de marketing.',
  },
  'inc.r7.h': { en: 'Complimentary client moving truck', es: 'Camión de mudanza de cortesía para clientes' },
  'inc.r7.p': {
    en: 'Reserve The Olea Group moving truck for clients at no additional charge, subject to scheduling and availability.',
    es: 'Reserva el camión de mudanza de The Olea Group para clientes sin cargo adicional, sujeto a programación y disponibilidad.',
  },
  'inc.r8.h': { en: 'Easy transaction-system checklist', es: 'Lista de verificación sencilla en el sistema de transacciones' },
  'inc.r8.p': {
    en: 'The brokerage does not provide transaction coordinators. Instead, our user-friendly transaction system gives you an easy checklist to stay organized and see what comes next.',
    es: 'El brokerage no proporciona coordinadores de transacciones. En su lugar, nuestro sistema de transacciones fácil de usar te ofrece una lista de verificación sencilla para mantenerte organizado y saber qué sigue.',
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
  'faq.eyebrow': { en: 'FAQ', es: 'Preguntas' },
  'faq.title': { en: "The questions you're already asking.", es: 'Las preguntas que ya te estás haciendo.' },
  'faq.q1': { en: 'What does 100% commission actually mean here?', es: '¿Qué significa realmente el 100% de comisión aquí?' },
  'faq.a1': {
    en: 'You keep your full commission and pay a low monthly fee plus a flat transaction fee. There are no splits, no caps, and no other required brokerage charges. You only pay more if you choose an optional CRM, qualified leads, or one-on-one support.',
    es: 'Te quedas con toda tu comisión y pagas una cuota mensual baja más una tarifa fija por transacción. No hay splits, topes ni otros cargos obligatorios del brokerage. Solo pagas más si eliges un CRM opcional, leads calificados o apoyo individual.',
  },
  'faq.q2': { en: 'Am I locked into a contract?', es: '¿Quedo amarrado a un contrato?' },
  'faq.a2': {
    en: 'No long-term lock-in. The model is built for independent agents who want flexibility, not a contract that makes the decision for them.',
    es: 'No hay amarre a largo plazo. El modelo está creado para agentes independientes que quieren flexibilidad, no un contrato que decida por ellos.',
  },
  'faq.q3': { en: 'Is it easy to make a private move?', es: '¿Es fácil hacer un cambio privado?' },
  'faq.a3': {
    en: 'Yes. A transition can be private and simple. The Managing Broker will talk through your current situation and pending business with you before you decide anything.',
    es: 'Sí. Una transición puede ser privada y sencilla. La Broker Administradora hablará contigo sobre tu situación actual y negocios pendientes antes de que decidas algo.',
  },
  'faq.q4': { en: 'Do I get leads?', es: '¿Me dan leads?' },
  'faq.a4': {
    en: 'Leads are not included or guaranteed. A qualified lead option may be available for an additional charge if it fits your business.',
    es: 'Los leads no están incluidos ni garantizados. Puede haber una opción de leads calificados por un cargo adicional si encaja con tu negocio.',
  },
  'faq.q5': { en: 'Do you provide transaction coordinators?', es: '¿Proporcionan coordinadores de transacciones?' },
  'faq.a5': {
    en: 'No. The brokerage does not provide transaction coordinators. Our transaction system includes an easy checklist to help you organize the next steps yourself.',
    es: 'No. El brokerage no proporciona coordinadores de transacciones. Nuestro sistema de transacciones incluye una lista de verificación sencilla para ayudarte a organizar los próximos pasos por tu cuenta.',
  },
  'faq.q6': { en: 'Is the company really bilingual?', es: '¿La compañía es realmente bilingüe?' },
  'faq.a6': {
    en: 'Yes. Our broker is fluent in English and Spanish. Most of our agents also speak both languages, and the brokerage has a collaborative, friendly environment.',
    es: 'Sí. Nuestra broker habla inglés y español con fluidez. La mayoría de nuestros agentes también hablan ambos idiomas, y el brokerage tiene un ambiente colaborativo y amable.',
  },

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
    en: 'Cape Coral · Fort Myers · Lehigh Acres · North Fort Myers · all of Lee County',
    es: 'Cape Coral · Fort Myers · Lehigh Acres · North Fort Myers · todo Lee County',
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
}
