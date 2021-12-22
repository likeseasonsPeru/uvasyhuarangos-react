import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Home } from "../Pages/Home";
import { Huarango } from "../Pages/Huarango";
import { Uvas } from "../Pages/Uvas";
import Gastronomia from "../Pages/Gastronomia";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uvas"  element={ <Uvas/> }/>
        <Route path="/huarangos"  element={ <Huarango/> }/>
        <Route path="/turismo"  element={ <Gastronomia/> }/>
      </Routes>
    </>
  );
};
