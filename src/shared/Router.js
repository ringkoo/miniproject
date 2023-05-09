import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import WriteArticle from "../pages/WriteArticle";
import Signup from "../pages/Signup";
import DetailPage from "../pages/DetailPage";
import UpdateArticle from "../pages/UpdateArticle";
import Areadetail from "../pages/Areadetail";

// 깃터짐 테스트용 주석

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<WriteArticle />} />
        <Route path="/detailpage/:id" element={<DetailPage />} />
        <Route path="/detailpage/:id/update" element={<UpdateArticle />} />
        <Route path="/Areadetail" element={<Areadetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
