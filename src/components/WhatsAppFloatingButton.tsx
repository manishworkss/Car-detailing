import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/917435010050?text=Hello%20Exotic%20Car%20Detailing%20Studio%2C%20I%20would%20like%20an%20instant%20quote%20for%20my%20vehicle"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#12141A] hover:bg-[#1A1D24] text-white px-4 py-3 border border-[#25D366]/40 shadow-2xl transition-all duration-300 group"
        aria-label="Direct WhatsApp Consultation"
      >
        <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <MessageSquare className="w-4 h-4 text-[#25D366]" />
        <span className="text-xs uppercase tracking-wider font-semibold text-[#F5F5F7]">
          WhatsApp Quote
        </span>
      </a>
    </aside>
  );
};
