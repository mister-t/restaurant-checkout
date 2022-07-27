import { useState, useEffect } from 'react'
import Categories from './Categories'
import Panels from './Panels'

const Items = ({categoriesItems}) => {
  const [activeItems, setActiveItems] = useState([]);
  const [activeCats, setActiveCats] = useState([])
  const { categories, items } = categoriesItems;

  useEffect(() => {
    setActiveCats([
      {
        id: Date.now() * -1,
        name: 'All',
        isActive: true,
        numOfTabs: categories.length + 1
      }, ...categories
    ]);

    setActiveItems(items);
  }, [categories, items])

  const setActiveCategory = (catId) => {
    setActiveCats(activeCats.map(cat => {
      if (cat.id === Number(catId)) {
        console.log('found categorty id: %s', catId)
        cat.isActive = true;
      } else {
        cat.isActive = false;
      }
      return cat;
    }));
  };

  const setItems = (activeCatId) => {
    setActiveItems(activeItems.map(item => {
      const {category_id: itemCatId } = item;
      if (itemCatId === Number(activeCatId)) {
        return item;
      } 
      return null;
    }));
  };

  return (
    <section className="w-screen mx-auto">
      <Categories activeCats={activeCats} setActiveCategory={setActiveCategory} categoriesItems={categoriesItems} />
      <Panels setItems={setItems} panels={activeItems}/>
    </section>
  )
}

export default Items