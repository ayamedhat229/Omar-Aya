/* ════════════════════════════════
   COUNTDOWN TIMER
════════════════════════════════ */
const eventDate = new Date('2026-04-17T19:00:00');

function updateCountdown() {
  const diff = eventDate - Date.now();

  if (diff <= 0) {
    document.getElementById('d').textContent = '00';
    document.getElementById('h').textContent = '00';
    document.getElementById('m').textContent = '00';
    document.getElementById('s').textContent = '00';
    return;
  }

  const pad = n => String(n).padStart(2, '0');

  document.getElementById('d').textContent = pad(Math.floor(diff / 86400000));
  document.getElementById('h').textContent = pad(Math.floor((diff % 86400000) / 3600000));
  document.getElementById('m').textContent = pad(Math.floor((diff % 3600000) / 60000));
  document.getElementById('s').textContent = pad(Math.floor((diff % 60000) / 1000));
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ════════════════════════════════
   SCROLL REVEAL
════════════════════════════════ */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});


/* ════════════════════════════════
   FLOATING SPARKLES
════════════════════════════════ */
function spawnSparkle() {
  const el = document.createElement('div');
  el.className = 'sparkle';

  const size = 4 + Math.random() * 6;
  const duration = 3 + Math.random() * 4;

  el.style.left = Math.random() * 100 + 'vw';
  el.style.top = (30 + Math.random() * 55) + 'vh';
  el.style.width = size + 'px';
  el.style.height = size + 'px';
  el.style.animationDuration = duration + 's';

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

setInterval(spawnSparkle, 900);

function spawnSparkle() {
  const el = document.createElement('div');
  el.className = 'sparkle';

  const shapes = ['✨','💖','💫'];
  el.innerHTML = shapes[Math.floor(Math.random()*shapes.length)];

  el.style.position = 'fixed';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.top = '-20px';
  el.style.fontSize = (12 + Math.random() * 10) + 'px';
  el.style.animation = `fall ${4 + Math.random()*3}s linear`;

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 7000);
}
/* ════════════════════════════════
   OPEN INVITATION + MUSIC
════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {

  const openBtn = document.getElementById('openBtn');
  const openScreen = document.getElementById('openScreen');
  const audio = document.getElementById('myAudio');

  if (!openBtn || !audio) {
    console.log("❌ Button or audio not found");
    return;
  }

  openBtn.addEventListener('click', () => {


    audio.currentTime = 0;
    audio.volume = 0;

    audio.play().catch(err => console.log("Play error:", err));


    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        audio.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);


    openScreen.classList.add('hide');
  });


  audio.addEventListener('timeupdate', () => {
    if (audio.currentTime >= 20) {
      audio.currentTime = 0;
    }
  });

});