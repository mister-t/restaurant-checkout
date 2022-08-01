import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../actions/categoryActions';

const Category = ({ catId, catName, isActive }) => {
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    const catId = evt.target.getAttribute('data-target');
    console.log(catId);
    dispatch(setActiveCategory(catId));
  }

  const classNames = `grow text-xl text-center py-5 text-white cursor-pointer ${isActive ? "bg-softBlue border-b md:border-b-0 " : "border-b-8 border-softBlue"}`;

  return (
    <div className={classNames} data-target={catId} onClick={(evt) => handleClick(evt)}>{catName}</div>
  );
}

export default Category;