import React, {useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/style.css";
import Logo from "../assets/img/logo.jpg";

const Navbar = () => {
  const [height, changeHeight] = useState(0)
  console.log(height);
  const ref = useRef(null)

  // let match = useRouteMatch({
  //   // path: to,
  //   // exact: activeOnlyWhenExact
  // });

  useEffect(() => {
    changeHeight(ref.current.clientHeight)
  }, [])
  return (
    <>
      <nav ref={ref} className="navbar navbar-expand-lg navbar-dark bg-black nav-fixed" style={{minHeight: "126px"}}>
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Uvas y Huarangos" className="img-fluid logo-img" />
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
              <NavLink className="nav-link" to="/uvas">
                UVAS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/huarangos">
                HUARANGOS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/familia">
                FAMILIAS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/piscos">
                PISCOS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vinos">
                VINOS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/turismo">
                TURISMO
              </NavLink>
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
