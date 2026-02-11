import { useEffect } from 'react';
import sharedContent from '../../content/shared.json';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  const navItems = sharedContent.navigation;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 transition-opacity"
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-light shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-dark text-4xl leading-none hover:text-primary transition-colors w-10 h-10 flex items-center justify-center"
          aria-label="Close menu"
        >
          &times;
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 p-8 mt-16">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className={`text-xl py-3 px-4 rounded-lg border-b border-gray-200 transition-colors ${
                isActive(item.href)
                  ? 'text-primary font-semibold bg-primary/10'
                  : 'text-dark hover:text-primary hover:bg-gray-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
