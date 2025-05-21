window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Toggle navbar
  const toggleButton = document.querySelector(".nav-toggle");
  const navList = document.querySelector("nav ul");

  toggleButton.addEventListener("click", () => {
    navList.classList.toggle("show");
  });

  // Blur effect on hover section
  const allSections = document.querySelectorAll("section");
  const overlay = document.getElementById("overlay");

  allSections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
      document.body.classList.add("blur-active");
      allSections.forEach((s) => {
        if (s !== section) s.classList.add("blur");
      });
    });

    section.addEventListener("mouseleave", () => {
      document.body.classList.remove("blur-active");
      allSections.forEach((s) => s.classList.remove("blur"));
    });
  });

  // Close nav menu when clicking link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("show");
    });
  });

  // SLIDER / SLIDE FOTO SERTIFIKAT
  const slides = document.querySelectorAll(".slider-container .slide");
  const prevBtn = document.querySelector(".slider-container .prev-btn");
  const nextBtn = document.querySelector(".slider-container .next-btn");

  let currentSlide = 0;
  let interval = setInterval(nextSlide, 5000); // Ganti tiap 5 detik

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtn?.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

  showSlide(currentSlide);
});
