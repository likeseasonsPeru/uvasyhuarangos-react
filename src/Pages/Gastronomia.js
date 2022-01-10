import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowRight from "../assets/img/gastronomia/arrow-right.png";
import ArrowLeft from "../assets/img/gastronomia/arrow-left.png";
import banner1 from "../assets/img/gastronomia/banner1.jpg";
import banner2 from "../assets/img/gastronomia/banner2.jpg";
import escudocolor from "../assets/img/gastronomia/escudocolor.jpg";
import tours from "../assets/img/gastronomia/tours.jpg";
import rutadrenalina from "../assets/img/gastronomia/rutadrenalina.jpg";
import pampa from "../assets/img/gastronomia/pampa.jpg";
import elcatador from "../assets/img/gastronomia/elcatador.jpg";
import olladejuanita from "../assets/img/gastronomia/olladejuanita.jpg";

const Gastronomia = () => {
  const DataFooter = [
    "#E27423",
    "RACIMOS DEL SUR TE INVITA A UNA EXPERIENCIA COMPLETA, LOS MEJORES VINOS Y PISCOS, CON LA AVENTURA QUE ESTABAS BUSCANDO",
  ];
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <>
      <Navbar />
      <section id="gastronomia" className="page mt-120">
        <div className="container-fluid p-0 position-relative">
          <img
            src={banner1}
            className="img-fluid"
            style={{ width: "100%" }}
            alt="Banner 1 Turismo"
          />
          <button className="icon-left" onClick={() => window.history.back()} data-aos="fade-right">
            <img src={ArrowLeft} alt="ArrowLeft" className="img-fluid" />
          </button>
        </div>
        <div className="bg-gastronomia">
          <div className="container py-5 mb-5">
            <div className="row my-5">
              <div className="col text-center">
                <h1 className="pages-titles text-white" data-aos="fade-up">GASTRONOMíA</h1>
                <h4 className="enoturismo-logo"  data-aos="zoom-in-up">
                  Contundencia, variedad y buena sazón
                </h4>
                <p className="my-5" data-aos="zoom-in-up">
                  Eso caracteriza a la comida peruana, no por nada es reconocida
                  a nivel internacional.
                  <br />
                  <br />
                  Dentro de nuestra gastronomía, Ica dispone de una de las
                  cocinas más representativas del país, <br />
                  con una exquisita fusión de la cocina criolla y la africana.
                  <br />
                  <br />
                  La región iqueña está repleta de deliciosos platillos
                  tradicionales que reflejan el amor <br />
                  y dedicación en cada plato y promueven el turismo gastronómico
                  al crear una experiencia única <br />
                  para todo aquel que los prueba.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div class="d-flex flex-column justify-content-between">
                <div>
                  <h2 className="pages-subtitles text-left color-gastronomia">
                    OLLA DE <br /> JUANITA
                  </h2>
                  <p className="text-left" style={{ maxWidth: "380px" }} >
                    La olla de Juanita proviene de la buena sazón y entrega de
                    la Dama del Pisco, Doña Juanita, heredada a su hija Cecilia
                    González. Parras, recetas y piscos inolvidables en un
                    ambiente rústico estupendo para celebrar los más exquisitos
                    sabores de la cocina iqueña con amor y admiración por
                    nuestra gastronomía.
                  </p>
                </div>

                <div className="d-flex mt-5 pb-3">
                  <button className="color-gastronomia br-gastronomia px-5">
                    RESERVA
                  </button>
                  <img
                    src={ArrowRight}
                    className="img-fluid ml-4"
                    alt="ArrowRight"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="position-relative" style={{ width: "100%" }}>
                <img
                  src={olladejuanita}
                  className="img-fluid"
                  alt="olla de juanita"
                />
                <p
                  className="text-white text-right position-absolute txt-grastronomia-photo"
                  style={{ top: "40px", right: "40px" }}
                >
                  A LA HORA <br /> DEL BITUTE
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div style={{ width: "100%" }}>
                <img src={elcatador} className="img-fluid" alt="el catador" />
                <p
                  className="text-white text-right position-absolute txt-grastronomia-photo"
                  style={{ top: "40px", right: "40px" }}
                >
                  Comida <br /> ancestral
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <h2 className="pages-subtitles text-right color-gastronomia">
                    EL <br /> CATADOR
                  </h2>
                  <p
                    className="text-right ml-auto"
                    style={{ maxWidth: "400px" }}
                  >
                    Disfruta de la buena sazón iqueña rodeado de historia,
                    dentro de instalaciones antiguas que reflejan el legado del
                    Pisco y su elaboración desde el siglo XVl en una Bodega
                    Turística de Piscos y Vinos Fundada en 1856. El ambiente
                    ideal para degustar lo mejor de la gastronomía de Ica.
                  </p>
                </div>
                <div className="d-flex mt-5 justify-content-end pb-3">
                  <button className="color-gastronomia br-gastronomia px-5">
                    RESERVA
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
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <h2 className="pages-subtitles text-left color-gastronomia">
                    PAMPA
                  </h2>
                  <p className="text-left" style={{ maxWidth: "400px" }}>
                    Prueba la verdadera comida criolla de la región de Ica en
                    nuestra picantería de carretera, degustando lo mejor de la
                    gastronomía típica de antaño con deliciosos piscos y vinos
                    en una experiencia única junto a tu familia.
                  </p>
                </div>
                <div className="d-flex mt-5 pb-3">
                  <button className="color-gastronomia br-gastronomia px-5">
                    RESERVA
                  </button>
                  <img
                    src={ArrowRight}
                    className="img-fluid ml-4"
                    alt="ArrowRight"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="position-relative" style={{ width: "100%" }}>
                <img src={pampa} className="img-fluid" alt="pampa" />
                <p
                  className="text-white text-left position-absolute txt-grastronomia-photo"
                  style={{ bottom: "20px", left: "40px" }}
                >
                  Comida típica
                  <br /> iqueña
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gastronomia">
          <div className="container py-5 mb-5">
            <div className="row my-5">
              <div className="col text-center">
                <h1 className="pages-titles text-white">ENOTURISMO</h1>
                <h4 className="enoturismo-logo">
                  En Ica descubrirás el equilibrio perfecto entre historia y
                  aventura.
                </h4>
                <p className="my-5 mx-auto" style={{ maxWidth: "850px" }}>
                  Aquí encontrarás mucho más que solo un buen pisco, aventurate
                  atravesando los extensos desiertos en tubular o las grandes
                  dunas haciendo sandboard, conoce sus sitios arqueológicos y
                  visita las bodegas más emblemáticas.
                  <br />
                  ¿Qué esperas? Explora todo lo que Ica tiene preparado para ti.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="mx-auto d-flex flex-column justify-content-between">
                <div>
                  <h2 className="pages-subtitles color-gastronomia text-left">
                    RUTA <br /> ADRENALINA
                  </h2>
                  <h3 className="color-gastronomia">TUBULARES</h3>
                  <p className="text-left" style={{ maxWidth: "400px" }}>
                    Diviertete viajando por las descomunales dunas en buggies
                    areneros y deslizate con una tabla para sentir la adrenalina
                    de esta gran aventura.
                    <br /> <br />
                    Se parte de este viaje y adéntrate con los buggies tubulares
                    por las majestuosas arenas de nuestro desierto iqueño.
                  </p>
                </div>
                <div className="d-flex pb-3">
                  <button className="color-gastronomia br-gastronomia px-5">
                    RESERVA
                  </button>
                  <img
                    src={ArrowRight}
                    className="img-fluid ml-4"
                    alt="ArrowRight"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="position-relative" style={{ width: "100%" }}>
                <img
                  src={rutadrenalina}
                  className="img-fluid"
                  alt="ruta adrenalina"
                />
                <p
                  className="text-white text-left position-absolute txt-grastronomia-photo"
                  style={{ top: "40px", left: "40px" }}
                >
                  aventura y
                  <br /> adrenalina
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row row-reverse-w">
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="position-relative" style={{ width: "100%" }}>
                <img src={tours} className="img-fluid" alt="tours" />
                <p
                  className="text-white text-left position-absolute txt-grastronomia-photo"
                  style={{ top: "40px", left: "40px" }}
                >
                  Vive la
                  <br /> experiencia
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="h-100 text-right d-flex flex-column justify-content-between">
                <div>
                  <h2 className="pages-subtitles color-gastronomia text-right">
                    TOURS
                  </h2>
                  <h4 className="color-gastronomia text-uppercase">
                    PARACAS - CAñon - nazca
                  </h4>
                  <div className="ml-auto" style={{ maxWidth: "400px" }}>
                    <strong className="gastronomia-days">DE 3 DIAS</strong>
                    <p className="text-right">
                      <span className="txt-bold-gastronomia">Primer día:</span>{" "}
                      Llegada y adrenalina (dunas, turismo, restaurants, hotel){" "}
                      <br />
                      <span className="txt-bold-gastronomia">
                        Segundo día:
                      </span>{" "}
                      cata en bodegas y comida (3 bodegas, Olla Juanita,
                      almuerzo, hotel) <br />
                      <span className="txt-bold-gastronomia">
                        Tercer día:
                      </span>{" "}
                      paseo y regreso (bodega final) <br />
                      <span className="txt-bold-gastronomia">
                        Cuarto día:
                      </span>{" "}
                      + Bodegas o atracciones turísticas.
                    </p>
                    <strong className="gastronomia-days">DE 1 DIA</strong>
                    <p className="text-right">
                      <span className="txt-bold-gastronomia">Primer día:</span>{" "}
                      cata y comida (3 bodegas, Olla Juanita, almuerzo, hotel){" "}
                      <br />
                      <span className="txt-bold-gastronomia">
                        Segundo día:
                      </span>{" "}
                      adrenalina y regreso por la noche (dunas, paseos)
                    </p>
                  </div>
                </div>
                <div className="d-flex pb-3 justify-content-end">
                  <button className="color-gastronomia br-gastronomia px-5">
                    RESERVA
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
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-xl-9 col-md-12">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="mr-5">
                    <h2 className="pages-subtitles text-left color-gastronomia">
                      RUTAS UVAS Y <br /> HUARANGOS
                    </h2>
                    <h3 className="color-gastronomia mb-5">BODEGAS</h3>
                    <p className="mr-auto" style={{ maxWidth: "420px" }}>
                      Se parte de este viaje cultural por los distritos más
                      representativos de Ica, conoce nuestra región vitivinícola
                      y deleitate con el Pisco, la bebida iqueña por excelencia.
                      <br /> <br />
                      Explora diferentes bodegas, descubre acerca de la
                      producción y queda cautivado con degustaciones de los
                      mejores piscos y vinos.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <img
                    src={escudocolor}
                    className="img-fluid mb-sm-5"
                    alt="escudocolor"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 d-flex justify-content-end pt-3">
              <div className="d-flex align-self-end">
                <button className="color-gastronomia br-gastronomia px-5">
                  RESERVA
                </button>
                <img src={ArrowRight} className="ml-4" alt="ArrowRight" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 mt-5">
          <img src={banner2} className="img-fluid" alt="banner2" />
        </div>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};

export default Gastronomia;
