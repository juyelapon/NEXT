import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import WhyWeStarted from './components/WhyWeStarted';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ContactModal from './components/ContactModal';
import LearnMoreModal from './components/LearnMoreModal';
import LegalModal from './components/LegalModal';
import Toast from './components/Toast';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [learnMoreModalOpen, setLearnMoreModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleOpenBooking = (serviceName = '') => {
    setSelectedServiceForBooking(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-[#0A84FF] selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* Brand Logos Infinite Marquee */}
        <Companies />

        {/* Services Section */}
        <Services
          onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* Why Choose Us Circular Grid */}
        <WhyChooseUs />

        {/* Why We Started / Story Carousel */}
        <WhyWeStarted
          onOpenLearnMore={() => setLearnMoreModalOpen(true)}
        />

        {/* Frequently Asked Questions */}
        <FAQ
          onOpenContact={() => setContactModalOpen(true)}
        />
      </main>

      {/* Footer Section */}
      <Footer
        onOpenPrivacy={() => setLegalModal({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModal({ isOpen: true, type: 'terms' })}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={selectedServiceForBooking}
        onShowToast={showToast}
      />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Founding Journey Modal */}
      <LearnMoreModal
        isOpen={learnMoreModalOpen}
        onClose={() => setLearnMoreModalOpen(false)}
      />

      {/* Legal Modal (Privacy / Terms) */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        type={legalModal.type}
      />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
