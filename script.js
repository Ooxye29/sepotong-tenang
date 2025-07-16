const texts = [
  // 1
  "wahhh...\nga nyangka banget bakal di buka🥲",

  // 2
  "eh...\nselamat ulang tahun ya 🤍",

  // 3
  "scroll aja pelan-pelan boss...\nini tuh sengaja rico bikin\nbuat kamu sendiri😤",

  // 4
  "_(teks kecil)_ scroll aja pelan-pelan boss...\nini tuh sengaja rico bikin\nbuat kamu sendiri😤",

  // 5
  "kamu tau ga...\nkadang kita semua tuh gak butuh nasihat\ncuma pengen ditemenin aja 🌿",

  // 6
  "bukan disemangatin atau apapun\ntetapi hanya sekedar ditemenin dalam diam...",

  // 7
  "_(teks kecil)_ itu udah lebih dari cukup menurut rico sih 😌",

  // 8
  "kamu tuh udah sejauh ini...\npasti cape kan??",

  // 9
  "tapi kamu tuh beda!!! 😤🫶\nkamu tetap jalan terus...\ndan itu keren banget menurut Rico mah 😤😤",

  // 10
  "jangan terlalu maksain diri yaa...\nkalau hari ini terasa berat\nkamu tuh..\nboleh rebahan!\nboleh diem!\nboleh nangis!",

  // 11
  "kamu itu gak sendirian ☁️\njadi, jangan terlalu merasa tertekan\nataupun terbebani yaa...",

  // 12
  "lepaskan aja semuanyaa ✨\nhari ini hari spesial kamu...\nkamu tuh bebas mau ngapain aja 😤",

  // 13
  "happy birthday ya cantikk ✨",

  // 14
  "semoga di hari inii\ndan seterusnya tetap berarti 😸\nsemoga kamu tetap bisa nemuin\nyang namanya senyum..",

  // 15
  "meskipun gak semua hal itu membahagiakan...\nt-tapi pokoknya kamu tuh\nharus jadi versi yang lebih baik lagi 😤\ndan harus memprioritaskan\nkebahagiaan dirimu\ndaripada orang lain!!!",

  // 16
  "dan semoga...\nkamu tetap jadi diri kamu sendiri,\nmeskipun dunia kadang maksa kamu pakai topeng lain 🥀",

  // 17
  "makasih banyakkkk yaa..\nudah mau mampir ke sini 🥹",

  // 18
  "kata kata dari rico ga banyak kan 😅\ntapi semoga cukup.\nkadang, tenang aja udah lebih dari cukup 🌧️",

  // 19
  "wahhh...\nmasih scroll sampe sini? gila sih ini mah! 😭",

  // 20
  "dirimu fokus banget bacanya, \ngak kabur sampe akhir... \nterharu banget rico nih 🤧😭",

  // 21
  "dari hal itu aja udah jadi bukti, bahwa\ndirimu itu keren..✨",

  // 22
  "jujur aja nih...\nga banyak orang tahan\ndan nyimak isi pesan kayak gini..\nt-tapi dirimu bisa 🤧🫶",

  // 23
  "dan entah kenapa, rico tuh percaya...\nwalaupun hidup\nkadang capeknya minta ampun\n\nkamu pasti akan tetap berdiri!!\ndan rico percaya itu 😤",

  // 24
  "bukan karena kamu kuat\nTAPI karena kamu tuh pasti gak akan nyerah!!!\nitu hal yang beda loh 🫶",

  // 25
  "jadii.....",

  // 26
  "sekali lagi rico ucapain\nmakasih yaa udah mampirr 🫶",

  // 27 (slide terakhir / surprise)
  "🎉🎊💥 happy birthday 🥳🎉🎉"
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
  textEl.classList.remove('typewriter', 'surprise');
  void textEl.offsetWidth;

  textEl.textContent = texts[i];

  // Apply surprise effect only on final slide
  if (i === texts.length - 1) {
    textEl.classList.add('surprise');
    createConfetti();
  }

  textEl.classList.add('typewriter');
}

nextBtn.addEventListener('click', () => {
  if (index < texts.length - 1) {
    index++;
    showText(index);
    document.body.style.filter = `brightness(${100 - index * 2}%)`;
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

function createConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.textContent = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.fontSize = "20px";
    confetti.style.animation = "fall 2s ease-out forwards";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2000);
  }
}

showText(index);
