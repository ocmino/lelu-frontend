import "./App.css";
import ModelViewer from "./Pages/ModelViewer/ModelViewer";
import StartPage from "./Pages/StartPage/StartPage";
import Login from "./Pages/Login/Login";
import SqlTable from "./Pages/Table/SqlTable";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <div>
      <Router>
        <Routes>
          <Route path="/startpage" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ModelViewer />} />
          <Route path="/sqltable" element={<SqlTable />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
