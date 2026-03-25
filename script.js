/* ========================================
   script.js — Portfolio interaction layer
   - Optimized scroll handling using requestAnimationFrame
   - Section highlighting via IntersectionObserver
   - Adaptive particle background (lighter on small screens)
   - Custom cursor, parallax, email handling (EmailJS)
   - Comments added for readability and maintainability
   ======================================== */

/* Utility selectors */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Run setup after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.replaceState(null, '', href);
            }
        });
    });

    // IntersectionObserver for section -> nav active state
    const navLinks = $$('.nav-links a');
    const sections = $$('section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.target.id) return;
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
            }
        });
    }, { threshold: 0.55 });

    sections.forEach(s => sectionObserver.observe(s));

    // Efficient scroll handler using rAF (handles navbar background, parallax, show/hide top button)
    const navbar = $('nav');
    const hero = $('.hero');
    const scrollTopBtn = createScrollTopButton();

    let ticking = false;
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }

    function handleScroll() {
        const y = window.scrollY;

        // Navbar appearance
        if (navbar) {
            if (y > 50) {
                navbar.style.background = 'rgba(10, 14, 39, 0.98)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 212, 255, 0.1)';
            } else {
                navbar.style.background = 'rgba(10, 14, 39, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }

        // Hero parallax background shift
        if (hero) {
            hero.style.backgroundPosition = `center ${y * 0.5}px`;
        }

        // Toggle scroll-to-top button
        if (y > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Type effect for hero name
    const heroNameEl = $('#hero-name');
    if (heroNameEl) {
        const text = "I’m Jeel Patel";
        let idx = 0;
        function typeEffect() {
            if (idx < text.length) {
                heroNameEl.textContent += text.charAt(idx++);
                setTimeout(typeEffect, 70);
            }
        }
        typeEffect();
    }

    // EmailJS form handling (if present)
    const form = $('form');
    if (form && window.emailjs) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : '';
            emailjs.sendForm('service_ej9d25o', 'template_67ubot4', form, '1Oxz_Giq7maWQDgua')
                .then(() => {
                    if (submitBtn) {
                        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                        submitBtn.style.background = 'linear-gradient(135deg, #00d4ff, #6366f1)';
                    }
                    form.reset();
                    setTimeout(() => {
                        if (submitBtn) { submitBtn.innerHTML = originalText; submitBtn.style.background = ''; }
                    }, 3000);
                    alert('Your message has been sent! I will get back to you soon.');
                }, (err) => {
                    console.error('EmailJS error', err);
                    alert('Oops! Something went wrong. Please try again later.');
                });
        });
    }

    // Project card hover (keep simple) — uses CSS hover where possible
    $$('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.classList.add('hover'));
        card.addEventListener('mouseleave', () => card.classList.remove('hover'));
    });

    // Fade-in observer for UI elements (keeps existing animations accessible)
    const fadeInObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    $$('.project-card, .skill-category, .feature-box, .info-box').forEach(el => fadeInObserver.observe(el));

    // Custom cursor (non-interactive elements — pointer events disabled in CSS)
    const cursor = $('.cursor');
    const cursorDot = $('.cursor-dot');
    if (cursor && cursorDot) {
        let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;
        window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'; });
        function animateDot() { dotX += (mouseX - dotX) * 0.15; dotY += (mouseY - dotY) * 0.15; cursorDot.style.left = dotX + 'px'; cursorDot.style.top = dotY + 'px'; requestAnimationFrame(animateDot); }
        animateDot();
    }

    // 3D parallax blobs in hero
    const heroEl = $('.hero');
    const blobs = $$('.hero-bg span');
    if (heroEl && blobs.length) {
        heroEl.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            blobs.forEach((blob, idx) => blob.style.transform = `translate3d(${x}px, ${y}px, ${(idx+1)*40}px)`);
        });
        heroEl.addEventListener('mouseleave', () => blobs.forEach(blob => blob.style.transform = 'translate3d(0,0,0)'));
    }

    // Particle background — adaptive count for performance
    initParticleBackground();
});

/* ---------- Helpers ---------- */
function createScrollTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.style.cssText = `position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background: linear-gradient(135deg, #00d4ff, #ff006e); border: none; border-radius: 50%; color: #0a0e27; font-size: 1.2rem; cursor: pointer; display: none; z-index: 999; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3); align-items: center; justify-content: center;`;
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
    document.body.appendChild(btn);
    return btn;
}

/* Particle background implementation */
function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Adapt particle count for screen size to improve performance on mobile
    let particleCount = 1200;
    if (window.innerWidth < 1400) particleCount = 800;
    if (window.innerWidth < 900) particleCount = 500;
    if (window.innerWidth < 480) particleCount = 300;

    let particles = [];
    const mouse = { x: null, y: null, radius: 120 };

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize(); window.addEventListener('resize', resize);

    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            if (mouse.x && mouse.y) {
                const dx = mouse.x - this.x, dy = mouse.y - this.y; const d = Math.hypot(dx, dy);
                if (d < mouse.radius) { this.x -= dx / 30; this.y -= dy / 30; }
            }
            if (this.x > canvas.width) this.x = 0; if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0; if (this.y < 0) this.y = canvas.height;
        }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = 'rgba(99,102,241,0.6)'; ctx.fill(); }
    }

    function init() { particles = []; for (let i = 0; i < particleCount; i++) particles.push(new Particle()); }
    init();

    function loop() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(loop); }
    loop();
}

// Friendly console message
console.log('%cWelcome to Jeel Patel Portfolio! 👋', 'font-size: 16px; color: #00d4ff; font-weight: bold;');
console.log('%cThis portfolio was built with HTML, CSS, and JavaScript.', 'font-size: 12px; color: #a0a0a0;');
