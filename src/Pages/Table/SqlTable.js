import React, { useState, useEffect } from "react";
import styles from "./SqlTable.module.css";
import { Link } from "react-router-dom";

function SqlTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7079/Model/GetModels")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ModelName</th>
            <th>Hyperlink</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.modelName}</td>
              <td>{item.hyperLink}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/">Home</Link>
    </div>
  );
}

export default SqlTable;
