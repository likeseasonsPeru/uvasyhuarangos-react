import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoreGastronomy } from "../components/StoreGastronomy";
import { StoresGastronomyData } from "../data/StoresGastronomyData";

// images
import ArrowRight from "../assets/img/gastronomia/arrow-right.png";
import ArrowLeft from "../assets/img/gastronomia/arrow-left.png";
import tradicion from "../assets/img/gastronomia/tradicion.jpg";
import canperdidos from "../assets/img/gastronomia/canperdidos.jpg";
import tours from "../assets/img/gastronomia/tours.jpg";
import citytour from "../assets/img/gastronomia/citytour.jpg";
import dunas from "../assets/img/gastronomia/dunas.jpg";
import vinedos from "../assets/img/gastronomia/vinedos.jpg";
import sabeica from "../assets/img/gastronomia/sabeica.jpg";
import trekking from "../assets/img/gastronomia/trekking.jpg";
import pampa from "../assets/img/gastronomia/pampa.jpg";
import elcatador from "../assets/img/gastronomia/elcatador.jpg";
import olladejuanita from "../assets/img/gastronomia/olladejuanita.jpg";
const Gastronomia = () => {
  const DataFooter = [
    "#E27423",
    [
      `"RACIMOS DEL SUR TE INVITA A UNA EXPERIENCIA COMPLETA, LOS MEJORES VINOS Y PISCOS, CON LA AVENTURA QUE ESTABAS BUSCANDO"`,
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
      <section id="gastronomia" className="page mt-120">
        <div className="bg-gastronomia mb-120  position-relative">
          <button
            className="icon-left"
            onClick={() => window.history.back()}
            data-aos="fade-right"
          >
            <img src={ArrowLeft} alt="ArrowLeft" className="img-fluid" />
          </button>
          <div className="container py-5">
            <div className="row my-5">
              <div className="col text-center">
                <h1 className="pages-titles text-white" data-aos="fade-up">
                  GASTRONOMíA
                </h1>
                <h4
                  className="enoturismo-logo mx-auto"
                  data-aos="zoom-in-up"
                  style={{ maxWidth: 700 }}
                >
                  Contundencia, variedad y buena sazón
                </h4>
                <p className="my-5" data-aos="zoom-in-up">
                  Eso caracteriza a la comida peruana, no por nada es reconocida
                  a nivel internacional.
                  <br />
                  Dentro de nuestra gastronomía, Ica dispone de una de las
                  cocinas más representativas del país, <br />
                  con una exquisita fusión de la cocina criolla y la africana.
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
        
        <div className="container mt-5 mb-120">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="pages-titles-gastronomia text-left color-gastronomia">
                    LA OLLA DE <br /> JUANITA
                  </h1>
                  <p
                    className="text-left pt-3"
                    style={{ maxWidth: "340px", lineHeight: "1.8" }}
                  >
                    La olla de Juanita proviene de la buena sazón y entrega de
                    la Dama del Pisco, Doña Juanita, heredada a su hija Cecilia
                    González. Parras, recetas y piscos inolvidables en un
                    ambiente rústico estupendo para celebrar los más exquisitos
                    sabores de la cocina iqueña, con amor y admiración por
                    nuestra gastronomía.
                  </p>
                </div>

                <div className="d-flex pb-3">
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://tienda.uvasyhuarangos.pe/turismo/restaurantes/restaurantes-la-olla-de-juanita/",
                        "_blank"
                      );
                    }}
                  >
                    <button className="color-gastronomia br-gastronomia px-5">
                      RESERVA
                    </button>
                  </Link>
                  <img
                    src={ArrowRight}
                    className="img-fluid ml-4"
                    alt="ArrowRight"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div style={{ width: "100%" }}>
                <img
                  src={olladejuanita}
                  className="img-fluid"
                  alt="olla de juanita"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-120">
          <div className="row  column-reverse-h">
            <div className="col-md-6 col-xl-6 col-sm-12  mt-5">
              <div style={{ width: "100%" }}>
                <img src={elcatador} className="img-fluid" alt="el catador" />
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12  mt-5">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="pages-titles-gastronomia text-right color-gastronomia">
                    RESTAURANTE TURíSTICO <br />
                    EL CATADOR SRL.
                  </h1>
                  <p
                    className="text-right ml-auto  pt-3"
                    style={{ maxWidth: "400px", lineHeight: "1.9" }}
                  >
                    Disfruta de la buena sazón iqueña rodeado de historia,
                    dentro de instalaciones antiguas que reflejan el legado del
                    Pisco y su elaboración desde el siglo XVl en una Bodega
                    Turística de Piscos y Vinos Fundada en 1856. El ambiente
                    ideal para degustar lo mejor de la gastronomía de Ica.
                  </p>
                </div>
                <div className="d-flex justify-content-end pb-3">
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://tienda.uvasyhuarangos.pe/turismo/restaurantes/restaurantes-el-catador/",
                        "_blank"
                      );
                    }}
                  >
                    <button className="color-gastronomia br-gastronomia px-5">
                      RESERVA
                    </button>
                  </Link>
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

        <div className="container mt-5 mb-120">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="pages-titles-gastronomia text-left color-gastronomia">
                    PAMPA
                  </h1>
                  <p
                    className="text-left pt-3"
                    style={{ maxWidth: "400px", lineHeight: "1.9" }}
                  >
                    Prueba la verdadera comida criolla de la región de Ica en
                    nuestra picantería de carretera, degustando lo mejor de la
                    gastronomía típica de antaño con deliciosos piscos y vinos
                    en una experiencia única junto a tu familia.
                  </p>
                </div>
                <div className="d-flex mt-5 pb-3">
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://tienda.uvasyhuarangos.pe/turismo/restaurantes/restaurante-las-pampas/",
                        "_blank"
                      );
                    }}
                  >
                    <button className="color-gastronomia br-gastronomia px-5">
                      RESERVA
                    </button>
                  </Link>
                  <img
                    src={ArrowRight}
                    className="img-fluid ml-4"
                    alt="ArrowRight"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div style={{ width: "100%" }}>
                <img src={pampa} className="img-fluid" alt="pampa" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gastronomia">
          <div className="container py-5 mb-5">
            <div className="row my-5">
              <div className="col text-center">
                <h1 className="pages-titles-gastronomia text-white">
                  ENOTURISMO
                </h1>
                <h4
                  className="enoturismo-logo mx-auto my-4"
                  style={{ maxWidth: "900px" }}
                >
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

        <div className="container px-90 border-bottom-color">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="mx-auto d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="pages-titles-gastronomia color-gastronomia text-left">
                    TREKKING AL CAñON
                    <br /> DE LOS PERDIDOS
                  </h1>
                  <h3
                    className="color-gastronomia"
                    style={{ fontSize: "30px", fontWeight: "300" }}
                  >
                    SALIDAS DIARIAS DESDE ICA
                  </h3>
                  <p
                    className="text-left pt-2"
                    style={{ maxWidth: "400px", lineHeight: "1.7" }}
                  >
                    Visitamos el Distrito de Ocucaje y vivimos desde adentro el
                    desierto iqueño, visitamos el cerro Colorado, pampa de
                    piedras y los fósiles de ballenas. Al llegar al mirador
                    paisajístico del cañón de los perdidos nos encontramos con
                    una formación caprichosa de la naturaleza, la cual
                    camineremos hasta llegar a la garganta del cañón.
                  </p>
                </div>
                <div className="d-flex pb-3">
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://tienda.uvasyhuarangos.pe/turismo/aventura/trekking-al-canon-de-los-perdidos/",
                        "_blank"
                      );
                    }}
                  >
                    <button className="color-gastronomia br-gastronomia px-5">
                      RESERVA
                    </button>
                  </Link>
                  <img
                    src={ArrowRight}
                    className="img-fluid ml-4"
                    alt="ArrowRight"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12 align-self-center">
              <div style={{ width: "100%" }}>
                <img
                  src={trekking}
                  className="img-fluid"
                  alt="ruta adrenalina"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container border-bottom-color  px-90">
          <div className="row column-reverse-h">
            <div className="col-md-6 col-xl-6 col-sm-12 align-self-center class-top">
              <div className="position-relative" style={{ width: "100%" }}>
                <img src={tours} className="img-fluid" alt="tours" />
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="h-100 text-right d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="pages-titles-gastronomia color-gastronomia text-right mt-3">
                    RUTA DEL <br />
                    PISCO Clásico
                  </h1>
                  <p
                    className="ml-auto"
                    style={{ maxWidth: "580px", lineHeight: "1.7" }}
                  >
                    Recojo en hotel y recorrido por Bodega el Catador, Tres
                    Generaciones y San Nicolás donde aprenderemos el proceso de
                    elaboración del pisco artesanal (pisco hecho a mano),
                    mientras disfrutaremos de sus diversas variedades y
                    conoceremos su historia. Visita al oasis de la Huacachina
                    donde podrán realizar las actividades de aventura por el
                    desierto y deslizarse en tablas por las dunas.
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://tienda.uvasyhuarangos.pe/turismo/aventura/ruta-del-pisco-clasico/",
                        "_blank"
                      );
                    }}
                  >
                    <button className="color-gastronomia br-gastronomia px-5">
                      RESERVA
                    </button>
                  </Link>
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

        <div className="container px-90 border-bottom-color">
          <div className="row">
            <div className="col-md-5 col-xl-5 col-sm-12 my-2">
              <div className="mx-auto d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="pages-titles-gastronomia color-gastronomia text-left">
                    PASEO POR LAS <br />
                    DUNAS DE HUACACHINA <br />
                    EN UTV
                  </h1>
                  <p
                    className="text-left pt-1 mr-auto"
                    style={{ maxWidth: "450px", lineHeight: "1.7" }}
                  >
                    La aventura comienza en Huacachina, partiremos desde
                    nuestras instalaciones en el Balneario de Huacachina,
                    abordaremos los carros UTV, que son unidades especiales para
                    realizar el recorrido por las Dunas, estos son carros
                    homologados y muy seguros podrás disfrutar la velocidad y
                    adrenalina en el enorme desierto de Ica tendrás un tiempo
                    para la práctica del Sandboard.
                  </p>
                </div>
                <div className="d-flex">
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://tienda.uvasyhuarangos.pe/turismo/aventura/paseo-por-las-dunas-de-huacachina-en-utv/",
                        "_blank"
                      );
                    }}
                  >
                    <button className="color-gastronomia br-gastronomia px-5">
                      RESERVA
                    </button>
                  </Link>
                  <img
                    src={ArrowRight}
                    className="img-fluid ml-4"
                    alt="ArrowRight"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-xl-7 col-sm-12 my-3 align-self-center position-relative">
              <img src={dunas} className="img-fluid" alt="dunas" />
            </div>
          </div>
        </div>

        <div className="container px-90 border-bottom-color">
          <div className="row column-reverse-h">
            <div className="col-md-6 col-xl-6 col-sm-12 align-self-center class-top">
              <div className="position-relative" style={{ width: "100%" }}>
                <img src={citytour} className="img-fluid" alt="tours" />
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="h-100 text-right d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="pages-titles-gastronomia color-gastronomia text-right  mt-3">
                    City Tour <br />
                    en Ica
                  </h1>
                  <p
                    className="ml-auto pt-4"
                    style={{ maxWidth: "490px", lineHeight: "1.7" }}
                  >
                    Recojo del Hotel en Ica, visita a la plaza de armas, templo
                    de Luren, chocolatería, plaza de temática de Cachiche,
                    palmera de 7 cabezas, bodega vitivinícola artesanal, tiempo
                    de almuerzo en Rest. campestre, visita al oasis de
                    Huacachina, contaremos con un tiempo en las Dunas para la
                    práctica del Sandboard (opcional), traslado al punto de
                    origen.
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://tienda.uvasyhuarangos.pe/turismo/aventura/citytour-ica/",
                        "_blank"
                      );
                    }}
                  >
                    <button className="color-gastronomia br-gastronomia px-5">
                      RESERVA
                    </button>
                  </Link>
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

        <div className="container px-90 border-bottom-color">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12 my-3">
              <div className="mx-auto d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="pages-titles-gastronomia color-gastronomia text-left">
                    ¿A QUÉ <br />
                    SABE ICA?
                  </h1>
                  <p
                    className="text-left pt-4 mr-auto"
                    style={{ maxWidth: "450px", lineHeight: "1.7" }}
                  >
                    - Visita a chocolatería ó casa de las tejas. <br />
                    - Tour clásico bodega vitivinícola artesanal. <br />- Tiempo
                    para almuerzo (por cuenta del pasajero). <br /> - Durante el
                    recorrido, realizaremos una breve parada en una fábrica de
                    paletas artesanales iqueñas. <br /> - Visita al oasis de
                    Huacachina, paseo en carros tubulares y práctica del
                    Sandboard.
                  </p>
                </div>
                <div className="d-flex">
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://tienda.uvasyhuarangos.pe/turismo/aventura/a-que-sabe-ica/",
                        "_blank"
                      );
                    }}
                  >
                    <button className="color-gastronomia br-gastronomia px-5">
                      RESERVA
                    </button>
                  </Link>
                  <img
                    src={ArrowRight}
                    className="img-fluid ml-4"
                    alt="ArrowRight"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12 my-3 align-self-center">
              <div className="position-relative" style={{ width: "100%" }}>
                <img src={sabeica} className="img-fluid" alt="sabe ica" />
              </div>
            </div>
          </div>
        </div>

        <div className="container px-90 border-bottom-color">
          <div className="row column-reverse-h">
            <div className="col-md-6 col-sm-12 align-self-end class-top">
              <img src={vinedos} className="img-fluid mb-2" alt="sabe ica" />
              <div className="d-flex mt-5 ml-1">
                <Link
                  to="#"
                  onClick={() => {
                    window.open(
                      "https://tienda.uvasyhuarangos.pe/turismo/aventura/ica-paracas-vinedos/",
                      "_blank"
                    );
                  }}
                >
                  <button className="color-gastronomia br-gastronomia px-5">
                    RESERVA
                  </button>
                </Link>
                <img
                  src={ArrowRight}
                  className="img-fluid ml-4"
                  alt="ArrowRight"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-right">
              <h1 className="pages-titles-gastronomia color-gastronomia  mt-3">
                ICA/ PARACAS /VIÑEDOS
              </h1>
              <h3
                className="color-gastronomia text-uppercase"
                style={{ fontSize: "30px", fontWeight: "300" }}
              >
                Ica y Paracas en una copa
              </h3>
              <strong className="gastronomia-days text-uppercase">
                Día 1: LLEGADA A ICA
              </strong>
              <p
                className="text-right ml-auto pb-3"
                style={{ maxWidth: "600px", lineHeight: "1.7" }}
              >
                12:00 hrs Llegada a Ica – Instalación en Hotel en Ica <br />{" "}
                15:30 hrs Visita de laguna Huacachina, paseo en tubulares e
                instructor para la práctica del Sandboard.
              </p>
              <strong className="gastronomia-days text-uppercase">
                día 2: ISLAS BALLESTAS+RESERVA DE PARACAS
              </strong>
              <p
                className="text-right ml-auto pb-3"
                style={{ maxWidth: "600px", lineHeight: "1.7" }}
              >
                06:30 Traslado Ica – Paracas. <br /> 08:00 Salida hacia Islas
                Ballestas. Visita del candelabro, fauna marítima y biodiversidad
                de aves guaneras en formaciones rocosas que constituyen unos de
                los paisajes más hermosos de la costa peruana, ingreso a reserva
                de Paracas, obelisco, tiempo de playa en lagunillas. <br />{" "}
                16:00 Llegada a Ica.
              </p>
              <strong className="gastronomia-days text-uppercase">
                día 3: RUTA DEL PISCO
              </strong>
              <p
                className="text-right ml-auto"
                style={{ maxWidth: "600px", lineHeight: "1.7" }}
              >
                09:00 Recojo del hotel elegido, visita por la Bodega el Catador,
                Bodega Tres generaciones y Bodega San Nicolás. <br />
                13:00 Retorno a su hotel – traslado al terminal de Bus en Ica.
              </p>
            </div>
          </div>
        </div>

        <div className="container px-90 border-bottom-color">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-left">
              <h1 className="pages-titles-gastronomia color-gastronomia">
                ICA/PARACAS/ CAÑON <br />
                DE LOS PERDIDOS
              </h1>
              <h3
                className="color-gastronomia text-uppercase pb-5"
                style={{ fontSize: "30px", fontWeight: "300" }}
              >
                Ica, Paracas y las joyas del Desierto
              </h3>
              <strong className="gastronomia-days text-uppercase">
                Día 1: ICA
              </strong>
              <p
                className="text-left mr-auto pb-3"
                style={{ maxWidth: "600px", lineHeight: "1.7" }}
              >
                13:00 Llegada a Ica. <br /> 14:00 City tour en Ica <br /> Visita
                de viñedo artesanal. plaza temática de Cachiche, templo de
                Luren, chocolatería Helena y laguna de Huacachina. Pernocte en
                Ica.
              </p>
              <strong className="gastronomia-days text-uppercase">
                día 2: ISLAS BALLESTAS
              </strong>
              <p
                className="text-left mr-auto pb-3"
                style={{ maxWidth: "600px", lineHeight: "1.7" }}
              >
                06:30 Recojo en hotel en Ica. <br />
                08:00 Salida hacia Islas Ballestas. <br />
                Visita del candelabro, fauna marítima y biodiversidad de aves
                guaneras en formaciones rocosas que constituyen unos de los
                paisajes más hermosos de la costa peruana, ingreso a reserva de
                Paracas, obelisco, tiempo de playa en lagunillas. <br />
                16:00 Llegada a Ica. (ALMUERZO OPCIONAL) <br />
                15:00 Traslado a Hotel en Ica, pernocte en Ica.
              </p>
              <strong className="gastronomia-days text-uppercase">
                día 3: TREKKING AL CAÑÓN DE LOS PERDIDOS
              </strong>
              <p
                className="text-left mr-auto"
                style={{ maxWidth: "610px", lineHeight: "1.7" }}
              >
                06:30 Recojo desde hotel en Ica. <br />
                Visitamos el distrito de Ocucaje y vivimos desde adentro el
                desierto iqueño, visitaremos la plaza temática, la pampa de
                meteoritos y el famoso ojo de piedra, continuando con el
                recorrido llegaremos al gran Cañón una formación caprichosa de
                la naturaleza, se realizara una caminata por el interior del
                Cañón luego retornaremos a la Ciudad de Ica. <br />
                13:00 Llegada a Ica, punto de origen. <br />
                15:00 Traslado hacia el terminal de Bus en Ica.
              </p>
            </div>

            <div className="col-md-6 col-sm-12 align-self-end">
              <img
                src={canperdidos}
                className="img-fluid mb-2"
                alt="sabe ica"
              />
              <div className="d-flex mt-5 justify-content-end">
                <Link
                  to="#"
                  onClick={() => {
                    window.open(
                      "https://tienda.uvasyhuarangos.pe/turismo/aventura/ica-paracas-canon-de-los-perdidos/",
                      "_blank"
                    );
                  }}
                >
                  <button className="color-gastronomia br-gastronomia px-5">
                    RESERVA
                  </button>
                </Link>
                <img
                  src={ArrowRight}
                  className="img-fluid ml-4"
                  alt="ArrowRight"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container px-90">
          <div className="row column-reverse-h">
            <div className="col-md-6 col-sm-12 align-self-end class-top">
              <img src={tradicion} className="img-fluid mb-2" alt="sabe ica" />
              <div className="d-flex mt-5 ml-1">
                <Link
                  to="#"
                  onClick={() => {
                    window.open(
                      "https://tienda.uvasyhuarangos.pe/turismo/aventura/tradicion-en-ica-y-sol-en-paracas/",
                      "_blank"
                    );
                  }}
                >
                  <button className="color-gastronomia br-gastronomia px-5">
                    RESERVA
                  </button>
                </Link>
                <img
                  src={ArrowRight}
                  className="img-fluid ml-4"
                  alt="ArrowRight"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-right">
              <h1 className="pages-titles-gastronomia color-gastronomia mb-4  mt-3">
                TRADICIÓN EN ICA <br />Y SOL EN PARACAS
              </h1>
              <strong className="gastronomia-days text-uppercase">
                Día 1: City Tour en Ica
              </strong>
              <p
                className="text-right ml-auto pb-3"
                style={{ maxWidth: "600px", lineHeight: "1.7" }}
              >
                Visitaremos los principales puntos de la ciudad incluyendo una
                bodega vitivinícola además de tener un tiempo en la laguna de
                Huacachina, donde realizaremos un paseo en tubulares y
                contaremos con un instructor para la práctica del Sandboard (no
                incluido)
              </p>
              <strong className="gastronomia-days text-uppercase">
                día 2: Full Day Paracas
              </strong>
              <p
                className="text-right ml-auto pb-3"
                style={{ maxWidth: "600px", lineHeight: "1.7" }}
              >
                Salida 06:30 Recojo en su hospedaje <br />
                Islas Ballestas, visita del candelabro, fauna marítima y
                biodiversidad de aves guaneras en formaciones rocosas que
                constituyen unos de los paisajes más hermosos de la costa
                peruana, ingreso a reserva de Paracas, obelisco, tiempo de playa
                en lagunillas.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gastronomia py-5">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h4
                  className="font-neue text-black"
                  style={{ fontSize: "60px" }}
                >
                  Prueba nuestros mejores piscos y vinos
                </h4>
                <h1 className="pages-titles-gastronomia text-black">
                  ¡VISíTANOS!
                </h1>
              </div>
            </div>
          </div>
        </div>

        {StoresGastronomyData.map(
          ({ head, slg, txt, include, id, img, to }) => (
            <StoreGastronomy
              key={id}
              head={head}
              slg={slg}
              txt={txt}
              include={include}
              img={img}
              to={to}
            />
          )
        )}
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};

export default Gastronomia;
