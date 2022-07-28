import { useState, useEffect } from 'react';
import axios from 'axios';

import Items from '../components/Items';
import Orders from '../components/Orders';

const Menu = () => {
  const [categoriesItems, setCategoriesItems] = useState();

  useEffect(() => {
    const fetchCatsItems = async () => {
      const result = await axios.get('/api/categories/items');
      setCategoriesItems(result.data);
    };

    fetchCatsItems();
  }, []);

  if (!categoriesItems) {
    return <>Loading...</>
  }

  return (
    <main className="relative min-h-screen bg-dark-chopping-board bg-no-repeat bg-cover bg-fixed" id="tabs">
      <Items categoriesItems={categoriesItems} />
      <Orders />
    </main>
  )
};

export default Menu;