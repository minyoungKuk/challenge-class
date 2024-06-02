import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "../components/Toast";

const initialValue = () => {};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = uuidv4();
    setToasts((prevState) => [...prevState, { ...toast, id }]);

    setTimeout(() => {
      removeToast(id);
    }, toast.duration);
  };

  const removeToast = (id) => {
    setToasts((prevToast) => prevToast.filter((toast) => toast.id !== id));
  };

  const value = { addToast, removeToast };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
        {toasts.map((toast) => (
          <Toast key={toast.id} title={toast.title} content={toast.content} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
