document.addEventListener("scroll", () => {
  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("animate-fade-in");
    }
  });
});