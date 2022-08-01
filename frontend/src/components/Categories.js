import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/categoryActions';

import Category from '../components/Category';
import Spinner from '../components/Spinner';

const Categories = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('');
  const dispatch = useDispatch();

  const categoryList = useSelector(state => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <div className="flex flex-col mx-auto mb-6 md:flex-row">
      {
        (loading || categories.length === 0) ? ( <Spinner />) : error ? (<h2>{error}</h2>) : (
          categories.map((cat, idx) => (
            <Category
              key={cat._id}
              catId={cat._id}
              catName={cat.name}
              isActive={activeCategoryId === cat._id}
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