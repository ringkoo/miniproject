import axios from "axios";

//조회
export const getPostlist = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/postlist`);
    return response.data;
};

//추가
export const addUsers = async (newUsers) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, newUsers);
};

//삭제
export const deletePostlist = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/postlist/${id}`);
};



