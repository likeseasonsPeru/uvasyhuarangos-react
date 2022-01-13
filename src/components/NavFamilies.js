import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/style.css";

export const NavFamilies = () => {
  const width = window.innerWidth;
  console.log(width, "width");
  return (
    <>
    <section>
    {/*  */}
    {
      width <= 992 ? (
        <section className="position-fixed w-100 top-0" style={{zIndex: "1000"}}>
        <Navbar/>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-brands navbar-brands-lg" style={{marginTop: "120px"}}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navfamilies"
          aria-controls="navfamilies"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  nav-families"
          id="navfamilies"
        >
          <ul className="navbar-nav">
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/agenciadolphintravel">
                <p className="text-center">
                  AGENCIA <br />
                  DOLPHIN TRAVEL
                </p>
              </Link>
            </li>
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/finca314">
                <p className="text-center">
                  Finca <br />
                  314
                </p>
              </Link>
            </li>
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/fundosantalucia">
                <p className="text-center">
                  FUNDO <br />
                  SANTA LUCIA
                </p>
              </Link>
            </li>
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/bodega1615">
                <p className="text-center">
                  Bodega <br />
                  1615
                </p>
              </Link>
            </li>
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/bodegaelcatador">
                <p className="text-center">
                  Bodega <br />
                  el catador
                </p>
              </Link>
            </li>
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/bodegapampasdeica">
                <p className="text-center">
                  Bodega <br />
                  pampas de ica
                </p>
              </Link>
            </li>
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/bodegatresgeneraciones">
                <p className="text-center">
                  Bodega <br />
                  tres Generaciones
                </p>
              </Link>
            </li>
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/bodegavillacuri">
                <p className="text-center">
                  Bodega <br />
                  Villacuri
                </p>
              </Link>
            </li>
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/haciendagranpaso">
                <p className="text-center">
                  Hacienda <br />
                  gran paso
                </p>
              </Link>
            </li>
            <li className="nav-item-fam">
              <Link className="brands-link" to="/familia/restauranteolladejuanita">
                <p className="text-center">
                  Restaurante <br />
                  olla de juanita
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </section>
      ) : (
        <section className="position-fixed w-100 top-0" style={{zIndex: "1000"}}>
          <Navbar/>
          <nav className="navbar-brands" style={{marginTop: "120px"}}>
        <ul
          className="d-flex justify-content-around  align-items-center"
          style={{ marginBottom: "0" }}
        >
          <li className="nav-item-fam">
            <Link className="brands-link" to="/familia/agenciadolphintravel">
              <p className="text-center">
                AGENCIA <br />
                DOLPHIN TRAVEL
              </p>
            </Link>
          </li>
          <li className="nav-item-fam">
            <Link className="brands-link" to="/familia/finca314">
              <p className="text-center">
                Finca <br />
                314
              </p>
            </Link>
          </li>
          <li className="nav-item-fam">
            <Link className="brands-link" to="/familia/fundosantalucia">
              <p className="text-center">
                FUNDO <br />
                SANTA LUCIA
              </p>
            </Link>
          </li>
          <li className="nav-item-fam">
            <Link className="brands-link" to="/familia/bodega1615">
              <p className="text-center">
                Bodega <br />
                1615
              </p>
            </Link>
          </li>
          <li className="nav-item-fam">
            <Link className="brands-link" to="/familia/bodegaelcatador">
              <p className="text-center">
                Bodega <br />
                el catador
              </p>
            </Link>
          </li>
          <li className="nav-item-fam">
            <Link className="brands-link" to="/familia/bodegapampasdeica">
              <p className="text-center">
                Bodega <br />
                pampas de ica
              </p>
            </Link>
          </li>
          <li className="nav-item-fam">
            <Link className="brands-link" to="/familia/bodegatresgeneraciones">
              <p className="text-center">
                Bodega <br />
                tres Generaciones
              </p>
            </Link>
          </li>
          <li className="nav-item-fam">
            <Link className="brands-link" to="/familia/bodegavillacuri">
              <p className="text-center">
                Bodega <br />
                Villacuri
              </p>
            </Link>
          </li>
          <li className="nav-item-fam">
            <Link className="brands-link" to="/familia/haciendagranpaso">
              <p className="text-center">
                Hacienda <br />
                gran paso
              </p>
            </Link>
          </li>
          <li className="nav-item-fam">
            <Link
              className="brands-link"
              to="/familia/restauranteolladejuanita"
            >
              <p className="text-center">
                Restaurante <br />
                olla de juanita
              </p>
            </Link>
          </li>
        </ul>
      </nav>
   
        </section>
 
      )
    }
      
      
    </section>
    </>
  );
};