import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Home } from "../Pages/Home";
import { Huarango } from "../Pages/Huarango";
import { Uvas } from "../Pages/Uvas";
import Gastronomia from "../Pages/Gastronomia";
import { Vinos } from "../Pages/Vinos";
import { Piscos } from "../Pages/Piscos";

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
      </Routes>
    </>
  );
};
