import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticle, deleteArticle } from "../api/articles";
import { postComment, getComments, deleteComments } from "../api/comments";
import { useState } from "react";
import {  WrapperTop,  SecondWrapper,  ArticleImage,  ArticleBody,  ArticleTitle,  WrapperBottom,  ArticleBottom,  CommentInput,  Button,  PostComment,  CommentWrapper,  CommentContent,  DeleteButtonWrapper} from "../redux/componants/detailPage/styles";
import { useQuery, useMutation } from "react-query";
import Navbar from "../redux/componants/navbar/Navbar";

function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("getArticle", () =>
    getArticle(params.id)
  );
  const [commentContent, setCommentContent] = useState("");

  const { mutate } = useMutation((content) => postComment(params.id, content), {
    onSuccess: () => {
      setCommentContent("");
      refetchComments();
    },
  });

  const {
    isLoading: isLoadingComments,
    isError: isErrorComments,
    data: comments,
    refetch: refetchComments,
  } = useQuery("getComments", () => getComments(params.id));

  const handleDeleteComment = async (commentId) => {
    await deleteComments(commentId);

    refetchComments();
  };

  const handleDeleteArticle = async () => {
    const confirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmed) {
      await deleteArticle(params.id);
      navigate("/areadetail");
    }
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    mutate(commentContent);

    setCommentContent("");
  };
  if (isLoading || isLoadingComments) {
    return <div>로딩중입니다...</div>;
  }
  if (isError || isErrorComments) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <>
      <Navbar isActive={false}>게시글 상세페이지</Navbar>
      <WrapperTop>
        <ArticleTitle>
          {data.category} / {data.title}
        </ArticleTitle>
        <SecondWrapper>
          <ArticleImage>
            {/* <img src="http://서버주소/uploads/example.jpg" alt="example" /> */}
          </ArticleImage>
          <ArticleBody>
            <div>
              <h2>&nbsp;{data.content}</h2>
            </div>
          </ArticleBody>
        </SecondWrapper>
        <ArticleBottom>
          <p style={{ marginLeft: "10px" }}>지역 {data.region} </p>
          <p>&nbsp;작성 시간 {data.createdAt}</p>
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
                navigate(`/detailpage/${params.id}/update`);
              }}
            >
              수정
            </Button>
            <Button onClick={handleDeleteArticle}>삭제</Button>
          </div>
        </ArticleBottom>
      </WrapperTop>
      <WrapperBottom>
        <h2>댓글</h2>

        <PostComment>
          <p style={{ marginLeft: "10px" }}>지역 </p>
          <p style={{ marginLeft: "10px" }}>닉네임 </p>
          <CommentInput
            placeholder="&nbsp;내용을 입력해주세요."
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          ></CommentInput>
          <p style={{ marginRight: "20px" }}></p>
          <button
            type="submit"
            style={{ margin: "10px" }}
            onClick={handleSubmitComment}
          >
            작성
          </button>
        </PostComment>
        {comments &&
          comments.map((comment) => (
            <CommentWrapper key={comment.id}>
              <p style={{ marginLeft: "10px" }}>지역{comment.region} </p>
              <p style={{ marginLeft: "10px", flexGrow: 1 }}>
                작성자
                {comment.nickname}{" "}
              </p>

              <CommentContent>&nbsp; {comment.content}</CommentContent>

              <p style={{ marginRight: "20px" }}>{comment.createdAt}</p>

              <DeleteButtonWrapper>
                <button
                  style={{ margin: "10px" }}
                  onClick={() => {
                    handleDeleteComment(comment.id);
                  }}
                >
                  삭제
                </button>
              </DeleteButtonWrapper>
            </CommentWrapper>
          ))}
      </WrapperBottom>
    </>
  );
}

export default DetailPage;
