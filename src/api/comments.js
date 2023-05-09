import axios from "axios";

// 댓글 작성
export const postComment = async (id, content) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/detailpage/${id}/comments`,
    { content }
  );
  return response.data;
};

// 댓글 조회
export const getComments = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/detailpage/${id}/comments`
  );
  return response.data;
};

//댓글 삭제
export const deleteComments = async (id) => {
  console.log(id);
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/detailpage/${id}`
  );
  return response.data;
};
