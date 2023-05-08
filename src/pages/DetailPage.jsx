import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticle } from "../api/articles";
import {
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
} from "../redux/componants/detailPage/styles";
import { useQuery } from "react-query";

// import { useParams } from "react-router-dom";

function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery(["getArticle", params.id], () =>
    getArticle(params.id)
  );

  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  // console.log(params.id);
  return (
    <>
      <WrapperTop>
        <ArticleTitle>
          {data.category} / {data.title}
        </ArticleTitle>
        <SecondWrapper>
          <ArticleImage>
            <img src="" alt="Article" />
          </ArticleImage>
          <ArticleBody>
            <div>{data.content}</div>
          </ArticleBody>
        </SecondWrapper>
        <ArticleBottom>
          <p style={{ marginLeft: "10px" }}>좋아요 수 {data.goodCount} </p>
          <p>작성 시간 {data.createdAt}</p>
          <p>작성자{data.nickname} </p>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "10px",
            }}
          >
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => {
                navigate("/updatearticle");
              }}
            >
              수정
            </Button>
            <Button>삭제</Button>
          </div>
        </ArticleBottom>
      </WrapperTop>
      <WrapperBottom>
        <h2>댓글</h2>
        {/* 댓글 쓸 때마다 늘어나게 하기*/}
        <PostComment>
          {/* 댓 작성 공간 */}
          <p style={{ marginLeft: "10px" }}>프로필 </p>
          <p style={{ marginLeft: "10px" }}>닉네임 </p>
          <CommentInput placeholder="&nbsp;내용을 입력해주세요."></CommentInput>
          <p style={{ marginRight: "20px" }}>작성 시간</p>
          <button style={{ margin: "10px" }}>작성</button>
        </PostComment>
        <CommentWrapper>
          {/* 댓글  작성자 정보 */}
          <p style={{ marginLeft: "10px" }}>프로필 </p>
          <p style={{ marginLeft: "10px", flexGrow: 1 }}>닉네임 </p>
          {/* 댓글 내용 */}
          <CommentContent>&nbsp;댓 내용</CommentContent>
          {/* 작성시간 */}
          <p style={{ marginRight: "20px" }}>작성 시간 </p>
          {/* 삭제 버튼 */}
          <DeleteButtonWrapper>
            <button style={{ margin: "10px" }}>삭제</button>
          </DeleteButtonWrapper>
        </CommentWrapper>
      </WrapperBottom>
    </>
  );
}

export default DetailPage;
