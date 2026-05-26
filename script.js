const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const scrollTopButton = document.querySelector('.scroll-top');
const testimonials = document.querySelectorAll('.testimonial');
const sliderButtons = document.querySelectorAll('.slider-btn');
let activeTestimonial = 0;

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

function showTestimonial(index) {
  testimonials.forEach((item) => item.classList.remove('active'));
  testimonials[index].classList.add('active');
}

sliderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.dataset.direction;
    activeTestimonial = direction === 'next'
      ? (activeTestimonial + 1) % testimonials.length
      : (activeTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(activeTestimonial);
  });
});

setInterval(() => {
  activeTestimonial = (activeTestimonial + 1) % testimonials.length;
  showTestimonial(activeTestimonial);
}, 7000);

window.addEventListener('scroll', () => {
  scrollTopButton.classList.toggle('visible', window.scrollY > 600);
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
