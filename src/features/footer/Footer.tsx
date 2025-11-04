import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-6 sm:py-8 px-4 text-center text-sm sm:text-base opacity-90">
      <p>Copyright © {new Date().getFullYear()} Coliseum Skate - All Rights Reserved.</p>
    </footer>
  );
}

