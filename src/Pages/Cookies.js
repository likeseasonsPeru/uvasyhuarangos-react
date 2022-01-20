import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

export const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className="container mt-120">
        <div className="text-center px-60">
          <h1 className="text-white">Política de Cookies</h1>
          <p
            className="mt-5 text-white mx-auto"
            style={{ maxWidth: "850px", fontSize: "20px" }}
          >
            Los Sitios Web y las Aplicaciones utilizan cookies. Una cookie es un
            fichero que se descarga en su ordenador al acceder a determinadas
            páginas web. Las cookies facilitan el uso y la navegación por una
            página web y son de importancia esencial para el buen funcionamiento
            de Internet, aportando innumerables ventajas en la prestación de
            servicios interactivos. También sirven para mejorar los servicios
            que ofrecemos y para poder recopilar información estadística que nos
            permite entender cómo los clientes o usuarios utilizan nuestra Web y
            nos ayudan a mejorar su estructura y contenidos.
            <br /> <br />
            Las cookies pueden borrarse del navegador si el Usuario así lo
            desea. La mayoría de los navegadores aceptan las cookies de forma
            automática, pero le permiten al Usuario cambiar la configuración de
            su navegador para que rechace la instalación de cookies, sin que
            ello perjudique su acceso y navegación por los Sitios Web y las
            Aplicaciones. Para eliminar las cookies de un sitio web debe ir a la
            configuración de su navegador y allí podrá buscar las asociadas al
            dominio en cuestión y proceder a su eliminación.
            <br /> <br />
            En el supuesto de que en el sitio Web se dispusieran enlaces o
            hipervínculos hacia otros lugares de Internet propiedad de terceros
            que utilicen cookies, Uvas y Huarangos no se hace responsable ni
            controla el uso de cookies por parte de dichos terceros.
          </p>
        </div>
      </section>
    </>
  );
};
