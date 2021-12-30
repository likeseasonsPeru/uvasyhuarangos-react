import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";

export const NavFamilies = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark navbar-brands">
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
            <li className="nav-item">
              <Link className="brands-link" to="/agenciadolphintravel">
                <p className="text-center">
                  AGENCIA <br />
                  DOLPHIN TRAVEL
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="brands-link" to="/finca314">
                <p className="text-center">
                  Finca <br />
                  314
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="brands-link" to="/fundosantalucia">
                <p className="text-center">
                  FUNDO <br />
                  SANTA LUCIA
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="brands-link" to="/bodega1615">
                <p className="text-center">
                  Bodega <br />
                  1615
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="brands-link" to="/bodegaelcatador">
                <p className="text-center">
                  Bodega <br />
                  el catador
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="brands-link" to="/bodegapampasdeica">
                <p className="text-center">
                  Bodega <br />
                  pampas de ica
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="brands-link" to="/bodegatresgeneraciones">
                <p className="text-center">
                  Bodega <br />
                  tres Generaciones
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="brands-link" to="/bodegavillacuri">
                <p className="text-center">
                  Bodega <br />
                  Villacuri
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="brands-link" to="/haciendagranpaso">
                <p className="text-center">
                  Hacienda <br />
                  gran paso
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="brands-link" to="/restauranteolladejuanita">
                <p className="text-center">
                  Restaurante <br />
                  olla de juanita
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
       */}
      <nav className="navbar-brands">
        <ul
          className="d-flex justify-content-around  align-items-center"
          style={{ marginBottom: "0" }}
        >
          <li className="nav-item">
            <Link className="brands-link" to="/familia/agenciadolphintravel">
              <p className="text-center">
                AGENCIA <br />
                DOLPHIN TRAVEL
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="brands-link" to="/familia/finca314">
              <p className="text-center">
                Finca <br />
                314
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="brands-link" to="/familia/fundosantalucia">
              <p className="text-center">
                FUNDO <br />
                SANTA LUCIA
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="brands-link" to="/familia/bodega1615">
              <p className="text-center">
                Bodega <br />
                1615
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="brands-link" to="/familia/bodegaelcatador">
              <p className="text-center">
                Bodega <br />
                el catador
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="brands-link" to="/familia/bodegapampasdeica">
              <p className="text-center">
                Bodega <br />
                pampas de ica
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="brands-link" to="/familia/bodegatresgeneraciones">
              <p className="text-center">
                Bodega <br />
                tres Generaciones
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="brands-link" to="/familia/bodegavillacuri">
              <p className="text-center">
                Bodega <br />
                Villacuri
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="brands-link" to="/familia/haciendagranpaso">
              <p className="text-center">
                Hacienda <br />
                gran paso
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="brands-link" to="/familia/restauranteolladejuanita">
              <p className="text-center">
                Restaurante <br />
                olla de juanita
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
