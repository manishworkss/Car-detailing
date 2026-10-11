import React from 'react';
import { Gauge, Sparkles, Sun, Eye, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Gauge,
    title: 'Chemical Decontamination & Clay Prep',
    detail: 'Complete removal of iron deposits, industrial fallout, and embedded road tar using pH-neutral fallout cleaners and fine-grade synthetic clay.'
  },
  {
    step: '02',
    icon: Eye,
    title: 'Digital Micrometer Paint Depth Mapping',
    detail: 'Ultrasonic measurement across every individual body panel to verify clear coat thickness before any machine polisher touches the vehicle.'
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'Precision Multi-Stage Correction',
    detail: 'Compound and finishing pad pairing matched to factory paint hardness to eliminate swirls, buffer trails, and sanding marks down to mirror clarity.'
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Solvent Panel Wipe & De-Greasing',
    detail: 'Medical-grade isopropanol wipe-down to dissolve any remaining polishing oils, ensuring direct covalent bonding of ceramic coatings or film adhesives.'
  },
  {
    step: '05',
    icon: Sun,
    title: 'Climate Bay Application & Infrared Curing',
    detail: 'Application inside a pressurized, dust-filtered clean bay followed by short-wave infrared heat lamps to lock in molecular hardness.'
  }
];

export const ProcessCraftsmanship: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-24 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
            Scientific Protocol
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
            The 5-Stage Studio Detailing Process
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Automotive detailing elevated to surgical precision. We never rush curing times or skip decontamination stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="luxury-card p-6 flex flex-col justify-between border-t-2 border-t-[#C5A059]"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-cinzel text-2xl font-bold text-[#C5A059]/50">
                      {s.step}
                    </span>
                    <div className="p-2 bg-[#161820] border border-white/5 text-[#DEC07E]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-cinzel text-sm font-bold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#9E9EA7] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
