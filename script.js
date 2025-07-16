const texts = [
  { main: "wahhh...\nga nyangka banget bakal di buka🥲" },
  { main: "eh...\nselamat ulang tahun ya 🤍" },
  { main: "scroll aja pelan-pelan boss...", sub: "ini tuh sengaja rico bikin\nbuat kamu sendiri😤" },
  { main: "kamu tau ga...\nkadang kita semua tuh gak butuh nasihat\ncuma pengen ditemenin aja 🌿" },
  { main: "bukan disemangatin atau apapun\ntetapi hanya sekedar ditemenin dalam diam...", sub: "itu udah lebih dari cukup menurut rico sih 😌" },
  { main: "kamu tuh udah sejauh ini...\npasti cape kan??" },
  { main: "tapi kamu tuh beda!!! 😤🫶\nkamu tetap jalan terus...\ndan itu keren banget menurut Rico mah 😤😤" },
  { main: "jangan terlalu maksain diri yaa...\nkalau hari ini terasa berat\nkamu tuh..\nboleh rebahan!\nboleh diem!\nboleh nangis!" },
  { main: "kamu itu gak sendirian ☁️\njadi, jangan terlalu merasa tertekan\nataupun terbebani yaa..." },
  { main: "lepaskan aja semuanyaa ✨\nhari ini hari spesial kamu...\nkamu tuh bebas mau ngapain aja 😤" },
  { main: "happy birthday ya cantikk ✨" },
  { main: "semoga di hari inii\ndan seterusnya tetap berarti 😸\nsemoga kamu tetap bisa nemuin\nyang namanya senyum.." },
  { main: "meskipun gak semua hal itu membahagiakan...\nt-tapi pokoknya kamu tuh\nharus jadi versi yang lebih baik lagi 😤\ndan harus memprioritaskan\nkebahagiaan dirimu\ndaripada orang lain!!!" },
  { main: "dan semoga...\nkamu tetap jadi diri kamu sendiri,\nmeskipun dunia kadang maksa kamu pakai topeng lain 🥀" },
  { main: "makasih banyakkkk yaa..\nudah mau mampir ke sini 🥹" },
  { main: "kata kata dari rico ga banyak kan 😅\ntapi semoga cukup.\nkadang, tenang aja udah lebih dari cukup 🌧️" },
  { main: "wahhh...\nmasih scroll sampe sini? gila sih ini mah! 😭" },
  { main: "dirimu fokus banget bacanya,\ngak kabur sampe akhir...\nterharu banget rico nih 🤧😭" },
  { main: "dari hal itu aja udah jadi bukti, bahwa\ndirimu itu keren..✨" },
  { main: "jujur aja nih...\nga banyak orang tahan\ndan nyimak isi pesan kayak gini..\nt-tapi dirimu bisa 🤧🫶" },
  { main: "dan entah kenapa, rico tuh percaya...\nwalaupun hidup\nkadang capeknya minta ampun\n\nkamu pasti akan tetap berdiri!!", sub: "dan rico percaya itu 😤" },
  { main: "bukan karena kamu kuat\nTAPI karena kamu tuh pasti gak akan nyerah!!!\nitu hal yang beda loh 🫶" },
  { main: "jadii....." },
  { main: "sekali lagi rico ucapain\nmakasih yaa udah mampirr 🫶" },
  { main: "🎉🎊💥 happy birthday 🥳🎉🎉", isFinal: true }
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
  const current = texts[i];
  textEl.innerHTML = "";

  const mainP = document.createElement("span");
  mainP.textContent = current.main;
  textEl.appendChild(mainP);

  if (current.sub) {
    const sub = document.createElement("span");
    sub.textContent = current.sub;
    sub.className = "small-italic";
    textEl.appendChild(sub);
  }

  if (current.isFinal) {
    textEl.classList.add("surprise");
    setTimeout(createConfetti, 200); // delay biar muncul rapi
  } else {
    textEl.classList.remove("surprise");
  }
}

nextBtn.addEventListener("click", () => {
  if (index < texts.length - 1) {
    index++;
    showText(index);
    document.body.style.filter = `brightness(${100 - index * 2}%)`;
  } else {
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
  }
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🔇";
  }
});

restartBtn.addEventListener("click", () => {
  index = 0;
  showText(index);
  nextBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  document.body.style.filter = "brightness(100%)";
});

waIcon.addEventListener("click", () => {
  waClickCount++;
  if (waClickCount === 3) {
    secretSlide.style.display = "block";
    setTimeout(() => {
      secretSlide.style.display = "none";
      waClickCount = 0;
    }, 5000);
  }
});

function createConfetti() {
  const container = document.querySelector(".confetti-container");
  const colors = ['#ff7675', '#74b9ff', '#ffeaa7', '#55efc4', '#fd79a8'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti-piece");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.bottom = `0`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    container.appendChild(piece);

    setTimeout(() => piece.remove(), 3000);
  }
}

showText(index);
