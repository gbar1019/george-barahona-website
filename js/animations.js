// ============================================
// GEORGE BARAHONA PORTFOLIO
// Animation & Interaction Scripts
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // ==========================================
  // INITIALIZE LUCIDE ICONS
  // ==========================================
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ==========================================
  // SCROLL REVEAL WITH STAGGER
  // ==========================================
  
  const revealSelectors = [
    '.card',
    '.timeline-item',
    '.skill-category',
    '.passion-card',
    '.about-card',
    '.contact-link',
    '.achievement-card'
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(', '));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the reveal by 80ms per element
        setTimeout(() => {
          entry.target.classList.add('active');
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ==========================================
  // NAVBAR SCROLL EFFECT
  // ==========================================
  
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.97)';
        navbar.style.boxShadow = '0 1px 12px rgba(0, 0, 0, 0.4)';
      } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.92)';
        navbar.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ==========================================
  // REDUCED MOTION SUPPORT
  // ==========================================
  
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.transition = 'none';
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.classList.add('active');
    });

    // Also disable hero animations
    document.querySelectorAll('.hero-greeting, .hero-name, .hero-title, .hero-description, .hero-cta, .scroll-indicator').forEach(el => {
      el.style.animation = 'none';
      el.style.opacity = '1';
    });
  }

});