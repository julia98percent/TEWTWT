// PostList.js - 게시글 목록 컴포넌트
// 제목 예시) 지원님의 3월 20일 TIL ! ❤️
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonTable from "./CommonTable";
import CommonTableColumn from "./CommonTableColumn";
import CommonTableRow from "./CommonTableRow";
import { postList } from "../Data";

const PostList = (props) => {
  //컴포넌트 내부에서 state 변수로 사용될 dataList를 useState()를 통하여 생성
  const [dataList, setDataList] = useState([]);
  // useEffect()로 컴포넌트가 최초로 render 되었을 때
  // 위에서 생성해준 postList(데이터 목록)를 setDataList() 함수를 이용해
  //dataList의 값을 초기화 해주도록 함
  useEffect(() => {
    setDataList(postList);
  }, []);

  return (
    <>
      <CommonTable headersName={["글번호", "제목", "등록일", "조회수"]}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`PostView/${item.no}`}>{item.title}</Link>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.createDate}</CommonTableColumn>
                  <CommonTableColumn>{item.readCount}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </>
  );
};

export default PostList;
