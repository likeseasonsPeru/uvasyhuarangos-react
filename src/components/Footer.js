import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";

// images
import ArrowRight from "../assets/img/footer/arrow-right.png";
import Shield from "../assets/img/footer/escudo.png";

const Footer = ({ color, txt }) => {
  return (
    <div className="pb-40 pt-20" style={{ paddingTop: "20px" }}>
      <div className="row p-5 justify-content-around">
        <div
          className="col-md-2 d-flex flex-column justify-content-between"
          style={{ minHeight: "500px" }}
        >
          <div className="d-flex mt-5">
            <button className="br-btn-footer px-3">TIENDA</button>
            <img src={ArrowRight} className="img-fluid ml-4" />
          </div>
          <p className="color-white">
            Uso de esta web:
            <br />
            Términos y condiciones
            <br />
            Política de cookies
          </p>
          <p className="logo-footer text-center">
            únete al cluster racimos del sur
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
                <form>
                  <input
                    className="input-footer"
                    type="email"
                    style={{ width: "90%" }}
                    placeholder="Escribe tu email"
                    required
                  />
                </form>
                <p className="py-3 color-white" style={{ fontSize: "11px" }}>
                  Recibe invitaciones, ofertas y noticias sobre nuestros
                  servicios y productos
                </p>
              </div>
              <div>
                <p className="color-white">
                  Reclamos: <br />
                  <Link
                    to="#"
                    onClick={(e) => {
                      window.location = "mailto:reclamos@racimosdelsur.pe";
                      e.preventDefault();
                    }}
                    className="color-white"
                  >
                    reclamos@racimosdelsur.pe
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
                Cluster vitivinícolo y enoturístico <br />
                Direccion ﬁscal 000, Ica, Perú. <br />
                999 999 999 <br />
                Atención en horario de oﬁcina.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 pt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={Shield} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p className="txt-footer color-white">{txt}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="footer-slang text-center text-uppercase p-4 text-white">
            Tomar Bebidas Alcohólicas en exceso es dañino
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
