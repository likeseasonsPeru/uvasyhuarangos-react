import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const Error = () => {
  return (
    <div>
      <Navbar />
      <section className="container mt-120">
        <div className="row">
          <div className="col-sm-12 col-md-12 py-5">
            <h2 className="text-center color-white mt-5">
              Esta página no está disponible.
            </h2>
            <p className="text-center color-white mt-2">
              <br /> Es posible que el enlace que seleccionaste esté dañado o
              que se haya eliminado la página.
              <Link className="text-decoration-none" to="/">
                Volver.
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
