import Category from '../components/Category';

const Categories = ({categoriesItems}) => {
  const { categories } = categoriesItems;
  const allCategories = [
    {
      id: Date.now(),
      name: 'All',
      isActive: true,
      numOfTabs: categories.length + 1
    }, ...categories
  ];

  return (
    <div className="flex flex-col mx-auto mb-6 md:flex-row">
      {allCategories.map((cat, idx) => (
        <Category
          key={cat.id}
          catId={cat.id}
          catName={cat.name}
          isActive={cat.isActive}
          numOfTabs={allCategories.length}/>))
      }
    </div>
  );
};

export default Categories;