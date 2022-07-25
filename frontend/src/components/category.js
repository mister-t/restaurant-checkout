import React from 'react';

const category = ({name, id, numOfTabs, isActive}) => {
  console.log('isActive = ', isActive)
  const classNames = `flex justify-center cursor-pointer ${isActive ? "bg-softBlue border-b md:border-b-0 " : "border-b-8 border-softBlue"} md:w-1/${numOfTabs} tab`;
  return (
    <div
      className={classNames}
      data-target={id}
    >
      <div className="py-5 text-white" data-target={id}>{name}</div>
    </div>
  );
};

export default category;