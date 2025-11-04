import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center text-light py-16 sm:py-24 lg:py-32 px-4 sm:px-6 min-h-[60vh] flex items-center justify-center"
      style={{ backgroundImage: 'url(/skateboard_hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-dark/60"></div>
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          Skate Your Way to Fun!
        </h1>
      </div>
    </section>
  );
}

