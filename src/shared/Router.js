import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Write from "../pages/Write";
import Areadetail from "../pages/Areadetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/Areadetail" element={<Areadetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
