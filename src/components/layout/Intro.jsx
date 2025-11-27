import React from 'react'

function Intro() {
  return (
    <div>
      <section className="container mx-auto flex flex-col items-center justify-center md:mt-16 relative text-[#2A2D22] px-4 md:px-0 w-auto md:max-w-5xl ">
        <div className="mx-auto flex flex-col justify-center px-12 py-4 my-12 md:my-16 bg-[#F1FCF7]">

          <div className="text-lg flex flex-col lg:flex-row items-center">
            
            <div className="flex flex-col md:mr-6 pb-4 md:pb-6">
              <h2 className="uppercase mb-2 font-bold">About</h2>

              <h3 className="text-3xl mb-3 text-[#2A2D22]">
               Welcome to the Paisley Highland Games!
              </h3>

              <p className="text-lg">
                Launching in May 2026, this landmark event will bring the heart and spirit of Scotland’s heritage to Paisley like never before. Experience an exciting celebration of traditional Highland sports, music, dance, and community pride—all set against the backdrop of one of Scotland’s most iconic towns. Whether you're a competitor, spectator, or family looking for a unforgettable day out, the Paisley Highland Games promises an authentic and vibrant festival for all ages. Join us as we make history together in 2026!
              </p>
            </div>

            <img 
              className="object-contain h-56 md:h-64 w-auto mb-6 shadow-xl rounded-lg border border-[#5A6C57]" 
              src={`/images/intro.jpg`} 
              alt="" 
            />
            
          </div>

        </div>
      </section>
    </div>
  )
}

export default Intro
