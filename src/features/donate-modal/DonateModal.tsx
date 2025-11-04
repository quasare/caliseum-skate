import React from 'react';

const STRIPE_LINK = import.meta.env.PUBLIC_STRIPE_PAYMENT_LINK || '#';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-light p-6 sm:p-8 lg:p-12 rounded-lg max-w-md sm:max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-dark text-4xl leading-none hover:opacity-70 transition-opacity w-8 h-8 flex items-center justify-center"
          onClick={onClose}
        >
          &times;
        </button>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
          Support Coliseum Skate
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Your donation helps us provide skateboarding programs and equipment to youth in our community.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <a 
            href={STRIPE_LINK} 
            className="bg-dark text-light py-4 sm:py-6 rounded-lg text-2xl font-semibold text-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            $25
          </a>
          <a 
            href={STRIPE_LINK} 
            className="bg-dark text-light py-4 sm:py-6 rounded-lg text-2xl font-semibold text-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            $50
          </a>
          <a 
            href={STRIPE_LINK} 
            className="bg-dark text-light py-4 sm:py-6 rounded-lg text-2xl font-semibold text-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            $100
          </a>
          <a 
            href={STRIPE_LINK} 
            className="bg-dark text-light py-4 sm:py-6 rounded-lg text-2xl font-semibold text-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Custom
          </a>
        </div>

        <p className="text-center text-sm text-gray-500">
          Configure Stripe payment link in .env file
        </p>
      </div>
    </div>
  );
}

