// ====== CONFIGURACION ======
// Fecha de reencuentro: 1 de Abril de 2026
const targetDate = new Date(2026, 3, 1, 22, 0, 0).getTime(); // 1 Abril 22:00
// Fecha de inicio (cuando se "puso" la cuenta atras) — para calcular progreso
const startDate = new Date(2026, 2, 27, 0, 0, 0).getTime(); // 27 de Marzo 2026
// ===========================

// Logica de musica y pantalla de inicio
const overlay = document.getElementById('start-overlay');

function dismissOverlay() {
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        const music = document.getElementById('bg-music');
        if (music) {
            music.volume = 0.5;
            music.play().catch(() => {});
        }
    }, 1000);
}

overlay.addEventListener('click', dismissOverlay);
overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dismissOverlay();
    }
});

// Countdown
let countdownInterval;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML =
            `<h2 style='font-family: Great Vibes, cursive; font-size: 4rem; color: #d81b60; margin-bottom: 1rem; animation: pulse 2s infinite;'>Hoy es el día, me debes un beso</h2>`;
        document.getElementById("message").innerText = "";
        document.getElementById("progress-bar").style.width = "100%";
        document.getElementById("progress-text").innerText = "100% — ¡Ya estamos juntos!";
        startHeartRain();
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // Progress bar
    const totalDuration = targetDate - startDate;
    const elapsed = now - startDate;
    const percent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
    document.getElementById("progress-bar").style.width = percent.toFixed(1) + "%";
    document.getElementById("progress-text").innerText = percent.toFixed(1) + "% de la espera completada";
}

countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Heart rain celebration when countdown ends
function startHeartRain() {
    const container = document.getElementById('hearts-container');
    const hearts = ['💖', '💕', '💗', '💘', '❤️', '💝'];
    let count = 0;
    const maxHearts = 80;

    const interval = setInterval(() => {
        if (count >= maxHearts) {
            clearInterval(interval);
            return;
        }
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        const duration = Math.random() * 3 + 3;
        heart.style.animationDuration = duration + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), duration * 1000);
        count++;
    }, 120);
}

// Sparkles — capped pool to avoid memory issues
const MAX_SPARKLES = 35;
const sparkleContainer = document.getElementById('particles-container');

function createSparkle() {
    if (sparkleContainer.childElementCount >= MAX_SPARKLES) return;

    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    const size = Math.random() * 6 + 4;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 3 + 2;

    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${posX}%`;
    sparkle.style.top = `${posY}%`;
    sparkle.style.animationDuration = `${duration}s`;

    sparkleContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), duration * 1000);
}

for (let i = 0; i < 30; i++) {
    setTimeout(createSparkle, Math.random() * 2000);
}

setInterval(createSparkle, 300);
