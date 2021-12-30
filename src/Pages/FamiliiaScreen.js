import React, { memo } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavFamilies } from "../components/NavFamilies";
import { Link, useParams, Navigate } from "react-router-dom";

// images
import ArrowRight from "../assets/img/legado/arrow-right-store.png";
import ArrowLeft from "../assets/img/quienesomos/arrow-right.png";
import { FamiliesData } from "../data/FamiliesData";

export const FamiliiaScreen = memo(() => {
  const { familia } = useParams();
  const item = FamiliesData.find((i) => i.familia === familia);
  console.log(item);
  if (!item) {
    return <Navigate to="/familia" />;
  }
  const DataFooter = [
    "#A45844",
    "“PORQUE SOMOS PARTE DE LA TRADICIÓN, DEL CELEBRAR, DEL DISFRUTAR EN FAMILIA”",
  ];
  console.log(item);
  return (
    <>
      <Navbar />
      <NavFamilies />
      <section className="page">
        <div className="container py-5">
          <button className="float-left pt-5">
            <img src={ArrowLeft} alt="ArrowLeft" className="img-fluid" />
          </button>
          <div className="row text-center justify-content-md-center">
            <div className="col-12">
              <h6 className="pages-firstitle">¿QUIENES SOMOS?</h6>
              {item.title.length > 1 ? (
                <>
                  <h2 className="pages-subtitles color-qs">{item.title[0]}</h2>
                  <h1 className="pages-titles color-qs">{item.title[1]}</h1>
                </>
              ) : (
                <h1 className="pages-titles color-qs">{item.title}</h1>
              )}
            </div>
            <div className="col-12">
              {item.txt.length > 1 ? (
                <p style={{ maxWidth: "800px" }} className="mx-auto">
                  {item.txt[0]}
                  <br /> <br />
                  {item.txt[1]}
                </p>
              ) : (
                <p style={{ maxWidth: "800px" }} className="mx-auto">
                  {item.txt}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <div className="text-center">
                <Link
                  className="link-social text-decoration-none"
                  to="#"
                  onClick={(e) => {
                    window.location = `${item.networkSocial.instragram[1]}`;
                    e.preventDefault();
                  }}
                >
                  <span>INSTAGRAM:</span> {item.networkSocial.instragram[0]}
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <Link
                  className="link-social text-decoration-none"
                  to="#"
                  onClick={(e) => {
                    window.location = `${item.networkSocial.facebook[1]}`;
                    e.preventDefault();
                  }}
                >
                  <span>FACEBOOK:</span> {item.networkSocial.facebook[0]}
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                {item.networkSocial.web ? (
                  <Link
                    className="link-social text-decoration-none"
                    to="#"
                    onClick={(e) => {
                      window.location = `${item.networkSocial.web[1]}`;
                      e.preventDefault();
                    }}
                  >
                    <span>WEB:</span> {item.networkSocial.web[0]}
                  </Link>
                ) : (
                  <Link
                    className="link-social text-decoration-none"
                    to="#"
                    onClick={(e) => {
                      window.location = `${item.networkSocial.mail[1]}`;
                      e.preventDefault();
                    }}
                  >
                    <span>MAIL:</span> {item.networkSocial.mail[0]}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0 mb-5 position-relative">
          <img
            src={item.banner}
            className="img-fluid"
            width="100%"
            alt="banner"
          />
          <h1
            className="pages-titles color-white text-center position-absolute"
            style={{ left: "0", right: "0", bottom: "-20px" }}
          >
            {item.txtBanner}
          </h1>
        </div>

        <div className="container pb-5">
          <div className="row pb-4">
            <div className="col-md-5 text-center">
              <img
                src={item.owner}
                className="img-fluid"
                style={{ maxHeight: "550px" }}
                alt="owner"
              />
            </div>
            <div className="col-md-2 text-center align-self-center">
              {item.pisco && (
                <img
                  src={item.pisco}
                  className="img-fluid mt-2"
                  style={{ maxHeight: "500px" }}
                  alt={`Pisco ${familia}`}
                />
              )}
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-around">
              {item.txtOwner.length > 1 ? (
                <p className="text-right pb-3" style={{ maxWidth: "400px" }}>
                  {item.txtOwner[0]}
                  <br />
                  <br />
                  {item.txtOwner[1]}
                </p>
              ) : (
                <p className="text-right pb-3" style={{ maxWidth: "400px" }}>
                  {item.txtOwner}
                </p>
              )}
              <div>
                {item.nameOwner.length > 1 ? (
                  <>
                    <h4 className="txt-autor pl-4">{item.nameOwner[0]}</h4>
                    <h4 className="txt-autor text-center pr-5">
                      {item.nameOwner[1]}
                    </h4>
                  </>
                ) : (
                  <>
                    <h4 className="txt-autor text-center pr-5">
                      {item.nameOwner}
                    </h4>
                  </>
                )}
              </div>
              <div className="d-flex mt-3">
                <button className="btn-w color-tienda br-store px-5">
                  TIENDA
                </button>
                <img
                  src={ArrowRight}
                  className="img-fluid ml-4"
                  alt="ArrowRight"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
});
