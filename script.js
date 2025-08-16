// Tunggu sampai semua konten dimuat
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".container > * , .social-links a");

  elements.forEach((el, index) => {
    el.classList.add("fade-up");
    el.style.setProperty("--delay", `${0.2 * (index + 1)}s`);
  });
});
