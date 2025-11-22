import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValue, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Book, AlertTriangle, ExternalLink, Download, ChevronDown, 
  Scale, Star, Bug, ArrowUp, Share2, X, ArrowRight, Activity, 
  Clock, Zap, Compass, Lock, Eye, History, Heart, Scroll, Check, 
  Users, Undo, Percent, Shield, User, Shirt, Sun, Layers, Music, Youtube
} from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import ParticleBackground from './components/ui/ParticleBackground';
import Section from './components/ui/Section';
import Modal from './components/Modal';
import SpotlightCard from './components/ui/SpotlightCard';
import Timeline from './components/Timeline';
import MagneticCursor from './components/ui/MagneticCursor';
import AnimatedDivider from './components/ui/AnimatedDivider';
import TextReveal from './components/ui/TextReveal';
import { CONTRADICTIONS, FAQS, RESOURCES } from './constants';
import { Contradiction } from './types';

// --- Premium Interactions ---

// 1. Comparison Slider for Contradictions
const ComparisonSlider = ({ item, onClick }: { item: Contradiction; onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative h-48 rounded-2xl overflow-hidden cursor-none hover:shadow-2xl hover:shadow-champagne-500/10 transition-all duration-500 border border-white/5"
    >
      <div className="absolute inset-0 flex">
        {/* Left Side (Quran) */}
        <div className="w-1/2 h-full bg-emerald-950/30 relative border-r border-white/5 group-hover:w-[55%] transition-all duration-500">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2 font-sans">Qur'an</span>
            <p className="text-white font-serif text-2xl italic leading-tight">{item.quranText}</p>
          </div>
        </div>
        
        {/* Right Side (Hadith) */}
        <div className="w-1/2 h-full bg-rose-950/30 relative group-hover:w-[45%] transition-all duration-500">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
            <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-2 font-sans">Hadith</span>
            <p className="text-gray-400 font-serif text-2xl italic leading-tight line-through decoration-rose-500/50">{item.hadithText}</p>
          </div>
        </div>
      </div>
      
      {/* Center Label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian-950 border border-white/10 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-xl z-10 group-hover:scale-110 transition-transform font-sans">
        VS
      </div>

      {/* Hover Reveal Detail */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-champagne-400 font-bold tracking-widest uppercase text-sm border-b border-champagne-400 pb-1 font-cinzel">Analyze Conflict</span>
      </div>
    </div>
  );
};

// 2. Scroll Progress Ring (Right Side)
const ScrollRing = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-4">
      <div className="relative w-px h-32 bg-white/10">
        <motion.div 
          style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          className="absolute top-0 left-0 w-full bg-champagne-500 shadow-[0_0_10px_rgba(197,146,71,0.8)]"
        />
      </div>
      <span className="text-[10px] font-bold text-white/20 -rotate-90 tracking-widest font-sans">SCROLL</span>
    </div>
  );
};

// 3. Premium Initial Loader
const EliteLoader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "1em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-cinzel text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-champagne-200 to-champagne-600 mb-4 font-bold"
        >
          THE PURE PATH
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-champagne-500 to-transparent mx-auto"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onAnimationComplete={onComplete}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-4 text-xs font-mono text-champagne-500/50"
        >
          INITIALIZING LUXURY EXPERIENCE...
        </motion.div>
      </div>
      
      {/* Ambient Background Light */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-radial-gradient from-champagne-900/20 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

// Helper for Icons
const getIcon = (name: string) => {
  const icons: { [key: string]: any } = {
    book: Book, history: History, heart: Heart, scroll: Scroll,
    check: Check, users: Users, undo: Undo, percent: Percent,
    shield: Shield, user: User, eye: Eye, shirt: Shirt,
    'arrow-up': ArrowUp, sun: Sun, layers: Layers, x: X, music: Music
  };
  const Icon = icons[name] || Star;
  return <Icon className="w-4 h-4 text-champagne-400" />;
};

// Main Component
const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedContradiction, setSelectedContradiction] = useState<Contradiction | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [activeFaqTab, setActiveFaqTab] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<'about' | 'contact' | 'privacy' | 'terms' | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Search Logic
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{item: any, type: string}[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setSearchResults([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const results = [
      ...CONTRADICTIONS.filter(c => c.title.toLowerCase().includes(lowerQuery) || c.description.toLowerCase().includes(lowerQuery)).map(i => ({ item: i, type: 'Evidence' })),
      ...FAQS.filter(f => f.question.toLowerCase().includes(lowerQuery) || f.answer.toLowerCase().includes(lowerQuery)).map(i => ({ item: i, type: 'FAQ' })),
      ...RESOURCES.filter(r => r.title.toLowerCase().includes(lowerQuery) || r.description.toLowerCase().includes(lowerQuery)).map(i => ({ item: i, type: 'Resource' }))
    ];
    setSearchResults(results);
  };

  const handleBeginJourney = () => {
    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredContradictions = activeTab === 'all' ? CONTRADICTIONS : CONTRADICTIONS.filter(c => c.category === activeTab);
  const filteredFaqs = activeFaqTab === 'all' ? FAQS : FAQS.filter(f => f.category === activeFaqTab);

  return (
    <>
      <AnimatePresence>
        {loading && <EliteLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-obsidian-950 text-white min-h-screen selection:bg-champagne-500 selection:text-black font-sans">
          <MagneticCursor />
          <ScrollRing />
          <ParticleBackground />
          <Header onSearch={handleSearch} />
          
          {/* Global Search Overlay */}
          <AnimatePresence>
            {searchQuery && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-24 left-0 right-0 z-40 px-4 pointer-events-none"
              >
                <div className="max-w-2xl mx-auto bg-dark-900/90 backdrop-blur-xl border border-gold-500/20 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {searchResults.length > 0 ? (
                    <div className="p-4 space-y-2">
                       {searchResults.map((res, idx) => (
                         <div key={idx} className="p-4 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-colors cursor-pointer group">
                           <div className="flex justify-between items-center mb-1">
                             <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">{res.type}</span>
                             <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gold-400 opacity-0 group-hover:opacity-100 transition-all" />
                           </div>
                           <h4 className="font-cinzel text-white group-hover:text-gold-200">{res.item.title || res.item.question}</h4>
                           <p className="text-sm text-gray-500 line-clamp-2 mt-1">{res.item.description || res.item.answer}</p>
                         </div>
                       ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <main>
            <Hero 
              onBeginJourney={handleBeginJourney} 
              onWatchTrailer={() => setIsVideoModalOpen(true)} 
            />
            
            <AnimatedDivider />

            {/* EXPANDED CONTENT: The Timeline of Truth */}
            <Section id="timeline" title="The Timeline of Truth" subtitle="Understanding the gap between Revelation and Tradition." badge="History">
              <Timeline />
            </Section>

            <AnimatedDivider />

            {/* EXPANDED CONTENT: Core Principles Grid */}
            <Section id="principles" title="Core Principles" subtitle="The pillars of the Qur'an-centric perspective." badge="Foundation">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Lock, title: "Completeness", desc: "The Book is fully detailed." },
                  { icon: Eye, title: "Clarity", desc: "Easy to understand for seekers." },
                  { icon: Compass, title: "Guidance", desc: "The sole source of religious law." },
                  { icon: Activity, title: "Logic", desc: "Compatible with reason & science." }
                ].map((item, i) => (
                  <SpotlightCard key={i} className="flex flex-col items-center text-center p-8">
                    <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-champagne-500/50 transition-colors">
                      <item.icon className="w-6 h-6 text-champagne-400" />
                    </div>
                    <h4 className="text-xl font-bold font-cinzel mb-3 tracking-wide">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </SpotlightCard>
                ))}
              </div>
            </Section>

            <AnimatedDivider />

            {/* Contradictions: The "Versus" Layout */}
            <Section id="contradictions" title="The Evidence" subtitle="Irreconcilable differences between Divine Writ and Human History." badge="Conflict">
              
              {/* Luxury Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {['all', 'quran-vs-hadith', 'character-issues', 'scientific'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border font-sans ${
                      activeTab === tab 
                        ? 'bg-champagne-500 text-black border-champagne-500 shadow-[0_0_20px_rgba(197,146,71,0.4)]' 
                        : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {tab.replace(/-/g, ' ')}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredContradictions.map((item) => (
                  <SpotlightCard key={item.id} className="!p-0 !bg-none border-none">
                    <div className="p-8 pb-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest font-sans ${
                          item.severity === 'high' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {item.severity} Impact
                        </span>
                        <h3 className="font-cinzel font-bold text-2xl">{item.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">{item.description}</p>
                    </div>
                    
                    {/* Interactive Comparison Slider Component */}
                    <div className="px-8 pb-8">
                       <ComparisonSlider item={item} onClick={() => setSelectedContradiction(item)} />
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </Section>

            <AnimatedDivider />

            {/* FAQ Section with Accordion */}
            <Section id="faq" title="Wisdom & Answers" subtitle="Addressing common questions with Qur'anic clarity." badge="FAQ">
              
              {/* FAQ Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['all', 'practice', 'authority', 'theology'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFaqTab(tab)}
                    className={`px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border font-sans ${
                      activeFaqTab === tab 
                        ? 'bg-champagne-500 text-black border-champagne-500 shadow-[0_0_20px_rgba(197,146,71,0.4)]' 
                        : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="max-w-3xl mx-auto">
                {filteredFaqs.map((faq, i) => (
                  <div key={faq.id} className="mb-4">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex justify-between items-center group ${
                        expandedFaq === faq.id 
                          ? 'bg-white/5 border-champagne-500/30' 
                          : 'bg-transparent border-white/5 hover:bg-white/5'
                      }`}
                    >
                      <span className="font-serif text-xl italic text-white group-hover:text-champagne-200 transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedFaq === faq.id ? 'rotate-180 text-champagne-500' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedFaq === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 pl-8 border-l border-champagne-500/20 ml-6 mt-4">
                            <p className="text-gray-300 leading-loose font-light text-lg mb-6 font-sans">
                              {faq.answer}
                            </p>
                            
                            {/* FAQ Highlights Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {faq.highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-champagne-200/80">
                                  {getIcon(h.icon)}
                                  <span className="font-light">{h.text}</span>
                                </div>
                              ))}
                            </div>

                            {faq.quote && (
                              <div className="bg-champagne-900/10 p-6 rounded-xl border border-champagne-500/10">
                                <p className="font-serif italic text-champagne-200 text-xl mb-3">"{faq.quote.text}"</p>
                                <p className="text-xs font-bold text-champagne-500 uppercase tracking-widest font-sans">— {faq.quote.cite}</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </Section>

            <AnimatedDivider />

            {/* Resources with Premium Hover Effects */}
            <Section id="resources" title="The Library" subtitle="Curated knowledge for the discerning mind." badge="Archive">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {RESOURCES.map((res, i) => (
                  <a 
                    key={res.id} 
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <SpotlightCard 
                      className="group cursor-pointer hover:-translate-y-4 hover:border-champagne-500/50 hover:shadow-[0_20px_50px_-10px_rgba(197,146,71,0.15)] transition-all duration-700 h-full"
                    >
                      {/* Hover Glow Background */}
                      <div className="absolute inset-0 bg-gradient-to-b from-champagne-500/0 to-champagne-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-10">
                        <ExternalLink className="w-6 h-6 text-champagne-400 group-hover:text-champagne-300" />
                      </div>
                      
                      <div className="relative h-full flex flex-col justify-between z-10">
                        <div>
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 block font-sans group-hover:text-champagne-500/70 transition-colors duration-300">{res.type}</span>
                          <h3 className="text-2xl font-cinzel font-bold text-white mb-3 group-hover:text-champagne-200 transition-colors duration-300 leading-tight">
                            {res.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light font-sans group-hover:text-gray-300 transition-colors duration-300">
                            {res.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 pt-6 border-t border-white/5 group-hover:border-champagne-500/20 transition-colors duration-300">
                          <div className="w-1 h-1 rounded-full bg-champagne-500 group-hover:scale-[3] group-hover:bg-champagne-400 transition-all duration-300" />
                          <span className="text-xs font-mono text-champagne-500/80 group-hover:text-champagne-400 group-hover:pl-2 transition-all duration-300">{res.meta}</span>
                        </div>
                      </div>
                    </SpotlightCard>
                  </a>
                ))}
              </div>
            </Section>
          </main>

          {/* Premium 4-Column Footer */}
          <footer className="relative bg-black pt-32 pb-12 border-t border-white/5 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-champagne-500/50 to-transparent" />
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-champagne-500/5 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
                <div className="text-center md:text-left">
                  <h2 className="font-cinzel text-3xl text-white mb-2 font-bold tracking-wide">THE PURE PATH</h2>
                  <p className="text-gray-500 text-xs tracking-[0.3em] uppercase font-sans">Elite Qur'anic Studies</p>
                </div>
                <div className="flex gap-8">
                   <a href="#" className="text-gray-500 hover:text-champagne-400 transition-colors uppercase text-xs font-bold tracking-widest hover:underline decoration-champagne-500/50 underline-offset-8 font-sans">Twitter</a>
                   <a href="https://www.instagram.com/thestraightpath02?igsh=MTd1Z2w0emV6MGl3ZQ==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-champagne-400 transition-colors uppercase text-xs font-bold tracking-widest hover:underline decoration-champagne-500/50 underline-offset-8 font-sans">Instagram</a>
                   <a href="mailto:contact@thepurepath.com" className="text-gray-500 hover:text-champagne-400 transition-colors uppercase text-xs font-bold tracking-widest hover:underline decoration-champagne-500/50 underline-offset-8 font-sans">Email</a>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-12 mb-12 font-sans">
                <div>
                   <h4 className="text-white font-bold mb-6 font-cinzel text-lg">Explore</h4>
                   <ul className="space-y-4 text-sm text-gray-500 font-light">
                     <li><a href="#timeline" className="hover:text-champagne-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-champagne-500 transition-all"></span> Timeline</a></li>
                     <li><a href="#principles" className="hover:text-champagne-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-champagne-500 transition-all"></span> Principles</a></li>
                     <li><a href="#contradictions" className="hover:text-champagne-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-champagne-500 transition-all"></span> Evidence</a></li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-white font-bold mb-6 font-cinzel text-lg">Company</h4>
                   <ul className="space-y-4 text-sm text-gray-500 font-light">
                     <li><button onClick={() => setActiveModal('about')} className="hover:text-champagne-400 transition-colors">About Us</button></li>
                     <li><button onClick={() => setActiveModal('contact')} className="hover:text-champagne-400 transition-colors">Contact</button></li>
                     <li><button onClick={() => setActiveModal('privacy')} className="hover:text-champagne-400 transition-colors">Privacy Policy</button></li>
                   </ul>
                </div>
                <div className="col-span-2 md:pl-12">
                  <h4 className="text-white font-bold mb-6 font-cinzel text-lg">Newsletter</h4>
                  <p className="text-xs text-gray-500 mb-8 font-light leading-relaxed max-w-sm">Join the elite circle of thinkers and receive weekly insights directly to your inbox.</p>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }} className="flex border-b border-white/10 pb-2 max-w-sm group focus-within:border-champagne-500 transition-colors">
                    <input type="email" placeholder="Enter email address" className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700 font-light" required />
                    <button type="submit" className="text-champagne-500 uppercase text-xs font-bold hover:text-white transition-colors tracking-widest">Join</button>
                  </form>
                </div>
              </div>
              
              <div className="text-center text-xs text-gray-800 uppercase tracking-widest font-bold font-sans flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
                <span>&copy; 2025 The Pure Path.</span>
                <span className="hidden md:block">Designed for the Truth Seeker.</span>
              </div>
            </div>
          </footer>

          {/* Analysis Modal */}
          <Modal
            isOpen={!!selectedContradiction}
            onClose={() => setSelectedContradiction(null)}
            title="Analysis"
          >
            {selectedContradiction && (
              <div className="relative">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 p-4 opacity-5 pointer-events-none">
                  <Scale className="w-64 h-64 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-4">{selectedContradiction.title}</h2>
                <div className="flex gap-2 mb-8">
                  {selectedContradiction.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-champagne-500 border border-champagne-500/20 px-2 py-1 rounded font-sans">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-emerald-900/10 border border-emerald-500/20 p-6 rounded-xl">
                    <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-4 font-sans">Divine Command</p>
                    <p className="font-serif text-2xl text-emerald-100 leading-relaxed italic">"{selectedContradiction.quranText}"</p>
                    <p className="text-right text-xs font-mono text-emerald-500/50 mt-4">{selectedContradiction.quranSource}</p>
                  </div>
                  <div className="bg-rose-900/10 border border-rose-500/20 p-6 rounded-xl">
                    <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-4 font-sans">Attributed Tradition</p>
                    <p className="font-serif text-2xl text-rose-100 leading-relaxed line-through decoration-rose-500/30 italic">"{selectedContradiction.hadithText}"</p>
                    <p className="text-right text-xs font-mono text-rose-500/50 mt-4">{selectedContradiction.hadithSource}</p>
                  </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-300 font-light leading-loose font-serif text-lg">{selectedContradiction.description}</p>
                  <p className="text-gray-300 font-light leading-loose font-serif text-lg">
                    The distinction is clear. One source guarantees protection (15:9), the other is a historical compilation subject to human error and political influence.
                  </p>
                </div>
              </div>
            )}
          </Modal>

           {/* Video Modal (Trailer) */}
           <Modal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            title="The Pure Path - Cinematic Trailer"
          >
            <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/eY_P1aJ3sks?autoplay=1&rel=0&modestbranding=1" 
                title="Trailer"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-gray-400 mt-4 text-sm font-light">Experience the visual journey of divine clarity.</p>
          </Modal>

          {/* Generic Info Modal (About, Contact, Privacy) */}
          <Modal
            isOpen={!!activeModal}
            onClose={() => setActiveModal(null)}
            title={activeModal ? activeModal.charAt(0).toUpperCase() + activeModal.slice(1) : ''}
          >
            {activeModal === 'about' && (
              <div className="space-y-6">
                <p className="text-lg font-serif italic text-champagne-200">"We are dedicated to unearthing the pristine message of the Qur'an."</p>
                <p className="text-gray-300 leading-relaxed">The Pure Path is an initiative to educate the world about the sufficiency of God's final revelation. We believe that the Qur'an explains itself and requires no external sources for religious law.</p>
              </div>
            )}
            {activeModal === 'contact' && (
              <div className="space-y-6">
                <p className="text-gray-300">Reach out to our team of researchers and scholars.</p>
                <div className="grid gap-4">
                  <div className="p-4 border border-white/10 rounded-lg">
                    <h5 className="font-bold text-white mb-1">General Inquiries</h5>
                    <p className="text-champagne-400">info@thepurepath.com</p>
                  </div>
                  <div className="p-4 border border-white/10 rounded-lg">
                    <h5 className="font-bold text-white mb-1">Press</h5>
                    <p className="text-champagne-400">press@thepurepath.com</p>
                  </div>
                </div>
              </div>
            )}
            {activeModal === 'privacy' && (
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>Your privacy is paramount. We do not track your reading habits or sell your data.</p>
                <p>This application uses local storage to save your preferences. No personal information is collected unless you voluntarily subscribe to our newsletter.</p>
              </div>
            )}
          </Modal>

          {/* Floating Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-8 left-8 z-40 hidden md:block"
          >
             <button className="w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:border-champagne-500 hover:text-champagne-500 transition-all duration-300 group">
               <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
             </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default App;