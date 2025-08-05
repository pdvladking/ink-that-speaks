// src/components/RainCanvas.jsx
import { useEffect, useRef } from "react";

export default function RainCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const droplets = Array(100)
      .fill()
      .map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.2 + 0.05,
        speed: Math.random() * 0.3 + 0.1,
      }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      droplets.forEach((drop) => {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(36, 255, 225, ${drop.opacity})`;
        ctx.fill();
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} className="rain z-0" />;
}
