import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#101217] border border-[#C5A059]/40 overflow-y-auto p-6 sm:p-10 text-[#C5C5CD]">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#C5A059]" />
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Privacy Policy
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9E9EA7] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-[#A0A0A9]">
          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              1. Information We Collect
            </h3>
            <p>
              Exotic Car Detailing Studio ("Studio", "we", "us") collects customer contact details (name, telephone number, email address) and vehicle information (make, model, manufacturing year, registration or VIN number, paint condition reports, and pre-service inspection photographs) solely to evaluate, execute, and guarantee our automotive treatments.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              2. Vehicle Photography & Portfolio Rights
            </h3>
            <p>
              During intake and throughout the detailing process, our technicians document paint defects, film installation, and finished transformations. Studio photographs may be published on our official media channels with vehicle license plates blurred or removed, unless explicitly instructed otherwise in writing prior to intake.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              3. Protection & Non-Disclosure of Data
            </h3>
            <p>
              We do not sell, rent, or lease customer records to third parties. Customer contact records are stored strictly for warranty validation, annual inspection reminders, and direct communication regarding your vehicle status.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              4. Cookies & Analytical Metrics
            </h3>
            <p>
              Our website uses minimal analytical cookies solely to measure visitor volume, server latency, and referral traffic. We do not engage in invasive cross-site ad profiling or third-party tracking networks.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-sm font-bold text-white mb-2">
              5. Contact Regarding Privacy
            </h3>
            <p>
              For questions concerning vehicle records, image removal, or data updates, contact our studio administrator at <span className="text-[#DEC07E]">contact@exoticcardetailingstudio.com</span> or via telephone at <span className="text-[#DEC07E]">+91 74350 10050</span>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-luxury-secondary text-xs cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
