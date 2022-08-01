import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories, getActiveCategory, setActiveCategory } from '../actions/categoryActions';

import Category from '../components/Category';

const Categories = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('');
  const dispatch = useDispatch();

  const categoryList = useSelector(state => state.categoryList);
  const { loading, error, categories } = categoryList;

  const activeCategory = useSelector(state => state.activeCategory);
  if (!activeCategory.activeCategoryId && categories && categories.length) {
    const defaultCategory = categories.find(cat => cat.name === 'All');
    console.log(`all category info: ${JSON.stringify(defaultCategory)}`)
    dispatch(setActiveCategory(defaultCategory._id));
  }

  useEffect(() => {
    dispatch(listCategories());
    dispatch(getActiveCategory());
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
              isActive={activeCategoryId === cat._id ? true : activeCategoryId === '' && cat.name === 'All'}
              setActiveCategoryId={setActiveCategoryId}
            />
          )
          )
        )
      }
    </div>
  );
};

export default Categories;