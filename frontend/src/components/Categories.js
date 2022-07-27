import Category from '../components/Category';

const Categories = ({categoriesItems}) => {
  const { categories } = categoriesItems;
  const allCategories = [
    {
      id: Date.now(),
      name: 'All',
      numOfTabs: categories.length + 1
    }, ...categories
  ];

  return (
    <div className="flex flex-col mx-auto mb-6 md:flex-row">
      {allCategories.map((cat, idx)=> <Category
        key={cat.id}
        catId={cat.id}
        catName={cat.name}
        numOfTabs={allCategories.length}/>)}
    </div>
  );
};

export default Categories;