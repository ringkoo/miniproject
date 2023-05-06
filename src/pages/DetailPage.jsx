import React from "react";
import { useNavigate } from "react-router-dom";
function DetailPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <h1> 카테고리 이름/ 글 제목</h1>
          <div>이미지 </div>
          <div> 본문</div>
        </div>
        <div>
          <p>좋아요 </p>
          <p>작성 시간 </p>
          <p>작성자 닉네임 </p>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/updatearticle");
            }}
          >
            수정
          </button>
          <button>삭제</button>
        </div>
      </div>
      <div>
        댓글
        {/* 댓글 쓸 때마다 늘어나게 하기*/}
        <div>
          {/* 댓 작성 공간 */}
          <p>프로필 </p>
          <p>닉네임 </p>
          <input placeholder="내용을 입력해주세요."></input>
          <p>작성 시간</p>
          <button>작성</button>
        </div>
        <div>
          {/* 댓 보여주는 공간 */}
          <p>프로필 </p>
          <p>닉네임 </p>
          <p>댓 내용</p>
          <p>작성 시간</p>
          <button>삭제</button>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
