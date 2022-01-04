import React from "react";
import "../components/styles/style.css";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowRight from "../assets/img/uvas-patrimoniales/arrow-right.png";
import quebranta from "../assets/img/uvas-patrimoniales/quebranta.jpg";
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
    { name: "QUEBRANTA", img: quebranta },
    { name: "ALBILLA", img: albilla },
    { name: "NEGRA CRIOLLA", img: negraCriolla },
    { name: "MOLLAR", img: mollar },
    { name: "MOSCATEL", img: moscatel },
  ];
  return (
    <>
      <Navbar />
      <section id="uvas-patrimoniales" className="page py-5">
        <div className="container py-5">
          <button
            className="float-left pt-4"
            onClick={() => window.history.back()}
          >
            <img src={ArrowRight} alt="arrow-right" />
          </button>
          <div className="row">
            <div className="col text-center">
              <h1 className="pages-titles color-uva">UVAS PATRIMONIALES</h1>
              <h4 className="pages-slogan">Nuestra Biodiversidad</h4>
              <p className="py-4">
                Se manifiesta en los sabores únicos de los ocho tipos de uvas
                pisqueras,
                <br />
                resultado de nuestra variedad de climas y suelos.
              </p>
            </div>
          </div>
          <div className="row">
            {uvas.map(({ img, name }, index) => {
              return (
                <div className="col" key={index}>
                  <div className="products-container">
                    <img width="100%" height="100%" src={img} alt={name} />
                    <div className="products-titles">{name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container-fluid p-0 mb-5">
          <img src={banner1} className="img-fluid" alt="Banner 1 uvas" />
        </div>

        <div className="container mb-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center align-self-center py-3">
              <img src={sello} className="img-fluid" alt="UVAS PATRIMONIALES" />
            </div>
            <div className="col-md-6 col-sm-6 align-self-center">
              <h2
                className="pages-subtitles color-uva mx-auto"
                style={{ maxWidth: "415px" }}
              >
                DE ESTAS UVAS VIENE EL VINO Y DEL VINO, EL PISCO
              </h2>
            </div>
            <div className="col-md-3  col-sm-12 align-self-center">
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
              <h2 className="pages-subtitles color-uva">
                UVAS TRADICIONALES O CRIOLLAS
              </h2>
            </div>
            <div className="col-12">
              <p className="mx-auto" style={{ maxWidth: "950px" }}>
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
