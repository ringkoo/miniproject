import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "react-query";
import { addArticle } from "../../../api/articles";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
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
} from "./styles";

// 깃터짐 테스트용 주석

function Write() {
  // const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(addArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("getArticle");
      console.log("성공하였습니다!");
    },
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!auth.isAuthenticated) {
    //   alert("로그인 후 글 작성이 가능합니다.");
    //   return;
    // }

    if (!title || !content || !category || !image || !region) {
      alert("제목, 내용, 분야,지역, 이미지를 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("region", region);
    formData.append("image", image);

    mutation.mutate(formData);

    // for (let data of formData) {
    //   console.log(data);
    // }

    navigate("/areadetail");
    // }
  };

  return (
    <>
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
              <ImageBox>이미지 추가</ImageBox>
            )}
            <input
              id="image"
              type="file"
              onChange={handleImageChange}
              // 버튼 숨기기
              style={{ display: "none" }}
            />
          </ImageDiv>
        </LeftContainer>

        <RightContainer>
          <Form onSubmit={handleSubmit}>
            <div
              style={{
                marginTop: "40px",

                marginLeft: "145px",
              }}
            >
              <Select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
              />
            </div>
            <Textarea
              id="content"
              placeholder="내용을 입력하세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />{" "}
            <Button type="submit">작성</Button>
          </Form>
        </RightContainer>
      </Container>
    </>
  );
}

export default Write;
