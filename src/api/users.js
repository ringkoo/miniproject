import axios from "axios";

//회원 가입
export const addUsers = async (newUsers) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, newUsers);
    console.log(response)
};




//로그인
export const loginUsers = async (inUsers) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, inUsers);
    const authorization = response.headers.get("authorization").split(" ")[1]
    return authorization
}


// //삭제
// export const deletePostlist = async (id) => {
//     await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${id}`);
// };

// 데이터 조회
// export const getUsers = async () => {
//     const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
//     return data;
// }