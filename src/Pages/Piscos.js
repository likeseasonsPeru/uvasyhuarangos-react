import React from "react";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowLeft from "../assets/img/tradicion/arrow-left.png";
import Tradicion from "../assets/img/tradicion/tradicon.jpg";
import ProcesoArtesanal from "../assets/img/tradicion/procesoartesanal.jpg";
import ArrowGrape from "../assets/img/legado/arrow-right-grape.png";
import Banner2 from "../assets/img/tradicion/banner2.jpg";
import ArrowYellow from "../assets/img/tradicion/arrow-right-yellow.png";
import ArrowStore from "../assets/img/legado/arrow-right-store.png";
import { Link } from "react-router-dom";

export const Piscos = () => {

  const DataFooter = [
    "#FED16A",
    "“PORQUE NUESTRA PERUANIDAD ESTÁ EN LA TRADICIÓN, Y EN EL PISCO, NUESTRA IDENTIDAD”"
  ];

  return (
    <>
      <Navbar />
      <section id="tradicion" className="page">
      <div className="d-flex justify-content-between align-items-end py-5">
        <div className="mx-auto py-5">
          <div className="row">
            <div className="col-3">
              <button>
                <img
                  src={ArrowLeft}
                  className="img-fluid ml-4 mt-3"
                  alt="arrow-left"
                />
              </button>
            </div>
            <div className="col-9">
              <h1 className="pages-titles color-tradicion-r">TRADICIóN</h1>
              <p style={{maxWidth: "570px"}}>
                En Ica tenemos una tradición vitivinícola centenaria y un gran
                producto emblemático, el Pisco, bebida bandera del Perú,
                elaborado a base de uvas patrimoniales, que, si bien ahora son
                consideradas como pisqueras, siempre han tenido aptitudes para
                vinificar.
                <br /><br />
                Es tanto el orgullo nacional por nuestro destilado de uva que
                cada cuarto domingo de julio, se celebra el Día Nacional del
                Pisco.
                <br /><br />
                Un homenaje para este Patrimonio Cultural del Perú que deleita
                el paladar de todo aquel que lo prueba
              </p>
            </div>
          </div>
        </div>
        <div style={{maxWidth: "50vw"}}>
          <img src={Tradicion} className="img-fluid" alt="tradicion"/>
        </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div style={{maxWidth: "50vw"}}>
          <img
            src={ProcesoArtesanal}
            className="img-fluid"
            alt="procesoartesanal"
          />
        </div>
        <div className="mx-auto d-flex flex-column justify-content-around" style={{marginTop: "50px"}}>
        <div>
           <h2 className="pages-subtitles color-tradicion-r text-right">
            PROCESO artesanal
          </h2>
            <p className="mt-5 text-right" style={{maxWidth: "600px"}}>
              El Pisco artesanal realizado en alambique y falca es sumamente
              superior a otros piscos hechos de forma industrial, debido a que
              este proceso permite una mejor etapa de destilación, obteniendo un
              resultado óptimo. Por ello, todos los productos de Uvas &
              Huarangos se desarrollan utilizando este proceso.
              <br /><br />
              Por un lado, la Falca es el equipo más sencillo, conformado por
              una paila, un cañón y una alberca. Al contrario que en el
              Alambique, aquí nada queda retenido, la Falca es un intensificador
              que hace lo bueno, mejor, y lo malo, peor, todo lo que ebulle pasa
              por el cañón y se condensa para obtener el aguardiente que
              deseamos.
              <br /><br />
              Por otro lado, el Alambique es un equipo de cobre más complejo,
              compuesto por una olla, un capitel, un cuello de cisne y un
              serpentín. Se depositan los mostos frescos en la olla y, con el
              calor, ebullen pasando por el cuello de cisne, donde alcoholes y
              sustancias no deseadas son retenidas. Finalmente, llegan al
              serpentín, para condensarse y dar como resultado el destilado
            </p>
          </div>
          <div className="d-flex mt-5 justify-content-end">
            <button className="btn-w color-uva br-grape px-5">UVAS</button>
            <img
              src={ArrowGrape}
              className="img-fluid ml-4"
              alt="arrow-right-grape"
            />
          </div>
        </div>
      </div>
      <div className="container py-5" style={{marginTop: "100px"}}>
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="types-pisco">Tipos de Pisco</h4>
          </div>
          <div className="col-12 mt-5">
            <div className="row">
              <div className="col-4 text-center px-4">
                <div className="mb-4 py-2 bg-tradicion">PURO</div>
                <p className="px-2">
                  Se obtiene exclusivamente de una sola variedad de uva
                  pisquera.
                </p>
              </div>
              <div className="col-4 text-center px-4">
                <div className="mb-4 py-2 bg-tradicion">ACHOLADO</div>
                <p className="px-2">
                  Es el pisco obtenido de la mezcla de uvas pisqueras aromáticas
                  y/o no aromáticas; mostos de uvas pisqueras aromáticas y/o no
                  aromáticas; mostos frescos incompletamente fermentados (vinos
                  frescos) de uvas pisqueras aromáticas y/o no aromáticas; y
                  piscos provenientes de uvas pisqueras aromáticas y/o no
                  aromáticas.
                </p>
              </div>
              <div className="col-4 text-center px-4">
                <div className="mb-4 py-2 bg-tradicion">MOSTRO VERDE</div>
                <p className="px-2">
                  Se genera con la destilación de mostos frescos de uvas
                  pisqueras con fermentación interrumpida.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex mt-5 justify-content-end">
                <Link to="/cocteleria">
                  <button className="color-cocteleria br-cocteleria px-5" style={{height: "80px"}}>COCTELERIA</button>
                <img
                  src={ArrowYellow}
                  className="img-fluid ml-4"
                  alt="arrow-right-yellow"
                />
                </Link>
              </div>
              <div className="d-flex mt-5 justify-content-end">
                <button className="btn-w color-tienda br-store px-5" style={{height: "80px"}}>TIENDA</button>
                <img
                  src={ArrowStore}
                  className="img-fluid ml-4"
                  alt="arrow-right-store"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 pt-5">
        <img
          src={Banner2}
          className="img-fluid"
          style={{width: "100%"}}
          alt="banner2"
        />
      </div>
    </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]}/>
    </>
  );
};
