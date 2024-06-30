import { PropsWithChildren, createContext, useContext, useState } from "react";
import Modal, { ModalContentProps } from "../components/Modal";

interface ModalProps {
  open: (modalContent: ModalContentProps) => void;
  close: () => void;
}

const initialModalState: ModalProps = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext<ModalProps>(initialModalState);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: PropsWithChildren) {
  const [modalOptions, setModalOptions] = useState<ModalContentProps | null>(
    null
  );

  const value: ModalProps = {
    // open: ({ title, content }: ModalContentProps) => {
    //   const element = <Modal title={title} content={content} />;
    //   setModalOptions(element);
    // },
    open: (options) => {
      setModalOptions(options);
    },
    close: () => {
      setModalOptions(null);
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.content} />
      )}
    </ModalContext.Provider>
  );
}

// 고민 고민하며 살자
// 내가 만든 useModal이라고 하는 커스텀훅을 쓰는 사람들은 어케 쓰길 바랄까 ,,
// 어떤게 편리할까 ,,
// 어떻게 쓰길 기대할까?
