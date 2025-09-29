const zIndex = 1057;

/**
 * @returns {any}
 */
// Snowflake shapes for winter effect
const snowflakeShape = () => {
  return window.confetti.shapeFromPath({
    // Simple 6-pointed snowflake path
    path: 'M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2ZM12 6L11.45 8.55L9 9L11.45 9.45L12 12L12.55 9.45L15 9L12.55 8.55L12 6Z',
    matrix: [0.8, 0, 0, 0.8, -6, -6],
  });
};

const simpleSnowflake = () => {
  return window.confetti.shapeFromPath({
    // Even simpler snowflake - just a star
    path: 'M12,2 L15,9 L22,9 L16.5,14 L18.5,21 L12,17 L5.5,21 L7.5,14 L2,9 L9,9 Z',
    matrix: [0.5, 0, 0, 0.5, -6, -6],
  });
};

/**
 * @returns {void}
 */
export const basicAnimation = () => {
  if (window.confetti) {
    window.confetti({
      origin: { y: 1 },
      zIndex: zIndex,
    });
  }
};

/**
 * @param {number} [until=15]
 * @returns {void}
 */
export const openAnimation = (until = 300) => {
  if (!window.confetti) {
    return;
  }

  const duration = until * 1000;
  const animationEnd = Date.now() + duration;

  const snowflakes = [snowflakeShape(), simpleSnowflake()];
  const colors = ['#ffffff', '#f0f8ff', '#e6f3ff', '#ddeeff'];

  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const frame = () => {
    const timeLeft = animationEnd - Date.now();

    colors.forEach((color, index) => {
      window.confetti({
        particleCount: 2,
        startVelocity: randomInRange(0, 3),
        ticks: Math.max(120, 200 * (timeLeft / duration)),
        origin: {
          x: Math.random(),
          y: -0.1, // Start above screen
        },
        zIndex: zIndex,
        colors: [color],
        shapes: [snowflakes[index % snowflakes.length]],
        drift: randomInRange(-0.8, 0.8),
        gravity: randomInRange(0.3, 0.8),
        scalar: randomInRange(0.4, 0.8),
        angle: randomInRange(0, 360),
        spread: 360,
      });
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
};

/**
 * @param {HTMLElement} div
 * @param {number} [duration=50]
 * @returns {void}
 */
export const tapTapAnimation = (div, duration = 50) => {
  if (!window.confetti) {
    return;
  }

  const end = Date.now() + duration;
  const domRec = div.getBoundingClientRect();
  const yPosition = Math.max(
    0.3,
    Math.min(1, domRec.top / window.innerHeight + 0.2)
  );

  const snowflakes = [snowflakeShape(), simpleSnowflake()];
  const colors = ['#ffffff', '#f0f8ff'];
  
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const frame = () => {
    colors.forEach((color, index) => {
      window.confetti({
        particleCount: 3,
        angle: randomInRange(60, 120),
        spread: 80,
        shapes: [snowflakes[index % snowflakes.length]],
        origin: { x: domRec.left / window.innerWidth, y: yPosition },
        zIndex: zIndex,
        colors: [color],
        gravity: randomInRange(0.4, 0.8),
        scalar: randomInRange(0.5, 0.9),
        drift: randomInRange(-0.5, 0.5),
      });
      window.confetti({
        particleCount: 3,
        angle: randomInRange(60, 120),
        spread: 80,
        shapes: [snowflakes[index % snowflakes.length]],
        origin: { x: domRec.right / window.innerWidth, y: yPosition },
        zIndex: zIndex,
        colors: [color],
        gravity: randomInRange(0.4, 0.8),
        scalar: randomInRange(0.5, 0.9),
        drift: randomInRange(-0.5, 0.5),
      });
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
};
