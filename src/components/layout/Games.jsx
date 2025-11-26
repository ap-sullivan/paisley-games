import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Games() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/events")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log("Error fetching events:", err));
  }, []);

  return (
    <>
      <section className="w-full flex justify-center items-center min-h-screen">
        <div className="px-6 py-16">

          <div className="flex flex-col pb-4 md:pb-6 text-left w-full max-w-5xl mx-auto md:ml-0 text-[#2A2D22]">
            <h2>Games</h2>
            <h3 className="text-3xl text-[#2A2D22]">Lorem, ipsum dolor.</h3>
          </div>

          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 justify-items-center align-items-center mb-8 max-w-5xl mx-auto">

            {events.map(event => (
              <Link key={event._id} className="w-full sm:w-auto">
                <div className="flex flex-col justify-between h-full text-[#2A2D22]">

                  <div className="flex flex-col sm:w-56 md:w-auto pb-12">
                    <img
                      src="./images/shotput.jpg"
                      alt=""
                      className="object-contain mx-auto border border-[#5A6C57]"
                    />

                    <h2 className="text-lg font-bold uppercase text-left">
                      {event.name}
                    </h2>

                    <p className="pb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit...
                    </p>
                  </div>

                  <button className="py-2 px-4 bg-[#5A6C57] text-[#F1FCF7] text-center font-bold tracking-wide rounded">
                    Find out more
                  </button>

                </div>
              </Link>
            ))}

          </div>

          <Link to="/games">
            <h3 className="hover:cursor-pointer text-lg text-center md:text-left mt-12 tracking-wide hover:underline text-[#2A2D22]">
              See all games
            </h3>
          </Link>

        </div>
      </section>
    </>
  );
}

export default Games;
