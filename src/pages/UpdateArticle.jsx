import React, { useState } from "react";
import Navbar from "../redux/componants/navbar/Navbar";
import { getArticle, updateArticle } from "../api/articles";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router";
import { useCookies } from "react-cookie";

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
  const [cookies] = useCookies(["authorization"]);
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState(params.title);
  const [content, setContent] = useState(params.content);
  const [image, setImage] = useState(params.image);
  const [category, setCategory] = useState(params.category);
  const [region, setRegion] = useState(params.region);

  const { isLoading, isError, data } = useQuery("getArticle", () =>
    getArticle(params.id)
  );

  const { mutate } = useMutation(updateArticle(cookies.authorization), {
    onSuccess: () => {
      navigate(`/detailpage/${params.id}`);
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const confirmed = window.confirm("글을 수정하시겠습니까?");

    if (confirmed) {
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("image", image);

        await mutate({ id: params.id, formData });
        alert("글이 성공적으로 수정되었습니다.");
      } catch (error) {
        console.error(error);
        alert("글 수정에 실패했습니다.");
      }
    }
  };
  const handleImageChange = (event) => {
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
      <Navbar isActive={false}>게시글 수정</Navbar>

      <Container>
        <LeftContainer>
          <ImageDiv
            className="image-upload"
            onClick={() => {
              document.getElementById("image").click();
            }}
          >
            {image ? (
              <ImagePreview
                src={URL.createObjectURL(image)}
                style={{
                  objectFit: "cover",
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
              accept="image/*"
              onChange={handleImageChange}
              defaultValue={data.image}
              style={{ display: "none" }}
            />
          </ImageDiv>
        </LeftContainer>

        <RightContainer>
          <Form onSubmit={handleSubmit}>
            <div style={{ marginTop: "40px", marginLeft: "145px" }}>
              <Select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled
                defaultValue={data.category}
              >
                <option value="">분야</option>
                <option value="맛집">맛집</option>
                <option value="관광지">관광지</option>
                <option value="축제">축제</option>
              </Select>
              <Select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                disabled
                defaultValue={data.region}
              >
                <option value="">지역</option>
                <option value="서울">서울</option>
                <option value="경기">경기</option>
                <option value="강원">강원</option>
                <option value="충청">충청</option>
                <option value="경상">경상</option>
                <option value="전라">전라</option>
                <option value="제주">제주</option>
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
