import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  darkOverlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage = '/skateboard_hero.jpg',
  darkOverlay = true
}: HeroProps) {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {darkOverlay && <div className="absolute inset-0 bg-dark/60"></div>}
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg text-light mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl lg:text-2xl text-light/90 drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

