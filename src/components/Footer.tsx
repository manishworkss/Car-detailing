import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-[#060709] border-t border-white/10 text-[#9E9EA7] text-xs">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#C5A059] flex items-center justify-center bg-[#101217]">
                <span className="font-cinzel text-base font-bold text-[#C5A059]">E</span>
              </div>
              <div>
                <span className="font-cinzel text-base font-bold tracking-wider text-white block leading-none">
                  EXOTIC CAR
                </span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-[#C5A059] block mt-1">
                  Detailing Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8A8A93] leading-relaxed max-w-sm">
              Ahmedabad's dedicated automotive studio for high-end paint restoration, certified self-healing paint protection films, and molecular ceramic coatings.
            </p>

            <div className="pt-2 text-[11px] text-[#C5A059]">
              Certified Installers: XPEL | STEK | 9H Nano-Quartz
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a></li>
              <li><a href="#ppf" className="hover:text-[#C5A059] transition-colors">Paint Protection Film</a></li>
              <li><a href="#ceramic" className="hover:text-[#C5A059] transition-colors">Ceramic Coating</a></li>
              <li><a href="#products" className="hover:text-[#C5A059] transition-colors">Care Products</a></li>
              <li><a href="#craftsmanship" className="hover:text-[#C5A059] transition-colors">Studio Protocol</a></li>
              <li><a href="#reviews" className="hover:text-[#C5A059] transition-colors">Google Reviews</a></li>
            </ul>
          </div>

          {/* Service Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Treatments
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#ppf" className="hover:text-[#C5A059] transition-colors">Full Body Stealth PPF Wrap</a></li>
              <li><a href="#ppf" className="hover:text-[#C5A059] transition-colors">Track Pack TPU Film</a></li>
              <li><a href="#ceramic" className="hover:text-[#C5A059] transition-colors">9H Multi-Layer Ceramic</a></li>
              <li><a href="#ceramic" className="hover:text-[#C5A059] transition-colors">Nano Graphene Coating</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Concours Paint Correction</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Leather & Cabin Detailing</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Studio Desk
            </h3>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Bodakdev, S.G. Highway, Ahmedabad, Gujarat 380054</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href="tel:+917435010050" className="hover:text-[#C5A059] text-white">
                  +91 74350 10050
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href="mailto:contact@exoticcardetailingstudio.com" className="hover:text-[#C5A059]">
                  contact@exoticcardetailingstudio.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8 bg-[#040507]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64646D]">
          <div>
            &copy; {new Date().getFullYear()} Exotic Car Detailing Studio. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenTerms}
              className="hover:text-[#C5A059] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-white/10">|</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#C5A059] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
