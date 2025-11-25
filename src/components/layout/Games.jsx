import React from 'react'
import { Link } from 'react-router-dom';


function Games() {
  return (
    <>

 <div className="w-full  bg-secondary-subtlest flex justify-center items-center min-h-screen">
      <div className="container w-3/4 md:w-4/5 xl:w-3/5 px-6 py-16">
        <div className="flex flex-col pb-4 md:pb-6 text-left w-full max-w-5xl mx-auto md:ml-0">
       <h2>Games</h2>
          <h3 className="text-3xl text-black-theme">Lorem, ipsum dolor.</h3 >
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 justify-items-center align-items-center mb-8 max-w-5xl mx-auto">
          {/* // this maps over the filtered badges and displays the badge image, name and hero text */}
          {/* {filteredBadges.map((badge, index) => ( */}
            <Link className="w-full sm:w-auto">
              <div className="flex flex-col justify-between h-full">
                <div className="badge flex flex-col sm:w-56 pb-12">
                  <img src={`./images/shotput.jpg`} alt="" className="object-contain mx-auto" />
                  <h2 className="bricolage-heading text-primary-darker text-lg font-bold uppercase text-left">
                   Game Name
                  </h2>
                  <p className="pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quam voluptate iure ipsa necessitatibus at harum exercitationem facere eos nam? Ut vitae, nemo sed pariatur cumque praesentium dolorum ipsum soluta.</p>
                </div>
                <button className="bg-primary py-2 px-4 text-off-white text-center font-bold tracking-wide rounded">
                  Find out more
                </button>
              </div>
            </Link>
          {/* ))} */}
        </div>
        <Link to="/games">
        <h3 className="text-primary-darkest hover:text-primary-dark hover:cursor-pointer text-lg text-center md:text-left  mt-12 tracking-wide hover:underline">
          See all games
        </h3>
        </Link>
      </div>
    </div>

    </>
  )
}

export default Games
