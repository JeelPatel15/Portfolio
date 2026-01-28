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

// Form submission handler
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            // Show success message
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #00d4ff, #6366f1)';
            
            // Reset form
            form.reset();
            
            // Restore button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);
            
            // In a real application, you would send this to a server
            console.log('Form submitted:', { name, email, subject, message });
        } else {
            alert('Please fill in all fields');
        }
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

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let index = 0;
    
    function typeText() {
        if (index < originalText.length) {
            heroTitle.innerHTML += originalText[index];
            index++;
            setTimeout(typeText, 30);
        }
    }
    
    // Uncomment to enable typing effect
    // typeText();
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Log a welcome message
console.log('%cWelcome to Jeel Patel Portfolio! 👋', 'font-size: 16px; color: #00d4ff; font-weight: bold;');
console.log('%cThis portfolio was built with HTML, CSS, and JavaScript.', 'font-size: 12px; color: #a0a0a0;');
