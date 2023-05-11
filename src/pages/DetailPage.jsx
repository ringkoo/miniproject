import React, { useEffect } from "react";
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
import { useCookies } from "react-cookie";

function DetailPage() {
  const [cookies] = useCookies(["authorization"]);
  const params = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("getArticle", () =>
    getArticle(params.id)
  );
  // console.log(data.comments);
  const [commentContent, setCommentContent] = useState("");
  // const [currentUser, setCurrentUser] = useState(null); // 현재 사용자 정보

  // // 현재 사용자 정보를 가져오는 함수
  // const fetchCurrentUser = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_SERVER_URL}/current-user`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       }
  //     );
  //     const user = await response.json();
  //     setCurrentUser(user);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // // 페이지가 처음 로드될 때 현재 사용자 정보를 가져옴
  // useEffect(() => {
  //   fetchCurrentUser();
  // }, []);

  const { mutate } = useMutation(
    (content) => postComment(params.id, content, cookies.authorization),
    {
      onSuccess: () => {
        setCommentContent("");
        refetchComments();
      },
    }
  );

  const {
    isLoading: isLoadingComments,
    isError: isErrorComments,
    data: comments,
    refetch: refetchComments,
  } = useQuery("getComments", () => getComments(params.id));
  // console.log(getComments);
  const handleDeleteComment = async (commentId) => {
    await deleteComments(commentId, cookies.authorization);

    refetchComments();
  };

  const handleDeleteArticle = async () => {
    const confirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmed) {
      await deleteArticle(params.id, cookies.authorization);
      navigate("/areadetail");
    }
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (window.confirm("댓글을 등록하시겠습니까?")) {
      mutate(commentContent);

      // console.log(commentContent);

      setCommentContent("");
    }
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
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/uploads/${data.id}.jpg`}
              alt="example"
            />
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
          <p>작성자 {data.nickname} </p>

          {/* data.userId는 게시글 작성자의 ID를 의미,
           currentUser.id는 현재 로그인한 사용자의 ID. 
           두 값이 일치할 때에만 수정/삭제 버튼이 보이도록 구현 */}
          {/* {data.userId === currentUser.id && ( */}
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
          {/* ) } */}
        </ArticleBottom>
      </WrapperTop>
      <WrapperBottom>
        <h2>댓글</h2>

        {/* {localStorage.getItem("accessToken") ? ( */}
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
        {/* ) : null} */}
        {data.comments &&
          data.comments.map((comment) => (
            <CommentWrapper key={comment.id}>
              {/* {console.log(data)} */}
              <p style={{ marginLeft: "10px" }}>지역{comment.region} </p>
              <p style={{ marginLeft: "10px", flexGrow: 1 }}>
                {comment.nickname}{" "}
              </p>
              <CommentContent>&nbsp; {comment.content}</CommentContent>
              <p style={{ marginRight: "20px" }}>{comment.createdAt}</p>
              <DeleteButtonWrapper>
                {/* {localStorage.getItem("accessToken") &&
                data.userId ===
                  JSON.parse(localStorage.getItem("userInfo")).id ? ( */}
                <button
                  style={{ margin: "10px" }}
                  onClick={() => {
                    handleDeleteComment(comment.id);
                  }}
                >
                  삭제
                </button>
                {/* ) : null} */}
              </DeleteButtonWrapper>
            </CommentWrapper>
          ))}
      </WrapperBottom>
    </>
  );
}

export default DetailPage;
