import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// images
import ArrowLeft from "../assets/img/tradicion/arrow-left.png";
import Tradicion from "../assets/img/tradicion/tradicion.jpg";
import ProcesoArtesanal from "../assets/img/tradicion/procesoartesanal.jpg";
import ArrowGrape from "../assets/img/legado/arrow-right-grape.png";
import Banner2 from "../assets/img/tradicion/banner2.jpg";
import Banner3 from "../assets/img/tradicion/banner3.jpg";
import ArrowYellow from "../assets/img/tradicion/arrow-right-yellow.png";
import ArrowStore from "../assets/img/legado/arrow-right-store.png";
// import premio1 from "../assets/img/legado/premios/premio1.jpg";
// import premio2 from "../assets/img/legado/premios/premio2.jpg";

export const Piscos = () => {
  const DataFooter = [
    "#6E5844",
    [
      "“NUESTRA PERUANIDAD ESTÁ EN LA TRADICIÓN, Y EN EL PISCO, NUESTRA IDENTIDAD”",
    ],
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <section id="tradicion" className="page mt-120 pt-5">
        <div className="row">
          <div className="col-xl-6 col-md-6 py-5">
            <div className="row">
              <div className="col-3">
                <button
                  onClick={() => window.history.back()}
                  data-aos="fade-up"
                >
                  <img
                    src={ArrowLeft}
                    className="img-fluid ml-4 mt-3"
                    alt="arrow-left"
                  />
                </button>
              </div>
              <div className="col-9">
                <h1
                  className="pages-titles color-tradicion-r"
                  data-aos="fade-up"
                >
                  TRADICIóN
                </h1>
                <p style={{ maxWidth: "450px" }} data-aos="fade-up">
                  En Ica tenemos una tradición vitivinícola centenaria y un gran
                  producto emblemático, el Pisco, bebida bandera del Perú,
                  elaborado a base de uvas patrimoniales, que, si bien ahora son
                  consideradas como pisqueras, siempre han tenido aptitudes para
                  vinificar.
                  <br />
                  <br />
                  Es tanto el orgullo nacional por nuestro destilado de uva que
                  cada cuarto domingo de julio, se celebra el Día Nacional del
                  Pisco.
                  <br />
                  <br />
                  Un homenaje para este Patrimonio Cultural del Perú que deleita
                  el paladar de todo aquel que lo prueba.
                </p>
              </div>
            </div>
          </div>
          {window.innerWidth > 540 && (
            <div className="col-xl-6 col-md-6 py-5">
              <div
                style={{ width: "100%", height: "100%" }}
                data-aos="fade-down"
              >
                <img
                  src={Tradicion}
                  className="img-fluid"
                  alt="tradicion"
                  height="100%"
                />
              </div>
            </div>
          )}
        </div>
        {window.innerWidth <= 540 && (
          <div className="container p-0">
            <img
              src={Banner3}
              alt="banner 3 tradicion"
              style={{ width: "100%" }}
            />
          </div>
        )}
        <div className="row py-5 column-reverse-h">
          <div className="col-xl-6 col-md-6 col-sm-12 pt-3">
            <div
              style={{ width: "100%", height: "100%" }}
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={ProcesoArtesanal}
                className="img-fluid"
                alt="procesoartesanal"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-around pr-lg-5 pr-md-1">
              <div>
                <h2
                  className="pages-subtitles color-tradicion-r align-header mt-1"
                  data-aos="fade-up"
                >
                  PROCESO artesanal
                </h2>
                <p
                  className="ml-auto text-right py-4"
                  style={{ maxWidth: "600px" }}
                  data-aos="fade-up"
                >
                  El Pisco artesanal realizado en alambique y falca es sumamente
                  superior a otros piscos hechos de forma industrial, debido a
                  que este proceso permite una mejor etapa de destilación,
                  obteniendo un resultado óptimo. Por ello, todos los productos
                  de Uvas & Huarangos se desarrollan utilizando este proceso.
                  <br />
                  <br />
                  Por un lado, la Falca es el equipo más sencillo, conformado
                  por una paila, un cañón y una alberca. Al contrario que en el
                  Alambique, aquí nada queda retenido, la Falca es un
                  intensificador que hace lo bueno, mejor, y lo malo, peor, todo
                  lo que ebulle pasa por el cañón y se condensa para obtener el
                  aguardiente que deseamos.
                  <br />
                  <br />
                  Por otro lado, el Alambique es un equipo de cobre más
                  complejo, compuesto por una olla, un capitel, un cuello de
                  cisne y un serpentín. Se depositan los mostos frescos en la
                  olla y, con el calor, ebullen pasando por el cuello de cisne,
                  donde alcoholes y sustancias no deseadas son retenidas.
                  Finalmente, llegan al serpentín, para condensarse y dar como
                  resultado el destilado.
                </p>
              </div>
              <div className=" d-flex flex-row-reverse">
                <div className="d-flex mt-5 justify-content-end">
                  <Link to="/uvas" data-aos="fade-up">
                    <button
                      className="btn-w color-uva br-grape px-5"
                      style={{ height: "80px" }}
                    >
                      UVAS
                    </button>
                  </Link>
                  <img
                    src={ArrowGrape}
                    data-aos="fade-up"
                    className="img-fluid ml-xl-4 ml-2"
                    alt="arrow-right-grape"
                  />
                </div>
                <div className="d-flex mt-5 justify-content-end mr-3">
                  <Link
                    to="#"
                    data-aos="fade-up"
                    onClick={() => {
                      window.open(
                        "https://tienda.uvasyhuarangos.pe/",
                        "_blank"
                      );
                    }}
                  >
                    <button
                      className="btn-w color-tienda br-store"
                      style={{ height: "80px" }}
                    >
                      TIENDA
                    </button>
                  </Link>
                  <img
                    src={ArrowStore}
                    data-aos="fade-up"
                    className="img-fluid ml-xl-4 ml-2"
                    alt="arrow-right-store"
                    style={{ height: "80px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="types-pisco" data-aos="fade-up">
                Tipos de Pisco
              </h4>
            </div>
            <div className="col-12 mt-5">
              <div className="row">
                <div className="col-md-4 text-center px-4" data-aos="fade-up">
                  <div className="mx-auto" style={{ maxWidth: "300px" }}>
                    <div className="mb-4 py-2 bg-tradicion">PURO</div>
                    <p className="px-2">
                      Se obtiene exclusivamente de una sola variedad de uva
                      pisquera.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center px-4" data-aos="fade-up">
                  <div className="mx-auto" style={{ maxWidth: "300px" }}>
                    <div className="mb-4 py-2 bg-tradicion">ACHOLADO</div>
                    <p className="px-2">
                      Es el pisco obtenido de la mezcla de uvas pisqueras
                      aromáticas y/o no aromáticas; mostos de uvas pisqueras
                      aromáticas y/o no aromáticas; mostos frescos
                      incompletamente fermentados (vinos frescos) de uvas
                      pisqueras aromáticas y/o no aromáticas; y piscos
                      provenientes de uvas pisqueras aromáticas y/o no
                      aromáticas.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center px-4" data-aos="fade-up">
                  <div className="mx-auto" style={{ maxWidth: "300px" }}>
                    <div className="mb-4 py-2 bg-tradicion">MOSTRO VERDE</div>
                    <p className="px-2">
                      Se genera con la destilación de mostos frescos de uvas
                      pisqueras con fermentación interrumpida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container px-90">
          <div>
            <div className="text-center my-5">
              <h1
                className="premios-title color-tradicion-r"
                data-aos="fade-up"
              >
                Premios
              </h1>
            </div>
            <div className="row align-items-end">
              <div
                className="col-md-3 col-sm-12 text-center"
                data-aos="fade-right"
              >
                <img src={premio1} className="img-fluid" alt="premio 2" />
              </div>
              <div
                className="col-md-3 col-sm-12 text-center"
                data-aos="fade-up"
              >
                <img src={premio2} className="img-fluid" alt="premio 2" />
              </div>
              <div
                className="col-md-3 col-sm-12 text-center"
                data-aos="fade-up"
              >
                <img src={premio1} className="img-fluid" alt="premio 2" />
              </div>
              <div
                className="col-md-3 col-sm-12 text-center"
                data-aos="fade-left"
              >
                <img src={premio2} className="img-fluid" alt="premio 2" />
              </div>
            </div>
          </div>
        </div>
         */}
        <div
          className="container-fluid px-0"
          style={{ backgroundColor: "#FED16A" }}
        >
          <div className="container py-4 mb-md-5 mb-sm-0">
            <div className="row justify-content-center align-items-center py-2">
              <div
                className="col-md-6 col-sm-12 h-100 align-self-center text-center"
                data-aos="fade-up"
              >
                <p className="my-0 text-white text-left mx-auto drinks">
                  Aprende a preparar bebidas <br /> con auténtica tradición
                  iqueña
                </p>
              </div>
              <div className="col-md-6 col-sm-12 text-right" data-aos="fade-up">
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <Link
                    to="/cocteleria"
                    className="d-flex text-decoration-none"
                    style={{ cursor: "pointer" }}
                  >
                    <h1
                      className="color-white text-title my-0 pt-2 text-uppercase"
                      style={{ fontSize: "57px" }}
                    >
                      COCTELERíA
                    </h1>
                    <img
                      src={ArrowYellow}
                      className="img-fluid ml-xl-4 ml-2"
                      alt="arrow-right-yellow"
                      style={{ height: "80px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0">
          <img
            src={Banner2}
            className="img-fluid"
            style={{ width: "100%" }}
            alt="banner2"
          />
        </div>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};
