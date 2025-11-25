import React from 'react';


function Hero() {


  return (
     <div className="bg-gray-200 flex items-center -z-10">
      <section
        className="bg-cover bg-center w-full h-88 md:h-[calc(100vh-11vh)] relative"
        style={{ 
          backgroundImage: `url('/images/hero.jpg')` 
        }}
      >

       

        <div className="absolute bottom-1 md:bottom-1/12 left-1/16md:left-1/8 bg-gray-600 bg-opacity-80 p-6 md:p-12 rounded-md text-white max-w-md md:max-w-5xl">
    <h1 className="text-xl md:text-5xl font-bold">Welcome to the Paisley Highland Games</h1>
    <p className="mt-4 text-lg md:text-2xl">Coming to Paisley in May 2026!</p>
  </div>
      </section>
    </div>
  );
}



export default Hero;
