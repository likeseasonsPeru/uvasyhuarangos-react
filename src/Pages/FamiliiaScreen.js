import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { NavFamilies } from "../components/NavFamilies";
import { Link, useParams, Navigate } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

// images
import ArrowRight from "../assets/img/legado/arrow-right-store.png";
import ArrowLeft from "../assets/img/quienesomos/arrow-right.png";
import { FamiliesData } from "../data/FamiliesData";
import { FamiliesVisitUs } from "../components/FamiliesVisitUs";

export const FamiliiaScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    // window.scrollTo(0, 0);
  }, []);

  const { familia } = useParams();
  const item = FamiliesData.find((item) => item.familia === familia);
  console.log(item.familia);
  if (!item) {
    return <Navigate to="/familia" />;
  }
  const width = window.innerWidth;
  const widthView = 992;
  const DataFooter = [
    "#A45844",
    [
      "“El peruano y su pisco son la definición precisa del anfitrión” Ismael Benavides",
    ],
  ];
  return (
    <>
      <NavFamilies />
      <section className={width <= widthView ? "mt-140 page" : "mt-240 page"}>
        <div className="container pb-5 position-relative pt-90">
          <div className="row text-center justify-content-md-center">
            <div className="col-12">
              <h6 className="pages-firstitle animate__animated animate__fadeInDown mb-5">
                ¿QUIENES SOMOS?
              </h6>
              {item.title.length > 1 ? (
                <>
                  <div className="d-flex justify-content-around align-items-center pb-2">
                    <button
                      className="animate__animated animate__fadeInLeft"
                      onClick={() => window.history.back()}
                    >
                      <img
                        src={ArrowLeft}
                        alt="ArrowLeft"
                        className="img-fluid heigth-arrow"
                      />
                    </button>
                    <h2
                      className="pages-subtitles color-qs  animate__animated animate__fadeInDown"
                      style={{ lineHeight: "1" }}
                    >
                      {item.title[0]}
                    </h2>
                    {FamiliesData[item.id + 1] ? (
                      <Link
                        to={`/familia/${FamiliesData[item.id + 1].familia}`}
                      >
                        <button className="animate__animated animate__fadeInLeft">
                          <img
                            src={ArrowLeft}
                            alt="ArrowLeft"
                            className="img-fluid heigth-arrow"
                            style={{ transform: "rotate(180deg)" }}
                          />
                        </button>
                      </Link>
                    ) : (
                      <Link to={"#"}>
                        <button className="animate__animated animate__fadeInLeft">
                          <img
                            src={ArrowLeft}
                            alt="ArrowLeft"
                            className="img-fluid heigth-arrow"
                            disabled={true}
                            style={{ transform: "rotate(180deg)" }}
                          />
                        </button>
                      </Link>
                    )}
                  </div>
                  <h1 className="pages-titles color-qs  animate__animated animate__fadeInDown">
                    {item.title[1]}
                  </h1>
                </>
              ) : (
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    className="animate__animated animate__fadeInLeft"
                    onClick={() => window.history.back()}
                  >
                    <img
                      src={ArrowLeft}
                      alt="ArrowLeft"
                      className="img-fluid heigth-arrow"
                    />
                  </button>
                  <h1 className="pages-titles color-qs animate__animated animate__fadeInDown">
                    {item.title}
                  </h1>
                  {FamiliesData[item.id + 1] ? (
                    <Link to={`/familia/${FamiliesData[item.id + 1].familia}`}>
                      <button className="animate__animated animate__fadeInLeft">
                        <img
                          src={ArrowLeft}
                          alt="ArrowLeft"
                          className="img-fluid heigth-arrow"
                          style={{ transform: "rotate(180deg)" }}
                        />
                      </button>
                    </Link>
                  ) : (
                    <Link to={"#"}>
                      <button className="animate__animated animate__fadeInLeft">
                        <img
                          src={ArrowLeft}
                          alt="ArrowLeft"
                          className="img-fluid heigth-arrow"
                          disabled={true}
                          style={{ transform: "rotate(180deg)" }}
                        />
                      </button>
                    </Link>
                  )}
                </div>
              )}
            </div>
            <div className="col-12">
              {item.txt.length > 1 ? (
                <p
                  style={{ maxWidth: "800px", lineHeight: "1.8" }}
                  className="mx-auto animate__animated animate__fadeInUp pt-3"
                >
                  {item.txt[0]}
                  <br /> <br />
                  {item.txt[1]}
                </p>
              ) : (
                <p
                  style={{ maxWidth: "800px", lineHeight: "1.8" }}
                  className="mx-auto animate__animated animate__fadeInUp pt-3"
                >
                  {item.txt}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4">
              <div className="text-center">
                <Link
                  className="link-social text-decoration-none"
                  to="#"
                  onClick={() => {
                    window.open(
                      `${item.networkSocial.instragram[1]}`,
                      "_blank"
                    );
                  }}
                >
                  <span>INSTAGRAM:</span> {item.networkSocial.instragram[0]}
                </Link>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4">
              <div className="text-center">
                <Link
                  className="link-social text-decoration-none"
                  to="#"
                  onClick={() => {
                    window.open(`${item.networkSocial.facebook[1]}`, "_blank");
                  }}
                >
                  <span>FACEBOOK:</span> {item.networkSocial.facebook[0]}
                </Link>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4">
              <div className="text-center">
                {item.networkSocial.web ? (
                  <Link
                    className="link-social text-decoration-none"
                    to="#"
                    onClick={() => {
                      window.open(`${item.networkSocial.web[1]}`, "_blank");
                    }}
                  >
                    <span>WEB:</span> {item.networkSocial.web[0]}
                  </Link>
                ) : (
                  <Link
                    className="link-social text-decoration-none"
                    to="#"
                    onClick={() => {
                      window.open(`${item.networkSocial.mail[1]}`, "_blank");
                    }}
                  >
                    <span>MAIL:</span> {item.networkSocial.mail[0]}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0 mb-5 position-relative px-0">
          <img
            src={item.banner}
            className="img-fluid"
            width="100%"
            alt="banner"
          />
          <h1
            className="pages-titles color-white text-center position-absolute"
            style={{ left: "0", right: "0", bottom: "5px" }}
          >
            {item.txtBanner}
          </h1>
        </div>

        <div className="container pb-5">
          <div className="row pb-4">
            {window.innerWidth <= 540 && (
              <div className="col-sm-12">
                <div className="mx-auto" style={{ maxWidth: "450px" }}>
                  {item.nameOwner.length > 1 ? (
                    <>
                      <h4 className="txt-autor text-center pr-5">
                        {item.nameOwner[0]}
                      </h4>
                      <h4 className="txt-autor text-center pl-5">
                        {item.nameOwner[1]}
                      </h4>
                    </>
                  ) : (
                    <>
                      <h4 className="txt-autor text-center">
                        {item.nameOwner}
                      </h4>
                    </>
                  )}
                </div>
              </div>
            )}
            <div className="col-md-7 col-sm-12 text-center my-3">
              {window.innerWidth <= 540 ? (
                <img
                src={item.boss}
                className="img-fluid"
                style={{ maxHeight: "580px" }}
                alt="owner"
                // data-aos="fade-right"
              />
              ) : (
                <img
                src={item.owner}
                className="img-fluid"
                style={{ maxHeight: "580px" }}
                alt="owner"
                // data-aos="fade-right"
              />
              )}
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-around my-3">
              {item.txtOwner.length > 1 ? (
                <p className="align-header pb-3" style={{ maxWidth: "450px" }}>
                  {item.txtOwner[0]}
                  <br />
                  <br />
                  {item.txtOwner[1]}
                </p>
              ) : (
                <p className="align-header pb-3" style={{ maxWidth: "450px" }}>
                  {item.txtOwner}
                </p>
              )}
              {window.innerWidth > 540 && (
                <div style={{ maxWidth: "450px" }}>
                  {item.nameOwner.length > 1 ? (
                    <>
                      <h4 className="txt-autor text-center pl-4">
                        {item.nameOwner[0]}
                      </h4>
                      <h4 className="txt-autor text-right">
                        {item.nameOwner[1]}
                      </h4>
                    </>
                  ) : (
                    <>
                      <h4 className="txt-autor text-lg-right text-md-right text-xl-right">
                        {item.nameOwner}
                      </h4>
                    </>
                  )}
                </div>
              )}
              {window.innerWidth <= 540 && item.pisco ? (
                <div className="mx-auto mt-3 mb-5">
                  <img
                    src={item.pisco}
                    alt="Imagen de Pisco"
                    style={{ maxHeight: "450px" }}
                  />
                </div>
              ) : (
                <></>
              )}

              <div
                className="d-flex justify-content-between align-items-center ml-540"
                style={{ maxWidth: "450px" }}
              >
                <Link
                  className="text-decoration-none"
                  to="#"
                  onClick={() => {
                    window.open(`${item.to}`, "_blank");
                  }}
                >
                  <button className="btn-w color-tienda br-store ">
                    {item.familia === "restaurantelaolladejuanita"
                      ? "RESERVA"
                      : "TIENDA"}
                  </button>
                </Link>
                {FamiliesData[item.id + 1] ? (
                  <Link to={`/familia/${FamiliesData[item.id + 1].familia}`}>
                    <button className="animate__animated animate__fadeInLeft">
                      <img
                        src={ArrowRight}
                        alt="ArrowRight"
                        className="arrowfamilystore"
                      />
                    </button>
                  </Link>
                ) : (
                  <Link to={"#"}>
                    <button className="animate__animated animate__fadeInLeft">
                      <img
                        src={ArrowRight}
                        alt="ArrowRight"
                        className="arrowfamilystore"
                        disabled={true}
                      />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {item.dataVisit ? (
          <FamiliesVisitUs
            txt={item.dataVisit.txt}
            img={item.dataVisit.img}
            include={item.dataVisit.include}
            slg={item.dataVisit.slg}
            item={item.familia}
            to={item.dataVisit.to}
          />
        ) : (
          <></>
        )}
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};
