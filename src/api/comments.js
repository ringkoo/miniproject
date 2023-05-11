import axios from "axios";

// 댓글 작성

export const postComment = async (id, content, token) => {
  if (!content) {
    alert("댓글 내용을 입력해주세요.");
    return;
  }

  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/comments/${id}`,
    { content },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    // 토큰!
  );
  console.log(token);

  return response.data;
};

// 댓글 조회
export const getComments = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/posts/${id}`
  );
  return response.data;
};

//댓글 삭제
export const deleteComments = async (id, token) => {
  const confirmed = window.confirm("정말로 삭제하시겠습니까?");
  if (!confirmed) {
    return; // 삭제 취소
  }
  // console.log(id);
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/comments/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
