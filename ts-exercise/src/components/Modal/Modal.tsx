import { useModal } from "./Modal.context";

function Modal() {
  const modal = useModal();

  const handlerCloseModal = () => {
    modal.close();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-80 h-40 p-8">
        내가 모달 본체다.
        <button onClick={handlerCloseModal}> [ X ] </button>
      </div>
    </div>
  );
}

export default Modal;
