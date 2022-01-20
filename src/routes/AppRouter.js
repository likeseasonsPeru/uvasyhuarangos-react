import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Home } from "../Pages/Home";
import { Huarango } from "../Pages/Huarango";
import { Uvas } from "../Pages/Uvas";
import Gastronomia from "../Pages/Gastronomia";
import { Vinos } from "../Pages/Vinos";
import { Piscos } from "../Pages/Piscos";
import { Familia } from "../Pages/Familia";
import { FamiliiaScreen } from "../Pages/FamiliiaScreen";
import { Error } from "../Pages/Error";
import { Cocteleria } from "../Pages/Cocteleria";
import { Cookies } from "../Pages/Cookies";
import { TermsAndConditions } from "../Pages/TermsAndConditions";

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
