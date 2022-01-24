import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/img/gastronomia/arrow-right.png";

export const FamiliesVisitUs = ({ slg, to, img, txt, include }) => {
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
              <h4
                className="font-california mt-2 mb-5 font-size-famvisit"
                style={{ maxWidth: "500px" }}
              >
                {slg}
              </h4>
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
            <img src={img} className="img-fluid mt-sm-2" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
