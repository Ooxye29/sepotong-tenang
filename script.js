const quotes = [
  "Pelan-pelan, nggak usah buru-buru jadi versi terbaikmu.",
  "Nggak harus selalu semangat kok. Lelah juga boleh.",
  "Yang penting jalan terus. Meski pelan, tetep jalan.",
  "Hari ini boleh nggak produktif. Hidup nggak lomba, kan?",
  "Tenang aja, kamu nggak sendiri. Serius."
];

let current = 0;
const quoteBox = document.getElementById('quoteBox');

setInterval(() => {
  current = (current + 1) % quotes.length;
  quoteBox.textContent = `"${quotes[current]}"`;
}, 6000);
