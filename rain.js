const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let drops = [];

for (let i = 0; i < 300; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    l: Math.random() * 1,
    xs: -1 + Math.random() * 2 + 1,
    ys: Math.random() * 10 + 10
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x + d.xs, d.y + d.l * d.ys);
  }
  ctx.stroke();
  move();
}

function move() {
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    d.x += d.xs;
    d.y += d.ys;
    if (d.y > canvas.height) {
      d.y = -20;
      d.x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawRain, 30);
