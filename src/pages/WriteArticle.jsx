import React from "react";
import Write from "../redux/componants/write/Write";
import Navbar from "../redux/componants/navbar/Navbar";
function WriteArticle() {
  return (
    <>
      <Navbar isActive={false}>게시글 작성</Navbar>
      <Write />
    </>
  );
}

export default WriteArticle;
