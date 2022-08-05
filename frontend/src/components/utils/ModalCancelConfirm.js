const ModalCancelConfirm = ({ title = 'Modal Title', content = 'Modal Content', size = 'max-w-md', cancelBtn = 'Cancel', saveBtn = 'Save', isHidden = true, cancelClearOrder, clearOrder }) => {

  const onCancelHandler = (evt) => {
    cancelClearOrder();
  };

  const onSaveHandler = (evt) => {
    clearOrder();
  };

  const modal = !isHidden &&
    (<div className={`container flex justify-center mx-auto ${size}`}>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div className="max-w-sm p-6 bg-white divide-y divide-gray-500">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl text-black">{title}</h3>
          </div>
          <div className="mt-4">
            <p className="mb-4 text-sm text-black">{content}</p>
            <button className="px-4 py-2 text-black bg-red-600 rounded" onClick={onCancelHandler}>{cancelBtn}</button>
            <button className="px-4 py-2 text-black bg-green-600 rounded" onClick={onSaveHandler}>{saveBtn}</button>
          </div>
        </div>
      </div>
    </div>
    );
  return modal;
}

export default ModalCancelConfirm;