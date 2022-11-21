import "./App.css";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Login from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
