import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "./styles/style.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import { NavLink } from "react-router-dom";

// imgs
import ArrowRight from "../assets/img/home/arrow-right.png";
import ArrowLeft from "../assets/img/home/arrow-left.png";

SwiperCore.use([Navigation]);

export const SliderNavbar = () => {
  const swiperRef = useRef(null);
  //   const routes = [
  //     { id: 1, data: "dolphin1" },
  //     { id: 2, data: "dolphin2" },
  //     { id: 3, data: "dolphin3" },
  //     { id: 4, data: "dolphin4" },
  //     { id: 5, data: "dolphin5" },
  //     { id: 6, data: "dolphin6" },
  //     { id: 7, data: "dolphin7" },
  //   ];
  return (
    <div style={{ marginTop: "120px" }}>
      <Swiper
        ref={swiperRef}
        spaceBetween={2}
        slidesPerView={1}
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
          <div>
            <NavLink
              className="nav-link brands-link text-decoration-none"
              to="/familia/agenciadolphintravel"
            >
              <p className="text-center">
                AGENCIA <br />
                DOLPHIN TRAVEL
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NavLink className="nav-link brands-link" to="/familia/finca314">
              <p className="text-center">
                Finca <br />
                314
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NavLink
              className="nav-link brands-link"
              to="/familia/bodegasantalucia"
            >
              <p className="text-center text-uppercase">
                BODEGA <br />
                SANTA LUCíA
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NavLink
              className="nav-link brands-link"
              to="/familia/bodegasannicolas"
            >
              <p className="text-center text-uppercase">
                Bodega <br />
                SAN Nicolás
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NavLink
              className="nav-link brands-link"
              to="/familia/bodegaelcatador"
            >
              <p className="text-center">
                Bodega <br />
                el catador
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NavLink
              className="nav-link brands-link"
              to="/familia/bodegapampasdeica"
            >
              <p className="text-center">
                Bodega <br />
                pampas de ica
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NavLink
              className="nav-link brands-link"
              to="/familia/bodegatresgeneraciones"
            >
              <p className="text-center">
                Bodega <br />
                tres Generaciones
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NavLink
              className="nav-link brands-link"
              to="/familia/bodegavillacuri"
            >
              <p className="text-center">
                Bodega <br />
                Villacuri
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div>
            <NavLink className="brands-link" to="/familia/haciendagranpaso">
              <p className="text-center">
                Hacienda <br />
                gran paso
              </p>
            </NavLink>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div>
            <NavLink
              className="nav-link brands-link"
              to="/familia/fundoviole"
            >
              <p className="text-center">
                Doña <br />
                Viole
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NavLink
              className="nav-link brands-link"
              to="/familia/haciendahuamani"
            >
              <p className="text-center">
                Hacienda <br />
                Huamani
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <NavLink
              className="nav-link brands-link"
              to="/familia/restaurantelaolladejuanita"
            >
              <p className="text-center">
                Restaurante <br />
                La olla de juanita
              </p>
            </NavLink>
          </div>
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
