# Cuenta Atras

Countdown to a special date. Glassmorphism UI with music, sparkles, and heart rain.

## [See it live](https://xino00.github.io/Cuentaantras/)

## Features

- Real-time countdown (days, hours, minutes, seconds)
- Progress bar showing how much of the wait is done
- Rotating love messages that change dynamically as the date approaches
- Background music (The Vaccines - I Always Knew)
- Animated sparkle particles with a capped pool for performance
- Heart rain celebration when the countdown hits zero
- Easter egg hidden in the title
- Glassmorphism design, fully responsive (mobile, tablet, desktop)
- Keyboard accessible

## Setup

Edit `script.js` to set your dates:

```javascript
const targetDate = new Date(2026, 3, 1, 22, 0, 0).getTime(); // Target date
const startDate = new Date(2026, 2, 27, 0, 0, 0).getTime();  // Start date (for progress bar)
```

Months are zero-indexed (`0` = January, `3` = April, `11` = December).

## Stack

HTML / CSS / vanilla JS. No build tools, no dependencies. Google Fonts (Great Vibes, Outfit).

---

Made with love.
