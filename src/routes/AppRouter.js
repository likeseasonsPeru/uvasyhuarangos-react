import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Home } from "../Pages/Home.js";
import { Huarango } from "../Pages/Huarango.js";
import { Uvas } from "../Pages/Uvas.js";
import Gastronomia from "../Pages/Gastronomia.js";
import { Vinos } from "../Pages/Vinos.js";
import { Piscos } from "../Pages/Piscos.js";
import { Familia } from "../Pages/Familia.js";
import { FamiliiaScreen } from "../Pages/FamiliiaScreen.js";
import { Error } from "../Pages/Error.js";
import { Cocteleria } from "../Pages/Cocteleria.js";
import { Cookies } from "../Pages/Cookies.js";
import { TermsAndConditions } from "../Pages/TermsAndConditions.js";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uvas"  element={ <Uvas/> }/>
        <Route path="/huarangos"  element={ <Huarango/> }/>
        <Route path="/turismo"  element={ <Gastronomia/> }/>
        <Route path="/vinos"  element={ <Vinos/> }/>
        <Route path="/piscos"  element={ <Piscos/> }/>
        <Route path="/cocteleria"  element={ <Cocteleria/> }/>
        <Route path="/familia" element={<Familia />} />
        <Route path="/familia/:familia" element={<FamiliiaScreen />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terminosycondiciones" element={<TermsAndConditions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
