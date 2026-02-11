// Mobile Menu Toggle
const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("is-active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menuToggle.classList.remove("is-active");
    navMenu.classList.remove("active");
  }),
);

// Scroll Animations (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll(
  ".hero-content, .class-card, .instructor-card, .section-title, .about-text, .testimonial-card",
);

elementsToAnimate.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(el);
});

// Add 'visible' class styles dynamically
const style = document.createElement("style");
style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Navbar Background on Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.9)";
    navbar.style.boxShadow = "none";
  }
});

// Form Submission (Dummy Data)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simulate form submission
  const button = contactForm.querySelector("button");
  const originalText = button.innerText;

  button.innerText = "Sending...";
  button.disabled = true;

  setTimeout(() => {
    alert("Thank you for contacting VocalMusic! We get back to you shortly.");
    contactForm.reset();
    button.innerText = originalText;
    button.disabled = false;
  }, 1500);
});
