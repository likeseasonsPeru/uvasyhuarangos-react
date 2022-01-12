import React, { useEffect } from "react";
import "../components/styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowRight from "../assets/img/uvas-patrimoniales/arrow-right.png";
import quebranta from "../assets/img/uvas-patrimoniales/quebranta.jpg";
import torontel from "../assets/img/uvas-patrimoniales/torontel.jpg";
import negraCriolla from "../assets/img/uvas-patrimoniales/negracriolla.jpg";
import albilla from "../assets/img/uvas-patrimoniales/albilla.jpg";
import mollar from "../assets/img/uvas-patrimoniales/mollar.jpg";
import moscatel from "../assets/img/uvas-patrimoniales/moscatel.jpg";
import banner1 from "../assets/img/uvas-patrimoniales/banner1.jpg";
import banner2 from "../assets/img/uvas-patrimoniales/banner2.jpg";
import sello from "../assets/img/uvas-patrimoniales/sello.jpg";

export const Uvas = () => {
  const DataFooter = [
    "#8A73A6",
    "AL INICIAR LA COLONIA, LOS VALLES DE LA COSTA SUR, ESPECIALMENTE LOS DE ICA, FUERON ESCENARIO DEL ÉXITO DE LA EXPLOTACIÓN DE LA VID. RÁPIDAMENTE, SE COMENZÓ A ELABORAR, ADEMÁS DE VINO, UN DELICIOSO DESTILADO DE UVA O “VINO COCIDO”, CONOCIDO COMO “AGUARDIENTE DE PISCO” O SIMPLEMENTE “PISCO”, POR PROVENIR DE DICHA REGIÓN SUREÑA. ",
  ];

  const uvas = [
    { name: "TORONTEL", img: torontel },
    { name: "QUEBRANTA", img: quebranta },
    { name: "NEGRA CRIOLLA", img: negraCriolla },
    { name: "ALBILLA", img: albilla },
    { name: "MOLLAR", img: mollar },
    { name: "MOSCATEL", img: moscatel },
    { name: "UBILLA", img: moscatel },
    { name: "ITALIA", img: moscatel },
  ];
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <>
      <Navbar />
      <section id="uvas-patrimoniales" className="page py-5 mt-120">
        <div className="container py-5">
          <button
            className="float-left pt-4"
            onClick={() => window.history.back()}
            data-aos="fade-right"
          >
            <img src={ArrowRight} alt="arrow-right" />
          </button>
          <div className="row">
            <div className="col text-center">
              <h1 className="pages-titles color-uva" data-aos="zoom-out-down">UVAS PATRIMONIALES</h1>
              <h4 className="pages-slogan mt-4" data-aos="zoom-out-down">Nuestra Biodiversidad</h4>
              <p className="py-4" data-aos="zoom-out-down">
                Se manifiesta en los sabores únicos de los ocho tipos de uvas
                pisqueras,
                <br />
                resultado de nuestra variedad de climas y suelos.
              </p>
            </div>
          </div>
          <div className="row pb-3">
            {uvas.map(({ img, name }, index) => {
              return (
                <div className="col" key={index} data-aos="fade-up">
                  <div className="products-container imgs-vino">
                    <img width="100%" height="100%" src={img} alt={name} />
                    <div className="products-titles">{name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container-fluid p-0">
          <img src={banner1} className="img-fluid" alt="Banner 1 uvas" />
        </div>

        <div className="container px-120">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-3 col-sm-6 text-center align-self-center py-3" data-aos="fade-right">
              <img src={sello} className="img-fluid" alt="UVAS PATRIMONIALES" style={{ maxHeight: "270px" }} />
            </div>
            <div className="col-md-6 col-sm-6 align-self-center" data-aos="fade-up">
              <h2
                className="pages-subtitles color-uva mx-auto "
                style={{ maxWidth: "415px", lineHeight: "1" }}
              >
                DE ESTAS UVAS VIENE EL VINO Y DEL VINO, EL PISCO
              </h2>
            </div>
            <div className="col-md-3  col-sm-12 align-self-center" data-aos="fade-left">
              <p>
                Hoy en día, alrededor del mundo, podemos encontrar una tendencia
                a rescatar variedades emblemáticas de uvas, mejor conocidas como
                uvas patrimoniales, por su conexión a la cultura y tradición
                sudamericana.
                <br /> <br />
                Las podemos clasificar en dos grupos, tradicionales y criollas.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0 mb-5">
          <img src={banner2} className="img-fluid" alt="banner 2 uvas" />
        </div>

        <div className="container py-5">
          <div className="row text-center justify-content-md-center">
            <div className="col-12">
              <h2 className="pages-subtitles color-uva" data-aos="fade-up">
                UVAS TRADICIONALES O CRIOLLAS
              </h2>
            </div>
            <div className="col-12" data-aos="fade-up">
              <p className="mx-auto mt-2" style={{ maxWidth: "950px" }}>
                Entre las tradicionales tenemos la Listán Prieto, actualmente
                Negra Criolla en Perú, la uva Italia, también llamada Moscatel
                de Alejandría, la Mollar y la Albilla. Todas estas crearon lo
                que conocemos como variedades criollas. La más emblemática, la
                Quebranta, es un cruce de Listán Prieto y Mollar Cano, pero
                podemos encontrar muchas otras como la Torontel, la Moscatel,
                etc.
                <br />
                <br />
                Del mismo modo, las uvas se dividen en dos tipos: aromáticas
                (Moscatel, Italia, Torontel, Albilla) y no aromáticas
                (Quebranta, Negra Criolla, Mollar).
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};
