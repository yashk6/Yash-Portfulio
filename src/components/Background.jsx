import React, { useEffect, useRef } from 'react';

// A lightweight canvas background with floating geometric shapes.
// The animation is deliberately simple to keep performance high while giving a premium feel.
// It uses requestAnimationFrame and draws a few rotating triangles that bounce off the edges.

const Shape = (ctx, size, color) => {
  const points = [];
  for (let i = 0; i < 3; i++) {
    const angle = (i * Math.PI * 2) / 3;
    points.push({
      x: Math.cos(angle) * size,
      y: Math.sin(angle) * size,
    });
  }
  return { points, color, size };
};

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const shapes = [];
    const shapeCount = 15;
    for (let i = 0; i < shapeCount; i++) {
      const size = Math.random() * 30 + 20;
      const shape = Shape(ctx, size, `rgba(0,255,255,${Math.random() * 0.2 + 0.1})`);
      shape.x = Math.random() * width;
      shape.y = Math.random() * height;
      shape.vx = (Math.random() - 0.5) * 0.4;
      shape.vy = (Math.random() - 0.5) * 0.4;
      shapes.push(shape);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      shapes.forEach((s) => {
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate((Date.now() % 3600) / 3600);
        ctx.beginPath();
        ctx.moveTo(s.points[0].x, s.points[0].y);
        ctx.lineTo(s.points[1].x, s.points[1].y);
        ctx.lineTo(s.points[2].x, s.points[2].y);
        ctx.closePath();
        ctx.fillStyle = s.color;
        ctx.fill();
        ctx.restore();
        // move
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -s.size) s.x = width + s.size;
        if (s.x > width + s.size) s.x = -s.size;
        if (s.y < -s.size) s.y = height + s.size;
        if (s.y > height + s.size) s.y = -s.size;
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none animate-float"
      style={{ zIndex: -1 }}
    />
  );
};

export default Background;
