import { useState, useEffect } from 'react'
import Categories from './Categories'
import Panels from './Panels'

const Items = ({categoriesItems}) => {
  const [activeItems, setActiveItems] = useState([]);
  const [activeCats, setActiveCats] = useState([])
  const { categories, items:allItems } = categoriesItems;

  useEffect(() => {
    const id = Date.now() * -1;
    setActiveCats([
      {
        id,
        name: 'All',
        isActive: true,
        numOfTabs: categories.length + 1
      }, ...categories
    ]);

    setActiveItems(allItems);
  }, [categories, allItems])

  const setActiveCategory = (catId) => {
    const normalizedCatId = Number(catId);
    const newCats = activeCats.map(cat => {
      if (cat.id === normalizedCatId) {
        // console.log('found categorty id: %s', catId)
        cat.isActive = true;
      } else {
        cat.isActive = false;
      }
      return cat;
    });
    setActiveCats(newCats);
    setItems(normalizedCatId);
  };

  const setItems = (activeCatId) => {
    console.log('current cat id: %s', activeCatId)
    const newItems = activeCatId < 0 ? allItems : allItems.filter(item => {
      const {category_id: itemCatId } = item;
      return itemCatId === activeCatId;
    });
    // console.log('item cat ID: %s', activeCatId)
    // console.log(newItems)
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