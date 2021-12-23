import React from "react";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavFamilies } from "../components/NavFamilies";
import { Link } from "react-router-dom";

// images
import ArrowRight from "../assets/img/quienesomos/arrow-right.png";
import banner1 from "../assets/img/quienesomos/banner1.jpg";
import sello from "../assets/img/legado/sello.png";

export const Familia = () => {
  const DataFooter = [
    "#A45844",
    "“PORQUE SOMOS PARTE DE LA TRADICIÓN, DEL CELEBRAR, DEL DISFRUTAR EN FAMILIA”",
  ];
  return (
    <>
      <Navbar />
      <NavFamilies />
      <section id="quienes-somos" class="page">
        <div className="container py-5">
          <button className="float-left pt-4">
            <img src={ArrowRight} className="img-fluid" alt="ArrowRight" />
          </button>
          <div className="row text-center justify-content-md-center">
            <div className="col-12">
              <h1 className="pages-titles color-qs">¿QUIENES SOMOS?</h1>
            </div>
            <div className="col-12">
              <p style={{ maxWidth: "800px" }} className="mx-auto">
                Somos un alma refinada pero generosa, que alberga grandes
                historias que por generaciones han capturado la tradición de
                miles de familias. Somos una tierra trabajada con el corazón,
                que hoy quiere revelar sus secretos y misterios al exterior.
                Somos el espiritu de las bebidas que llean la esencia del sol,
                el sabor de la uva y la alegria iqueña.
              </p>
              <br />
              <p className="mx-auto">
                <h6 className="pages-subheaderh6">Somos el cluster</h6>
                <h3 className="subtitles-racimo">Racimos del Sur</h3>
                <br />
                <h5 className="pages-subheaderh5">
                  presentamos nuestra tienda Uvas y Huarangos
                </h5>
              </p>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <div className="text-center">
                <Link className="link-social" to="">
                  <span>INSTAGRAM:</span> @uvasyhuarangos
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <Link
                  className="link-social"
                  to="https://www.facebook.com/Racimos-Del-Sur-114922723616207/"
                >
                  <span>FACEBOOK:</span> @racimosdelsur
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <Link className="link-social" to="https://racimosdelsur.com/">
                  <span>WEB:</span> www.racimosdelsur.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0 mb-5 position-relative">
          <img src={banner1} className="img-fluid" width="100%" alt="banner1" />
          <h1
            className="pages-titles color-white text-center position-absolute"
            style={{ left: "0", right: "0", bottom: "-20px" }}
          >
            HUARANGO, PISCO, TRADICIóN
          </h1>
        </div>

        <div className="container pb-5">
          <div className="row pb-4">
            <div className="col-4 text-center">
              <h2 className="pages-subtitles color-qs">VISIón</h2>
              <p style={{ maxWidth: "400px" }}>
                Nuestro propósito es la inmortalidad de nuestras costumbres y
                alimentar el alma y corazón de los peruanos con los frutos de
                nuestras tierras.
                <br />
                <br />
                Queremos ser los primeros en llegar a la ﬁesta y los últimos en
                irnos llevando nuestro trabajo a las casas de quienes aman lo
                hecho con pasión.
              </p>
            </div>
            <div className="col-4 text-center">
              <img src={sello} className="img-fluid" alt="sello" />
            </div>
            <div className="col-4 text-center">
              <h2 className="pages-subtitles color-qs">MISIón</h2>
              <p style={{ maxWidth: "400px" }}>
                Somos una comunidad vitivinícola y eno turística que ofrece
                servicios relacionados a sus viñedos y el sol que los ve crecer
                en Ica.
                <br />
                <br />
                Somos socios unidos bajo una misma cultura de marca: compartir
                la tradición y alegría iqueña.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};
