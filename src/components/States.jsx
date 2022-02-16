import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

function States() {
  const [stateData, setStateData] = useState({});

  const getStateData = async () => {
    const data = await (
      await fetch("https://api.corona-zahlen.org/states")
    ).json();
    setStateData(data);
  };

  useEffect(() => {
    getStateData();
  }, []);

  return (
    <div>
      <h2>Information by State</h2>
      {stateData.data ? (
        <div className="container accordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {stateData.data.BB && stateData.data.BB.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.BB &&
                        stateData.data.BB.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    💀 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.BB &&
                        stateData.data.BB.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.BB &&
                        stateData.data.BB.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.BB.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.BB &&
                        stateData.data.BB.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.BB ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.BB.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {stateData.data.BE && stateData.data.BE.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.BE &&
                        stateData.data.BE.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    💀 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.BE &&
                        stateData.data.BE.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.BE &&
                        stateData.data.BE.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.BE.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.BE &&
                        stateData.data.BE.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.BE ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.BE.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {stateData.data.BW && stateData.data.BW.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.BW &&
                        stateData.data.BW.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    💀 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.BW &&
                        stateData.data.BW.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.BW &&
                        stateData.data.BW.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.BW.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.BW &&
                        stateData.data.BW.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.BW ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.BW.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                {stateData.data.BY && stateData.data.BY.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.BY &&
                        stateData.data.BY.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    💀 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.BY &&
                        stateData.data.BY.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.BY &&
                        stateData.data.BY.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.BY.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.BY &&
                        stateData.data.BY.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.BY ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.BY.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                {stateData.data.HB && stateData.data.HB.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.HB &&
                        stateData.data.HB.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    💀 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.HB &&
                        stateData.data.HB.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.HB &&
                        stateData.data.HB.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.HB.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.HB &&
                        stateData.data.HB.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.HB ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.HB.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                {stateData.data.HE && stateData.data.HE.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.HE &&
                        stateData.data.HE.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.HE &&
                        stateData.data.HE.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.HE &&
                        stateData.data.HE.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.HE.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.HE &&
                        stateData.data.HE.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.HE ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.HE.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                {stateData.data.HH && stateData.data.HH.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.HH &&
                        stateData.data.HH.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.HH &&
                        stateData.data.HH.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.HH &&
                        stateData.data.HH.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.HH.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.HH &&
                        stateData.data.HH.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.HH ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.HH.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                {stateData.data.MV && stateData.data.MV.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.MV &&
                        stateData.data.MV.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.MV &&
                        stateData.data.MV.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.MV &&
                        stateData.data.MV.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.MV.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.MV &&
                        stateData.data.MV.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.MV ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.MV.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                {stateData.data.NI && stateData.data.NI.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.NI &&
                        stateData.data.NI.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.NI &&
                        stateData.data.NI.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.NI &&
                        stateData.data.NI.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.NI.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.NI &&
                        stateData.data.NI.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.NI ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.NI.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                {stateData.data.NW && stateData.data.NW.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.NW &&
                        stateData.data.NW.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.NW &&
                        stateData.data.NW.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.NW &&
                        stateData.data.NW.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.NW.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.NW &&
                        stateData.data.NW.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.NW ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.NW.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                {stateData.data.RP && stateData.data.RP.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.RP &&
                        stateData.data.RP.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.RP &&
                        stateData.data.RP.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.RP &&
                        stateData.data.RP.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.RP.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.RP &&
                        stateData.data.RP.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.RP ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.RP.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>
                {stateData.data.SH && stateData.data.SH.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.SH &&
                        stateData.data.SH.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.SH &&
                        stateData.data.SH.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.SH &&
                        stateData.data.SH.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.SH.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.SH &&
                        stateData.data.SH.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.SH ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.SH.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header>
                {stateData.data.SL && stateData.data.SL.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.SL &&
                        stateData.data.SL.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.SL &&
                        stateData.data.SL.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.SL &&
                        stateData.data.SL.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.SL.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.SL &&
                        stateData.data.SL.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.SL ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.SL.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="13">
              <Accordion.Header>
                {stateData.data.SN && stateData.data.SN.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.SN &&
                        stateData.data.SN.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.SN &&
                        stateData.data.SN.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.SN &&
                        stateData.data.SN.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.SN.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.SN &&
                        stateData.data.SN.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.SN ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.SN.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="14">
              <Accordion.Header>
                {stateData.data.ST && stateData.data.ST.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.ST &&
                        stateData.data.ST.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.ST &&
                        stateData.data.ST.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.ST &&
                        stateData.data.ST.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.ST.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.ST &&
                        stateData.data.ST.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.ST ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.ST.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="15">
              <Accordion.Header>
                {stateData.data.TH && stateData.data.TH.name}
              </Accordion.Header>
              <Accordion.Body>
                <div className="container main-box">
                  <div className="box">
                    🦠 Cases:{" "}
                    <span className="bold">
                      {stateData.data.TH &&
                        stateData.data.TH.cases.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    🪦 Deaths:{" "}
                    <span className="bold">
                      {stateData.data.TH &&
                        stateData.data.TH.deaths.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    😀 Recovered:{" "}
                    <span className="bold">
                      {stateData.data.TH &&
                        stateData.data.TH.recovered.toLocaleString()}
                    </span>
                  </div>
                  <div className="box">
                    📅 Weekly Incidence:{" "}
                    <span className="bold">
                      {Math.floor(stateData.data.TH.weekIncidence)}
                    </span>
                  </div>
                  <div className="box">
                    📈 Cases per Week:{" "}
                    <span className="bold">
                      {stateData.data.TH &&
                        stateData.data.TH.casesPerWeek.toLocaleString()}
                    </span>
                  </div>
                  {stateData.data.TH ? (
                    <div className="box">
                      🚑 Hospitalization:{" "}
                      <span className="bold">
                        {stateData.data.TH.hospitalization.incidence7Days}
                      </span>
                    </div>
                  ) : null}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default States;
