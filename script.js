const texts = [

  // 0 - Pre-opening
  "wahhh...\nga nyangka banget bakal di buka🥲",

  // 1 - Opening
  "eh...\nselamat ulang tahun ya 🤍\nscroll aja pelan-pelan,\nini ruang buat kamu sendiri,",

  // 2 - Peringatan chill
  "maaf ya ga bisa ngasih yang spesial 🤧\ncuma bisa ngasih satu halaman kecil ini...🥲",

  // 3 - Transisi ringan
  "kadang kita semua tuh gak butuh nasihat,\ncuma pengen ditemenin aja 🌿\n\nbukan disemangatin terus,\ntapi sekedar ditemenin dalam diam... udah cukup.",

  // 4 - Kamu udah sejauh ini
  "kamu udah sejauh ini...\nlelah kan?\nitu hal yang pasti.\ntapi kamu berbeda, kamu tetap jalan terus.🤍\ndan itu keren banget menurutku.😤",

  // 5 - Kamu gak sendirian
  "jangan terlalu memaksakan diri,\nkalau hari ini terasa berat\nkamu boleh rebahan. boleh diem. boleh nangis.\n\nkamu itu gak sendirian ☁️\njadi, jangan terlalu merasa tertekan atau terbebani yaa, lepaskan aja semua✨\nhari ini hari spesial kamu, kamu bebas mau ngapain aja😤",

  // 6 - Ucapan ulang tahun
  "happy birthday ya ✨\n\nsemoga di hari ini dan seterusnya tetap berarti.\nsemoga kamu tetap bisa nemuin senyum,\nmeskipun gak semua hal ikut ngerayain kamu.\n\ndan...\nsemoga kamu tetap jadi diri kamu sendiri,\nmeskipun dunia kadang maksa kamu pakai topeng lain.",

  // 7 - Penutup tenang
  "makasi udah mampir ke sini\n\nkata kata dari rico ga banyak kan😅,\ntapi semoga cukup.\nkadang, tenang aja udah lebih dari cukup 🌧️",

  // 8 - Slide penutup gaya Medan
  "hmm...\n\nmasih juga scroll sampe sini? gila sih ini mah! 😭\n\ndirimu fokus banget bacanya,\ngak kabur sampe akhir...\nterharu banget rico nih🤧🤍\ndari hal itu aja udah jadi bukti, bahwa dirimu itu keren.✨\n\njujur aja, gak banyak orang tahan diem dan nyimak isi pesan kayak gini.\ndirimu bisa...🤧\n\ndan entah kenapa, Rico tuh percaya...\nwalaupun hidup kadang capeknya minta ampun,\ntapi kamu pasti akan tetap berdiri.\n\nbukan karena kamu kuat,\ntapi karena kamu tuh pasti gak akan nyerah.\nitu beda, loh. 🫶\nRico ngerti banget🥲\n\njadi ...\nmakasih yaa udah mampir.\n\nkalau web ini bisa bikin dirimu tenang,\nwalaupun cuma sedikit saja ...\nitu udah lebih dari cukup buat diriku,\nRico terikut senang juga😌"
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
