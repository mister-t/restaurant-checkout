import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveCategory, setActiveCategory } from '../actions/categoryActions';

const Category = ({ catId, catName, isActive }) => {
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    const catId = evt.target.getAttribute('data-target');
    console.log(catId);
    // setIsActive(true);
  }

  // const activeCategory = useSelector(state => state.activeCategory);
  // if (activeCategory && !!activeCategory.activeCategoryId
  //   && catId === activeCategory.activeCategoryId) {
  //   console.log(`Category '${catName}' is the active category`)
  //   // setIsActive(true);
  // }

  useEffect(() => {
    // dispatch(getActiveCategory());

    // if (isActive) {
    //   dispatch(setActiveCategory(catId));
    // }
  }, [dispatch, isActive, catId]);

  const classNames = `grow text-xl text-center py-5 text-white cursor-pointer ${isActive ? "bg-softBlue border-b md:border-b-0 " : "border-b-8 border-softBlue"}`;

  return (
    <div className={classNames} data-target={catId} onClick={(evt) => handleClick(evt)}>{catName}</div>
  );
}

export default Category;