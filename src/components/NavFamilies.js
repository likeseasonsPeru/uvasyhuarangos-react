import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { SliderNavbar } from "./SliderNavbar";
import "./styles/style.css";

export const NavFamilies = () => {
  const width = window.innerWidth;
  return (
    <>
      <section>
        {/*  */}
        {width <= 992 ? (
          <section
            className="position-fixed w-100 top-0"
            style={{ zIndex: "1000" }}
          >
            <Navbar />
            <SliderNavbar />
          </section>
        ) : (
          <section
            className="position-fixed w-100 top-0"
            style={{ zIndex: "1000" }}
          >
            <Navbar />
            <nav className="navbar-brands" style={{ marginTop: "120px" }}>
              <ul
                className="d-flex justify-content-around  align-items-center"
                style={{ marginBottom: "0" }}
              >
                <li className="nav-item-fam">
                  <NavLink
                    className="brands-link"
                    to="/familia/agenciadolphintravel"
                  >
                    <p className="text-center">
                      AGENCIA <br />
                      DOLPHIN TRAVEL
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item-fam">
                  <NavLink className="brands-link" to="/familia/finca314">
                    <p className="text-center">
                      Finca <br />
                      314
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item-fam">
                  <NavLink
                    className="brands-link"
                    to="/familia/bodegasantalucia"
                  >
                    <p className="text-center">
                      BODEGA <br />
                      SANTA LUCíA
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item-fam">
                  <NavLink
                    className="brands-link"
                    to="/familia/bodegasannicolas"
                  >
                    <p className="text-center">
                      Bodega <br />
                      San Nicolás
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item-fam">
                  <NavLink
                    className="brands-link"
                    to="/familia/bodegaelcatador"
                  >
                    <p className="text-center">
                      Bodega <br />
                      el catador
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item-fam">
                  <NavLink
                    className="brands-link"
                    to="/familia/bodegapampasdeica"
                  >
                    <p className="text-center">
                      Bodega <br />
                      pampas de ica
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item-fam">
                  <NavLink
                    className="brands-link"
                    to="/familia/bodegatresgeneraciones"
                  >
                    <p className="text-center">
                      Bodega <br />
                      tres Generaciones
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item-fam">
                  <NavLink
                    className="brands-link"
                    to="/familia/bodegavillacuri"
                  >
                    <p className="text-center">
                      Bodega <br />
                      Villacuri
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item-fam">
                  <NavLink
                    className="brands-link"
                    to="/familia/restaurantelaolladejuanita"
                  >
                    <p className="text-center">
                      Restaurante <br />
                      La olla de juanita
                    </p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </section>
        )}
      </section>
    </>
  );
};
