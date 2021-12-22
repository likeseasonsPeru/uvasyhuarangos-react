import React from "react";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowRight from "../assets/img/bebidas/arrow-left.png";
import ArrowPiscos from "../assets/img/bebidas/arrow-right-bebidas.png";
import chilcano from "../assets/img/bebidas/chilcano.jpg";
import capitan from "../assets/img/bebidas/capitan.jpg";
import piscosour from "../assets/img/bebidas/piscosour.jpg";
import piscopunch from "../assets/img/bebidas/piscopunch.jpg";

export const Piscos = () => {

  const DataFooter = [
    "#FED16A",
    "“PORQUE NUESTRA PERUANIDAD ESTÁ EN LA TRADICIÓN, Y EN EL PISCO, NUESTRA IDENTIDAD”"
  ];

  return (
    <>
      <Navbar />
      <section id="tradicion" className="page">
      <div className="contain-legado">
        <button
          className="position-absolute"
          style={{top: '3rem', left: '9rem', border: 'none'}}
        >
          <img src={ArrowRight} className="img-fluid"  alt="ArrowRight"/>
        </button>
        <div className="container">
          <h1 className="parallax-titles parallax-position pb-2">
            BEBIDAS
          </h1>
        </div>
      </div>
      <div className="parallax p-tradicion">
        <div className="container">
          <h1 className="parallax-titles pt-2 text-uppercase">
            CON TRADICIóN
          </h1>
          <br />
          <div
            className="d-flex mt-3"
          >
            <button className="btn-w color-white br-btn-footer px-5">TIENDA</button>
            <img
              src={ArrowPiscos}
              className="img-fluid ml-4"
              alt="bebidas arrow"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div className="mx-auto">
          <h1 className="pages-titles color-tradicion">CHILCANO</h1>
          <p style={{maxWidth: '600px'}}>
            Sencillo, exquisito y muy refrescante. Prueba uno de los tragos más
            emblemáticos y amados de nuestro país. En especial en los días
            calurosos de verano, este coctel ligero, fácil de hacer y de beber,
            es delicioso con un sabor fresco y muy bueno.
          </p>
          <strong>INGREDIENTES:</strong>
          <ul className="ul-ingredientes">
            <li>- 6 cubos de hielo</li>
            <li>- 1 onza de pisco</li>
            <li>- Ginger ale a gusto</li>
            <li>- 1 limón</li>
          </ul>
          <strong className="strong-txt">PREPARACIóN:</strong>
          <ol className="ul-ingredientes">
            <li>Colocar el hielo en un vaso.</li>
            <li>Añadir el pisco.</li>
            <li>Agregar el ginger ale.</li>
            <li>Remover un poco</li>
            <li>Añadir una rodaja de limón.</li>
          </ol>
        </div>
        <div style={{position: 'relative',maxWidth: '50vw'}} >
          <img src={chilcano} className="img-fluid" alt="chilcano" />
          <div
            className="d-flex mt-5"
            style={{position: 'absolute', bottom: '3rem', right: '2rem'}}
          >
            <button className="btn-w color-white br-btn-footer px-5">TIENDA</button>
            <img
              src={ArrowPiscos}
              className="img-fluid ml-4"
              alt="ArrowPiscos"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div style={{position: 'relative' ,maxWidth: '50vw'}}>
          <img src={capitan} className="img-fluid" alt="pisco capitan" />
          <div
            className="d-flex mt-5"
            style={{position: 'absolute', bottom: '9rem', right: '2rem'}}
          >
            <button className="btn-w color-white br-btn-footer px-5">TIENDA</button>
            <img
              src={ArrowPiscos}
              className="img-fluid ml-4"
              alt="ArrowPiscos"
            />
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="pages-titles color-tradicion">CAPITAN</h1>
          <p style={{maxWidth: '600px'}}>
            Con casi 100 años de historia, este sabroso trago es uno de los
            clásicos de la coctelería peruana. Se creó en 1920, cuando capitanes
            del Ejército, después de su ronda nocturna, empiezan a pedir en las
            cantinas lo que se convertiría en su mezcla favorita: pisco y
            vermouth. Este refrescante cóctel es excelente si buscas
            experimentar una gran combinación de sabores.
          </p>
          <strong>INGREDIENTES:</strong>
          <div className="row pl-5">
            <div className="col-5">
              <ul className="ul-ingredientes">
                <li>- 1 1⁄2 onzas de pisco</li>
                <li>- 1 1⁄2 onzas de vermouth rosado</li>
                <li>- 2 cerezas marrasquino</li>
              </ul>
            </div>
            <div className="col-7 text-left">
              <ul className="ul-ingredientes">
                <li>
                  - 1 gota de amargo de <br />
                  angostura
                </li>
                <li>- 2 o 3 cubos de hielo</li>
              </ul>
            </div>
          </div>
          <strong className="strong-txt">PREPARACIóN:</strong>
          <ol style={{maxWidth: '600px'}} className="ul-ingredientes">
            <li>
              Vierta el pisco y el vermouth en una coctelera con hielo y agregue
              el amargo de angostura.
            </li>
            <li>
              Revuelva suavemente con una cuchara y sirva en un vaso pequeño o
              en una copa de martini con dos cerezas marrasquino.
            </li>
            <li>Si desea un trago más dulce, agregue 1⁄2 onza de vermouth.</li>
            <li>Si lo desea más seco, 1⁄2 onza de pisco.</li>
            <li>Puede agregar una aceituna verde.</li>
          </ol>
        </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div className="mx-auto">
          <h1 className="pages-titles color-tradicion">PISCO SOUR</h1>
          <p style={{maxWidth: '600px'}}>
            Muy fácil de preparar, este emblemático trago seduce tu paladar
            desde el primer sorbo. Este magnífico cóctel, que ya se ha vuelto
            parte de la identidad peruana como la bebida bandera de nuestro
            país, tiene el pisco como principal ingrediente y conmemora su día
            el 8 de febrero.
          </p>
          <strong>INGREDIENTES:</strong>
          <div className="row pl-5">
            <div className="col-5">
              <ul className="ul-ingredientes">
                <li>- 8 cubos de hielo</li>
                <li>- 1 onza de jugo de limón</li>
                <li>- 1 onza de jarabe de goma</li>
                <li>- 3 onzas de pisco</li>
              </ul>
            </div>
            <div className="col-7 text-left">
              <ul className="ul-ingredientes">
                <li>- 1/2 clara de huevo</li>
                <li>
                  - 4 gotas de amargo de <br />
                  angostura
                </li>
              </ul>
            </div>
          </div>
          <strong className="strong-txt">PREPARACIóN:</strong>
          <ol className="ul-ingredientes">
            <li>Colocar los cubos de hielo.</li>
            <li>
              Agregar el jugo de limón, jarabe de goma, el pisco y la clara de
              huevo.
            </li>
            <li>Mezclar en una coctelera.</li>
            <li>Colocar la mezcla en una copa.</li>
            <li>Agregar el amargo de angostura.</li>
          </ol>
        </div>
        <div style={{position: 'relative', maxWidth: '50vw'}}>
          <img src={piscosour} className="img-fluid" alt="piscosour" />
          <div
            className="d-flex mt-5"
            style={{position: 'absolute', bottom: '7rem', right: '2rem'}}
          >
            <button className="btn-w color-white br-btn-footer px-5">TIENDA</button>
            <img
              src={ArrowPiscos}
              className="img-fluid ml-4"
              alt="ArrowPiscos"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div style={{position: 'relative', maxWidth: '50vw'}}>
          <img src={piscopunch} className="img-fluid" alt="piscopunch"/>
          <div
            className="d-flex mt-5"
            style={{position: 'absolute', bottom: '9rem', right: '2rem'}}
          >
            <button className="btn-w color-white br-btn-footer px-5">TIENDA</button>
            <img
              src={ArrowPiscos}
              className="img-fluid ml-4"
              alt="ArrowPiscos"
            />
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="pages-titles color-tradicion">PISCO PUNCH</h1>
          <p style={{maxWidth: '600px'}}>
            Este trago preparado con pisco nace lejos de nuestro país, ya que
            tiene su origen en Estados Unidos a finales del siglo XIX. Este
            cóctel comprende una combinación del destilado con jugo de limón,
            piña, goma arábiga, azúcar y agua destilada. La mezcla encantó a
            todos y hoy en día esta bebida es uno de los más populares
            elaborados con pisco nacional.
          </p>
          <strong>INGREDIENTES:</strong>
          <div className="row pl-5">
            <div className="col-5">
              <ul className="ul-ingredientes">
                <li>- 8 cubos de hielo</li>
                <li>- 1/2 onza de jugo de limón</li>
                <li>- 1 onza de zumo de piña</li>
                <li>- 2 onzas de pisco Italia</li>
                <li>- 3 onzas de agua con gas</li>
              </ul>
            </div>
            <div className="col-7 text-left">
              <ul className="ul-ingredientes">
                <li>
                  - 2 cucharadas de <br />
                  macedonia de piña
                </li>
                <li>- 1 hoja de piña</li>
                <li>- 1 cereza</li>
              </ul>
            </div>
          </div>
          <strong className="strong-txt">PREPARACIóN:</strong>
          <ol className="ul-ingredientes">
            <li>Colocar el hielo en una copa amplia.</li>
            <li>
              Añadir el jugo de limón, el zumo de piña y el pisco Italia.
              Mezclar.
            </li>
            <li>Incorporar el agua con gas. Mezclar.</li>
            <li>Añadir la macedonia de piña. Mezclar.</li>
            <li>Decorar con la hoja de piña y la cereza.</li>
          </ol>
        </div>
      </div>
    </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]}/>
    </>
  );
};
