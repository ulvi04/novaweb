import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      pulse: number;
    }> = [];

    const particleCount = 50;
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(30, 41, 59, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.02;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow effect
        const glowOpacity = particle.opacity + Math.sin(particle.pulse) * 0.3;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}20`;
        ctx.fill();
        
        // Inner glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}40`;
        ctx.fill();
        
        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(glowOpacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - distance / 500})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw floating tech elements
      const time = Date.now() * 0.001;
      
      // Floating circles
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * 0.1 + (canvas.width * 0.8) * ((i + time * 0.1) % 1);
        const y = canvas.height * 0.2 + Math.sin(time + i) * 100;
        
        ctx.beginPath();
        ctx.arc(x, y, 20 + Math.sin(time * 2 + i) * 5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'radial-gradient(ellipse at center, rgba(30, 41, 59, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)' }}
    />
  );
};

export default AnimatedBackground;