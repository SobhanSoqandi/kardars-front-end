import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const ModalContext = createContext(null);

function Modal({ children }) {
  const [open, setOpen] = useState(null);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function OpenModal({ children, name }) {
  const context = useContext(ModalContext);
  if (!context || !React.isValidElement(children)) return null;

  return cloneElement(children, {
    onClick: () => context.setOpen(name),
  });
}

export function Window({ children, name }) {
  const context = useContext(ModalContext);
  if (!context || context.open !== name) return null;

  return (
    <>
      <div
        // onClick={() => context.setOpen(null)}
        className="z-40 fixed inset-0 bg-black/20 backdrop-blur-sm"
      >
        <div className="top-[30%] left-[35%] z-50 absolute flex justify-center items-center bg-white shadow shadow-gray-400 mt-1 border-2 border-gray-400">
          {children}
        </div>
      </div>
    </>
  );
}

export function CloseBtnModal() {
  const context = useContext(ModalContext);
  if (!context) return null;

  return (
    <button
      onClick={() => context.setOpen(null)}
      className="top-1 right-1 absolute"
    >
      <IoMdCloseCircleOutline className="text-2xl" />
    </button>
  );
}

Modal.Open = OpenModal;
Modal.Window = Window;
Modal.Close = CloseBtnModal;
export default Modal;
