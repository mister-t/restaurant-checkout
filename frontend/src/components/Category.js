import React from 'react';

const category = ({name, id, numOfTabs, isActive}) => {
  const classNames = `grow text-xl text-center py-5 text-white cursor-pointer ${isActive ? "bg-softBlue border-b md:border-b-0 " : "border-b-8 border-softBlue"}`;
  return (
    <div className={classNames} data-target={id}>{name}</div>
  );
};

export default category;