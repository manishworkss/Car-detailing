import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Award, ArrowUpRight, MessageSquare, Gauge, Check } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#08090B] overflow-hidden">
      {/* Background Studio Visual with Precision Gradient Vignette */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero-supercar.jpg"
          alt="Porsche GT3 inside Exotic Car Detailing Studio Ahmedabad"
          className="w-full h-full object-cover object-center brightness-60"
        />
        {/* Dark luxury vignette overlay: strictly deep obsidian and graphite */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B] via-[#08090B]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-[#08090B]/50" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authoritative Copy */}
          <div className="lg:col-span-7">
            {/* Studio Accreditation Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#12141A]/90 border border-[#C5A059]/40 mb-6 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 bg-[#C5A059]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#DEC07E]">
                Certified Automotive Studio: Ahmedabad
              </span>
            </motion.div>

            {/* Headline: Precise, Authoritative, Zero Vague Fluff */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7] leading-[1.15]"
            >
              Certified Paint Protection Film & Multi-Layer Ceramic Coatings
            </motion.h1>

            {/* Subtitle: High-Technical Detailing Value */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-[#B5B5BE] font-normal leading-relaxed max-w-2xl"
            >
              Engineered paint restoration, self-healing optical TPU film, and 9H nanocoatings for sports, luxury, and exotic automobiles. Applied inside a dust-free, climate-controlled detailing bay.
            </motion.p>

            {/* Dual Action CTAs: Crisp Architectural Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(197, 160, 89, 0.3)' }}
                whileTap={{ y: 0 }}
                onClick={onOpenBooking}
                className="btn-luxury-primary cursor-pointer text-center"
              >
                Request Vehicle Estimate
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </motion.button>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="https://wa.me/917435010050?text=Hello%20Exotic%20Car%20Detailing%20Studio%2C%20I%20would%20like%20a%20quote%20for%20my%20vehicle"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-secondary text-center"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WhatsApp Quick Quote
              </motion.a>
            </motion.div>

            {/* Technical Verification Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6"
            >
              <div>
                <div className="flex items-center gap-1.5 text-[#C5A059] mb-1">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">10-Year</span>
                </div>
                <p className="text-xs text-[#9E9EA7]">Official Film Warranty</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[#C5A059] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">9H Hardness</span>
                </div>
                <p className="text-xs text-[#9E9EA7]">Lab Tested Bond</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[#C5A059] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">ISO Grade</span>
                </div>
                <p className="text-xs text-[#9E9EA7]">Cleanroom Application</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Studio Specification Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ rotateY: 5, rotateX: -3 }}
              style={{ perspective: 1000 }}
              className="luxury-card p-8 border border-[#C5A059]/40 relative overflow-hidden backdrop-blur-xl shadow-2xl transition-transform duration-300"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C5A059]/15 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-[#C5A059]" />
                  <span className="font-cinzel text-sm font-bold text-white tracking-wider">
                    Studio Lab Standards
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#25D366] px-2 py-0.5 bg-[#121A15] border border-[#25D366]/30">
                  Active Facility
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-[#0B0D11] border border-white/5 flex justify-between items-center">
                  <span className="text-[#9E9EA7]">Dust Filtration:</span>
                  <span className="text-[#DEC07E] font-semibold">0.3 Micron Positive Pressure</span>
                </div>

                <div className="p-3 bg-[#0B0D11] border border-white/5 flex justify-between items-center">
                  <span className="text-[#9E9EA7]">Thermal Curing:</span>
                  <span className="text-[#DEC07E] font-semibold">Short-Wave Infrared 70°C</span>
                </div>

                <div className="p-3 bg-[#0B0D11] border border-white/5 flex justify-between items-center">
                  <span className="text-[#9E9EA7]">Optical TPU Film:</span>
                  <span className="text-[#DEC07E] font-semibold">200 Micron High-Impact</span>
                </div>

                <div className="p-3 bg-[#0B0D11] border border-white/5 flex justify-between items-center">
                  <span className="text-[#9E9EA7]">Inspection Lamps:</span>
                  <span className="text-[#DEC07E] font-semibold">98 CRI Dual-Spectrum LED</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-[#A0A0A9]">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Software cut templates: Zero razor blades on car paint</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#A0A0A9]">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Hydraulic scissor lifts for undercarriage preservation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
