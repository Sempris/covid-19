import React, { useEffect, useState } from "react";

function Footer() {
  const [metaData, setMetaData] = useState({});

  const getMetaData = async () => {
    const data = await (
      await fetch("https://api.corona-zahlen.org/germany")
    ).json();
    setMetaData(data);
  };

  useEffect(() => {
    getMetaData();
  }, []);

  return (
    <div>
      {metaData.meta ? (
        <div>
          Source:{" "}
          <a href="https://api.corona-zahlen.org/docs/">
            Robert Koch-Institut API
          </a>
          . Last Update:{" "}
          {new Date(metaData.meta.lastUpdate).toLocaleDateString()}. &#169;{" "}
          <a href="http://sempris.od.ua/">Wadim Skworzow</a>.
        </div>
      ) : null}
    </div>
  );
}

export default Footer;
