document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Solicitação enviada com sucesso!");
});

let index = 0;
const track = document.getElementById("carousel-track");
const slides = document.querySelectorAll("#carousel-track img");

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function moveSlide(step) {
  index = (index + step + slides.length) % slides.length;
  updateCarousel();
}

setInterval(() => moveSlide(1), 5000); // troca automática a cada 5s
window.addEventListener("resize", updateCarousel); // reajuste em resize


  function mostrarMaisAvaliacoes() {
    const hiddenCards = document.querySelectorAll('.avl.hidden');
    hiddenCards.forEach(card => card.classList.remove('hidden'));
    document.querySelector('.ver-mais-btn').style.display = 'none';
  }

