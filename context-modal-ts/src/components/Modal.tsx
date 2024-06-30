import { useModal } from "../contexts/modal.context";
import Backdrop from "./Backdrop";

export interface ModalContentProps {
  title: string;
  content: string;
}

const Modal = ({ title, content }: ModalContentProps) => {
  const modal = useModal();

  return (
    <Backdrop>
      <article className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={() => modal.close()}>닫기</button>
      </article>
    </Backdrop>
  );
};

export default Modal;
