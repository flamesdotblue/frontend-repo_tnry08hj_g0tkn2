import React, { useEffect, useRef } from 'react';

// Lightweight interactive particle field that follows the cursor
const InteractiveParticles = ({ count = 120, color = '#39FF14' }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const rand = (min, max) => Math.random() * (max - min) + min;

    // Initialize particles
    particlesRef.current = Array.from({ length: count }).map(() => ({
      x: rand(0, canvas.clientWidth),
      y: rand(0, canvas.clientHeight),
      vx: rand(-0.3, 0.3),
      vy: rand(-0.3, 0.3),
      size: rand(0.6, 1.8),
      glow: rand(0.2, 0.8)
    }));

    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onResize = () => resize();
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('resize', onResize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // Background subtle fade to create trails
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      const { x: mx, y: my } = mouseRef.current;

      for (const p of particlesRef.current) {
        // Mouse attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        const force = Math.min(1.8 / dist, 0.06);
        p.vx += dx * force * 0.02;
        p.vy += dy * force * 0.02;

        // Natural drift and damping
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Wrap around edges
        if (p.x < -5) p.x = canvas.clientWidth + 5;
        if (p.x > canvas.clientWidth + 5) p.x = -5;
        if (p.y < -5) p.y = canvas.clientHeight + 5;
        if (p.y > canvas.clientHeight + 5) p.y = -5;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const alpha = 0.6 + p.glow * 0.4;
        ctx.fillStyle = `rgba(57,255,20,${alpha})`;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10 + p.glow * 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Connect close particles with faint lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 90) {
            const opacity = 0.12 * (1 - d / 90);
            ctx.strokeStyle = `rgba(57,255,20,${opacity})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ filter: 'blur(0.2px)' }}
    />
  );
};

export default InteractiveParticles;
