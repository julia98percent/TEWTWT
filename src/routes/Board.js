import React from "react";
import PostList from "../components/PostList";

function Board() {
  return (
    <div>
      <select>
        <option>제목</option>
        <option>내용</option>
        <option>작성자</option>
      </select>
      <input placeholder="검색하세유~~"></input>
      <PostList />
      <button>글 쓰기</button>
    </div>
  );
}

export default Board;
