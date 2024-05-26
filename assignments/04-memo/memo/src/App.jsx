import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import "./App.css";
import { addMemo, selectMemo, updateMemo } from "./redux/memo.reducer";

// TODO : Redux, styled-components
// TODO : 메모에 대한 CRUD / 1page
// TODO : **선택** React Router v6의 nested router를 사용해서 각 메모의 상세를 라우트로 구현
// TODO : **선택** localStorage API를 사용
// TODO : **선택** 사용자 입력을 debounce 처리

const MemoWrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: rgb(255, 255, 255);
  margin: 0px auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;

const MemoListWrapper = styled.aside`
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

const MemoInputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const MemoListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;

  button {
    all: unset;
    font-size: 13px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(128, 128, 128);
    transition: all 120ms ease 0s;
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;

const MemoInputHeader = styled.span`
  color: rgb(128, 128, 128);
  font-size: 10px;
  margin: 0px auto 24px;
`;

const MemoInputArea = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
`;

const MemoLists = styled.ul`
  padding: 20px 12px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0px;
  overflow-x: hidden;
`;

const MemoList = styled.li`
  height: 56px;
  border-radius: 4px;
  background-color: ${({ selected }) =>
    selected ? "rgb(255, 224, 127)" : "rgb(255, 255, 255)"};
  width: 100%;
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const App = () => {
  const [newMemo, setNewMemo] = useState("");
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memo.memos);
  const selectedMemo = useSelector((state) => state.memo.selectedMemo);

  useEffect(() => {
    if (memos.length === 0) {
      console.log("1");
      const initialMemoId = new Date().getTime();
      dispatch(
        addMemo({
          id: initialMemoId,
          text: "",
          date: new Date().toLocaleString(),
        })
      );
      dispatch(selectMemo(initialMemoId));
    }
  }, [memos.length, dispatch]);

  useEffect(() => {
    console.log("2");
    if (memos.length > 0 && !selectedMemo) {
      dispatch(selectMemo(memos[0].id));
    }
  }, [memos, selectedMemo, dispatch]);

  useEffect(() => {
    if (selectedMemo) {
      setNewMemo(selectedMemo.text);
    }
  }, [selectedMemo]);

  const handleMemoChange = (e) => {
    const updatedText = e.target.value;
    setNewMemo(updatedText);
    if (selectedMemo) {
      dispatch(updateMemo({ id: selectedMemo.id, text: updatedText }));
    }
  };

  const handleNewMemoClick = () => {
    const newMemoId = new Date().getTime();
    dispatch(
      addMemo({
        id: newMemoId,
        text: "",
        date: new Date().toLocaleString(),
      })
    );
    dispatch(selectMemo(newMemoId));
    setNewMemo("");
  };

  const handleMemoSelect = (id) => {
    dispatch(selectMemo(id));
  };

  const currentDate = new Date().toLocaleString();

  return (
    <MemoWrapper>
      <MemoListWrapper>
        <MemoListHeader>
          <button onClick={handleNewMemoClick}>새 메모 작성하기</button>
          <button>삭제</button>
        </MemoListHeader>
        <MemoLists>
          {memos.map((memo) => (
            <MemoList
              key={memo.id}
              selected={memo.id === selectedMemo?.id}
              onClick={() => handleMemoSelect(memo.id)}
            >
              <div>
                {memo.text.length > 0
                  ? `${memo.text.slice(0, 10)}...`
                  : memo.text || "새로운 메모"}
              </div>
              <small>{memo.date}</small>
            </MemoList>
          ))}
        </MemoLists>
      </MemoListWrapper>
      <MemoInputWrapper>
        <MemoInputHeader>{currentDate}</MemoInputHeader>
        <MemoInputArea
          placeholder="새로운 메모"
          value={newMemo}
          onChange={handleMemoChange}
        ></MemoInputArea>
      </MemoInputWrapper>
    </MemoWrapper>
  );
};

export default App;
