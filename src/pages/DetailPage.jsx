import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticle, deleteArticle } from "../api/articles";
import { postComment, getComments, deleteComments } from "../api/comments";
import { useState } from "react";
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
import { useQuery, useMutation } from "react-query";
import Navbar from "../redux/componants/navbar/Navbar";

// 깃터짐 테스트용 주석

function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("getArticle", () =>
    getArticle(params.id)
  );
  const [commentContent, setCommentContent] = useState("");

  //useMutation : 서버와 상호작용하는 함수를 실행하면서 mutation 상태를 관리
  //첫 번째 매개변수는 mutation 함수이고, 두 번째 매개변수는 mutation에 대한 설정 객체.
  //postComment 함수는 첫 번째 인자로 게시물 ID를 받고, 두 번째 인자로는 작성한 댓글 내용을 받는다.
  const { mutate } = useMutation((content) => postComment(params.id, content), {
    //mutation 상태 관리
    //성공했을 때 쿼리 무효화, 댓글 작성란 비우기
    onSuccess: () => {
      // queryClient.invalidateQueries("getArticle");
      // queryClient.invalidateQueries("getComments");
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
    // 댓글목록 다시 가져오기
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
            <img src="http://서버주소/uploads/example.jpg" alt="example" />
          </ArticleImage>
          <ArticleBody>
            <div>
              <h2>&nbsp;{data.content}</h2>
            </div>
          </ArticleBody>
        </SecondWrapper>
        <ArticleBottom>
          {/* <p style={{ marginLeft: "10px" }}>좋아요 수 {data.goodCount} </p> */}
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
        {/* 댓글 쓸 때마다 늘어나게 하기*/}
        <PostComment>
          {/* 댓 작성 공간 */}
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
              {/* 댓글  작성자 정보 */}
              <p style={{ marginLeft: "10px" }}>지역 </p>
              <p style={{ marginLeft: "10px", flexGrow: 1 }}>닉네임 </p>
              {/* 댓글 내용 */}
              <CommentContent>&nbsp; {comment.content}</CommentContent>
              {/* 작성시간 */}
              <p style={{ marginRight: "20px" }}>{comment.createdAt}</p>
              {/* 삭제 버튼 */}
              <DeleteButtonWrapper>
                <button
                  style={{ margin: "10px" }}
                  onClick={() => {
                    handleDeleteComment(comment.id);
                    // console.log(comment.id);
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
