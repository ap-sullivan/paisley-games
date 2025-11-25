import React from 'react'

function Intro() {
  return (
    <div>

         <section className="container mx-auto w-3/4 md:w-4/5 xl:w-3/5 flex flex-col items-center justify-center text-black md:mt-16 relative">
                    <div className=" mx-auto flex flex-col justify-center p-4 my-12 md:my-16 lg:my-20 xl:my-24"> 
                       
                        <div className="text-lg flex flex-col lg:flex-row items-center">
                            <div className="flex flex-col md:mr-6 pb-4 md:pb-6">
                              <h2>About</h2>
                                <h3 className="text-3xl text-black mb-3 ">
                                Lorem, ipsum dolor
                                </h3>
                                <p className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, itaque.</p>
        
                            </div>
                           
        
                            <img className="object-contain h-56 md:h-64 w-auto mb-6 shadow-xl  rounded-lg " src={`/images/intro.jpg`} alt="" />
                            
                        </div>
      
                    </div>
                </section>
      
    </div>
  )
}

export default Intro
