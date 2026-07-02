(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  var form = document.getElementById('contact-form');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('header__nav--open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you. Our team will be in touch shortly.');
      form.reset();
    });
  }
})();
