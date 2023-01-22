import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import InfosMagasins from "./Pages/InfosMagasins";
import ShibaPrice from "./Pages/ShibaPrice";
import Greetings from "./Pages/Greetings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acccueil" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/infosmagasins" element={<InfosMagasins />} />
        <Route path="/ShibaPrice" element={<ShibaPrice />} />
        <Route path="/Greetings" element={<Greetings/>} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
