import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// images
import ArrowRight from "../assets/img/gastronomia/arrow-right.png";
import banner1 from "../assets/img/gastronomia/banner1.jpg";
import banner2 from "../assets/img/gastronomia/banner2.jpg";
import escudocolor from "../assets/img/gastronomia/escudocolor.jpg";
import tours from "../assets/img/gastronomia/tours.jpg";
import rutadrenalina from "../assets/img/gastronomia/rutadrenalina.jpg";
import pampa from "../assets/img/gastronomia/pampa.jpg";
import elcatador from "../assets/img/gastronomia/elcatador.jpg";
import olladejuanita from "../assets/img/gastronomia/olladejuanita.jpg";

const Gastronomia = () => {
  const DataFooter = [
    "#E27423",
    "RACIMOS DEL SUR TE INVITA A UNA EXPERIENCIA COMPLETA, LOS MEJORES VINOS Y PISCOS, CON LA AVENTURA QUE ESTABAS BUSCANDO"
  ];
  return (
    <>
      <Navbar />
      <section id="gastronomia" className="page">
      <div className="container-fluid p-0 position-relative">
        <img src={banner1} className="img-fluid"  style={{width: "100%"}}  alt="Banner 1 Turismo"/>
        <button  className="icon-left">
          <img src={ArrowRight} alt="ArrowRight" className="img-fluid" />
        </button>
      </div>
      <div className="bg-gastronomia">
        <div className="container py-5 mb-5">
          <div className="row my-5">
            <div className="col text-center">
              <h1 className="pages-titles text-white">GASTRONOMíA</h1>
              <h4 className="enoturismo-logo">Contundencia, variedad y buena sazón</h4>
              <p className="my-5">
                      Eso caracteriza a la comida peruana, no por nada es reconocida a nivel internacional. 
                      <br/><br/>
                      Dentro de nuestra gastronomía, Ica dispone de una de las cocinas más representativas del país, <br/>
                      con una exquisita fusión de la cocina criolla y la africana.
                      <br/><br/>
                      La región iqueña está repleta de deliciosos platillos tradicionales que reflejan el amor <br/>
                      y dedicación en cada plato y promueven el turismo gastronómico al crear una experiencia única <br/>
                      para todo aquel que los prueba.  
              </p>
              </div>
            </div>
          </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div className="mx-auto  d-flex flex-column justify-content-between">
              <div>
                <h2 className="pages-subtitles text-left color-gastronomia">OLLA DE <br/> JUANITA</h2>
              <p className="text-left" style={{maxWidth: "400px"}}>
                La olla de Juanita proviene de la buena sazón 
                y entrega de la Dama del Pisco, Doña Juanita, 
                heredada a su hija Cecilia González. Parras, 
                recetas y piscos inolvidables en un ambiente rústico 
                estupendo para celebrar los más exquisitos sabores 
                de la cocina iqueña con amor y admiración por nuestra gastronomía.
              </p>
              </div>
              <div className="d-flex mt-5">
                <button className="color-gastronomia br-gastronomia px-5">RESERVA</button>
                <img src={ArrowRight} className="img-fluid ml-4" alt="ArrowRight" />
              </div>
        </div>
        <div style={{maxWidth: "50vw"}}>
          <img src={olladejuanita} className="img-fluid" alt="olla de juanita"/>
        </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div style={{maxWidth: "50vw"}}>
          <img src={elcatador} className="img-fluid"  alt="el catador" />
        </div>
        <div className="mx-auto  d-flex flex-column justify-content-between">
          <div>
            <h2 className="pages-subtitles text-right color-gastronomia">EL <br/> CATADOR</h2>
            <p className="text-right" style={{maxWidth: "400px"}}>
              Disfruta de la buena sazón iqueña rodeado de 
              historia, dentro de instalaciones antiguas que 
              reflejan el legado del Pisco y su elaboración desde 
              el siglo XVl en una Bodega Turística de Piscos y 
              Vinos Fundada en 1856. El ambiente ideal para 
              degustar lo mejor de la gastronomía de Ica.
            </p>
          </div>
            <div className="d-flex mt-5 justify-content-end">
              <button className="color-gastronomia br-gastronomia px-5">RESERVA</button>
              <img src={ArrowRight} className="img-fluid ml-4"  alt="ArrowRight"/>
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div className="mx-auto  d-flex flex-column justify-content-between">
          <div>
            <h2 className="pages-subtitles text-left color-gastronomia">PAMPA</h2>
            <p className="text-left" style={{maxWidth: "400px"}}>
              Prueba la verdadera comida criolla de la región de
              Ica en nuestra picantería de carretera, degustando
              lo mejor de la gastronomía típica de antaño con
              deliciosos piscos y vinos en una experiencia única
              junto a tu familia. 
            </p>
          </div>
          <div className="d-flex mt-5">
            <button className="color-gastronomia br-gastronomia px-5">RESERVA</button>
            <img src={ArrowRight} className="img-fluid ml-4" alt="ArrowRight" />
          </div>
        </div>
        <div style={{maxWidth: "50vw"}}>
          <img src={pampa} className="img-fluid" alt="pampa" />
        </div>
      </div>
      <div className="bg-gastronomia">
        <div className="container py-5 mb-5">
          <div className="row my-5">
            <div className="col text-center">
              <h1 className="pages-titles text-white">ENOTURISMO</h1>
              <h4 className="enoturismo-logo">En Ica descubrirás el equilibrio perfecto entre historia y aventura.</h4>
              <p className="my-5 mx-auto" style={{maxWidth: "850px"}}>
                Aquí encontrarás mucho más que solo un buen pisco, aventurate atravesando los extensos desiertos en tubular 
                o las grandes dunas haciendo sandboard, conoce sus sitios arqueológicos y visita las bodegas más emblemáticas. 
                <br/>
              ¿Qué esperas? Explora todo lo que Ica tiene preparado para ti.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div className="mx-auto d-flex flex-column justify-content-between">
          <div>
            <h2 className="pages-subtitles color-gastronomia text-left">RUTA <br /> ADRENALINA</h2>
            <h3 className="color-gastronomia">TUBULARES</h3>
            <p className="text-left" style={{maxWidth: "400px"}}>
              Diviertete viajando por las descomunales dunas en 
              buggies areneros y deslizate con una tabla para 
              sentir la adrenalina de esta gran aventura.  
              <br/> <br/>
              Se parte de este viaje y adéntrate con los buggies 
              tubulares por las majestuosas arenas de nuestro 
              desierto iqueño.
            </p>
          </div>
          <div className="d-flex">
            <button className="color-gastronomia br-gastronomia px-5">RESERVA</button>
            <img src={ArrowRight} className="img-fluid ml-4" alt="ArrowRight" />
          </div>          
        </div>
        <div style={{maxWidth: "50vw"}}>
          <img src={rutadrenalina} className="img-fluid" alt="ruta adrenalina"/>
        </div>
      </div>
      <div className="d-flex  justify-content-between py-5">
        <div style={{maxWidth: "50vw"}}>
          <img src={tours} className="img-fluid"  alt="tours"/>
        </div>
        <div className="mx-auto text-right d-flex flex-column justify-content-between">
          <div>
            <h2 className="pages-subtitles color-gastronomia text-right">TOURS</h2>
            <h4 className="color-gastronomia text-uppercase">PARACAS - CAñon - nazca</h4>
            <div style={{maxWidth: "400px"}}>
              <strong className="">DE 3 DIAS</strong>
              <p className="text-right">
                <span className="txt-bold-gastronomia">Primer día:</span> Llegada y adrenalina (dunas, turismo,
                restaurants, hotel) <br />
                <span className="txt-bold-gastronomia">Segundo día:</span> cata en bodegas y comida 
                (3 bodegas, Olla Juanita, almuerzo, hotel) <br />
                <span className="txt-bold-gastronomia">Tercer día:</span> paseo y regreso (bodega final) <br />
                <span className="txt-bold-gastronomia">Cuarto día:</span>  + Bodegas o atracciones turísticas.
              </p>
              <strong>DE 1 DIA</strong>
              <p className="text-right">
                <span className="txt-bold-gastronomia">Primer día:</span>  cata y comida (3 bodegas, Olla Juanita, almuerzo, hotel) <br />
                <span className="txt-bold-gastronomia">Segundo día:</span>  adrenalina y regreso por la noche (dunas, paseos)
              </p>
          </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="color-gastronomia br-gastronomia px-5">RESERVA</button>
            <img src={ArrowRight} className="img-fluid ml-4"  alt="ArrowRight"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="mr-5">
              <h2 className="pages-subtitles text-left color-gastronomia">RUTAS UVAS Y <br /> HUARANGOS</h2>
              <h3 className="color-gastronomia mb-5">BODEGAS</h3>
              <p style={{maxWidth: "420px"}}>
                Se parte de este viaje cultural por los distritos más 
                representativos de Ica, conoce nuestra región 
                vitivinícola y deleitate con el Pisco,  
                la bebida iqueña por excelencia.  
                <br/> <br/>
                Explora diferentes bodegas, descubre acerca de la 
                producción y queda cautivado con degustaciones  
                de los mejores piscos y vinos.
              </p>
            </div>
            <div>
              <img src={escudocolor} className="img-fluid"  alt="escudocolor"/>
            </div>
        </div>
        <div className=" align-self-end">
          <button className="color-gastronomia br-gastronomia px-5">RESERVA</button>
          <img src={ArrowRight} className="ml-4" alt="ArrowRight" />
        </div>
        </div>
      </div>
      <div className="container-fluid p-0 mt-5">
        <img src={banner2} className="img-fluid" alt="banner2"/>
      </div>
    </section>
      <Footer color={DataFooter[0]} txt={DataFooter[1]} />
    </>
  );
};

export default Gastronomia;