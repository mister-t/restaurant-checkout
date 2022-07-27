import Category from '../components/Category';

const Categories = ({allCats, setActiveCategory}) => {

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