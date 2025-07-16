const texts = [
  "wahhh...\nga nyangka banget bakal di buka🥲",

  "eh...\nselamat ulang tahun ya 🤍\nscroll aja pelan-pelan boss...\n\n\"ini tuh sengaja rico bikin buat kamu sendiri😤\"",

  "maaf ya rico ga bisa ngasih yang spesial 🤧\ncuma bisa ngasih satu halaman kecil ini 🥲",

  "kamu tau ga...\nkadang kita semua tuh gak butuh nasihat\ncuma pengen ditemenin aja 🌿\nbukan disemangatin terus\n\nsekedar ditemenin dalam diam...\nitu udah lebih dari cukup menurut rico sih 😌",

  "kamu tuh udah sejauh ini😤\npasti cape kan?\nitu hal yang udah jelas...\n\ntapi kamu tuh beda!!! 😤🫶\nkamu tetap jalan terus...\ndan itu keren banget menurut Rico mah 😤😤😤",

  "jangan terlalu maksain diri yaa...\nkalau hari ini terasa berat\nkamu boleh rebahan! boleh diem! boleh nangis!\n\nkamu itu gak sendirian ☁️\njadi, jangan terlalu merasa tertekan atau terbebani yaa...\nlepaskan aja semuanyaa ✨\nhari ini hari spesial kamu, kamu tuh bebas mau ngapain aja 😤",

  "happy birthday ya cantikk ✨",

  "semoga di hari ini dan seterusnya tetap berarti 😸\nsemoga kamu tetap bisa nemuin yang namanya senyum\nmeskipun gak semua hal itu membahagiakan...\nt-tapi pokoknya kamu harus jadi versi yang lebih baik lagi 😤\ndan harus memprioritaskan kebahagiaan dirimu daripada orang lain!!!",

  "dan semoga...\nkamu tetap jadi diri kamu sendiri,\nmeskipun dunia kadang maksa kamu pakai topeng lain 🥀",

  "makasih banyakkkk yaa, udah mau mampir ke sini 🥹\n\nkata kata dari rico ga banyak kan 😅\ntapi semoga cukup.\nkadang, tenang aja udah lebih dari cukup 🌧️",

  "wahhh...\nmasih scroll sampe sini? gila sih ini mah! 😭",

  "dirimu fokus banget bacanya,\ngak kabur sampe akhir...\nterharu banget rico nih 🤧😭",

  "dari hal itu aja udah jadi bukti, bahwa dirimu itu keren.✨",

  "jujur aja nih...\nga banyak orang tahan dan nyimak isi pesan kayak gini..\nt-tapi dirimu bisa 🤧🫶",

  "dan entah kenapa, rico tuh percaya...\nwalaupun hidup kadang capeknya minta ampun\n\nkamu pasti akan tetap berdiri.",

  "bukan karena kamu kuat\n\nTAPI karena kamu tuh pasti gak akan nyerah!!! 😤\nitu hal yang beda loh 🫶",

  "jadii.....",

  "sekali lagi rico ucapain\nmakasih yaa udah mampirr 🫶",

  "🎉🎊💥 happy birthday 🥳🎉🎉\n\n(kamu layak dikasih surprise, minimal dari web ini hehe)"
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

  textEl.innerText = texts[i];
  textEl.classList.add('typewriter');

  // Tambahin efek kejutan khusus di slide ke-19 (index 18)
  if (i === 18) {
    textEl.classList.add('surprise');
  }
}

nextBtn.addEventListener('click', () => {
  if (index < texts.length - 1) {
    index++;
    showText(index);
    document.body.style.filter = `brightness(${100 - index * 3}%)`;
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

showText(index);
