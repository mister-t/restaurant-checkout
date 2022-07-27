import React, { useState, useEffect } from 'react';
import Category from '../components/Category';

const Categories = ({categoriesItems}) => {
  const { categories } = categoriesItems;
  const [allCats, setAllCats] = useState([])

  useEffect(() => {
    setAllCats([
      {
        id: Date.now() * -1,
        name: 'All',
        isActive: true,
        numOfTabs: categories.length + 1
      }, ...categories
    ]);
  }, [categories])

  const setActiveCategory = (catId) => {
    setAllCats(allCats.map(cat => {
      if (cat.id == catId) {
        console.log('found categorty id: %s', catId)
        cat.isActive = true;
      } else {
        cat.isActive = false;
      }
      return cat;
    }));
  };

  return (
    <div className="flex flex-col mx-auto mb-6 md:flex-row">
      {allCats.map((cat, idx) => (
        <Category
          key={cat.id}
          catId={cat.id}
          catName={cat.name}
          isActive={cat.isActive}
          numOfTabs={allCats.length}
          setActiveCategory={setActiveCategory}
          />))
      }
    </div>
  );
};

export default Categories;