import React from "react";
import TopNav from "../components/navigation/TopNav";
import Footer from "../components/navigation/Footer";

function LocalInfo() {
  return (
    <div className="min-h-screen bg-[#F1FCF7] bg-linear-to-b 
        from-[#F1FCF7] 
        via-[#D3F1DA] 
        to-[#85A986] ">
      
      <TopNav />

      {/* SIMPLE PAGE HEADER */}
      <div className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2A2D22]">
          About Paisley
        </h1>
        <p className="text-[#2A2D22] max-w-2xl mx-auto mt-4 text-lg">
          Discover the heritage, culture, and hidden gems of Paisley —
          one of Scotland’s most historic towns.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-20 mt-10">

        {/* HISTORY SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-[#F1FCF7] border border-[#D3F1DA] p-8 rounded-lg shadow">
            <h2 className="text-3xl font-semibold text-[#2A2D22] mb-4">
              A Brief History
            </h2>

            <p className="text-[#2A2D22] leading-relaxed mb-4">
              Paisley is home to the iconic Paisley Abbey, founded in 1163, and
              has long been a central hub of Scottish heritage. The town is
              world-famous for the Paisley Pattern — the distinctive tear-drop motif
              that appeared on textiles across Europe and beyond.
            </p>

            <p className="text-[#2A2D22] leading-relaxed mb-4">
              Throughout the 19th century, Paisley became a powerhouse of the
              textile industry, producing shawls and woven fabrics that were
              exported worldwide.
            </p>

            <p className="text-[#2A2D22] leading-relaxed">
              Today, the town blends historic charm with modern culture, a thriving
              arts scene, and a welcoming community.
            </p>
          </div>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e2/PaisleyMap1923.jpg"
            alt="Old Paisley Map"
            className="rounded-lg shadow-lg w-full h-80 object-cover border border-[#85A986]"
          />
        </section>

        {/* PHOTO GRID */}
        <section>
          <h2 className="text-3xl font-semibold text-[#2A2D22] text-center mb-10">
            Local Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#F1FCF7] border border-[#D3F1DA] rounded-lg shadow overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Paisley_Abbey_from_North_West_-_Leaning_western_gable_-_125mp.jpg/960px-Paisley_Abbey_from_North_West_-_Leaning_western_gable_-_125mp.jpg"
                alt="Paisley Abbey"
                className="w-full h-56 object-cover"
              />
              <p className="p-4 text-[#2A2D22]">Paisley Abbey — founded in 1163.</p>
            </div>

            <div className="bg-[#F1FCF7] border border-[#D3F1DA] rounded-lg shadow overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/58/Paisley_Town_Hall_%28geograph_5072646%29.jpg"
                alt="Town centre"
                className="w-full h-56 object-cover"
              />
              <p className="p-4 text-[#2A2D22]">Historic Paisley town centre.</p>
            </div>

            <div className="bg-[#F1FCF7] border border-[#D3F1DA] rounded-lg shadow overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Persian_Silk_Brocade_-_Paisley_-_Persian_Paisley_-_Seyyed_Hossein_Mozhgani_-_1963.jpg"
                alt="Paisley Pattern"
                className="w-full h-56 object-cover"
              />
              <p className="p-4 text-[#2A2D22]">The world-renowned Paisley Pattern.</p>
            </div>

          </div>
        </section>

        {/* PARKING SECTION */}
        <section className="bg-[#D3F1DA] border border-[#85A986] p-10 rounded-lg shadow">
          <h2 className="text-3xl font-semibold text-[#2A2D22] mb-6 text-center">
            Parking Information
          </h2>

          <ul className="space-y-4 text-[#2A2D22] text-lg">
            <li>
              <strong>📍 Paisley Centre Car Park</strong> — multi-storey, 500+ spaces,
              5-minute walk from the Abbey.
            </li>
            <li>
              <strong>📍 Bridge Street Car Park</strong> — free after 6pm, close to main shops.
            </li>
            <li>
              <strong>📍 Hunter Street Parking</strong> — open-air parking near Storie Street.
            </li>
            <li>
              <strong>📍 On-street parking</strong> — available throughout the town centre.
            </li>
          </ul>

          <p className="text-[#525B44] mt-4 text-center">
            Arrive early during major events — spaces fill quickly.
          </p>
        </section>

        {/* GOOGLE MAP */}
        <section>
          <h2 className="text-3xl font-semibold text-[#2A2D22] text-center mb-6">
            Find Paisley
          </h2>

          <div className="w-full h-96 border border-[#85A986] rounded-lg overflow-hidden shadow">
            <iframe
              title="map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.4127704383484!2d-4.424146321832052!3d55.84499767165312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888455b4d4a79af%3A0xdbc93450ccaa43d5!2sPaisley%20Abbey!5e0!3m2!1sen!2suk!4v1700000000000"
            ></iframe>
          </div>
        </section>
    
      </div>
      <Footer />
    </div>

    
  );
}

export default LocalInfo;
