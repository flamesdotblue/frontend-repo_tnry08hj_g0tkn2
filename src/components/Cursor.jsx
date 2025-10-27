import React, { useEffect, useRef } from 'react';

// Custom neon cursor: small dot + soft ring following the pointer
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;

    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const animate = () => {
      const rect = dot.getBoundingClientRect();
      const targetX = rect.left;
      const targetY = rect.top;
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animate);
    };

    const handleDown = () => {
      ring.style.transform += ' scale(0.9)';
      ring.style.opacity = '0.8';
    };
    const handleUp = () => {
      ring.style.opacity = '1';
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  return (
    <>
      {/* invisible anchor that follows the exact pointer */}
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[60] h-0 w-0" />
      {/* soft neon ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] -translate-x-3 -translate-y-3 rounded-full border border-[#39FF14]/70"
        style={{ width: 24, height: 24, boxShadow: '0 0 20px rgba(57,255,20,0.55), inset 0 0 12px rgba(57,255,20,0.25)' }}
      />
    </>
  );
};

export default Cursor;
