import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeData from "../data/homeData";

// images
import Shilf from "../assets/img/sello.png";
import ImgHome from "../assets/img/bg-inicio.jpg";
// video
import VideoUvas from "../assets/video/video1.mp4";
// import VideoUvasOgg from "../assets/video/video1.ogg";

const insideStyles = {
  background: "transparent",
  position: "absolute",
  top: "2%",
};

export const Home = () => {
  const [video, hideVideo] = useState(true);
  const DataFooter = [
    "#6E5844",
    [
      "QUÉ DIRÍA EL REY FELIPE II, QUIEN EN EL AÑO 1595, AL PROHIBIR LA VENTA DEL “FRUTO DE CASTILLA” EN EL VIRREINATO DEL PERÚ PORQUE SUS VINOS SABÍAN MEJOR QUE LOS DE ESPAÑA, SIN SABERLO, ABRÍA LAS PUERTAS A QUE LAS UVAS QUE SEGUÍAN CRECIENDO EN ICA SE CONVIRTIESEN EN PISQUERAS. ¡SALUD DON FELIPE!",
    ],
  ];

  const hideVideoPlayer = () => {
    hideVideo(false);
    sessionStorage.setItem("video", JSON.stringify("video"));
  };
  const width = window.innerWidth;
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
    });
    const getPlay = sessionStorage.getItem("video");
    if (getPlay) {
      hideVideo(false);
    }
  }, []);
  return (
    <>
      {video ? (
        <>
          <div
            className=" d-flex justify-content-center align-items-center w-100 position-relative"
            style={{ height: "100vh" }}
          >
            <div className="position-absolute text-center w-50 mx-auto btn-next">
              <button
                className="btn btn-outline-dark text-white"
                style={{ cursor: "pointer" }}
                onClick={hideVideoPlayer}
              >
                Saltar video
              </button>
            </div>
            {/* <video
              autoPlay
              controls
              // style={{ maxHeight: "99vh" }}
              width="100%"
              height="100%"
            >
              <source src={VideoUvas} type="video/mp4" />
              <source src={VideoUvasOgg} type="video/ogg" />
            </video> */}
            <ReactPlayer
              url={VideoUvas}
              className="react-player"
              width="100%"
              playing
              controls
              volume="0.4"
              height="100%"
              muted
              style={{ maxHeight: "99vh" }}
              onEnded={hideVideoPlayer}
            />
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <section className="mt-120">
            <Parallax bgImage={ImgHome} strength={400}>
              <div className="px-3 b-parallax-dat">
                <div
                  className="row d-flex align-items-end"
                  style={{ height: "inherit" }}
                >
                  <div className="col-md-12">
                    <h1 className="parallax-titles animate__animated animate__bounce">
                      ALEGRÍA Y <br />
                      SABOR IQUEÑO
                    </h1>
                    {width <= 640 && (
                      <div className="text-center">
                        <img
                          className="img-fluid pb-5"
                          data-aos="fade-up"
                          src={Shilf}
                          alt="Shilf"
                          style={{ maxWidth: 250 }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Parallax>

            <div className="container-fluid d-flex flex-column justify-content-between py-5 contain-home">
              <div className="row">
                <div className="col-md-3 text-center" data-aos="fade-up">
                  {width > 640 && (
                    <div className="d-flex align-items-center justify-content-center">
                      <div>
                        <span className="mayoria text-white">+18</span>
                      </div>
                      <div className="btn-idiomas">
                        <button className="btn-block p-2 text-white">
                          ENGLISH
                        </button>
                        <button className="btn-block p-2 text-white">
                          ESPAÑOL
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-lg-6 col-md-9" data-aos="fade-up">
                  <p className="py-2 text-white">
                    Somos una gran familia iqueña compuesta de socios
                    propietarios de viñedos, bodegas, haciendas, restaurantes y
                    agencias de turismo con algo en común:
                  </p>
                  <p className="slg-index text-white">
                    el corazón latiendo de amor por Ica.
                  </p>
                </div>
                <div className="col-md-3 text-right animate__animated animate__fadeInRight">
                  <img
                    className="img-fluid sello-home"
                    data-aos="fade-up"
                    src={Shilf}
                    alt="Shilf"
                  />
                </div>
              </div>
              <div className="  d-flex justify-content-between align-items-end">
                <div className="col-md-3 col-lg-3 col-sm-6 text-center">
                  <p className="text-white">
                    ÚNETE A<br />
                    RACIMOS DEL SUR
                  </p>
                  <div className="d-flex">
                    <button className="btn-cookies">Usamos cookies</button>
                    <button className="btn-aceptar">aceptar</button>
                  </div>
                </div>
                <div className="col-sm-6 col-md-9 align-self-end">
                  {width <= 640 && (
                    <div className="d-flex align-items-center justify-content-center">
                      <div>
                        <span className="mayoria text-white">+18</span>
                      </div>
                      <div className="btn-idiomas">
                        <button className="btn-block p-2 text-white">
                          ENGLISH
                        </button>
                        <button className="btn-block p-2 text-white">
                          ESPAÑOL
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {HomeData.map(({ color, arrow, img, txt, to }, index) => {
              return (
                <SectionHome
                  color={color}
                  arrow={arrow}
                  img={img}
                  txt={txt}
                  key={index}
                  to={to}
                />
              );
            })}
          </section>
          <Footer color={DataFooter[0]} txt={DataFooter[1]} />
        </>
      )}
    </>
  );
};

export const SectionHome = ({ color, arrow, img, txt, to }) => {
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="d-flex flex-column justify-content-end px-3 b-parallax-dat"
      >
        <div className="d-flex pl-2 justify-content-between">
          <Link
            className="text-decoration-none"
            to="#"
            onClick={() => {
              window.open("https://tienda.uvasyhuarangos.pe/", "_blank");
            }}
          >
            <button className="btn-store px-4" data-aos="fade-up">
              Tienda
            </button>
          </Link>

          <Link to={`/${to}`}>
            <img
              src={arrow}
              alt="arrow"
              className="img-fluid b-parallax-arrow"
              data-aos="fade-up"
            />
          </Link>
        </div>
        <Link to={`/${to}`} className="text-decoration-none">
          <h1
            className="parallax-titles animate__animated animate__bounce"
            data-aos="fade-up"
          >
            {txt[0]}
          </h1>
        </Link>
      </div>
      {/* <div className={`parallax ${clase} px-3`}>
        <Link to={`/${to}`} className="text-decoration-none">
          
        </Link>
      </div> */}
      <Parallax bgImage={img} strength={600}>
        <div className="px-3 b-parallax-dat">
          <div style={insideStyles}>
            <Link to={`/${to}`} className="text-decoration-none">
              <h1
                className="parallax-titles animate__animated animate__bounce"
                data-aos="fade-up"
              >
                {txt[1]}
              </h1>
            </Link>
          </div>
        </div>
      </Parallax>
    </>
  );
};
