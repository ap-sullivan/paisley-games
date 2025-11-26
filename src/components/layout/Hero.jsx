import React from 'react';

function Hero() {
  return (
    <div className="flex items-center -z-10 bg-[#F1FCF7]">
      <section
        className="bg-cover bg-center w-full h-88 md:h-[calc(100vh-11vh)] relative"
        style={{ backgroundImage: `url('/images/hero.jpg')` }}
      >
        <div
          className="absolute bottom-1 md:bottom-1/12 left-1/16md:left-1/8 p-6 md:p-12 rounded-md max-w-md md:max-w-5xl bg-[#5A6C57]/80 text-[#F1FCF7]"
        >
          <h1 className="text-xl md:text-5xl font-bold">
            Welcome to the Paisley Highland Games
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Coming to Paisley in May 2026!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
