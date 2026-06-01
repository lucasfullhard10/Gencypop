import React, { useEffect, useRef, useState } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial size
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
        canvas.width = width;
        canvas.height = height;
      }
    });

    // Observe body for sizing
    resizeObserver.observe(document.body);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
      alpha: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Float slowly
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 2 + 1;
        
        // Colors from your premium logo
        const colors = [
          'rgba(0, 190, 252, 0.4)',  // Cyan Blue
          'rgba(89, 213, 51, 0.4)',  // Lime Green
          'rgba(250, 167, 26, 0.4)', // Warm Orange
          'rgba(234, 46, 63, 0.4)'   // Coral Red
        ];
        this.baseColor = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries with safe margins
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.baseColor;
        c.fill();
      }
    }

    // Initialize particles array based on screen width
    const particleCount = window.innerWidth < 768 ? 20 : 55;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Capture mouse coordinates to draw connections to user's cursor
    let mouse = { x: -1000, y: -1000, active: false };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY; // adjust for scroll
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;

    const animate = () => {
      // Clear viewport
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Draw faint tech grid in background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      
      // Draw grid lines
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Render connected lines network
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(w, h);
        p1.draw(ctx);

        // Check distance to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          
          if (dist < 130) {
            // Gradient lines connecting matching points representing automation nodes
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, p1.baseColor.replace('0.4', '0.08'));
            gradient.addColorStop(1, p2.baseColor.replace('0.4', '0.08'));
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw line connection to mouse pointer if cursor is active and nearby
        if (mouse.active) {
          const distToMouse = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
          if (distToMouse < 160) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            // Interactive glowing overlay lines
            ctx.strokeStyle = `rgba(0, 190, 252, ${0.12 * (1 - distToMouse / 160)})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Interactive canvas node field */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 
        High-end moving radial gradient aura blooms representing GENCY POP branding colors.
        These utilize slow keyframe translate loops configured in custom index.css styles.
      */}
      <div className="absolute top-[5%] left-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-r from-[#00befc]/8 via-transparent to-transparent blur-[130px] animate-pulse-slow" />
      <div className="absolute top-[35%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-[#59d533]/5 via-transparent to-transparent blur-[140px] animate-float" />
      <div className="absolute bottom-[25%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#fca71a]/5 via-transparent to-transparent blur-[120px] animate-glow" />
      <div className="absolute bottom-[5%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-t from-[#ea2e3f]/6 via-transparent to-transparent blur-[130px] animate-pulse-slow" />

      {/* Soft overlay pattern to match original design leather-matte texture aspect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,12,16,0.3)_100%)]" />
    </div>
  );
};
