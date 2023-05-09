import styled from "styled-components";

const WrapperTop = styled.div`
  position: relative;
  width: 80%;
  margin: 50px auto;
  min-height: 400px;
  border: 3px solid #a1beff;
  background-color: #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecondWrapper = styled.div`
  width: 80%;
  margin: 30px auto;

  border-radius: 5px;
  display: flex;
`;

const ArticleImage = styled.div`
  border: 2px solid #a1beff;
  height: 400px;

  width: 40%;
  margin-top: 80px;
  margin-right: 100px;
`;

const ArticleBody = styled.div`
  border: 2px solid #a1beff;
  background-color: #eee;
  margin-top: 50px;
  height: 500px;
  width: 50%;
  margin-left: 100px;
`;

const ArticleTitle = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
`;

const WrapperBottom = styled.div`
  width: 80%;
  margin: 50px auto;
  border-radius: 5px;
`;
const ArticleBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  & > p {
    margin-right: 50px;
    font-size: 20px;
  }
`;
const CommentInput = styled.input`
  border-radius: 5px;
  border: none;
  margin: 5px auto 5px auto;
  width: 70%;
`;

const Button = styled.button`
  color: white;
  background-color: #a1beff;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 10px;
  border: none;
  line-height: 30px;
  padding: 5px;
  width: 100px;
  text-align: center;
  &:hover {
    color: #ffffff;
    background-color: #c1beff;
    cursor: pointer;
  }
`;

const PostComment = styled.div`
  background-color: #a1beff;
  border-radius: 5px;
  display: flex;
  margin-bottom: 10px;
`;

const CommentWrapper = styled.div`
  display: flex;
  background-color: #a1beff;

  border-radius: 5px;
  margin-bottom: 10px;

  flex-wrap: wrap;
`;
const CommentContent = styled.p`
  width: 60%;
  margin: 5px 120px 5px auto;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const DeleteButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export {
  WrapperTop,
  SecondWrapper,
  ArticleImage,
  ArticleBody,
  ArticleTitle,
  WrapperBottom,
  ArticleBottom,
  CommentInput,
  Button,
  PostComment,
  CommentWrapper,
  CommentContent,
  DeleteButtonWrapper,
};
