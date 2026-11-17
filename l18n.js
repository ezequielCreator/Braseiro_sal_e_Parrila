// ==========================================================
//  Seletor de idioma PT / ES / EN
//  - O texto em português é o próprio HTML (guardado ao carregar).
//  - Aqui ficam só as traduções para ES e EN.
//  - Ao entrar, usa o idioma salvo ou, se não houver, o do navegador.
// ==========================================================
(function () {
    // Mude para false se NÃO quiser trocar o idioma automaticamente pelo navegador
    const AUTO_DETECTAR = true;
    const CHAVE = 'braseiro-lang';
    const IDIOMAS = ['pt', 'es', 'en'];
    const LANG_HTML = { pt: 'pt-BR', es: 'es', en: 'en' };

    const T = {
        es: {
            'meta.title': 'Braseiro Sal e Parrilla | Carnes a la brasa en Joinville',
            'meta.desc': 'Restaurante de carnes asadas a la parrilla en Joinville. Cortes premium, hamburguesas artesanales y delivery. Rua XV de Novembro, 2622 - Glória.',
            'aria.wa': 'Escribir por WhatsApp',

            'nav.casa': 'La Casa', 'nav.cardapio': 'Menú', 'nav.galeria': 'Galería',
            'nav.avaliacoes': 'Opiniones', 'nav.local': 'Ubicación y horarios', 'nav.reservar': 'Reservar',

            'hero.title': 'CARNES<br><span class="fogo-texto">Y</span><br>PARRILLA',
            'hero.sub': 'Restaurante de carnes asadas a la parrilla, en el corazón del barrio Glória, Joinville.',
            'hero.reservar': '🔥 Pide en Delivery',
            'hero.cardapio': 'Ver menú',

            'mq.1': '🔥 MARTES A SÁBADO · 18H A 23H',
            'mq.2': '🔥 DOMINGO · 11H30 A 14H',
            'mq.3': '🔥 DELIVERY DISPONIBLE',
            'mq.4': '🔥 RUA XV DE NOVEMBRO, 2622 · GLÓRIA',

            'sobre.eyebrow': 'La casa',
            'sobre.h2': 'Fuego de leña, al ritmo de la familia',
            'sobre.p1': 'Braseiro nació de la pasión por asar la carne en su punto justo, al calor directo de la brasa. Cada corte pasa horas en la parrilla hasta lograr ese sello oscuro por fuera y jugoso por dentro, como se hace desde hace generaciones en las parrillas uruguayas.',
            'sobre.p2': 'Hoy la casa reúne cortes premium, hamburguesas artesanales hechas en plancha y un menú de delivery para quien quiere sentir el sabor de la brasa sin salir de casa.',
            'sobre.s1n': '14,4 mil', 'sobre.s1l': 'seguidores en Instagram', 'sobre.s2l': 'carnes a la parrilla',

            'ritual.eyebrow': 'El ritual',
            'ritual.h2': 'La brasa no tiene prisa.<br>Y nosotros tampoco.',

            'amb.eyebrow': 'El espacio',
            'amb.title': 'Mucho más que parrilla',
            'amb.l1': 'Salón acogedor, clima de fuego de leña',
            'amb.l2': 'Área kids para que los niños se diviertan',
            'amb.l3': 'Drinks para brindar en la mesa',

            'card.eyebrow': 'Menú',
            'card.title': 'Lo que sale de la parrilla',
            'tab.carnes': 'Carnes', 'tab.lanches': 'Hamburguesas', 'tab.delivery': 'Delivery',

            'd.carnes.t': 'Carnes',
            'd.carnes.p': 'Corte premium asado a la parrilla, con capa de grasa dorada, jugoso y terminado con romero.',
            'd.picfat.t': 'Picanha en Lonchas',
            'd.picfat.p': 'Lonchas en su punto, servidas en plancha de hierro con farofa y vinagreta.',
            'd.chuleta.p': 'Corte con hueso asado a la brasa. Acompaña arroz, papas fritas, farofa, vinagreta y ensalada de papa.',
            'd.ling.t': 'Linguiça Campeira',
            'd.ling.p': 'Chorizo artesanal asado en la parrilla, con la piel crocante y el interior jugoso.',
            'd.tulipa.p': 'Pollo empanado y crujiente, servido con salsa cremosa y cebollín fresco.',

            'cta.t': 'Pide ahora 🔥',
            'cta.p': 'Habla directo con la casa y arma tu pedido.',
            'cta.b': 'Escribir por WhatsApp',

            'd.mp.badge': '🔥 Más pedido',
            'd.mp.t': 'El Más Pedido',
            'd.mp.p': 'Hecho en la parrilla, con un sabor que conquista al primer bocado.',
            'd.dc.t': 'Doble Cheddar',
            'd.dc.p': 'Dos medallones a la parrilla, cheddar cremoso y bacon crocante por encima.',
            'd.bbq.p': 'Hamburguesa de 150 g en pan brioche, cheddar, dos tiras de bacon y salsa barbecue.',
            'd.bbq.preco': 'Consulta por WhatsApp',
            'd.egg.p': 'Hamburguesa de 150 g en pan brioche, queso mozzarella, huevo, bacon, lechuga americana, tomate, cebolla morada y mayonesa casera.',

            'd.casal.t': 'Combo para Pareja',
            'd.casal.p': 'El sabor de la casa empacado para comer donde quieras.',
            'd.esf.t': 'Combo Hambriento',
            'd.esf.p': 'Cortada al momento, directo de la parrilla a tu casa.',

            'gal.eyebrow': 'Directo de la parrilla', 'gal.title': 'Galería',

            'res.eyebrow': 'Lo que dicen en Google',
            'res.title': 'Testimonios de quienes ya probaron',
            'res.m1': '221 reseñas en Google · hace 6 meses',
            'res.m2': 'Local Guide · 17 reseñas · hace 2 meses',
            'res.m3': 'Local Guide · 245 reseñas · hace 1 mes',
            'res.link': 'Ver todas las opiniones en Google Maps →',

            'loc.eyebrow': 'Ubicación y horarios',
            'loc.h2': 'Ven a sentir el aroma de la brasa',
            'loc.l1': '<strong>📍 Dirección</strong>Rua XV de Novembro, 2622 — Glória, Joinville - SC',
            'loc.l2': '<strong>🕕 Martes a sábado</strong>18h a 23h',
            'loc.l3': '<strong>🕦 Domingo</strong>11h30 a 14h',
            'loc.l4': '<strong>🚫 Lunes</strong>Cerrado',
            'loc.btn': 'Hacer reserva',

            'foot.hours': 'Martes a sábado 18h-23h · Domingo 11h30-14h',
            'foot.copy': '© 2026 Braseiro Sal e Parrilla. Todos los derechos reservados.',
            'foot.by': 'Creado por : Ezequiel Alcala.'
        },

        en: {
            'meta.title': 'Braseiro Sal e Parrilla | Flame-grilled meats in Joinville',
            'meta.desc': 'Grilled meat restaurant in Joinville, Brazil. Premium cuts, handcrafted burgers and delivery. Rua XV de Novembro, 2622 - Glória.',
            'aria.wa': 'Chat on WhatsApp',

            'nav.casa': 'The House', 'nav.cardapio': 'Menu', 'nav.galeria': 'Gallery',
            'nav.avaliacoes': 'Reviews', 'nav.local': 'Location &amp; Hours', 'nav.reservar': 'Book',

            'hero.title': 'MEATS<br><span class="fogo-texto">&amp;</span><br>PARRILLA',
            'hero.sub': 'Grilled meat restaurant in the heart of the Glória neighborhood, Joinville.',
            'hero.reservar': '🔥Order for Delivery',
            'hero.cardapio': 'See menu',

            'mq.1': '🔥 TUESDAY TO SATURDAY · 6PM TO 11PM',
            'mq.2': '🔥 SUNDAY · 11:30AM TO 2PM',
            'mq.3': '🔥 DELIVERY AVAILABLE',
            'mq.4': '🔥 RUA XV DE NOVEMBRO, 2622 · GLÓRIA',

            'sobre.eyebrow': 'The house',
            'sobre.h2': 'Open-fire cooking, at the family’s pace',
            'sobre.p1': 'Braseiro was born from a passion for cooking meat to perfection over the direct heat of the embers. Each cut spends hours on the parrilla until it gets that dark crust outside while staying juicy inside, just as it has been done for generations on Uruguayan grills.',
            'sobre.p2': 'Today the house offers premium cuts, handcrafted burgers made on the griddle and a delivery menu for those who want to taste the embers without leaving home.',
            'sobre.s1n': '14.4K', 'sobre.s1l': 'Instagram followers', 'sobre.s2l': 'meats on the grill',

            'ritual.eyebrow': 'The ritual',
            'ritual.h2': 'The embers are in no hurry.<br>Neither are we.',

            'amb.eyebrow': 'The space',
            'amb.title': 'Much more than a grill',
            'amb.l1': 'Cozy dining room with an open-fire feel',
            'amb.l2': 'Kids’ area for the little ones to have fun',
            'amb.l3': 'Drinks to toast at the table',

            'card.eyebrow': 'Menu',
            'card.title': 'What comes off the grill',
            'tab.carnes': 'Meats', 'tab.lanches': 'Burgers', 'tab.delivery': 'Delivery',

            'd.carnes.t': 'Meats',
            'd.carnes.p': 'Premium cut grilled on the parrilla, with a golden fat cap, juicy and finished with rosemary.',
            'd.picfat.t': 'Sliced Picanha',
            'd.picfat.p': 'Slices cooked just right, served on a cast-iron plate with farofa and vinaigrette.',
            'd.chuleta.p': 'Bone-in cut grilled over the embers. Served with rice, fries, farofa, vinaigrette and potato salad.',
            'd.ling.t': 'Campeira Sausage',
            'd.ling.p': 'Handcrafted sausage grilled on the parrilla, with a crispy casing and a juicy inside.',
            'd.tulipa.p': 'Crispy breaded chicken, served with creamy sauce and fresh scallions.',

            'cta.t': 'Order now 🔥',
            'cta.p': 'Talk to us directly and build your order.',
            'cta.b': 'Chat on WhatsApp',

            'd.mp.badge': '🔥 Best seller',
            'd.mp.t': 'The Best Seller',
            'd.mp.p': 'Made on the grill, with a flavor that wins you over from the first bite.',
            'd.dc.t': 'Double Cheddar',
            'd.dc.p': 'Two patties from the grill, creamy cheddar and crispy bacon on top.',
            'd.bbq.p': '150 g burger on a brioche bun, cheddar, two strips of bacon and barbecue sauce.',
            'd.bbq.preco': 'Ask on WhatsApp',
            'd.egg.p': '150 g burger on a brioche bun, mozzarella, egg, bacon, iceberg lettuce, tomato, red onion and homemade mayo.',

            'd.casal.t': 'Couple’s Combo',
            'd.casal.p': 'The taste of the house packed to eat wherever you like.',
            'd.esf.t': 'Hungry Combo',
            'd.esf.p': 'Cut to order, straight from the grill to your home.',

            'gal.eyebrow': 'Straight from the grill', 'gal.title': 'Gallery',

            'res.eyebrow': 'What people say on Google',
            'res.title': 'Words from those who have tried it',
            'res.m1': '221 Google reviews · 6 months ago',
            'res.m2': 'Local Guide · 17 reviews · 2 months ago',
            'res.m3': 'Local Guide · 245 reviews · 1 month ago',
            'res.link': 'See all reviews on Google Maps →',

            'loc.eyebrow': 'Location &amp; hours',
            'loc.h2': 'Come smell the embers',
            'loc.l1': '<strong>📍 Address</strong>Rua XV de Novembro, 2622 — Glória, Joinville - SC',
            'loc.l2': '<strong>🕕 Tuesday to Saturday</strong>6 PM to 11 PM',
            'loc.l3': '<strong>🕦 Sunday</strong>11:30 AM to 2 PM',
            'loc.l4': '<strong>🚫 Monday</strong>Closed',
            'loc.btn': 'Make a reservation',

            'foot.hours': 'Tue–Sat 6–11 PM · Sun 11:30 AM–2 PM',
            'foot.copy': '© 2026 Braseiro Sal e Parrilla. All rights reserved.',
            'foot.by': 'Created by : Ezequiel Alcala.'
        }
    };

    const elementos = Array.from(document.querySelectorAll('[data-i18n]'));
    const botoes = Array.from(document.querySelectorAll('.lang [data-lang]'));
    const metaDesc = document.querySelector('meta[name="description"]');
    const whats = document.querySelector('.whats-float');

    // Guarda o português original (vem do próprio HTML)
    elementos.forEach(el => { el.dataset.pt = el.innerHTML; });
    const tituloPt = document.title;
    const descPt = metaDesc ? metaDesc.getAttribute('content') : '';
    const ariaWaPt = whats ? whats.getAttribute('aria-label') : '';

    function aplicar(lang) {
        if (!IDIOMAS.includes(lang)) lang = 'pt';
        const dic = T[lang];

        elementos.forEach(el => {
            if (lang === 'pt') el.innerHTML = el.dataset.pt;
            else if (dic[el.dataset.i18n] !== undefined) el.innerHTML = dic[el.dataset.i18n];
        });

        document.documentElement.lang = LANG_HTML[lang];
        document.title = lang === 'pt' ? tituloPt : dic['meta.title'];
        if (metaDesc) metaDesc.setAttribute('content', lang === 'pt' ? descPt : dic['meta.desc']);
        if (whats) whats.setAttribute('aria-label', lang === 'pt' ? ariaWaPt : dic['aria.wa']);

        botoes.forEach(b => {
            const ativo = b.dataset.lang === lang;
            b.classList.toggle('active', ativo);
            b.setAttribute('aria-pressed', ativo ? 'true' : 'false');
        });

        try { localStorage.setItem(CHAVE, lang); } catch (e) {}
    }

    function idiomaInicial() {
        try {
            const salvo = localStorage.getItem(CHAVE);
            if (IDIOMAS.includes(salvo)) return salvo;
        } catch (e) {}
        if (!AUTO_DETECTAR) return 'pt';
        const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'pt'];
        for (const l of prefs) {
            const c = String(l).toLowerCase().slice(0, 2);
            if (IDIOMAS.includes(c)) return c;
        }
        return 'pt';
    }

    botoes.forEach(b => b.addEventListener('click', () => aplicar(b.dataset.lang)));

    const inicial = idiomaInicial();
    if (inicial !== 'pt') aplicar(inicial);
})();
