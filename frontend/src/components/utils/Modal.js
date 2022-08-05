import { Children } from 'react';

const Modal = ({ children, setModalVisible, setChoice }) => {
  const onSaveHandler = evt => {
    setChoice(true);
    setModalVisible(false);
  };

  const onCancelHandler = evt => {
    setChoice(false);
    setModalVisible(false);
  };

  return (
    <div className="modal-overlay bg-slate-800/80 fixed inset-0 z-50">
      <div className="modal flex items-center justify-center h-screen">
        <div className="flex-col justify-between bg-white text-center py-12 px-24 rounded-md md:py-6 md:px-6 md:w-1/2">
          {children}
          {/* <h1 className="text-lg mb-10">Are you sure?</h1>
          <button onClick={onCancelHandler} className="rounded px-4 py-2 text-slate-800">No</button>
          <button onClick={onSaveHandler} className="rounded px-4 py-2 text-slate-800">Yes</button> */}
        </div>
      </div>
    </div >
  );
}

export default Modal;