import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowLeft from "../assets/img/legado/arrow-left.png";
import banner1 from "../assets/img/legado/banner1.jpg";
import sello from "../assets/img/legado/sello1.png";
import ArrowGrape from "../assets/img/legado/arrow-right-grape.png";
import ArrowStore from "../assets/img/legado/arrow-right-store.png";
import Rose from "../assets/img/legado/rose.jpg";
import Tinto from "../assets/img/legado/tinto.jpg";
import Premio1 from "../assets/img/legado/premio1.jpg";
import Premio2 from "../assets/img/legado/premio2.jpg";
import { Link } from "react-router-dom";

export const Vinos = () => {
  const DataFooter = [
    "#5D5D43",
    [
      "“El vino en el Perú tiene grandeza y aquí vamos a mostrarla. No somos la pituca produdica, somos la chola bonita” Rosa Grados",
    ],
  ];
  useEffect(() => {
    window.scrollTo(0,0)
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <section id="legado" className={`page mt-120`}>
        <div className="container py-5 position-relative">
          <div className="row">
            <div className="col text-center my-5">
              <h1 className="pages-titles color-legado" data-aos="fade-up">
                UN LEGADO DE <br /> RECONOCIMIENTOS
              </h1>
              <p
                style={{ maxWidth: "1000px" }}
                className="mx-auto mt-5"
                data-aos="fade-up"
              >
                Desde su fundación, Ica siempre se distinguió de todas las demás
                regiones por tener tierras fértiles dedicadas a la producción de
                vinos.
                <br />
                <br />
                En 1563, los españoles empezaron el cultivo de viñedos,
                obteniendo una vid tan singular y deliciosa que opacaría a los
                mejores vinos de España de la época, es así que en 1595, el Rey
                Felipe II prohibió la siembra de nuevos viñedos y la producción
                del vino.
                <br />
                <br />
                Más de medio siglo después, nuestro vino blanco aún conserva su
                calidad y puede competir contra cualquier otro en el mundo. Asi
                mismo, la región iqueña presenta una gran variedad de estas
                bebidas, con acabados en vinos secos, semi secos, dulces e
                incluso de vinos verdes, versiones que han otorgado a Ica
                numerosos premios y reconocimientos y que la han posicionado
                como una de las mejores en cuanto a la producción de este licor.
              </p>
            </div>
          </div>
          <button
            className="arrowLeftLegado"
            onClick={() => window.history.back()}
            data-aos="fade-right"
          >
            <img src={ArrowLeft} className="img-fluid" alt="arrow-left" />
          </button>
        </div>
        <div className="container-fluid p-0 mb-5">
          <img
            src={banner1}
            className="img-fluid"
            style={{ width: "100%" }}
            alt="banner 1 legado"
          />
        </div>
        <div className="container mb-5 px-60">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="pages-titles color-legado my-5" data-aos="fade-up">
                VINO BLANCO
              </h1>
              <p
                className="mx-auto mb-5"
                style={{ maxWidth: "667px" }}
                data-aos="fade-up"
              >
                Nuestro vino blanco posee un exquisito sabor muy acentuado, es
                muy ligero y de color brillante. Es recomendado como aperitivo o
                bajativo y para acompañar carnes blancas y mariscos. Su color
                claro y brillante esconde una intensa mezcla de aromas.
                <br />
                En boca despliega un cuerpo ligero y posee un delicioso sabor.
              </p>
            </div>
          </div>
          <div className="row py-5 justify-content-center align-items-baseline">
            <div className="col-md-5 col-sm-12 text-center">
              <h2 className="pages-subtitles color-legado" data-aos="fade-up">
                TINTO
              </h2>
              <img
                src={Tinto}
                alt="tinto"
                className="img-fluid mb-5"
                data-aos="fade-up-right"
              />
              <p
                className="mx-auto text-center"
                style={{ maxWidth: "410px" }}
                data-aos="fade-up"
              >
                Nuestro vino tinto es un vino de exquisito sabor muy acentuado
                con un imponente cuerpo y de color intenso. Es recomendado como
                aperitivo o bajativo para acompañar carnes rojas o pastas. Este
                vino de color rojo rubí penetrante esconde una intensa mezcla de
                aromas de frutas rojas que, en boca, despliegan un gran cuerpo y
                un sabor muy placentero.
                <br />
                <br />
                Los peruanos tenemos mucha predilección por el vino dulce y en
                la tienda de Uvas y Huarangos también los puedes encontrar.
              </p>
            </div>
            <div className="col-md-2 col-sm-12  text-center align-self-center py-5 mb-lg-5">
              <img
                src={sello}
                className="img-fluid pb-5 mb-5"
                alt="sello"
                data-aos="fade-up"
              />
            </div>
            <div className="col-md-5 col-sm-12 text-center">
              <h2 className="pages-subtitles color-legado" data-aos="fade-up">
                ROSE
              </h2>
              <img
                src={Rose}
                alt="Rose"
                className="img-fluid mb-5"
                data-aos="fade-up-left"
              />
              <p
                className="mx-auto text-center"
                style={{ maxWidth: "410px" }}
                data-aos="fade-up"
              >
                Nuestro vino Rose posee algo de aquel color típico del vino
                tinto, pero solo lo suficiente como para darle un tono rosado.
                Este vino de excelente sabor acentuado, dependiendo del tipo de
                uva con la que se elabore, variará en gran medida su sabor, como
                flores, cítricos y frutos rojos, y su color, que puede ir del
                claro al fuerte casi violeta.
                <br /> <br />
                En boca despliega un cuerpo ligero y posee un delicioso sabor.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex mt-5" data-aos="fade-up-right">
            <Link
                className="text-decoration-none"
                  to="#"
                  onClick={() => {
                    window.open("https://tienda.uvasyhuarangos.pe/", "_blank");
                  }}
              >
              <button className="btn-w color-tienda br-store btn-h80">
                TIENDA
              </button>
              </Link>
              <img
                src={ArrowStore}
                className="ml-2 btn-h80"
                alt="arrow store"
              />
            </div>
            <div className="d-flex" data-aos="fade-up-left">
              <Link to="/uvas" className="d-flex mt-5 text-decoration-none">
                <button className="btn-w color-uva br-grape btn-h80">
                  UVAS
                </button>
                <img
                  src={ArrowGrape}
                  className="ml-2 btn-h80"
                  alt="arrow grape"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 text-center my-5">
              <h1 className="premios-title color-legado" data-aos="fade-up">
                Premios
              </h1>
            </div>
            <div className="col-12" style={{ marginBottom: "100px" }}>
              <div className="row  align-items-end">
                <div
                  className="col-md-3 col-sm-12 text-center"
                  data-aos="fade-right"
                >
                  <img src={Premio1} className="img-fluid" alt="premio 2" />
                </div>
                <div
                  className="col-md-3 col-sm-12 text-center"
                  data-aos="fade-left"
                >
                  <img src={Premio2} className="img-fluid" alt="premio 2" />
                </div>
                <div
                  className="col-md-3 col-sm-12 text-center"
                  data-aos="fade-right"
                >
                  <img src={Premio1} className="img-fluid" alt="premio 2" />
                </div>
                <div
                  className="col-md-3 col-sm-12 text-center"
                  data-aos="fade-left"
                >
                  <img src={Premio2} className="img-fluid" alt="premio 2" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="table-box"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <table
              className="table-vinos text-center mx-auto"
              style={{ maxWidth: "1100px" }}
            >
              <thead>
                <tr className="text-center bg-legado w-100">
                  <th colSpan="2" className="py-2">
                    TIPOS DE VINOS
                  </th>
                </tr>
                <tr>
                  <th className="th-table-vinos py-2">
                    <strong>COLOR</strong>
                  </th>
                  <th className="th-table-vinos py-2">
                    <strong className="text-uppercase">AZúCAR</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-table-vinos py-3">Blanco</td>
                  <td className="td-table-vinos py-3">Seco</td>
                </tr>
                <tr>
                  <td className="td-table-vinos py-3">Rosado</td>
                  <td className="td-table-vinos py-3">Semi seco</td>
                </tr>
                <tr>
                  <td className="td-table-vinos py-3">Tinto</td>
                  <td className="td-table-vinos py-3">Semi Dulce</td>
                </tr>
                <tr>
                  <td className="td-table-vinos py-3">Clarete</td>
                  <td className="td-table-vinos py-3">Dulce</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};
