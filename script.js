const texts = [
  "Eh... selamat ulang tahun, ya.\nScroll pelan-pelan, ini ruang buat kamu sendiri.",
  "Btw, gak ada kejutan mewah di sini.\nCuma satu hal kecil yang bisa kamu baca dengan tenang.\nNggak harus berkesan sih... tapi semoga bisa ngena dikit aja.",
  "Gak tau ya... kadang yang kita butuh bukan nasihat, tapi ditemenin aja.\nTanpa ditanya, tanpa disuruh cerita. Cukup ada.",
  "Kamu tuh udah sejauh ini. Udah kuat banget.\nMeski nggak semua orang ngerti, tapi aku tau... kamu terus jalan.\nDan itu keren sih.",
  "Kalau kamu capek, nggak harus terus kuat, kok.\nBoleh rebahan. Boleh nangis. Boleh diem.\nTenang... kamu gak sendirian.",
  "Happy birthday ya.\n\nSemoga kamu ngerasa cukup, meski gak semua hal bisa kamu miliki sekarang.\nSemoga kamu tetap bisa nemuin tawa, meski beberapa hari rasanya berat.\nSemoga kamu tetap jadi kamu... walaupun dunia kadang maksa kamu jadi orang lain.\n\nIntinya sih: semoga kamu tetap bertahan. Dan bahagia. Sedikit demi sedikit.",
  "Makasi ya udah mampir ke ruang ini.\n\nGak semua hari harus produktif, gak semua ulang tahun harus rame.\nKadang, tenang aja udah cukup kok."
];

let index = 0;
const textEl = document.getElementById('text');
const btn = document.getElementById('nextBtn');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

function showText(i) {
  textEl.innerText = texts[i];
}

btn.addEventListener('click', () => {
  if (index < texts.length - 1) {
    index++;
    showText(index);
  } else {
    btn.style.display = 'none';
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

// Start
showText(index);
