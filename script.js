const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');

filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;

    filters.forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');

    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      const show = category === 'all' || categories.includes(category);
      card.classList.toggle('is-hidden', !show);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
