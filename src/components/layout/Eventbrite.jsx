import React, { useEffect } from "react";

export default function EventbriteWidget() {
  useEffect(() => {
   
    const scriptId = "eventbrite-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h2>Get your ticket's for Paisley Highland Games</h2>

      <div
        id="eventbrite-widget-container-1975226357206"
        data-event-id="1975226357206"
        data-widget-type="checkout"
        data-auto-size="true"
      ></div>
    </div>
  );
}