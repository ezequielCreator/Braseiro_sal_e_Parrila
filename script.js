// ============ Inicializar animaciones al hacer scroll ============
if (window.AOS) AOS.init({ duration: 700, once: true, offset: 60 });

// ============ Efecto tilt (parallax al mover el mouse) en fotos ============
if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.03
    });
}

// ============ Brasas flotantes (signature del sitio) ============
function crearBrasas() {
    const contenedor = document.getElementById('embers');
    const cantidad = window.innerWidth < 700 ? 14 : 26;

    for (let i = 0; i < cantidad; i++) {
        const brasa = document.createElement('div');
        brasa.className = 'ember';
        brasa.style.left = Math.random() * 100 + 'vw';
        brasa.style.animationDuration = (6 + Math.random() * 8) + 's';
        brasa.style.animationDelay = Math.random() * 10 + 's';
        brasa.style.width = brasa.style.height = (2 + Math.random() * 3) + 'px';
        contenedor.appendChild(brasa);
    }
}
crearBrasas();

// ============ Navbar: fondo sólido al hacer scroll ============
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ============ Videos de fondo: solo se reproducen mientras la sección está en pantalla ============
const videos = document.querySelectorAll('video[data-video]');
const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const seccionesVisibles = new Set();

function actualizarVideos() {
    videos.forEach(video => {
        const seccion = video.closest('section');
        // en el cardápio solo corre el video de la pestaña activa
        const esActivo = !video.hasAttribute('data-tabvideo') || video.classList.contains('is-active');

        // vídeos dentro de abas escondidas (display:none) ficam pausados; os de fundo (fixos) não entram nessa checagem
        const visivelNaPagina = video.hasAttribute('data-tabvideo') || video.offsetParent !== null;

        if (!reducirMovimiento && seccionesVisibles.has(seccion) && esActivo && visivelNaPagina) {
            const p = video.play();
            if (p && p.catch) p.catch(() => {});
        } else {
            video.pause();
        }
    });
}

if (videos.length && 'IntersectionObserver' in window) {
    const observador = new IntersectionObserver(entradas => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) seccionesVisibles.add(entrada.target);
            else seccionesVisibles.delete(entrada.target);
        });
        actualizarVideos();
    }, { threshold: 0.1 });

    new Set([...videos].map(v => v.closest('section'))).forEach(s => observador.observe(s));
}

// ============ Cardápio: cambio de pestañas (y de video de fondo) ============
const botonesTab = document.querySelectorAll('.tab-btn');
const paneles = document.querySelectorAll('.tab-panel');

botonesTab.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesTab.forEach(b => b.classList.remove('active'));
        paneles.forEach(p => p.classList.remove('active'));

        boton.classList.add('active');
        document.querySelector(`.tab-panel[data-panel="${boton.dataset.tab}"]`).classList.add('active');

        // Carnes -> video de carnes · Lanches/Delivery -> video gastronómico general
        const clave = boton.dataset.tab === 'carnes' ? 'carnes' : 'gastro';
        document.querySelectorAll('[data-tabvideo]').forEach(v => {
            v.classList.toggle('is-active', v.dataset.tabvideo === clave);
        });
        actualizarVideos();
    });
});

// ============ Lightbox para la galería ============
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.galeria-grid img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('aberto');
    });
});

function fecharLightbox() {
    lightbox.classList.remove('aberto');
    lightboxImg.src = '';
}
lightboxClose.addEventListener('click', fecharLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) fecharLightbox();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharLightbox();
});