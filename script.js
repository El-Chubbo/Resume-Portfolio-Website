// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(function (a) {
  a.addEventListener('click', function (e) {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Active link highlight
document.querySelectorAll('nav a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.querySelectorAll('nav a').forEach(function (l) {
      l.classList.remove('active');
    });
    a.classList.add('active');
  });
});

// Highlight the active link when scrolling
const sections = document.querySelectorAll('section[id]');
const navLinks = Array.from(document.querySelectorAll('nav a'));

function onScroll() {
  const scrollPos = window.scrollY + 100;
  sections.forEach(function (section) {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', onScroll);
onScroll();
