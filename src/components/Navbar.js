import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black nav-fixed" style={{minHeight: "120px"}}>
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Uvas y Huarangos" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#burgermenu"
          aria-controls="burgermenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="burgermenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/uvas">
                UVAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/huarangos">
                HUARANGOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/familia">
                FAMILIAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/piscos">
                PISCOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vinos">
                VINOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/turismo">
                TURISMO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={(e)=>{
                window.location =`https://tienda.uvasyhuarangos.pe/`
                e.preventDefault()
              }}>
                TIENDA
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
