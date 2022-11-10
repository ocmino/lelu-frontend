//google model viewer component

import React, { useState, useEffect } from "react";

import styles from "./ModelViewer.module.css";

function ModelViewer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://lelu20221110133814.azurewebsites.net/model/getmodels")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  //Test

  //get all hyperLink from data
  const hyperLink = data.map((item) => item.hyperLink);

  //create a function that toggles through the hyperlinks
  const [index, setIndex] = useState(0);
  const nextModel = () => {
    setIndex(index + 1);
    if (index >= hyperLink.length - 1) {
      setIndex(0);
    }
  };
  const prevModel = () => {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(hyperLink.length - 1);
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.modelViewer}>
        <model-viewer
          src={hyperLink[index]}
          auto-rotate
          camera-controls
          shadow-intensity="1"
          exposure="1"
          environment-image="neutral"
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"

          //ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
        ></model-viewer>
        {/* <button className={styles.arButton} slot="ar-button" id="ar-button">View in your space</button> */}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.prevButton} onClick={nextModel}>
          Next
        </button>
        <button className={styles.nextButton} onClick={prevModel}>
          Previous
        </button>
      </div>
    </div>
  );
}

export default ModelViewer;
