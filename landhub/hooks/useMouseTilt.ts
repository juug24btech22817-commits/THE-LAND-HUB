import React, { useState, useRef, MouseEvent } from 'react';
import { useSpring } from 'framer-motion';

interface MouseTiltOptions {
  stiffness?: number;
  damping?: number;
  tiltRangeX?: number;
  tiltRangeY?: number;
}

export const useMouseTilt = (options: MouseTiltOptions = {}) => {
  const {
    stiffness = 100,
    damping = 30,
    tiltRangeX = 20,
    tiltRangeY = 20
  } = options;

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const tiltX = useSpring(mousePos.y * tiltRangeX, { stiffness, damping });
  const tiltY = useSpring(mousePos.x * -tiltRangeY, { stiffness, damping });

  // For direct style application
  const rotateX = useSpring(mousePos.y * -tiltRangeX, { stiffness, damping });
  const rotateY = useSpring(mousePos.x * tiltRangeY, { stiffness, damping });

  return {
    ref,
    mousePos,
    handleMouseMove,
    handleMouseLeave,
    tiltX,
    tiltY,
    rotateX,
    rotateY
  };
};
