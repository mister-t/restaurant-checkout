import { useState, useEffect } from 'react'
import Categories from './Categories'
import Panels from './Panels'

const Items = ({categoriesItems}) => {
  const [activeItems, setActiveItems] = useState([]);
  const [activeCats, setActiveCats] = useState([])
  const { categories, items:allItems } = categoriesItems;

  useEffect(() => {
    const _id = Date.now() * -1;
    setActiveCats([
      {
        _id,
        name: 'All',
        isActive: true,
        numOfTabs: categories.length + 1
      }, ...categories
    ]);

    setActiveItems(allItems);
  }, [categories, allItems])

  const setActiveCategory = (catId) => {
    const newCats = activeCats.map(cat => {
      if (cat._id == catId) {
        cat.isActive = true;
      } else {
        cat.isActive = false;
      }
      return cat;
    });
    setActiveCats(newCats);
    setItems(catId);
  };

  const setItems = (activeCatId) => {
    console.log('current cat id: %s', activeCatId)
    const newItems = activeCatId < 0 ? allItems : allItems.filter(item => {
      const {category} = item;
      return category == activeCatId;
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