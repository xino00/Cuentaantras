# ⏰ Cuentaantras - Contador de Días

Un hermoso contador interactivo hacia una fecha especial, construido con HTML, CSS y JavaScript.

## 🌟 Características

- **Diseño moderno**: Glassmorphism con fondos animados
- **Contador en tiempo real**: Muestra días, horas, minutos y segundos
- **Partículas animadas**: Destellos mágicos que aparecen aleatoriamente
- **Música de fondo**: Soporte para audio (opcional)
- **Responsive**: Se adapta perfectamente a dispositivos móviles
- **Mensaje personalizado**: Cambia cuando llega la fecha especial

## 🚀 Uso

1. Descarga o clona el repositorio
2. Abre `index.html` en tu navegador
3. (Opcional) Coloca un archivo `musica.mp3` en la carpeta para agregar música

## ⚙️ Configuración

Para cambiar la fecha destino, edita el archivo `script.js`:

```javascript
const targetDate = new Date(2026, 3, 1, 0, 0, 0).getTime(); // Cambia aquí
```

Los meses comienzan en 0, así que:
- `0` = Enero
- `3` = Abril
- `11` = Diciembre

## 🎨 Personalización

- **Colores**: Edita `style.css` para cambiar los gradientes y colores
- **Mensaje**: Modifica el texto en `index.html` (línea 24) y `script.js` (línea 26)
- **Fondo**: Reemplaza `bg-light.png` y `bg.png` por tus propias imágenes

## 📦 Tecnologías

- HTML5
- CSS3 (Glassmorphism, Animaciones, Media Queries)
- Vanilla JavaScript
- Google Fonts (Great Vibes, Outfit)

## 📄 Licencia

MIT - Siéntete libre de usar y modificar este proyecto

## 💡 Consejos

- Para mejor rendimiento, optimiza las imágenes de fondo
- La música se reproduce cuando el usuario toca la pantalla (respeta el autoplay policy de navegadores modernos)
- Funciona sin conexión a internet

---

Hecho con ❤️
