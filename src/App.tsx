import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandPartners } from './components/BrandPartners';
import { Services } from './components/Services';
import { PPFSection } from './components/PPFSection';
import { CeramicSection } from './components/CeramicSection';
import { ProductsCollection } from './components/ProductsCollection';
import { ProcessCraftsmanship } from './components/ProcessCraftsmanship';
import { GoogleReviews } from './components/GoogleReviews';
import { StudioLocator } from './components/StudioLocator';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsConditionsModal } from './components/TermsConditionsModal';

export function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F7] flex flex-col selection:bg-[#C5A059] selection:text-black">
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <main className="flex-1">
        <Hero onOpenBooking={() => scrollToBooking()} />
        <BrandPartners />
        <Services onSelectService={(service) => scrollToBooking(service)} />
        <PPFSection onOpenBooking={() => scrollToBooking('Paint Protection Film (PPF)')} />
        <CeramicSection onOpenBooking={() => scrollToBooking('9H Ceramic Coating')} />
        <ProductsCollection />
        <ProcessCraftsmanship />
        <GoogleReviews />
        <StudioLocator />
        <BookingContact preselectedService={selectedService} />
      </main>

      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      <WhatsAppFloatingButton />

      {/* Legal Modals */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <TermsConditionsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </div>
  );
}

export default App;
