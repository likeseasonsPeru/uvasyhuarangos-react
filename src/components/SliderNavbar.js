import React from "react";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { NavLink } from "react-router-dom";



// imgs
import ArrowRight from "../assets/img/home/arrow-right.png";
import ArrowLeft from "../assets/img/home/arrow-left.png";

// SwiperCore.use([Navigation]);

console.log(Swiper)

export const SliderNavbar = () => {
  const swiperRef = React.useRef(null);
  return (
    <div style={{ marginTop: "120px", backgroundColor: '#a45844' }}>
      <Swiper
        ref={swiperRef}
        // spaceBetween={0}
        slidesPerView={2}
        slidesPerGroup={1}
      // breakpoints={{
      //   540: {
      //     slidesPerView: 2,
      //   },
      //   992: {
      //     slidesPerView: 4,
      //   },
      // }}
      >
        <SwiperSlide>

          <NavLink
            className="nav-link brands-link text-decoration-none"
            to="/familia/agenciadolphintravel"
          >
            <p className="text-center">
              AGENCIA <br />
              DOLPHIN TRAVEL
            </p>
          </NavLink>

        </SwiperSlide>


        <SwiperSlide>

          <NavLink
            className="nav-link brands-link"
            to="/familia/bodega1615"
          >
            <p className="text-center text-uppercase">
              Bodega <br />
              1615
            </p>
          </NavLink>

        </SwiperSlide>
        <SwiperSlide>

          <NavLink
            className="nav-link brands-link"
            to="/familia/bodegaelcatador"
          >
            <p className="text-center">
              Bodega <br />
              el catador
            </p>
          </NavLink>

        </SwiperSlide>
        <SwiperSlide>

          <NavLink
            className="nav-link brands-link"
            to="/familia/bodegapampasdeica"
          >
            <p className="text-center">
              Bodega <br />
              pampas de ica
            </p>
          </NavLink>

        </SwiperSlide>
        <SwiperSlide>

          <NavLink
            className="nav-link brands-link"
            to="/familia/bodegatresgeneraciones"
          >
            <p className="text-center">
              Bodega <br />
              tres Generaciones
            </p>
          </NavLink>

        </SwiperSlide>
        <SwiperSlide>

          <NavLink
            className="nav-link brands-link"
            to="/familia/bodegavillacuri"
          >
            <p className="text-center">
              Bodega <br />
              Villacuri
            </p>
          </NavLink>

        </SwiperSlide>
        <SwiperSlide>

          <NavLink className="nav-link brands-link" to="/familia/finca314">
            <p className="text-center">
              Finca <br />
              314
            </p>
          </NavLink>

        </SwiperSlide>

        <SwiperSlide>

          <NavLink
            className="nav-link brands-link"
            to="/familia/fundoviole"
          >
            <p className="text-center">
              Fundo <br />
              Doña Viole
            </p>
          </NavLink>

        </SwiperSlide>
        <SwiperSlide>

          <NavLink
            className="nav-link brands-link"
            to="/familia/fundosantalucia"
          >
            <p className="text-center text-uppercase">
              FUNDO <br />
              SANTA LUCíA
            </p>
          </NavLink>

        </SwiperSlide>
        <SwiperSlide>

          <NavLink
            className="nav-link brands-link"
            to="/familia/haciendahuamani"
          >
            <p className="text-center">
              Hacienda <br />
              Huamani
            </p>
          </NavLink>

        </SwiperSlide>
        <SwiperSlide>

          <NavLink
            className="nav-link brands-link"
            to="/familia/restaurantelaolladejuanita"
          >
            <p className="text-center">
              Restaurante <br />
              La olla de juanita
            </p>
          </NavLink>

        </SwiperSlide>
        <div
          id="previousButton"
          className="button-prev"
          style={{ color: "#000", left: 0 }}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <img src={ArrowLeft} alt="arrow-left" style={{ maxHeight: 48 }} />
        </div>
        <div
          id="nextButton"
          className=" button-next"
          style={{ color: "#000", right: 0 }}
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <img src={ArrowRight} alt="arrow-right" style={{ maxHeight: 48 }} />
        </div>
      </Swiper>


    </div>
  );
};
