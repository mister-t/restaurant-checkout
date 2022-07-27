import Category from '../components/category';

const Categories = ({categoriesItems}) => {
  const { categories } = categoriesItems;
  return (
    <div className="flex flex-col mx-auto mb-6 md:flex-row">
      {categories.map((cat, idx)=> <Category
        key={cat.id}
        isActive={idx === 0 ? true : false} id={cat.id}
        name={cat.name}
        numOfTabs={categories.length}/>)}
    </div>
  );
};

export default Categories;