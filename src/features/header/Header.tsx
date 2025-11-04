import React, { useState } from 'react';
import DonateModal from '../donate-modal/DonateModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-light shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <img src="/logo.jpeg" alt="Coliseum Skate" className="h-12 sm:h-16" />
          <button 
            className="bg-dark text-light px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:opacity-80 transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => setIsModalOpen(true)}
          >
            Donate
          </button>
        </div>
      </header>

      <DonateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

