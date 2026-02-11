import { useState } from 'react';
import DonateModal from '../donate-modal/DonateModal';
import Navigation from '../navigation/Navigation';
import MobileMenu from '../navigation/MobileMenu';

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-light shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img src="/logo.jpeg" alt="Coliseum Skate" className="h-12 sm:h-16" />
            </a>

            {/* Desktop Navigation */}
            <Navigation currentPath={currentPath} className="hidden md:flex" />

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                className="bg-dark text-light px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                Donate
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-dark p-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <DonateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={currentPath}
      />
    </>
  );
}

