import axios from "axios";

// 게시글 조회
const getArticles = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  //   console.log(response.data);
  return response.data;
};

// 게시글 상세 데이터 조회
const getArticle = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/posts/${id}`
  );
  return response.data;
};

//입력(post요청)
const addArticle = async (formData) => {
  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   };
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, formData);
};

// 업데이트
const updateArticle = async (id, formData) => {
  await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, formData);
};

//게시글 삭제
const deleteArticle = async (id) => {
  // const confirmed = window.confirm("정말로 삭제하시겠습니까?");
  // if (!confirmed) {
  //   return; // 삭제 취소
  // }
  // console.log(id);
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/posts/${id}`
  );
  return response.data;
};

export { getArticle, getArticles, addArticle, deleteArticle, updateArticle };
