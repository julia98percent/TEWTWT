//PostView 게시글 세부정보 컴포넌트
import React, { useEffect, useState } from "react";
import { getPostByNo } from "../Data";
import { database } from "../firebase.utils";

const PostView = ({ history, location, match }) => {
  const [data, setData] = useState({});
  //router를 통해 컴포넌트가 렌더링 될 때 컴포넌트 props로 history, location, match 객체들이 전달됨
  //router 파라미터로 넘어온 no 값으로 useEffect()를 통해 게시글 정보를 가져올 수 있도록 하고
  // 목록으로 돌아가기 버튼을 클릭했을때 뒤로가기와 같은 Action인 history.goBack()함수 호출
  const { no } = match.params;

  useEffect(() => {
    setData(getPostByNo(no));
  }, []);

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {data ? (
          <>
            <div className="post-view-row">
              <label>게시글 번호</label>
              <label>{data.no}</label>
            </div>
            <div className="post-view-row">
              <label>제목</label>
              <label>{data.title}</label>
            </div>
            <div className="post-view-row">
              <label>작성일</label>
              <label>{data.createDate}</label>
            </div>
            <div className="post-view-row">
              <label>조회수</label>
              <label>{data.readCount}</label>
            </div>
            <div className="post-view-row">
              <label>내용</label>
              <div>{data.content}</div>
            </div>
          </>
        ) : (
          "해당 게시글을 찾을 수 없습니다."
        )}
        <button
          className="post-view-go-list-btn"
          onClick={() => history.goBack()}
        >
          목록으로 돌아가기
        </button>
      </div>
    </>
  );
};

export default PostView;
