import React from "react";
import { useModal } from "../contexts/modal.context";
import Backdrop from "./Backdrop";

function Modal({ title, contents }) {
  const modal = useModal();
  console.log(modal);

  return (
    <Backdrop>
      <article className="modal">
        <h2> {title} </h2>
        <p> {contents} </p>
        <button onClick={() => modal.close()}>닫기</button>
      </article>
    </Backdrop>
  );
}

export default Modal;
