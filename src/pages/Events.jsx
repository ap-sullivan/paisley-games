import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopNav from "../components/navigation/TopNav";
import Footer from "../components/navigation/Footer";

function Events() {
  const [events, setEvents] = useState([]);

     // fetch("http://localhost:5001/api/events")
  
     useEffect(() => {
    fetch("https://paisley-games.onrender.com/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.log("Error fetching events:", err));
  }, []);

  return (
    <>
    <div
      className="
        min-h-screen pb-16
        bg-linear-to-b 
        from-[#F1FCF7] 
        via-[#D3F1DA] 
        to-[#85A986] 
      "
    >
      <TopNav />

      {/* PAGE HEADER */}
      <div className="pt-24 text-center px-6 mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2A2D22]">
          Events
        </h1>
        <p className="text-[#2A2D22] max-w-2xl mx-auto mt-3 text-lg">
          Discover the traditional Highland events happening at the Paisley Highland Games.
        </p>
      </div>

      {/* HORIZONTAL EVENT CARDS */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-6">

        {events.length === 0 && (
          <p className="text-center text-[#2A2D22]">Loading events…</p>
        )}

        {events.map((event) => (
          <Link key={event._id} to={`/events/${event._id}`}>
            <div
              className="
                w-full 
                bg-[#F1FCF7]/90 
                border border-[#D3F1DA] 
                rounded-xl shadow-md 
                hover:shadow-xl transition 
                overflow-hidden 
                flex flex-col md:flex-row 
                backdrop-blur-sm
              "
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/3 h-56 md:h-64 overflow-hidden">
                <img
                  src={event.imageURL || '/images/shotput.jpg'}
                  alt={event.name}
                  className="w-full h-full object-cover border-r border-[#D3F1DA]"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between p-6 w-full md:w-2/3 text-[#2A2D22]">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
                  <p className="text-[#2A2D22]">
                    {event.description || "A traditional Highland event full of excitement and heritage."}
                  </p>
                </div>

                <button className="mt-6 md:mt-4 py-2 px-4 bg-[#5A6C57] text-[#F1FCF7] rounded font-bold tracking-wide hover:bg-[#525B44] transition w-max">
                  View Event
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

  

    </div>
    
      <Footer />
    </>

  );
}

export default Events;
