import React, { useEffect, useState } from "react";

function Vaccination() {
  const [vaccinationData, setVaccinationData] = useState({});

  const getVaccinationData = async () => {
    const data = await (
      await fetch("https://api.corona-zahlen.org/vaccinations")
    ).json();
    setVaccinationData(data);
  };

  useEffect(() => {
    getVaccinationData();
  }, []);

  return (
    <div>
      <h2>Information about Vaccination</h2>
      {vaccinationData.data ? (
        <div className="container main-box">
          <div className="box">
            1st Vaccinated:{" "}
            <span className="bold">
              {vaccinationData.data.vaccinated &&
                vaccinationData.data.vaccinated.toLocaleString()}
            </span>
          </div>
          <div className="box">
            Fully Vaccinated:{" "}
            <span className="bold">
              {vaccinationData.data.secondVaccination.vaccinated &&
                vaccinationData.data.secondVaccination.vaccinated.toLocaleString()}
            </span>
          </div>
          <div className="box">
            Booster Vaccinated:{" "}
            <span className="bold">
              {vaccinationData.data.boosterVaccination.vaccinated &&
                vaccinationData.data.boosterVaccination.vaccinated.toLocaleString()}
            </span>
          </div>
          <div className="box">
            1st Vaccinated Quote:{" "}
            <span className="bold">
              {vaccinationData.data.quote &&
                (vaccinationData.data.quote * 100).toFixed(1) + "%"}
            </span>
          </div>
          <div className="box">
            Fully Vaccinated Quote:{" "}
            <span className="bold">
              {vaccinationData.data.secondVaccination.quote &&
                (vaccinationData.data.secondVaccination.quote * 100).toFixed(1) + "%"}
            </span>
          </div>
          <div className="box">
            Booster Vaccinated Quote:{" "}
            <span className="bold">
              {vaccinationData.data.boosterVaccination.quote &&
               (vaccinationData.data.boosterVaccination.quote * 100).toFixed(1) + "%"}
            </span>
          </div>
          <div className="box">
            BioNTech Vaccinated:{" "}
            <span className="bold">
              {vaccinationData.data.secondVaccination.vaccination.biontech &&
                vaccinationData.data.secondVaccination.vaccination.biontech.toLocaleString()}
            </span>
          </div>
          <div className="box">
            Moderna Vaccinated:{" "}
            <span className="bold">
              {vaccinationData.data.secondVaccination.vaccination.moderna &&
                vaccinationData.data.secondVaccination.vaccination.moderna.toLocaleString()}
            </span>
          </div>
          <div className="box">
            AstraZeneca Vaccinated:{" "}
            <span className="bold">
              {vaccinationData.data.secondVaccination.vaccination.astraZeneca &&
                vaccinationData.data.secondVaccination.vaccination.astraZeneca.toLocaleString()}
            </span>
          </div>
          <div className="box">
            BioNTech Boostered:{" "}
            <span className="bold">
              {vaccinationData.data.boosterVaccination.vaccination.biontech &&
                vaccinationData.data.boosterVaccination.vaccination.biontech.toLocaleString()}
            </span>
          </div>
          <div className="box">
            Moderna Boostered:{" "}
            <span className="bold">
              {vaccinationData.data.boosterVaccination.vaccination.moderna &&
                vaccinationData.data.boosterVaccination.vaccination.moderna.toLocaleString()}
            </span>
          </div>
          <div className="box">
            Janssen Boostered:{" "}
            <span className="bold">
              {vaccinationData.data.boosterVaccination.vaccination.janssen &&
                vaccinationData.data.boosterVaccination.vaccination.janssen.toLocaleString()}
            </span>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Vaccination;
