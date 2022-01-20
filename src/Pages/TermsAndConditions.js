import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

export const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className="container mt-120">
        <div
          className="px-60 mx-auto  text-white"
          style={{ maxWidth: "890px" }}
        >
          <h1 className="text-center">Términos y Condiciones</h1>
          <p className="mt-5" style={{ fontSize: "20px" }}>
            Uvas y Huarangos, es el nombre comercial del Cluster Enoturístico de
            Ica “Racimos del Sur”. <br /> <br />
            Los presentes términos y condiciones generales son aplicables al
            acceso y uso de servicios ofrecidos por la empresa Cluster
            Enoturístico de Ica, con R.U.C. N° 20606584041, dentro del sitio web{" "}
            <a href="http://www.uvasyhuarangos.pe" className="text-white">
              www.uvasyhuarangos.pe
            </a>
            <br /> <br />
            Uvas y Huarangos trata la información y datos personales de sus
            usuarios que recopila a través del sitio web, redes sociales,
            formularios digitales, así como cualquier medio electrónico o
            digital equivalente. Para comprar en ww.uvasyhuarangos.pe, El
            Usuario declara haber leído y aceptado de manera previa y expresa
            los términos y condiciones sujetándose a sus disposiciones, las
            mismas que se reservan el derecho de actualizar y/o modificar los
            términos y condiciones que detallamos a continuación en cualquier
            momento, sin previo aviso.
          </p>
          <h2 className="text-center py-4">Derechos del Usuario</h2>
          <p className="mt-5" style={{ fontSize: "20px" }}>
            Nuestros productos y servicios están dirigidos a usuarios que hayan
            cumplido los 18 años de edad, estos gozarán de todos los derechos
            que le reconoce la legislación sobre protección al consumidor
            vigente en el territorio de Perú, y además los que se le otorgan en
            estos términos y condiciones. El usuario dispondrá en todo momento
            de los derechos de información, rectificación y cancelación de los
            datos personales conforme a la Ley Nº29733 sobre protección de datos
            de carácter personal. <br /> <br />
            El usuario puede navegar en el sitio web libremente sin necesidad de
            registrarse y/o suscribirse. Sin embargo, en algunos casos se
            requerirá del registro y/o suscripción para acceder al contenido y
            el usuario deberá completar un formulario proporcionando los datos
            personales solicitados. <br /> <br />A través de la aceptación de
            los presentes términos y condiciones el usuario da su consentimiento
            expreso para la inclusión de su información en nuestros bancos de
            datos.
          </p>
        </div>
      </section>
    </>
  );
};
