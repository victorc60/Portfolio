const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

function toogleNav() {
  // Toogle Menu bars Open/close
  menuBars.classList.toggle("change");
  //   Toogle menu active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate-in
    overlay.classList.remove("overlay-slide-left");
    overlay.classList.add("overlay-slide-right");
  }
  // Animate-out
  else {
    overlay.classList.remove("overlay-slide-right");

    overlay.classList.add("overlay-slide-left");
  }
}

// EVENT LISTENERS
menuBars.addEventListener("click", toogleNav);
nav1.addEventListener("click", toogleNav);
nav2.addEventListener("click", toogleNav);
nav3.addEventListener("click", toogleNav);
nav4.addEventListener("click", toogleNav);

// CONTACT ME
const contactBtn = document.querySelector(".contact__button");
const contactForm = document.querySelector(".form");

function showForm() {
  ///////////////////////////////////

  contactForm.classList.toggle("form-active");

  if (contactForm.classList.contains("form-active")) {
    // Animate-in
    contactForm.classList.remove("form-slide-left");
    contactForm.classList.add("form-slide-right");
  }
  // Animate-out
  else {
    contactForm.classList.remove("form-slide-right");

    contactForm.classList.add("form-slide-left");
  }
}

contactBtn.addEventListener("click", showForm);

//////////////////
new Swiper(".mySwiper", {
  breakpoints: {
    1600: {
      slidesPerView: 2,
    },
    //   480: {
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //   },

    //   320: {
    //     slidesPerView: 1,
    //   },
  },

  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
