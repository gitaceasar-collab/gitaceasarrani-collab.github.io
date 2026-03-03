// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// TYPING EFFECT
const text = "Gita Ceasar Rani";
let i = 0;
function typing() {
  if (i < text.length) {
    document.querySelector(".typing").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// REVEAL SCROLL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// SLIDER
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  slides.forEach(s => s.classList.remove("active"));
  index = (n + slides.length) % slides.length;
  slides[index].classList.add("active");
}

document.querySelector(".next").onclick = () => showSlide(index + 1);
document.querySelector(".prev").onclick = () => showSlide(index - 1);

// AUTO SLIDE
setInterval(() => showSlide(index + 1), 4000);
