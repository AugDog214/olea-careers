// Full EN/ES site swap — every visible string lives here as key → { en, es }.
// The toggle swaps the whole site's copy in place; choice persists for the
// session only (in-memory, per brief).

export const strings = {
  // --- chrome ---
  'nav.offer': { en: 'The offer', es: 'La oferta' },
  'nav.edge': { en: 'The edge', es: 'La ventaja' },
  'nav.proof': { en: 'Proof', es: 'Resultados' },
  'nav.faq': { en: 'FAQ', es: 'Preguntas' },
  'cta.header': { en: 'Talk to Heidy — confidential', es: 'Habla con Heidy — confidencial' },
  'cta.sticky': { en: 'Talk to Heidy — confidential', es: 'Habla con Heidy — confidencial' },

  // --- 1 · hero ---
  'hero.eyebrow': {
    en: 'For experienced agents · Cape Coral · Fort Myers · all of SWFL',
    es: 'Para agentes con experiencia · Cape Coral · Fort Myers · todo SWFL',
  },
  'hero.title': {
    en: 'Keep 100% of your commission. Get a broker who actually answers — and listings no one else has.',
    es: 'Quédate con el 100% de tu comisión. Con una broker que sí contesta — y listados que nadie más tiene.',
  },
  'hero.sub': {
    en: "The Olea Group is a boutique Cape Coral brokerage built for producing agents: one flat transaction fee, in-house new-construction inventory, and a bilingual client market most offices can't serve.",
    es: 'The Olea Group es un brokerage boutique de Cape Coral hecho para agentes productivos: una sola tarifa fija por transacción, inventario propio de construcción nueva y un mercado bilingüe que la mayoría de las oficinas no puede atender.',
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
  'offer.p1.h': { en: '100% of every side is yours.', es: 'El 100% de cada lado es tuyo.' },
  'offer.p1.p': {
    en: 'No splits. One flat fee per closed transaction, and the rest of the check is yours. You built the business — keep what it pays.',
    es: 'Sin splits. Una tarifa fija por transacción cerrada, y el resto del cheque es tuyo. Tú construiste el negocio — quédate con lo que paga.',
  },
  'offer.p2.h': { en: 'A broker who picks up the phone.', es: 'Una broker que contesta el teléfono.' },
  'offer.p2.p': {
    en: 'Contract trouble at 7pm gets answered at 7pm. Heidy runs the brokerage and works your questions herself — 100% here does not mean alone.',
    es: 'Un problema de contrato a las 7pm se contesta a las 7pm. Heidy dirige el brokerage y resuelve tus dudas ella misma — aquí el 100% no significa estar solo.',
  },
  'offer.p3.h': { en: "Inventory the MLS can't give you.", es: 'Inventario que el MLS no te puede dar.' },
  'offer.p3.p': {
    en: 'We build. Olea Group agents get access to our own new-construction listings and builder relationships — free listings are income.',
    es: 'Nosotros construimos. Los agentes de Olea Group acceden a nuestros propios listados de construcción nueva y relaciones con constructores — los listados gratis son ingreso.',
  },
  'offer.p4.h': { en: "A client market others can't serve.", es: 'Un mercado que otros no pueden atender.' },
  'offer.p4.p': {
    en: "English and Spanish under one roof. SWFL's Hispanic buyers and sellers are underserved — at The Olea Group they're your market.",
    es: 'Inglés y español bajo un mismo techo. Los compradores y vendedores hispanos de SWFL están desatendidos — en The Olea Group son tu mercado.',
  },
  'calc.toggle': { en: 'Run your numbers ▾', es: 'Calcula tus números ▾' },
  'calc.gci': { en: "Last year's GCI ($)", es: 'GCI del año pasado ($)' },
  'calc.tx': { en: 'Closed transactions', es: 'Transacciones cerradas' },
  'calc.split': { en: 'Your current split', es: 'Tu split actual' },
  'calc.cta': { en: 'Talk to Heidy about your numbers →', es: 'Habla con Heidy sobre tus números →' },

  // --- 3 · the edge ---
  'edge.eyebrow': { en: 'The edge', es: 'La ventaja' },
  'edge.title': {
    en: "Two things you can't get at the shop down the street.",
    es: 'Dos cosas que no consigues en la oficina de enfrente.',
  },
  'edge.e1.h': { en: 'We build the inventory you sell.', es: 'Construimos el inventario que tú vendes.' },
  'edge.e1.p': {
    en: 'The Olea Group is a real estate and construction company. Our agents list our own new builds and work our builder leads — listings you didn\'t have to farm, door-knock, or buy. Every other "100%" shop hands you a fee schedule; we hand you product.',
    es: 'The Olea Group es una empresa de bienes raíces y construcción. Nuestros agentes listan nuestras propias construcciones nuevas y trabajan nuestros leads de constructores — listados que no tuviste que cultivar, tocar puertas ni comprar. Las demás oficinas de "100%" te entregan una tabla de tarifas; nosotros te entregamos producto.',
  },
  'edge.e2.h': { en: 'Two languages. Twice the market.', es: 'Dos idiomas. El doble de mercado.' },
  'edge.e2.p': {
    en: "Southwest Florida's Spanish-speaking buyers and sellers are one of the largest underserved client pools in the state. A bilingual brokerage doesn't just translate — it wins the referrals, the trust, and the repeat business most offices never see.",
    es: 'Los compradores y vendedores hispanohablantes del suroeste de Florida son uno de los mercados más desatendidos del estado. Un brokerage bilingüe no solo traduce — gana los referidos, la confianza y los clientes recurrentes que la mayoría de las oficinas nunca ve.',
  },

  // --- 4 · proof ---
  'proof.eyebrow': { en: 'Proof', es: 'Resultados' },
  'proof.title': { en: "Don't take the pitch. Take the record.", es: 'No te quedes con el discurso. Mira los números.' },
  'proof.s1.label': { en: 'Closed volume', es: 'Volumen cerrado' },
  'proof.s1.value': { en: '$—M', es: '$—M' },
  'proof.s2.label': { en: 'Transactions', es: 'Transacciones' },
  'proof.s2.value': { en: '—', es: '—' },
  'proof.s3.label': { en: 'Agents', es: 'Agentes' },
  'proof.s3.value': { en: '—', es: '—' },
  'proof.t1.q': {
    en: '“[Placeholder — agent quote about calling Heidy and getting an answer the same day.]”',
    es: '“[Pendiente — cita de un agente sobre llamar a Heidy y recibir respuesta el mismo día.]”',
  },
  'proof.t1.n': { en: '— Agent name, The Olea Group', es: '— Nombre del agente, The Olea Group' },
  'proof.t2.q': {
    en: '“[Placeholder — agent quote about closing an in-house construction listing.]”',
    es: '“[Pendiente — cita de un agente sobre cerrar un listado de construcción propia.]”',
  },
  'proof.t2.n': { en: '— Agent name, The Olea Group', es: '— Nombre del agente, The Olea Group' },
  'proof.t3.q': {
    en: '“[Placeholder — agent quote about switching and what the fee change meant in dollars.]”',
    es: '“[Pendiente — cita de un agente sobre el cambio y lo que significó en dólares.]”',
  },
  'proof.t3.n': { en: '— Agent name, The Olea Group', es: '— Nombre del agente, The Olea Group' },

  // --- 5 · what's included ---
  'inc.eyebrow': { en: "What's included", es: 'Qué incluye' },
  'inc.title': {
    en: "Everything you need to close. Nothing you don't.",
    es: 'Todo lo que necesitas para cerrar. Nada que no.',
  },
  'inc.r1.h': { en: 'Transaction coordination', es: 'Coordinación de transacciones' },
  'inc.r1.p': {
    en: 'Contract-to-close handled, so your hours go to clients, not paperwork.',
    es: 'Del contrato al cierre, resuelto — tus horas van a los clientes, no al papeleo.',
  },
  'inc.r2.h': { en: 'Broker & compliance support', es: 'Soporte de broker y cumplimiento' },
  'inc.r2.p': {
    en: 'Direct access to Heidy for contracts, negotiations, and the deals that go sideways.',
    es: 'Acceso directo a Heidy para contratos, negociaciones y los tratos que se complican.',
  },
  'inc.r3.h': { en: 'CRM & tech stack', es: 'CRM y tecnología' },
  'inc.r3.p': {
    en: 'A working lead-and-follow-up system from day one — no assembling your own tools.',
    es: 'Un sistema de leads y seguimiento funcionando desde el primer día — sin armar tus propias herramientas.',
  },
  'inc.r4.h': { en: 'Marketing & design support', es: 'Soporte de marketing y diseño' },
  'inc.r4.p': {
    en: 'Listing marketing, social templates, and brand assets produced in-house.',
    es: 'Marketing de listados, plantillas para redes y material de marca producido en casa.',
  },
  'inc.r5.h': { en: 'Moving truck for your clients', es: 'Camión de mudanza para tus clientes' },
  'inc.r5.p': {
    en: 'Your buyers and sellers use the Olea Group truck free — a closing gift that markets you.',
    es: 'Tus compradores y vendedores usan el camión de Olea Group gratis — un regalo de cierre que te hace publicidad.',
  },
  'inc.r6.h': { en: 'Qualified leads — the honest version', es: 'Leads calificados — la versión honesta' },
  'inc.r6.p': {
    en: "Some agents receive company leads as they're earned — situational, never guaranteed. Anyone promising you a lead faucet is selling something.",
    es: 'Algunos agentes reciben leads de la empresa según se los ganan — situacional, nunca garantizado. Quien te promete una llave de leads te está vendiendo algo.',
  },
  'inc.callback': {
    en: 'And you track all of it in your own dashboard.',
    es: 'Y todo lo sigues desde tu propio dashboard.',
  },

  // --- 6 · faq ---
  'faq.eyebrow': { en: 'FAQ', es: 'Preguntas' },
  'faq.title': { en: "The questions you're already asking.", es: 'Las preguntas que ya te estás haciendo.' },
  'faq.q1': { en: 'What does 100% commission actually mean here?', es: '¿Qué significa realmente el 100% de comisión aquí?' },
  'faq.a1': {
    en: "You keep your full commission on every closing and pay one flat fee per transaction. No splits, no franchise fees, no royalty math. Ask Heidy for the exact fee in your confidential chat — it's one number, not a rate sheet.",
    es: 'Te quedas con toda tu comisión en cada cierre y pagas una tarifa fija por transacción. Sin splits, sin cuotas de franquicia, sin matemática de regalías. Pregúntale a Heidy la tarifa exacta en tu charla confidencial — es un solo número, no una tabla.',
  },
  'faq.q2': { en: 'Am I locked into a contract?', es: '¿Quedo amarrado a un contrato?' },
  'faq.a2': {
    en: "No long-term lock-in. If The Olea Group stops earning your business, you can leave — and we'd rather keep you with support than with a contract.",
    es: 'Sin amarres a largo plazo. Si The Olea Group deja de ganarse tu negocio, te puedes ir — preferimos retenerte con soporte, no con un contrato.',
  },
  'faq.q3': { en: 'How does switching brokerages work?', es: '¿Cómo funciona el cambio de brokerage?' },
  'faq.a3': {
    en: "In Florida it's a license transfer, not a career event. We handle the paperwork with you, your pending deals are worked out case by case, and most agents are fully moved in days — quietly.",
    es: 'En Florida es una transferencia de licencia, no un evento de carrera. Manejamos el papeleo contigo, tus tratos pendientes se resuelven caso por caso, y la mayoría de los agentes se muda por completo en días — con discreción.',
  },
  'faq.q4': { en: 'Do I get leads?', es: '¿Me dan leads?' },
  'faq.a4': {
    en: "Honest answer: sometimes. Company and builder leads are assigned situationally — mostly earned by production and responsiveness. They're a perk here, not a promise. No brokerage can guarantee lead flow, including this one.",
    es: 'Respuesta honesta: a veces. Los leads de la empresa y de constructores se asignan según la situación — se ganan sobre todo con producción y capacidad de respuesta. Aquí son un beneficio, no una promesa. Ningún brokerage puede garantizar flujo de leads, incluido este.',
  },
  'faq.q5': { en: 'Do you really serve Spanish-speaking clients?', es: '¿De verdad atienden clientes hispanohablantes?' },
  'faq.a5': {
    en: "Yes — the brokerage operates in English and Spanish daily, from first call to closing table. If you're bilingual, your skill finally has a brokerage built around it. If you're not, the in-house team backs you up.",
    es: 'Sí — el brokerage opera en inglés y español todos los días, desde la primera llamada hasta la mesa de cierre. Si eres bilingüe, tu habilidad por fin tiene un brokerage hecho a su medida. Si no lo eres, el equipo interno te respalda.',
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

export function setLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = strings[el.dataset.i18n];
    if (entry) el.textContent = entry[lang];
  });
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.textContent = lang === 'en' ? 'ES' : 'EN';
    toggle.setAttribute(
      'aria-label',
      lang === 'en' ? 'Cambiar a Español' : 'Switch to English'
    );
  }
}

export function initI18n() {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => setLang(lang === 'en' ? 'es' : 'en'));
  }
}
