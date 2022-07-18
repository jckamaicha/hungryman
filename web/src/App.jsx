import React from "react";
import CustomRouter from "./utils/Router";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Topbar from "./components/topbar";
import Navigation from "./components/navigation";

export default function App() {
  return (
    <Router>
      <Topbar/>
      <Navbar/>
      <CustomRouter />
      <Navigation/>
    </Router>
  );
}
