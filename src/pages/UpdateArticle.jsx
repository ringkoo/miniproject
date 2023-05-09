import React, { useState } from "react";
import Navbar from "../redux/componants/navbar/Navbar";
import { getArticle, updateArticle } from "../api/articles";
// import { updateArticle, getArticle } from "../api/articles";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router";

import {
  Container,
  LeftContainer,
  ImageDiv,
  Form,
  RightContainer,
  ImagePreview,
  Input,
  Textarea,
  Select,
  Button,
  ImageBox,
} from "../redux/componants/write/styles";

function UpdateArticle() {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState(params.title);
  const [content, setContent] = useState(params.content);
  const [image, setImage] = useState(params.image);
  const [category, setCategory] = useState(params.category);

  const { isLoading, isError, data } = useQuery("getArticle", () =>
    getArticle(params.id)
  );

  const { mutate } = useMutation(updateArticle, {
    onSuccess: () => {
      navigate(`/detailpage/${params.id}`);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ id: params.id, title, content, image, category });
  };

  //이미지 업로드를 처리하기 위한 핸들러 함수
  // input 요소에서 파일 선택이 발생했을 때 호출, 선택된 파일 정보가 event 객체로 전달

  const handleImageChange = (event) => {
    //event.target.files는 파일 선택 대화상자에서 선택된 파일 목록을 나타내는 FileList 객체
    //FileList 객체의 첫 번째 파일을 가져와서 file 변수에 할당
    const file = event.target.files[0];
    setImage(file);
  };
  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }
  return (
    <>
      <Navbar isActive={false} navigate='/areadetail'>게시글 수정</Navbar>

      <Container>
        <LeftContainer>
          {/* 이미지 추가 버튼 숨기고 div박스 추가해서 클릭 시 파일 추가 가능하게 함  */}
          <ImageDiv
            className="image-upload"
            onClick={() => {
              document.getElementById("image").click();
            }}
          >
            {image ? (
              // div 박스를 클릭해서 추가했을 때 같은 크기의 프리뷰 창으로 이미지 미리보기 가능
              <ImagePreview
                src={URL.createObjectURL(image)}
                style={{
                  objectFit: "cover", // 이미지 안잘리게 크기 맞춰서 축소
                }}
              />
            ) : (
              <ImageBox>
                <img src="http://서버주소/uploads/example.jpg" alt="example" />
              </ImageBox>
            )}
            <input
              id="image"
              type="file"
              onChange={handleImageChange}
              // 버튼 숨기기
              defaultValue={data.image}
              style={{ display: "none" }}
            />
          </ImageDiv>
        </LeftContainer>

        <RightContainer>
          <Form onSubmit={handleSubmit}>
            <div style={{ marginTop: "40px" }}>
              <Select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                // 카테고리는 수정불가하게
                disabled
                defaultValue={data.category}
              >
                <option value="">카테고리 선택</option>
                <option value="food">맛집</option>
                <option value="travel">관광지</option>
                <option value="fashion">축제</option>
              </Select>
              <Input
                id="title"
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={data.title}
              ></Input>
            </div>
            <Textarea
              id="content"
              placeholder="내용을 입력하세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              defaultValue={data.content}
            />

            <Button type="submit">수정 완료</Button>
          </Form>
        </RightContainer>
      </Container>
    </>
  );
}

export default UpdateArticle;
