import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/img/gastronomia/arrow-right.png";

export const StoreGastronomy = ({ head, slg, txt, include, img, to }) => {
  return (
    <div className="container px-120 border-bottom-color">
      <h1 className="pages-titles-gastronomia text-left color-gastronomia">
        {head}
      </h1>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-between">
          <div>
            <h4 className="font-california mt-2 font-size-gastro">{slg[0]}</h4>
            <h4 className="font-california pb-4 font-size-gastro">{slg[1]}</h4>
            <p style={{ maxWidth: 500 }}>{txt}</p>
          </div>
          <div>
            <strong className="font-tusker">Incluye:</strong>{" "}
            <span className="font-mackinacpro">{include}</span>
            <div className="d-flex mt-4">
              <Link to={`/familia/${to}`}>
                <button className="color-gastronomia br-gastronomia px-5">
                  RESERVA
                </button>
                <img
                  src={ArrowRight}
                  className="img-fluid ml-4"
                  alt="ArrowRight"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 h-100">
          <img src={img} className="img-fluid mt-sm-2" alt={head} />
        </div>
      </div>
    </div>
  );
};
