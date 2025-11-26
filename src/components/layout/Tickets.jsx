import React, { useEffect } from "react";

export default function Tickets() {
  // useEffect(() => {
  //   const scriptId = "eventbrite-widget-script";

  //   // Function to create the widget after script loads
  //   const createWidget = () => {
  //     if (window.EBWidgets) {
  //       window.EBWidgets.createWidget({
  //         widgetType: "checkout",
  //         eventId: "1975226357206",
  //         iframeContainerId: "eventbrite-widget-container-1975226357206",
  //         iframeContainerHeight: 500,
  //         iframeContainerWidth: "100%",
  //       });
  //     }
  //   };

  //   // Check if script is already on the page
  //   let script = document.getElementById(scriptId);
  //   if (!script) {
  //     script = document.createElement("script");
  //     script.id = scriptId;
  //     script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
  //     script.async = true;
  //     script.onload = createWidget; // initialize after load
  //     document.body.appendChild(script);
  //   } else {
  //     // Script already loaded, just create the widget
  //     createWidget();
  //   }
  // }, []);

  return (
     <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl px-4">

        <h2 className="text-2xl font-semibold mb-6 text-center text-[#2A2D22]">
          Get Tickets (won't load on localhost)
        </h2>

        <div id="eventbrite-widget-container-1975226357206">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
            <div className="border border-[#5A6C57] rounded-lg p-4 bg-[#D3F1DA]">
              <h4 className="m-0 mb-2 text-lg font-medium text-[#2A2D22]">Adults</h4>
              <p className="m-0 font-semibold text-[#2A2D22]">£15</p>
            </div>

            <div className="border border-[#5A6C57] rounded-lg p-4 bg-[#D3F1DA]">
              <h4 className="m-0 mb-2 text-lg font-medium text-[#2A2D22]">Children (3–18)</h4>
              <p className="m-0 font-semibold text-[#2A2D22]">£8</p>
            </div>

            <div className="border border-[#5A6C57] rounded-lg p-4 bg-[#D3F1DA]">
              <h4 className="m-0 mb-2 text-lg font-medium text-[#2A2D22]">Children under 2</h4>
              <p className="m-0 font-semibold text-[#2A2D22]">Free</p>
            </div>

            <div className="border border-[#5A6C57] rounded-lg p-4 bg-[#D3F1DA]">
              <h4 className="m-0 mb-2 text-lg font-medium text-[#2A2D22]">Seniors (60+)</h4>
              <p className="m-0 font-semibold text-[#2A2D22]">£12</p>
            </div>

          </div>

          <p className="text-sm mt-4 text-center text-[#525B44]">
            Prices are per person and subject to availability.
          </p>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.eventbrite.com/e/paisley-highland-games-tickets-1975226357206"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-[#5A6C57] text-[#F1FCF7] rounded hover:bg-[#525B44] transition"
          >
            Open Eventbrite listing
          </a>
        </div>

      </div>
    </div>
  );
}
