import React from "react";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeData from "../data/homeData";

// images
import Shilf from "../assets/img/sello.png";

export const Home = () => {
  const DataFooter = [
    "#6E5844",
    "GRACIAS AL REY FELIPE II POR PROHIBIR LA VENTA DEL “FRUTO DE CASTILLA” EN ESPAÑA SIN SABERLO CREABAS EL PISCO.",
  ];
  return (
    <>
      <Navbar />
      <section>
        <div className="container-fluid parallax p-inicio">
          <div
            className="row d-flex align-items-end"
            style={{ height: "inherit" }}
          >
            <div className="col-md-8">
              <h1 className="parallax-titles">ALEGRÍA Y SABOR IQUEÑO</h1>
              <br />
            </div>
            <div className="col-md-4 text-right">
              <img
                className="img-fluid"
                style={{ position: "absolute", right: "20px", top: "-250px" }}
                src={Shilf}
              />
            </div>
          </div>
        </div>
        <div
          className="container-fluid d-flex flex-column justify-content-between py-5"
          style={{ height: "50vh", backgroundColor: "#808060" }}
        >
          <div className="row">
            <div className="col-md-3 text-center">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <span className="mayoria text-white">+18</span>
                </div>
                <div className="btn-idiomas">
                  <button className="btn-block p-2 text-white">ENGLISH</button>
                  <button className="btn-block p-2 text-white">ESPAÑOL</button>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <p className="py-3 text-white">
                Somos una gran familia iqueña compuesta de socios propietarios
                de viñedos,
                <br />
                bodegas, haciendas, restaurantes y agencias de turismo con algo
                en común:
                <br />
                el corazón latiendo de amor por Ica.
              </p>
              <br />
              <p className="slg-index text-white">
                el corazón latiendo de amor por Ica.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center">
              <p className="text-white">
                ÚNETE A<br />
                RACIMOS DEL SUR
              </p>
              <div>
                <button className="btn-cookies p-3">Usamos cookies</button>
                <button className="btn-aceptar p-3">aceptar</button>
              </div>
            </div>
            <div className="col-md-9 align-self-end">
              <p className="logo-home-bear text-white">
                {/* TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        {HomeData.map(({ color, arrow, clase, txt }, index) => {
          return (
            <SectionHome
              color={color}
              arrow={arrow}
              clase={clase}
              txt={txt}
              key={index}
            />
          );
        })}
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};

export const SectionHome = ({ color, arrow, clase, txt }) => {
  return (
    <>
      <div
        style={{ height: "50vh", backgroundColor: color, fontSize: "2rem" }}
        className="d-flex flex-column justify-content-end px-3"
      >
        <div className="d-flex pl-2 pr-5 justify-content-between">
          <button className="btn-store">Tienda</button>
          <img src={arrow} />
        </div>
        <h1 className="parallax-titles">{txt[0]}</h1>
      </div>
      <div className={`parallax ${clase} px-3`}>
        <h1 className="parallax-titles pt-2">{txt[1]}</h1>
      </div>
    </>
  );
};
