// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// TopBar scrolled state
const topbar = document.querySelector('.topbar');
const floatingCta = document.querySelector('.floating-cta');
const onScroll = () => {
  const y = window.scrollY;
  if (topbar) topbar.classList.toggle('scrolled', y > 80);
  if (floatingCta) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const show = y > window.innerHeight * 0.9 && y < max - window.innerHeight * 0.6;
    floatingCta.classList.toggle('visible', show);
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
