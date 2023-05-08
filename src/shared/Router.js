import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import WriteArticle from "../pages/WriteArticle";
import Areadetail from "../pages/Areadetail";
import Signup from "../pages/Signup";
import DetailPage from "../pages/DetailPage";
import UpdateArticle from "../pages/UpdateArticle";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<WriteArticle />} />
        <Route path="/Areadetail" element={<Areadetail />} />
        <Route path="/detailpage/:id" element={<DetailPage />} />
        <Route path="/updatearticle" element={<UpdateArticle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
