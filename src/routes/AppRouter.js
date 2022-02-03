import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Home } from "../pages/Home";
import { Huarango } from "../pages/Huarango";
import { Uvas } from "../pages/Uvas";
import Gastronomia from "../pages/Gastronomia";
import { Vinos } from "../pages/Vinos";
import { Piscos } from "../pages/Piscos";
import { Familia } from "../pages/Familia";
import { FamiliiaScreen } from "../pages/FamiliiaScreen";
import { Error } from "../pages/Error";
import { Cocteleria } from "../pages/Cocteleria";
import { Cookies } from "../pages/Cookies";
import { TermsAndConditions } from "../pages/TermsAndConditions";

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
