import React from 'react';

const BRANDS = [
  { name: 'Porsche', badge: 'PORSCHE' },
  { name: 'Ferrari', badge: 'FERRARI' },
  { name: 'Lamborghini', badge: 'LAMBORGHINI' },
  { name: 'Mercedes-AMG', badge: 'MERCEDES-BENZ' },
  { name: 'BMW M', badge: 'BMW' },
  { name: 'Range Rover', badge: 'LAND ROVER' },
  { name: 'Audi Sport', badge: 'AUDI' },
  { name: 'Bentley', badge: 'BENTLEY' },
];

export const BrandPartners: React.FC = () => {
  return (
    <section className="bg-[#0C0E12] border-y border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] uppercase tracking-[0.25em] text-[#9E9EA7] mb-8 font-medium">
          Prestige Marques Entrusted to Our Studio
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="py-4 px-3 border border-white/5 bg-[#101217] hover:border-[#C5A059]/40 transition-colors flex items-center justify-center text-center group"
            >
              <span className="font-cinzel text-xs tracking-wider text-[#A0A0A9] group-hover:text-[#DEC07E] transition-colors">
                {brand.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
