import axios from "axios";

// 게시글 조회
const getArticles = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data.postList;
};

// 게시글 상세 데이터 조회
const getArticle = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/posts/${id}`
  );

  return response.data;
};

//입력(post요청)
const addArticle = async (formData, token) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, formData, {
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "multipart/form-data",
  });
};

// 업데이트
const updateArticle = async (id, formData, token) => {
  await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, formData, {
    headers: { Authorization: `Bearer ${token}` },
    // "Content-Type": "multipart/form-data",
  });
};

//게시글 삭제
const deleteArticle = async (id, token) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/posts/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

export { getArticle, getArticles, addArticle, deleteArticle, updateArticle };
