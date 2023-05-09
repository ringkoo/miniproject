import React from "react";
import Write from "../redux/componants/write/Write";
import Navbar from "../redux/componants/navbar/Navbar";

// 깃터짐 테스트용 주석

function WriteArticle() {
  return (
    <>
      <Navbar isActive={false}>게시글 작성</Navbar>
      <Write />
    </>
  );
}

export default WriteArticle;
