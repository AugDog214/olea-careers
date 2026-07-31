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
  'cta.header': { en: 'Talk to Heidy — confidential', es: 'Habla con Heidy — confidencial' },
  'cta.melt': { en: 'Talk to Heidy', es: 'Habla con Heidy' },

  // --- 1 · hero ---
  'hero.title1': { en: 'Keep 100%.', es: 'Quédate con el 100%.' },
  'hero.title2': { en: 'Never work alone.', es: 'Nunca solo.' },
  'hero.sub': {
    en: 'The Olea Group is a boutique brokerage in Cape Coral, Florida, built for independent agents. Agents receive 24/7 office access, exclusive moving-truck access for clients, a bilingual brokerage, a friendly and clean work environment, and user-friendly transaction software.',
    es: 'The Olea Group es un brokerage boutique en Cape Coral, Florida, creado para agentes independientes. Los agentes tienen acceso a la oficina las 24 horas, acceso exclusivo al camión de mudanza para sus clientes, un brokerage bilingüe, un ambiente de trabajo amable y limpio, y un sistema de transacciones fácil de usar.',
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
    en: 'One-on-one mentorship options are available with the broker.',
    es: 'Hay opciones de mentoría individual con la broker.',
  },
  'offer.p2.p': {
    en: 'Choose paid individual guidance from Heidy when you want more direct mentorship. It is an option, not a required service.',
    es: 'Elige orientación individual pagada con Heidy cuando quieras una mentoría más directa. Es una opción, no un servicio obligatorio.',
  },
  'offer.p3.h': {
    en: 'Low monthly fee. Flat transaction fee. No caps.',
    es: 'Cuota mensual baja. Tarifa fija por transacción. Sin topes.',
  },
  'offer.p3.p': {
    en: 'Those are the required brokerage costs. CRM, qualified leads, and mentorship remain optional.',
    es: 'Esos son los costos obligatorios del brokerage. El CRM, los leads calificados y la mentoría siguen siendo opcionales.',
  },
  'calc.toggle': { en: 'Run your numbers ▾', es: 'Calcula tus números ▾' },
  'calc.gci': { en: "Last year's GCI ($)", es: 'GCI del año pasado ($)' },
  'calc.tx': { en: 'Closed transactions', es: 'Transacciones cerradas' },
  'calc.split': { en: 'Your current split', es: 'Tu split actual' },
  'calc.cta': { en: 'Talk to Heidy about your numbers →', es: 'Habla con Heidy sobre tus números →' },

  // --- 3 · the edge ---
  'edge.eyebrow': { en: 'What sets us apart', es: 'Lo que nos distingue' },
  'edge.title': {
    en: 'A simpler model. A broader reach.',
    es: 'Un modelo más simple. Un alcance más amplio.',
  },
  'edge.e1.h': { en: 'Independent by design.', es: 'Independiente por diseño.' },
  'edge.e1.p': {
    en: 'Run your business with 24/7 office access, clear broker and compliance review, practical transaction software, and optional services only when they fit your business.',
    es: 'Dirige tu negocio con acceso a la oficina las 24 horas, revisión clara de broker y cumplimiento, software práctico de transacciones y servicios opcionales solo cuando encajen con tu negocio.',
  },
  'edge.e2.h': { en: 'Bilingual by nature.', es: 'Bilingüe por naturaleza.' },
  'edge.e2.p': {
    en: 'Heidy is fluent in English and Spanish, and most Olea Group agents also speak both languages. The result is a collaborative, friendly environment built to serve both markets.',
    es: 'Heidy habla inglés y español con fluidez, y la mayoría de los agentes de The Olea Group también hablan ambos idiomas. El resultado es un ambiente colaborativo y amable preparado para servir a ambos mercados.',
  },

  // --- 4 · proof: Heidy quote (word-split by quote-scrub, no data-i18n) ---
  'quote.q': {
    en: "I built The Olea Group for independent agents who want a simpler brokerage: keep what you earn, use the practical tools you need, and choose one-on-one guidance when you want it. You're not a number here. You're the business.",
    es: 'Construí The Olea Group para agentes independientes que quieren un brokerage más simple: quédate con lo que ganas, usa las herramientas prácticas que necesitas y elige orientación individual cuando la quieras. Aquí no eres un número. Eres el negocio.',
  },
  'quote.name': { en: 'Heidy Olea', es: 'Heidy Olea' },
  'quote.role': { en: 'Broker & Owner', es: 'Broker y Propietaria' },

  // --- 4.5 · culture ---
  'culture.eyebrow': { en: 'Culture', es: 'Cultura' },
  'culture.title': {
    en: "It's a business. It should still feel good.",
    es: 'Es un negocio. Igual debe sentirse bien.',
  },
  'culture.r1.h': { en: 'Our people', es: 'Nuestra gente' },
  'culture.r1.p': {
    en: 'A small brokerage that actually likes each other — and it shows at every closing.',
    es: 'Un brokerage pequeño donde la gente de verdad se aprecia — y se nota en cada cierre.',
  },
  'culture.r2.h': { en: 'Mentorship, when you choose it', es: 'Mentoría, cuando tú la eliges' },
  'culture.r2.p': {
    en: 'Paid one-on-one mentorship with Heidy is available for agents who want more direct guidance.',
    es: 'La mentoría individual pagada con Heidy está disponible para agentes que desean orientación más directa.',
  },
  'culture.r3.h': { en: 'Closing day', es: 'Día de cierre' },
  'culture.r3.p': {
    en: 'Complimentary marketing for agent listings and achievements, plus moving-truck access for clients.',
    es: 'Marketing de cortesía para listados y logros de agentes, más acceso a un camión de mudanza para clientes.',
  },
  'culture.r4.h': { en: 'Rooted in SWFL', es: 'Raíces en SWFL' },
  'culture.r4.p': {
    en: 'Cape Coral born, bilingual, and built around the neighborhoods we sell.',
    es: 'Nacidos en Cape Coral, bilingües y construidos alrededor de los vecindarios que vendemos.',
  },

  // --- 4 · proof ---
  'proof.eyebrow': { en: 'Proof', es: 'Resultados' },
  'proof.title': { en: "Independent doesn't mean unclear.", es: 'Independiente no significa sin claridad.' },
  'proof.lead': {
    en: 'The brokerage provides broker and compliance review while agents retain control of their day-to-day business. Paid one-on-one mentorship is available when an agent chooses more direct guidance.',
    es: 'El brokerage brinda revisión de broker y cumplimiento mientras los agentes mantienen el control de su negocio diario. La mentoría individual pagada está disponible cuando un agente elige orientación más directa.',
  },
  'proof.s1.label': { en: 'Closed volume', es: 'Volumen cerrado' },
  'proof.s1.value': { en: '$—M', es: '$—M' },
  'proof.s2.label': { en: 'Transactions', es: 'Transacciones' },
  'proof.s2.value': { en: '—', es: '—' },
  'proof.s3.label': { en: 'Agents', es: 'Agentes' },
  'proof.s3.value': { en: '—', es: '—' },
  // --- 5 · what's included ---
  'inc.eyebrow': { en: "What's included", es: 'Qué incluye' },
  'inc.title': {
    en: 'The essentials for independent agents. Options when you want more.',
    es: 'Lo esencial para agentes independientes. Opciones cuando quieres más.',
  },
  'inc.mls.title': { en: 'MLS access across Florida markets', es: 'Acceso MLS en mercados de Florida' },
  'inc.r1.h': { en: 'Transaction checklist', es: 'Lista de control de transacciones' },
  'inc.r1.p': {
    en: 'The transaction system includes an easy checklist. Agents remain responsible for managing their own files and deadlines.',
    es: 'El sistema de transacciones incluye una lista de control sencilla. Los agentes siguen siendo responsables de administrar sus propios archivos y fechas límite.',
  },
  'inc.r2.h': { en: 'Broker & compliance review', es: 'Revisión de broker y cumplimiento' },
  'inc.r2.p': {
    en: 'Required brokerage oversight stays clear while independent agents manage their own day-to-day business.',
    es: 'La supervisión obligatoria del brokerage se mantiene clara mientras los agentes independientes administran su negocio diario.',
  },
  'inc.r3.h': { en: 'User-friendly CRM option', es: 'Opción de CRM fácil de usar' },
  'inc.r3.p': {
    en: 'Choose an optional CRM when you want a simpler way to organize contacts and follow-up.',
    es: 'Elige un CRM opcional cuando quieras una forma más sencilla de organizar contactos y seguimiento.',
  },
  'inc.r4.h': { en: 'Complimentary listing and achievement marketing', es: 'Marketing de cortesía para listados y logros' },
  'inc.r4.p': {
    en: "We share agent listings and achievements through the brokerage's marketing channels.",
    es: 'Compartimos los listados y logros de los agentes a través de los canales de marketing del brokerage.',
  },
  'inc.r5.h': { en: 'Complimentary moving truck for your clients', es: 'Camión de mudanza de cortesía para tus clientes' },
  'inc.r5.p': {
    en: 'Reserve the Olea Group moving truck for clients, subject to scheduling and availability.',
    es: 'Reserva el camión de mudanza de The Olea Group para tus clientes, sujeto a programación y disponibilidad.',
  },
  'inc.r6.h': { en: 'Qualified lead option', es: 'Opción de leads calificados' },
  'inc.r6.p': {
    en: 'Qualified lead access may be available as a paid option. Lead volume is never included or guaranteed.',
    es: 'El acceso a leads calificados puede estar disponible como opción pagada. El volumen de leads nunca está incluido ni garantizado.',
  },
  'inc.callback': {
    en: 'Core access stays simple. Optional services stay optional.',
    es: 'El acceso principal se mantiene simple. Los servicios opcionales siguen siendo opcionales.',
  },

  // --- 6 · faq ---
  'faq.eyebrow': { en: 'FAQ', es: 'Preguntas' },
  'faq.title': { en: "The questions you're already asking.", es: 'Las preguntas que ya te estás haciendo.' },
  'faq.q1': { en: 'What does 100% commission actually mean here?', es: '¿Qué significa realmente el 100% de comisión aquí?' },
  'faq.a1': {
    en: 'You keep your full commission and pay a low monthly fee plus a flat transaction fee. There are no splits, no caps, and no other required brokerage charges. CRM, qualified leads, and one-on-one mentorship are optional.',
    es: 'Te quedas con toda tu comisión y pagas una cuota mensual baja más una tarifa fija por transacción. No hay splits, topes ni otros cargos obligatorios del brokerage. El CRM, los leads calificados y la mentoría individual son opcionales.',
  },
  'faq.q2': { en: 'Am I locked into a contract?', es: '¿Quedo amarrado a un contrato?' },
  'faq.a2': {
    en: 'No long-term lock-in. The model is built for independent agents who want flexibility, not a contract that makes the decision for them.',
    es: 'No hay amarre a largo plazo. El modelo está creado para agentes independientes que quieren flexibilidad, no un contrato que decida por ellos.',
  },
  'faq.q3': { en: 'How does switching brokerages work?', es: '¿Cómo funciona el cambio de brokerage?' },
  'faq.a3': {
    en: 'Your move is handled as a private, straightforward transition. Heidy will review your current situation and pending business with you before anything changes.',
    es: 'Tu cambio se maneja como una transición privada y sencilla. Heidy revisará contigo tu situación actual y tus negocios pendientes antes de que algo cambie.',
  },
  'faq.q4': { en: 'Do I get leads?', es: '¿Me dan leads?' },
  'faq.a4': {
    en: 'Leads are not included or guaranteed. A qualified lead option may be available for an additional charge if it fits your business.',
    es: 'Los leads no están incluidos ni garantizados. Puede haber una opción de leads calificados por un cargo adicional si encaja con tu negocio.',
  },
  'faq.q5': { en: 'Is the company really bilingual?', es: '¿La compañía es realmente bilingüe?' },
  'faq.a5': {
    en: 'Yes. Our broker is fluent in English and Spanish. Most of our agents also speak both languages, and the brokerage has a collaborative, friendly environment.',
    es: 'Sí. Nuestra broker habla inglés y español con fluidez. La mayoría de nuestros agentes también hablan ambos idiomas, y el brokerage tiene un ambiente colaborativo y amable.',
  },

  // --- 7 · final cta ---
  'contact.eyebrow': { en: 'The next step', es: 'El siguiente paso' },
  'contact.title': { en: "A confidential conversation. That's it.", es: 'Una conversación confidencial. Eso es todo.' },
  'contact.sub': {
    en: 'No recruiting script, no pressure. Bring your numbers, ask anything, decide on your own timeline. Your current broker never hears about it.',
    es: 'Sin guion de reclutamiento, sin presión. Trae tus números, pregunta lo que sea, decide a tu ritmo. Tu broker actual nunca se entera.',
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
    en: 'Heidy Olea, Broker/Owner · LIC BK 3428799',
    es: 'Heidy Olea, Broker/Propietaria · LIC BK 3428799',
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
