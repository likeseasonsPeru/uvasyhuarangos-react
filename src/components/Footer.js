import React, { useState } from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";

// images
import ArrowRight from "../assets/img/footer/arrow-right.png";
import Shield from "../assets/img/footer/escudo.png";
import submit from "../assets/img/footer/btn.png";
import Racimos from "../assets/img/footer/logo-racimos.png";

const Footer = ({ color, txt }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email);
    setEmail("");
  };

  return (
    <div className="pb-40 pt-20" style={{ paddingTop: "20px" }}>
      <div className="row p-0 p-lg-5 p-md-5 justify-content-around">
        <div
          className="col-md-2 d-flex flex-column justify-content-between"
          style={{ minHeight: "475px" }}
        >
          <Link
          className="text-decoration-none"
            to="#"
            onClick={() => {
              window.location = "https://tienda.uvasyhuarangos.pe/";
            }}
          >
            <div className="d-flex mt-5">
              <button className="br-btn-footer px-3">TIENDA</button>
              <img
                src={ArrowRight}
                className="img-fluid ml-4"
                alt="arrow right"
              />
            </div>
          </Link>
          <p className="color-white">
            Uso de esta web:
            <br />
            <Link
              to="/terminosycondiciones"
              className=" text-decoration-none text-white"
              style={{ cursor: "pointer" }}
            >
              Términos y condiciones
            </Link>
            <br />
            <Link
              to="/cookies"
              className=" text-decoration-none text-white"
              style={{ cursor: "pointer" }}
            >
              Política de cookies
            </Link>
          </p>
          <p className="logo-footer text-center">
            <Link
              to="#"
              onClick={() => {window.open("https://racimosdelsur.com/","_blank");}}
              style={{ cursor: "pointer" }}
            >
            <img src={Racimos} className="img-fluid pb-4" alt="logo racimos del sur" />
            </Link>
          </p>
        </div>
        <div className="col-md-6 pt-5">
          <div className="row">
            <div
              className="col-md-7 d-flex flex-column justify-content-between"
              style={{ minHeight: "400px" }}
            >
              <h4 className="subtitle-footer" style={{ color: color }}>
                SÚSCRIBETE A NOTICIAS
              </h4>
              <div>
                <form
                  className="position-relative"
                  style={{ width: "100%" }}
                  onSubmit={handleSubmit}
                >
                  <input
                    className="input-footer"
                    type="email"
                    style={{ width: "90%" }}
                    placeholder="Escribe tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="border-0 position-absolute bottom-0 btn-footer"
                    style={{ right: "10%", zIndex: "10" }}
                  >
                    <img src={submit} alt="submit" />
                  </button>
                </form>
                <p className="py-3 color-white" style={{ fontSize: "11px" }}>
                  Recibe invitaciones, ofertas y noticias sobre nuestros
                  servicios y productos
                </p>
              </div>
              <div>
                <p className="color-white">
                  Contacto: <br />
                  <Link
                    to="#"
                    onClick={(e) => {
                      window.location = "mailto:info@racimosdelsur.com";
                      e.preventDefault();
                    }}
                    className="color-white"
                  >
                    info@racimosdelsur.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <h4 className="subtitle-footer" style={{ color: color }}>
                DI HOLA!
              </h4>
              <p className="mt-5 color-white">
                Racimos del sur <br />
                Cluster enoturístico de Ica<br />
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location = "tel:+51956620053";
                    e.preventDefault();
                  }}
                  className="text-white text-decoration-none"
                >
                  Teléfono: 956620053
                </Link>{" "}
                <br />
                Atención en horario de oﬁcina: <br />
                10:00am - 7:00pm
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 pt-5">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-5 col-xl-5 col-xxl-5 text-center">
              <img src={Shield} className="img-fluid pb-4" alt="shield" />
            </div>
            <div className="col-md-12 col-sm-12 col-lg-7 col-xl-7 col-xxl-7">
              {txt.length > 1 ? (
                <p className="txt-footer color-footer">
                  {txt[0]} <br /> <br /> {txt[1]}{" "}
                </p>
              ) : (
                <p className="txt-footer color-footer">{txt[0]}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="footer-slang text-center text-uppercase py-4 text-white">
            Tomar Bebidas Alcohólicas en exceso es dañino
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
