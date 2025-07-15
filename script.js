// -- TETAPKAN QUOTES --
const quotes = [
  "Hari ini kamu cukup, bahkan saat kamu merasa tidak.",
  "Kamu nggak harus jadi yang paling kuat untuk tetap bertahan.",
  "Pelan-pelan aja. Nggak ada yang nyuruh kamu buru-buru hari ini.",
  "Kalau kamu merasa sendiri, kamu nggak sendirian. Ada yang diam-diam doakan kamu, mungkin bahkan dirimu sendiri.",
  "Berhenti sejenak bukan berarti menyerah. Kadang, itu justru bentuk terbaik dari merawat diri."
];

let currentQuote = 0;

// -- MULAI PERJALANAN --
function startJourney() {
  document.querySelector('.hero').classList.add('hidden');
  document.getElementById("bgMusic").play();

  let sections = document.querySelectorAll('section.hidden');
  sections.forEach((sec, i) => {
    setTimeout(() => {
      sec.classList.remove('hidden');
      sec.classList.add('visible');
    }, 1500 * (i + 1));
  });

  updateQuote();
  scrollToNext();
}

// -- SCROLL OTOMATIS --
function scrollToNext() {
  setTimeout(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, 1800);
}

// -- UPDATE QUOTE SETIAP 7 DETIK --
function updateQuote() {
  const quoteBox = document.getElementById("quoteBox");
  quoteBox.textContent = quotes[currentQuote];
  currentQuote = (currentQuote + 1) % quotes.length;

  setInterval(() => {
    quoteBox.textContent = quotes[currentQuote];
    currentQuote = (currentQuote + 1) % quotes.length;
  }, 7000);
}

// -- KONTROL AUDIO --
const toggleBtn = document.getElementById('toggleAudio');
const audio = document.getElementById('bgMusic');

toggleBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.textContent = '🔈';
  } else {
    audio.pause();
    toggleBtn.textContent = '🔇';
  }
});

// -- POPUP RAHASIA DIKLIK MANUAL SAJA --
window.addEventListener("DOMContentLoaded", () => {
  const secretImage = document.getElementById('secretImage');
  const popup = document.getElementById('secretPopup');
  const closeBtn = document.querySelector('#secretPopup button');

  if (secretImage) {
    secretImage.addEventListener('click', () => {
      popup.classList.remove('hidden');
      popup.style.display = 'flex';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.add('hidden');
      popup.style.display = 'none';
    });
  }
});
