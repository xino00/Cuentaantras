# ⏰ Cuenta Atrás

Contador interactivo hacia una fecha especial, con glassmorphism, música y efectos visuales.

## [Ver en vivo](https://xino00.github.io/Cuentaantras/)

## Características

- Contador en tiempo real (días, horas, minutos, segundos)
- Barra de progreso con porcentaje de espera completada
- Música de fondo (The Vaccines - I Always Knew)
- Destellos animados con pool limitado para buen rendimiento
- Lluvia de corazones al llegar a la fecha
- Diseño glassmorphism responsive
- Accesible por teclado

## Configuración

Edita `script.js` para cambiar las fechas:

```javascript
const targetDate = new Date(2026, 3, 1, 22, 0, 0).getTime(); // Fecha objetivo
const startDate = new Date(2026, 2, 27, 0, 0, 0).getTime();  // Inicio de la espera (para la barra de progreso)
```

Los meses empiezan en 0 (`0` = Enero, `3` = Abril, `11` = Diciembre).

## Tecnologías

- HTML5 / CSS3 / JavaScript vanilla
- Google Fonts (Great Vibes, Outfit)

---

Hecho con ❤️
