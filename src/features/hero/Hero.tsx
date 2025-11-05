import React from 'react';

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img 
        src="/skateboard_hero.jpg" 
        alt="Skate Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-dark/60"></div>
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg text-light">
          Skate Your Way to Fun!
        </h1>
      </div>
    </section>
  );
}

