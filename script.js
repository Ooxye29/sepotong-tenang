const texts = [
  "eh... selamat ulang tahun ya 🤍\nscroll pelan-pelan,\nini ruang buat kamu sendiri.",
  
  "btw,\ngak ada kejutan heboh di sini 🎁\ncuma satu halaman kecil yang kamu temuin... entah sengaja atau nggak.",

  "gak tau ya,\nkadang kita gak butuh nasihat,\ncuma pengen ditemenin aja 🌿",

  "kamu udah sejauh ini...\nlelah? pasti.\ntapi kamu jalan terus. dan itu keren banget menurutku.",

  "kalau hari ini berat, gapapa banget kok.\nboleh rebahan. boleh diem. boleh nangis.\nyang penting, kamu gak sendirian ☁️",

  "happy birthday ya ✨\n\nsemoga hari ini sederhana tapi berarti.\nsemoga kamu tetap bisa nemuin senyum,\nmeskipun gak semua hal ikut ngerayain kamu.\n\ndan... semoga kamu tetap jadi kamu,\nmeskipun dunia kadang maksa kamu jadi yang lain.",

  "makasi udah mampir ke sini\n\nini gak banyak, tapi semoga cukup.\nkadang, tenang aja udah lebih dari cukup 🌧️"
];

let index = 0;
let waClickCount = 0;

const textEl = document.getElementById('text');
const nextBtn = document.getElementById('nextBtn');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const restartBtn = document.getElementById('restartBtn');
const secretSlide = document.getElementById('secretSlide');
const waIcon = document.getElementById('waIcon');

function showText(i) {
  textEl.classList.remove('typewriter');
  void textEl.offsetWidth; // reset animation
  textEl.classList.add('typewriter');
  textEl.innerText = texts[i];
}

nextBtn.addEventListener('click', () => {
  if (index < texts.length - 1) {
    index++;
    showText(index);
    document.body.style.filter = `brightness(${100 - index * 5}%)`; // redup pelan
  } else {
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
  }
});

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '🔊';
  } else {
    music.pause();
    musicBtn.textContent = '🔇';
  }
});

restartBtn.addEventListener('click', () => {
  index = 0;
  showText(index);
  nextBtn.style.display = 'inline-block';
  restartBtn.style.display = 'none';
  document.body.style.filter = 'brightness(100%)';
});

waIcon.addEventListener('click', () => {
  waClickCount++;
  if (waClickCount === 3) {
    secretSlide.style.display = 'block';
    setTimeout(() => {
      secretSlide.style.display = 'none';
      waClickCount = 0;
    }, 5000);
  }
});

// start
showText(index);
