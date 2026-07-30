/* ═══════════════════════════════════════════════════════
   DR. KRISHAN SINGH — STRATEGIC HR ADVISORY MICROSITE
   main.js  |  Vanilla JavaScript
   Microsite 2 — Advisory / IR / HR Transformation
══════════════════════════════════════════════════════ */

'use strict';

/* ──── 1. THEME TOGGLE (runs immediately) ─────────────── */
(function initTheme() {
  const html      = document.documentElement;
  const STORAGE_KEY = 'ks-hr-theme';
  const saved     = localStorage.getItem(STORAGE_KEY) || 'light';
  html.setAttribute('data-theme', saved);
})();

/* ──── 2. DOM READY ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* ─────────────────────────────────────────────────────
     DECLARE ALL ELEMENTS FIRST — no function uses these
     before they are declared
  ───────────────────────────────────────────────────── */
  var html         = document.documentElement;
  var navbar       = document.getElementById('navbar');
  var themeToggle  = document.getElementById('themeToggle');
  var themeIcon    = document.getElementById('themeIcon');
  var hamburger    = document.getElementById('hamburger');
  var mobileMenu   = document.getElementById('mobileMenu');
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  var yearEl       = document.getElementById('footerYear');
  var contactForm  = document.getElementById('contactForm');
  var needDropdown = document.getElementById('contact-need');
  var trackRecord  = document.getElementById('track-record');

  var sections  = document.querySelectorAll('section[id]');
  var navLinks  = document.querySelectorAll('.nav-link[data-section]');
  var revealEls = document.querySelectorAll('.reveal');
  var counterEls = document.querySelectorAll('.counter-num[data-target]');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link');

  /* ── A. DYNAMIC YEAR ──────────────────────────────── */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── B. THEME TOGGLE ──────────────────────────────── */
  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    themeIcon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  }

  // Set correct icon on load
  updateThemeIcon(html.getAttribute('data-theme'));

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('ks-hr-theme', next);
      updateThemeIcon(next);
    });
  }

  /* ── C. NAVBAR SCROLL ─────────────────────────────── */
  function handleScroll() {
    // Navbar shadow
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    // Scroll-to-top button
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
    // Active nav link
    updateActiveNav();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load

  /* ── D. ACTIVE NAV LINK ───────────────────────────── */
  function updateActiveNav() {
    var scrollPos = window.scrollY + 100;
    var current = '';

    sections.forEach(function (sec) {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        current = sec.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      var section = link.getAttribute('data-section');
      if (section === current) {
        link.classList.add('active');
      }
    });
  }

  /* ── E. MOBILE MENU ───────────────────────────────── */
  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    animateHamburger(true);
  }

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    animateHamburger(false);
  }

  function animateHamburger(open) {
    if (!hamburger) return;
    var spans = hamburger.querySelectorAll('span');
    if (open) {
      if (spans[0]) spans[0].style.cssText = 'transform:translateY(7px) rotate(45deg)';
      if (spans[1]) spans[1].style.cssText = 'opacity:0;transform:scaleX(0)';
      if (spans[2]) spans[2].style.cssText = 'transform:translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(function (s) { s.style.cssText = ''; });
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ── F. SCROLL REVEAL ─────────────────────────────── */
  // Step 1: Immediately reveal elements already in viewport
  function isInView(el) {
    var rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // Reveal those in view right now, hide others for animation
  revealEls.forEach(function (el) {
    if (isInView(el)) {
      el.classList.add('revealed');
    }
  });

  // Step 2: Use IntersectionObserver for the rest
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    revealEls.forEach(function (el) {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });
  } else {
    // Fallback: show everything
    revealEls.forEach(function (el) { el.classList.add('revealed'); });
  }

  /* ── G. ANIMATED COUNTERS ─────────────────────────── */
  var countersAnimated = false;

  function animateCounter(el) {
    var target   = parseInt(el.getAttribute('data-target'), 10);
    var suffix   = el.getAttribute('data-suffix') || '';
    var duration = 1800;
    var fps      = 60;
    var steps    = Math.round(duration / (1000 / fps));
    var step     = 0;

    el.textContent = '0' + suffix;

    var timer = setInterval(function () {
      step++;
      var t = step / steps;
      // ease-out cubic
      var progress = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(progress * target) + suffix;
      if (step >= steps) {
        el.textContent = target + suffix;
        clearInterval(timer);
      }
    }, 1000 / fps);
  }

  function runCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    counterEls.forEach(animateCounter);
  }

  if ('IntersectionObserver' in window && trackRecord) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounters();
          counterObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    counterObserver.observe(trackRecord);
  }

  /* ── H. SCROLL TO TOP ─────────────────────────────── */
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── I. SMOOTH SCROLL WITH NAV OFFSET ────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var navH = navbar ? navbar.offsetHeight : 72;
      var top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
      closeMenu();
    });
  });

  /* ── J. CONTACT FORM ──────────────────────────────── */
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name    = document.getElementById('contact-name');
      var email   = document.getElementById('contact-email');
      var org     = document.getElementById('contact-org');
      var role    = document.getElementById('contact-role');
      var message = document.getElementById('contact-message');
      var need    = document.getElementById('contact-need');
      var btn     = document.getElementById('contact-submit');

      var valid = true;

      [name, email].forEach(function (f) {
        if (f && !f.value.trim()) {
          f.style.borderColor = '#e53e3e';
          valid = false;
        } else if (f) {
          f.style.borderColor = '';
        }
      });

      if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.style.borderColor = '#e53e3e';
        valid = false;
      }

      if (!valid) {
        if (btn) {
          var orig = btn.innerHTML;
          btn.innerHTML = 'Please fill in required fields';
          btn.style.background = '#e53e3e';
          setTimeout(function () {
            btn.innerHTML = orig;
            btn.style.background = '';
          }, 2500);
        }
        return;
      }

      var needText = need && need.selectedIndex > 0 ? need.options[need.selectedIndex].text : 'General Inquiry';
      var subject  = encodeURIComponent('Advisory Enquiry — ' + needText);
      var body     = encodeURIComponent(
        'Name: '          + (name    ? name.value    : '') + '\n' +
        'Organization: '  + (org     ? org.value     : '') + '\n' +
        'Role: '          + (role    ? role.value    : '') + '\n' +
        'Advisory Need: ' + needText                        + '\n\n' +
        'Message:\n'      + (message ? message.value : '')
      );

      window.location.href = 'mailto:krishan@shiftquest.com?subject=' + subject + '&body=' + body;
    });
  }

  /* ── K. SERVICE ENQUIRE → DROPDOWN PREFILL ───────── */
  var serviceMap = {
    'svc-1-inquire':  'hr-transformation',
    'svc-2-inquire':  'org-design',
    'svc-3-inquire':  'executive-coaching',
    'svc-4-inquire':  'culture-talent',
    'svc-5-inquire':  'pms',
    'svc-6-inquire':  'hr-governance',
  };

  Object.keys(serviceMap).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', function () {
        if (needDropdown) needDropdown.value = serviceMap[id];
      });
    }
  });

}); /* end DOMContentLoaded */

/* ═══════════════════════════════════════════════════════
   END main.js
══════════════════════════════════════════════════════ */
