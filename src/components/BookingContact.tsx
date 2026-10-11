import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, CheckCircle, Shield } from 'lucide-react';

interface BookingContactProps {
  preselectedService?: string;
}

export const BookingContact: React.FC<BookingContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleModel: '',
    service: 'Paint Protection Film (PPF)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Exotic Car Studio,%0A%0AName: ${encodeURIComponent(formData.name || 'Vehicle Owner')}%0APhone: ${encodeURIComponent(formData.phone || 'Not provided')}%0AVehicle: ${encodeURIComponent(formData.vehicleModel || 'Luxury Vehicle')}%0AService Required: ${encodeURIComponent(formData.service)}%0ANotes: ${encodeURIComponent(formData.notes || 'Interested in consultation')}`;
    return `https://wa.me/917435010050?text=${text}`;
  };

  return (
    <section id="booking" className="py-24 bg-[#0C0E12] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
            Intake Consultation
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F5F7] tracking-tight">
            Request Vehicle Assessment & Quote
          </h2>
          <p className="mt-4 text-sm text-[#9E9EA7]">
            Provide your vehicle details for a tailored protection program or connect directly with our master detailer.
          </p>
        </div>

        <div className="luxury-card p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 bg-[#1A261D] border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Assessment Request Received
              </h3>
              <p className="text-sm text-[#9E9EA7] max-w-md mx-auto">
                Our studio manager will review your vehicle specifications and contact you within 2 business hours.
              </p>
              <div className="pt-4">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-primary text-xs"
                >
                  <MessageSquare className="w-4 h-4 mr-1 text-[#08090B]" />
                  Expedite on WhatsApp Now
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Shah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#64646D] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#64646D] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    Vehicle Year, Make & Model *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024 Porsche 911 Carrera GTS"
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#64646D] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                    Desired Treatment Program *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#08090B] border border-white/10 px-4 py-3.5 text-sm text-white focus:border-[#C5A059] focus:outline-none"
                  >
                    <option value="Paint Protection Film (PPF)">Self-Healing Paint Protection Film (PPF)</option>
                    <option value="9H Ceramic Coating">9H Multi-Layer Ceramic Coating</option>
                    <option value="Nano Graphene Coating">Nano Graphene Surface Matrix</option>
                    <option value="Concours Paint Correction">Concours Multi-Stage Paint Correction</option>
                    <option value="Full Comprehensive Package">Full Studio Package (PPF + Ceramic + Interior)</option>
                    <option value="Interior Leather Preservation">Interior Leather Preservation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-medium text-[#C5C5CD] mb-2 tracking-wider">
                  Additional Notes or Vehicle Paint Condition
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention delivery date, existing ceramic coating, or specific protection requirements."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#08090B] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#64646D] focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                <button
                  type="submit"
                  className="btn-luxury-primary w-full sm:w-auto text-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 mr-1" />
                  Submit Assessment Request
                </button>
                <span className="text-xs text-[#64646D]">or</span>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-secondary w-full sm:w-auto text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1 text-[#25D366]" />
                  Instant WhatsApp Dispatch
                </a>
              </div>

              <p className="text-[11px] text-[#64646D] flex items-center gap-1.5 pt-2">
                <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
                Your contact details are strictly confidential and used solely for vehicle assessment.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
