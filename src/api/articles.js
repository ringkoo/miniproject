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

export { getArticle, getArticles, addArticle };
