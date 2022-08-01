import { useState, useEffect } from 'react'
import Categories from './Categories'
import Panels from './Panels'

const Items = ({categoriesItems}) => {
  const [activeItems, setActiveItems] = useState([]);
  const [activeCats, setActiveCats] = useState([])
  const { categories, items:allItems } = categoriesItems;

  useEffect(() => {
    setActiveCats([
      {
        _id: String(Date.now() * -1),
        name: 'All',
        isActive: true,
        numOfTabs: categories.length + 1
      }, ...categories
    ]);

    setActiveItems(allItems);
  }, [categories, allItems])

  const setActiveCategory = (catId) => {
    const newCats = activeCats.map(cat => {
      cat._id === catId ? cat.isActive = true : cat.isActive = false;
      return cat;
    });
    setActiveCats(newCats);
    setItems(catId);
  };

  const setItems = (activeCatId) => {
    const newItems = activeCatId < 0 ? allItems : allItems.filter(item => {
      return item.category === activeCatId;
    });
    setActiveItems(newItems);
  };

  return (
    <section className="w-screen mx-auto">
      <Categories activeCats={activeCats} setActiveCategory={setActiveCategory} />
      <Panels panels={activeItems}/>
    </section>
  )
}

export default Items