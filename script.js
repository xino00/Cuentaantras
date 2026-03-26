// ====== CONFIGURACIÓN ======
// Fecha de reencuentro: 1 de Abril de 2026
const targetDate = new Date(2026, 3, 1, 0, 0, 0).getTime(); // Mes 3 es Abril
// ===========================

// Lógica de música y pantalla de inicio
document.getElementById('start-overlay').addEventListener('click', function() {
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
        // Intentar reproducir música
        const music = document.getElementById('bg-music');
        if (music) {
            music.volume = 0.5;
            music.play().catch(e => console.log("No se pudo auto-reproducir el audio o falta el archivo."));
        }
    }, 1000); // esperar a la transición de opacidad
});


function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML = `<h2 style='font-family: Great Vibes, cursive; font-size: 4rem; color: #d81b60; margin-bottom: 1rem; animation: pulse 2s infinite;'>Hoy es el dia me debes un beso</h2>`;
        document.getElementById("message").innerText = "";
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
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// Generador de destellos (Sparkles) mágicos
function createSparkle() {
    const container = document.getElementById('particles-container');
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Propiedades aleatorias
    const size = Math.random() * 6 + 4; // 4px a 10px
    const posX = Math.random() * 100; // 0% a 100% de la pantalla
    const posY = Math.random() * 100; // 0% a 100% de la pantalla
    const duration = Math.random() * 3 + 2; // 2s a 5s

    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${posX}%`;
    sparkle.style.top = `${posY}%`;
    sparkle.style.animationDuration = `${duration}s`;
    
    container.appendChild(sparkle);
    
    // Eliminar el destello después de animarse
    setTimeout(() => {
        sparkle.remove();
    }, duration * 1000);
}

// Iniciar con algunos destellos
for (let i = 0; i < 30; i++) {
    setTimeout(createSparkle, Math.random() * 2000);
}

// Continuar generando
setInterval(createSparkle, 300);
