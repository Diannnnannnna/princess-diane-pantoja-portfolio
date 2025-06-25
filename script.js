document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mySwiper').forEach((el) => {
    // Only initialize Swiper if the element is visible
    const style = window.getComputedStyle(el);
    if (style.display !== 'none') {
      new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        grabCursor: true,
      });
    }
  });
});

 document.querySelectorAll("a.page-link").forEach(link => {
        const isInternal = link.hostname === location.hostname && !link.href.includes("#");
        if (isInternal) {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetURL = this.href;
            const content = document.getElementById("page-content");
            if (content) {
              content.classList.add("animate-slide-up-out");
              setTimeout(() => {
                window.location.href = targetURL;
              }, 500);
            } else {
              window.location.href = targetURL;
            }
          });
        }
      });

const observeAndAnimate = (selector, activeClass) => {
  const target = document.querySelector(selector);
  if (!target) return;

  const observer = new IntersectionObserver(([entry], obs) => {
    if (entry.isIntersecting) {
      target.classList.add(activeClass);
      obs.unobserve(target);
    }
  }, { threshold: 0.3 });

  observer.observe(target);
};

document.addEventListener("DOMContentLoaded", () => {
  
  observeAndAnimate("#portfolio-header", "slide-down-active");
  observeAndAnimate("#portfolio-cards", "slide-up-active");


  observeAndAnimate("#skills-header", "slide-down-active");
  observeAndAnimate("#skills-cards", "slide-up-active");
  observeAndAnimate("#skills-cardss", "slide-up-active");

  observeAndAnimate("#portfolio-header1", "slide-down-active");
  observeAndAnimate("#portfolio-cards1", "slide-up-active");
  observeAndAnimate("#portfolio-cards2", "slide-up-active");
  observeAndAnimate("#portfolio-cards3", "slide-up-active");
  observeAndAnimate("#portfolio-cards4", "slide-up-active");

  observeAndAnimate("#skills-header1", "slide-down-active");
  observeAndAnimate("#skills-cards1", "slide-up-active");
  observeAndAnimate("#skills-cardss1", "slide-up-active");
  observeAndAnimate("#skills-cards2", "slide-up-active");
  observeAndAnimate("#skills-cards3", "slide-up-active");
  observeAndAnimate("#profile", "slide-down-active");
  observeAndAnimate("#profile-about", "slide-up-active");
  observeAndAnimate("#profile-contact", "slide-up-active");

  observeAndAnimate("#word-cards", "slide-up-active");
  observeAndAnimate("#card1", "slide-up-active");
  observeAndAnimate("#card2", "slide-up-active");
  observeAndAnimate("#card3", "slide-up-active");
  observeAndAnimate("#contact", "slide-up-active");

});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    const sections = Array.from(navLinks).map(link => {
      const sectionId = link.getAttribute("data-section");
      return document.getElementById(sectionId);
    });

    function onScroll() {
      let currentSectionId = "";

      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top <= 150 && top + section.offsetHeight > 150) {
          currentSectionId = section.id;
        }
      });

      navLinks.forEach(link => {
        if (link.getAttribute("data-section") === currentSectionId) {
          link.classList.add("bg-[#DFC437]", "px-4", "py-1", "rounded-full");
        } else {
          link.classList.remove("bg-[#DFC437]", "px-4", "py-1", "rounded-full");
        }
      });
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // Run on load
  });
