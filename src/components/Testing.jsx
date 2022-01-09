import React, { useEffect, useState } from "react";

function Testing() {
  const [testingData, setTestingData] = useState({});

  const getTestingData = async () => {
    const data = await (
      await fetch("https://api.corona-zahlen.org/testing/history")
    ).json();
    setTestingData(data);
  };

  const getHistory = () => {
    if (testingData) {
      var actualData = testingData.data.history[testingData.data.history.length - 1];
    }
    return actualData;
  }

  useEffect(() => {
    getTestingData();
  }, []);

  return (
    <div>
      <h2>Information about Tests</h2>
      {testingData ? (
        <div className="container test-box">
          <div className="box">
            Performed Tests:{" "}
            <span className="bold">
              {testingData.data && getHistory().performedTests.toLocaleString()}
            </span>
          </div>
          <div className="box">
            Positive Tests:{" "}
            <span className="bold">
              {testingData.data && getHistory().positiveTests.toLocaleString()}
            </span>
          </div>
          <div className="box">
            Positive Test Rate:{" "}
            <span className="bold">
              {testingData.data && (Math.floor((getHistory().positivityRate) * 100) + '%')}
            </span>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Testing;
