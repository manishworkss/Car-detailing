import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export const StudioLocator: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
                Studio Location
              </p>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
                Visit Our Ahmedabad Detailing Facility
              </h2>
              <p className="mt-4 text-sm text-[#9E9EA7] leading-relaxed">
                Equipped with cleanroom climate bays, certified hydraulic scissor lifts, and high-CRI inspection tunnels. Advance appointments required for vehicle intake inspections.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-[#101217] border border-white/5">
                <div className="p-2.5 bg-[#161820] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
                    Studio Address
                  </h3>
                  <p className="text-sm text-[#9E9EA7]">
                    Exotic Car Detailing Studio
                  </p>
                  <p className="text-sm text-[#9E9EA7]">
                    Bodakdev, S.G. Highway, Ahmedabad, Gujarat 380054
                  </p>
                  <a
                    href="https://maps.google.com/?cid=18218671408365611709"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs text-[#DEC07E] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Navigation className="w-3 h-3" />
                    Get Driving Directions
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-4 bg-[#101217] border border-white/5">
                <div className="p-2.5 bg-[#161820] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
                    Operating Schedule
                  </h3>
                  <p className="text-sm text-[#9E9EA7]">
                    Monday - Saturday: 09:00 AM - 07:30 PM
                  </p>
                  <p className="text-xs text-[#C5A059] mt-0.5">
                    Sunday: By Prior Appointment Only
                  </p>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="flex items-start gap-4 p-4 bg-[#101217] border border-white/5">
                <div className="p-2.5 bg-[#161820] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
                    Studio Desk
                  </h3>
                  <p className="text-sm text-white font-medium">
                    <a href="tel:+917435010050" className="hover:text-[#C5A059] transition-colors">
                      +91 74350 10050
                    </a>
                  </p>
                  <p className="text-xs text-[#9E9EA7] mt-0.5">
                    Alternate / WhatsApp: <a href="tel:+919104910050" className="hover:text-[#C5A059]">+91 91049 10050</a>
                  </p>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-4 p-4 bg-[#101217] border border-white/5">
                <div className="p-2.5 bg-[#161820] border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
                    Inquiries & Corporate
                  </h3>
                  <p className="text-sm text-white font-medium">
                    <a
                      href="mailto:contact@exoticcardetailingstudio.com"
                      className="hover:text-[#C5A059] transition-colors"
                    >
                      contact@exoticcardetailingstudio.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto border border-[#C5A059]/30 bg-[#12141A] p-2 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29372.917525961682!2d72.4219608306885!3d23.037915511146323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8567d98bb00d%3A0xfcd5fca21406dabd!2sExotic%20Car%20Detailing%20Studio!5e0!3m2!1sen!2sin!4v1770204485899!5m2!1sen!2sin"
              title="Exotic Car Detailing Studio Location Map Ahmedabad"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
