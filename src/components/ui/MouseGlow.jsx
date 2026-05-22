'use client';

/**
 * MouseGlow — Mouse-reactive ambient light that follows the cursor.
 * Creates a subtle luxury atmospheric glow effect.
 */
import { useState, useEffect } from 'react';

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    function onMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="mouse-glow"
      aria-hidden="true"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
