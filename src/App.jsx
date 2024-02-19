import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Bluejays from './pages/Bluejays';
import Raptors from './pages/Raptors';
import Mapleleafs from "./pages/Mapleleafs";
import Argonauts from "./pages/Argonauts";
import Torontofc from "./pages/Torontofc";

function App() {

  return (
    <div className='bg-black'>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mapleleafs" element={<Mapleleafs />} />
          <Route path="/Bluejays" element={<Bluejays />} />
          <Route path="/Raptors" element={<Raptors />} />
          <Route path="/Argonauts" element={<Argonauts />} />
          <Route path="/Torontofc" element={<Torontofc />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;


// state navbar toobig
// navbar logo inside red on hover