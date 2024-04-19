import Gumshoe from '../vendor/gumshoejs/gumshoejs.index.js';
import { createIcons, icons } from '../vendor/lucide/lucide.index.js';

document.addEventListener("DOMContentLoaded", function() {
  initializeGumshoe();

  addEventListeners();
  initTypeWriter();
});


function initializeGumshoe() {
  const navbarLinks = document.querySelectorAll('#navbar-navlist a');
  if (navbarLinks.length > 0) {
    try {
      new Gumshoe('#navbar-navlist a', {
        offset: 80,
        reflow: true
      });
    } catch (error) {
      console.error("Failed to initialize Gumshoe:", error);
    }
  } else {
    console.log("No navbar links found for Gumshoe.");
  }
}


function addEventListeners() {
  const navbar = document.getElementById("navbar-sticky");
  window.addEventListener("scroll", function(ev) {
    ev.preventDefault();
    windowScroll(navbar);
  });

  const mybutton = document.getElementById("back-to-top");
  window.onscroll = function() {
    toggleBackToTopButton(mybutton);
  };
}

function windowScroll(navbar) {
  if (navbar) {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
}

function toggleBackToTopButton(mybutton) {
  if (mybutton) {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      mybutton.classList.add("opacity-100");
      mybutton.classList.remove("opacity-0");
    } else {
      mybutton.classList.add("opacity-0");
      mybutton.classList.remove("opacity-100");
    }
  }
}

function initTypeWriter() {
  const elements = document.getElementsByClassName("typewrite");
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
}

function TxtType(element, toRotate, period) {
  this.toRotate = toRotate;
  this.el = element;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
}

TxtType.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="text-wrap">' + this.txt + '</span>';

  let delta = 200 - Math.random() * 100;
  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(() => {
    this.tick();
  }, delta);
};
