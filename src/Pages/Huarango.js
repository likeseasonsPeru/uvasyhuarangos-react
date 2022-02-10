import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowRight from "../assets/img/huarangos/arrow-right.png";
import banner1 from "../assets/img/huarangos/banner1.jpg";
import banner2 from "../assets/img/huarangos/banner2.jpg";
import banner3 from "../assets/img/huarangos/banner3.jpg";
import whyimportant from "../assets/img/huarangos/whyimportant.jpg";

export const Huarango = () => {
  const DataFooter = [
    "#C0D8E1",
    [
      `"AUNQUE NO HABLE NI CAMINE, EL HUARANGO ES COMO UN AMIGO QUE SE PREOCUPA POR NUESTRA VIDA, UN HERMANO QUE TENEMOS QUE CUIDAR".`,
      `MARTÍN NOA, ARTÍCULO PARA LA BBC MUNDO.`,
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
      <section id="huarango" className="page mt-120">
        <div className="container-fluid p-0 position-relative">
          <img
            src={banner1}
            className="img-fluid"
            style={{ width: "100%", maxHeight: "65vh" }}
            alt="banner 1 huarangos"
          />
          <button
            data-aos="fade-up"
            className="ArrowRightHuarango"
            onClick={() => window.history.back()}
          >
            <img
              src={ArrowRight}
              alt="ArrowRight"
              className="img-fluid ArrowRightHuarango-img"
            />
          </button>
        </div>
        <div
          className="container-fluid py-3"
          style={{ backgroundColor: "#C0D8E1" }}
          data-aos="fade-up"
        >
          <h1 className="pages-titles color-white pt-4  text-center">
            CONMIGO COMIENZA TODO
          </h1>
        </div>
        <div className="container pb-5">
          <div className="row py-5">
            <div className="col text-center">
              <h4 className="pages-slogan my-4" data-aos="fade-up">
                Hola, soy el Huarango
              </h4>
              <p
                className="mx-auto pt-3 font-mackinacpro"
                data-aos="fade-up"
                style={{ maxWidth: "1000px" }}
              >
                Estoy aquí desde tiempos inmemoriales, llegué a Ica antes que
                los incas y las coyas, antes que los españoles y las uvas. Desde
                entonces me he dedicado a darle vida a su ecosistema, a mejorar
                su clima, a hacer fértil su suelo, a reducir su salinidad y
                darle agua a través de la neblina para ver crecer sus uvas.{" "}
                <br />
                <br />
                Soy el tesoro visible con el que todos quieren departir, soy la
                sombra de los animales domésticos y salvajes, soy las ramas que
                ayudan a construir casas y prensar las uvas, soy las hojas y
                bayas que producen tinta natural y dejan huella en sus
                historias.
                <br />
                <br />
                Hoy voy a contarte mi historia a través de todas las
                generaciones que se sentaron a hablar conmigo. Bienvenido, no
                importa en qué parte estes, yo me haré cargo de darte cobijo,
                alegría y el espíritu iqueño.
              </p>
            </div>
          </div>
        </div>
        {window.innerWidth <= 540 && (
          <div className="container-fluid p-0">
            <img
              src={banner3}
              alt="whyimportant"
              className="img-fluid"
              style={{ maxHeight: 170, width: "100%" }}
            />
          </div>
        )}
        <div className="container">
          <div className="row">
            {window.innerWidth > 540 && (
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 pt-3">
                <div style={{ width: "100%" }} data-aos="fade-up">
                  <img
                    src={whyimportant}
                    className="img-fluid"
                    alt="whyimportant"
                  />
                </div>
              </div>
            )}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 pt-3">
              <div className="ml-auto d-flex flex-column justify-content-between">
                <div>
                  <div className="text-right align-self-end">
                    <h2
                      className="pages-subtitles color-huarango align-header"
                      data-aos="flip-up"
                    >
                      ¿POR QUÉ SOY <br /> TAN IMPORTANTE?
                    </h2>
                  </div>
                  <p
                    className="ml-auto text-right font-mackinacpro"
                    style={{ maxWidth: "560px" }}
                    data-aos="fade-up"
                  >
                    El árbol de huarango es oriundo del Valle de Ica, donde la
                    lluvia es prácticamente nula. Con uno de los ecosistemas más
                    vulnerables de la tierra este árbol perdura gracias a sus
                    propiedades únicas.
                    <br />
                    <br />
                    El huarango cuenta con las raíces más profundas del mundo,
                    que miden hasta 70 metros y le permite alcanzar fuentes
                    profundas de agua subterránea, traerla a superficies
                    desérticas, haciendo posible la vida y sembrado de otras
                    plantas y frutos, como las uvas.
                    <br />
                    <br />
                    Sus hojas actúan como atrapanieblas, su superficie capta la
                    niebla, esta se condensa y se convierte en agua, goteando al
                    suelo. Su fruto, denominado huaranga, es sumamente
                    nutritivo, sirviéndole incluso a culturas de la etapa
                    precolombina como alimento de sobrevivencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5 mt-5">
          <div className="row pb-4">
            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <h2
                className="pages-subtitles color-huarango pt-3"
                data-aos="flip-up"
              >
                CUIDEMOS <br />
                AL GUARDIÁN
              </h2>
              <p className="color-huarango" data-aos="fade-up">
                Un árbol tan majestuoso como el huarango, <br /> debe ser
                preservado con mucho cuidado.
              </p>
              <p
                className="font-mackinacpro pt-2"
                style={{ maxWidth: "580px" }}
                data-aos="fade-up"
              >
                Debemos saber que hacer para salvaguardarlo, porque sembrar sus
                semillas sólo es la primer paso, el segundo es plantar la
                semilla en los niños, de forma que sembrar árboles sea algo
                habitual que de ahora en adelante será parte de sus vidas.{" "}
                <br />
                <br />
                Cuando ya los hemos plantado, no debemos sembrar una única
                especie de árbol, se necesita plantar los árboles con los que se
                relaciona, como la guayaba, el molle o la acacia.
                <br />
                <br />
                Por ejemplo, el ave que salva al huarango de las plagas habita
                otros arbustos y sin ellos el huarango sería defoliado una y
                otra vez.
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 h-100 align-self-end">
              <img
                src={banner2}
                className="img-fluid"
                alt="banner2"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};
