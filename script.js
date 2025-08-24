// JavaScript to handle reveal animations and any additional interactions
// This script observes elements with the 'reveal' class and adds the 'show'
// class when they scroll into view, triggering CSS transitions defined in
// the stylesheet.
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});