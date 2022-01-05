import React from "react";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowLeft from "../assets/img/legado/arrow-left.png";
import banner1 from "../assets/img/legado/banner1.jpg";
import banner3 from "../assets/img/legado/banner3.jpg";
import sello from "../assets/img/legado/sello1.png";
import ArrowGrape from "../assets/img/legado/arrow-right-grape.png";
import ArrowStore from "../assets/img/legado/arrow-right-store.png";
import Rose from "../assets/img/legado/rose.jpg";
import Tinto from "../assets/img/legado/tinto.jpg";

export const Vinos = () => {
  const DataFooter = [
    "#5D5D43",
    "“NOSOTROS NO SOMOS LA PITUCA PRODUCIDA. NOSOTROS SOMOS LA TRADICIÓN DE LCA. OSEA SOMOS LA CHOLA BONITA”",
  ];

  return (
    <>
      <Navbar />
      <section id="legado" className="page mt-120">
        <div className="container py-5 position-relative">
          <div className="row">
            <div className="col text-center my-5">
              <h1 className="pages-titles color-legado">
                UN LEGADO DE <br /> RECONOCIMIENTOS
              </h1>
              <p style={{ maxWidth: "1000px" }} className="mx-auto">
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
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="pages-subtitles color-legado">VINO BLANCO</h2>
              <p className="mx-auto mb-5" style={{ maxWidth: "667px" }}>
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
              <h2 className="pages-subtitles color-legado">TINTO</h2>
              <img src={Tinto} alt="tinto" class="img-fluid mb-5" />
              <p className="mx-auto text-center" style={{ maxWidth: "410px" }}>
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
            <div className="col-md-2 col-sm-12  text-center align-self-center py-5">
              <img src={sello} className="img-fluid" alt="sello" />
            </div>
            <div className="col-md-5 col-sm-12 text-center">
              <h2 className="pages-subtitles color-legado">ROSE</h2>
              <img src={Rose} alt="Rose" class="img-fluid mb-5" />
              <p className="mx-auto text-center" style={{ maxWidth: "410px" }}>
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
            <div className="d-flex mt-5">
              <button className="btn-w color-tienda br-store">TIENDA</button>
              <img
                src={ArrowStore}
                className="img-fluid ml-4"
                alt="arrow store"
              />
            </div>
            <div className="d-flex mt-5">
              <button className="btn-w color-uva br-grape">UVAS</button>
              <img
                src={ArrowGrape}
                className="img-fluid ml-4"
                alt="arrow grape"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 mb-5">
          <img
            src={banner3}
            className="img-fluid"
            style={{ width: "100%" }}
            alt="banner legado 3"
          />
        </div>
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 text-center my-5">
              <h1 className="premios-title color-legado">Premios</h1>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-around">
                <div className="text-center">
                  <img src="" width="170px" height="170px" alt="premio 1" />
                  <p className="mt-4">PREMIO AAA</p>
                </div>
                <div className="text-center">
                  <img src="" width="170px" height="170px" alt="premio 2" />
                  <p className="mt-4">PREMIO AAA</p>
                </div>
                <div className="text-center">
                  <img src="" width="170px" height="170px" alt="premio 3" />
                  <p className="mt-4">PREMIO AAA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="table-box">
            <table className="table-vinos text-center">
              <tr className="text-center bg-legado w-100">
                <th colspan="2" className="py-2">
                  TIPOS DE VINOS
                </th>
              </tr>
              <tr>
                <th className="th-table-vinos py-2">
                  <strong>COLOR</strong>
                </th>
                <th className="th-table-vinos py-2">
                  <strong>AZUCAR</strong>
                </th>
              </tr>
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
            </table>
          </div>
        </div>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};
