
'use strict';

const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');

toggle?.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

const slides = document.querySelectorAll('.reviews-track > *');
const dots = document.querySelectorAll('.slider-dot');
let index = 0;

function showSlide(i) {
  if (!slides.length) return;
  index = i % slides.length;

  slides.forEach((s, j) => {
    s.style.display = j === index ? 'block' : 'none';
  });

  dots.forEach((d, j) => {
    d.classList.toggle('active', j === index);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});


const form = document.getElementById('contactForm');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Message received! Thank you.');
  form.reset();
});

showSlide(0);
