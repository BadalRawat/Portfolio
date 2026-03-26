/* ===================================================
   BADAL RAWAT PORTFOLIO – script.js
   =================================================== */

/* ── Typewriter ───────────────────────────────────── */
const phrases = [
  'Full-Stack Developer 💻',
  'Problem Solver 🧠',
  'ReactJS Enthusiast ⚛️',
  'DSA Practitioner 🔍',
  'Open to Opportunities 🚀',
];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typewriterEl = document.getElementById('typewriter');

function typeLoop() {
  const phrase = phrases[phraseIndex];
  if (!deleting) {
    typewriterEl.textContent = phrase.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === phrase.length) { deleting = true; setTimeout(typeLoop, 2000); return; }
  } else {
    typewriterEl.textContent = phrase.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }
  }
  setTimeout(typeLoop, deleting ? 50 : 80);
}
typeLoop();

/* ── Navbar scroll effect ─────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── Active nav link highlight ────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

/* ── Hamburger menu ───────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinksList = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
});
navLinksList.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinksList.classList.remove('open'));
});

/* ── Scroll-reveal ────────────────────────────────── */
const revealEls = document.querySelectorAll(
  '.skill-category, .project-card, .cert-card, .achievement-card, .edu-card, .timeline-card, .contact-item, .about-stats .stat-card, .contact-form'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ── Scroll-to-top button ─────────────────────────── */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Contact form handler ─────────────────────────── */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message 🚀';
    btn.disabled = false;
    success.style.display = 'block';
    e.target.reset();
    setTimeout(() => { success.style.display = 'none'; }, 4000);
  }, 1500);
}
