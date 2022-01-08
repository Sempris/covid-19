import React, { useEffect, useState } from "react";
import Footer from "./Footer";

function Maps() {
  const [mapsDistrictData, setMapsDistrictData] = useState('');

  const getMapsDistrictData = async () => {
    const data = await (
      await fetch("https://api.corona-zahlen.org/map/districts-legend")
    ).json();
    setMapsDistrictData(data);
  };

  useEffect(() => {
    getMapsDistrictData();
  }, []);

  return (
    <div>
      <h1>COVID-19 in Germany</h1>
      <h2>Information on Maps</h2>
      {mapsDistrictData ? (
        <div className="container main-box">
          <div className="map"><img src={mapsDistrictData} alt="District Data"/></div>
        </div>
      ) : (
        <p>no data available</p>
      )}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Maps;
