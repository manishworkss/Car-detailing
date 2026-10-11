import React from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

const REVIEWS = [
  {
    author: 'Kunal M.',
    vehicle: 'Porsche 911 Carrera S (Guards Red)',
    service: 'Full Body XPEL Ultimate Plus PPF',
    date: 'Verified Google Review',
    text: 'Brought my 911 straight from delivery for full PPF wrap. The edge tucking around headlights and complex rear bumper contours is flawless. Zero razor marks or stretch haze. Studio team kept me updated with daily inspection photos.'
  },
  {
    author: 'Devang P.',
    vehicle: 'BMW M3 Competition (Isle of Man Green)',
    service: '2-Stage Paint Correction + 9H Ceramic Coating',
    date: 'Verified Google Review',
    text: 'The factory clear coat had visible dealer wash swirls. Exotic Car Studio brought out phenomenal depth and glass-like reflections. Water beading during monsoon drives is incredible. Truly top tier craftsmanship in Gujarat.'
  },
  {
    author: 'Siddharth R.',
    vehicle: 'Mercedes-AMG G63 (Obsidian Black)',
    service: 'Full Matte Stealth PPF + Interior Ceramic',
    date: 'Verified Google Review',
    text: 'Transformed the gloss black into a stealth satin finish. The precision of computer-cut templates around door hinges and trim is remarkable. Very professional setup with dedicated climate control bays.'
  }
];

export const GoogleReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0C0E12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Verification Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
              Client Feedback
            </p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
              Verified Google Reviews
            </h2>
            <p className="mt-2 text-sm text-[#9E9EA7]">
              Real feedback from luxury and exotic vehicle owners across Ahmedabad and Gujarat.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-4 bg-[#12141A] border border-[#C5A059]/30 flex items-center gap-4 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-[#C5A059] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs font-semibold text-white">
                4.9 / 5.0 Star Rating
              </p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <a
              href="https://maps.google.com/?cid=18218671408365611709"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#DEC07E] hover:underline flex items-center gap-1 font-medium"
            >
              View on Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.author}
              className="luxury-card p-8 flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#25D366] flex items-center gap-1 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified Client
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#C5C5CD] leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Vehicle Specification */}
              <div className="pt-4 border-t border-white/5">
                <p className="font-cinzel text-sm font-bold text-white">
                  {rev.author}
                </p>
                <p className="text-xs font-medium text-[#DEC07E] mt-0.5">
                  {rev.vehicle}
                </p>
                <p className="text-[10px] text-[#64646D] mt-1">
                  Service: {rev.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
