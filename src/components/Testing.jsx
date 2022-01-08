import React, { useEffect, useState } from "react";
import Footer from "./Footer";

function Testing() {
  const [testingData, setTestingData] = useState({});

  const getTestingData = async () => {
    const data = await (
      await fetch("https://api.corona-zahlen.org/testing/history")
    ).json();
    setTestingData(data);
  };

  useEffect(() => {
    getTestingData();
  }, []);

  return (
    <div>
      <h1>COVID-19 in Germany</h1>
      <h2>Information about Tests</h2>
      {/* {testingData ? (
        <div className="container test-box">
          <div className="box">
            Performed Tests:{" "}
            <span className="bold">
              {testingData.data.history.performedTests && testingData.data.history.performedTests.toLocaleString()}
            </span>
          </div>
          <div className="box">
            Positive Tests:{" "}
            <span className="bold">
              {testingData.data.history.positiveTests && testingData.data.history.positiveTests.toLocaleString()}
            </span>
          </div>
          <div className="box">
            Positive Test Rate:{" "}
            <span className="bold">
              {testingData.data.history.positivityRate && testingData.data.history.positivityRate.toLocaleString()}
            </span>
          </div>
        </div>
      ) : (
        <p>no data available</p>
      )} */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Testing;
