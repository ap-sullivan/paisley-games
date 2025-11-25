import React, { useEffect } from "react";

export default function Tickets() {
  useEffect(() => {
    const scriptId = "eventbrite-widget-script";

    // Function to create the widget after script loads
    const createWidget = () => {
      if (window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: "1975226357206",
          iframeContainerId: "eventbrite-widget-container-1975226357206",
          iframeContainerHeight: 500,
          iframeContainerWidth: "100%",
        });
      }
    };

    // Check if script is already on the page
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      script.async = true;
      script.onload = createWidget; // initialize after load
      document.body.appendChild(script);
    } else {
      // Script already loaded, just create the widget
      createWidget();
    }
  }, []);

  return (
    <div>
      <h2>Get Tickets (wont load on localhost)</h2>
      <div
        id="eventbrite-widget-container-1975226357206"
        style={{ minHeight: "500px" }}
      ></div>
    </div>
  );
}
