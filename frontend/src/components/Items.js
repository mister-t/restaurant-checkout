import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listItems } from '../actions/itemActions';
import { getActiveCategory } from '../actions/categoryActions';

import { DEFAULT_CATEGORY_NAME } from '../constants';

import Panels from './Panels'
import Spinner from './Spinner';

const Items = () => {
  const dispatch = useDispatch();

  const itemList = useSelector(state => state.itemList);
  const { loading, error, items } = itemList;

  const activeCategory = useSelector(state => state.activeCategory);
  let defaultCategoryId;
  if (activeCategory && !activeCategory.activeCategoryId) {
    //when no active category is set, list 'All' items
    defaultCategoryId = null;
  } else if (activeCategory && activeCategory.activeCategoryId && activeCategory.activeCategoryName.toLowerCase() !== DEFAULT_CATEGORY_NAME.toLowerCase()) {
    defaultCategoryId = activeCategory.activeCategoryId;
  }

  useEffect(() => {
    dispatch(listItems(defaultCategoryId));
    dispatch(getActiveCategory());
  }, [dispatch, defaultCategoryId]);

  return (
    <section className="w-screen mx-auto">
      {
        loading || !items.length ? <Spinner /> : error ? <h2>{error}</h2> : <Panels panels={items} />
      }

    </section>
  )
}

export default Items