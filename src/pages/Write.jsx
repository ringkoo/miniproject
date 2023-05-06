import styled from "styled-components";
import Navbar from "../redux/componants/navbar/Navbar";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  max-width: 100%;
`;

const LeftContainer = styled.div`
  flex: 1;
  margin-left: 50px;
  margin-right: 50px;
  height: 720px;
  /* margin-bottom: 50px; */
  /* border: 1px solid blue; */
`;

const ImagePreview = styled.img`
  max-width: 100%;

  /* border: 1px solid blue; */
`;

const RightContainer = styled.div`
  flex: 2;
  /* border: 1px solid blue; */

  /* flex-direction: row; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-left: 58px;
  width: 45%;
  padding: 10px;
  font-size: 16px;
  /* border: none; */
  border: 1px solid #ccc;
  /* border-bottom: 1px solid #ccc; */
  margin-bottom: 20px;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  margin-left: 180px;
  margin-top: 20px;
  width: 70%;
  height: 500px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  /* border: none; */
  margin-bottom: 40px;
  border-radius: 8px;
  resize: none;
`;

const Select = styled.select`
  width: 20%;
  margin-left: 180px;
  padding: 10px;
  font-size: 16px;
  /* border: none; */
  border: 1px solid #ccc;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 120px;
  margin-right: 160px;
  padding: 5px 10px;
  font-size: 18px;
  background-color: #4e5257;
  color: #fff;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  /* text-align: right; */
  transition: background-color 0.2s ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: #1a1b1d;
  }
`;

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //이미지 업로드를 처리하기 위한 핸들러 함수
  // input 요소에서 파일 선택이 발생했을 때 호출, 선택된 파일 정보가 event 객체로 전달

  const handleImageChange = (event) => {
    //event.target.files는 파일 선택 대화상자에서 선택된 파일 목록을 나타내는 FileList 객체
    //FileList 객체의 첫 번째 파일을 가져와서 file 변수에 할당
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <>
      <Navbar isActive={false}>글쓰기</Navbar>

      <Container>
        <LeftContainer>
          <div
            className="image-upload"
            style={{
              alignSelf: " flex-end",
            }}
          >
            {/* image state에 값이 있으면 URL.createObjectURL() 함수를 사용해서
             파일의 URL을 생성하고, 그것을 ImagePreview 컴포넌트로 전달 */}
            {image && <ImagePreview src={URL.createObjectURL(image)} />}
            <label htmlFor="image">이미지 업로드</label>
            <input id="image" type="file" onChange={handleImageChange} />
          </div>
        </LeftContainer>

        <RightContainer>
          <Form onSubmit={handleSubmit}>
            <div style={{ marginTop: "40px" }}>
              <Select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
              />
            </div>
            <Textarea
              id="content"
              placeholder="내용을 입력하세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <Button type="submit">작성</Button>
          </Form>
        </RightContainer>
      </Container>
    </>
  );
}

export default Write;
