import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories, getActiveCategory, setActiveCategory } from '../actions/categoryActions';

import { DEFAULT_CATEGORY_NAME } from '../constants';
import Category from '../components/Category';

const Categories = () => {
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const dispatch = useDispatch();

  const categoryList = useSelector(state => state.categoryList);
  const { loading, error, categories } = categoryList;

  const activeCategory = useSelector(state => state.activeCategory);

  // if (!activeCategory.activeCategoryId && categories && categories.length) {
  //   const defaultCategory = categories.find(cat => cat.name.toLowerCase() === DEFAULT_CATEGORY_NAME.toLowerCase());
  //   dispatch(setActiveCategory(defaultCategory._id));
  // setIsActiveCategory(true);
  // }

  useEffect(() => {
    dispatch(listCategories());
    // dispatch(getActiveCategory());
  }, [dispatch]);

  return (
    <div className="flex flex-col mx-auto mb-6 md:flex-row">
      {
        (loading || categories.length === 0) ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (
          categories.map((cat) => (
            <Category
              key={cat._id}
              catId={cat._id}
              catName={cat.name}
              isActive={isActiveCategory}
            />
          )
          )
        )
      }
    </div>
  );
};

export default Categories;