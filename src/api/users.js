import axios from "axios";

//회원 가입
export const addUsers = async (newUsers) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, newUsers);
    console.log(response)
  } catch (error) {
    console.log(error)
  }
};




//로그인
export const loginUsers = async (inUsers) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, inUsers);
    console.log(response)
    const authorization = response.headers.get("authorization").split(" ")[1]
    const authorization2 = response.headers.get("refreshtoken").split(" ")[1]
    console.log(authorization)
    console.log("리프레쉬토큰", authorization2)
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