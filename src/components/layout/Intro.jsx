import React from 'react'

function Intro() {
  return (
    <div>
      <section className="container mx-auto flex flex-col items-center justify-center md:mt-16 relative text-[#2A2D22]">
        <div className="mx-auto flex flex-col justify-center p-4 my-12 md:my-16 lg:my-20 xl:my-24 bg-[#F1FCF7]">

          <div className="text-lg flex flex-col lg:flex-row items-center">
            
            <div className="flex flex-col md:mr-6 pb-4 md:pb-6">
              <h2>About</h2>

              <h3 className="text-3xl mb-3 text-[#2A2D22]">
                Lorem, ipsum dolor
              </h3>

              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, itaque.
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
