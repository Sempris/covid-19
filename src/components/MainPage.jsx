import React, { useEffect, useState } from "react";
import Footer from "./Footer";

function MainPage() {
  const [mainData, setMainData] = useState({});

  const getMainData = async () => {
    const data = await (
      await fetch("https://api.corona-zahlen.org/germany")
    ).json();
    setMainData(data);
  };

  useEffect(() => {
    getMainData();
  }, []);

  return (
    <div>
      <h1>COVID-19 in Germany</h1>
      <h2>Statistic Overview</h2>
      {mainData ? (
        <div className="container main-box">
          <div className="box">🦠 Cases: <span className="bold">{mainData.cases && mainData.cases.toLocaleString()}</span></div>
          <div className="box">🪦 Deaths: <span className="bold">{mainData.deaths && mainData.deaths.toLocaleString()}</span></div>
          <div className="box">😀 Recovered: <span className="bold">{mainData.recovered && mainData.recovered.toLocaleString()}</span></div>
          <div className="box">
            📅 Weekly Incidence: <span className="bold">{Math.floor(mainData.weekIncidence)}</span>
          </div>
          <div className="box">
            📊 Incidence per 100k: <span className="bold">{Math.floor(mainData.casesPer100k)}</span>
          </div>
          <div className="box">📈 Cases per Week: <span className="bold">{mainData.casesPerWeek && mainData.casesPerWeek.toLocaleString()}</span></div>
		  {mainData.r ? (<div className="box">😷 R-Wert (4 Days): <span className="bold">{mainData.r.rValue4Days.value}</span></div>) : null}
		  {mainData.r ? (<div className="box">🤝 R-Wert (7 Days): <span className="bold">{mainData.r.rValue7Days.value}</span></div>) : null}
		  {mainData.hospitalization ? (<div className="box">🚑 Hospitalization: <span className="bold">{mainData.hospitalization.incidence7Days}</span></div>) : null}
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

export default MainPage;
