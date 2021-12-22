import React from "react";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const Vinos = () => {
  
  const DataFooter = [
    "#5D5D43",
    "“NOSOTROS NO SOMOS LA PITUCA PRODUCIDA. NOSOTROS SOMOS LA TRADICIÓN DE LCA. OSEA SOMOS LA CHOLA BONITA”"
  ];

  return (
    <>
      <Navbar />
      <section>
        <h1>Vinos</h1>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]}/>
    </>
  );
};
