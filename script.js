// Smooth scroll saat klik link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Tombol Back to Top
const backToTop = document.createElement('button');
backToTop.innerText = "↑ Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.fontSize = "16px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.background = "#222";
backToTop.style.color = "white";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";

// Tampilkan tombol saat scroll ke bawah
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Klik tombol untuk balik ke atas
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
