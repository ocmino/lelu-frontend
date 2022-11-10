import React from "react";
import { Link } from "react-router-dom";

import styles from "./StartPage.module.css";

function StartPage() {
  return (
    <div className={styles.StartPage}>
      <h1>Start</h1>
      <Link to="/login">Login</Link>
      <Link to="/modelviewer">Model Viewer</Link>
      <Link to="/sqltable">Sql Table</Link>
    </div>
  );
}

export default StartPage;
