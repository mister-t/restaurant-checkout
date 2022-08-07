const Modal = ({ children }) => {
  return (
    <div className="modal-overlay bg-white/95 fixed inset-0 z-50">
      <div className="modal flex items-center justify-center h-screen overflow-y-scroll">
        <div className="flex-col justify-between bg-white text-center py-12 px-24 rounded-md md:py-6 md:px-6 md:w-1/2">
          {children}
        </div>
      </div>
    </div >
  );
}

export default Modal;