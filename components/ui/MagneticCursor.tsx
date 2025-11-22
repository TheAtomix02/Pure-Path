
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const MagneticCursor = () => {
  const [hoveredState, setHoveredState] = useState<'default' | 'pointer' | 'text' | 'input'>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // 1. The Main Dot - Ultra responsive, no lag
  const dotSpringConfig = { stiffness: 1500, damping: 50, mass: 0.2 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // 2. The Fluid Follower - Luxurious lag
  // Lower stiffness and higher damping creates that "underwater" premium feel
  const ringSpringConfig = { stiffness: 150, damping: 15, mass: 0.8 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      // Make visible on first move
      if (!isVisible) setIsVisible(true);

      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
      
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      
      const isPointer = computedStyle.cursor === 'pointer' || 
                        target.tagName.toLowerCase() === 'button' ||
                        target.tagName.toLowerCase() === 'a' ||
                        target.closest('button') || 
                        target.closest('a') ||
                        target.getAttribute('role') === 'button';
                        
      const isText = target.tagName.toLowerCase() === 'p' ||
                     target.tagName.toLowerCase() === 'span' || 
                     target.tagName.toLowerCase() === 'h1' ||
                     target.tagName.toLowerCase() === 'h2' ||
                     target.tagName.toLowerCase() === 'h3' ||
                     target.tagName.toLowerCase() === 'li';

      const isInput = target.tagName.toLowerCase() === 'input' ||
                      target.tagName.toLowerCase() === 'textarea';

      if (isPointer) {
        setHoveredState('pointer');
      } else if (isInput) {
        setHoveredState('input');
      } else if (isText) {
        setHoveredState('text');
      } else {
        setHoveredState('default');
      }
    };

    const manageMouseDown = () => setIsClicking(true);
    const manageMouseUp = () => setIsClicking(false);
    const manageMouseLeave = () => setIsVisible(false);
    const manageMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', manageMouseMove);
    window.addEventListener('mousedown', manageMouseDown);
    window.addEventListener('mouseup', manageMouseUp);
    document.addEventListener('mouseleave', manageMouseLeave);
    document.addEventListener('mouseenter', manageMouseEnter);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      window.removeEventListener('mousedown', manageMouseDown);
      window.removeEventListener('mouseup', manageMouseUp);
      document.removeEventListener('mouseleave', manageMouseLeave);
      document.removeEventListener('mouseenter', manageMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block mix-blend-difference transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* 1. Fluid Follower Ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hoveredState === 'pointer' ? 60 : hoveredState === 'input' || hoveredState === 'text' ? 0 : 40,
          height: hoveredState === 'pointer' ? 60 : hoveredState === 'input' || hoveredState === 'text' ? 0 : 40,
          opacity: hoveredState === 'text' || hoveredState === 'input' ? 0 : 1,
          scale: isClicking ? 0.75 : 1,
          backgroundColor: hoveredState === 'pointer' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
          borderWidth: hoveredState === 'pointer' ? '0px' : '1px',
          borderColor: 'rgba(255, 255, 255, 0.4)'
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
        className="absolute top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center backdrop-blur-[1px]"
      />
      
      {/* 2. Main Dot / Morphing Caret */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{
          // Dimensions
          width: hoveredState === 'input' || hoveredState === 'text' ? 2 : hoveredState === 'pointer' ? 8 : 8,
          height: hoveredState === 'input' || hoveredState === 'text' ? 24 : hoveredState === 'pointer' ? 8 : 8,
          // Shape
          borderRadius: hoveredState === 'input' || hoveredState === 'text' ? 0 : '50%',
          // Scale
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0 left-0 bg-champagne-400 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
      />

      {/* 3. Text Highlight Mode (Optional subtle glow for pointer) */}
      <AnimatePresence>
        {hoveredState === 'pointer' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{ x: ringX, y: ringY }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 blur-md"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MagneticCursor;
