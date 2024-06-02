import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const initialValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [modalOptions, setModalOptions] = useState(null);
  const scrollLock = useScrollLock();

  // 인터페이스를 설계한다 ... api를 설계한다,,
  const value = {
    open: (options) => {
      setModalOptions(options);
      scrollLock.lock();
    },
    close: () => {
      setModalOptions(null);
      scrollLock.release();
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} contents={modalOptions.contents} />
      )}
    </ModalContext.Provider>
  );
}

// 내가 만든 useModal이라는 커스텀훅을 .. 쓰는 사람들은
// 어떤 방식으로 쓰는게 편리할까
// 무얼 쓰기를 기대할까?
