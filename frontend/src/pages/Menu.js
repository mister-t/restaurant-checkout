import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/categoryActions';

import Items from '../components/Items';
import Orders from '../components/Orders';
import Spinner from '../components/Spinner';

const Menu = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector(state => state.categoryList);
  const { loading, error, categories } = categoryList;


  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <main className="relative min-h-screen bg-dark-chopping-board bg-no-repeat bg-cover bg-fixed" id="tabs">
      {
        (loading || categories.length === 0) ? ( <Spinner />) : error ? (<h2>{error}</h2>) : (
          <>
            <Items categoriesItems={categories} />
            <Orders />
          </>
        )

      }
    </main>
  )
};

export default Menu;