import React from "react";

function Maps() {
  return (
    <div>
      <h1>COVID-19 in Germany</h1>
      <h2>Information on Maps</h2>
        <div className="map">
          <img src="https://api.corona-zahlen.org/map/districts-legend" alt="District Data" />
          <img src="https://api.corona-zahlen.org/map/states-legend" alt="States Data" />
          <img src="https://api.corona-zahlen.org/map/states-legend/hospitalization" alt="Hospitalization" />
        </div>
    </div>
  );
}

export default Maps;
