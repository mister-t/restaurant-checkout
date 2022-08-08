import Modal from '../utils/Modal';

const ModalCancel = ({ title = "Cancel Order?", yesBtnText = "Yes", noBtnText = "No", setModalVisible, onYesHandler, onNoHandler }) => {
  return (
    <Modal>
      <div className="flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-16 w-16 md:h-28 md:w-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-slate-500 text-2xl md:tracking-wide font-bold mb-11 pt-2 md:text-5xl">{title}</h1>
        <div className='w-full md:1/2'>
          <button className="w-1/3 mx-3 bg-slate-800/30 rounded font-bold text-xl px-0 py-2 text-white text-center md:mx-4 md:w-1/5 md:px-4" onClick={onYesHandler}>{yesBtnText}</button>
          <button className="w-1/3 mx-3 bg-mgPurple rounded font-bold text-xl px-0 py-2 text-white text-center md:mx-4 md:w-1/5 md:px-4" onClick={onNoHandler}>{noBtnText}</button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalCancel;