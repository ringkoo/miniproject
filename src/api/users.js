import axios from "axios";

//조회
export const getUsers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
    return response.data;
};

//추가
export const addUsers = async (newUsers) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, newUsers);
};

//삭제
export const deletePostlist = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${id}`);
};
