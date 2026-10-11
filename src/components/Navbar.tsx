import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Menu, X, ShieldCheck, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '3D Bay POV', href: '#car-pov' },
    { label: 'Services', href: '#services' },
    { label: 'PPF Armor', href: '#ppf' },
    { label: 'Ceramic 9H', href: '#ceramic' },
    { label: 'Collection', href: '#products' },
    { label: 'Process', href: '#craftsmanship' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Studio', href: '#location' },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090B]/95 backdrop-blur-xl border-b border-[#C5A059]/25 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-[#08090B]/90 backdrop-blur-md border-b border-white/5'
      }`}
    >
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-[#0B0D11] border-b border-white/5 py-1.5 px-6 text-[11px] text-[#8E8E98]">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#DEC07E] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              Certified XPEL & STEK Studio: Ahmedabad, Gujarat
            </span>
            <span className="text-[#55555E]">•</span>
            <span>Cleanroom Climate Bay</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Mon - Sat: 9:00 AM - 7:30 PM</span>
            <span className="text-[#55555E]">•</span>
            <a
              href="tel:+917435010050"
              className="text-[#F5F5F7] hover:text-[#C5A059] font-medium transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              +91 74350 10050
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 border border-[#C5A059]/60 flex items-center justify-center bg-[#101217] group-hover:border-[#DEC07E] transition-all duration-300 shadow-sm">
              <span className="font-cinzel text-lg font-bold text-[#DEC07E] group-hover:scale-105 transition-transform">
                E
              </span>
            </div>
            <div>
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-widest text-[#F5F5F7] block leading-none">
                EXOTIC CAR
              </span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#C5A059] block mt-1 font-semibold">
                Detailing Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Items: Single-Line, Refined Proportions */}
          <nav className="hidden xl:flex items-center gap-7 text-[12px] uppercase tracking-[0.14em] font-medium text-[#B5B5BE]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 hover:text-[#DEC07E] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Clean, Consistent Action Buttons (Uniform 40px Height, Architectural Luxury) */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              href="https://wa.me/917435010050?text=Hello%20Exotic%20Car%20Detailing%20Studio%2C%20I%20would%20like%20a%20quote%20for%20my%20vehicle"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 inline-flex items-center justify-center gap-2 bg-[#101217] hover:bg-[#161922] text-[#F5F5F7] border border-[#C5A059]/35 hover:border-[#C5A059] text-[11px] uppercase tracking-wider font-semibold rounded-[2px] transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </motion.a>

            <motion.button
              whileHover={{ y: -1, boxShadow: '0 4px 20px rgba(197, 160, 89, 0.25)' }}
              whileTap={{ y: 0 }}
              onClick={onOpenBooking}
              className="h-10 px-5 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D8B46C] via-[#C5A059] to-[#B38D46] hover:from-[#E5C37E] hover:to-[#C5A059] text-[#08090B] border border-[#DEC07E] text-[11px] uppercase tracking-wider font-bold rounded-[2px] transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Book Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#DEC07E] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#0A0C10] border-b border-[#C5A059]/30 px-6 py-6 space-y-5"
          >
            <nav className="flex flex-col space-y-3.5 text-xs uppercase tracking-wider text-[#C5C5CD]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#DEC07E] transition-colors flex items-center justify-between border-b border-white/5 pb-2"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="https://wa.me/917435010050?text=Hello%20Exotic%20Car%20Detailing%20Studio%2C%20I%20would%20like%20a%20quote%20for%20my%20vehicle"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 flex items-center justify-center gap-2 bg-[#12141A] text-white border border-[#25D366]/40 text-xs uppercase tracking-wider font-semibold rounded-[2px]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                Direct WhatsApp Quote
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="h-11 flex items-center justify-center gap-2 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-wider rounded-[2px]"
              >
                Book Studio Inspection
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
