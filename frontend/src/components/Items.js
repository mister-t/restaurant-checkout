import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listItems } from '../actions/itemActions';

import Panels from './Panels'
import Spinner from './Spinner';

const Items = () => {
  const dispatch = useDispatch();

  const itemList = useSelector(state => state.itemList);
  const { loading, error, items } = itemList;

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  return (
    <section className="w-screen mx-auto">
      {
        loading || !items.length ? <Spinner /> : error ? <h2>{error}</h2> : <Panels panels={items}/>
      }
      
    </section>
  )
}

export default Items