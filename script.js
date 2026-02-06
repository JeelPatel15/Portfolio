// ========================================
// PORTFOLIO INTERACTIVE FEATURES
// ========================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                skillProgress.style.animation = 'none';
                setTimeout(() => {
                    skillProgress.style.animation = 'fadeInUp 1s ease';
                }, 10);
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill items
document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
});

const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Send email via EmailJS
        emailjs.sendForm('service_ej9d25o', 'template_67ubot4', form, '1Oxz_Giq7maWQDgua')
            .then(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #00d4ff, #6366f1)';
                
                // Reset form
                form.reset();

                // Restore button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                }, 3000);

                alert("Your message has been sent! I will get back to you soon.");
            }, (err) => {
                console.error("FAILED...", err);
                alert("Oops! Something went wrong. Please try again later.");
            });
    });
}

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 50px rgba(0, 212, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Fade-in animation on page load
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.hero-content, .about-content, .projects-grid, .skills-grid');
    elements.forEach((element, index) => {
        element.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s`;
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            fadeInObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe all cards and elements
document.querySelectorAll('.project-card, .skill-category, .feature-box, .info-box').forEach(element => {
    fadeInObserver.observe(element);
});

// Scroll to top functionality
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00d4ff, #ff006e);
    border: none;
    border-radius: 50%;
    color: #0a0e27;
    font-size: 1.2rem;
    cursor: pointer;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
        scrollTopBtn.style.alignItems = 'center';
        scrollTopBtn.style.justifyContent = 'center';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Prevent default form submission on Contact page
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heroName = document.getElementById("hero-name");

    if (!heroName) return;

    const text = "I’m Jeel Patel";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            heroName.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 70);
        }
    }

    typeEffect();
});


// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ===============================
// MOUSE FOLLOWER
// ===============================

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

if (cursor && cursorDot) {
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    });

    function animateDot() {
        dotX += (mouseX - dotX) * 0.15;
        dotY += (mouseY - dotY) * 0.15;

        cursorDot.style.left = dotX + "px";
        cursorDot.style.top = dotY + "px";

        requestAnimationFrame(animateDot);
    }

    animateDot();
}

// ===============================
// 3D PARALLAX HERO
// ===============================

const hero = document.querySelector(".hero");
const blobs = document.querySelectorAll(".hero-bg span");

if (hero && blobs.length > 0) {
    hero.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;

        blobs.forEach((blob, index) => {
            const depth = (index + 1) * 40;
            blob.style.transform = `translate3d(${x}px, ${y}px, ${depth}px)`;
        });
    });

    hero.addEventListener("mouseleave", () => {
        blobs.forEach(blob => {
            blob.style.transform = "translate3d(0,0,0)";
        });
    });
}

// ===============================
// FLOATING BACKGROUND PARTICLES
// ===============================

const canvas = document.getElementById("particle-canvas");

if (canvas) {
    const ctx = canvas.getContext("2d");


let particles = [];
const particleCount = 1200;

let mouse = {
    x: null,
    y: null,
    radius: 120
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
});

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        if (mouse.x && mouse.y) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                this.x -= dx / 30;
                this.y -= dy / 30;
            }
        }

        // Wrap edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,102,241,0.6)";
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}
initParticles();

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();
}

// Log a welcome message
console.log('%cWelcome to Jeel Patel Portfolio! 👋', 'font-size: 16px; color: #00d4ff; font-weight: bold;');
console.log('%cThis portfolio was built with HTML, CSS, and JavaScript.', 'font-size: 12px; color: #a0a0a0;');
