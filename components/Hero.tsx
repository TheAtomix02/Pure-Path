import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import TextReveal from './ui/TextReveal';

interface HeroProps {
  onBeginJourney?: () => void;
  onWatchTrailer?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBeginJourney, onWatchTrailer }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects for scroll
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleImg = useTransform(scrollY, [0, 1000], [1, 1.2]);

  // Mouse parallax for "3D" feel
  const mouseX = useSpring(0, { stiffness: 40, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; 
      const y = (e.clientY / innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Layer transforms for depth perception
  const layer1X = useTransform(mouseX, x => x * 1.2);
  const layer1Y = useTransform(mouseY, y => y * 1.2);
  
  const layer2X = useTransform(mouseX, x => x * -0.5); // Moves opposite
  const layer2Y = useTransform(mouseY, y => y * -0.5);

  const layer3X = useTransform(mouseX, x => x * 0.8);
  const layer3Y = useTransform(mouseY, y => y * 0.8);

  return (
    <div ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900 via-obsidian-950 to-black z-0" />
      
      {/* --- NEW: Subtle Geometric Parallax Elements --- */}
      
      {/* 1. The Halo (Large Ring) */}
      <motion.div 
        style={{ x: layer1X, y: layer1Y }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full border border-champagne-500/5 blur-[1px] pointer-events-none z-0 hidden md:block"
      />

      {/* 2. The Diamond (Rotated Square) */}
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        animate={{ 
          y: [0, -30, 0],
          rotate: [45, 50, 45],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[20%] w-64 h-64 border border-champagne-400/10 pointer-events-none z-0 hidden md:block"
      />

      {/* 3. The Orb (Floating Light) */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        animate={{ 
          y: [0, 40, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[15%] w-2 h-2 bg-champagne-300 rounded-full blur-[4px] shadow-[0_0_20px_rgba(197,146,71,0.6)] pointer-events-none z-0"
      />

      {/* --- Existing Animated Abstract Glows --- */}
      <motion.div 
        style={{ x: mouseX, y: mouseY, scale: scaleImg }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-champagne-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" 
      />
      <motion.div 
        style={{ x: useTransform(mouseX, x => -x), y: useTransform(mouseY, y => -y) }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-champagne-700/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" 
      />

      {/* Main Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-7xl mx-auto"
      >
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-10 flex items-center gap-3 px-6 py-2 rounded-full border border-champagne-500/20 bg-white/5 backdrop-blur-md"
        >
          <Star className="w-3 h-3 text-champagne-400 fill-champagne-400" />
          <span className="text-[10px] font-bold text-champagne-100 tracking-[0.3em] uppercase font-sans">The Elite Collection</span>
          <Star className="w-3 h-3 text-champagne-400 fill-champagne-400" />
        </motion.div>

        {/* Cinematic Title with Decoder Effect */}
        <div className="relative mb-10 flex flex-col items-center">
          <TextReveal 
            text="DIVINE" 
            className="font-cinzel text-6xl md:text-8xl lg:text-[9rem] font-bold text-white leading-[0.9] tracking-tight drop-shadow-2xl" 
            delay={0.5}
          />
          <TextReveal 
            text="Clarity" 
            className="font-serif italic text-6xl md:text-8xl lg:text-[9rem] text-transparent bg-clip-text bg-gradient-to-r from-champagne-200 via-champagne-400 to-champagne-600 leading-[0.9] tracking-tight py-2"
            delay={1.2}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 font-sans"
        >
          Experience the pure path of Islam. <br/>
          <span className="text-champagne-300 font-serif italic">Untainted. Unfiltered. Unmatched.</span>
        </motion.p>

        {/* Magnetic Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <button 
            onClick={onBeginJourney}
            className="group relative px-10 py-5 bg-champagne-500 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(197,146,71,0.5)] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 text-obsidian-950 font-bold tracking-[0.2em] text-sm uppercase font-sans">
              Begin Journey <ArrowRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-white/30 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </button>

          <button 
            onClick={onWatchTrailer}
            className="group px-10 py-5 rounded-full border border-white/10 hover:border-champagne-500/50 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm cursor-pointer"
          >
            <span className="flex items-center gap-2 text-white font-medium tracking-[0.2em] text-sm uppercase group-hover:text-champagne-300 transition-colors font-sans">
              <Play className="w-3 h-3 fill-current" /> Watch Trailer
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-champagne-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-champagne-500/50 font-sans font-bold">Scroll</span>
      </motion.div>
    </div>
  );
};

export default Hero;