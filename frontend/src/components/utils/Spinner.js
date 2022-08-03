const Spinner = ({ size = 40 }) => {
  return (
    <div className="flex items-center justify-center">
      <div className={`w-${size} h-${size} border-l-2 border-gray-900 rounded-full animate-spin`}></div>
    </div>
  )
};

export default Spinner;