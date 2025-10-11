import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Login from "./components/loginform/loginform";




function App () {
  return (
   
      <Routes>
        {/* Show Login Page First */}
        <Route path="/" element={<Login />} />
        
        {/* Show Main Landing Page After Login */}
        <Route 
          path="/home" 
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <Hero />
              <Services />
              <Banner />
              <Subscribe />
              <Banner2 />
              <Footer />
              

            </main>
          } 
        />
      </Routes>
    
  );
};

export default App;
