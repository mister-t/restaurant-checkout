import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/categoryActions';

import Category from '../components/Category';
import Spinner from '../components/Spinner';

const Categories = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector(state => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  const setActiveCategory = (catId) => {
    // const newCats = activeCats.map(cat => {
    //   cat._id === catId ? cat.isActive = true : cat.isActive = false;
    //   return cat;
    // });
    // setActiveCats(newCats);
    // setItems(catId);
  };

  return (
    <div className="flex flex-col mx-auto mb-6 md:flex-row">
      {
        (loading || categories.length === 0) ? ( <Spinner />) : error ? (<h2>{error}</h2>) : (
          categories.map((cat, idx) => (
            <Category
              key={cat._id}
              catId={cat._id}
              catName={cat.name}
              isActive={cat.isActive}
              setActiveCategory={setActiveCategory}
              />))
        )
      }
    </div>
  );
};

export default Categories;