import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/img/gastronomia/arrow-right.png";

export const StoreGastronomy = ({ head, slg, txt, include, img, to }) => {
  const family = "BODEGA PAMPAS DE ICA";
  return (
    <div className="container px-120 border-bottom-color">
      <h1 className="pages-titles-gastronomia txt-position-l-c color-gastronomia">
        {head}
      </h1>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-between">
          <div>
            <h4 className="font-california mt-2 font-size-gastro">{slg[0]}</h4>
            <h4 className="font-california pb-4 font-size-gastro">{slg[1]}</h4>
            <p style={{ maxWidth: 500 }}>{txt}</p>
            {head === family && (
              <div style={{ maxWidth: 500 }}>
                <strong className="font-tusker">Tour Semisecos</strong>
                <p>
                  Nuestro servicio personalizado enoturístico, se desarrolla con
                  la explica ción del proceso del pisco y vino, concluye con la
                  degustación de 2 vinos semisecos, 1 dulce, 1 pisco y una
                  crema. Las muestras son las siguientes: <br /> <br />- Vino
                  semiseco Borgoña <br /> - Vino semiseco Rosé <br /> - Vino
                  dulce Perfecto amor <br /> - Pisco puro Quebranta <br /> -
                  Crema de algarrobina <br />
                  *Degustación en copas e incluye agua.
                </p>
                <br />
                <strong className="font-tusker">Tour Seco</strong>
                <p>
                  Nuestro servicio personalizado enoturístico, se desarrolla con
                  la explica ción del proceso del pisco y vino, concluye con la
                  degustación de 2 vinos secos, 1 pisco aromático y mosto verde.
                  Las muestras son las siguientes: <br /> <br />- Vino Blanco
                  Patrimonial ( Albilla y torontel) <br /> - Vino Rosé María (
                  Malbec y Sirah) <br /> - Pisco Torontel <br /> - Pisco Mosto
                  verde Quebranta <br />
                  *Degustación en copas e incluye agua.
                </p>
              </div>
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
                <div className="d-flex mt-4 class-bottom button-arrow-turism">
                <button className="color-gastronomia br-gastronomia">
                  RESERVA
                </button>
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
          <img src={img} className="img-fluid mt-sm-2" alt={head} />
        </div>
      </div>
    </div>
  );
};
