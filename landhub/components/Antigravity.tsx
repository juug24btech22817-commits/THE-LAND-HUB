import React, { useRef, useEffect } from 'react';

interface AntigravityProps {
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  color?: string;
  autoAnimate?: boolean;
  particleVariance?: number;
  rotationSpeed?: number;
  depthFactor?: number;
  pulseSpeed?: number;
  particleShape?: 'circle' | 'capsule';
  fieldStrength?: number;
}

export const Antigravity: React.FC<AntigravityProps> = ({
  count = 300,
  magnetRadius = 10,
  ringRadius = 10,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 2,
  lerpSpeed = 0.1,
  color = "#29d4ff",
  autoAnimate = false,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'capsule',
  fieldStrength = 10,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      angle: number;
      distance: number;
      speed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = particleSize + Math.random() * particleVariance;
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * ringRadius;
        this.speed = (Math.random() - 0.5) * waveSpeed;
      }

      update(time: number, mouseX: number, mouseY: number) {
        // Rotation effect
        if (rotationSpeed > 0) {
          this.angle += rotationSpeed * 0.01;
        }

        // Wave effect
        const waveX = Math.sin(time * waveSpeed + this.angle) * waveAmplitude * depthFactor;
        const waveY = Math.cos(time * waveSpeed + this.angle) * waveAmplitude * depthFactor;

        // Magnet effect
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetX = this.baseX + waveX;
        let targetY = this.baseY + waveY;

        if (dist < magnetRadius * 10) {
          const force = (magnetRadius * 10 - dist) / (magnetRadius * 10);
          targetX -= dx * force * fieldStrength * 0.01;
          targetY -= dy * force * fieldStrength * 0.01;
        }

        // Lerp to target
        this.x += (targetX - this.x) * lerpSpeed;
        this.y += (targetY - this.y) * lerpSpeed;

        // Pulse size
        if (pulseSpeed > 0) {
          this.size = (particleSize + Math.sin(time * pulseSpeed) * particleVariance) * depthFactor;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = color;
        ctx.beginPath();
        if (particleShape === 'capsule') {
          ctx.roundRect(this.x - this.size, this.y - this.size / 2, this.size * 2, this.size, this.size / 2);
        } else {
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        }
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(Math.random() * w, Math.random() * h));
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Parallax shift
      const shiftX = (mouseRef.current.x / canvas.width - 0.5) * -30;
      const shiftY = (mouseRef.current.y / canvas.height - 0.5) * -30;
      container.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0)`;

      particles.forEach(p => {
        p.update(time, mouseRef.current.x, mouseRef.current.y);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, magnetRadius, ringRadius, waveSpeed, waveAmplitude, particleSize, lerpSpeed, color, particleVariance, pulseSpeed, particleShape, fieldStrength]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full will-change-transform"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};
