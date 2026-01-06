// SPLASH SCREEN
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const site = document.getElementById("site-content");

  setTimeout(() => {
    splash.style.opacity = "0";

    setTimeout(() => {
      splash.style.display = "none";
      site.classList.add("show"); // site entra animado
    }, 600);

  }, 3000);
});

// animação dos cards
const cards = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(30px)';
  card.style.transition = '0.6s ease';
  observer.observe(card);
});
