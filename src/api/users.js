import axios from "axios";

//조회
export const getPostlist = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/postlist`);
    return response.data;
};

//추가
export const addPostlist = async (newTodo) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/postlist`, newTodo);
};

//삭제
export const deletePostlist = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/postlist/${id}`);
};



