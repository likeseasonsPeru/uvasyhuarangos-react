import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/img/quienesomos/arrow-right-family.png";

export const FamiliesVisitUs = ({ slg, to, img, txt, include, item }) => {
  const family = "bodegapampasdeica";
  return (
    <section>
      <div className="bg-familias py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h4 className="font-neue text-black" style={{ fontSize: "40px" }}>
                ven a Ica y
              </h4>
              <h1 className="pages-titles-gastronomia text-black">
                ¡VISíTANOS!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-90">
        <div className="row mt-3">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-between">
            <div>
              <div className="mb-5">
                <h4 className="font-california mt-2 font-size-famvisit">
                  {slg[0]}
                </h4>
                <h4 className="font-california font-size-famvisit">{slg[1]}</h4>
                {slg[2] && (
                  <h4 className="font-california font-size-famvisit">
                    {slg[2]}
                  </h4>
                )}
              </div>
              <p style={{ maxWidth: 500 }}>{txt}</p>
              {item === family ? (
                <div style={{ maxWidth: 500 }}>
                  <strong className="font-tusker">Tour Semisecos</strong>
                  <p>
                    Nuestro servicio personalizado enoturístico, se desarrolla
                    con la explica ción del proceso del pisco y vino, concluye
                    con la degustación de 2 vinos semisecos, 1 dulce, 1 pisco y
                    una crema. Las muestras son las siguientes: <br /> <br />-
                    Vino semiseco Borgoña <br /> - Vino semiseco Rosé <br /> -
                    Vino dulce Perfecto amor <br /> - Pisco puro Quebranta{" "}
                    <br /> - Crema de algarrobina <br />
                    *Degustación en copas e incluye agua.
                  </p>
                  <br />
                  <strong className="font-tusker">Tour Seco</strong>
                  <p>
                    Nuestro servicio personalizado enoturístico, se desarrolla
                    con la explica ción del proceso del pisco y vino, concluye
                    con la degustación de 2 vinos secos, 1 pisco aromático y
                    mosto verde. Las muestras son las siguientes: <br /> <br />-
                    Vino Blanco Patrimonial ( Albilla y torontel) <br /> - Vino
                    Rosé María ( Malbec y Sirah) <br /> - Pisco Torontel <br />{" "}
                    - Pisco Mosto verde Quebranta <br />
                    *Degustación en copas e incluye agua.
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div>
              <strong className="font-tusker">Incluye:</strong>{" "}
              <span className="font-mackinacpro">{include}</span>
              <Link
                to="#"
                className="text-decoration-none"
                onClick={() => {
                  window.open(`${to}`, "_blank");
                }}
              >
                <div className="d-flex mt-4 br-visitUs">
                  <button className="">RESERVA</button>
                  <img
                    src={ArrowRight}
                    className="img-fluid ml-4"
                    alt="ArrowRight"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 h-100">
            <img src={img} className="img-fluid mt-sm-2" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
