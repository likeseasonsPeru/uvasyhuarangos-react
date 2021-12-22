import React from "react";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowRight from "../assets/img/huarangos/arrow-right.png";
import banner1 from "../assets/img/huarangos/banner1.jpg";
import banner2 from "../assets/img/huarangos/banner2.jpg";
import whyimportant from "../assets/img/huarangos/whyimportant.jpg";
import sello from "../assets/img/huarangos/sello.jpg";

export const Huarango = () => {
  const DataFooter = [
    "#C0D8E1",
    "AUNQUE NO HABLE NI CAMINE, EL HUARANGO ES COMO UN AMIGO QUE SE PREOCUPA POR NUESTRA VIDA, UN HERMANO QUE TENEMOS QUE CUIDAR  \n MARTÍN NOA, ARTÍCULO PARA LA BBC MUNDO.",
  ];

  return (
    <>
      <Navbar />
      <section id="huarango" className="page">
        <div className="container-fluid p-0 position-relative">
          <img
            src={banner1}
            className="img-fluid"
            style={{ width: "100%" }}
            alt="banner 1 huarangos"
          />
          <button
            style={{
              position: "absolute",
              top: "5rem",
              left: "5rem",
              border: "none",
            }}
          >
            <img src={ArrowRight} alt="ArrowRight" className="img-fluid" />
          </button>
        </div>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col text-center">
              <h1 className="pages-titles color-huarango">
                CONMIGO COMIENZA TODO
              </h1>
              <h4 className="pages-slogan mb-4">Hola, soy el Huarango</h4>
              <p>
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
        <div className="d-flex justify-content-between py-5">
          <div style={{ maxWidth: "50vw" }}>
            <img src={whyimportant} className="img-fluid" alt="whyimportant" />
          </div>
          <div className="mx-auto d-flex flex-column justify-content-between">
            <div>
              <div className="col text-right align-self-end">
                <h2 className="pages-subtitles color-huarango text-right">
                  ¿POR QUÉ SOY <br /> TAN IMPORTANTE?
                </h2>
              </div>
              <p className="mt-5 text-right" style={{ maxWidth: "512px" }}>
                El árbol de huarango es oriundo del Valle de Ica, la extensa
                franja de tierra entre el Pacífico y los Andes, donde la lluvia
                es prácticamente nula. En el ecosistema iqueño, uno de los más
                vulnerables de la Tierra, el huarango perdura gracias a sus
                propiedades únicas.
                <br />
                <br />
                Cuenta con las raíces más profundas del mundo, midiendo hasta 70
                metros. Lo que le permite alcanzar fuentes profundas de agua
                subterránea y traer agua a superficies desérticas, haciendo
                posible la vida y sembrado de otras plantas y frutos, como las
                uvas.
                <br />
                <br />
                Sus hojas actúan como atrapanieblas, su superficie capta la
                niebla, esta se condensa y se convierte en agua, goteando al
                suelo. El fruto del árbol, denominado huaranga, es sumamente
                nutritivo, culturas de la etapa precolombina sobrevivieron
                largos períodos de sequía comiendo únicamente este fruto
              </p>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <h2 className="pages-subtitles color-huarango">
                CUIDEMOS
                <br />
                AL GUARDIÁN
              </h2>
              <p className="color-huarango">
                Un árbol tan majestuoso como el huarango, debe ser preservado
                con mucho cuidado.
              </p>
              <p>
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
            <div className="col-md-6 text-right">
              <img src={sello} className="img-fluid" alt="sello" />
            </div>
          </div>
        </div>

        <div className="container-fluid p-0 mb-5">
          <img
            src={banner2}
            className="img-fluid"
            alt="banner 2 Huarangos"
            style={{ width: "100%" }}
          />
        </div>
      </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};
